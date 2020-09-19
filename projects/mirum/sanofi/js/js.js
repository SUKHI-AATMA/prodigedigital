$(function() {
    var winW = $(window).width();

    alert(winW + "\n" + $(window).height());

    $(".next-screen-arrow").on("click", function() {
        $("html,body").animate({
            scrollTop: $(".latest-episode-wrapper").offset().top + "px"
        }, 500)
    });

    $(".floating-nav a").on("click", function() {
        $("html,body").animate({
            scrollTop: $("." + $(this).attr("class").replace(/ic-/gi,'')).offset().top + "px"
        }, 500);
    })
    
    if($(".latest-episode-wrapper .latest-episode-content .box-content").length > 1) {
        $(".latest-episode-wrapper .latest-episode-content").addClass("owl-carousel");
        $(".latest-episode-wrapper .latest-episode-content.owl-carousel").owlCarousel({
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    if(winW >= 1200) {
        if($(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content .box-content").length > 3) {
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content").addClass("owl-carousel");
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content.owl-carousel").owlCarousel({
                dots: false,
                nav: true,
                responsive: {
                    1200: {
                        items: 3,
                        center: true,
                        loop: true
                    }
                }
            });
        }

        if($(".laughter-wrapper .diaries-content .box-content").length > 3) {
            $(".laughter-wrapper .diaries-content").addClass("owl-carousel");
            $(".laughter-wrapper .diaries-content.owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                responsive: {
                    1200: {
                        items: 3
                    }
                }
            });
        }
    }
    else if(winW >= 768) {
        if($(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content .box-content").length > 2) {
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content").addClass("owl-carousel");
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content.owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                responsive: {
                    768: {
                        items: 2
                    }
                }
            });
        }

        if($(".laughter-wrapper .diaries-content .box-content").length > 2) {
            $(".laughter-wrapper .diaries-content").addClass("owl-carousel");
            $(".laughter-wrapper .diaries-content.owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                responsive: {
                    768: {
                        items: 2
                    }
                }
            });
        }
    }
    else if(winW >= 320) {
        if($(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content .box-content").length > 1) {
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content").addClass("owl-carousel");
            $(".medical-college-diaries-wrapper:not('.laughter-wrapper') .diaries-content.owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        }

        if($(".laughter-wrapper .diaries-content .box-content").length > 1) {
            $(".laughter-wrapper .diaries-content").addClass("owl-carousel");
            $(".laughter-wrapper .diaries-content.owl-carousel").owlCarousel({
                dots: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        }
    }
});