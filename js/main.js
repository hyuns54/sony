const prd_con = new Swiper(".prd_con", {
  autoplay: {
    delay: 1000, //ms 2500 = 2.5s
    disableOnInteraction: false,
  },
  loop: true,
  // 슬라이드 넘어갈때 속도
  speed: 1000, // ms 100 = 1s
  // 이전, 다음 버튼
  slidesPerView: 1, //모바일에서 보이는 갯수
  spaceBetween: 20,
  breakpoints: {
    640: {
      // 가로해상도가 640px 이상
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      // 가로해상도가 1024px 이상
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  centeredSlides: true,
  //pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const new_sony = new Swiper(".product_img1", {
  autoplay: {
    delay: 1000, //ms 2500 = 2.5s
    disableOnInteraction: false,
  },
  loop: true,
  // 슬라이드 넘어갈때 속도
  speed: 3000, // ms 100 = 1s
  // 이전, 다음 버튼
  slidesPerView: 1, //모바일에서 보이는 갯수
  spaceBetween: 20,

  centeredSlides: true,
  //pagination
  pagination: {
    el: ".swiper-pagination",
  },
})
var be_moved = new Swiper(".card_swiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 2000, //ms 2500 = 2.5s
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});