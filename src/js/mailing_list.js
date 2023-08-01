import "../scss/mailing-list/mailing_list.scss";

import { closeMenu } from "./ui-kit/ui_kit_navigation.js";

class Mailing {
  constructor(
    { id, name, messenger, sentMessages, conversionRate, launchStatus },
    containerSelector,
    templateSelector,
  ) {
    this._id = id;
    this._name = name;
    this._messenger = messenger;
    this._sentMessages = sentMessages;
    this._conversionRate = conversionRate;
    this._launchStatus = launchStatus;
    this._container = document.querySelector(containerSelector);
    this._template = document.querySelector(templateSelector).content;
  }

  _getElement() {
    this._element = this._template
      .querySelector(mailingRowSelector)
      .cloneNode(true);
  }

  _formatSentMessages() {
    const lastDigit = this._sentMessages.toString()[-1];
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
      this._sentMessagesString;
    this._element.querySelector(mailingConversionRateSelector).textContent =
      this._conversionRate;
    this._element.querySelector(mailinglaunchStatusSelector).textContent =
      this._launchStatus;
  }

  _setlaunchStatusStyle() {
    if (this._launchStatus === "Отклонено") {
      this._element
        .querySelector(mailinglaunchStatusSelector)
        .classList.add("_rejected");
    }
  }

  generate() {
    this._getElement();

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

// в будущем будет так:
// mailingsList = fetch(...);
// а пока - так:
mailingsList = [
  {
    id: 12345678,
    name: "№1",
    launchStatus: "Запущено",
  },
  {
    id: 12345678,
    name: "№2",
    launchStatus: "Отклонено",
  },
  {
    id: 12345678,
    name: "№3",
    launchStatus: "Запущено",
  },
];

mailingsList.forEach((mailingObject) => {
  const mailing = new Mailing(mailingObject, "", "");
});
