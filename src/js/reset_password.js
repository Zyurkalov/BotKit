import "../scss/reset-password/reset_password.scss";
import { routes, selectors } from "./constants";

const signInBtn = document.querySelector(selectors.resetPasswordPage.resetBtn);
function redirectToPage() {
  window.location.href = window.location.origin + routes.regPage;
}

signInBtn.addEventListener("click", redirectToPage);
