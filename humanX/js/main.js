$(document).ready(function () {

    var owlPartners = $('#partners .owl-carousel');
    owlPartners.owlCarousel({
        margin: 30,
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1170: {
                items: 4
            }
        },
    });

    var owlFunders = $('#funders .owl-carousel');
    owlFunders.owlCarousel({
        margin: 30,
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1170: {
                items: 4
            }
        },
    });

    var owlNews = $('#news .owl-carousel');
    owlNews.owlCarousel({
        autoWidth:true,
        // margin: 60,
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        },
    });
    
    

});


