//header
const menuHamburger = document.getElementById('menu-hamburguer')
const menuPricipal = document.getElementById('menu')
menuHamburger.addEventListener('click',function(){
    menuPricipal.classList.toggle('active')
    menuHamburger.classList.toggle('active')
})

