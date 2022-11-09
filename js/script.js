// ***************** ПЛАВНЫЙ СКРОЛЛ ДО БЛОКА ***************** //


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}


// ***************** SWIPER ***************** //
// иницилизируется swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-review__button-next',
      prevEl: '.swiper-review__button-prev',
   },

   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   spaceBetween: 20,

   breakpoints: {
      768: {
         slidesPerView: 2
      },

      590: {
         slidesPerView: 1.5
      },

      200: {
         slidesPerView: 1.1
      }
   },
});