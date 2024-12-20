
function showMessage(message) {
    console.log(message);
  }
  

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  

  function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
      console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
  }
  

  function updateHeaderWithUTM() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get("utm_term");
    const header = document.querySelector("h1");
    if (header && utmTerm) {
      header.textContent = utmTerm;
    }
  }

showMessage("Скрипт загружен!");


function logCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  console.log(`Текущее время: ${timeString}`);
}


logCurrentTime();


document.addEventListener("DOMContentLoaded", () => {
  function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
  }


  resetBackgroundColor();


  changeBackgroundColor("lightblue");


  toggleVisibility(".content");


  updateHeaderWithUTM();
});