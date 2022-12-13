let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
};

var swiper = new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".about-slider",{
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        680:{
            slidePerView:1,
            
        },
        768:{
            slidePerView:2,
            
        },
        1024:{
            slidePerView:3,
            
        },
    },
});
