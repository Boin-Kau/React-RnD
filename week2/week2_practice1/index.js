


const getMovies = () => {

    $.ajax({
        type: "GET",
        url: "https://yts.mx/api/v2/list_movies.json",
        dataType: "JSON",
        async: false,
        //성공적으로 서버에서 응답이 왔을때
        success: (result, status) => {

            const { movies } = result.data;
            console.log(movies)

            let childHtml = ``;

            for (let i = 0; i < movies.length; i++) {

                childHtml = `
                    <div class="img_test">
                        <img class="img_content" src="${movies[i].medium_cover_image}" alt="">
                    </div>`;

                $('#img_wrap').append(childHtml);

            }

        },
        //서버와 데이터주고받기가 실패했을때
        error: (request, status, error) => {

        },
    });

}


getMovies();