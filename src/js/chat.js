import "../scss/chat/chat.scss";
import "./ui-kit/ui_kit_navigation";

const profileWindow = document.querySelector(".user-info");
const buttonInfo = profileWindow.querySelector("#user-info");
const buttonFiles = profileWindow.querySelector("#user-files");
const windowUserInfo = profileWindow.querySelector(".window-user-info");
const windowFiles = profileWindow.querySelector(".window-files");
const windowEmpty = profileWindow.querySelector(".window-files-empty");
const selector = profileWindow.querySelector(".user-info__select");

const chatWindow = document.querySelector(".chat");
const buttonStretch = chatWindow.querySelector(".chat__button-stretch");
const buttonStretchIcon = buttonStretch.querySelector(".chat__button-icon");

function stretchChat() {
  profileWindow.classList.toggle("hidden");
  buttonStretchIcon.classList.toggle("icon_rotate180");
}
function selectInfo() {
  if (buttonInfo.classList.contains("user-info__button_select")) {
    buttonInfo.classList.remove("user-info__button_select");
    windowUserInfo.classList.add("hidden");
    windowEmpty.classList.remove("hidden");
    selector.classList.add("hidden");
  } else {
    buttonInfo.classList.add("user-info__button_select");
    buttonFiles.classList.remove("user-info__button_select");
    windowUserInfo.classList.remove("hidden");
    windowFiles.classList.add("hidden");
    windowEmpty.classList.add("hidden");
    selector.classList.remove("hidden");
    selector.style.left = "0";
  }
}
function selectFiles() {
  if (buttonFiles.classList.contains("user-info__button_select")) {
    buttonFiles.classList.remove("user-info__button_select");
    windowFiles.classList.add("hidden");
    windowEmpty.classList.remove("hidden");
    selector.classList.add("hidden");
  } else {
    buttonInfo.classList.remove("user-info__button_select");
    buttonFiles.classList.add("user-info__button_select");
    windowUserInfo.classList.add("hidden");
    windowFiles.classList.remove("hidden");
    windowEmpty.classList.add("hidden");
    selector.classList.remove("hidden");
    selector.style.left = "50%";
  }
}
buttonStretch.addEventListener("click", stretchChat);
buttonInfo.addEventListener("click", selectInfo);
buttonFiles.addEventListener("click", selectFiles);
