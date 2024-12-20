document.addEventListener("DOMContentLoaded", () => {

    const heading = document.querySelector("h1");
    heading.addEventListener("click", () => {
      alert("Вы кликнули на заголовок - так держать!");
    });
  

    const practicesTable = document.querySelector("#practicesTable tbody");
    const changeSemesterBtn = document.getElementById("changeSemesterBtn");
  
    changeSemesterBtn.addEventListener("click", () => {
      const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
      ];
  
      practicesTable.innerHTML = secondSemesterPractices
        .map((practice, index) => `<tr><td>${index + 1}</td><td>${practice}</td></tr>`)
        .join("");
    });
  

    const studentPhoto = document.getElementById("studentPhoto");
  

    studentPhoto.addEventListener("mouseover", () => {
      studentPhoto.style.transform = "scale(1.1)";
    });
  

    studentPhoto.addEventListener("mouseout", () => {
      studentPhoto.style.transform = "scale(1)";
    });
  

    studentPhoto.addEventListener("click", () => {
      studentPhoto.src = "Злая училка.jpeg"; 
    });
  

    studentPhoto.addEventListener("dblclick", () => {
      alert("Не налегай, у меня не так много любимых преподавателей");
    });
  });