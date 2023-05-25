const image1 = document.getElementById("program");
const arrow1 = document.getElementById("arrowOne");
const image2 = document.getElementById("engine");
const arrow2 = document.getElementById("arrowTwo");
const image3 = document.getElementById("language");
const arrow3 = document.getElementById("arrowThree");

function showInfo(image, arrow) {
  if (image.style.display === "block") {
    image.style.display = "none"
    arrow.style.transform = "rotate(0deg)";
  } else {
    image.style.display = "block";
    arrow.style.transform = "rotate(90deg)";
  }
}

function showProgram() {
  showInfo(image1, arrow1)
}

function showEngine() {
  showInfo(image2, arrow2)
}

function showLanguage() {
  showInfo(image3, arrow3)
}