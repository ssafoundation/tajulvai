$(document).ready(function() {
    $(".navbar-menu-mobile-btn").click(function() {
        $(".navbar-menu-item").slideToggle();
    });

    $(".slider-image").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    });

    // animated typed text
    var typed = new Typed('#typed', {
        strings: ["Prevent<br /> Falls", "Manage <br />Bedsores", "Ensure hand <br />wash compliance"],
        smartBackspace: true, // Default value
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });



});