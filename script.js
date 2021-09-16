"use strict"

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        menu.querySelectorAll(".menu__item a").forEach((link) => {
            link.addEventListener("click", () => menu.classList.remove("active"));
        });
    }
});

