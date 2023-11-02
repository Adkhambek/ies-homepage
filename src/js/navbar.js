const navbarItem = document.querySelectorAll(".navbar__item");

navbarItem.forEach((dropdown) => {
  const menu = dropdown.querySelector(".dropdown__menu");
  const icon = dropdown.querySelector(".dropdown__icon--navbar");
  dropdown.addEventListener("mouseenter", (e) => {
    icon.src = "./images/icons/arrow-up.svg";
    menu.classList.add("show");
  });
  dropdown.addEventListener("mouseleave", (e) => {
    icon.src = "./images/icons/arrow-down.svg";
    menu.classList.remove("show");
  });
});
