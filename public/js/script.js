/* ===========================================
   SG Companies - script.js
   =========================================== */

// =======================
// AOS Animation
// =======================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});


// =======================
// Sticky Navbar
// =======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =======================
// Active Navigation Link
// =======================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});


// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =======================
// Back To Top Button
// =======================

const backTop = document.createElement("button");

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backTop.id = "backToTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.right = "25px";
backTop.style.bottom = "25px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.border = "none";
backTop.style.borderRadius = "50%";
backTop.style.background = "#198754";
backTop.style.color = "#fff";
backTop.style.fontSize = "18px";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.zIndex = "9999";
backTop.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// =======================
// Counter Animation
// =======================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => counterObserver.observe(counter));


// =======================
// Image Hover Zoom
// =======================

document.querySelectorAll(".product-img img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = ".5s";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// =======================
// Gallery Filter
// =======================

const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// =======================
// Contact Form Validation
// =======================

const form = document.querySelector("#contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const message = document.querySelector("#message").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            e.preventDefault();

            alert("Please fill all required fields.");

        }

    });

}


// =======================
// Loader
// =======================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// =======================
// Current Year in Footer
// =======================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =======================
// Console Message
// =======================

console.log("SG Companies Website Loaded Successfully");