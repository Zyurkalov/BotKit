import "../../scss/ui-kit/ui_kit_navigation.scss";

const page = document.querySelector(".page");
const mainMenu = page.querySelector(".menu");

export function closeMenu() {
  mainMenu.classList.toggle("menu-close");
  mainMenu
    .querySelector(".link_theme_blue")
    .classList.toggle("link_theme_blue-close");
  mainMenu
    .querySelector(".link__image_reverse")
    .classList.toggle("link__image_reverse-close");
  mainMenu
    .querySelector(".link__text_reverse")
    .classList.toggle("link__text_reverse-close");
}
