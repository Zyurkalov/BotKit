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
};

const routes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/reset-password/reset_password.html",
};

export { routes, selectors };
