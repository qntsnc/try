const correctPassword = "12345677";
const userPassword = prompt("Введите пароль:");

if (userPassword) {
  if (userPassword === correctPassword) {
    alert("Доступ разрешен.");
    console.log("Доступ разрешен.");
  } else {
    alert("Доступ запрещен.");
    console.log("Доступ запрещен.");
  }
} else {
  alert("Пароль не может быть пустым.");
  console.log("Пароль не может быть пустым.");
}