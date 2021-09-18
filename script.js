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



let text = 'Самооценка: 150 баллов';
let text2 = `✓ вёрстка валидная +10
✓ вёрстка семантическая +20 (Применял: main, nav, section, figure, footer; h1, h2, h3, h4, h5)
✓ для оформления СV используются css-стили +10
✓ контент размещается в блоке, который горизонтально центрируется на странице. +10
✓ вёрстка адаптивная +10
✓ есть адаптивное бургер-меню. +10
✓ на странице СV присутствует изображение - фото или аватарка автора CV +10
✓ контакты для связи и перечень навыков оформлены в виде списка ul > li +10
✓ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
✓ CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. +10
✓ CV содержит изображения-ссылки на выполненные вами проекты. +10
✓ CV выполнено на английском языке +10
✓ выполнены требования к Pull Request +10
✓ дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10
`;
let text3 = '- Видео отсутствует';
let text4 = 'Pull requests: https://github.com/yurkab24/rsschool-cv/pulls';


console.log('%c%s', 'color: black; font: 1rem/1 Tahoma;', text);
console.log('%c%s', 'color: black; font: 0.9rem/1 Tahoma;', text4);
console.log('%c%s', 'color: green; font: 0.9rem/1 Tahoma;', text2);
console.log('%c%s', 'color: red; font: 0.9rem/1 Tahoma;', text3);

