let bomboclatttt = document.getElementById('maindiv')

fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => {
        bomboclatttt.innerHTML = `
            <h1>${json.title}</h1>
        `
    })
