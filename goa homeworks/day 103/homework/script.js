//gadmogvaq register forma da login forma
const regForm = document.getElementById("registerForm")
const loginForm = document.getElementById("loginForm")
//vqmnit user arrays sadac sevinaxavt momxmareblis informacias
const users = []

//vamatebt registracis formas add event listener da roca momxmarebeli dajers submits gaesveba qvemot mocemuli kodi
regForm.addEventListener("submit", (e) => {
    //prevent default aketebs saiti ar daresetdes submit gilakis dawolisas
    e.preventDefault();
    //push vamatebt momxmareblis full names.values emailis da parolis.valius
    users.push({fullname: regForm.fullname.value, email: regForm.email.value, password: regForm.password.value})
    //tu yvelafers cawers omxmarebeli gamoitans alert funqcia "Registered Succesfully ✅"
    alert("Registered Succesfully ✅")
    console.log(users)
    //da aresetebs registracis formas
    regForm.reset();
})
//vqmnit cvlads chekuser romelic gautoldeba momxmareblis emails da parols  loginEmail, loginPassword romelic naxulobs tu emtxveva tu ara
const checkUser = (loginEmail, loginPassword) => {
    //sevqmenit ai da sanam i ari users.length naklebi i davumatot 1
    for(let i = 0; i < users.length; i++){
        //sevamowmot tu momxmareblis email == loginis emails da momxmareblis paroli tolia loginpasswordis davabrunot true sxva semtxvevasi false
        if(users[i].email === loginEmail && users[i].password === loginPassword){
            return true
        }
    }
    return false
}

//vumatebt loginis formas add event listeners roca momxmarebeli dajers submits 
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // dacekas tu checkuseris login emaili da paroli sworia gadagviyvanos main.html ze
    if(checkUser(loginForm.loginEmail.value, loginForm.loginPassword.value)){
        window.location.href = "./main.html"
    }else{
        //sxva semtxvevasi gamoitanos incorrect info
        alert("Incorrect Info!")
    }
})