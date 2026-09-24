const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let valid = true;

    document.querySelectorAll(".error-message").forEach((error) => {
        error.textContent = "";
    });

    const showError = (input, text) => {
        input.nextElementSibling.textContent = text;
        valid = false;
    };

    if (name.value.trim().length < 2) {
        showError(name, "Please enter your name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email.");
    }

    if (subject.value.trim().length < 3) {
        showError(subject, "Please enter a subject.");
    }

    if (message.value.trim().length < 10) {
        showError(message, "Message must contain at least 10 characters.");
    }

    if (!valid) {
        formStatus.textContent = "Please correct the highlighted fields.";
        formStatus.className = "form-status error";
        return;
    }

    formStatus.textContent =
        "Thank you! This demo form is working on the frontend. Connect it to a backend or form service to receive real submissions.";
    formStatus.className = "form-status success";

    contactForm.reset();
});

year.textContent = new Date().getFullYear();
