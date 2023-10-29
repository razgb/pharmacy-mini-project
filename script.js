"use script";

//
// NAVIGATION FADE OUT AND FADE IN EFFECT
//

const navContainer = document.querySelector(".nav__container");

navContainer.addEventListener("mouseover", function (e) {
  e.preventDefault(); // incase button link is pressed.

  const allNavItems = document.querySelectorAll(".nav__item");
  const navItem = e.target.closest(".nav__item");
  if (!navItem) return; // guard

  // 1) Add blurry class to all nav__item elements.
  allNavItems.forEach((item) => item.classList.add("lighten-effect"));

  // 2) Remove blurry class from targeted element.
  navItem.classList.remove("lighten-effect");

  // console.log(navItem);
});

navContainer.addEventListener("mouseout", function (e) {
  e.preventDefault(); // incase button link is pressed.
  const allNavItems = document.querySelectorAll(".nav__item");
  allNavItems.forEach((item) => item.classList.remove("lighten-effect"));
});

//
// INTERSECTION OBSERVER TO REMOVE (VIEW-OUT) CLASS FOR SECTIONS.
//

// Element and options setup.
const sectionViewOut = document.querySelectorAll(".view-out");
const sectionOptions = {
  root: null, // means viewport by default
  rootMargin: "", // how much above or below 50% the obsrv shows.
  threshold: 0.2, // this means when 50% of the section shows.
};

// Instance of observer.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("view-out");
      console.log("Observer 🔭");
    }
  });
}, sectionOptions);

sectionViewOut.forEach((sect) => {
  sectionObserver.observe(sect);
});
