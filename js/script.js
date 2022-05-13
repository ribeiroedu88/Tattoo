
const _elements = {
	scrollLinks: document.querySelectorAll(".menu-items"),
}

_elements.scrollLinks.forEach(link => {
    link.addEventListener("click", e => {

        const id = link.getAttribute("href");
        const element = document.querySelector(id);
        
        const position = element.offsetTop;
        
        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        e.preventDefault();

    });
});


////////////////////CONFIGURAÇÃO DO MENU MOBILE/////////////////////

const hamburgerMenu = document.querySelector('.hamburger'); //Seleciona o elemento com o nome da classe hamburger.
    //Criando uma função de seta para alterar a classe para ativa.
    const menuIsActive = () => {
      //Selecionando o menu hambúrguer e adicionando e removendo a classe de ativo ao clicar.
      hamburgerMenu.classList.toggle('active');
    };
    //Adiciona um ouvinte de evento de 'clique' ao menu de hambúrguer. Em seguida, passamos a função que criamos onde a classe é ativada e desativada.
    hamburgerMenu.addEventListener('click', menuIsActive);
    
////////////////////CONFIGURAÇÃO DO MENU LISTA/////////////////////
const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu() {
        const nav = document.getElementById('nav-bar');
        nav.classList.toggle('active');
    }

btnMobile.addEventListener('click', toggleMenu);

const menuLista = document.getElementById('nav-bar__menu');

    function toggleLista() {
        const lista = document.getElementById('nav-bar');
        lista.classList.toggle('active');
    }

    menuLista.addEventListener('click', toggleLista);





// document.querySelector("#carrossel-items")
// .addEventListener("wheel", event => {
//     if(event.deltaY > 0) {
//         event.target.scrollBy (300, 0)
//     } else {
//         event.target.scrollBy (-300, 0)
//     }
// })