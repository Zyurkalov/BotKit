import "../scss/reset-password/reset_password.scss";
import { selectors, openAndClosePage } from "./constants";
//import {openAndClosePage} from "./registration";

const closeResetBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);

const signBtn = document.querySelector(".common-button");

// Создать аккаунт
signBtn.addEventListener("click", openAndClosePage);

// Закрыть попап подтверждения
closeResetBtn.addEventListener("click", openAndClosePage);
