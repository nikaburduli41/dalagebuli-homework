const firstname = document.getElementById('input1');
const lastname = document.getElementById('input2');
const email = document.getElementById('input3');
const password3 = document.getElementById('input4');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    console.log(`firstname: ${firstname.value}`, `lastname: ${lastname.value}`, `email: ${email.value}`, `password: ${password3.value}`);
});