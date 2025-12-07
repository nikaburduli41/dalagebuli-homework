const maindiv = document.getElementById('maindiv')

const button = document.getElementById('btn')
button.addEventListener('click',function(e){
    e.preventDefault()
    //delete btn//
    button.style.display='none'
})

const p = document.getElementById('pdi').value
const btn2 = document.getElementById('btn2')

btn2.addEventListener('click',function(e){
    e.preventDefault()

    btn2.textContent = p
})