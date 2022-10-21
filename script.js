const offices = document.querySelector("#offices");
const locations = document.querySelector(".locations");

// these variables target my records-box
const recordsBox = document.querySelector("#records-box");
const personalIcon = document.querySelector("#personal-icon");
const allergiesIcon = document.querySelector("#allergies-icon");
const shotsIcon = document.querySelector("#shots-icon");
const medicationsIcon = document.querySelector("#medications-icon");

offices.addEventListener("click", function (event) {
  if (event.target.value === "office-1") {
  } else if (event.target.value === "office-2") {
  }
});

// event listener for records-box
recordsBox.addEventListener("click", function (event) {
  if (event.target.tagName != "FIGURE") {
    const figureElement = event.target.parentElement;
    const iconElement = figureElement.children[0];
    iconElement.className = "checkmark";
  } else if (event.target.tagName === "FIGURE") {
  }
});
