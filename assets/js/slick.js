$(document).ready(function() { 
    $(".post-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
         
    });
});