const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = navigation.querySelectorAll("a");
const desktopNavigation = window.matchMedia("(min-width: 48rem)");

const setMenuState = (isOpen) => {
    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navigation.querySelector(".nav-list").classList.toggle("is-open", isOpen);
};

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuState(false);
        menuButton.focus();
    }
});

desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) {
        setMenuState(false);
    }
});
