$(function() {
    console.log($(".banner-section").length));
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

        if(screen.orientation.type.indexOf("landscape") >= 0) {
            if($(window).width() >= 575 && $(window).width() <= 1199) {
                var hiw_banner_width = 384; // as per 1440px
                var hiw_baseWidth = 1180;
                var hiw_banner_height = 339; // as per 1440px

                $(".how-it-works-grid .box").css({"width": ($(".grid-structure.how-it-works-grid").width()*hiw_banner_width)/hiw_baseWidth + "px", "height": (($(".grid-structure.how-it-works-grid").width()*hiw_banner_width)/hiw_baseWidth * hiw_banner_height)/hiw_banner_width + "px"});
            }
        }

        $("header").css("padding-bottom",$("header .button-wrapper").outerHeight(true) + "px");

        if($(window).width() <= 640) {
            var maxBoxHeight = 0;
            $(".research-findings-grid .box").each(function() {
                console.log($(this).find(".box-content").height());
                if(maxBoxHeight != $(this).find(".box-content").height()) {
                    maxBoxHeight = $(this).find(".box-content").height();
                }
            }).promise().done(function() {
                $(".research-findings-grid .box .box-content").css("height", maxBoxHeight + "px");
            });
        }
        else {
            $(".research-findings-grid .box .box-content").removeAttr("style");
        }

        $(window).resize(function() {
            if($(window).width() >= 640 && $(window).width() != baseWidth) {
                $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
            }
            else if($(window).width() == baseWidth) {
                $(".banner-section .carousel-content").css("height", bannerSectionHeight + "px");
            }
            else {
                $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
            }

            if(screen.orientation.type.indexOf("landscape") >= 0) {
                if($(window).width() >= 575 && $(window).width() <= 1199) {
                    var hiw_banner_width = 384; // as per 1440px
                    var hiw_baseWidth = 1180;
                    var hiw_banner_height = 339; // as per 1440px

                    $(".how-it-works-grid .box").css({"width": ($(".grid-structure.how-it-works-grid").width()*hiw_banner_width)/hiw_baseWidth + "px", "height": (($(".grid-structure.how-it-works-grid").width()*hiw_banner_width)/hiw_baseWidth * hiw_banner_height)/hiw_banner_width + "px"});
                }

                $("header").css("padding-bottom",$("header .button-wrapper").outerHeight(true) + "px");
            }
            else {
                $(".how-it-works-grid .box").removeAttr("style");
                $("header").css("padding-bottom",$("header .button-wrapper").outerHeight(true) + "px");
            }

            if($(window).width() <= 640) {
                var maxBoxHeight = 0;
                $(".research-findings-grid .box").each(function() {
                    console.log($(this).find(".box-content").height());
                    if(maxBoxHeight != $(this).find(".box-content").height()) {
                        maxBoxHeight = $(this).find(".box-content").height();
                    }
                }).promise().done(function() {
                    $(".research-findings-grid .box .box-content").css("height", maxBoxHeight + "px");
                });
            }
            else {
                $(".research-findings-grid .box .box-content").removeAttr("style");
            }
        });
        // if($(window).width() >= 640 && $(window).width() != baseWidth) {
        //     $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight)/baseWidth + "px");
        // }
        // else {
        //     $(".banner-section .carousel-content").css("height", ($(window).width()*bannerSectionHeight_mobile)/baseWidth_mobile + "px");
        // }

        

        
    }

    
})