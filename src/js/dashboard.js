import "../scss/dashboard/dashboard.scss";

import { closeMenu } from "./ui-kit/ui_kit_navigation";

const arrowButton = document.querySelector(".header__profile");
const arrowButtonImg = arrowButton.querySelector(
  ".ui-kit-navigation__arrow-down",
);
const moreButtons = document.querySelectorAll(".card__more-button");
// const moreButtonImg = moreButton.querySelector('.card__icon')

moreButtons.forEach((moreButton) => {
  const card = moreButton.closest(".card");
  const botActions = card.querySelector(".card__actions");
  moreButton.addEventListener("click", () =>
    botActions.classList.toggle("card__actions_open"),
  );
});

// function openBotActionsList() {
//   botActions.classList.toggle('card__actions_open');
// }

// document.addEventListener("click", (evt) => {
//   if (evt.target !== arrowButton & evt.target !== arrowButtonImg & !dropDownList.classList.contains('account__actions_hidden')) {
//     dropDownList.classList.add("account__actions_hidden");
//   }
//   if (evt.target !== moreButton & evt.target !== moreButtonImg) {
//     botActions.classList.add("card__actions_hidden");
//   }
// });
