var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerslide: 'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });



  