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
