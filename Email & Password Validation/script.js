const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const createPasswordField = form.querySelector(".create-password-field");
const confirmPasswordField = form.querySelector(".confirm-password-field");
const email = emailField.querySelector(".email");
const createPassword = createPasswordField.querySelector(".create-password");
const confirmPassword = confirmPasswordField.querySelector(".confirm-password");

// Email Validation
function emailValidation() {
    const emailPattern = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
    if (!email.value.match(emailPattern)) {
        emailField.classList.add("invalid");
    } else {
        emailField.classList.remove("invalid");
        emailField.classList.add("valid");
    }
}

// Hide and Show Password
const eyeIcons = form.querySelectorAll(".eye-icon");
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const passwordInput = eyeIcon.parentElement.querySelector("input");
        if (passwordInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            passwordInput.type = "text";
        } else {
            eyeIcon.classList.replace("bx-show", "bx-hide");
            passwordInput.type = "password";
        }
    })
});

// Password Validation
function createPasswordValidation() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+$@!%*?&])[A-Za-z\d+$@!%*?&]{8,}$/;
    if (!createPassword.value.match(passwordPattern)) {
        createPasswordField.classList.add("invalid");
    } else {
        createPasswordField.classList.remove("invalid");
        createPasswordField.classList.add("valid");
    }

}

// Confirm Password Validation
function confirmPasswordValidation() {
    if (createPassword.value !== confirmPassword.value || confirmPassword.value === "") {
        confirmPasswordField.classList.add("invalid");
    } else {
        confirmPasswordField.classList.remove("invalid");
        confirmPasswordField.classList.add("valid");
    }
}

// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailValidation();
    createPasswordValidation();
    confirmPasswordValidation();

    // Calling function on input events
    email.addEventListener("input", () => {
        emailValidation();
    });

    createPassword.addEventListener("input", () => {
        createPasswordValidation();
    });

    confirmPassword.addEventListener("input", () => {
        confirmPasswordValidation();
    });

    // Check if all fields are valid before submitting the form
    if (!emailField.classList.contains("invalid") && !createPasswordField.classList.contains("invalid") && !confirmPasswordField.classList.contains("invalid")) {
        alert("Form submitted successfully!");
        location.href = form.getAttribute("action");
    }
});