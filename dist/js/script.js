$(document).ready(function() {
  $(".testimonials__carousel-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".testimonials__carousel",
    arrows: false
  });
});

$(".testimonials__carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: ".testimonials__carousel-nav",
  arrows: false
});
