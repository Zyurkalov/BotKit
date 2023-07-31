import "../scss/reset-password/reset_password.scss";
import { routes, selectors } from "./constants";

const signInBtn = document.querySelector(selectors.resetPasswordPage.resetBtn);
const page = document.querySelector(".page");
const header = document.querySelector(".header");
const popup = document.querySelector(".window");
const main = document.querySelector(".main");
const reset_passwordPage = document.querySelector(".resetPassword");

function openAndClosePage(evt) {
  evt.preventDefault();
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  reset_passwordPage.classList.toggle("resetPassword_active");
}

signInBtn.addEventListener("click", openAndClosePage);
// Закрытие

const closeBtn = document.querySelector(".resetPassword__close-btn");

closeBtn.addEventListener("click", openAndClosePage);
