// ===========================
// CONTACT FORM VALIDATION
// ===========================

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const phoneInput = form.querySelector('input[type="tel"]');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // Empty Fields Check
        if (name === "" || email === "" || phone === "") {
            alert("Please fill all fields.");
            return;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation (10 digits)
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert("Message Sent Successfully!");

        form.reset();
    });
}

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});

// ===========================
// HERO IMAGE ANIMATION
// ===========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.05)";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1)";
    });

}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements = document.querySelectorAll(
    ".card, .skill, .hero-content, .hero-image, #About p"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Initial Style
revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===========================
// CURRENT YEAR IN FOOTER
// ===========================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} All Rights Reserved | Jyoti Kumari Gupta`;
}