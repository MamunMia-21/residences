// ----- NAVBAR SCROLL ------

window.addEventListener("scroll", function () {
    var menu = this.document.querySelector(".main_menu");
    menu.classList.toggle("sticky-top", window.scrollY > 0);
});


var typed = new Typed("#strings",{
    strings: ["discover most suitable property"] ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})

$('.partership_slider_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});
  


$('.slider_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angles-left slide-prv-button"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right slide-nxt-button"></i>',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
});
  
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});