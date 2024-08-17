const display = document.getElementById("display");
let shouldReplace = false;

function displayValue(input, type) {
  if (shouldReplace == true && type == "number") {
    display.value = input;
  } else {
    display.value += input;
  }
  shouldReplace = false;
}

function resetButton() {
  display.value = "0";
  shouldReplace = true;
}

function equalTo() {
  try {
    const displayNew = display.value.split("x").join("*");
    display.value = eval(displayNew);
    shouldReplace = true;
  } catch (err) {
    display.value = "Error";
  }
}

function deleteValue() {
  const deleteVal = display.value;
  display.value = deleteVal.slice(0, -1);
}
