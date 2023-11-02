const infoList = document.querySelector(".information__list");
const infoTypeChangeBtnsCover = document.querySelector(
  ".information__header-right"
);
const infoTypeChangeBtns = document.querySelectorAll(".information__btn");
const infoItems = document.querySelectorAll(".information__item");

infoTypeChangeBtnsCover.addEventListener("click", (e) => {
  const infoType = e.target.dataset.type;
  infoTypeChangeBtns.forEach((item) => {
    item.classList.remove("information__btn--active");
  });
  infoItems.forEach((item) => {
    item.classList.remove("active");
  });

  infoItems.forEach((item) => {
    if (item.dataset.type === infoType) {
      item.classList.add("active");
    }
  });

  e.target.classList.add("information__btn--active");
});
