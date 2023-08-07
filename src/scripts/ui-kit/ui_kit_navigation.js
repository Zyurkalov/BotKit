import "../../blocks/ui-kit/ui_kit_navigation.scss";

/* *** { CONSTANTS } *** */
const page = document.querySelector(".page__container");
const header = page.querySelector(".header");
const footer = page.querySelector(".footer");
const headerMenu = header.querySelector(".header__menu");

const menu = page.querySelector(".menu");
const menuItems = menu.querySelector(".menu__items");
const linkThemeBlue = menu.querySelector(".link_theme_blue");
const linkImageReverse = menu.querySelector(".link__image_reverse");

// меню второго уровня
const menuDropdown = menu.querySelector(".menu__dropdown");
const menuDropdownArrow = menuDropdown.querySelector(".link__image_up");
const menuDropdownItem = menu.querySelectorAll(".menu__dropdown_item");
let menuStatus = false;

// Профиль пользователя
export const buttonOpenAccaunt = header.querySelector(".header__profile");
export const popupAccaunt = page.querySelector(".popup__accaunt");
// const buttonOpenAccountArrow = buttonOpenAccaunt.querySelector(".header__profile-arrow");
// const accountElements = buttonOpenAccaunt.querySelectorAll("*");
// const accountElementsArray = Array.from(accountElements);

// Уведомления
const buttonOpenNotification = header.querySelector(".header__notification");
const popupNotification = page.querySelector(".popup__notification");
// const buttonCloseNotification = popupNotification.querySelector(".popup__button-close");

/* *** { FUNCTION } *** */
// Открытие боковой навигации
export function openMenu() {
  menu.classList.toggle("menu-open");
  menuItems.classList.toggle("menu__items-open");
  page.classList.toggle("page__container-open");
  header.classList.toggle("header-open");
  footer.classList.toggle("footer-open");
  linkThemeBlue.classList.toggle("link_theme_blue-open");
  linkImageReverse.classList.toggle("link__image_reverse-open");
  menuDropdown.removeEventListener("click", () => openMenu(true));

  if (menuStatus) {
    menuStatus = false;
    menuDropdown.removeEventListener("click", toggleDropdownMenu);
    menuDropdownItem.forEach((btn) => {
      btn.classList.remove("menu__dropdown_item-open");
    });
    menuDropdownArrow.classList.remove("link__image_up-open");
  } else {
    menuStatus = true;
    menuDropdown.addEventListener("click", toggleDropdownMenu);
  }
}

// Открытие выпадающего списка внутри боковой навигации
function toggleDropdownMenu() {
  menuDropdownItem.forEach((btn) => {
    btn.classList.toggle("menu__dropdown_item-open");
  });
  menuDropdownArrow.classList.toggle("link__image_up-open");
}

// закрытие popup по клику на кнопку Esc
export function closePopupOnPressKey(e, popup) {
  if (e.key === "Escape") {
    closePopup(popup);
  }
}

// открытие popup
function openPopup(popup) {
  popup.show();
  document.addEventListener("keydown", (e) => closePopupOnPressKey(e, popup));
  closePopupOnClickButton(popup, true);
  popup.addEventListener("mouseleave", () => closePopup(popup));
}

// заурытие popup
function closePopup(popup) {
  popup.close();
  document.removeEventListener("keydown", (e) =>
    closePopupOnPressKey(e, popup),
  );
  closePopupOnClickButton(popup, false);
  popup.removeEventListener("mouseleave", () => closePopup(popup));
}

// закрытие popup по клику на кнопу close
function closePopupOnClickButton(popup, key) {
  const buttonClose = popup.querySelector(".popup__button-close");
  if (buttonClose != null) {
    if (key) {
      buttonClose.addEventListener("click", () => closePopup(popup));
    } else {
      buttonClose.removeEventListener("click", () => closePopup(popup));
    }
  }
}

// // Открытия меню в профиле
// export function openAccauntSettings() {
//   popupAccaunt.classList.toggle("popup__accaunt-close");
//   buttonOpenAccountArrow.classList.toggle("header__profile-arrow_up");
// }
// buttonOpenAccaunt.addEventListener("click", () => openAccauntSettings());

// document.addEventListener("click", (evt) => {
//   if (
//     (evt.target !== buttonOpenAccaunt) &
//     !accountElementsArray.includes(evt.target) &
//     !popupAccaunt.classList.contains("popup__accaunt-close")
//   ) {
//     popupAccaunt.classList.add("popup__accaunt-close");
//     buttonOpenAccountArrow.classList.remove("header__profile-arrow_up");
//   }
// });

/* *** { EVENTLISTENER } *** */
headerMenu.addEventListener("click", openMenu); // Открытие боковой навигации по клику на бургер
buttonOpenNotification.addEventListener("click", () =>
  openPopup(popupNotification),
);
buttonOpenAccaunt.addEventListener("click", () => openPopup(popupAccaunt));
