import "../../scss/ui-kit/ui_kit_components.scss";

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
