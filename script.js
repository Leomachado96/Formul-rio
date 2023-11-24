
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const dataNasc = document.getElementById("dataNasc");
const sexoM = document.getElementById("sexoM");
const sexoF = document.getElementById("sexoF");
const job = document.getElementById("job");
const first = document.getElementById("first");
const education = document.getElementById("education");
const message = document.getElementById("hab");
const exp = document.getElementById("exp");
const you = document.getElementById("you");
const password = document.getElementById("password");
const PasswordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    checkInputUsername()
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha esse campo!")
    }
}


function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a").value

    textMessage.innerText = message;

    formItem.className = "form-content error"
}


