var swiper = new Swiper(".home-slider",{
    autoplay:{
        duration:2500,
        disableOnInteraction: false,
    },
    grapCursor:false,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})