const div = document.getElementById('maindiv')
const key = "1fab308981764501b85c1a214ded4756"
const city = "Sudan";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${encodeURIComponent(city)}&appid=${key}&units=metric`)
    .then(res => res.json())
    // .then(data => console.log(data.main.temp))
    .then(data => {
        div.innerHTML = `
            <h2>temp ${data.main.temp}</h2>
        `
    })