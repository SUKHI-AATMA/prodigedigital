window.onload = function () {
    setTimeout(function() {
        $(document).scrollTop(0);
    }, 100);

    $(window).bind('mousewheel', function(e) {
        if(e.originalEvent.isTrusted) {
            $(".preloader").slideUp('slow');
        }
    });


    $(".banner-container.owl-carousel").owlCarousel({
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $(".child-companies.owl-carousel").owlCarousel({
        margin: 50,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3,
                autoWidth:true
            }
        }
    });

    $(".ht-gallery-content.owl-carousel").owlCarousel({
        dots: true,
        nav: false,
        loop: true,
        center: true,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            1000: {
                margin: 50,
                items: 1.6
            }
        }
    });

    /** Equal Height to boxes in owl-carousel starts **/
    var caroselContentH = 0;
    $(".child-companies .carousel-content").each(function() {
        if($(this).outerHeight(true) > caroselContentH) {
            caroselContentH = $(this).outerHeight(true);
        }
    }).promise().done(function() {
        $(".child-companies .carousel-content").css("height",caroselContentH + "px");
    });
    /** Equal Height to boxes in owl-carousel ends **/
}