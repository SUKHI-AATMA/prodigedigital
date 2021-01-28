$(function() {
    /* expand-collapse of FAQ's starts */
    // $(".faq-wrapper > .row > .question").on("click", function() {
    //     //$(this).parent(".row").siblings(".row").children(".question").removeClass("toggle-open");
    //     //$(this).parent(".row").siblings(".row").children(".answer").slideUp();
    //     $(this).toggleClass("toggle-open");
    //     $(this).next(".answer").slideToggle();

    //     if($(this).parent(".row").siblings(".toggle-expand").find("span[data-rel=collapse-all]").is(":visible")) {
    //         $(this).parent(".row").siblings(".toggle-expand").removeClass("toggle-open");
    //     }
    // });

    // $(".faq-wrapper > .row.toggle-expand a").on("click", function() {
    //     if($(this).children("span[data-rel=expand-all]").is(":visible")) {
    //         $(this).parent().siblings(".row").children(".question").addClass("toggle-open");
    //         $(this).parent().siblings(".row").children(".question").next(".answer").slideDown();
    //     }
    //     else
    //     {
    //         $(this).parent().siblings(".row").children(".question").removeClass("toggle-open");
    //         $(this).parent().siblings(".row").children(".question").next(".answer").slideUp();
    //     }
        
    //     $(this).parent().toggleClass("toggle-open");
        
    // });
    /* expand-collapse of FAQ's ends */

    if($(".banner-section").length) {
        var bannerSectionHeight = 658; // as per 1440px
        var baseWidth = 1440;
        var bannerSectionHeight_mobile = 375; // as per 375px
        var baseWidth_mobile = 375;

        if($(window).width() >= 640 && $(window).width() != baseWidth) {
            $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
        }
        else {
            $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
        }

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