const userInput = document.getElementById("number--input");
const convertBtn = document.getElementById("convert--btn");
const lengthSection = document.getElementById("conversion--length");
const volumeSection = document.getElementById("conversion--volume");
const massSection = document.getElementById("conversion--mass");
const lengthFormula = 3.28084;
const volumeFormula = 0.264172;
const massFormula = 2.20462;

convertBtn.addEventListener("click", () => {
  let conversion = [
    convertLength(userInput.value),
    convertVolume(userInput.value),
    convertMass(userInput.value),
  ];
  console.log(conversion);
  renderConversions(conversion, userInput.value);
});

function renderConversions(arr, num) {
  lengthSection.textContent = `
    ${num} meters = ${arr[0][0]} feet | 
    ${num} feet = ${arr[0][1]} meters 
  `;

  volumeSection.textContent = `
  ${num} liters = ${arr[1][0]} gallons | 
  ${num} gallons = ${arr[1][1]} liters 
  `;

  massSection.textContent = `
  ${num} kilos = ${arr[2][0]} pounds | 
  ${num} pounds = ${arr[2][1]} kilos 
  `;
}

function convertLength(num) {
  let feet = (num * lengthFormula).toFixed(3);
  let meter = (num / lengthFormula).toFixed(3);

  return [feet, meter];
}

function convertVolume(num) {
  let liter = (num * volumeFormula).toFixed(3);
  let gallon = (num / volumeFormula).toFixed(3);
  console.log(gallon);
  return [liter, gallon];
}

function convertMass(num) {
  let kilogram = (num * massFormula).toFixed(3);
  let pound = (num / massFormula).toFixed(3);

  return [kilogram, pound];
}
