const dropItems = document.getElementsByClassName("drop-title");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navMenu = document.querySelector(".nav-menu");
const closeIcon = document.querySelector(".close-icon");

for (let i = 0; i < dropItems.length; i++) {
    dropItems[i].addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("show-drop-items");
    })
}

hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-show");
    hamburgerIcon.style.opacity = 0;
})

closeIcon.addEventListener("click", () => {
    hamburgerIcon.style.opacity = 1;
    navMenu.classList.toggle("nav-menu-show");
})