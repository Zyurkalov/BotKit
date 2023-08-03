import "../scss/add-bot/add_bot.scss";
import { selectors } from "./constants";
import "./ui-kit/ui_kit_navigation";

const page = document.querySelector("." + selectors.allPage.pageContainer);
const main = page.querySelector("." + selectors.allPage.main);
const items = main.querySelectorAll("." + selectors.addBotPage.buttonSocial);

const infoblock = main.querySelector(".infoblock");
const messegeTitle = main.querySelector(".messege__title");
const messegeText = main.querySelector(".messege__text");

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

////// новый код
const socialValue = {
  facebook: {
    name: "Facebook",
    icon: "<%=require('../images/social-icons/facebook/default.svg')%>",
    alt: "феисбук",
    path: "facebook",
    id: "#facebook-templ",
  },
  vk: {
    name: "VK",
    icon: "<%=require('../../images/social-icons/vk/default.svg')%>",
    alt: "вконтакте",
    path: "vk",
    id: "#facebook-templ",
  },
  odnoklassniki: {
    name: "Odnoklassniki",
    icon: "<%=require('../../images/social-icons/odnoklassniki/default.svg')%>",
    alt: "одноклассники",
    path: "odnoklassniki",
    id: "#facebook-templ",
  },
  telegram: {
    name: "Telegram",
    icon: "<%=require('../../images/social-icons/telegram/default.svg')%>",
    alt: "телеграм",
    path: "telegram",
    id: "#telegram-templ",
  },
  viber: {
    name: "Viber",
    icon: "<%=require('../../images/social-icons/viber/default.svg')%>",
    alt: "вайбер",
    path: "viber",
    id: "#viber-templ",
  },
  alisa: {
    name: "Алиса",
    icon: "<%=require('../../images/social-icons/alisa/default.svg')%>",
    alt: "алиса",
    path: "alisa",
    id: "#telegram-templ",
  },
  whatsapp: {
    name: "Whatsapp",
    icon: "<%=require('../../images/social-icons/whatsapp/default.svg')%>",
    alt: "ватсап",
    path: "whatsapp",
    id: "#viber-templ",
  },
  instagram: {
    name: "Instagram",
    icon: "<%=require('../../images/social-icons/insta/default.svg')%>",
    alt: "инстаграм",
    path: "insta",
    id: "#viber-templ",
  },
  web: {
    name: "Веб-сайт",
    icon: "<%=require('../../images/social-icons/web/default.svg')%>",
    alt: "веб-сейт",
    path: "web",
    id: "#telegram-templ",
  },
};

// function expandPanel(size) {
//   infoblock.style.minHeight = `${size}` + "px";
//   messegeTitle.textContent = "";
//   messegeText.textContent = "";
// }

function createBotWindow(value) {
  const elementTemplate = document.querySelector(value.id).content;
  const templateElement = elementTemplate
    .querySelector(".bot-setting")
    .cloneNode(true);
  const imgElement = templateElement.querySelector(".social-icon");
  const headerElement = templateElement.querySelector(".bot-setting__header");

  const container = document.querySelector(".infoblock");
  const faqPanel = container.querySelector(".faq-panel");
  const submitBtn = templateElement.querySelector(".bot-setting__submit");

  imgElement.classList.add("social-icon_" + value.path);
  imgElement.src = value.icon;
  imgElement.alt = value.alt;
  headerElement.textContent = value.name;

  console.log(imgElement);

  container.append(templateElement);
  faqPanel.classList.remove("hidden");
  container.style.height = "513px";

  submitBtn.addEventListener("click", () => {
    templateElement.remove(container);
    faqPanel.classList.add("hidden");
    container.style.height = "330px";
  });
  console.log(templateElement);
}
const sociaIcons = document.querySelector(".social__items");

const facebookBtn = sociaIcons.querySelector("#facebook");
const vkBtn = sociaIcons.querySelector("#vk");
const odnoklassnikiBtn = sociaIcons.querySelector("#odnokassniki");
const telegramBtn = sociaIcons.querySelector("#telegram");
const viberBtn = sociaIcons.querySelector("#viber");
const alisaBtn = sociaIcons.querySelector("#alisa");
const whatsappBtn = sociaIcons.querySelector("#whaatsapp");
const instagramBtn = sociaIcons.querySelector("#instagram");
const websiteBtn = sociaIcons.querySelector("#website");

// facebookBtn.addEventListener('click', createBotWindow(socialValue.facebook));
// vkBtn.addEventListener("click", createBotWindow(socialValue.vk));
// odnoklassnikiBtn.addEventListener("click", createBotWindow(socialValue.odnoklassniki))
// telegramBtn.addEventListener("click", createBotWindow(socialValue.telegram));
// viberBtn.addEventListener("click", createBotWindow(socialValue.viber));
// alisaBtn.addEventListener("click", createBotWindow(socialValue.alisa));
//  whatsappBtn.addEventListener("click", createBotWindow(socialValue.whatsapp));
// instagramBtn.addEventListener("click", createBotWindow(socialValue.instagram));
// websiteBtn.addEventListener("click", createBotWindow(socialValue.web));
