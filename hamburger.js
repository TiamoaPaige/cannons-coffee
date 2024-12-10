// console.log("hello")
const ul = document.querySelector(".nav-links");
console.log(ul)
const burgerButton = document.getElementById("burger-button")
console.log(burgerButton)

const menuCloseIcon = document.getElementById("menu-closed");
console.log(menuCloseIcon)
const menuOpenIcon = document.getElementById("menu-open");
console.log(menuOpenIcon)
function actionBurgerButtonClick(){
    console.log("button clicked");
    ul.classList.toggle("visible");
    menuCloseIcon.classList.toggle("visible");
    menuOpenIcon.classList.toggle("visible")
}
burgerButton.addEventListener("click",actionBurgerButtonClick)
