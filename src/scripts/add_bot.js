import "../blocks/add-bot/add_bot.scss";
import { selectors } from "./constants";
import "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const items = main.querySelectorAll("." + selectors.addBotPage.buttonSocial);
const itemsBox = main.querySelector(".social__items");
const container = main.querySelectorAll(".container");
const question = main.querySelector("#question");

items.forEach((item) => {
  selectSocial(item);
});

function canselSelectSocial(e) {
  if (e.key === "Escape") {
    items.forEach((item) => {
      item.removeAttribute("disabled");
      item
        .querySelector(":hover svg rect")
        .classList.remove("button-social-active");
      selectContainer();
    });
    document.removeEventListener("keydown", canselSelectSocial);
  }
}

function selectSocial(elem) {
  elem.addEventListener("click", () => {
    items.forEach((item) => {
      if (elem.id != item.id) {
        item.setAttribute("disabled", "");
      } else {
        item
          .querySelector(":hover svg rect")
          .classList.add("button-social-active");
        const socialName = elem.querySelector(
          ".button-social__caption",
        ).textContent;
        selectContainer(socialName);
      }
    });
    document.addEventListener("keydown", canselSelectSocial);
  });
}

itemsBox.addEventListener("wheel", (e) => {
  e.preventDefault();
  itemsBox.scrollLeft += e.deltaY;
});

function selectContainer(id) {
  let counter = 0;
  container.forEach((block) => {
    if (id === block.id) {
      block.classList.remove("hidden");
      counter += 1;
    } else {
      block.classList.add("hidden");
      question.classList.remove("hidden");
    }
  });

  if (counter > 0) {
    question.classList.add("hidden");
  }
}
