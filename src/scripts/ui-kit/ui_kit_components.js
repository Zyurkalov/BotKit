import "../../blocks/ui-kit/ui_kit_components.scss";
import { openBotActionsList } from "./ui_kit_menu_popup_opener";

// Отмечаем выбранную опцию в списке с единственным выбором
const calendarActions = Array.from(
  document.querySelectorAll(".calendar__action"),
);
calendarActions.forEach((calendarAction) => {
  calendarAction.addEventListener("click", () => {
    calendarActions.forEach((action) => {
      action.classList.remove("calendar__action_chosen");
    });
    calendarAction.classList.add("calendar__action_chosen");
  });
});

// Пробрасываем выбранную опцию в превью в выпадающем списке
const dropDownFieldsList = document.querySelector(".selector__items_dropdown");
const currentValue = document.querySelector(".selector__current-value");

const dropDownOptions = Array.from(
  dropDownFieldsList.querySelectorAll(".selector__item"),
);

dropDownOptions.forEach((dropDownOption) => {
  dropDownOption.addEventListener("click", () => {
    currentValue.textContent = dropDownOption.textContent;
    openDropDownList();
  });
});

// Меняем направление стрелочки в превью в выпадающем списке
const arrowButton = document.querySelector(
  ".ui-kit-navigation__arrow-toggle-icon",
);
const arrowButtonImg = arrowButton.querySelector(".ui-kit-navigation__arrow");

arrowButton.addEventListener("click", openDropDownList);

function openDropDownList() {
  dropDownFieldsList.classList.toggle("selector__items_dropdown_open");
  arrowButtonImg.classList.toggle("ui-kit-navigation__arrow_up");
}

// Открываем всплывающее меню для совершения действий с ботом
const moreButton = document.querySelector(".card__more-button");

moreButton.addEventListener("click", openBotActionsList);
// Multiple Choice List

// все галочки обычных опций
const checkmarks = Array.from(
  document.querySelectorAll(".selector__checkmark"),
);

// отдельная опция "выбрать всё"
const allItemsOption = document.querySelector(".selector__item-all");

// галочка опции "выбрать всё"
const allItemsCheckmark = allItemsOption.querySelector(
  ".selector__checkmark-for-all",
);

checkmarks.forEach((checkmark) => {
  checkmark.closest(".selector__item").addEventListener("click", () => {
    // меняем состояние галочки
    checkmark.classList.toggle("selector__checkmark_checked");
    if (
      // если после изменения все галочки оказались выбраны
      checkmarks.every((checkmark) =>
        checkmark.classList.contains("selector__checkmark_checked"),
      )
    ) {
      // то добавляем галочку опции "выбрать всё"
      allItemsCheckmark.classList.add("selector__checkmark-for-all_checked");
    } else {
      // иначе - снимаем галочку с опции "выбрать всё"
      allItemsCheckmark.classList.remove("selector__checkmark-for-all_checked");
    }
  });
});

allItemsOption.addEventListener("click", () => {
  if (
    // если отмечена галочка "выбрать всё"
    allItemsCheckmark.classList.contains("selector__checkmark-for-all_checked")
  ) {
    // то убираем галочку со всех отдельных опций
    checkmarks.forEach((checkmark) => {
      checkmark.classList.remove("selector__checkmark_checked");
    });
    // и с опции "выбрать всё" тоже
    allItemsCheckmark.classList.remove("selector__checkmark-for-all_checked");
  } else {
    // иначе добавляем галочку всем отдельным опциям
    checkmarks.forEach((checkmark) => {
      checkmark.classList.add("selector__checkmark_checked");
    });
    // и опции "выбрать всё" тоже
    allItemsCheckmark.classList.add("selector__checkmark-for-all_checked");
  }
});

// Weekdays Choice

const weekdays = Array.from(document.querySelectorAll(".weekdays__weekday"));

weekdays.forEach((weekday) => {
  weekday.addEventListener("click", () => {
    weekday.classList.toggle("weekdays__weekday_chosen");
  });
});

// Calendar

import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

const currentDate = document.querySelector(".calendar__chosen-date");

new AirDatepicker(".calendar", {
  inline: true,
  onSelect({ date, formattedDate, datepicker }) {
    currentDate.value = formattedDate;
  },
});
