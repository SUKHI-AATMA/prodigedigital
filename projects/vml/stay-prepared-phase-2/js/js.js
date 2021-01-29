$(function() {
    if($(".banner-section").length) {
        var bannerSectionHeight = 658; // as per 1440px
        var baseWidth = 1440;
        var bannerSectionHeight_mobile = 375; // as per 375px
        var baseWidth_mobile = 375;

        if($(window).width() >= 640 && $(window).width() != baseWidth) {
            $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
        }
        else if($(window).width() == baseWidth) {
            $(".banner-section .carousel-content").css("height", bannerSectionHeight + "px");
        }
        else {
            $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
        }

        $(window).resize(function(){
            if($(window).width() >= 640 && $(window).width() != baseWidth) {
                $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
            }
            else if($(window).width() == baseWidth) {
                $(".banner-section .carousel-content").css("height", bannerSectionHeight + "px");
            }
            else {
                $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
            }
        });
        // if($(window).width() >= 640 && $(window).width() != baseWidth) {
        //     $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
        // }
        // else {
        //     $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
        // }

        $(".banner-section .carousel-content").each(function() {
            if($(window).width() >= 768) {
                $(this).css("background-image","url('" + $(this).attr('data-img-src') + "')");
            }
            else {
                $(this).css("background-image","url('" + $(this).attr('data-img-src-mobile') + "')");
            }
            
            
        }).promise().done(function() {
            $(".banner-section.owl-carousel").owlCarousel({
                dots: true,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        });

        
    }

    
})