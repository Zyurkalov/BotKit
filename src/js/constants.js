const selectors = {
  regPage: {
    signInBtn: ".alternative-actions__button",
  },
  loginPage: {
    signUpBtn: ".passw-recovery__link_type_register",
  },
  resetPasswordPage: {
    resetBtn: ".passw-recovery__link_type_recover",
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
  },
};

const routes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/reset-password/reset_password.html",
};

export function openAndClosePage(evt) {
  evt.preventDefault();
  const page = evt.target.closest(".page");
  const header = page.querySelector(".header");
  const popup = page.querySelector(".window");
  const main = page.querySelector(".main");
  const confirmationPage = page.querySelector(".confirmation");

  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  confirmationPage.classList.toggle("confirmation_active");
}

export { routes, selectors };
