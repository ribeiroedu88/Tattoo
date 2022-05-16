
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

///////////////////////////////////////////////////////////////////////////////////

var numSlide = 1;

mostrarSlide(numSlide);

function mudarSlide(ns) {
  mostrarSlide(numSlide += ns);
}

function slideAtual(ns) {
  mostrarSlide(numSlide = ns);
}

function mostrarSlide(ns) {
  var slides = document.getElementsByClassName("slide");
  var indicador = document.getElementsByClassName("img-mini");

  if (ns > slides.length) {
    numSlide = 1;
  }
  if (ns < 1) {
    numSlide = slides.length;
  }

  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(var i = 0; i < indicador.length; i++) {
    indicador[i].className = indicador[i].className.replace(" active", "");
  }

  slides[numSlide - 1].style.display = "block";
  indicador[numSlide - 1].className += " active";
}


///////////////////////////////////////////////////////////////////////////////////

var numSlide_tr = 1;

mostrarSlide_tr(numSlide_tr);

function mudarSlide_tr(ns) {
  mostrarSlide_tr(numSlide_tr += ns);
}

function slideAtual_tr(ns) {
  mostrarSlide_tr(numSlide_tr = ns);
}

function mostrarSlide_tr(ns) {
  var slides_tr = document.getElementsByClassName("slide--tr");
  var indicador_tr = document.getElementsByClassName("img-mini--tr");

  if (ns > slides_tr.length) {
    numSlide_tr = 1;
  }
  if (ns < 1) {
    numSlide_tr = slides_tr.length;
  }

  for(var i = 0; i < slides_tr.length; i++) {
    slides_tr[i].style.display = "none";
  }
  for(var i = 0; i < indicador_tr.length; i++) {
    indicador_tr[i].className = indicador_tr[i].className.replace(" active", "");
  }

  slides_tr[numSlide_tr - 1].style.display = "block";
  indicador_tr[numSlide_tr - 1].className += " active";
}