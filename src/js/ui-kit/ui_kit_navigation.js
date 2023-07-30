import { remove } from "immutable";
import "../../scss/ui-kit/ui_kit_navigation.scss";

// JS корявый нужно переделать!!!

const page = document.querySelector(".page-container");
const mainMenu = page.querySelector(".menu");

const header = page.querySelector(".header");
const headerMenu = header.querySelector(".header__menu");
const buttonOpenNotification = header.querySelector(".header__notification");
const buttonOpenAccaunt = header.querySelector(".header__profile");

const notificationOverlay = page.querySelector(".popup__notification__overlay");
const notification = page.querySelector(".popup__notification");
const notificationHeader = notification.querySelector(
  ".popup__notification-header",
);
const buttonCloseNotification =
  notificationHeader.querySelector(".popup__close");
const keyEscape = "Escape";

const accauntPopup = page.querySelector(".popup__accaunt");

export function closeMenu() {
  mainMenu.classList.toggle("menu-close");
  mainMenu
    .querySelector(".link_theme_blue")
    .classList.toggle("link_theme_blue-close");
  mainMenu
    .querySelector(".link__image_reverse")
    .classList.toggle("link__image_reverse-close");
  mainMenu
    .querySelector(".link__text_reverse")
    .classList.toggle("link__text_reverse-close");
}

function openNotification() {
  notification.classList.remove("popup__notification-close");
  document.addEventListener("keydown", closePopupOnPressKey);
  notificationOverlay.classList.remove("popup__notification__overlay-close");
  notificationOverlay.addEventListener("click", closePopupOnClickOverlay);
  buttonCloseNotification.addEventListener("click", () => closeNotification());
}

function closeNotification() {
  notification.classList.add("popup__notification-close");
  document.removeEventListener("keydown", closePopupOnPressKey);
  notificationOverlay.classList.add("popup__notification__overlay-close");
  notificationOverlay.removeEventListener("click", closePopupOnClickOverlay);
  buttonCloseNotification.removeEventListener("click", () =>
    closeNotification(),
  );
}

const closePopupOnPressKey = (e) => {
  if (e.key === keyEscape) {
    closeNotification();
  }
};

const closePopupOnClickOverlay = (e) => {
  if (e.target == notificationOverlay) {
    closeNotification();
  }
};

headerMenu.addEventListener("click", () => closeMenu());
buttonOpenNotification.addEventListener("click", () => openNotification());

// кнопка аккаунта
function openAccauntSettings() {
  accauntPopup.classList.toggle("popup__accaunt-close");
}
buttonOpenAccaunt.addEventListener("click", () => openAccauntSettings());
