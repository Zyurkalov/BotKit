import "../scss/registration/registration.scss";
import { authRoutes, selectors, toggleConfirmationPopup } from "./constants";

const signInBtn = document.querySelector(selectors.regPage.signInBtn);
const closeBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);
const signUpBtn = document.querySelector(selectors.regPage.signUpBtn);

// Переход на страницу логина по клику на кнопку Войти
signInBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + authRoutes.loginPage;
});

// Регистрация аккаунта по клику на кнопку Создать аккаунт
signUpBtn.addEventListener("click", toggleConfirmationPopup);

// Закрытие попапа подтверждения по клику на крестик
closeBtn.addEventListener("click", toggleConfirmationPopup);
