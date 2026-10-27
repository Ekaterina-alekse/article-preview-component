const shareBtn = document.querySelector(".card__share-btn");
const closeBtn = document.querySelector(".share-menu__close-btn");
const shareMenu = document.querySelector(".card__share-menu");

function toggleMenu() {
    const isHidden = shareMenu.hidden;
    shareMenu.hidden = !isHidden;
    shareBtn.setAttribute("aria-expanded", isHidden);
}

shareBtn.addEventListener("click", toggleMenu);

closeBtn.addEventListener("click", toggleMenu);