document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
  
});