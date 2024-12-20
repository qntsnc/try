const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const operator = prompt("Введите оператор (+, -, *, /):");

if (operator === "+") {
  alert(`Результат: ${num1 + num2}`);
  console.log(`Результат: ${num1 + num2}`);
} else if (operator === "-") {
  alert(`Результат: ${num1 - num2}`);
  console.log(`Результат: ${num1 - num2}`);
} else if (operator === "*") {
  alert(`Результат: ${num1 * num2}`);
  console.log(`Результат: ${num1 * num2}`);
} else if (operator === "/") {
  if (num2 !== 0) {
    alert(`Результат: ${num1 / num2}`);
    console.log(`Результат: ${num1 / num2}`);
  } else {
    alert("Деление на ноль невозможно.");
    console.log("Деление на ноль невозможно.");
  }
} else {
  alert("Неверный оператор.");
  console.log("Неверный оператор.");
}