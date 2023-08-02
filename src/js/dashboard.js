import "../scss/dashboard/dashboard.scss";
import { selectors } from "./constants";
import { popupAccaunt, buttonOpenAccaunt } from "./ui-kit/ui_kit_navigation";

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
const botActions = document.querySelector(".card__actions_dynamic");

function openBotActionsList(event) {
  const viewportWidth = window.innerWidth;
  const distanceToRightEdge = viewportWidth - event.pageX;

  if (distanceToRightEdge < viewportWidth / 2) {
    botActions.style.left = "auto";
    botActions.style.right = distanceToRightEdge + "px";
  } else {
    botActions.style.left = event.pageX + "px";
    botActions.style.right = "auto";
  }
  botActions.style.top = event.pageY + 20 + "px";
  botActions.classList.toggle("card__actions_dynamic_open");
}

moreButtons.forEach((moreButton) => {
  moreButton.addEventListener("click", openBotActionsList);
});

templatesMenu.addEventListener("click", openTemplatesItems);

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
    botActions.classList.remove("card__actions_dynamic_open");
  }
});

const buttonsEditMoreMenu = document.querySelectorAll("#edit-button-more");
const buttonsShareMoreMenu = document.querySelectorAll("#share-button-more");
const buttonsLinkMoreMenu = document.querySelectorAll("#link-button-more");

buttonsEditMoreMenu.forEach((buttonEditMoreMenu) => {
  const renamePopup = document.querySelector(".rename-popup");
  buttonEditMoreMenu.addEventListener("click", () => {
    renamePopup.classList.add("rename-popup_visible");
  });
});

buttonsShareMoreMenu.forEach((buttonShareMoreMenu) => {
  const sharePopup = document.querySelector(".share-popup");
  buttonShareMoreMenu.addEventListener("click", () => {
    sharePopup.classList.add("share-popup_visible");
  });
});

buttonsLinkMoreMenu.forEach((buttonLinkMoreMenu) => {
  const linkPopup = document.querySelector(".link-popup");
  buttonLinkMoreMenu.addEventListener("click", () => {
    linkPopup.classList.add("link-popup_visible");
  });
});
