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
  botPopup.classList.remove(selectors.dashboardPage.hiddenPopupCls);
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
  botPopup.classList.add(selectors.dashboardPage.hiddenPopupCls);
  document.removeEventListener("keydown", onEscClose);
}
//==============evtListeners===================================
botPopup.addEventListener("click", onOverlayClick);
botPopupCloseBtn.addEventListener("click", closePopup);
botPopupOpenBtn.addEventListener("click", openPopup);
popupCancelBtn.addEventListener("click", closePopup);
