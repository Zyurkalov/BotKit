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
const buttonOpenAccountArrow = buttonOpenAccaunt.querySelector(
  ".header__profile-arrow",
);

// Уведомления
const buttonOpenNotification = header.querySelector(".header__notification");
const popupNotification = page.querySelector(".popup__notification");
const notificationCloseBtn = popupNotification.querySelector(
  ".popup__button-close",
);

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

// открытие popup
function openPopup(popup, type = null) {
  if (type === "modal") {
    popup.showModal();
    popup.addEventListener("click", (e) => closePopupOnClickRect(e, popup));
  } else {
    popup.show();
  }
  if (popup === popupAccaunt) {
    buttonOpenAccountArrow.classList.add("header__profile-arrow_up");
  }
  document.addEventListener("keydown", (e) => closePopupOnPressKey(e, popup));
  closePopupOnClickButton(popup, true);
  popup.addEventListener("click", (e) => closePopupOnClickRect(e, popup));
  //  popup.addEventListener("mouseleave", () => closePopup(popup)); зачем это??
}

// заурытие popup
function closePopup(popup) {
  popup.close();
  document.removeEventListener("keydown", (e) =>
    closePopupOnPressKey(e, popup),
  );
  closePopupOnClickButton(popup, false);
  popup.removeEventListener("mouseleave", () => closePopup(popup));
  if (popup === popupAccaunt) {
    buttonOpenAccountArrow.classList.remove("header__profile-arrow_up");
  }
}

class ContextMenu {
  constructor(element, closeBtn, arrowEl) {
    this.node = element;
    closeBtn?.addEventListener("click", this.close);
    this.arrow = arrowEl;
  }
  open = () => {
    this.node.classList.add("visible");
    this.setListeners();
  };
  close = () => {
    this.node.classList.remove("visible");
    this.removeListeners();
  };
  toggle = (evt) => {
    evt.stopPropagation();
    this.node.classList.contains("visible")
      ? this.removeListeners()
      : this.setListeners();
    this.node.classList.toggle("visible");
    this._rotateArrow();
  };

  _onClick = (evt) => {
    if (!evt.target.classList[0]?.startsWith(this.node.classList[0])) {
      this.close();
    }
  };
  _onEscPress = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  _rotateArrow = () => {
    this.arrow?.classList.toggle("rotate-reverse");
  };
  setListeners = () => {
    document.addEventListener("mouseup", this._onClick);
    document.addEventListener("keydown", this._onEscPress);
  };
  removeListeners = () => {
    document.removeEventListener("mouseup", this._onClick);
    document.removeEventListener("keydown", this._onEscPress);
  };
}

// закрытие popup по клику на кнопу close
function closePopupOnClickButton(popup, key) {
  if (buttonClose != null) {
    if (key) {
      buttonClose.addEventListener("click", () => closePopup(popup));
    } else {
      buttonClose.removeEventListener("click", () => closePopup(popup));
    }
  }
}

// закрытие popup по клику на кнопку Esc
export function closePopupOnPressKey(e, popup) {
  if (e.key === "Escape") {
    closePopup(popup);
  }
}

function closePopupOnClickRect(e, popup) {
  const rect = popup.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;
  if (!isInDialog) {
    closePopup(popup);
  }
}

//=======objects=================
const profileMenu = new ContextMenu(popupAccaunt, null, buttonOpenAccountArrow);
const notifiCation = new ContextMenu(popupNotification, notificationCloseBtn);

/* *** { EVENTLISTENER } *** */
headerMenu.addEventListener("click", openMenu); // Открытие боковой навигации по клику на бургер
buttonOpenNotification.addEventListener("click", notifiCation.open);
buttonOpenAccaunt.addEventListener("mouseup", profileMenu.toggle);
