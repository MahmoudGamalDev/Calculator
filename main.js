let previousOutput = document.querySelector(".previous");
let currentOutput = document.querySelector(".current");
let numbers = document.querySelectorAll(".num");
let dot = document.querySelector(".dot");
let operations = document.querySelectorAll(".operation");

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (currentOutput.textContent.endsWith(".") && e.target === dot) {
      e.preventDefault();
    } else {
      let currentOutputValue = currentOutput.textContent + e.target.textContent;
      currentOutput.textContent = currentOutputValue;
    }
  });
});

operations.forEach((op) => {
  op.addEventListener("click", (e) => {
    let operation = e.target.textContent;

    if (operation === "DEL") {
      currentOutput.textContent = currentOutput.textContent.slice(
        0,
        currentOutput.textContent.length - 1
      );
    }

    if (
      operation === "-" ||
      operation === "+" ||
      operation === "*" ||
      operation === "/"
    ) {
      if (previousOutput.textContent.includes("=")) {
        previousOutput.textContent = currentOutput.textContent + operation;
        currentOutput.textContent = "";
      } else if (
        previousOutput.textContent !== "" &&
        currentOutput.textContent === ""
      ) {
        e.preventDefault();
      } else {
        previousOutput.textContent += currentOutput.textContent + operation;
        currentOutput.textContent = "";
      }
    }

    if (operation === "=") {
      if (
        previousOutput.textContent !== "" &&
        currentOutput.textContent !== "" &&
        !previousOutput.textContent.includes("=")
      ) {
        previousOutput.textContent += currentOutput.textContent + operation;
        currentOutput.textContent = eval(
          previousOutput.textContent.slice(0, -1)
        );
      }
    }

    if (operation === "AC") {
      previousOutput.textContent = "";
      currentOutput.textContent = "";
    }
  });
});