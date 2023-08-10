export const botActions = document.querySelector(".card__actions_dynamic");

export function openBotActionsList(event) {
  const viewportWidth = window.innerWidth;
  const distanceToRightEdge = viewportWidth - event.pageX;

  if (distanceToRightEdge < viewportWidth / 4) {
    botActions.style.left = "auto";
    botActions.style.right = distanceToRightEdge + "px";
  } else {
    botActions.style.left = event.layerX + "px";
    botActions.style.right = "auto";
  }
  botActions.style.top = event.pageY + 20 + "px";
  botActions.classList.toggle("card__actions_dynamic_open");
}
