/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /*Mostrar Menu*/

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }


    /*Esconder Menu*/
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER SHOE ===============*/
let swiperShoe = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect:{
        prev: {
            translate:[-100, 0, -500],
            opacity:0,
        },

        next: {
            translate:[100, 0, -500],
            opacity:0,
        },
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
});

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)