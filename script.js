"use strict";

////////////////////////VARIABLES/////////////////////////
const hamburger = document.querySelector(".hamburger");
const ham_icon = document.querySelector(".hamburger__icon");
const nav = document.querySelector(".nav__lists");
const nav_overlay = document.querySelector(".nav__overlay");
const dropbar = document.querySelectorAll(".dropbar");

// ham state
let hamClicked = false;

///////////////////////FUNCTIONS//////////////////////////
// initiate hamburger
const initHam = function () {
  // animate ham
  hamburger.style.transform = "rotate(90deg)";

  // slide nav__list in
  nav.classList.add("transform");

  // apply overlay
  nav_overlay.style.display = "block";
};

// terminate hamburger
const termittHam = function () {
  // animate ham
  hamburger.style.transform = "rotate(0deg)";

  // slide nav__list out
  nav.classList.remove("transform");

  // remove overlay
  nav_overlay.style.display = "none";
};

/////////////////////EVENTS////////////////////////////
// hamburger
hamburger.addEventListener("click", function () {
  if (!hamClicked) {
    initHam();
  } else {
    termittHam();
  }
  // switch ham condition
  hamClicked = !hamClicked;
});

// nav__overlay event
nav_overlay.addEventListener("click", function () {
  termittHam();
  // switch ham condition
  hamClicked = !hamClicked;
});

// dropbar
// dropdown condition
let dropClicked = false;
// current dropdown tracker
let current = [];

dropbar.forEach((d, i, arr) => {
  d.addEventListener("mouseover", function (e) {
    e.preventDefault();

    // saving previous opened dropdown
    current.push(d);
    // making current array maintain one content
    if (current.length == 3) {
      current.splice(0, 1);
    }

    d.querySelector(".nav__link__drop-lists").style.visibility = "visible";

    if (d !== current[0]) {
      current[0].querySelector(".nav__link__drop-lists").style.visibility =
        "hidden";
    }
  });

  d.addEventListener("mouseout", function () {
    d.querySelector(".nav__link__drop-lists").style.visibility = "hidden";
  });
});
