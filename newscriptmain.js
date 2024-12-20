
  document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    h1.addEventListener("mouseover", () => {
      h1.style.transition = "transform 0.3s ease";
      h1.style.transform = "scale(1.2)";
    });
    h1.addEventListener("mouseout", () => {
      h1.style.transform = "scale(1)";
    });


    document.querySelectorAll("p").forEach(paragraph => {
      paragraph.addEventListener("click", () => {
        paragraph.style.transition = "background-color 0.3s ease";
        paragraph.style.backgroundColor =
          paragraph.style.backgroundColor === "lightblue" ? "white" : "lightblue";
      });
    });



    const studentPhoto = document.querySelector(".rotating-image");
    if (studentPhoto) {
      studentPhoto.addEventListener("mouseover", () => {
        studentPhoto.style.transition = "transform 0.6s ease";
        studentPhoto.style.transform = "rotate(360deg)";
      });
      studentPhoto.addEventListener("mouseout", () => {
        studentPhoto.style.transition = "transform 0.6s ease";
        studentPhoto.style.transform = "rotate(0deg)";
      });
    }
  });
