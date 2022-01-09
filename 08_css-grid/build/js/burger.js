window.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".header-bottom-more__list");
    burger.addEventListener("click", () => {
        nav.classList.toggle("flex");
        burger.classList.toggle("x")
    })
});