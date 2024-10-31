// animations.js

const usernamePlaceholder = "Enter your username";
const passwordPlaceholder = "Enter your password";

function typePlaceholder(input, text, speed = 100) {
    let index = 0;
    input.placeholder = "";
    const type = () => {
        if (index < text.length) {
            input.placeholder += text[index];
            index++;
            setTimeout(type, speed);
        }
    };
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    typePlaceholder(usernameInput, usernamePlaceholder, 80);
    usernameInput.addEventListener("focus", () => {
        typePlaceholder(usernameInput, usernamePlaceholder, 80);
    });

    typePlaceholder(passwordInput, passwordPlaceholder, 80);
    passwordInput.addEventListener("focus", () => {
        typePlaceholder(passwordInput, passwordPlaceholder, 80);
    });
});
