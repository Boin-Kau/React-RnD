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

// get playing contents
const getPlayingContents = () => {
  $.ajax({
        type: "GET",
        url: "https://yts.mx/api/v2/list_movies.json",
        data: {
          limit: 10,
          page: 2
        },
        dataType: "JSON",
        async: false,
        //성공적으로 서버에서 응답이 왔을때
        success: (result, status) => {

            const { movies } = result.data;
            console.log(movies);

            let childHtml = ``;

            for(let i = 0; i < movies.length; i++) {
              childHtml = `
                <div class="slider_item">
                  <a href="#">
                    <img src="${movies[i].medium_cover_image}" alt="">
                  </a>
                </div>
              `;
              $('#playing_contents .slider_contents').append(childHtml);
            }
        },
        //서버와 데이터주고받기가 실패했을때
        error: (request, status, error) => {

        },
    });
}
getPlayingContents();

// get playing contents
const getHotContents = () => {
  $.ajax({
        type: "GET",
        url: "https://yts.mx/api/v2/list_movies.json",
        data: {
          limit: 10,
          page: 3
        },
        dataType: "JSON",
        async: false,
        //성공적으로 서버에서 응답이 왔을때
        success: (result, status) => {

            const { movies } = result.data;
            console.log(movies);

            let childHtml = ``;

            for(let i = 0; i < movies.length; i++) {
              childHtml = `
                <div class="slider_item">
                  <a href="#">
                    <img src="${movies[i].medium_cover_image}" alt="">
                  </a>
                </div>
              `;
              $('#hot_contents .slider_contents').append(childHtml);
            }
            

        },
        //서버와 데이터주고받기가 실패했을때
        error: (request, status, error) => {

        },
    });
}
getHotContents();

// get playing contents
const getRecommendContents = () => {
  $.ajax({
        type: "GET",
        url: "https://yts.mx/api/v2/list_movies.json",
        data: {
          limit: 10,
          page: 4
        },
        dataType: "JSON",
        async: false,
        //성공적으로 서버에서 응답이 왔을때
        success: (result, status) => {

            const { movies } = result.data;
            console.log(movies);

            let childHtml = ``;

            for(let i = 0; i < movies.length; i++) {
              childHtml = `
                <div class="slider_item">
                  <a href="#">
                    <img src="${movies[i].medium_cover_image}" alt="">
                  </a>
                </div>
              `;
              $('#recommend_contents .slider_contents').append(childHtml);
            }
            

        },
        //서버와 데이터주고받기가 실패했을때
        error: (request, status, error) => {

        },
    });
}
getRecommendContents();