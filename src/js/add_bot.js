import "../scss/add-bot/add_bot.scss";

import { closeMenu } from "./ui-kit/ui_kit_navigation.js";

const page = document.querySelector(".page__container");
const content = page.querySelector(".main");
const socials = content.querySelectorAll(".social__item");
// const socials = content.querySelector(".social__item");

// socials.forEach(elem => {
//   const socialName = elem.querySelector(".button-social__caption").textContent;

//   elem.addEventListener("click", (socialName) => {
//       const socialName = elem.querySelector(".button-social__caption").textContent;
//       console.log(socialName);
//       // addBot(socialName);
//   })
// });

// function addBot(name) {
//   // const socialName = social.querySelector(".button-social__caption").textContent;
//   console.log(name);
// };

// console.log(socials);
