$(function() {
    if(navigator.userAgent.indexOf("Safari") >= 0) {
        $("body").addClass("device-ios");
    }
    
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
        var spaceAbove = 0;

        if($(this).text() == "Things to Note") {
            spaceAbove = parseInt($(".word-of-wisdom-wrapper").css("padding-bottom"));
        }
        
        $("html,body").animate({
            scrollTop: $("section[data-rel='" + $(this).attr("rel") + "']").offset().top - spaceAbove
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

        if($(".faq-wrapper > .row > .question").length == $(".faq-wrapper > .row > .question.toggle-open").length) {
            $(".faq-wrapper > .row.toggle-expand").addClass("toggle-open");
        }
        else {
            $(".faq-wrapper > .row.toggle-expand").removeClass("toggle-open");
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

    if($(".error-404").length) {
        var mainContentWrapperH = $("header").outerHeight(true)+$("footer").outerHeight(true);
        $(".error-404 .main-content-wrapper").css("height","calc(100vh - " + mainContentWrapperH + "px)");
    }

    if($(".word-of-wisdom-wrapper").length) {
        $(".word-of-wisdom-wrapper .wisdom-box-content .heading").prepend("<span></span>");
        $(".word-of-wisdom-wrapper .wisdom-box-content .heading").append("<span></span>");
    }

    $(window).resize(function() {
        if($(".error-404").length) {
            var mainContentWrapperH = $("header").outerHeight(true)+$("footer").outerHeight(true);
            $(".error-404 .main-content-wrapper").css("height","calc(100vh - " + mainContentWrapperH + "px)");
        }
    });

    /* For Collections page starts */
    var jsonData = {
        
        
        "guardian":[{"region": "North-East","name": "18 Tai Seng","address1": "18 Tai Seng Street ","address2": "#01-19/20/21","address3": "18 Tai Seng ","address4": "Singapore 539775","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6384 1058","postal_code": "6384 1058", "pharmacy": "guardian"},
        {"region": "Central","name": "Amara Hotel","address1": "100 Tras Street ","address2": "#02-09","address3": "Amara Hotel Tower ","address4": "Singapore 079027","hours1": "Mon to Fri 1000 - 1830 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6694 8253","postal_code": "6694 8253", "pharmacy": "guardian"},
        {"region": "North-East","name": "Ang Mo Kio Blk 704","address1": "Blk 704 Ang Mo Kio Ave 8 ","address2": "#01-2559C","address3": "","address4": "Singapore 560704","hours1": "Mon to Sun, PH 1100 - 1930 ","hours2": "","hours3": "","telephone": "6456 5766","postal_code": "6456 5766", "pharmacy": "guardian"},
        {"region": "North-East","name": "Ang Mo Kio Hub","address1": "53 Ang Mo Kio Ave 3 ","address2": "#B2-01/02","address3": "AMK Hub ","address4": "Singapore 569933","hours1": "Mon to Sun, PH 1000 - 2200 ","hours2": "","hours3": "","telephone": "6235 4973","postal_code": "6235 4973", "pharmacy": "guardian"},
        {"region": "East","name": "Bedok Central Blk 210","address1": "Blk 210 New Upper Changi Road","address2": "#01-715","address3": "","address4": "Singapore 460210","hours1": "Mon to Sun, PH  0930 - 2130","hours2": "","hours3": "","telephone": "6444 0072","postal_code": "6444 0072", "pharmacy": "guardian"},
        {"region": "East","name": "Bedok Mall","address1": "311 New Upper Changi Road ","address2": "#B2-45/46/47","address3": "Bedok Mall","address4": "Singapore 467360","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6844 9312","postal_code": "6844 9312", "pharmacy": "guardian"},
        {"region": "North-East","name": "Bishan Blk 512","address1": "Blk 512 Bishan St 13 ","address2": "#01-524","address3": "","address4": "Singapore 570512","hours1": "Mon to Sun, PH 1100 - 2000 ","hours2": "","hours3": "","telephone": "6262 5714","postal_code": "6262 5714", "pharmacy": "guardian"},
        {"region": "Central","name": "Bugis Junction","address1": "200 Victoria Street ","address2": "#B1-20/21","address3": "Bugis Junction","address4": "Singapore 188021","hours1": "Mon to Fri 1100 - 1930","hours2": "Sat, Sun, PH 1030 - 1900 ","hours3": "","telephone": "6338 5244","postal_code": "6338 5244", "pharmacy": "guardian"},
        {"region": "Central","name": "Bugis MRT","address1": "220 Victoria Street ","address2": "#B1-01","address3": "Bugis MRT","address4": "Singapore 188022","hours1": "Mon to Fri 1000 - 1830","hours2": "Sat, Sun, PH 1100 - 1930","hours3": "","telephone": "6338 1262","postal_code": "6338 1262", "pharmacy": "guardian"},
        {"region": "West","name": "Bukit Panjang Plaza","address1": "1 Jelebu Road ","address2": "#01-01/02/03","address3": "Bukit Panjang Plaza ","address4": "Singapore 677743","hours1": "Mon to Sun, PH 1100 - 2000","hours2": "","hours3": "","telephone": "6762 1214","postal_code": "6762 1214", "pharmacy": "guardian"},
        {"region": "North","name": "Canberra Plaza","address1": "133 Canberra View","address2": "#01-17/18","address3": "Canberra Plaza ","address4": "Singapore 750133","hours1": "Mon to Sun, PH 1100 - 1930","hours2": "","hours3": "","telephone": "6719 8170","postal_code": "6719 8170", "pharmacy": "guardian"},
        {"region": "North","name": "Causeway Point","address1": "1 Woodlands Square ","address2": "#B1-28/29/30","address3": "Causeway Point ","address4": "Singapore 738099","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6894 3014","postal_code": "6894 3014", "pharmacy": "guardian"},
        {"region": "Central","name": "Chinatown Point","address1": "133 New Bridge Road ","address2": "#B1-34","address3": "Chinatown Point ","address4": "Singapore 059413","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6543 6242","postal_code": "6543 6242", "pharmacy": "guardian"},
        {"region": "Central","name": "City Square Mall","address1": "180 Kitchener Road ","address2": "#B1-18/19","address3": "City Square Mall ","address4": "Singapore 208539","hours1": "Mon to Sat 1100 - 2000 ","hours2": "Sun, PH Closed","hours3": "","telephone": "6509 9716","postal_code": "6509 9716", "pharmacy": "guardian"},
        {"region": "Central","name": "Citylink Mall","address1": "1 Raffles Link ","address2": "#B1-67","address3": "City Link Mall ","address4": "Singapore 039393","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6238 8117","postal_code": "6238 8117", "pharmacy": "guardian"},
        {"region": "Central","name": "Clementi Mall","address1": "3155 Commonwealth Avenue West ","address2": "#03-59/60/61","address3": "The Clementi Mall ","address4": "Singapore 129588","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6659 9234","postal_code": "6659 9234", "pharmacy": "guardian"},
        {"region": "Central","name": "Clifford Centre","address1": "24 Raffles Place","address2": "#01-19/20/21","address3": "Clifford Centre ","address4": "Singapore 48621","hours1": "Mon to Fri  0830 - 1700","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6535 7460 ","postal_code": "6535 7460 ", "pharmacy": "guardian"},
        {"region": "North-East","name": "Compass One","address1": "1 Sengkang Square ","address2": "#B1-11","address3": "Compass One","address4": "Singapore 545078","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6386 2764","postal_code": "6386 2764", "pharmacy": "guardian"},
        {"region": "Central","name": "Funan Mall","address1": "107 North Bridge Road ","address2": "#B2-16","address3": "Funan Mall","address4": "Singapore 179105","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6968 7825","postal_code": "6968 7825", "pharmacy": "guardian"},
        {"region": "Central","name": "Gleneagles Medical Centre","address1": "6A Napier Road  ","address2": "#02-06/07/08","address3": "Gleneagles Medical Centre ","address4": "Singapore 258500","hours1": "Mon to Fri 0830 - 1800","hours2": "Sat 0830 - 1400 ","hours3": "Sun, PH Closed","telephone": "6472 1941","postal_code": "6472 1941", "pharmacy": "guardian"},
        {"region": "Central","name": "Great World","address1": "1 Kim Seng Promenade","address2": "#B1-122/123/124/125","address3": "Great World City","address4": "Singapore 237994","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6235 4037","postal_code": "6235 4037", "pharmacy": "guardian"},
        {"region": "Central","name": "HarbourFront Centre","address1": "1 Maritime Square","address2": "#02-111/112","address3": "HarbourFront Centre ","address4": "Singapore 099253","hours1": "Mon to Sun, PH 1100 - 1930 ","hours2": "","hours3": "","telephone": "6274 8441","postal_code": "6274 8441", "pharmacy": "guardian"},
        {"region": "Central","name": "Holland Shopping Centre","address1": "211 Holland Avenue ","address2": "#01-10/11","address3": "Holland Road Shopping Centre ","address4": "Singapore 278967","hours1": "Mon to Sun, PH 1000 - 2200 ","hours2": "","hours3": "","telephone": "6465 7734","postal_code": "6465 7734", "pharmacy": "guardian"},
        {"region": "North-East","name": "Hougang Blk 205","address1": "Blk 205 Hougang Street 21","address2": "#01-129 & 131","address3": "","address4": "Singapore 530205","hours1": "Mon to Sun, PH  0930 - 2130","hours2": "","hours3": "","telephone": "6487 4580","postal_code": "6487 4580", "pharmacy": "guardian"},
        {"region": "North-East","name": "Hougang Mall","address1": "90 Hougang Avenue 10","address2": "#B1-31","address3": "Hougang Mall ","address4": "Singapore 538766","hours1": "Mon to Fri 1100 - 1930","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6282 1336","postal_code": "6282 1336", "pharmacy": "guardian"},
        {"region": "West","name": "IMM","address1": "2 Jurong East Street 21","address2": "#01-57","address3": "IMM Building ","address4": "Singapore 609601","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6566 7660","postal_code": "6566 7660", "pharmacy": "guardian"},
        {"region": "Central","name": "International Building","address1": "360 Orchard Road ","address2": "#01-18","address3": "International Building ","address4": "Singapore 238869","hours1": "Mon to Sun, PH 1100 - 2000","hours2": "","hours3": "","telephone": "6262 3364","postal_code": "6262 3364", "pharmacy": "guardian"},
        {"region": "Central","name": "ION Orchard","address1": "2 Orchard Turn","address2": "#B4-02","address3": "ION Orchard ","address4": "Singapore 238801","hours1": "Mon to Thu 1100 - 1930 ","hours2": "Fri, Sat 1000 - 2200  ","hours3": "Sun, PH 1100 - 1930","telephone": "6884 5956","postal_code": "6884 5956", "pharmacy": "guardian"},
        {"region": "Central","name": "Jelita","address1": "293 Holland Road ","address2": "#02-10","address3": "Cold Storage Jelita ","address4": "Singapore 278628","hours1": "Mon to Fri 1030 - 1900 ","hours2": "Sat, Sun, PH 0930 - 1800 ","hours3": "","telephone": "6469 0700","postal_code": "6469 0700", "pharmacy": "guardian"},
        {"region": "West","name": "JEM","address1": "50 Jurong Gateway Road ","address2": "#B1-16/17","address3": "JEM Shopping Centre ","address4": "Singapore 608549","hours1": "Mon to Fri 1100 - 2100","hours2": "Sat 1000 - 2200 ","hours3": "Sun, PH 1100 - 2100","telephone": "6694 6042","postal_code": "6694 6042", "pharmacy": "guardian"},
        {"region": "North-East","name": "Junction 8","address1": "9 Bishan Place ","address2": "#B1-08","address3": "Junction 8 Shopping Centre","address4": "Singapore 579837","hours1": "Mon to Sun, PH 1000 - 2200 ","hours2": "","hours3": "","telephone": "6353 7234","postal_code": "6353 7234", "pharmacy": "guardian"},
        {"region": "West","name": "Jurong Point","address1": "63 Jurong West Central 3 ","address2": "#B1-27/28","address3": "Jurong Point Shopping Centre","address4": "Singapore 648331","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6794 0501","postal_code": "6794 0501", "pharmacy": "guardian"},
        {"region": "West","name": "Jurong West Blk 503","address1": "Blk 503 Jurong West Avenue 1","address2": "#01-845","address3": "","address4": "Singapore 640503","hours1": "Mon to Sat 0900 - 1730 ","hours2": "Sun, PH Closed","hours3": "","telephone": "6425 2931","postal_code": "6425 2931", "pharmacy": "guardian"},
        {"region": "Central","name": "Kallang Leisure Park","address1": "5 Stadium Walk ","address2": "#01-23","address3": "Kallang Leisure Park ","address4": "Singapore 397693","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6348 8750","postal_code": "6348 8750", "pharmacy": "guardian"},
        {"region": "Central","name": "Lavender MRT","address1": "50 Kallang Road ","address2": "#B1-01","address3": "Lavender MRT ","address4": "Singapore 208699","hours1": "Mon to Fri 1100 - 1930","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6293 9397","postal_code": "6293 9397", "pharmacy": "guardian"},
        {"region": "West","name": "Le Quest","address1": "4 Bukit Batok Street 41","address2": "#01-58/59/60","address3": "Le Quest ","address4": "Singapore 657991","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6719 6955","postal_code": "6719 6955", "pharmacy": "guardian"},
        {"region": "West","name": "LOT 1","address1": "21 Choa Chu Kang Avenue 4 ","address2": "#B1-26/27","address3": "LOT 1 Shopping Mall ","address4": "Singapore 689812","hours1": "Mon to Fri  1130 - 2000 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6468 6712","postal_code": "6468 6712", "pharmacy": "guardian"},
        {"region": "Central","name": "Marina Bay Sands","address1": "2 Bayfront Avenue ","address2": "#B2-49","address3": "The Shoppes at Marina Bay Sands","address4": "Singapore 018972","hours1": "Mon to Thu 1100 - 2100 ","hours2": "Fri to Sun, PH 1000 - 2200","hours3": "","telephone": "6509 6150","postal_code": "6509 6150", "pharmacy": "guardian"},
        {"region": "Central","name": "Mount Elizabeth Hospital","address1": "3 Mount Elizabeth  ","address2": "#02-10/11","address3": "Mount Elizabeth Medical Centre ","address4": "Singapore 228510","hours1": "Mon to Fri 0830 - 1800 ","hours2": "Sat 0830 - 1500 ","hours3": "Sun, PH Closed","telephone": "6734 3855 ","postal_code": "6734 3855 ", "pharmacy": "guardian"},
        {"region": "North","name": "Northpoint","address1": "930 Yishun Avenue 2 ","address2": "#B1-02/03 (North Wing)","address3": "Northpoint City ","address4": "Singapore 769098","hours1": "Mon to Sun, PH 1000 - 2200 ","hours2": "","hours3": "","telephone": "6754 6574","postal_code": "6754 6574", "pharmacy": "guardian"},
        {"region": "Central","name": "Novena Hospital","address1": "38 Irrawaddy Road ","address2": "#01-08/09/10/11","address3": "Novena Hospital ","address4": "Singapore 329563","hours1": "Mon to Fri  0830 - 1800 ","hours2": "Sat 0830 - 1500 ","hours3": "Sun, PH Closed","telephone": "6694 0725","postal_code": "6694 0725", "pharmacy": "guardian"},
        {"region": "Central","name": "Novena Square","address1": "238 Thomson Road","address2": "#01-31","address3": "Novena Square ","address4": "Singapore 307683","hours1": "Mon to Fri 1000 - 2200 ","hours2": "Sat, Sun, PH 1130 - 2000","hours3": "","telephone": "6252 7019","postal_code": "6252 7019", "pharmacy": "guardian"},
        {"region": "North-East","name": "Oasis Terrace","address1": "681 Punggol Drive ","address2": "#01-22/23/24/25","address3": "Oasis Terrace ","address4": "Singapore 820681","hours1": "Mon to Fri  1000 : 1830","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6244 4093","postal_code": "6244 4093", "pharmacy": "guardian"},
        {"region": "East","name": "Our Tampines Hub","address1": "1 Tampines Walk ","address2": "#B1-29","address3": "Our Tampines Hub ","address4": "Singapore 528523","hours1": "Mon to Sat  1100 - 1930","hours2": "Sun, PH  1000 - 2200","hours3": "","telephone": "6386 7421","postal_code": "6386 7421", "pharmacy": "guardian"},
        {"region": "Central","name": "Paragon","address1": "290 Orchard Road","address2": "#B1-20/24","address3": "Paragon ","address4": "Singapore 238859","hours1": "Mon to Sat 0900 - 2100 ","hours2": "Sun, PH 0900 - 1900","hours3": "","telephone": "6732 6762 ","postal_code": "6732 6762 ", "pharmacy": "guardian"},
        {"region": "Central","name": "Parkway Parade","address1": "80 Marine Parade Road","address2": "#B1-147/149","address3": "Parkway Parade ","address4": "Singapore 449269","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6344 2102","postal_code": "6344 2102", "pharmacy": "guardian"},
        {"region": "Central","name": "Paya Lebar Quarter","address1": "10 Paya Lebar Road ","address2": "#B2-01 & #B2-35","address3": "Paya Lebar Quarter ","address4": "Singapore 409057","hours1": "Mon to Sun, PH 1100 - 1930","hours2": "","hours3": "","telephone": "6968 7816","postal_code": "6968 7816", "pharmacy": "guardian"},
        {"region": "Central","name": "Plaza Singapura","address1": "68 Orchard Road","address2": "#B2-14","address3": "Plaza Singapura ","address4": "Singapore 238839","hours1": "Mon to Sun, PH  1100 - 1930","hours2": "","hours3": "","telephone": "6338 0813","postal_code": "6338 0813", "pharmacy": "guardian"},
        {"region": "Central","name": "Raffles City","address1": "252 North Bridge Road","address2": "#B1-01","address3": "Raffles City Shopping Centre ","address4": "Singapore 179103","hours1": "Mon to Sun, PH 1100 - 1930","hours2": "","hours3": "","telephone": "6339 2137","postal_code": "6339 2137", "pharmacy": "guardian"},
        {"region": "Central","name": "Raffles Place MRT","address1": "5 Raffles Place ","address2": "#B1-37-40/43-45","address3": "Raffles Place MRT ","address4": "Singapore 048618","hours1": "Mon to Fri 1100 - 2000  ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6438 4962","postal_code": "6438 4962", "pharmacy": "guardian"},
        {"region": "North-East","name": "Seletar Mall","address1": "33 Sengkang West Ave ","address2": "#B1-10/11","address3": "The Seletar Mall ","address4": "Singapore 797653","hours1": "Mon to Sun, PH 1100 - 2100","hours2": "","hours3": "","telephone": "6702 7053","postal_code": "6702 7053", "pharmacy": "guardian"},
        {"region": "North-East","name": "Serangoon Garden","address1": "66 Serangoon Garden Way ","address2": "","address3": "Serangoon Garden","address4": "Singapore 555962","hours1": "Mon to Fri 1000 - 1830  ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6287 7190","postal_code": "6287 7190", "pharmacy": "guardian"},
        {"region": "North-East","name": "Serangoon Nex","address1": "23 Serangoon Central ","address2": "#B1-62/63","address3": "Serangoon NEX ","address4": "Singapore 556083","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6634 2715","postal_code": "6634 2715", "pharmacy": "guardian"},
        {"region": "Central","name": "Somerset 313","address1": "313 Orchard Road ","address2": "#B3-13/14","address3": "313 @ Somerset ","address4": "Singapore 238895","hours1": "Mon to Sat 1100 - 1930","hours2": "Sun, PH Closed","hours3": "","telephone": "6634 0991","postal_code": "6634 0991", "pharmacy": "guardian"},
        {"region": "Central","name": "Star Vista","address1": "1 Vista Exchange Green ","address2": "#B1-16","address3": "Star Vista ","address4": "Singapore 138617","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6694 3906","postal_code": "6694 3906", "pharmacy": "guardian"},
        {"region": "North","name": "Sun Plaza","address1": "30 Sembawang Drive ","address2": "#B1-11","address3": "Sun Plaza ","address4": "Singapore 757713","hours1": "Mon to Sun, PH 1100 - 2000 ","hours2": "","hours3": "","telephone": "6257 8939","postal_code": "6257 8939", "pharmacy": "guardian"},
        {"region": "Central","name": "Suntec City","address1": "3 Temasek Boulevard ","address2": "#02-328/329","address3": "Suntec City ","address4": "Singapore 038983","hours1": "Mon to Fri 1100 - 2000","hours2": "Sat 1000- 2100 ","hours3": "Sun, PH Closed","telephone": "6238 6439","postal_code": "6238 6439", "pharmacy": "guardian"},
        {"region": "Central","name": "Takashimaya","address1": "391 Orchard Road ","address2": "#B2-15 to 20","address3": "Takashimaya Shopping Centre ","address4": "Singapore 238872","hours1": "Mon to Sun, PH 1000 - 2100","hours2": "","hours3": "","telephone": "6836 9382","postal_code": "6836 9382", "pharmacy": "guardian"},
        {"region": "East","name": "Tampines Mall","address1": "4 Tampines Central 5  ","address2": "#B1-18/19","address3": "Tampines Mall ","address4": "Singapore 529510","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6787 0648","postal_code": "6787 0648", "pharmacy": "guardian"},
        {"region": "East","name": "Tampines MRT","address1": "20 Tampines Central 1","address2": "#01-01","address3": "Tampines MRT ","address4": "Singapore 529538","hours1": "Mon to Sun, PH 0930 - 2130","hours2": "","hours3": "","telephone": "6786 4889","postal_code": "6786 4889", "pharmacy": "guardian"},
        {"region": "East","name": "Tampines North Drive 2","address1": "21 Tampines North Drive 2 ","address2": "#01-01","address3": "Giant Tampines ","address4": "Singapore 528765","hours1": "Mon to Fri 1000 - 1830 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6788 4161","postal_code": "6788 4161", "pharmacy": "guardian"},
        {"region": "Central","name": "Tanglin Mall","address1": "163 Tanglin Road ","address2": "#01-18","address3": "Tanglin Mall ","address4": "Singapore 247933","hours1": "Mon to Sun, PH 1000 - 1930","hours2": "","hours3": "","telephone": "6836 1146","postal_code": "6836 1146", "pharmacy": "guardian"},
        {"region": "Central","name": "The Centrepoint","address1": "176 Orchard ","address2": "#B1-01/02/03/04","address3": "The Centrepoint ","address4": "Singapore 238843","hours1": "Mon to Fri 1000 - 2030 ","hours2": "Sat, Sun, PH 1000 - 1830 ","hours3": "","telephone": "6835 7453","postal_code": "6835 7453", "pharmacy": "guardian"},
        {"region": "Central","name": "The Poiz Centre","address1": "51 Upper Serangoon Road ","address2": "#01-23/24 ","address3": "The Poiz Centre ","address4": "Singapore 347697","hours1": "Mon to Sun, PH 1100 - 1930","hours2": "","hours3": "","telephone": "6513 1803","postal_code": "6513 1803", "pharmacy": "guardian"},
        {"region": "North-East","name": "Thomson","address1": "301 Upper Thomson Road ","address2": "#03-28","address3": "Thomson Plaza ","address4": "Singapore 574408","hours1": "Mon to Sun, PH 1130 - 2000 ","hours2": "","hours3": "","telephone": "6575 7126","postal_code": "6575 7126", "pharmacy": "guardian"},
        {"region": "Central","name": "Tiong Bahru MRT","address1": "300 Tiong Bahru Road ","address2": "#B1-01","address3": "Tiong Bahru MRT Station ","address4": "Singapore 168731","hours1": "Mon to Fri 1000 - 2000  ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6251 3728","postal_code": "6251 3728", "pharmacy": "guardian"},
        {"region": "Central","name": "Tiong Bahru Plaza","address1": "302 Tiong Bahru Road ","address2": "#B1-125","address3": "Tiong Bahru Plaza ","address4": "Singapore 168732","hours1": "Mon to Sun, PH 1000 - 2200","hours2": "","hours3": "","telephone": "6276 3976","postal_code": "6276 3976", "pharmacy": "guardian"},
        {"region": "Central","name": "Toa Payoh Blk 190","address1": "Blk 190 Toa Payoh Lorong 6 ","address2": "#01-578","address3": "Toa Payoh Central ","address4": "Singapore 310190","hours1": "Mon to Sun, PH 1100 - 2100","hours2": "","hours3": "","telephone": "6352 5912","postal_code": "6352 5912", "pharmacy": "guardian"},
        {"region": "Central","name": "United Square","address1": "101 Thomson Road  ","address2": "#B1-28","address3": "United Square ","address4": "Singapore 307591","hours1": "Mon to Fri  1030 - 1900","hours2": "Sat 1000 - 1830 ","hours3": "Sun, PH Closed","telephone": "6250 9695","postal_code": "6250 9695", "pharmacy": "guardian"},
        {"region": "Central","name": "VivoCity","address1": "1 HarbourFront Walk ","address2": "#02-79","address3": "VivoCity ","address4": "Singapore 098585","hours1": "Mon to Thu 1100 - 1930 ","hours2": "Fri, Sat, Sun, PH 1100 - 2100","hours3": "","telephone": "6261 4776","postal_code": "6261 4776", "pharmacy": "guardian"},
        {"region": "North-East","name": "Waterway Point","address1": "83 Punggol Central ","address2": "#B1-04","address3": "Waterway Point ","address4": "Singapore 828761","hours1": "Mon to Thu 1100 - 2100 ","hours2": "Fri, Sat, Sun, PH 1000 - 2200","hours3": "","telephone": "6385 8073","postal_code": "6385 8073", "pharmacy": "guardian"},
        {"region": "West","name": "West Mall","address1": "1 Bukit Batok Central Link  ","address2": "#01-27","address3": "West Mall Shopping Centre ","address4": "Singapore 658713","hours1": "Mon to Sun, PH 1000 - 2200 ","hours2": "","hours3": "","telephone": "6794 0903","postal_code": "6794 0903", "pharmacy": "guardian"},
        {"region": "West","name": "Westgate","address1": "3 Gateway Drive ","address2": "#B1-20","address3": "Westgate Shopping Centre ","address4": "Singapore 608532","hours1": "Mon to Fri 1100 - 1930 ","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "6465 9440","postal_code": "6465 9440", "pharmacy": "guardian"},
        {"region": "East","name": "White Sands Mall","address1": "1 Pasir Ris Central Street 3 ","address2": "#01-12","address3": "White Sands Mall ","address4": "Singapore 518457","hours1": "Mon to Thu 1100 - 2000 ","hours2": "Fri, Sat, Sun, PH 1100 - 2030","hours3": "","telephone": "6385 0534","postal_code": "6385 0534", "pharmacy": "guardian"},
        {"region": "West","name": "Yew Tee MRT","address1": "61 Choa Chu Kang Drive  ","address2": "#01-02A","address3": "Yew Tee Mrt Station ","address4": "Singapore 689715","hours1": "Mon to Sun, PH 1100 - 2000 ","hours2": "","hours3": "","telephone": "6769 1147","postal_code": "6769 1147", "pharmacy": "guardian"},
        {"region": "Central","name": "Zhongshan Park","address1": "20 Ah Hood Road ","address2": "#01-20/21","address3": "Zhongshan Mall ","address4": "Singapore 329984","hours1": "Mon to Fri 1100 - 1930  ","hours2": "Sat, Sun, PH 1000 - 2200","hours3": "","telephone": "6339 4314","postal_code": "6339 4314", "pharmacy": "guardian"}],

        "unity": [{"region": "West","name": "Alexandra Retail Centre","address1": "460 Alexandra Road","address2": "#02-04/05/06","address3": "Alexandra Retail Centre   ","address4": "Singapore 119963","hours1": "Mon to Thu 1030 - 1900","hours2": "Sat 1000 - 1400","hours3": "Fri, Sun, PH Closed ","telephone": "6278 8791","postal_code": "6278 8791", "pharmacy": "unity"},
        {"region": "North-East","name": "Ang Mo Kio ","address1": "53 Ang Mo Kio Ave 3","address2": "#B2-40","address3": "AMK Hub (inside FairPrice)   ","address4": "Singapore 569933 ","hours1": "Mon to Sat 0800 - 2200","hours2": "Sun, PH 0930 - 2130","hours3": "","telephone": "6552 2001","postal_code": "6552 2001", "pharmacy": "unity"},
        {"region": "North","name": "Causeway Point","address1": "1 Woodlands Square","address2": "#01-33","address3": "Causeway Point ","address4": "Singapore 738099","hours1": "Mon to Sun 1030 - 2130","hours2": "PH 1030 - 1800","hours3": "","telephone": "6760 0740","postal_code": "6760 0740", "pharmacy": "unity"},
        {"region": "West","name": "Clementi Mall","address1": "3155 Commonwealth Ave West ","address2": "#B1-11","address3": "The Clementi Mall","address4": "Singapore 129588","hours1": "Mon to Sat 0900 - 1000","hours2": "Sun 1030 - 2130 PH 1030 - 1800","hours3": "","telephone": "6659 4719","postal_code": "6659 4719", "pharmacy": "unity"},
        {"region": "Central","name": "HarbourFront Centre","address1": "1 Maritime Square","address2": "#02-118/119","address3": "HarbourFront Centre  ","address4": "Singapore 099253","hours1": "Mon to Thu 1100 - 1930","hours2": "Fri to Sun 1000 - 2030","hours3": "","telephone": "6271 5100","postal_code": "6271 5100", "pharmacy": "unity"},
        {"region": "West","name": "Hillion Mall","address1": "17 Petir Road","address2": "#B2-64/65 ","address3": "Hillion Mall ","address4": "Singapore 678278","hours1": "Mon to Sat 1030 - 2000","hours2": "Thu, Sun, PH Closed","hours3": "","telephone": "6266 1396","postal_code": "6266 1396", "pharmacy": "unity"},
        {"region": "North-East","name": "Hougang Mall","address1": "90 Hougang Ave 10","address2": "#B1-35/36","address3": "Hougang Mall ","address4": "Singapore 538766","hours1": "Mon, Tue, Wed, Thu, Sat 1030 - 2000","hours2": "Sun 1030 - 1800","hours3": "Fri, PH Closed","telephone": "6385 8606","postal_code": "6385 8606", "pharmacy": "unity"},
        {"region": "North-East","name": "Hougang Point","address1": "1 Hougang St 91","address2": "#02-01","address3": "Hougang 1 ","address4": "Singapore 538692","hours1": "Mon to Thu 0900 - 1800","hours2": "Sat 0900 - 2000","hours3": "Fri, Sun, PH Closed","telephone": "6384 0952","postal_code": "6384 0952", "pharmacy": "unity"},
        {"region": "North-East","name": "Junction 8","address1": "9 Bishan Place","address2": "#B1-16","address3": "Junction 8  ","address4": "Singapore 579837","hours1": "Mon, Tue, Wed, Thu, Sat 1030 - 2000","hours2": "Fri, Sun, PH Closed","hours3": "","telephone": "6262 5302","postal_code": "6262 5302", "pharmacy": "unity"},
        {"region": "West","name": "Jurong Point","address1": "1 Jurong West Central 2","address2": "#B1-09","address3": "Jurong Point ","address4": "Singapore 648886","hours1": "Mon, Tue, Wed, Thu, Sun 1000 - 1930","hours2": "Fri, Sat, PH Closed","hours3": "","telephone": "6793 5712","postal_code": "6793 5712", "pharmacy": "unity"},
        {"region": "West","name": "Jurong Point Xtra","address1": "63 Jurong West Central 3","address2": "#03-01","address3": "Jurong Point (inside FairPrice) ","address4": "Singapore 648331","hours1": "Tue to Sat 0930 - 1900","hours2": "Mon, Sun, PH Closed","hours3": "","telephone": "6254 3007","postal_code": "6254 3007", "pharmacy": "unity"},
        {"region": "West","name": "Lot1 Shopper's Mall","address1": "21 Choa Chu Kang Ave 4","address2": "#B1-04/05","address3": "","address4": "Singapore 689812","hours1": "Mon to Sat 0900 - 2200","hours2": "Sun 1030 - 2130","hours3": "PH 1030 - 1800","telephone": "6763 7678","postal_code": "6763 7678", "pharmacy": "unity"},
        {"region": "East","name": "Marine Parade","address1": "6 Marine Parade Central (level 2 inside FairPrice)","address2": "","address3": "","address4": "Singapore 449411","hours1": "Mon, Tue, Wed, Thu, Sat 0900 - 1830","hours2": "Fri, Sun, PH Closed","hours3": "","telephone": "6345 1548","postal_code": "6345 1548", "pharmacy": "unity"},
        {"region": "North-East","name": "Nex Mall","address1": "23 Serangoon Central","address2": "#03-37/38","address3": "NEX ","address4": "Singapore 556083","hours1": "Mon, Tue, Wed, Sat 1030 - 2130","hours2": "Thu, Fri, Sun, PH 1030 - 1800","hours3": "","telephone": "6509 0316","postal_code": "6509 0316", "pharmacy": "unity"},
        {"region": "Central","name": "Novena Square","address1": "238 Thomson Road","address2": "#01-11 ","address3": "Novena Square ","address4": "Singapore 307683","hours1": "Mon to Sat 1030 - 2000","hours2": "Sun 1030 - 1800","hours3": "PH Closed","telephone": "6255 6200","postal_code": "6255 6200", "pharmacy": "unity"},
        {"region": "North-East","name": "Rivervale Plaza","address1": "118 Rivervale Drive","address2": "#01-16","address3": "Rivervale Plaza ","address4": "Singapore 540118","hours1": "Mon to Sat 0800 - 2200","hours2": "Sun, PH 1030 - 1800","hours3": "","telephone": "6386 4183","postal_code": "6386 4183", "pharmacy": "unity"},
        {"region": "North-East","name": "Seletar Mall","address1": "33 Sengkang West Avenue","address2": "#B2-16/17/18","address3": "The Seletar Mall ","address4": "Singapore 797653","hours1": "Mon, Tue, Wed, Thu, Sat 1030 - 2000","hours2": "Fri, Sun, PH Closed","hours3": "","telephone": "6702 3203","postal_code": "6702 3203", "pharmacy": "unity"},
        {"region": "Central","name": "Singapore Post","address1": "8 Eunos Road","address2": "#B1-122","address3": "Singapore Post Centre ","address4": "Singapore 408600","hours1": "Mon, Tue, Wed, Thu, Sat 1130 - 2100 ","hours2": "Fri, Sun, PH Closed","hours3": "","telephone": "6747 0873","postal_code": "6747 0873", "pharmacy": "unity"},
        {"region": "East","name": "Tampines One","address1": "10 Tampines Central 1","address2": "#B1-11/12","address3": "Tampines One ","address4": "Singapore 529536","hours1": "Mon to Sat 1100 - 2030","hours2": "Sun 1030 - 1800","hours3": "PH Closed","telephone": "6784 6055","postal_code": "6784 6055", "pharmacy": "unity"},
        {"region": "North-East","name": "Thomson Plaza","address1": "301 Upper Thomson Road","address2": "#01-100/101","address3": "Thomson Plaza ","address4": "Singapore 574408","hours1": "Mon to Sat 0930 to 2200","hours2": "Sun, PH 1030 - 1800","hours3": "","telephone": "6552 1965","postal_code": "6552 1965", "pharmacy": "unity"},
        {"region": "Central","name": "Toa Payoh MRT","address1": "510 Toa Payoh Lorong 6","address2": "#B1-02","address3": "Toa Payoh MRT Station ","address4": "Singapore 319398","hours1": "Mon to Sat 0800 - 2200","hours2": "Sun 1030 - 2130","hours3": "PH 1030 - 1800","telephone": "6258 2810","postal_code": "6258 2810", "pharmacy": "unity"},
        {"region": "Central","name": "VivoCity","address1": "1 HarbourFront Walk","address2": "#01-23 ","address3": "VivoCity ","address4": "Singapore 098585","hours1": "Mon to Sun, PH 0900 - 2200","hours2": "","hours3": "","telephone": "6256 9951","postal_code": "6256 9951", "pharmacy": "unity"},
        {"region": "North-East","name": "Waterway Point","address1": "83 Punggol Central","address2": "#B2-26 ","address3": "Waterway Point ","address4": "Singapore 828761","hours1": "Mon, Tue, Wed, Thu, Sun 1100 - 2030","hours2": "Fri, Sat, PH Closed","hours3": "","telephone": "6385 8290","postal_code": "6385 8290", "pharmacy": "unity"},
        {"region": "West","name": "Westgate","address1": "3 Gateway Drive ","address2": "#B1-21","address3": "Westgate","address4": "Singapore 608532","hours1": "Mon, Tue, Wed, Fri 1030 - 2000","hours2": "Sat 1000 - 1900","hours3": "Thu, Sun, PH Closed","telephone": "6465 9161","postal_code": "6465 9161", "pharmacy": "unity"},
        {"region": "Central","name": "Wisma Atria","address1": "435 Orchard Road ","address2": "#B1-07/08","address3": "Wisma Atria ","address4": "Singapore 238877","hours1": "Mon, Tue, Wed, Fri, Sat, Sun 1100 - 2000 ","hours2": "PH 1100 - 1900","hours3": "Thu Closed","telephone": "6694 5104","postal_code": "6694 5104", "pharmacy": "unity"},
        {"region": "West","name": "Yew Tee Point","address1": "21 Choa Chu Kang North 6","address2": "#B1-08/09","address3": " Yew Tee Point  ","address4": "Singapore 689578","hours1": "Mon to Sat 1200 - 2000 ","hours2": "Sun, PH Closed","hours3": "","telephone": "6762 6549","postal_code": "6762 6549", "pharmacy": "unity"}],
        
        "watsons" : [{"region": "East","name": "Bedok Mall","address1": "311 New Upper Changi Road","address2": "#B2-12/13","address3": "Bedok Mall","address4": "Singapore 467360","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Bugis Junction","address1": "200 Victoria Street","address2": "#02-27 to 33/33A","address3": "Bugis Junction","address4": "Singapore 188021","hours1": "Mon to Sun 1030 - 2130","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "Bukit Panjang Plaza","address1": "1 Jelebu Rd ","address2": "#01-30/31","address3": "Bukit Panjang Plaza","address4": "Singapore 677743","hours1": "Mon to Thu, Sun 1130 - 2000","hours2": "Fri, Sat 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North","name": "Causeway Point","address1": "1 Woodlands Square","address2": "#B1-14/15","address3": "Causeway Point","address4": "Singapore 738099","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "Clementi Mall","address1": "3155 Commonwealth Avenue West ","address2": "#B1-37/38/39","address3": "Clementi Mall","address4": "Singapore 129588","hours1": "Mon to Sun 1030 - 2130","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North-East","name": "Compass One","address1": "1 Sengkang Square","address2": "#02-09","address3": "Compass One","address4": "Singapore 545078","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Great World City","address1": "1 Kim Seng Promenade","address2": "#B1-118 to #B1-121","address3": "Great World City","address4": "Singapore 237994","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "East","name": "Heartbeat @ Bedok","address1": "11 Bedok North St 1","address2": "#01-08/09/10","address3": "Heartbeat @ Bedok","address4": "Singapore 469662","hours1": "Mon to Sat 0900 - 1730","hours2": "Sun 1100 - 1900 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North-East","name": "Hougang Mall","address1": "90 Hougang Ave 10 ","address2": "#03-02 ","address3": "Hougang Mall","address4": "Singapore 538766","hours1": "Sun, Mon, Tue, Thu, Fri 1030 - 1900","hours2": "Wed, Sat 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "IMM Building","address1": "2 Jurong East Street 21","address2": "#01-54/55 ","address3": "IMM Building ","address4": "Singapore 609601","hours1": "Sun, Mon, Tue, Wed, Thu 1130 - 2000","hours2": "Fri, Sat 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "International Plaza","address1": "10 Anson Road","address2": "#01-62/63/64/65/66/67","address3": "International Plaza ","address4": "Singapore 079903","hours1": "Mon to Fri 1000 - 1830","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "ION Orchard","address1": "2 Orchard Turn","address2": "#B4-12","address3": "ION Orchard ","address4": "Singapore 238801","hours1": "Mon to Sun 1100 - 2200","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "JEM","address1": "50 Jurong Gate Way Road","address2": "#B1-07","address3": "JEM","address4": "Singapore 608549","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "East","name": "Jewel Changi Airport","address1": "78 Airport Boulevard ","address2": "#B2-217/218","address3": "Jewel Changi Airport","address4": "Singapore 819666","hours1": "Tue to Sat 1200 - 2030","hours2": "Mon, Sun 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North-East","name": "Junction 8 Shopping","address1": "9 Bishan Place","address2": "#02-45/46","address3": "Junction 8 Shopping Centre","address4": "Singapore 579837","hours1": "Mon, Tue,Wed, Fri, Sat 1030 - 1900","hours2": "Thu, Sun 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "Jurong Point","address1": "1 Jurong West Central 2 ","address2": "#B1-12/13","address3": "Jurong Point","address4": "Singapore 648886","hours1": "Mon to Sun 1100 - 2200","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Lucky Plaza","address1": "304 Orchard Road","address2": "#B1-27/41, 28/40, 29/39 & 30","address3": "Lucky Plaza","address4": "Singapore 238863","hours1": "Tue to Sat 1100 - 1930","hours2": "Mon, Sun 1100 - 1900 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Marina Bay Financial Centre","address1": "8A Marina Boulevard","address2": "#B2-57/58/59","address3": "Marina Bay Financial Centre","address4": "Singapore 018984","hours1": "Mon to Fri 1000 - 1830","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Marina Square","address1": "6 Raffles Boulevard ","address2": "#02-212","address3": "Marina Square","address4": "Singapore 039594","hours1": "Mon, Tue, Thu, Fri, Sat 1130 - 2000","hours2": "Wed, Sun 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North-East","name": "Nex","address1": "23 Serangoon Central","address2": "#02-57","address3": "NEX","address4": "Singapore 556083","hours1": "Mon, Tue, Wed, Thu, Sun 1130 - 2000","hours2": "Fri, Sat 1200 -2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Ngee Ann City","address1": "391 Orchard Road","address2": "#B2-06/07/08/09/10","address3": "Ngee Ann City","address4": "Singapore 238872","hours1": "Sun to Thu 1000 - 2100","hours2": "Fri to Sat 1000 - 2200","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North","name": "Northpoint City","address1": "1 Northpoint Drive ","address2": "#B1-161/162/163/164","address3": "Northpoint City","address4": "Singapore 768019","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Novena Square","address1": "238 Thomson Road","address2": "#02-05/09","address3": "Novena Square","address4": "Singapore 307683","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "West","name": "NUH  Medical Centre","address1": "1 Lower Kent Ridge Road","address2": " #01-32/33","address3": "NUH Medical Centre","address4": "Singapore 119082","hours1": "Mon to Fri 1030 - 1900","hours2": "Sat, Sun, PH Closed","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Paragon","address1": "290 Orchard Road ","address2": "#B1-27/27A","address3": "Paragon","address4": "Singapore 238859","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "East","name": "Parkway Parade","address1": "80 Marine Parade Road","address2": "#B1-14/15/16","address3": "Parkway Parade","address4": "Singapore 449269","hours1": "Mon to Fri 1000 - 2100","hours2": "Sat to Sun 1000 - 2200","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Paya Lebar Quarters","address1": "10 Paya Lebar Road","address2": "#02-19","address3": "Paya Lebar Quarters","address4": "Singapore 409057","hours1": "Sun, Mon,Tue, Thu, Fri 1130 - 2000","hours2": "Wed, Sat 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Raffles City","address1": "252 North Bridge Road","address2": "#B1-42","address3": "Raffles City","address4": "Singapore 179103","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "East","name": "Tampines Mall","address1": "4 Tampines Central 5","address2": "#B1-07/08","address3": "Tampines Mall","address4": "Singapore 529510","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "The Poiz","address1": "51 Upper Serangoon Road","address2": "#01-55/56/57","address3": "The Poiz Centre","address4": "Singapore 347697","hours1": "Tue to Sat 1000 - 1830","hours2": "Mon, Sun 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA"},
        {"region": "Central","name": "Tiong Bahru Plaza","address1": "302 Tiong Bahru Road","address2": "#01-131 / 132","address3": "Tiong Bahru Plaza","address4": "Singapore 168732","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "Toa Payoh (HDB)","address1": "Blk 190 Toa Payoh Lor 6","address2": "#01-510","address3": "","address4": "Singapore 310190","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "United Square","address1": "101 Thomson Road","address2": "#B1-53","address3": "United Square","address4": "Singapore 307591","hours1": "Tue to Sat 11am - 1930","hours2": "Mon, Sun 1200 - 2000 (Telepharmacy)","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "Central","name": "VivoCity","address1": "1 HarbourFront Walk","address2": "#B2-15/16/17","address3": "VivoCity","address4": "Singapore 098585","hours1": "Mon to Sun 1030 - 2130","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"},
        {"region": "North-East","name": "Waterway Point","address1": "83 Punggol Centre","address2": "#B1-31/32","address3": "Waterway Point (East Wing)","address4": "Singapore 828761","hours1": "Mon to Sun 1000 - 2100","hours2": "","hours3": "","telephone": "NA","postal_code": "NA", "pharmacy": "watsons"}]
    }
    
    var createElemSelectForRegion = "<div class='dd-select-region-wrapper'><select name='select-region'></select><span></span><ul></ul></div>";
    var createElemSelectForPharmacy = "<div class='dd-select-pharmacy-wrapper'><select name='select-pharmacy'></select><span></span><ul></ul></div>";
    $(".fiter-wrapper").append(createElemSelectForRegion);
    $(".fiter-wrapper").append(createElemSelectForPharmacy);
    $(".fiter-wrapper select[name='select-region']").append("<option>Select a Region</option>");
    $(".fiter-wrapper select[name='select-pharmacy']").append("<option>Select a Pharmacy</option>");
    $(".fiter-wrapper .dd-select-region-wrapper > ul").append("<li>Select a Region</li>");
    $(".fiter-wrapper .dd-select-pharmacy-wrapper > ul").append("<li>Select a Pharmacy</li>");
    $(".fiter-wrapper").append("<div class='button-wrapper'><a href='javascript:;'>Submit</a></div>");
    
    var regionArr = [];
    var newRegionArr = [];

    for(var i=0; i<Object.keys(jsonData).length; i++) {
        $(".fiter-wrapper select[name='select-pharmacy']").append("<option>" + Object.keys(jsonData)[i] + "</option>");
        $(".fiter-wrapper .dd-select-pharmacy-wrapper > ul").append("<li>" + Object.keys(jsonData)[i] + "</li>");
        
        for(var j=0; j<jsonData[Object.keys(jsonData)[i]].length; j++) {
            regionArr.push(jsonData[Object.keys(jsonData)[i]][j].region)
        }
    }

    regionArr.sort();
    regionArr = [...new Set(regionArr)];

    //console.log(regionArr);

    regionArr.map(function(regionName) {
        $(".fiter-wrapper select[name='select-region']").append("<option>" + regionName + "</option>");
        $(".fiter-wrapper .dd-select-region-wrapper > ul").append("<li>" + regionName + "</li>");
    });

    $(".fiter-wrapper .dd-select-pharmacy-wrapper > span").text($(".fiter-wrapper select[name='select-pharmacy']").val()).addClass("dd-default-value");
    $(".fiter-wrapper .dd-select-region-wrapper > span").text($(".fiter-wrapper select[name='select-region']").val()).addClass("dd-default-value");

    cmp = function(x, y){
        return x > y ? 1 : x < y ? -1 : 0;
    };

    var createObj = {};

    $(document).on("click", ".collections-page .collection-locations-wrapper .fiter-wrapper > div > span", function() {
        $(this).parent("div").siblings(".dd-open").find("ul").slideUp();
        $(this).parent("div").toggleClass("dd-open").siblings(".dd-open").removeClass("dd-open");
        $(this).next("ul").slideToggle();
    });

    $(document).on("click", ".collections-page .collection-locations-wrapper .fiter-wrapper > div > ul > li", function() {
        if($(this).text() == "Select a Region" || $(this).text() == "Select a Pharmacy") {
            $(this).parent("ul").siblings("span").addClass("dd-default-value");
        }
        else {
            $(this).parent("ul").siblings("span").removeClass("dd-default-value");
        }

        $(this).addClass("selected-value").siblings("li").removeClass("selected-value");

        $(this).parent("ul").siblings("span").text($(this).text());
        $(this).parent("ul").slideToggle('slow', function() {
            $(this).parents("div").toggleClass("dd-open");
        });
        $(this).parent("ul").siblings("select").val($(this).text());
        $(".fiter-wrapper .button-wrapper > a").click();
    });

    $(".fiter-wrapper .button-wrapper > a").on("click", function() {
        $(".filtered-data-wrapper").html('');
        createObj = {};

        var selectedDropDownVal = '';
        var filterHeaderValue = '';

        if($(".fiter-wrapper select[name='select-region']").val() == "Select a Region" && $(".fiter-wrapper select[name='select-pharmacy']").val() == "Select a Pharmacy") {
            $(".filtered-data-wrapper").slideUp();
        }

        if($(".fiter-wrapper select[name='select-region']").val() != "Select a Region" && $(".fiter-wrapper select[name='select-pharmacy']").val() != "Select a Pharmacy") {
            selectedDropDownVal = 'select-pharmacy';
            createObj[$(".fiter-wrapper select[name='select-pharmacy']").val()] = [];
            newRegionArr = [];
            newRegionArr.push($(".fiter-wrapper select[name='select-region']").val());
            jsonData[$(".fiter-wrapper select[name='select-pharmacy']").val()].map(function(data) {
                if(data.region == $(".fiter-wrapper select[name='select-region']").val()) {
                    //console.log(data);
                    createObj[$(".fiter-wrapper select[name='select-pharmacy']").val()].push(data);
                }
            });

            filterHeaderValue = $(".fiter-wrapper select[name='select-region']").val() + " - " + $(".fiter-wrapper select[name='select-pharmacy']").val();
        }
        else {
            if($(".fiter-wrapper select[name='select-region']").val() != "Select a Region") {
                selectedDropDownVal = 'select-region';
                createObj[$(".fiter-wrapper select[name='select-region']").val()] = [];
                Object.keys(jsonData).map(function(data, i) {
                    jsonData[Object.keys(jsonData)[i]].map(function(thisData) {
                        if(thisData.region == $(".fiter-wrapper select[name='select-region']").val()) {
                            createObj[$(".fiter-wrapper select[name='select-region']").val()].push(thisData);
                        }
                    });
                });

                newRegionArr = [];
                newRegionArr.push($(".fiter-wrapper select[name='select-region']").val());

                filterHeaderValue = $(".fiter-wrapper select[name='select-region']").val();
            }
            else if($(".fiter-wrapper select[name='select-pharmacy']").val() != "Select a Pharmacy") {
                selectedDropDownVal = 'select-pharmacy';
                createObj = jsonData;
                newRegionArr = [];
                newRegionArr = [...regionArr];

                filterHeaderValue = $(".fiter-wrapper select[name='select-pharmacy']").val();
            }
        }

        $(".filtered-data-wrapper").append("<div><h2>" + filterHeaderValue + "</h2></div>");
        
        //console.log(createObj);
        //console.log($(".fiter-wrapper select[name='" + selectedDropDownVal + "']").val());
        
        
        createObj[$(".fiter-wrapper select[name='" + selectedDropDownVal + "']").val()].sort(function(a, b){
            //note the minus before -cmp, for descending order
            return cmp( 
                [cmp(a.name, b.name), cmp(a.address1, b.address1)], 
                [cmp(b.name, a.name), cmp(b.address1, a.address1)]
            );
        });
        
        //console.log(selectedDropDownVal);

        if(selectedDropDownVal != "select-pharmacy") {
            newRegionArr.map(function(regionName) {
                if($(".filtered-data-wrapper > div[data-rel='" + regionName + "']").length <= 0) {
                    //$(".filtered-data-wrapper").append("<div data-rel='" + regionName + "'><h2>" + regionName + "</h2></div>");
                    $(".filtered-data-wrapper > div").attr("data-rel", regionName);
                    $(".filtered-data-wrapper > div[data-rel='" + regionName + "']").append("<ul></ul>");
                }
                
                createObj[$(".fiter-wrapper select[name='" + selectedDropDownVal + "']").val()].map(function(data, i) {
                    if(regionName == data.region) {
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul").append("<li></li>");
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h4>" + data.pharmacy + "</h4>");
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h3>" + data.name.trim() + "</h3>");
                        // $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
                        if(data.address1 != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address1.trim() + ",</p>");
                        }
                        if(data.address2 != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address2.trim() + ",</p>");
                        }
                        if(data.address3 != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address3.trim() + ",</p>");
                        }
                        if(data.address4 != "") {
                            //$(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address4.trim() + "</p>");
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last > p:last").append(" " + data.address4.trim());
                        }
                        
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h4 class='pharmacy-hours-wrapper'>Pharmacy Hours:</h4>");
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours1.trim() + "</p>");
                        if(data.hours2 != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours2.trim() + "</p>");
                        }
                        if(data.hours3 != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours3.trim() + "</p>");
                        }
                        if(data.telephone != "") {
                            $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h4 class='tel-wrapper'>Tel:</h4><span> " + data.telephone.trim() + "</span>");
                        }
                    }
                });
            });
        }
        else if(selectedDropDownVal == "select-pharmacy") {
            regionName = $(".fiter-wrapper select[name='" + selectedDropDownVal + "']").val();
            //$(".filtered-data-wrapper").append("<div data-rel='" + regionName + "'><h2>" + regionName + "</h2></div>");
            $(".filtered-data-wrapper > div").attr("data-rel", regionName);
            $(".filtered-data-wrapper > div[data-rel='" + regionName + "']").append("<ul></ul>");

            createObj[$(".fiter-wrapper select[name='" + selectedDropDownVal + "']").val()].map(function(data, i) {
                //console.log(data);
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul").append("<li></li>");
                // $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h3>" + data.name.trim() + "</h3>");
                // $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
                if(data.address1 != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address1.trim() + ",</p>");
                }
                if(data.address2 != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address2.trim() + ",</p>");
                }
                if(data.address3 != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address3.trim() + ",</p>");
                }
                if(data.address4 != "") {
                    //$(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address4.trim() + "</p>");
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last > p:last").append(" " + data.address4.trim());
                }
                
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h4 class='pharmacy-hours-wrapper'>Pharmacy Hours:</h4>");
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours1.trim() + "</p>");
                if(data.hours2 != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours2.trim() + "</p>");
                }
                if(data.hours3 != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.hours3.trim() + "</p>");
                }
                if(data.telephone != "") {
                    $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h4 class='tel-wrapper'>Tel:</h4><span> " + data.telephone.trim() + "</span>");
                }
            });
        }

        $(".filtered-data-wrapper").slideDown();
        

        // if($(".fiter-wrapper select[name='select-pharmacy']").val() != "Select a Pharmacy") {
        //     createObj = jsonData;
        //     createObj[$(".fiter-wrapper select[name='select-pharmacy']").val()].sort(function(a, b){
        //         //note the minus before -cmp, for descending order
        //         return cmp( 
        //             [cmp(a.name, b.name), cmp(a.address, b.address)], 
        //             [cmp(b.name, a.name), cmp(b.address, a.address)]
        //         );
        //     });

        //     newRegionArr = [];
        //     newRegionArr = [...regionArr];

        //     newRegionArr.map(function(regionName) {
        //         if($(".filtered-data-wrapper > div[data-rel='" + regionName + "']").length <= 0) {
        //             $(".filtered-data-wrapper").append("<div data-rel='" + regionName + "'><h2>" + regionName + "</h2></div>");
        //             $(".filtered-data-wrapper > div[data-rel='" + regionName + "']").append("<ul></ul>");
        //         }
                
        //         createObj[$(".fiter-wrapper select[name='select-pharmacy']").val()].map(function(data, i) {
        //             if(regionName == data.region) {
        //                 $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul").append("<li></li>");
        //                 $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.name + "</p>");
        //                 $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
        //             }
        //         });
        //     });
        // }
        
    });

    // $(document).on("click",function(e) {
    //     if(e.target.offsetParent.className.indexOf("dd-open") < 0) {
    //         $(".fiter-wrapper > .dd-open").find("ul").slideUp();
    //         $(".fiter-wrapper > .dd-open").removeClass("dd-open");
    //     }
        
    // });
    /* For Collections page ends */

    /* Watch Video display in overlay starts */
    $(".cta-watch-video").click(function() {
        $("body").addClass("display-popup");
    });
    
    $(".popup-wrapper > span").click(function() {
        $("body").removeClass("display-popup");
    });

    /* Watch Video display in overlay ends */

    $(document).on("click", ".annoucement-wrapper", function(e) {
        window.location.href = "./collection.html"
    });
});