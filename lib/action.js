//header
// Seleciona o elemento HTML
const menuHamburger = document.getElementById('menu-hamburguer')
const menuPricipal = document.getElementById('menu')
// adiciona um evento de click na const menu-hamburguer
menuHamburger.addEventListener('click',function(){
    menuPricipal.classList.toggle('active') //Alterna a classe 'active' no menuPricipal e no menu-gamburguer
    menuHamburger.classList.toggle('active')
})

//slide  
let slide = document.querySelectorAll('.item-slide');
let inicioSlide = 0;

function showSlide(n) {
    slide.forEach(item => item.classList.remove('ativo'));
    slide[n].classList.add('ativo'); // Correção: Adiciona 'ativo' ao slide correto
    inicioSlide = n;
}
// Configura um temporizador
setInterval(() => {
    inicioSlide = (inicioSlide + 1) % slide.length;
    showSlide(inicioSlide);
}, 3000);

//accordion
const btnAccordion = document.getElementById('bttt')
const conteudoFaq = document.getElementById('faa')

btnAccordion.addEventListener('click',function(){

    conteudoFaq.classList.toggle('active')
})
