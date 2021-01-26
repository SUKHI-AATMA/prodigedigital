$(function() {
    /* expand-collapse of FAQ's starts */
    $(".faq-wrapper > .row > .question").on("click", function() {
        //$(this).parent(".row").siblings(".row").children(".question").removeClass("toggle-open");
        //$(this).parent(".row").siblings(".row").children(".answer").slideUp();
        $(this).toggleClass("toggle-open");
        $(this).next(".answer").slideToggle();

        if($(this).parent(".row").siblings(".toggle-expand").find("span[data-rel=collapse-all]").is(":visible")) {
            $(this).parent(".row").siblings(".toggle-expand").removeClass("toggle-open");
        }
    });

    $(".faq-wrapper > .row.toggle-expand a").on("click", function() {
        if($(this).children("span[data-rel=expand-all]").is(":visible")) {
            $(this).parent().siblings(".row").children(".question").addClass("toggle-open");
            $(this).parent().siblings(".row").children(".question").next(".answer").slideDown();
        }
        else
        {
            $(this).parent().siblings(".row").children(".question").removeClass("toggle-open");
            $(this).parent().siblings(".row").children(".question").next(".answer").slideUp();
        }
        
        $(this).parent().toggleClass("toggle-open");
        
    });
    /* expand-collapse of FAQ's ends */

    if($(".banner-section").length) {
        $(".banner-section .carousel-content").each(function() {
            $(this).css("background-image","url('" + $(this).attr('data-img-src') + "')");
        });

        $(".banner-section.owl-carousel").owlCarousel({
            dots: false,
            nav: false,
            loop: true,
            autoplay: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    
})