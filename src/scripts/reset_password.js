import "../blocks/reset-password/reset_password.scss";
import { selectors, toggleConfirmationPopup } from "./constants";

const closeResetBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);

const resetBtn = document.querySelector(selectors.resetPasswordPage.resetBtn);

// Сброс пароля
resetBtn.addEventListener("click", toggleConfirmationPopup);

// Закрыть попап подтверждения
closeResetBtn.addEventListener("click", toggleConfirmationPopup);
