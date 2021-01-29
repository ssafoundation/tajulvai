$(".navbar-menu").click(function() {
    $(".navbar-menu-item").slideToggle();
});
$(document).ready(function() {
    $(".hero-main-wrap").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    });
});