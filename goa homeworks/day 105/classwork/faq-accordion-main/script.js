const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn1.addEventListener('click',function(e){
    e.preventDefault()
    text1.style.display='block'
    text2.style.display='none'
    text3.style.display='none'
    text4.style.display='none'
    btn1.innerHTML = '-'
    btn2.innerHTML = '+'
    btn3.innerHTML = '+'
    btn4.innerHTML = '+'
})
btn2.addEventListener('click',function(e){
    e.preventDefault()
    text2.style.display='block'
    text1.style.display='none'
    text3.style.display='none'
    text4.style.display='none'
    btn2.innerHTML = '-'
    btn1.innerHTML = '+'
    btn3.innerHTML = '+'
    btn4.innerHTML = '+'
    
})
btn3.addEventListener('click',function(e){
    e.preventDefault()
    text3.style.display='block'
    text2.style.display='none'
    text4.style.display='none'
    text1.style.display='none'
    btn3.innerHTML = '-'
    btn2.innerHTML = '+'
    btn1.innerHTML = '+'
    btn4.innerHTML = '+'
})
btn4.addEventListener('click',function(e){
    e.preventDefault()
    text4.style.display='block'
    text1.style.display='none'
    text2.style.display='none'
    text3.style.display='none'
    btn4.innerHTML = '-'
    btn1.innerHTML = '+'
    btn2.innerHTML = '+'
    btn3.innerHTML = '+'
})
