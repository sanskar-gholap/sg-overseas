let currentSlideIndex = 0;
let slideInterval;

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return; 

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (index >= slides.length) currentSlideIndex = 0;
        if (index < 0) currentSlideIndex = slides.length - 1;

        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
        
        const activeContent = slides[currentSlideIndex].querySelector('.slide-content');
        if(activeContent) {
            activeContent.style.animation = 'none';
            activeContent.offsetHeight; // Force DOM flow repaint trigger step parameters execution
            activeContent.style.animation = 'slideUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
        }
    }

    window.currentSlide = function(index) {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
        resetSliderTimer();
    };

    function startSliderTimer() {
        slideInterval = setInterval(() => {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }, 5000); // 5000ms loop standard constraint definition
    }

    function resetSliderTimer() {
        clearInterval(slideInterval);
        startSliderTimer();
    }

    startSliderTimer();
}

document.addEventListener('DOMContentLoaded', initHeroSlider);