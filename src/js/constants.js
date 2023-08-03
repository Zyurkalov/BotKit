export const selectors = {
  regPage: {
    signInBtn: ".alternative-actions__button",
    signUpBtn: ".common-button",
  },
  loginPage: {
    signUpBtn: ".passw-recovery__link_type_register",
    resetBtn: ".passw-recovery__link_type_recover",
  },
  resetPasswordPage: {
    resetBtn: ".form__submit_resetPassword",
  },
  confirmationPopupCloseBtn: {
    closeBtn: ".confirmation__close-btn",
  },
  dashboardPage: {
    addBotPopup: "add-bot-popup",
    addBotOpenBtn: "panel-add-bot",
    addBotCloseBtn: "add-bot-popup__close-btn",
    visiblePopupCls: "visible",
    popupCancelBtn: "add-bot-popup__cancel-btn",
    templates: "templates",
    templatesMenu: "templates__menu",
    contentList: "content-list",
    contentListClose: "content-list-close",
    connInfoPopup: "more-actions-popup_type_connection",
    connInfoOpenBtn: "card__action_info",
    connInfoCloseBtn: "more-actions-popup__close-btn",
    notificationPopup: "more-actions-popup_type_notifications",
    notificationPopupClose: "more-actions-popup__close-btn",
    notificationPopupOpen: "card__action_notifications",
    notificationWrapper: "more-actions-popup__notification-wrapper",
    //не имеет отношения к конкретному попапу это общий для всех попапов с копированием селектор
    notificationText: "more-actions-popup__notification-text",
    copyBtnCls: "button-elem-copy",
    copyBtnClsPressed: "button-elem-copy_pressed",
  },
  allPage: {
    pageContainer: "page__container",
    main: "main",
  },
  addBotPage: {
    buttonSocial: "button-social",
  },
};

export const authRoutes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/reset-password/reset_password.html",
};

export function toggleConfirmationPopup(evt) {
  evt.preventDefault();
  // Universal registration/login/reset password selectors
  const page = document.querySelector(".page");
  const header = page.querySelector(".header");
  const popup = page.querySelector(".window");
  const main = page.querySelector(".main");
  const confirmationPopup = page.querySelector(".confirmation");
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  confirmationPopup.classList.toggle("confirmation_active");
}
