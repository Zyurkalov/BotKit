import "../scss/registration/registration.scss";
import { routes, selectors } from "./constants";

//=========================

const signInBtn = document.querySelector(selectors.regPage.signInBtn);
//==================================
signInBtn.addEventListener("click", () => {
  window.location.href = window.location.origin + routes.loginPage;
});

const page = document.querySelector(".page");
const header = document.querySelector(".header");
const popup = document.querySelector(".window");
const main = document.querySelector(".main");
const confirmationPage = document.querySelector(".confirmation");

function openAndClosePage(evt) {
  evt.preventDefault();
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  confirmationPage.classList.toggle("confirmation_active");
}

// Закрытие
const commonBtn = document.querySelector(".common-button");

const closeBtn = document.querySelector(".confirmation__close-btn");

commonBtn.addEventListener("click", openAndClosePage);
closeBtn.addEventListener("click", openAndClosePage);
