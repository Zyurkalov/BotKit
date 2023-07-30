import "../../scss/ui-kit/ui_kit_navigation.scss";

const pageNavigation = document.querySelector(".page__navigation");
const pageContent = document.querySelector(".page__content");
const keyEscape = "Escape";

const menu = pageNavigation.querySelector(".menu");
const menuItems = menu.querySelector(".menu__items");
const linkThemeBlue = menu.querySelector(".link_theme_blue");
const linkImageReverse = menu.querySelector(".link__image_reverse");

const menuSecond = menu.querySelector(".menu__second");
const menuSecondArrow = menuSecond.querySelector(".link__image_up");
const menuSecondItem = menu.querySelectorAll(".menu__second_item");
let menuStatus = false;

export function openMenu() {
  menu.classList.toggle("menu-open");
  menuItems.classList.toggle("menu__items-open");
  pageContent.classList.toggle("page__content-open");
  linkThemeBlue.classList.toggle("link_theme_blue-open");
  linkImageReverse.classList.toggle("link__image_reverse-open");
  menuSecond.removeEventListener("click", () => openMenu(true));

  if (menuStatus) {
    menuStatus = false;
    menuSecond.removeEventListener("click", toggleSecondMenu);
    menuSecondItem.forEach((btn) => {
      btn.classList.remove("menu__second_item-open");
    });
    menuSecondArrow.classList.remove("link__image_up-open");
  } else {
    menuStatus = true;
    menuSecond.addEventListener("click", toggleSecondMenu);
  }
}

function toggleSecondMenu() {
  menuSecondItem.forEach((btn) => {
    btn.classList.toggle("menu__second_item-open");
  });
  menuSecondArrow.classList.toggle("link__image_up-open");
}

// header
// бургер
const header = pageNavigation.querySelector(".header");
const headerMenu = header.querySelector(".header__menu");
headerMenu.addEventListener("click", openMenu);

// уведомления
const buttonOpenNotification = header.querySelector(".header__notification");
const popupNotification = document.querySelector(".popup__notification");
const buttonCloseNotification = popupNotification.querySelector(
  ".popup__button-close",
);

function openNotification() {
  popupNotification.classList.remove("popup__notification-close");
  document.addEventListener("keydown", closePopupOnPressKey);
  buttonCloseNotification.addEventListener("click", closeNotification);
}

function closeNotification() {
  popupNotification.classList.add("popup__notification-close");
  document.removeEventListener("keydown", closePopupOnPressKey);
  buttonCloseNotification.removeEventListener("click", closeNotification);
}

const closePopupOnPressKey = (e) => {
  if (e.key === keyEscape) {
    closeNotification();
  }
};

buttonOpenNotification.addEventListener("click", openNotification);

// Профиль пользователя
const buttonOpenAccaunt = header.querySelector(".header__profile");
const popupAccaunt = document.querySelector(".popup__accaunt");

function openAccauntSettings() {
  popupAccaunt.classList.toggle("popup__accaunt-close");
}
buttonOpenAccaunt.addEventListener("click", () => openAccauntSettings());
