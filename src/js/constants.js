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
    hiddenPopupCls: "add-bot-popup_hidden",
    popupCancelBtn: "add-bot-popup__cancel-btn",
  },
};

const routes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/reset-password/reset_password.html",
};

export { routes, selectors };
