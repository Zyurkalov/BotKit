import "../scss/registration/registration.scss";

// =====constants ====

const htmlClassNames = {
  regSection: "outer-wrapper_type_reg",
  regTitle: "header__h2_type_reg",
  loginSection: "outer-wrapper_type_login",
  loginTitle: "header__h2_type_login",
  signInBtn: ".alternative-actions__button",
  signUpBtn: ".passw-recovery__link_type_register",
};

const signInBtn = document.querySelector(htmlClassNames.signInBtn);
const signUpBtn = document.querySelector(htmlClassNames.signUpBtn);
//====================

class Section {
  constructor(sectionClassName, headerClassName) {
    this.sectionSelector = sectionClassName.startsWith(".")
      ? sectionClassName
      : "." + sectionClassName;
    this.headerSelector = headerClassName.startsWith(".")
      ? headerClassName
      : "." + headerClassName;
    this.header = document.querySelector(this.headerSelector);
    this.section = document.querySelector(this.sectionSelector);
  }

  show() {
    this.header.classList.remove("hidden");
    this.section.classList.remove("hidden");
  }
  hide() {
    this.header.classList.add("hidden");
    this.section.classList.add("hidden");
  }
}

//=======class-objects=====
const registration = new Section(
  htmlClassNames.regSection,
  htmlClassNames.regTitle,
);
const login = new Section(
  htmlClassNames.loginSection,
  htmlClassNames.loginTitle,
);
//===================

//=======event-listeners======
signInBtn.addEventListener("click", () => {
  registration.hide();
  login.show();
});

signUpBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  registration.show();
  login.hide();
});
//==================
