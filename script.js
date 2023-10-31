"use script";

//
// NAVIGATION FADE OUT AND FADE IN EFFECT.
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

// initialising last scroll position. The roof of the webpage.
let lastScrollY = null;
// Short delay so the page sets up.
const initialiseLastScrollY = () => {
  setTimeout(() => {
    lastScrollY = window.scrollY;
  }, 500);
};
initialiseLastScrollY();

const sectionViewOut = document.querySelectorAll(".view-out");
const sectionOptions = {
  root: null, // means viewport by default
  rootMargin: "", // how much above or below 50% the obsrv shows.
  threshold: 0.2, // this means when 50% of the section shows.
};

// If page doesn't reload at the beginning.
if (window.scrollY !== 0) {
  sectionViewOut.forEach((sect) => {
    sect.classList.remove("view-out");
  });
} else {
  // Instance of observer.
  const sectionObserver = new IntersectionObserver((entries) => {
    if (lastScrollY === null) return;

    const currentScrollY = window.scrollY;

    entries.forEach((entry) => {
      if (entry.isIntersecting && currentScrollY > lastScrollY) {
        entry.target.classList.remove("view-out");
        console.log("Observer 🔭: Scrolled downwards");
      }
    });

    lastScrollY = currentScrollY; // updating. (analogy: reseting value of the roof)
  }, sectionOptions);

  sectionViewOut.forEach((sect) => {
    sectionObserver.observe(sect);
  });
}

//
// SMOOTH SCROLLING TO ALL FEATURES.
//

const navMap = {};

document.querySelectorAll(".nav__item").forEach((tab) => {
  const textContent = tab.textContent.trim();
  if (textContent.split(" ").length === 1) {
    const id = `#section__${textContent.toLowerCase()}`;
    navMap[textContent] = id;
  }
});
// console.log(navMap);

///////////////////

navContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const navItem = e.target.closest(".nav__item");
  if (!navItem) return;

  const textContent = navItem.textContent.trim();
  const targetSection = navMap[textContent];

  if (targetSection) {
    document
      .querySelector(targetSection)
      .scrollIntoView({ behavior: "smooth" });
  }
});

//
// OPERATIONS BUTTONS ANIMATION EFFECT.
//

document
  .querySelector(".operations__tab--container")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const clickedTab = e.target.closest(".operations__tab");
    if (!clickedTab) return;

    document.querySelectorAll(".operations__tab").forEach((tab) => {
      tab.classList.remove("operations__tab--active");
    });
    clickedTab.classList.add("operations__tab--active");
    return;
  });
