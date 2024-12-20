
const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = prompt("Угадайте число от 1 до 10:");

if (parseInt(userGuess) === randomNumber) {
  alert("Поздравляем! Вы угадали число!");
} else {
  if (parseInt(userGuess) < 5) {
    alert("Вы не угадали. Ваше число меньше 5.");
  } else {
    alert("Вы не угадали. Ваше число больше 5.");
  }
}
console.log(`Загаданное число: ${randomNumber}, введенное пользователем: ${userGuess}`);