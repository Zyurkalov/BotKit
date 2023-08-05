export const selectors = {
  regPage: {
    signInBtn: ".alternative-actions__button",
    signUpBtn: ".common-button",
  },
  loginPage: {
    signUpBtn: ".passw-recovery__link_type_register",
    resetBtn: ".passw-recovery__link_type_recover",
  },
  resetPasswordPage: {
    resetBtn: ".form__submit_resetPassword",
  },
  confirmationPopupCloseBtn: {
    closeBtn: ".confirmation__close-btn",
  },
  dashboardPage: {
    addBot: {
      popup: "add-bot-popup",
      closeBtn: "add-bot-popup__close-btn",
      cancelBtn: "add-bot-popup__cancel-btn",
      openBtn: "panel-add-bot",
    },
    connectionInfo: {
      popup: "more-actions-popup_type_connection",
      openBtn: "card__action_info",
    },
    notifications: {
      popup: "more-actions-popup_type_notifications",
      openBtn: "card__action_notifications",
    },
    share: {
      popup: "share-popup",
      openBtn: "card__action_share",
      cancelBtn: "cancel-btn",
    },
    copyLink: {
      popup: "link-popup",
      openBtn: "card__action_link",
    },
    rename: {
      popup: "rename-popup",
      openBtn: "card__action_rename",
      cancelBtn: "cancel-btn",
    },
    visiblePopupCls: "visible",
    templates: "templates",
    templatesMenu: "templates__menu",
    templatesMenuArrow: "templates__menu-arrow",
    templatesMenuArrowUp: "templates__menu-arrow_up",
    contentList: "content-list",
    contentListClose: "content-list-close",

    //не имеет отношения к конкретному попапу это общий для всех попапов с копированием селектор
    notificationWrapper: "more-actions-popup__notification-wrapper",
    notificationText: "more-actions-popup__notification-text",
    copyBtnCls: "copy-btn",
    copyBtnClsPressed: "button-elem-copy_pressed",
    smallPopupCloseBtn: "popup__close-btn",
  },

  allPage: {
    pageContainer: "page__container",
    main: "main",
  },
  addBotPage: {
    buttonSocial: "button-social",
  },
};

export const authRoutes = {
  loginPage: "/pages/login/login.html",
  regPage: "/pages/registration/registration.html",
  resetPasswordPage: "/pages/reset-password/reset_password.html",
};

export function toggleConfirmationPopup(evt) {
  evt.preventDefault();
  // Universal registration/login/reset password selectors
  const page = document.querySelector(".page");
  const header = page.querySelector(".header");
  const popup = page.querySelector(".window");
  const main = page.querySelector(".main");
  const confirmationPopup = page.querySelector(".confirmation");
  page.classList.toggle("page_newMeasure");
  header.classList.toggle("header_inActive");
  popup.classList.toggle("window_inActive");
  main.classList.toggle("main_newMeasure");
  confirmationPopup.classList.toggle("confirmation_active");
}
