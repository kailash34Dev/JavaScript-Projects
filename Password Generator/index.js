const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector(".generate-btn");
const copyIcon = document.querySelector(".fa-copy");
const error = document.querySelector(".error");
const passwordLength = 14;
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    error.style.display = "none";
    let allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordBox.value = password;
}

function copyText() {
    if (passwordBox.value === "") {
        error.style.display = "block";
    } else {
        navigator.clipboard.writeText(passwordBox.value);
        copyIcon.classList.replace("fa-regular", "fa-solid");
        copyIcon.classList.add("copied");
        setTimeout(() => {
            copyIcon.classList.replace("fa-solid", "fa-regular");
            copyIcon.classList.remove("copied");
        }, 1500);
    }
}

generateBtn.addEventListener("click", () => {
    generatePassword();
});

copyIcon.addEventListener("click", () => {
    copyText();
});