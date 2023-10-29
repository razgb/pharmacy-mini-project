"use script";

const navContainer = document.querySelector(".nav__container");
// const navLink = document.addEventListener(".nav__link");

navContainer.addEventListener("mouseover", function (e) {
  e.preventDefault(); // incase button link is pressed.

  const allNavItems = document.querySelectorAll(".nav__item");
  const navItem = e.target.closest(".nav__item");
  if (!navItem) return; // guard

  // 1) Add blurry class to all nav__item elements.
  allNavItems.forEach((item) => item.classList.add("lighten-effect"));

  // 2) Remove blurry class from targeted element.
  navItem.classList.remove("lighten-effect");

  console.log(navItem);
});

navContainer.addEventListener("mouseout", function (e) {
  e.preventDefault(); // incase button link is pressed.
  const allNavItems = document.querySelectorAll(".nav__item");
  allNavItems.forEach((item) => item.classList.remove("lighten-effect"));
});
