(function(){
  const burgerMenuBtn = document.querySelector(".js-burger");

  if(burgerMenuBtn){
    burgerMenuBtn.addEventListener("click", (e) => {
      burgerMenuBtn.classList.toggle("burger--active")
    })
  }
})();


const swiperContainer = new Swiper('.swiper', {
  pagination: "true",
  slidesPerView: "auto",
  navigation: {
    nextEl: '.js-swiper-button-next',
    prevEl: '.js-swiper-button-prev'
  },
  pagination: {
    el: '.js-swiper-pagination', // Элемент для пагинации
    clickable: true, // Делает пагинацию кликабельной
  }
});




