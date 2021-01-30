$(document).ready(function() {
    $(".navbar-menu").click(function() {
        $(".navbar-menu-item").slideToggle();
    });
    $(".hero-main-wrap").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    });

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
$('#s_bar-bg').t();