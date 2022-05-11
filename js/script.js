////////////////////CONFIGURAÇÃO DO MENU MOBILE/////////////////////

const hamburgerMenu = document.querySelector('.hamburger'); //Seleciona o elemento com o nome da classe hamburger.
    //Criando uma função de seta para alterar a classe para ativa.
    const menuIsActive = () => {
      //Selecionando o menu hambúrguer e adicionando e removendo a classe de ativo ao clicar.
      hamburgerMenu.classList.toggle('active');
    };
    //Adiciona um ouvinte de evento de 'clique' ao menu de hambúrguer. Em seguida, passamos a função que criamos onde a classe é ativada e desativada.
    hamburgerMenu.addEventListener('click', menuIsActive);
    

const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu() {
        const nav = document.getElementById('nav-bar');
        nav.classList.toggle('active');
    }

btnMobile.addEventListener('click', toggleMenu);

// document.querySelector("#carrossel-items")
// .addEventListener("wheel", event => {
//     if(event.deltaY > 0) {
//         event.target.scrollBy (300, 0)
//     } else {
//         event.target.scrollBy (-300, 0)
//     }
// })