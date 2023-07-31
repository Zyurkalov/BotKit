const selectors = {
  regPage: {
    signInBtn: ".alternative-actions__button",
  },
  loginPage: {
    signUpBtn: ".passw-recovery__link_type_register",
  },
  dashboardPage: {
    addBotPopup: "add-bot-popup",
    addBotOpenBtn: "panel-add-bot",
    addBotCloseBtn: "add-bot-popup__close-btn",
    hiddenPopupCls: "add-bot-popup_hidden",
  },
};

const routes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
};

export { routes, selectors };
