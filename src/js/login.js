import "../scss/login/login.scss";
import { routes, selectors } from "./constants";

//=============
const signUpBtn = document.querySelector(selectors.loginPage.signUpBtn);
//===============
signUpBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + routes.regPage;
});
