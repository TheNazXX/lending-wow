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

(function(){
  const faqItems = document.querySelector(".js-faq-items");
  faqItems.addEventListener('click', function(e){
    if(e.target.parentNode.classList.contains('js-faq-btn')){
      Array.from(faqItems.children).forEach(elem => {
        elem.classList.add('faq__item--disabled')
      })

      let parentElement = e.target.parentNode;
      
      while(!parentElement.classList.contains('faq__item')){
        parentElement = parentElement.parentNode
      }

      parentElement.classList.remove('faq__item--disabled')
    }
  })
})();






