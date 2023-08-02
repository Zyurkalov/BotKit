import "../scss/add-bot/add_bot.scss";
import { selectors } from "./constants";
import "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const items = main.querySelectorAll("." + selectors.addBotPage.buttonSocial);

items.forEach((item) => {
  // const socialName = elem.querySelector(".button-social__caption").textContent;
  addBot(item);
});

function addBot(elem) {
  elem.addEventListener("click", () => {
    items.forEach((item) => {
      if (elem.id != item.id) {
        item.setAttribute("disabled", "");
      } else {
        // item.classList.add("button-social-active");
        item
          .querySelector(":hover svg rect")
          .classList.add("button-social-active");
        // const ttt = item.querySelector(":hover svg rect").setAttribute("fill", "#2d88ff");
        // ttt.setAttribute("fill", "#2d88ff");

        // console.log(ttt);
      }
      // console.log(elem.id, item.id);
    });
  });
  // console.log(elem);
}
