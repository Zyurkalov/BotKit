import "../../scss/ui-kit/ui_kit_components.scss";

const checkmarks = Array.from(
  document.querySelectorAll(".selector__checkmark"),
);

const allItemsOption = document.querySelector(".selector__item-all");

const allItemsCheckmark = allItemsOption.querySelector(
  ".selector__checkmark-for-all",
);

checkmarks.forEach((checkmark) => {
  checkmark.closest(".selector__item").addEventListener("click", () => {
    checkmark.classList.toggle("selector__checkmark_checked");
    if (
      checkmarks.every((checkmark) =>
        checkmark.classList.contains("selector__checkmark_checked"),
      )
    ) {
      allItemsCheckmark.classList.add("selector__checkmark-for-all_checked");
    } else {
      allItemsCheckmark.classList.remove("selector__checkmark-for-all_checked");
    }
  });
});

allItemsOption.addEventListener("click", () => {
  if (
    allItemsCheckmark.classList.contains("selector__checkmark-for-all_checked")
  ) {
    checkmarks.forEach((checkmark) => {
      checkmark.classList.remove("selector__checkmark_checked");
    });
    allItemsCheckmark.classList.remove("selector__checkmark-for-all_checked");
  } else {
    checkmarks.forEach((checkmark) => {
      checkmark.classList.add("selector__checkmark_checked");
    });
    allItemsCheckmark.classList.add("selector__checkmark-for-all_checked");
  }
});
