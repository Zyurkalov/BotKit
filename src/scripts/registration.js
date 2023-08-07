import "../blocks/registration/registration.scss";
import { authRoutes, selectors, toggleConfirmationPopup } from "./constants";
import intlTelInput from "intl-tel-input/build/js/intlTelInput";

const inputPhone = document.querySelector("#phone");
const signInBtn = document.querySelector(selectors.regPage.signInBtn);
const closeBtn = document.querySelector(
  selectors.confirmationPopupCloseBtn.closeBtn,
);
const signUpBtn = document.querySelector(selectors.regPage.signUpBtn);

// Переход на страницу логина по клику на кнопку Войти
signInBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.location.href = window.location.origin + authRoutes.loginPage;
});

// Регистрация аккаунта по клику на кнопку Создать аккаунт
signUpBtn.addEventListener("click", (evt) => {
  const form = signUpBtn.closest("form");
  if (form && !form.checkValidity()) {
    // If the form is not valid, let the browser handle the validation feedback
    return;
  }
  // If no form is found or if the form is valid, prevent the default action and toggle the popup
  evt.preventDefault();
  toggleConfirmationPopup(evt);
});

// Закрытие попапа подтверждения по клику на крестик
closeBtn.addEventListener("click", toggleConfirmationPopup);

// выпадающий список
intlTelInput(inputPhone, {
  autoInsertDialCode: true,
  autoPlaceholder: "off",
  dropdownContainer: document.body,
  hiddenInput: "full_number",
  separateDialCode: true,
  onlyCountries: ["az", "am", "by", "kz", "kg", "md", "ru", "tj", "uz", "ua"],
  // utilsScript: "intl-tel-input/build/js/utils"
  // "path/to/utils.js"
  // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
