let maindiv = document.getElementById('maindiv')
fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => {

            maindiv.innerHTML = `
            <div id='div'>
                <img src="${json.image}"><br>
                <p>${json.title}</p>
                <p>Price: $${json.description}</p><br>
                <h2>$${json.price}</h2>
            </div>
            `;
        });

fetch('https://fakestoreapi.com/products/2')
        .then(res => res.json())
        .then(json => {

            maindiv.innerHTML = `
            <div id='div'>
                <img src="${json.image}"><br>
                <p>${json.title}</p>
                <p>Price: $${json.description}</p><br>
                <h2>$${json.price}</h2>
            </div>
            `;
        });