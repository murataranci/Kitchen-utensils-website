var swiper = new Swiper(".refSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loopFillGroupWithBlank: true,
    });
    document.getElementsByClassName("refSwiper")[0].addEventListener("mouseover", function( ) {
    swiper.autoplay.stop();
    });

     document.getElementsByClassName("refSwiper")[0].addEventListener("mouseout", function( ) {
    swiper.autoplay.start();
     });
     $(document).ready(function(){
        $(".counter").counterUp({
          delay:10,
          time:1200
        });
     })
     var Swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        loopFillGroupWithBlank: true,
        });
       
     