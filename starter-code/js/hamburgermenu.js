"strict mode"

const hambugerMenu = document.querySelector(".menu-hamburgesa")
const menuNav = document.querySelector(".nav")
const iconClose = document.querySelector(".icon-close-section__icon-close")

hambugerMenu.addEventListener("click", () => {
  menuNav.style.transform = "translateX(0)"
})

iconClose.addEventListener("click", () => {
  menuNav.style.transform = "translateX(100%)"
})
