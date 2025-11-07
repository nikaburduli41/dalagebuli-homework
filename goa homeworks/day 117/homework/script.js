let maindiv = document.getElementById('maindiv')
let input = document.getElementById('inp')
let but = document.getElementById('button')

fetch(`https://api.themoviedb.org/3/search/movie?api_key=38c8a267e25940bf35aa75921cdd6af2&query=${encodeURIComponent("shrek 2")}`)
    .then(res => res.json())
    .then(json => {
        maindiv.innerHTML = `
            <div id='div'>
                <img src="https://image.tmdb.org/t/p/w500${json.results[0].poster_path}"><br>
                <p>${json.results[0].title}</p>
                <p>Release Date: ${json.results[0].release_date}</p><br>
            </div>
        `;
    });

but.addEventListener('click',(e) => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=38c8a267e25940bf35aa75921cdd6af2&query=${encodeURIComponent(input.value)}`)
        .then(res => res.json())
        .then(json => {
            maindiv.innerHTML = `
                <div id='div'>
                    <img src="https://image.tmdb.org/t/p/w500${json.results[0].poster_path}"><br>
                    <p>${json.results[0].title}</p>
                    <p>Release Date: ${json.results[0].release_date}</p><br>
                    <h2>Rating: ${json.results[0].vote_average}</h2>
                    <h2>Popularity: ${json.results[0].popularity}</h2>
                </div>
            `;
        });
    
})
