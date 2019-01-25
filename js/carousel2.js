$('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: false,
    responsiveClass: true,
    lazyLoad: true,
    interval: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

