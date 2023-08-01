import "../scss/login/login.scss";
import { authRoutes, selectors } from "./constants";

const signUpBtn = document.querySelector(selectors.loginPage.signUpBtn);
const resetPasswordBtn = document.querySelector(selectors.loginPage.resetBtn);

// Переход на страницу регистрации по клику на кнопку Регистрация
signUpBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + authRoutes.regPage;
});

// Переход на страницу восстановления пароля по клику на кнопку Забыли пароль?
resetPasswordBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + authRoutes.resetPasswordPage;
});
