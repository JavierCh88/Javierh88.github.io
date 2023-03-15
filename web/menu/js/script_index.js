const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
let isOpen = false;
menuButton.addEventListener("click", () => {
  if (isOpen) {
    menuButton.style.transform = `rotateY(${0}deg)`;
    menu.setAttribute("style", "display:none");
  } else {
    menuButton.style.transform = `rotateY(${180}deg)`;
    menu.setAttribute("style", "display:block");
  }
  isOpen = !isOpen;
});
