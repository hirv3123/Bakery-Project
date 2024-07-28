const searchIcon = document.querySelector(".search-icon");
const searchFrom = document.querySelector(".search-from");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

searchIcon.addEventListener("click", () => {
searchFrom.classList.add("active");
cartItemsContainer.classList.remove("active");
navbar.classList.remove("active");
});

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
    searchFrom.classList.remove("active");
    cartItemsContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active");
    searchFrom.classList.remove("active");
    navbar.classList.remove("active");
});

window.onscroll = () => {
    cartItemsContainer.classList.remove("active");
    searchFrom.classList.remove("active");
    navbar.classList.remove("active"); 
};