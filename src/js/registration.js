import "../scss/registration/registration.scss";
import { routes, selectors } from "./constants";

//=========================

const signInBtn = document.querySelector(selectors.regPage.signInBtn);
//==================================
signInBtn.addEventListener("click", () => {
  window.location.href = window.location.origin + routes.loginPage;
});
