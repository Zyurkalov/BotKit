import "../../scss/ui-kit/ui_kit_components.scss";

const dropDownFieldsList = document.querySelector(".selector__items");

const arrowButton = document.querySelector(
  ".ui-kit-navigation__arrow-toggle-icon",
);
const arrowButtonImg = document.querySelector(".ui-kit-navigation__arrow");

arrowButton.addEventListener("click", openDropDownList);

export function openDropDownList() {
  dropDownFieldsList.classList.toggle("selector__items_open");
  arrowButtonImg.classList.toggle("ui-kit-navigation__arrow_up");
}

const moreButton = document.querySelector(".card__more-button");
const botActions = document.querySelector(".card__actions");

moreButton.addEventListener("click", openBotActionsList);

export function openBotActionsList() {
  botActions.classList.toggle("card__actions_open");
}
