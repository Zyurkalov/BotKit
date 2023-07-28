import "../scss/dashboard/dashboard.scss";

import { closeMenu } from "./ui-kit/ui_kit_navigation";

const page = document.querySelector(".page");
const header = page.querySelector(".header");
const headerMenu = header.querySelector(".header__menu");

headerMenu.addEventListener("click", () => closeMenu());
