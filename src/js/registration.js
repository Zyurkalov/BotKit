import "../scss/registration/registration.scss";
import intlTelInput from "intl-tel-input/build/js/intlTelInput";

const input = document.querySelector("#phone");

intlTelInput(input, {
  // allowDropdown: false,
  autoInsertDialCode: true,
  autoPlaceholder: "off",
  customContainer: "form__input_tel",
  // customPlaceholder:'popup__item_number',
  dropdownContainer: document.body,
  // excludeCountries: ["ru"],
  // formatOnDisplay: false,
  // //   fetch("https://ipapi.co/json") //промисс который вычисляет страну и код по ip чтобы заработало нужно активироовать поле initialCountry
  // // geoIpLookup: function(callback) {
  // //     .then(function(res) { return res.json(); })
  // //     .then(function(data) { callback(data.country_code); })
  // //     .catch(function() { callback("ru"); });
  // // },
  hiddenInput: "full_number",
  // initialCountry: "auto",
  // nationalMode: false,
  // preferredCountries: ["ru"],
  separateDialCode: true,
  onlyCountries: ["az", "am", "by", "kz", "kg", "md", "ru", "tj", "uz", "ua"],
  // showFlags: false,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //   "intl-tel-input/build/js/utils"
  // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

import { authRoutes, selectors, toggleConfirmationPopup } from "./constants";

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
signUpBtn.addEventListener("click", toggleConfirmationPopup);

// Закрытие попапа подтверждения по клику на крестик
closeBtn.addEventListener("click", toggleConfirmationPopup);
