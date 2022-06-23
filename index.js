const buttons = document.querySelectorAll("button");
const values = document.getElementById("values");
// const result = document.getElementById("result");
console.log(buttons);
let operation = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const { value } = button;
    console.log(value);
    makeOperations(value);
  });
});

const getResult = (operationValues) => {
  if (!/[\+\-\*\/]/gm.test(operationValues[operationValues.length - 1])) {
    return eval(operationValues);
  }

  const result = operationValues.slice(0, -1);
  return eval(result);
};

const makeOperations = (value) => {
  switch (value) {
    case "c":
      values.innerHTML = "";
      operation = "";
      break;

    case "del":
      const newOperation = operation.slice(0, -1);
      values.innerHTML = newOperation;
      operation = newOperation;
      break;

    case "=":
      const res = getResult(operation.trim());
      values.innerHTML = res;
      operation = res;
      break;

    default:
      values.innerHTML += `${value} `;
      operation += value;
      break;
  }
};
