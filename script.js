//office options
const newportOption = document.querySelector("option[value='newport']");
const costaMesaOption = document.querySelector("option[value='costa-mesa']");

//office info elements
const newportOffice = document.querySelector("#newport-office");
const costaMesaOffice = document.querySelector("#costa-mesa-office");

newportOption.addEventListener("click", function (event) {
  if (costaMesaOffice.style.display === "block") {
    costaMesaOffice.style.display = "none";
  }
  newportOffice.style.display = "block";
});

costaMesaOption.addEventListener("click", function (event) {
  if (newportOffice.style.display === "block") {
    newportOffice.style.display = "none";
  }
  costaMesaOffice.style.display = "block";
});
