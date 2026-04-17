const ph = document.getElementById("photopicture");
const photo = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
]
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(nameInput.value, passwordInput.value);
    const randomIndex = Math.floor(Math.random() * photo.length);
    ph.src = photo[randomIndex];
});