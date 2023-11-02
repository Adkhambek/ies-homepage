const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.querySelector(".dropdown__icon");

dropdown.addEventListener("mouseenter", () => {
  dropdownIcon.src = "./images/icons/arrow-up.svg";
  dropdownMenu.classList.add("show");
});

dropdown.addEventListener("mouseleave", (e) => {
  dropdownIcon.src = "./images/icons/arrow-down.svg";
  dropdownMenu.classList.remove("show");
});
