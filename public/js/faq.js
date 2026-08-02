document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");

        questionBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all open items (Smooth Accordion Pattern)
            faqItems.forEach(innerItem => {
                innerItem.classList.remove("active");
                innerItem.querySelector(".faq-answer").style.maxHeight = null;
            });

            // Toggle selected element status 
            if (!isActive) {
                item.classList.add("active");
                const answerContainer = item.querySelector(".faq-answer");
                // Dynamically match scrollHeight values for fluid expansion frame calculations
                answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
            }
        });

        // Ensure initially marked 'active' entries calculate layout correctly on first window load 
        if(item.classList.contains("active")) {
            const openAnswer = item.querySelector(".faq-answer");
            openAnswer.style.maxHeight = openAnswer.scrollHeight + "px";
        }
    });
});