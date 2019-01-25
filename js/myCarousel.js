$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: false,
    responsiveClass: true,
    interval: false,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true
        },
        600: {
            items: 1,
            nav: true,
            loop: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

$('header').click(function () {
    $('.owl-carousel').trigger('stop.owl.autoplay');
});
