$(document).ready( function (){
$('.regular').slick({
  slidesToShow: 3,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase:'linear',
        infinite: true,
        focusOnSelect: false,
        variableWidth: true,
  // centerMode: true,
  // accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        infinite: true,
        speed:4500,
        slidesToShow:1,
        // slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 0,
      }
    },
    {
      breakpoint: 600,
      settings: {
          arrows:false,
          infinite: true,
          speed:4500,
          slidesToShow:1,
          // slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          accessibility: true,
          autoplay: true,
          autoplaySpeed: 0,
      }
    },
    {
      breakpoint: 480,
      settings: {
          arrows:false,
          infinite: true,
          speed:4500,
          slidesToShow:1,
          // slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          accessibility: true,
          autoplay: true,
          autoplaySpeed: 0,
      }
    }
  ]
});
});