import "../blocks/registration/registration.scss";
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
signUpBtn.addEventListener("click", (evt) => {
  const form = signUpBtn.closest("form");
  if (form && !form.checkValidity()) {
    // If the form is not valid, let the browser handle the validation feedback
    return;
  }
  // If no form is found or if the form is valid, prevent the default action and toggle the popup
  evt.preventDefault();
  toggleConfirmationPopup(evt);
});

// Закрытие попапа подтверждения по клику на крестик
closeBtn.addEventListener("click", toggleConfirmationPopup);
