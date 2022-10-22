const offices = document.querySelector("#offices");
const locations = document.querySelector(".locations");

// these variables target my records-box
const recordsBox = document.querySelector("#records-box");

offices.addEventListener("click", function (event) {
  if (event.target.value === "office-1") {
  } else if (event.target.value === "office-2") {
  }
});

// event listener for records-box
recordsBox.addEventListener("click", function (event) {
  if (event.target.tagName === "FIGURE") {
    event.target.children[0].className = "checkmark";
  }
});
