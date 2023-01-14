const userInput = document.getElementById("number--input");
const convertBtn = document.getElementById("convert--btn");
const lengthSection = document.getElementById("conversion--length");
const volumeSection = document.getElementById("conversion--volume");
const massSection = document.getElementById("conversion--mass");
const lengthFormula = 3.28084;
const volumeFormula = 0.264172;
const massFormula = 2.20462;

convertBtn.addEventListener("click", () => {
  let conversion = convertLength(userInput.value);
  conversion.push(convertVolume(userInput.value));
  conversion.push(convertMass(userInput.value));
  renderConversions(conversion, userInput.value);
});

function renderConversions(arr, num) {
  lengthSection.textContent = `
    ${num} meters = ${arr[0]} | 
    ${num} feet = ${arr[1]} meters 
  `;

  volumeSection.textContent = `
  ${num} liters = ${arr[2]} | 
  ${num} gallons = ${arr[3]} liters 
  `;

  massSection.textContent = `
  ${num} kilos = ${arr[4]} | 
  ${num} pounds = ${arr[5]} kilos 
  `;
}

function convertLength(num) {
  let feet = num * lengthFormula;
  let meter = num / lengthFormula;

  return [feet, meter];
}

function convertVolume(num) {
  let liter = num * volumeFormula;
  let gallon = num / volumeFormula;

  return [liter, gallon];
}

function convertMass(num) {
  let kilogram = num * massFormula;
  let pound = num / massFormula;

  return [kilogram, pound];
}
