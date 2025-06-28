const button = document.getElementById("button");
const copyButton = document.getElementById("copyBtn");
const passwordBox = document.getElementById("password");


const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

button.onclick = createPassword;


function copyPassword() {

    const password = passwordBox.value;
    if(!password){
        alert("Please generate a password first!");
    }

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy password:", err);
        });
}


copyButton.onclick = copyPassword;

