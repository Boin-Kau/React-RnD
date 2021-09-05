'use strict';

const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if(window.scrollY > headerHeight) {
    header.setAttribute("style", "background: black;");
  } else {
    header.setAttribute("style", "background: transparent;");
  }
});