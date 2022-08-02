let previousOutput = document.querySelector(".previous");
let currentOutput = document.querySelector(".current");
let numbers = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation");

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    let currentOutputValue = currentOutput.textContent + e.target.textContent;
    currentOutput.textContent = currentOutputValue;
  });
});
