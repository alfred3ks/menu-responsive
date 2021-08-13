
const button = document.getElementById('button')
const nav = document.getElementById('header__nav')
const list = document.getElementById('header__nav-ocultar');


button.addEventListener('click',()=>{

    button.classList.toggle("change")
    nav.classList.toggle('change__menu')

})

list.addEventListener('click',()=>{
    button.classList.toggle("change")
    nav.classList.toggle('change__menu')

})

