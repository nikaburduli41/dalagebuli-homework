let input = document.getElementById("input")
let btn = document.getElementById("btn")
let itemlist = document.getElementById("itemslist")
let clear = document.getElementById("clear")

btn.addEventListener("click",function(){
    let div = document.createElement("div")
    let clear_button = document.createElement("button")
    let p = document.createElement("p")
    itemlist.appendChild(div)
    div.appendChild(p)
    div.appendChild(clear_button)
    p.textContent = input.value
    clear_button.textContent = "clear"
    p.id = 'pa'
    
    clear_button.addEventListener("click",()=>{
        p.textContent = ""
        div.removeChild(clear_button)
        
    })
})

clear.addEventListener("click",function(){
    itemlist.textContent = ""
})