const selectors = {
  regPage: {
    signInBtn: ".alternative-actions__button",
  },
  loginPage: {
    signUpBtn: ".passw-recovery__link_type_register",
  },
  resetPasswordPage: {
    resetBtn: ".form__submit_resetPassword",
  },
};

const routes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/registration/registration.html",
};

export { routes, selectors };
