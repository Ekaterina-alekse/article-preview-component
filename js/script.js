const shareBtn = document.querySelector(".card__share-btn");
const closeBtn = document.querySelector(".share-menu__close-btn");
const shareMenu = document.querySelector(".card__share-menu");

function toggleMenu() {
    const isHidden = shareMenu.hidden;
    shareMenu.hidden = !isHidden;
    shareBtn.setAttribute("aria-expanded", isHidden);
}

// Открытие по основной кнопке
shareBtn.addEventListener("click", toggleMenu);

// Закрытие по кнопке внутри меню
closeBtn.addEventListener("click", toggleMenu);