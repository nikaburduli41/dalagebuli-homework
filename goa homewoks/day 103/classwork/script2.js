const regForm = getelementbyid("rform")
const loginForm = getelementbyid("lform")
const users = []

regForm.addeventlistener("submit", (e) => {
    e.preventdefault();
    users.push({fullname: regForm.fullname.value, email: regForm.email.value, password: regForm.password.value})
    alert("Registered Succesfully ✅")
    console.log(users)
    regForm.reset();
})
loginForm.addeventlistener("submit", (e) => {
    e.preventdefault();
    if(checkuser(loginForm.loginemail.value, loginForm.loginpassword.value)){
        window.location.href = "./home.html"
    }else{
        alert("Incorrect Info!")
    }
}
)
const checkuser = (loginemail, loginpassword) => {
    for(let i = 0; i < users.length; i++){
        if(users[i].email === loginemail && users[i].password === loginpassword){
            return true
        }
    }
    return false
}
