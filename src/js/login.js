import "../scss/login/login.scss";
import { routes, selectors } from "./constants";

const signUpBtn = document.querySelector(selectors.loginPage.signUpBtn);
const resetPassword = document.querySelector(
  selectors.resetPasswordPage.resetBtn,
);

signUpBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + routes.regPage;
});

resetPassword.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + routes.resetPasswordPage;
});
