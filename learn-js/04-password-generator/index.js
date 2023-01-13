//prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstDisplay = document.getElementById("password-one");
let secondDisplay = document.getElementById("password-two");
let passwordOne = "";
let passwordTwo = "";
let wantSymbols = false;
let wantNumbers = false;

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

//generates a random 15 letter long password
function displayPasswords() {
  checkboxCheck();
  resetPasswords();
  generatePasswords();

  firstDisplay.textContent = passwordOne;
  secondDisplay.textContent = passwordTwo;
}

function checkboxCheck() {
  wantSymbols = document.getElementById("allow-symbols").checked;
  wantNumbers = document.getElementById("allow-numbers").checked;
}

function customizePassword() {
  if (wantSymbols && wantNumbers) {
    return characters;
  } else if (wantSymbols) {
    let newArray = characters.slice(0);
    newArray.splice(52, 10);
    return newArray;
  } else if (wantNumbers) {
    return characters.slice(0, 62);
  } else {
    return characters.slice(0, 52);
  }
}

function generatePasswords() {
  console.log(customizePassword());
  const charactersArray = customizePassword();
  for (let i = 0; i < 15; i++) {
    passwordTwo += charactersArray[randomNumber(charactersArray)];
    passwordOne += charactersArray[randomNumber(charactersArray)];
  }
}

function resetPasswords() {
  passwordOne = "";
  passwordTwo = "";

  firstDisplay.textContent = "";
  secondDisplay.textContent = "";
}
