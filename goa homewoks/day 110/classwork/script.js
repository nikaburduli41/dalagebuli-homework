//1//
user = {
    username: "nick",
    email: "email@gmail.com",
    city: "New York",
    age: 30
}
users.forEach(elm => {
    document.innerHTML += `
        <div>
            <p><b>Username:</b> ${elm.username}</p>
            <p><b>Email:</b> ${elm.email}</p>
            <p><b>City:</b> ${elm.city}</p>
            <p><b>Age:</b> ${elm.age}</p>
        </div>
    `;
});
