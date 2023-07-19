const swiper = new Swiper('.swiper', {
    loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const navbar=document.getElementById("#navbar");
window.onscroll=()=>{
  this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky')

}

$(".owl-carousel").owlCarousel({
  loop: true,
  // margin: 20,
  autoplay: true,
  rtl: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  slideTransition: "linear",
  autoplayHoverPause: false,
  dots: true,
  responsive: {
      0: {
          items: 1,
      },
      575: {
          items: 3,
      },
      1000: {
          items: 5,
      },
  },
});
