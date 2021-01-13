$(function() {
    if($(".home-screen").length) {
        /** Sun rays effect animation start  **/
        // if($(".img-sun").length) {
        //     var elem_svg = $(".img-sun > svg");
        //     var elem_svg_width = $(elem_svg).width();
        //     var elem_svg_height = $(elem_svg).height();
        //     $(".img-sun").prepend("<span style='width: " + elem_svg_width + "px; height: " + elem_svg_height + "px;'></span>");
        // }
        /** Sun rays effect animation end  **/

        if($(window).width() >= 768) {
            var what_is_vitamin = $(".what-is-vitamin").offset().top - 100;
            var why_take_vitamin = $(".why-take-vitamin").offset().top - 100;
            var how_do_we_get_vitamin = $(".how-do-we-get-vitamin").offset().top - 100;
        }
        else {
            var what_is_vitamin = $(".what-is-vitamin").offset().top - 100;
            var why_take_vitamin = $(".why-take-vitamin").offset().top - 100;
            var how_do_we_get_vitamin = $(".how-do-we-get-vitamin").offset().top - 100;
        }
        // var about_vitamin_wrapper = $(".about-vitamin-wrapper").offset().top - 100;
        // var boost_immunity_wrapper = $(".boost-immunity-wrapper").offset().top - 100;
        // var word_of_wisdom_wrapper = $(".word-of-wisdom-wrapper").offset().top - 100;
        // var eat_well_wrapper = $(".eat-well-wrapper").offset().top - 100;
        // var benefits_of_vitamin_wrapper = $(".benefits-of-vitamin-wrapper").offset().top - 100;
        var about_vitamin_wrapper = $(".about-vitamin-wrapper").offset().top - $(".about-vitamin-wrapper").outerHeight(true);
        var boost_immunity_wrapper = $(".boost-immunity-wrapper").offset().top - $(".boost-immunity-wrapper").outerHeight(true);
        var word_of_wisdom_wrapper = $(".word-of-wisdom-wrapper").offset().top - $(".word-of-wisdom-wrapper").outerHeight(true);
        var eat_well_wrapper = $(".eat-well-wrapper").offset().top - $(".eat-well-wrapper").outerHeight(true);
        var benefits_of_vitamin_wrapper = $(".benefits-of-vitamin-wrapper").offset().top - $(".benefits-of-vitamin-wrapper").outerHeight(true);
        var scroll_ctr = 0;
        var new_scroll_ctr = 0;
        var paramTimeout = "";
    
        if(window.scrollY > about_vitamin_wrapper) {
            $(".about-vitamin-wrapper").addClass("in-view");
            
            $(".what-is-vitamin").addClass("in-view");
    
            setTimeout(function() {
                $(".why-take-vitamin").addClass("in-view");
            }, 500);
    
            setTimeout(function() {
                $(".how-do-we-get-vitamin").addClass("in-view");
            }, 800);
        }
    
        // if(window.scrollY > what_is_vitamin) {
        //     $(".what-is-vitamin").addClass("in-view");
        // }
    
        // if(window.scrollY > why_take_vitamin) {
        //     $(".why-take-vitamin").addClass("in-view");
        // }
    
        // if(window.scrollY > how_do_we_get_vitamin) {
        //     $(".how-do-we-get-vitamin").addClass("in-view");
        // }
    
        if(window.scrollY > boost_immunity_wrapper) {
            $(".boost-immunity-wrapper").addClass("in-view");
        }
    
        if(window.scrollY > word_of_wisdom_wrapper) {
            $(".word-of-wisdom-wrapper").addClass("in-view");
    
            $(".word-of-wisdom-wrapper .wisdom-box-content").eq(0).animate({"opacity": 1}, 500, function() {
                $(".word-of-wisdom-wrapper .wisdom-box-content").eq(1).animate({"opacity": 1}, 500, function() {
                    $(".word-of-wisdom-wrapper .wisdom-box-content").eq(2).animate({"opacity": 1}, 500, function() {
                        $(".word-of-wisdom-wrapper .wisdom-box-content").eq(3).animate({"opacity": 1}, 500);
                    });
                });
            });
        }
    
        if(window.scrollY > eat_well_wrapper) {
            $(".eat-well-wrapper").addClass("in-view");
    
            $(".eat-well-wrapper .eat-well-box-content").eq(0).animate({"opacity": 1}, 500, function() {
                $(".eat-well-wrapper .eat-well-box-content").eq(1).animate({"opacity": 1}, 500, function() {
                    $(".eat-well-wrapper .eat-well-box-content").eq(2).animate({"opacity": 1}, 500, function() {
                        $(".eat-well-wrapper .eat-well-box-content").eq(3).animate({"opacity": 1}, 500, function() {
                            $(".eat-well-wrapper .eat-well-box-content").eq(4).animate({"opacity": 1}, 500, function() {
                                $(".eat-well-wrapper .eat-well-box-content").eq(5).animate({"opacity": 1}, 500);
                            });
                        });
                    });
                });
            });
        }
    
        if(window.scrollY > benefits_of_vitamin_wrapper) {
            $(".benefits-of-vitamin-wrapper").addClass("in-view");
        }
    
        $(document).on("scroll", function() {
            /* display the respective sections on scroll when they come into view */
            if(window.scrollY > about_vitamin_wrapper) {
                $(".about-vitamin-wrapper").addClass("in-view");
                
                $(".what-is-vitamin").addClass("in-view");
    
                setTimeout(function() {
                    $(".why-take-vitamin").addClass("in-view");
                }, 500);
    
                setTimeout(function() {
                    $(".how-do-we-get-vitamin").addClass("in-view");
                }, 800);
            }
    
            // if(window.scrollY > why_take_vitamin) {
            //     $(".why-take-vitamin").addClass("in-view");
            // }
    
            // if(window.scrollY > how_do_we_get_vitamin) {
            //     $(".how-do-we-get-vitamin").addClass("in-view");
            // }
    
            if(window.scrollY > boost_immunity_wrapper) {
                $(".boost-immunity-wrapper").addClass("in-view");
            }
    
            if(window.scrollY > word_of_wisdom_wrapper) {
                $(".word-of-wisdom-wrapper").addClass("in-view");
    
                $(".word-of-wisdom-wrapper .wisdom-box-content").eq(0).animate({"opacity": 1}, 500, function() {
                    $(".word-of-wisdom-wrapper .wisdom-box-content").eq(1).animate({"opacity": 1}, 500, function() {
                        $(".word-of-wisdom-wrapper .wisdom-box-content").eq(2).animate({"opacity": 1}, 500, function() {
                            $(".word-of-wisdom-wrapper .wisdom-box-content").eq(3).animate({"opacity": 1}, 500);
                        });
                    });
                });
            }
    
            if(window.scrollY > eat_well_wrapper) {
                $(".eat-well-wrapper").addClass("in-view");
    
                $(".eat-well-wrapper .eat-well-box-content").eq(0).animate({"opacity": 1}, 500, function() {
                    $(".eat-well-wrapper .eat-well-box-content").eq(1).animate({"opacity": 1}, 500, function() {
                        $(".eat-well-wrapper .eat-well-box-content").eq(2).animate({"opacity": 1}, 500, function() {
                            $(".eat-well-wrapper .eat-well-box-content").eq(3).animate({"opacity": 1}, 500, function() {
                                $(".eat-well-wrapper .eat-well-box-content").eq(4).animate({"opacity": 1}, 500, function() {
                                    $(".eat-well-wrapper .eat-well-box-content").eq(5).animate({"opacity": 1}, 500, function() {
                                        $(".eat-well-wrapper .disclaimer").animate({"opacity": 1}, 500);
                                    });
                                });
                            });
                        });
                    });
                });
            }
    
            if(window.scrollY > benefits_of_vitamin_wrapper) {
                $(".benefits-of-vitamin-wrapper").addClass("in-view");
            }
            /* display the respective sections on scroll when they come into view ends */
    
            /* show sticky menu if open starts */
            if(!$(".sticky-menu").hasClass("menu-visible")) {
                $(".sticky-menu").addClass("menu-visible");
            }
    
            if($(".sticky-menu").hasClass("menu-open")) {
                $(".sticky-menu > a").click();
            }
            /* show sticky menu if open ends */
    
            /* hide sticky menu when scrolling is stopped */
            scroll_ctr++;
            new_scroll_ctr = scroll_ctr;
            clearTimeout(paramTimeout);
    
            if(scroll_ctr == new_scroll_ctr) {
                paramTimeout = setTimeout(function() {
                    if(!$(".sticky-menu").hasClass("menu-open")) {
                        $(".sticky-menu").removeClass("menu-visible");
                    }
                }, 2000);
            }
            /* hide sticky menu when scrolling is stopped ends */
        });
    }

    
    /* show/hide sticky menu on homepage starts */
    $(".sticky-menu > a").on("click", function() {
        $(this).parent(".sticky-menu").toggleClass("menu-open");
        
    });

    $(".sticky-menu > nav a").on("click", function() {
        $("html,body").animate({
            scrollTop: $("section[data-rel='" + $(this).attr("rel") + "']").offset().top
        }, 500);
    });
    /* show/hide sticky menu on homepage ends */

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

    /* show/hide menu on contextual pages starts */
    $("header .hamburger-menu").on("click", function() {
        $("body").toggleClass("menu-open");
    });
    /* show/hide menu on contextual pages ends */
});