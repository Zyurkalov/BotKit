import "../scss/mailing-list/mailing_list.scss";
import "./ui-kit/ui_kit_navigation";

import { closeMenu } from "./ui-kit/ui_kit_navigation.js";

const mailingIdSelector = ".mailing-list__cell_data_id";
const mailingNameSelector = ".mailing-list__cell_data_name";
const mailingMessengerSelector = ".mailing-list__cell_data_messenger";
const mailingSentMessagesSelector = ".mailing-list__cell_data_sent-messages";
const mailingConversionRateSelector = ".mailing-list__cell_data_conversion";
const mailinglaunchStatusSelector = ".mailing-list__cell_data_launch-status";

export class Mailing {
  constructor(
    { id, name, messenger, sentMessages, conversionRate, launchStatus },
    tableBodySelector,
    mailingTemplateSelector,
  ) {
    this._id = id;
    this._name = name;
    this._messenger = messenger;
    this._sentMessages = sentMessages;
    this._conversionRate = conversionRate;
    this._launchStatus = launchStatus;
    this._container = document.querySelector(tableBodySelector);
    this._template = document.querySelector(mailingTemplateSelector).content;
  }

  _getElement(tableRowSelector) {
    this._element = this._template
      .querySelector(tableRowSelector)
      .cloneNode(true);
  }

  _formatSentMessages() {
    const lastDigit = this._sentMessages.toString().slice(-1);
    let entity = "сообщений";

    switch (lastDigit) {
      case "1":
        entity = "сообщение";
        break;
      case "2":
        entity = "сообщения";
        break;
      case "3":
        entity = "сообщения";
        break;
      case "4":
        entity = "сообщения";
        break;
    }

    this._sentMessages += " ";
    this._sentMessages += entity;
  }

  _formatConversionRate() {
    this._conversionRate *= 100;
    this._conversionRate += "%";
  }

  _setContent() {
    this._element.querySelector(mailingIdSelector).textContent = this._id;
    this._element.querySelector(mailingNameSelector).textContent = this._name;
    this._element.querySelector(mailingMessengerSelector).textContent =
      this._messenger;
    this._element.querySelector(mailingSentMessagesSelector).textContent =
      this._sentMessages;
    this._element.querySelector(mailingConversionRateSelector).textContent =
      this._conversionRate;
    this._element.querySelector(mailinglaunchStatusSelector).textContent =
      this._launchStatus;
  }

  _setlaunchStatusStyle() {
    if (this._launchStatus === "Отклонено") {
      this._element
        .querySelector(mailinglaunchStatusSelector)
        .classList.add("mailing-list__cell_data_launch-status_rejected");
    }
  }

  generate(tableRowSelector) {
    this._getElement(tableRowSelector);

    this._formatSentMessages();
    this._formatConversionRate();

    this._setContent();
    this._setlaunchStatusStyle();

    return this._element;
  }

  insert() {
    this._container.append(this._element);
  }
}

// в будущем будем запрашивать данные с сервера:
// const mailingsList = fetch(...);

// а пока - так:
const mailingsList = [
  {
    id: 12345678,
    name: "№1",
    messenger: "Telegram",
    sentMessages: 10,
    conversionRate: 0.446,
    launchStatus: "Запущено",
  },
  {
    id: 1234567,
    name: "№2",
    messenger: "Discord",
    sentMessages: 34,
    conversionRate: 0,
    launchStatus: "Отклонено",
  },
  {
    id: 123456,
    name: "№3",
    messenger: "Viber",
    sentMessages: 0,
    conversionRate: 1,
    launchStatus: "Запущено",
  },
];

const mailingWindow = document.querySelector(".mailing-window");

const mailingListSection = mailingWindow.querySelector(".mailing-list");
const mailingListTutorials = mailingWindow.querySelector(".mailing-tutorials");
const mailingListPlaceholder = mailingWindow.querySelector(
  ".mailing-list-placeholder",
);

// можно проверить, что при пустом списке показывается другой блок
if (mailingsList.length == 0) {
  mailingWindow.classList.add("mailing-window_centered");
  mailingListSection.classList.remove("mailing-list_visible");
  mailingListTutorials.classList.remove("mailing-tutorials_visible");
  mailingListPlaceholder.classList.add("mailing-list-placeholder_visible");
}

mailingsList.forEach((mailingObject) => {
  const mailing = new Mailing(
    mailingObject,
    ".mailing-list__body",
    "#mailing-template",
  );
  mailing.generate(".mailing-list__row");
  mailing.insert();
});

// Фильтрация по статусу
const statusFilter = mailingWindow.querySelector(".mailing-list__filter-icon");
const statusList = mailingWindow.querySelector(".selector__items");

function toggleFilter() {
  statusFilter.classList.toggle("mailing-list__filter-icon_upside-down");
  statusList.classList.toggle("selector__items_open");
}

statusFilter.addEventListener("click", toggleFilter);

const currentStatus = mailingWindow.querySelector(".mailing-list__filter-text");
const options = Array.from(statusList.querySelectorAll(".selector__item"));

options.forEach((option) => {
  option.addEventListener("click", () => {
    currentStatus.textContent = option.textContent;
    toggleFilter();
  });
});
