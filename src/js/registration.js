import "../scss/registration/registration.scss";
import { routes, selectors } from "./constants";

// Переход на старницу логина
const signInBtn = document.querySelector(selectors.regPage.signInBtn);
const page = document.querySelector(".page");
const header = document.querySelector(".header");
const popup = document.querySelector(".window");
const main = document.querySelector(".main");
const confirmationPage = document.querySelector(".confirmation");
const closeBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);
const signUpBtn = document.querySelector(".common-button");

// Переход на страницу логина
signInBtn.addEventListener("click", () => {
  window.location.href = window.location.origin + routes.loginPage;
});

// Открытие попапа с подтверждением о регистрации
function openAndClosePage(evt) {
  evt.preventDefault();
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  confirmationPage.classList.toggle("confirmation_active");
}

// Создать аккаунт
signUpBtn.addEventListener("click", openAndClosePage);

// Закрыть попап подтверждения
closeBtn.addEventListener("click", openAndClosePage);
