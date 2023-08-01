import "../scss/registration/registration.scss";
import { routes, selectors, openAndClosePage } from "./constants";

// Переход на старницу логина
const signInBtn = document.querySelector(selectors.regPage.signInBtn);

// Переход на страницу логина
signInBtn.addEventListener("click", () => {
  window.location.href = window.location.origin + routes.loginPage;
});

const closeBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);

const signUpBtn = document.querySelector(".common-button");

// Создать аккаунт
signUpBtn.addEventListener("click", openAndClosePage);

// Закрыть попап подтверждения
closeBtn.addEventListener("click", openAndClosePage);
