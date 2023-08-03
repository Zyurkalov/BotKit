import "../scss/pp/pp.scss";
import "./ui-kit/ui_kit_navigation";

const statsButtonUp = document.querySelector(".stats-up-button");
const ppWindowContainer = document.querySelector(".pp-window__container");
const statsPayout = document.querySelector(".table-payout");

function toggleStatsClosedOpen() {
  ppWindowContainer.classList.toggle("pp-window__container-closed");
  statsPayout.classList.toggle("table-payout-closed");
  statsButtonUp.classList.toggle("stats-up_rotate");
}

statsButtonUp.addEventListener("click", toggleStatsClosedOpen);
