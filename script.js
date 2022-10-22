const offices = document.querySelector("#offices");
const locations = document.querySelectorAll(".locations");

// these variables target my records-box
const recordsBox = document.querySelector("#records-box");

offices.addEventListener("click", function (event) {
  if (event.target.value === "office-1") {
    locations[1].style.display = "none"; //hides office 2
    locations[0].style.display = "block";
  } else if (event.target.value === "office-2") {
    locations[0].style.display = "none"; //hides office 1
    locations[1].style.display = "block";
  } else {
    locations[0].style.display = "none";
    locations[1].style.display = "none";
  }
});

// event listener for records-box
recordsBox.addEventListener("click", function (event) {
  if (event.target.tagName === "FIGURE") {
    event.target.children[0].className = "checkmark";
  }
});
