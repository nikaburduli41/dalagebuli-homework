const maindiv = document.getElementById('maindiv')
const key = "1fab308981764501b85c1a214ded4756"
const city = "Tbilisi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(data => 
        maindiv.innerHTML = `
        <h1>party cloud</h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBnAbAlFNr77oZPUuQibMEVMN_pa6sHz-gg&s'>
        <h2>${data.main.temp}C</h2>
        <h3>location tbilisi</h3>

        `
    )