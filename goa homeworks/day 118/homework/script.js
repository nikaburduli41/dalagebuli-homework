const film = document.querySelector('input');
const movieDiv = document.getElementById('movieDiv');

function movieFinder() {
    const filmValue = film.value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=38c8a267e25940bf35aa75921cdd6af2&query=${encodeURIComponent(filmValue)}`)
        .then((res) => res.json())
        .then((movie) => {

            const results = movie.results;
            const movieData = results[0];


            movieDiv.innerHTML = `
                <h2 id='heading_2'>${movieData.orignal_title} (${movieData.release_date})</h2>
                
                <img id='img1' src="https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}" alt="">
                <img src="https://image.tmdb.org/t/p/w400/${movieData.poster_path}" alt="">
                <button>${movieData.popularity}</button>
                <p>${movieData.overview}</p>
            `;
        });
}