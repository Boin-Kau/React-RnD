'use strict';

// sticky header Event
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if(window.scrollY > headerHeight) {
    header.setAttribute("style", "background: black;");
  } else {
    header.setAttribute("style", "background: transparent;");
  }
});

// 질문 1. js 파일은 어떻게 관리해야 되는지 
// 질문 2. 하나의 js 파일에는 어떤 코드를 모으는게 적절한지? 
// 질문 2-1. 그 기준이 궁금. ex.화면별, 섹션별