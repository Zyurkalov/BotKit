import "../../scss/ui-kit/ui_kit_navigation.scss";
const page = document.querySelector(".page__container");
const header = page.querySelector(".header");
const footer = page.querySelector(".footer");
const headerMenu = header.querySelector(".header__menu");

const keyEscape = "Escape";

const menu = page.querySelector(".menu");
const menuItems = menu.querySelector(".menu__items");
const linkThemeBlue = menu.querySelector(".link_theme_blue");
const linkImageReverse = menu.querySelector(".link__image_reverse");

const menuSecond = menu.querySelector(".menu__second");
const menuSecondArrow = menuSecond.querySelector(".link__image_up");
const menuSecondItem = menu.querySelectorAll(".menu__second_item");
let menuStatus = false;

// Открытие боковой навигации
export function openMenu() {
  menu.classList.toggle("menu-open");
  menuItems.classList.toggle("menu__items-open");
  page.classList.toggle("page__container-open");
  header.classList.toggle("header-open");
  footer.classList.toggle("footer-open");
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

// Открытие боковой навигации по клику на бургер
headerMenu.addEventListener("click", openMenu);

// Открытие выпадающего списка внутри боковой навигации
function toggleSecondMenu() {
  menuSecondItem.forEach((btn) => {
    btn.classList.toggle("menu__second_item-open");
  });
  menuSecondArrow.classList.toggle("link__image_up-open");
}

// Уведомления
const buttonOpenNotification = header.querySelector(".header__notification");
const popupNotification = page.querySelector(".popup__notification");
const buttonCloseNotification = popupNotification.querySelector(
  ".popup__button-close",
);

// Открытие попапа с нотификакациями
export function openNotification() {
  popupNotification.classList.remove("popup__notification-close");
  document.addEventListener("keydown", closePopupOnPressKey);
  buttonCloseNotification.addEventListener("click", closeNotification);
}
buttonOpenNotification.addEventListener("click", openNotification);

// Закрытие попапа с нотификакациями
export function closeNotification() {
  popupNotification.classList.add("popup__notification-close");
  document.removeEventListener("keydown", closePopupOnPressKey);
  buttonCloseNotification.removeEventListener("click", closeNotification);
}

export const closePopupOnPressKey = (e) => {
  if (e.key === keyEscape) {
    closeNotification();
  }
};

// Профиль пользователя
export const buttonOpenAccaunt = header.querySelector(".header__profile");
export const popupAccaunt = page.querySelector(".popup__accaunt");

// Открытия меню в профиле
export function openAccauntSettings() {
  popupAccaunt.classList.toggle("popup__accaunt-close");
}
buttonOpenAccaunt.addEventListener("click", () => openAccauntSettings());
