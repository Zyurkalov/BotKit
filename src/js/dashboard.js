import "../scss/dashboard/dashboard.scss";
import { selectors } from "./constants";
import "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const templates = main.querySelector("." + selectors.dashboardPage.templates);
const templatesMenu = templates.querySelector(
  "." + selectors.dashboardPage.templatesMenu,
);
const contentList = templates.querySelector(
  "." + selectors.dashboardPage.contentList,
);
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

function openTemplatesItems() {
  contentList.classList.toggle(selectors.dashboardPage.contentListClose);
}
//==============evtListeners===================================
botPopup.addEventListener("click", onOverlayClick);
botPopupCloseBtn.addEventListener("click", closePopup);
botPopupOpenBtn.addEventListener("click", openPopup);
popupCancelBtn.addEventListener("click", closePopup);

const moreButtons = document.querySelectorAll(".card__more-button");
const moreButtonsArray = Array.from(moreButtons);
const moreButtonImgs = document.querySelectorAll(".card__icon");
const moreButtonImgsArray = Array.from(moreButtonImgs);
const botActionsAll = document.querySelectorAll(".card__actions");

moreButtons.forEach((moreButton) => {
  const card = moreButton.closest(".card");
  const botActions = card.querySelector(".card__actions");
  moreButton.addEventListener("click", () =>
    botActions.classList.toggle("card__actions_open"),
  );
});

templatesMenu.addEventListener("click", openTemplatesItems);

// function openBotActionsList() {
//   botActions.classList.toggle('card__actions_open');
// }

const accountElements = buttonOpenAccaunt.querySelectorAll("*");
const accountElementsArray = Array.from(accountElements);

document.addEventListener("click", (evt) => {
  if (
    (evt.target !== buttonOpenAccaunt) &
    !accountElementsArray.includes(evt.target) &
    !popupAccaunt.classList.contains("popup__accaunt-close")
  ) {
    popupAccaunt.classList.add("popup__accaunt-close");
  }
  if (
    !moreButtonsArray.includes(evt.target) &
    !moreButtonImgsArray.includes(evt.target)
  ) {
    botActionsAll.forEach((list) => {
      list.classList.remove("card__actions_open");
    });
  }
});
