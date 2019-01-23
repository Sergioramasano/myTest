$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'slideOutDown',
    animateIn: 'slideOutDown',
    autoplayHoverPause:false,
    responsiveClass:true,
    lazyLoad: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

$('header').click(function () {
    $('.owl-carousel').trigger('stop.owl.autoplay') ;
});