fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => {

            document.body.innerHTML = `
                <h2>${json.title}</h2>
                <p>${json.description}</p>
                <p>Price: $${json.price}</p>
                <img src="${json.image}">
            `;
        });