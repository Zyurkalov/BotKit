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
    visiblePopupCls: "add-bot-popup_visible",
    popupCancelBtn: "add-bot-popup__cancel-btn",
    templates: "templates",
    templatesMenu: "templates__menu",
    contentList: "content-list",
    contentListClose: "content-list-close",
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
