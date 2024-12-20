
const name = prompt("Введите ваше имя:");
const age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Тебе ${age} лет.`);
console.log(`Привет, ${name}! Тебе ${age} лет.`);

if (age >= 18) {
  alert("Вы совершеннолетний.");
  console.log("Вы совершеннолетний.");
} else {
  alert("Вы несовершеннолетний.");
  console.log("Вы несовершеннолетний.");
}