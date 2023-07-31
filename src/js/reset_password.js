import "../scss/reset-password/reset_password.scss";
import { selectors } from "./constants";

const confirmResetBth = document.querySelector(".form__submit_resetPassword");
const page = document.querySelector(".page");
const header = document.querySelector(".header");
const popup = document.querySelector(".window");
const main = document.querySelector(".main");
const resetPasswordScreen = document.querySelector(".resetPassword");
const closeBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);

//  Открытие попапа подтверждения восстановления пароля
function openAndClosePage(evt) {
  evt.preventDefault();
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  resetPasswordScreen.classList.toggle("resetPassword_active");
}

// Восстановить пароль
confirmResetBth.addEventListener("click", openAndClosePage);

// Закрыть попап подтверждения
closeBtn.addEventListener("click", openAndClosePage);
