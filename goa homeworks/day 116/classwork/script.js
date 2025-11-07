const maindiv = document.getElementById('div')
fetch(`https://api.themoviedb.org/3/search/movie?api_key=38c8a267e25940bf35aa75921cdd6af2&query=${encodeURIComponent("shrek 2")}`)
    .then(res => res.json())
    .then(jsonn => console.log(jsonn))
    .then (jsonn2 => {
        maindiv.innerHTML =  `
            <img src='https://image.tmdb.org/t/p/w400/$%7Bjsonn2.src%7D'>
            <p>${jsonn2.title}</p>
            <p>${jsonn2.desc}</p> 
`
    })