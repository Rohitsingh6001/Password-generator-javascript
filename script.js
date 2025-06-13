let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
     sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
     passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"

// function to generate Password
function generatePassword() {
     let genPassword = "";
     let allChars = "";

     allChars += lowercase.checked ? lowerChars : "";
     allChars += uppercase.checked ? upperChars : "";
     allChars += number.checked ? allNumbers : "";
     allChars += symbols.checked ? allSymbols : "";

     if (allChars == " " || allChars.length == 0) {
          return genPassword;
     }

     let i = 1;
     while (i <= inputSlider.value) {
          genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
          i++;
     }
     return genPassword;

}