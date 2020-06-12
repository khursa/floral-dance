$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("header").css({
        opacity: 0.5 + (scroll/200)
    });
});





$('.slick-carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});

