import "../blocks/reset-password/reset_password.scss";
import { selectors, toggleConfirmationPopup } from "./constants";

const closeResetBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);

const resetBtn = document.querySelector(selectors.resetPasswordPage.resetBtn);

// Сброс пароля
resetBtn.addEventListener("click", (evt) => {
  const form = resetBtn.closest("form");
  if (form && !form.checkValidity()) {
    // If the form is not valid, let the browser handle the validation feedback
    return;
  }
  // If no form is found or if the form is valid, prevent the default action and toggle the popup
  evt.preventDefault();
  toggleConfirmationPopup(evt);
});

// Закрыть попап подтверждения
closeResetBtn.addEventListener("click", toggleConfirmationPopup);
