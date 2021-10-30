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
        "watsons" : [{"region": "East","name": "Bedok Mall","address": "311 New Upper Changi Road, #B2-12/13, Bedok Mall","postal_code": "467360"},
        {"region": "Central","name": "Bugis Junction","address": "200 Victoria Street, #02-27 to 33/33A , Bugis Junction","postal_code": "188021"},
        {"region": "West","name": "Bukit Panjang Plaza","address": "1 Jelebu Rd, #01-30/31, Bukit Panjang Plaza","postal_code": "677743"},
        {"region": "North","name": "Causeway Point","address": "No.1 Woodlands Square, #B1-14/15, Causeway Point","postal_code": "738099"},
        {"region": "West","name": "Clementi Mall","address": "3155 Commonwealth Avenue West, #B1-37/38/39, Clementi Mall","postal_code": "129588"},
        {"region": "North-East","name": "Compass One","address": "1 Sengkang Square, #02-09, Compass One","postal_code": "545078"},
        {"region": "Central","name": "Great World City","address": "1 Kim Seng Promenade, #B1-118 to #B1-121, Great World City","postal_code": "237994"},
        {"region": "East","name": "Heartbeat @ Bedok","address": "11 Bedok North St 1, #01-08/09/10, Heartbeat @ Bedok","postal_code": "469662"},
        {"region": "North-East","name": "Hougang Mall","address": "90 Hougang Ave 10, #03-02, Hougang Mall","postal_code": "538766"},
        {"region": "West","name": "IMM Building","address": "2 Jurong East Street 21, #01-54/55, Imm Building","postal_code": "609601"},
        {"region": "Central","name": "International Plaza","address": "10 Anson Road, #01-62/63/64/65/66/67, International Plaza","postal_code": "79903"},
        {"region": "Central","name": "Ion Orchard","address": "2 Orchard Turn, #B4-12, Ion Orchard","postal_code": "238801"},
        {"region": "West","name": "JEM","address": "50 Jurong Gate Way Road, #B1-07, JEM","postal_code": "608549"},
        {"region": "East","name": "Jewel Changi Airport","address": "78 Airport Boulevard, #B2-217/218, Jewel Changi Airport","postal_code": "819666"},
        {"region": "North-East","name": "Junction 8 Shopping","address": "9 Bishan Place, #02-45/46, Junction 8 Shopping Centre","postal_code": "579837"},
        {"region": "West","name": "Jurong Point","address": "1 Jurong West Central 2, #B1-12/13, Jurong Point","postal_code": "648886"},
        {"region": "Central","name": "Lucky Plaza","address": "304 Orchard Road, #B1-27/41, 28/40, 29/39 & 30, Lucky Plaza","postal_code": "238863"},
        {"region": "Central","name": "Marina Bay Financial Centre","address": "8A Marina Boulevard, #B2-57/58/59, Marina Bay Financial Centre","postal_code": "18984"},
        {"region": "Central","name": "Marina Square","address": "6 Raffles Boulevard, #02-212, Marina Square","postal_code": "39594"},
        {"region": "North-East","name": "Nex","address": "23 Serangoon Central, #02-57, NEX","postal_code": "556083"},
        {"region": "Central","name": "Ngee Ann City","address": "391 Orchard Road, #B2-06/07/08/09/10, Ngee Ann City","postal_code": "238872"},
        {"region": "North","name": "Northpoint City","address": "1 Northpoint Drive, #B1-161/162/163/164, Northpoint City","postal_code": "768019"},
        {"region": "Central","name": "Novena Square","address": "238 Thomson Road, #02-05/09, Novena Square","postal_code": "307683"},
        {"region": "West","name": "NUH  Medical Centre","address": "1 Lower Kentridge Road, #01-32/33, NUH Medical Centre","postal_code": "119082"},
        {"region": "Central","name": "Paragon","address": "290 Orchard Road, #B1-27/27A, Paragon","postal_code": "238859"},
        {"region": "East","name": "Parkway Parade","address": "80 Marine Parade Road, #B1-14/15/16, Parkway Parade","postal_code": "449269"},
        {"region": "Central","name": "Paya Lebar Quarters","address": "10 Paya Lebar Road, #02-19, Paya Lebar Quarters","postal_code": "409057"},
        {"region": "Central","name": "Raffles City","address": "252 North Bridge Road, #B1-42, Raffles City","postal_code": "179103"},
        {"region": "East","name": "Tampines Mall","address": "4 Tampines Central 5, #B1-07/08, Tampines Mall","postal_code": "529510"},
        {"region": "Central","name": "The Poiz","address": "51 Upper Serangoon Road, #01-55/56/57, The Poiz Centre","postal_code": "347697"},
        {"region": "Central","name": "Tiong Bahru Plaza","address": "302 Tiong Bahru Road, #01-131 / 132, Tiong Bahru Plaza","postal_code": "168732"},
        {"region": "Central","name": "Toa Payoh (HDB)","address": "Blk 190 Toa Payoh Lor 6, #01-510","postal_code": "310190"},
        {"region": "Central","name": "United Square","address": "101 Thomson Road, #B1-53, United Square","postal_code": "307591"},
        {"region": "Central","name": "VivoCity","address": "1 Harbourfront Walk, #B2-15/16/17, VivoCity","postal_code": "98585"},
        {"region": "North-East","name": "Waterway Point","address": "83 Punggol Centre, #B1-31/32, Waterway Point (East Wing)","postal_code": "828761"}],
        "guardian":[{"region": "North-East","name": "18 Tai Seng","address": "18 Tai Seng Street 18 Tai Seng # 01-19/20/21","postal_code": "539775"},
        {"region": "Central","name": "Amara Hotel","address": "100 Tras Street  Amara Hotel Tower # 02-09","postal_code": "079027"},
        {"region": "North-East","name": "Ang Mo Kio Blk 704","address": "Blk 704 Ang Mo Kio Ave 8  Anc # 01-2559C","postal_code": "560704"},
        {"region": "North-East","name": "Ang Mo Kio Hub","address": "53 Ang Mo Kio Ave 3 AMK Hub # B2-01/02","postal_code": "569933"},
        {"region": "East","name": "Bedok Central Blk 210","address": "Blk 210 New Upper Changi Road  # 01-715","postal_code": "460210"},
        {"region": "East","name": "Bedok Mall","address": "311 New Upper Changi Road Bedok Mall # B2-45/46/47","postal_code": "467360"},
        {"region": "North-East","name": "Bishan Blk 512","address": "Blk 512 Bishan St 13 # 01-524","postal_code": "570512"},
        {"region": "Central","name": "Bugis Junction","address": "200 Victoria Street Bugis Junction # B1-20/21","postal_code": "188021"},
        {"region": "Central","name": "Bugis MRT","address": "220 Victoria Street Bugis MRT # B1-01","postal_code": "188022"},
        {"region": "West","name": "Bukit Panjang Plaza","address": "1 Jelebu Road Bukit Panjang Plaza # 01-01/02/03","postal_code": "677743"},
        {"region": "North","name": "Canberra Plaza","address": "133 Canberra View, #01-17/18 Canberra Plaza #01 -17/18","postal_code": "750133"},
        {"region": "North","name": "Causeway Point","address": "1 Woodlands Square Causeway Point # B1-28/29/30","postal_code": "738099"},
        {"region": "Central","name": "Chinatown Point","address": "133 New Bridge Road Chinatown Point # B1-34","postal_code": "059413"},
        {"region": "Central","name": "City Square Mall","address": "180 Kitchener Road City Square Mall # B1-18/19","postal_code": "208539"},
        {"region": "Central","name": "Citylink Mall","address": "1 Raffles Link  City Link Mall # B1-67","postal_code": "039393"},
        {"region": "Central","name": "Clementi Mall","address": "3155 Commonwealth Avenue West The Clementi Mall # 03-59/60/61","postal_code": "129588"},
        {"region": "Central","name": "Clifford Centre","address": "24 Raffles Place  Clifford Centre # 01-19/20/21","postal_code": "048621"},
        {"region": "North-East","name": "Compass One","address": "1 Sengkang Square Compass One # B1-11","postal_code": "545078"},
        {"region": "Central","name": "Funan Mall","address": "107 North Bridge Road Funan Mall # B2-16","postal_code": "179105"},
        {"region": "Central","name": "Gleneagles Medical Centre","address": "6A Napier Road  Gleneagles Medical Centre # 02-06/07/08","postal_code": "258500"},
        {"region": "Central","name": "Great World","address": "1 Kim Seng Promenade  Great World City # B1-122/123/124/125","postal_code": "237994"},
        {"region": "Central","name": "Harbourfront Centre","address": "1 Maritime Square  Harbourfront Centre # 02-111/112","postal_code": "099253"},
        {"region": "Central","name": "Holland Shopping Centre","address": "211 Holland Avenue  Holland Road Shopping Centre # 01-10/11","postal_code": "278967"},
        {"region": "North-East","name": "Hougang Blk 205","address": "Blk 205 Hougang Street 21  H205 Haugang # 01-129 & 131","postal_code": "530205"},
        {"region": "North-East","name": "Hougang Mall","address": "90 Hougang Avenue 10  Hougang Mall # B1-31","postal_code": "538766"},
        {"region": "West","name": "IMM","address": "2 Jurong East Street 21  IMM Building # 01-57","postal_code": "609601"},
        {"region": "Central","name": "International Building","address": "360 Orchard Road International Building # 01-18","postal_code": "238869"},
        {"region": "Central","name": "Ion Orchard","address": "2 Orchard Turn  ION Orchard # B4-02","postal_code": "238801"},
        {"region": "Central","name": "Jelita","address": "293 Holland Road  Cold Storage Jelita # 02-10","postal_code": "278628"},
        {"region": "West","name": "JEM","address": "50 Jurong Gateway Road JEM Shopping Centre # B1-16/17","postal_code": "608549"},
        {"region": "North-East","name": "Junction 8","address": "9 Bishan Place Junction 8 Shopping Centre # B1-08","postal_code": "579837"},
        {"region": "West","name": "Jurong Point","address": "63 Jurong West Central 3  Jurong Point Shopping Centre # B1-27/28","postal_code": "648331"},
        {"region": "West","name": "Jurong West Blk 503","address": "Blk 503 Jurong West Avenue 1  # 01-845","postal_code": "640503"},
        {"region": "Central","name": "Kallang Leisure Park","address": "No. 5 Stadium Walk Kallang Leisure Park # 01-23","postal_code": "397693"},
        {"region": "Central","name": "Lavender MRT","address": "50 Kallang Road Lavender MRT # B1-01","postal_code": "208699"},
        {"region": "West","name": "Le Quest","address": "4 Bukit Batok Street 41, Le Quest, #01-58/59/60","postal_code": "657991"},
        {"region": "West","name": "Lot 1","address": "21 Choa Chu Kang Avenue 4 LOT 1 Shopping Mall # B1-26/27","postal_code": "689812"},
        {"region": "Central","name": "Marina Bay Sands","address": "2 Bayfront Avenue The Shoppes at Marina Bay Sands # B2-49","postal_code": "018972"},
        {"region": "Central","name": "Mount Elizabeth Hospital","address": "3 Mount Elizabeth  Mount Elizabeth Medical Centre # 02-10/11","postal_code": "228510"},
        {"region": "North","name": "Northpoint","address": "930 Yishun Avenue 2  Northpoint City # B1-02/03(NorthWing)","postal_code": "769098"},
        {"region": "Central","name": "Novena Hospital","address": "38 Irrawaddy Road Novena Hospital # 01-08/09/10/11","postal_code": "329563"},
        {"region": "Central","name": "Novena Square","address": "238 Thomson Road  Novena Square # 01-31","postal_code": "307683"},
        {"region": "North-East","name": "Oasis Terrace","address": "681 Punggol Drive Oasis Tarrace # 01-22/23/24/25","postal_code": "820681"},
        {"region": "East","name": "Our Tampines Hub","address": "1 Tampines Walk Our Tampines Hub # B1-29","postal_code": "528523"},
        {"region": "Central","name": "Paragon","address": "290 Orchard Road  Paragon # B1-20/24","postal_code": "238859"},
        {"region": "Central","name": "Parkway Parade","address": "80 Marine Parade Road  Parkway Parade # B1-147/149","postal_code": "449269"},
        {"region": "Central","name": "Paya Lebar Quarter","address": "10 Paya Lebar Road Paya Lebar Quarter # B2-01 & # B2-35","postal_code": "409057"},
        {"region": "Central","name": "Plaza Singapura","address": "68 Orchard Road  Plaza Singapura # B2-14","postal_code": "238839"},
        {"region": "Central","name": "Raffles City","address": "252 North Bridge Road  Raffles City Shopping Centre # B1-01","postal_code": "179103"},
        {"region": "Central","name": "Raffles Place MRT","address": "5 Raffles Place  Raffles Place MRT # B1-37-40/43-45","postal_code": "048618"},
        {"region": "North-East","name": "Seletar Mall","address": "33 Sengkang West Ave The Seletar Mall # B1-10/11","postal_code": "797653"},
        {"region": "North-East","name": "Serangoon Garden","address": "66 Serangoon Garden Way Serangoon Garden","postal_code": "555962"},
        {"region": "North-East","name": "Serangoon Nex","address": "23 Serangoon Central Serangoon NEX # B1-62/63","postal_code": "556083"},
        {"region": "Central","name": "Somerset 313","address": "313 Orchard Road 313 @ Somerset # B3-13/14","postal_code": "238895"},
        {"region": "Central","name": "Star Vista","address": "1 Vista Exchange Green Star Vista # B1-16","postal_code": "138617"},
        {"region": "North","name": "Sun Plaza","address": "30 Sembawang Drive Sun Plaza # B1-11","postal_code": "757713"},
        {"region": "Central","name": "Suntec City","address": "3 Temasek Boulevard  Suntec City # 02-328/329","postal_code": "038983"},
        {"region": "Central","name": "Takashimaya","address": "391 Orchard Road Takashimaya Shopping Centre # B2-15 to 20","postal_code": "238872"},
        {"region": "East","name": "Tampines Mall","address": "4 Tampines Central 5  Tampines Mall # B1-18/19","postal_code": "529510"},
        {"region": "East","name": "Tampines MRT","address": "20 Tampines Central 1  Tampines MRT # 01-01","postal_code": "529538"},
        {"region": "East","name": "Tampines North Drive 2","address": "21 Tampines North Drive 2 Giant Tampines # 01-01","postal_code": "528765"},
        {"region": "Central","name": "Tanglin Mall","address": "163 Tanglin Road Tanglin Mall # 01-18","postal_code": "247933"},
        {"region": "Central","name": "The Centrepoint","address": "176 Orchard The Centrepoint # B1-01/02/03/04","postal_code": "238843"},
        {"region": "Central","name": "The Poiz Centre","address": "51 Upper Serangoon Road The Poiz Centre # 01-23/24 ","postal_code": "347697"},
        {"region": "North-East","name": "Thomson","address": "301 Upper Thomson Road Thomson Plaza # 03-28","postal_code": "574408"},
        {"region": "Central","name": "Tiong Bahru MRT","address": "300 Tiong Bahru Road Tiong Bahru MRT Station # B1-01","postal_code": "168731"},
        {"region": "Central","name": "Tiong Bahru Plaza","address": "302 Tiong Bahru Road Tiong Bahru Plaza # B1-125","postal_code": "168732"},
        {"region": "Central","name": "Toa Payoh Blk190","address": "Blk 190 Toa Payoh Lorong 6 Toa Payoh Central # 01-578","postal_code": "310190"},
        {"region": "Central","name": "United Square","address": "101 Thomson Road  United Square # B1-28","postal_code": "307591"},
        {"region": "Central","name": "VivoCity","address": "1 Harbourfront Walk VivoCity # 02-79","postal_code": "098585"},
        {"region": "North-East","name": "Waterway Point","address": "83 Punggol Central Waterway Point # B1-04","postal_code": "828761"},
        {"region": "West","name": "West Mall","address": "1 Bukit Batok Central Link  West Mall Shopping Centre # 01-27","postal_code": "658713"},
        {"region": "West","name": "Westgate","address": "3 Gateway Drive Westgate Shopping Centre # B1-20","postal_code": "608532"},
        {"region": "East","name": "White Sands Mall","address": "1 Pasir Ris Central Street 3 White Sands Mall # 01-12","postal_code": "518457"},
        {"region": "West","name": "Yew Tee MRT","address": "61 Choa Chu Kang Drive  Yew Tee Mrt Station # 01-02A","postal_code": "689715"},
        {"region": "Central","name": "Zhongshan Park","address": "20 Ah Hood Road Zhongsan Mall # 01-20/21","postal_code": "329984"}],
        "unity": [{"region": "West","name": "Alexandra Retail Centre","address": "460, Alexandra Road, #02-04/05/06, Alexandra Retail Centre","postal_code": "119963"},
        {"region": "North-East","name": "Ang Mo Kio ","address": "53, Ang Mo Kio Ave 3, #B2-40, AMK Hub (inside FairPrice)","postal_code": "569933"},
        {"region": "North","name": "Causeway Point","address": "1, Woodlands Square, #01-33, Causeway Point","postal_code": "738099"},
        {"region": "West","name": "Clementi Mall","address": "3155, Commonwealth Ave West, #B1-11, The Clementi Mall","postal_code": "129588"},
        {"region": "Central","name": "Harbour Front Centre","address": "1, Maritime Square, #02-118/119, Harbour Front Centre ","postal_code": "099253"},
        {"region": "West","name": "Hillion Mall","address": "17, Petir Road, #B2-64/65, Hillion Mall","postal_code": "678278"},
        {"region": "North-East","name": "Hougang Mall","address": "90, Hougang Ave 10, #B1-35/36, Hougang Mall","postal_code": "538766"},
        {"region": "North-East","name": "Hougang Point","address": "1, Hougang St 91, #02-01, Hougang 1","postal_code": "538692"},
        {"region": "North-East","name": "Junction 8","address": "9, Bishan Place, #B1-16, Junction 8","postal_code": "579837"},
        {"region": "West","name": "Jurong Point","address": "1, Jurong West Central 2, #B1-09, Jurong Point","postal_code": "648886"},
        {"region": "West","name": "Jurong Point Xtra","address": "63, Jurong West Central 3, #03-01, Jurong Point  (inside FairPrice)","postal_code": "648331"},
        {"region": "West","name": "Lot1 Shopper's Mall","address": "21, Choa Chu Kang Ave 4, #B1-04/05","postal_code": "689812"},
        {"region": "East","name": "Marine Parade","address": "6, Marine Parade Central (level 2 inside FairPrice)","postal_code": "449411"},
        {"region": "North-East","name": "Nex Mall","address": "23, Serangoon Central, #03-37/38, NEX ","postal_code": "556083"},
        {"region": "Central","name": "Novena Square","address": "238, Thomson Road, #01-11, Novena Square ","postal_code": "307683"},
        {"region": "North-East","name": "Rivervale Plaza","address": "118, Rivervale Drive, #01-16, Rivervale Plaza ","postal_code": "540118"},
        {"region": "North-East","name": "Seletar Mall","address": "33, Sengkang West Avenue, #B2-16/17/18, The Seletar Mall","postal_code": "797653"},
        {"region": "Central","name": "Singapore Post","address": "8, Eunos Road, #B1-122, Singapore Post Centre","postal_code": "408600"},
        {"region": "East","name": "Tampines One","address": "10, Tampines Central 1, #B1-11/12, Tampines One","postal_code": "529536"},
        {"region": "North-East","name": "Thomson Plaza","address": "301, Upper Thomson Road, #01-100/101, Thomson Plaza","postal_code": "574408"},
        {"region": "Central","name": "Toa Payoh MRT","address": "510, Toa Payoh Lorong 6, #B1-02, Toa Payoh MRT Station","postal_code": "319398"},
        {"region": "Central","name": "VivoCity","address": "1, HarbourFront Walk, #01-23, VivoCity ","postal_code": "098585"},
        {"region": "North-East","name": "Waterway Point","address": "83, Punggol Central, #B2-26, Waterway Point","postal_code": "828761"},
        {"region": "West","name": "Westgate","address": "3, Gateway Drive, #B1-21, Westgate ","postal_code": "608532"},
        {"region": "Central","name": "Wisma Atria","address": "435, Orchard Road, #B1-07/08, Wisma Atria","postal_code": "238877"},
        {"region": "West","name": "Yew Tee Point","address": "21, Choa Chu Kang North 6, #B1-08/09,  Yew Tee Point","postal_code": "689578"}]
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
                [cmp(a.name, b.name), cmp(a.address, b.address)], 
                [cmp(b.name, a.name), cmp(b.address, a.address)]
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
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h3>" + data.name + "</h3>");
                        $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
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
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul").append("<li></li>");
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<h3>" + data.name + "</h3>");
                $(".filtered-data-wrapper div[data-rel='" + regionName + "'] ul li:last").append("<p>" + data.address + " - " + data.postal_code + "</p>");
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

    $(document).on("click",function(e) {
        if(e.target.offsetParent.className.indexOf("dd-open") < 0) {
            $(".fiter-wrapper > .dd-open").find("ul").slideUp();
            $(".fiter-wrapper > .dd-open").removeClass("dd-open");
        }
        
    });
    /* For Collections page ends */
});