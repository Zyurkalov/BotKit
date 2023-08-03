import "../scss/dashboard/dashboard.scss";
import { selectors } from "./constants";
import { popupAccaunt, buttonOpenAccaunt } from "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const templates = main.querySelector("." + selectors.dashboardPage.templates);
const templatesMenu = templates.querySelector(
  "." + selectors.dashboardPage.templatesMenu,
);
const contentList = templates.querySelector(
  "." + selectors.dashboardPage.contentList,
);

//===========================functions===========================

function openTemplatesItems() {
  contentList.classList.toggle(selectors.dashboardPage.contentListClose);
}
class Popup {
  constructor(popupCssNames) {
    this.popup = document.querySelector("." + popupCssNames.popup);
    this.popupClassName = popupCssNames.popup;
    this.closeBtn = this.popup.querySelector("." + popupCssNames.closeBtn);
    this.openBtn = document.querySelector("." + popupCssNames.openBtn);
    this.visibleClass = popupCssNames.visiblePopupCls;
    this.connectListeners();
  }
  open = () => {
    this.popup.classList.add(this.visibleClass);
    document.addEventListener("keydown", this.onEscClose);
  };
  onEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  onOverlayClick = (evt) => {
    if (evt.target.classList.contains(this.popupClassName)) {
      this.close();
    }
  };
  close = () => {
    this.popup.classList.remove(this.visibleClass);
    document.removeEventListener("keydown", this.onEscClose);
  };
  connectListeners = () => {
    this.popup.addEventListener("click", this.onOverlayClick);
    this.closeBtn.addEventListener("click", this.close);
    this.openBtn.addEventListener("click", this.open);
  };
}

class PopupWithCancel extends Popup {
  constructor(popupCssNames) {
    super(popupCssNames);
    this.cancelBtn = this.popup.querySelector("." + popupCssNames.cancelBtn);
    this.cancelBtn.addEventListener("click", this.close);
  }
}
class PopupWithNotification extends Popup {
  constructor(popupCssNames, copyBtnCls, copyBtnClsPressed, notificationMsg) {
    super(popupCssNames);
    this.notification = this.popup.querySelector(
      "." + popupCssNames.notificationWrapper,
    );
    this.notificationText = this.popup.querySelector(
      "." + popupCssNames.notificationText,
    );
    this.copyBtns = this.popup.querySelectorAll("." + copyBtnCls);
    this.copyBtnCls = copyBtnCls;
    this.copyBtnClsPressed = copyBtnClsPressed;
    this.notificationMsg = notificationMsg;
    this.connectButtons();
  }
  showNotification = (msg) => {
    this.notification.classList.add(this.visibleClass);
    this.notificationText.innerText = msg;
  };
  hideNotification = () => {
    this.notification.classList.remove(this.visibleClass);
  };

  connectButtons = () => {
    this.copyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.add(this.copyBtnClsPressed);
        this.showNotification(this.notificationMsg);
        setTimeout(() => {
          this.hideNotification();
          btn.classList.remove(this.copyBtnClsPressed);
        }, 2000);
      });
    });
  };
}

const addBotPopup = new PopupWithCancel({
  popup: selectors.dashboardPage.addBotPopup,
  closeBtn: selectors.dashboardPage.addBotCloseBtn,
  openBtn: selectors.dashboardPage.addBotOpenBtn,
  visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
  cancelBtn: selectors.dashboardPage.popupCancelBtn,
});
const connectionPopup = new PopupWithNotification(
  {
    popup: selectors.dashboardPage.connInfoPopup,
    closeBtn: selectors.dashboardPage.connInfoCloseBtn,
    openBtn: selectors.dashboardPage.connInfoOpenBtn,
    visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
    notificationWrapper: selectors.dashboardPage.notificationWrapper,
    notificationText: selectors.dashboardPage.notificationText,
  },
  selectors.dashboardPage.copyBtnCls,
  selectors.dashboardPage.copyBtnClsPressed,
  "Ключ доступа скопирован",
);
const notificationPopup = new PopupWithNotification(
  {
    popup: selectors.dashboardPage.notificationPopup,
    closeBtn: selectors.dashboardPage.notificationPopupClose,
    openBtn: selectors.dashboardPage.notificationPopupOpen,
    visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
    notificationWrapper: selectors.dashboardPage.notificationWrapper,
    notificationText: selectors.dashboardPage.notificationText,
  },
  selectors.dashboardPage.copyBtnCls,
  selectors.dashboardPage.copyBtnClsPressed,
  "Ссылка скопирована",
);

const moreButtons = document.querySelectorAll(".card__more-button");
const moreButtonsArray = Array.from(moreButtons);
const moreButtonImgs = document.querySelectorAll(".card__icon");
const moreButtonImgsArray = Array.from(moreButtonImgs);
const botActions = document.querySelector(".card__actions_dynamic");

function openBotActionsList(event) {
  const viewportWidth = window.innerWidth;
  const distanceToRightEdge = viewportWidth - event.pageX;

  if (distanceToRightEdge < viewportWidth / 2) {
    botActions.style.left = "auto";
    botActions.style.right = distanceToRightEdge + "px";
  } else {
    botActions.style.left = event.pageX + "px";
    botActions.style.right = "auto";
  }
  botActions.style.top = event.pageY + 20 + "px";
  botActions.classList.toggle("card__actions_dynamic_open");
}

moreButtons.forEach((moreButton) => {
  moreButton.addEventListener("click", openBotActionsList);
});

templatesMenu.addEventListener("click", openTemplatesItems);

const accountElements = buttonOpenAccaunt.querySelectorAll("*");
const accountElementsArray = Array.from(accountElements);

document.addEventListener("click", (evt) => {
  if (
    (evt.target !== buttonOpenAccaunt) &
    !accountElementsArray.includes(evt.target) &
    !popupAccaunt.classList.contains("popup__accaunt-close")
  ) {
    popupAccaunt.classList.add("popup__accaunt-close");
  }
  if (
    !moreButtonsArray.includes(evt.target) &
    !moreButtonImgsArray.includes(evt.target)
  ) {
    botActions.classList.remove("card__actions_dynamic_open");
  }
});

const buttonsEditMoreMenu = document.querySelectorAll("#edit-button-more");
const buttonsShareMoreMenu = document.querySelectorAll("#share-button-more");
const buttonsLinkMoreMenu = document.querySelectorAll("#link-button-more");

buttonsEditMoreMenu.forEach((buttonEditMoreMenu) => {
  const renamePopup = document.querySelector(".rename-popup");
  buttonEditMoreMenu.addEventListener("click", () => {
    renamePopup.classList.add("rename-popup_visible");
  });
});

buttonsShareMoreMenu.forEach((buttonShareMoreMenu) => {
  const sharePopup = document.querySelector(".share-popup");
  buttonShareMoreMenu.addEventListener("click", () => {
    sharePopup.classList.add("share-popup_visible");
  });
});

buttonsLinkMoreMenu.forEach((buttonLinkMoreMenu) => {
  const linkPopup = document.querySelector(".link-popup");
  buttonLinkMoreMenu.addEventListener("click", () => {
    linkPopup.classList.add("link-popup_visible");
  });
});
