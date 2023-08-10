import "../blocks/dashboard/dashboard.scss";
import { selectors } from "./constants";
import "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const templates = main.querySelector("." + selectors.dashboardPage.templates);
const templatesMenu = templates.querySelector(
  "." + selectors.dashboardPage.templatesMenu,
);
const contentList = templates.querySelector(
  "." + selectors.dashboardPage.contentList,
);
const templatesMenuArrow = main.querySelector(
  "." + selectors.dashboardPage.templatesMenuArrow,
);

//===========================functions===========================

function openTemplatesItems() {
  contentList.classList.toggle(selectors.dashboardPage.contentListClose);
  templatesMenuArrow.classList.toggle(
    selectors.dashboardPage.templatesMenuArrowUp,
  );
}
class Popup {
  constructor(popupCssNames) {
    this.popupClassName = popupCssNames.popup;
    this.popup = document.querySelector("." + this.popupClassName);
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
  close() {
    this.popup.classList.remove(this.visibleClass);
    document.removeEventListener("keydown", this.onEscClose);
  }
  connectListeners() {
    this.popup.addEventListener("click", this.onOverlayClick);
    this.closeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      this.close();
    });
    this.openBtn.addEventListener("click", this.open);
  }
}

class PopupWithCancel extends Popup {
  constructor(popupCssNames) {
    super(popupCssNames);
    this.cancelBtn = this.popup.querySelector("." + popupCssNames.cancelBtn);
    this.cancelBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      this.close();
    });
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
  showNotification(msg) {
    this.notification.classList.add(this.visibleClass);
    this.notificationText.innerText = msg;
  }
  hideNotification() {
    this.notification.classList.remove(this.visibleClass);
  }

  connectButtons() {
    this.copyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.add(this.copyBtnClsPressed);
        this.showNotification(this.notificationMsg);
      });
    });
  }
  close() {
    super.close();
    this.hideNotification();
    this.copyBtns.forEach((btn) =>
      btn.classList.remove(this.copyBtnClsPressed),
    );
  }
}

const addBotPopup = new PopupWithCancel({
  popup: selectors.dashboardPage.addBot.popup,
  closeBtn: selectors.dashboardPage.addBot.closeBtn,
  openBtn: selectors.dashboardPage.addBot.openBtn,
  visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
  cancelBtn: selectors.dashboardPage.addBot.cancelBtn,
});

const connectionPopup = new PopupWithNotification(
  {
    popup: selectors.dashboardPage.connectionInfo.popup,
    closeBtn: selectors.dashboardPage.smallPopupCloseBtn,
    openBtn: selectors.dashboardPage.connectionInfo.openBtn,
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
    popup: selectors.dashboardPage.notifications.popup,
    closeBtn: selectors.dashboardPage.smallPopupCloseBtn,
    openBtn: selectors.dashboardPage.notifications.openBtn,
    visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
    notificationWrapper: selectors.dashboardPage.notificationWrapper,
    notificationText: selectors.dashboardPage.notificationText,
  },
  selectors.dashboardPage.copyBtnCls,
  selectors.dashboardPage.copyBtnClsPressed,
  "Ссылка скопирована",
);

const sharePopup = new PopupWithCancel({
  popup: selectors.dashboardPage.share.popup,
  closeBtn: selectors.dashboardPage.smallPopupCloseBtn,
  openBtn: selectors.dashboardPage.share.openBtn,
  visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
  cancelBtn: selectors.dashboardPage.share.cancelBtn,
});

const renamePopup = new PopupWithCancel({
  popup: selectors.dashboardPage.rename.popup,
  closeBtn: selectors.dashboardPage.smallPopupCloseBtn,
  openBtn: selectors.dashboardPage.rename.openBtn,
  visiblePopupCls: selectors.dashboardPage.visiblePopupCls,
  cancelBtn: selectors.dashboardPage.rename.cancelBtn,
});

const copyLinkPopup = new PopupWithNotification(
  {
    popup: selectors.dashboardPage.copyLink.popup,
    closeBtn: selectors.dashboardPage.smallPopupCloseBtn,
    openBtn: selectors.dashboardPage.copyLink.openBtn,
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

  if (distanceToRightEdge < viewportWidth / 4) {
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

document.addEventListener("click", (evt) => {
  if (
    !moreButtonsArray.includes(evt.target) &
    !moreButtonImgsArray.includes(evt.target)
  ) {
    botActions.classList.remove("card__actions_dynamic_open");
  }
});
