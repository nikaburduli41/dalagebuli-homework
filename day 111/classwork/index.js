let user1 = ["john","gmail",67]
let div = document.getElementById("ids")

user1.forEach(function(name,email,age) {
        div.innerHTML = `
            <h2>${name}</h2>
            <p>${email}</p>
            <p>${age}</p>
        `
});
