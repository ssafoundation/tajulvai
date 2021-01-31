$(document).ready(function() {
    $(".navbar-menu-mobile-btn").click(function() {
        $(".navbar-menu-item").slideToggle();
    });

    $(".slider-image").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $(".text-typed-wrap").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('#typed_1').t({
        speed: 35,
        repeat: true,
    });
    $('#typed_2').t({
        speed: 35,
        repeat: true,
    });
    $('#typed_3').t({
        speed: 35,
        repeat: true,
    });


});