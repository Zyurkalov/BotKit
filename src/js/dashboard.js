import "../scss/dashboard/dashboard.scss";
import { selectors } from "./constants";
import { closeMenu } from "./ui-kit/ui_kit_navigation";

const botPopup = document.querySelector(
  "." + selectors.dashboardPage.addBotPopup,
);
const botPopupCloseBtn = botPopup.querySelector(
  "." + selectors.dashboardPage.addBotCloseBtn,
);
const botPopupOpenBtn = document.querySelector(
  "." + selectors.dashboardPage.addBotOpenBtn,
);
const popupCancelBtn = document.querySelector(
  "." + selectors.dashboardPage.popupCancelBtn,
);
//===========================functions===========================
function openPopup() {
  botPopup.classList.add(selectors.dashboardPage.visiblePopupCls);
  document.addEventListener("keydown", onEscClose);
}

function onOverlayClick(evt) {
  if (evt.target.classList.contains(selectors.dashboardPage.addBotPopup)) {
    closePopup();
  }
}

function onEscClose(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}
function closePopup() {
  botPopup.classList.remove(selectors.dashboardPage.visiblePopupCls);
  document.removeEventListener("keydown", onEscClose);
}
//==============evtListeners===================================
botPopup.addEventListener("click", onOverlayClick);
botPopupCloseBtn.addEventListener("click", closePopup);
botPopupOpenBtn.addEventListener("click", openPopup);
popupCancelBtn.addEventListener("click", closePopup);

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
