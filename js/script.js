/* ==================== ELEMENTS ==================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const navbar = document.getElementById("navbar");

const themeToggle = document.getElementById("themeToggle");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const year = document.getElementById("year");


/* ==================== MOBILE MENU ==================== */

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


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ==================== NAVBAR SCROLL ==================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==================== DARK / LIGHT THEME ==================== */

/*
    Check whether the user previously selected
    a theme.
*/

const savedTheme =
    localStorage.getItem("novatech-theme");


/*
    Apply saved dark theme.
*/

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

}


/*
    Update the theme button icon and accessibility
    information.
*/

function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");

    const isDark =
        document.body.classList.contains("dark-theme");


    if (isDark) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }


    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
    );


    themeToggle.setAttribute(
        "title",
        isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
    );

}


/*
    Set the correct icon when the page loads.
*/

updateThemeIcon();


/*
    Toggle theme when the user clicks the button.
*/

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");


    const isDark =
        document.body.classList.contains("dark-theme");


    /*
        Save the selected theme.
    */

    localStorage.setItem(
        "novatech-theme",
        isDark ? "dark" : "light"
    );


    /*
        Update moon/sun icon.
    */

    updateThemeIcon();

});


/* ==================== CONTACT FORM ==================== */

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const subject =
        document.getElementById("subject");

    const message =
        document.getElementById("message");


    let valid = true;


    /*
        Clear previous errors.
    */

    document
        .querySelectorAll(".error-message")
        .forEach((error) => {

            error.textContent = "";

        });


    /*
        Error helper function.
    */

    const showError = (input, text) => {

        input.nextElementSibling.textContent =
            text;

        valid = false;

    };


    /* Name validation */

    if (name.value.trim().length < 2) {

        showError(
            name,
            "Please enter your name."
        );

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.value.trim())) {

        showError(
            email,
            "Please enter a valid email."
        );

    }


    /* Subject validation */

    if (subject.value.trim().length < 3) {

        showError(
            subject,
            "Please enter a subject."
        );

    }


    /* Message validation */

    if (message.value.trim().length < 10) {

        showError(
            message,
            "Message must contain at least 10 characters."
        );

    }


    /* Stop if validation failed */

    if (!valid) {

        formStatus.textContent =
            "Please correct the highlighted fields.";

        formStatus.className =
            "form-status error";

        return;

    }


    /*
        Demo success message.

        This does not actually send an email.
    */

    formStatus.textContent =
        "Thank you! This demo form is working on the frontend. Connect it to a backend or form service to receive real submissions.";

    formStatus.className =
        "form-status success";


    /*
        Clear form.
    */

    contactForm.reset();

});


/* ==================== FOOTER YEAR ==================== */

year.textContent =
    new Date().getFullYear();