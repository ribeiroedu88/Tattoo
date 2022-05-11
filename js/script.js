////////////////////CONFIGURAÇÃO DO MENU MOBILE/////////////////////

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