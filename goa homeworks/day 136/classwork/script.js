let display = document.getElementById('display')
let btn = document.getElementById('btn')
 
btn.addEventListener('click', function(e){
    e.preventDefault()
    let word = document.getElementById('input').value
    for(let i = 0; i < word.length; i++){
        display.textContent = i + 1
        
    }
})