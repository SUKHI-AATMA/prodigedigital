var grabWinWidth;

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        // $('.scrollDownHolder').addClass('showTop');
        // $('#fp-nav, #social').fadeOut(300);
        // $('#social').removeClass('onWhite');
        $('#social').removeClass('onWhite');
    }
});

$(window).on('load', function() {
    startSocialAnims();
    if ($('.mediacenter-landingpage').length) {
        $(".flexBox").addClass("all");
        masonryEffect();
        $(".filterNavigation li").click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            if ($(this).attr("data-filter") != "all") {
                $(".flexBox").removeClass("all");
                if (winWidth <= 1024) {
                    $(".flexItem." + $(this).attr("data-filter")).show().addClass("noMargin").siblings(":not(.flexItem." + $(this).attr('data-filter') + ")").hide();
                } else {
                    $(".flexItem." + $(this).attr("data-filter")).show().siblings(":not(.flexItem." + $(this).attr('data-filter') + ")").hide();
                }
                //$(".flexItem." + $(this).attr("data-filter")).show().addClass("noMargin").siblings(":not(.flexItem." + $(this).attr('data-filter') + ")").hide();
                $(":not(.flexItem." + $(this).attr('data-filter') + ")").css({ "left": "" });
            } else {
                $(".flexBox").addClass("all");
                $(".flexItem").show();
            }
            masonryEffect();
        });

        setTimeout(function() {
            $('.imageCarousel').trigger('refresh.owl.carousel');
        }, 500);
    }

});

$(window).resize(function() {
    if ($('.mediacenter-landingpage').length) {
        clearTimeout(grabWinWidth);
        grabWinWidth = setTimeout(resizedWin, 100);
    }

});

function resizedWin() {
    if ($('.mediacenter-landingpage').length) {
        masonryEffect();
    }
}

function masonryEffect() {
    if ($('.mediacenter-landingpage').length) {
        var maxAvailWidth = 0;
        var boxWidth = 600;
        if($(window).width() == 1280)
        {
            boxWidth =  550;
        }
        if($(window).width() == 1024 && $('body').hasClass('ipadPro'))
        {
            // $('body').css({background : '#f00'});
            boxWidth =  550;
        }
        var maxBoxWidth = boxWidth;
        var minBoxWidth = maxBoxWidth / 2;
        var width = 0;
        var height = 0;
        var dataRowNum = 1;
        var winWidth = 0;

        winWidth = $(window).width();
        $(".flexItemContent, .flexBoxWrapper, .flexBox").removeAttr("style");

        $(".flexItem:visible").each(function(i) {
            if (winWidth > 1024) {
                maxBoxWidth = parseInt($(this).find(".flexItemContent").width());
                maxAvailWidth = parseInt($(".flexBox").css("max-width"));
                $(".flexBox").css("max-width", maxAvailWidth + "px");
            } else if (winWidth <= 1024 && winWidth > 640) {
                maxAvailWidth = winWidth - 50;
                //maxAvailWidth = 600;
                maxBoxWidth = maxAvailWidth / 2;
                //console.log(maxBoxWidth);
                $(".flexBox").css("max-width", maxAvailWidth + "px");
            } else {
                maxAvailWidth = winWidth - 20;
                maxBoxWidth = winWidth - 20;
                $(".flexBox").css("max-width", maxAvailWidth + "px");
            }

            if (winWidth > 640) {
                // console.log(i + "|||||" + $(this).find(".flexItemContent").width() + "||||" + maxBoxWidth);
                if (winWidth > 768) {
                    if ($(this).find(".flexItemContent").width() == boxWidth) {
                        $(this).find(".flexItemContent").css("width", maxBoxWidth - 15 + "px");
                    } else {
                        $(this).find(".flexItemContent").css("width", maxBoxWidth + "px");
                    }
                } else {
                    //if($(this).find(".flexItemContent").width() == maxBoxWidth) {
                    $(this).find(".flexItemContent").css("width", maxBoxWidth - 15 + "px");
                    //}
                    // else {
                    //     $(this).find(".flexItemContent").css("width", maxBoxWidth + "px");
                    // }
                }



            } else {
                $(this).css("height", $(this).height() + "px");
                $(this).find(".flexItemContent").css("width", maxBoxWidth + "px");
            }

            if (width < maxAvailWidth) {
                if (i > 0) {
                    width += $(this).prevAll(".flexItem:visible").outerWidth(true);
                } else {
                    width = 0;
                    //width = width - 30;
                }
                //console.log(width + "||||" + $(this).width());
                //console.log( $(this).index() + "||||" + (width + $(this).width()) + "||||" + maxAvailWidth);
                if ((width + $(this).width()) > maxAvailWidth) {
                    width = 0;
                    //$(".flexItem[data-row="+dataRowNum+"]").eq(0).css("margin-left",0);
                    //width = width - 30;
                    if (winWidth > 640) {
                        height += $(this).outerHeight(true);
                    } else {
                        height += $(this).prev().outerHeight(true);
                    }
                    dataRowNum++;
                }
                //$(".flexItem[data-row="+dataRowNum+"]").eq(0).addClass("abcxyz");
                $(this).css({ "left": width + "px", "top": height + "px" });
                $(this).attr("data-row", dataRowNum);
            }
        }).promise().done(function() {
            if (winWidth > 640) {
                $(".flexBoxWrapper").css("height", height + $(".flexItem:visible").outerHeight(true) + "px");
            } else {
                $(".flexBoxWrapper").css("height", height + $(".flexItem:visible:last").outerHeight(true) + "px");
            }
        });
    }

}

function custom_sort(a, b) {
    // return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    // console.log(a.title.split("__")[1] +"  ***********  "+  b.title.split("__")[1])
    if (a.title.split("__")[1] !== 'undefined' || b.title.split("__")[1] !== 'undefined') {
        return a.title.split("__")[1] - b.title.split("__")[1];
    }

}

$(function() {
    if ($('.mediacenter-landingpage').length || $('.mediaCenterPost').length) {
        // $(document).on('click','.flexItem',function(){
        //     if($(window).width()<=1024)
        //     {
        //         console.log("ABC")
        //         var url =  $(this).find('.viewMore').attr('href');
        //         $(this).find('.viewMore').click();
        //         // window.location.assign(url)
        //         // return false;
        //     }
        // });

        var jsonUrl = "http://www.cgbackoffice.com/api/mediacenter";
        // var jsonUrl = "dist/json/media-center.json"; 
        $.ajax({
            url: jsonUrl,
            type: "GET",
            crossDomain: true,
            success: function(data) {
                var jsonData = data;
                // console.log(jsonData)
                // var jsonData = jsonData.sort(custom_sort);
                // console.log(jsonData)
                var dataLength = jsonData.length;
                var cont = "";
                // console.log(jsonData[0])
                // console.log(jsonData[0].article_type);
                for (i = 0; i < jsonData.length; i++) {
                    // var page_name = jsonData[i].page_name;
                    // var article_type = jsonData[i].article_type;
                    // var tag_name = jsonData[i].tag_name;
                    // var landingpageGallery = jsonData[i].landingpage_gallery;
                    // var detailpageGallery = jsonData[i].detailpage_gallery;
                    // var galleryMediaLength = landingpageGallery.length
                    // var sorting_date = jsonData[i].sorting_date;
                    // var heading = jsonData[i].heading;
                    // var content = jsonData[i].content;
                    // var venue_detail = jsonData[i].venue_detail;
                    // var venue_date = jsonData[i].venue_date;
                    // var status = jsonData[i].status;
                    // var status = jsonData[i].status;
                    // var viewmore_url = jsonData[i].viewmore_url;
                    // var viewsource_url = jsonData[i].viewsource_url;

                    var article_type = jsonData[i].articleType;
                    var category = jsonData[i].category;
                    var imagesArray = jsonData[i].imageList;
                    var galleryMediaLength = imagesArray.length
                    var publishedDate = jsonData[i].published_date;
                    var heading = jsonData[i].title;
                    var content = jsonData[i].content;
                    var venue_detail = jsonData[i].venue;
                    var venue_date = jsonData[i].venueDate;
                    var status = jsonData[i].status;
                    var viewmore_url = jsonData[i].viewmore_url;
                    var viewsource_url = jsonData[i].sourceUrl;

                    var date = new Date(venue_date)
                    var day = date.getMonth()
                    var year = date.getFullYear();
                    var datetyep1 = venue_date.split('-')[1];
                    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

                    // alert(date.getMonth())
                    if (galleryMediaLength == 0) {
                        cont += '<div data-index=' + i + ' class="flexItem noImage ' + article_type + ' ' + category.toLowerCase().replace(" ", "-") + '">'
                    } else {
                        cont += '<div data-index=' + i + ' class="flexItem ' + article_type + ' ' + category.toLowerCase().replace(" ", "-") + '">'
                    }
                    cont += '<a href="media-center-detail.html" class="viewMore mobileLink"></a>'
                    cont += '<div class="flexItemContent">'
                    cont += '<div class="imgWrapper">'
                    cont += '<span class="title">' + category + 's</span>'
                    if ($('#mediaCenterPage').length) {
                        cont += '<div class="imageCarousel owl-carousel ' + category.toLowerCase().replace(" ", "-") + '">'
                        for (j = 0; j < galleryMediaLength; j++) {
                            if (imagesArray[j].split(".").indexOf("mp4") != (-1)) {
                                cont += '<video height="100%" controls><source src="' + imagesArray[i] + '" type="video/mp4"><source src="' + imagesArray[i] + '" type="video/ogg">Your browser does not support HTML5 video.</video>'
                            } else {
                                cont += '<img loading="lazy" src="' + imagesArray[j] + '" alt="">'
                            }
                        }
                    } else {
                        cont += '<div class="imageCarousel ' + category.toLowerCase().replace(" ", "-") + '">'
                        if (imagesArray[0].split(".").indexOf("mp4") != (-1)) {
                            cont += '<video height="100%" controls><source src="' + imagesArray[i] + '" type="video/mp4"><source src="' + imagesArray[i] + '" type="video/ogg">Your browser does not support HTML5 video.</video>'
                        } else {
                            cont += '<img loading="lazy" src="' + imagesArray[0] + '" alt="">'
                        }
                    }



                    cont += '</div>'
                    cont += '</div>'
                    cont += '<div class="contentWrapper">'
                    cont += '<span class="date">' + months[day] + ' ' + year + '</span>'
                    cont += '<h2>' + heading + '</h2>'

                    if (content != "") {
                        cont += '<div class="postContent">' + content + '</div>'
                    }
                    cont += '<a href="media-center-detail.html" class="viewMore">View More</a>'
                    cont += '</div>'
                    cont += '</div>'
                    cont += '</div>'

                    setTimeout(function() {
                        $('.overlayWrapper').fadeOut();
                    }, 1000);

                }
                // console.log(cont);
                $('.flexBox').html(cont);
                setTimeout(function() {
                    if ($("body").attr("id") == "mediaCenterPage") {
                        masonryEffect();
                    }
                }, 100);

                $('.flexItem .viewMore').click(function() {
                    //var thisIndex = $(this).parents('.flexItem').index();
                    var thisIndex = $(this).parents('.flexItem').attr("data-index");
                    // console.log(jsonData[thisIndex])

                    localStorage.setItem("article_number", thisIndex);

                    if (typeof(Storage) !== "undefined") {
                        localStorage.setItem("json", JSON.stringify(jsonData));
                    } else {
                        // Sorry! No Web Storage support..
                    }
                });

                // Service page media center - START
                if ($('.mediaCenterPost').length) {
                    if (typeof(Storage) !== "undefined") {
                        localStorage.setItem("json", JSON.stringify(jsonData));
                    } else {
                        // Sorry! No Web Storage support..
                    }

                    var jsonData = JSON.parse(localStorage.json);

                    var relatedCont = ""
                    // alert(jsonData.length)
                    for (i = 0; i < 5; i++) {
                        var category = jsonData[i].category;
                        var imagesArray = jsonData[i].imageList;

                        var heading = jsonData[i].title;

                        var content = jsonData[i].content;
                        var venue_date = jsonData[i].venueDate;

                        var date = new Date(venue_date)
                        // console.log("Date " + venue_date)
                        var day = date.getMonth()
                        var year = date.getFullYear();

                        // var datetyep1 = publishedDate.split('-')[1];
                        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

                        relatedCont += '<div class="post" data-post="' + i + '">'
                        relatedCont += '<span class="title ' + category.toLowerCase().replace(" ", "-") + '">' + category + 's</span>'
                        if (galleryMediaLength != 0) {
                            relatedCont += '<div class="imgWrapper">'
                            relatedCont += '<img loading="lazy" src="' + jsonData[i].imageList[0] + '" alt="">'
                            relatedCont += '</div>'
                        }
                        relatedCont += '<div class="contentWrapper">'
                        relatedCont += '<span class="date">' + months[day] + ' ' + year + '</span>'
                        relatedCont += '<h2>' + heading.substr(0, 40) + '...</h2>'
                        relatedCont += '<div class="contSection"><p>' + content + '</p></div>'
                        relatedCont += '<a href="media-center-detail.html" class="viewMore">View More</a>'
                        relatedCont += '</div>'
                        relatedCont += '</div>'

                        $('.relatedPostCarousel').html(relatedCont);

                        setTimeout(function() {
                            var relatedPostCarousel = $('.relatedPostCarousel');
                            if (!$('.otherPostContainer').length) {
                                relatedPostCarousel.owlCarousel({
                                    items: 1,
                                    loop: true,
                                    nav: true,
                                    dots: false,
                                    margin: 10,
                                    responsive: {
                                        1920: {
                                            stagePadding: 0
                                        },
                                        1024: {
                                            stagePadding: 0
                                        },
                                        0: {
                                            stagePadding: 50
                                        }
                                    }
                                });
                            } else {
                                relatedPostCarousel.owlCarousel({
                                    items: 1,
                                    loop: true,
                                    nav: true,
                                    dots: false,
                                    margin: 10,
                                    responsive: {
                                        1920: {
                                            stagePadding: 0
                                        },
                                        1280: {
                                            items: 1
                                        },
                                        1024: {
                                            items: 2,
                                            stagePadding: 0,
                                            margin: 20,
                                        },
                                        768: {
                                            items: 2,
                                            stagePadding: 0
                                        },
                                        0: {
                                            stagePadding: 0
                                        }
                                    }
                                });
                            }

                        }, 100);

                    }

                    $('.relatedPostWrapper .viewMore').click(function() {
                        var thisIndex = $(this).parents('.post').attr('data-post');
                        // articleNumber = $(this).parents('.posts').attr('data-post')
                        // console.log(jsonData[thisIndex])

                        localStorage.setItem("article_number", thisIndex);

                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem("json", JSON.stringify(jsonData));
                        } else {
                            // Sorry! No Web Storage support..
                        }
                    });

                }
                // Service page media center - END

                if ($('#mediaCenterPage').length) {
                    var galleryCarousel = $('#mediaCenterPage .imageCarousel');
                    galleryCarousel.owlCarousel({
                        items: 1,
                        loop: true,
                        nav: false,
                        dots: false,
                        margin: 10,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        responsive: {
                            1920: {
                                stagePadding: 0
                            },
                            1024: {
                                stagePadding: 0
                            },
                            0: {
                                stagePadding: 0
                            }
                        }
                    });
                }

                if ($('#homePage').length) {

                    var flexitemCarousel = $("#homePage .flexBox");
                    flexitemCarousel.owlCarousel({
                        items: 3,
                        loop: true,
                        nav: true,
                        dots: false,
                        margin: 30,
                        autoplay: true,
                        autoWidth: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,

                        responsive: {
                            1920: {
                                stagePadding: 0,
                                items:3
                            },
                            1024: {
                                autoplay: false,
                                autoWidth: false,
                                stagePadding: 0,
                                items: 2
                            },
                            768: {
                                stagePadding: 0,
                                items: 2
                            },
                            639: {
                                stagePadding: 0,
                                items: 1
                            }
                        }
                    });

                    // var alignViewAll = $(window).width() - ($(".mediacenter-landingpage .flexBox").offset().left + $(".mediacenter-landingpage .flexBox").width());

                    // $(".viewAll").css({"right": alignViewAll + "px"});

                    // if(winWidth > 600) 
                    // {
                    //     $(".viewAll").css({"right": $(".mediacenter-landingpage .flexBox").offset().left + 25 + "px"});
                    // }
                    // else {
                    //     $(".viewAll").css({"right": $(".mediacenter-landingpage .flexBox").offset().left + 15 + "px"});
                    // }

                }

                var alignViewAll = $(window).width() - ($(".mediacenter-landingpage .flexBox").offset().left + $(".mediacenter-landingpage .flexBox").width());

                $(".viewAll").css({ "right": alignViewAll + "px", "top": $(".mediacenter-landingpage .flexBoxWrapper .owl-stage-outer").outerHeight(true) + 10 + "px" }).show();
            },
            error: function() {

            }
        });
    }



    if ($('.mediacenter-detailpage').length) {
        var jsonData = JSON.parse(localStorage.json);
        var articleNumber = localStorage.article_number
        console.log(jsonData)
        var article_type = jsonData.articleType;
        var category = jsonData[articleNumber].category;
        var imagesArray = jsonData[articleNumber].imageList;
        var galleryMediaLength = imagesArray.length
        var publishedDate = jsonData[articleNumber].published_date;
        var heading = jsonData[articleNumber].title;
        var headingTag = jsonData[articleNumber].headingTag;
        var content = jsonData[articleNumber].content;
        var venue_detail = jsonData[articleNumber].venue;
        var venue_date = jsonData[articleNumber].venueDate;
        var venue_timing = jsonData[articleNumber].venueTime;
        var status = jsonData[articleNumber].status;
        var viewmore_url = jsonData[articleNumber].viewmore_url;
        var viewsource_url = jsonData[articleNumber].sourceUrl;

        console.log()

        var date = new Date(venue_date)
        var day = date.getDay() - 1
        var year = date.getFullYear();
        // var datetyep1 = publishedDate.split('-')[1];
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        var themeClass = category.toLowerCase().replace(" ", "-");
        $('body').addClass(themeClass);

        // For left section - START
        $('.headingWrapper .title').addClass(themeClass)
        $('.headingWrapper .title').text(category + 's');
        $('.headingWrapper h1').text(heading);
        $('.headingWrapper h3').text(headingTag);

        if (venue_detail == "") {
            $('.venueDetailWrapper').hide();
        }

        if (venue_timing == "") {
            $('.timing').hide();
        }

        if (galleryMediaLength == 1) {
            $('.galleryControls').hide();
        }
        $('.imgContainer').html("");

        for (i = 0; i < galleryMediaLength; i++) {

            if (imagesArray[i].split(".").indexOf("mp4") != (-1)) {

                $('.imgContainer').append('<video height="100%" controls><source src="' + imagesArray[i] + '" type="video/mp4"><source src="' + imagesArray[i] + '" type="video/ogg">Your browser does not support HTML5 video.</video>')

            } else {
                $('.imgContainer').append('<img loading="lazy" src="' + imagesArray[i] + '" alt="wbaf" />');
            }

        }

        $('.galleryContentWrapper .contentContainer').html(content);



        // $('.dateValue').text(new Date(venue_date).toUTCString().substr(0, 16));
        // // var newDate = new Date(Date.parse(venue_date))
        // // $('.dateValue').text(newDate.toString().substr(0, 15));
        // $('.statusValue').text(status);
        // $('.timingValue').text(venue_timing);
        if (category != "Press Release") {
            $('.dateValue').text(new Date(venue_date).toUTCString().substr(0, 16));
            // var newDate = new Date(Date.parse(venue_date))
            // $('.dateValue').text(newDate.toString().substr(0, 15));
            $('.statusValue').text(status);
            $('.timingValue').text(venue_timing);
            $('.venueDetail').text(venue_detail);
            if (venue_date == "" || venue_date == "undefined") {
                $('.dateStatusWrapper .date').hide();
            }
            if (status == "" || status == "undefined") {
                $('.dateStatusWrapper status').hide();
            }
            if (venue_timing == "" || venue_timing == "undefined") {
                $('.dateStatusWrapper .timing').hide();
            }
            if (venue_detail == "" || venue_detail == "undefined") {
                $('.venueDetailWrapper').hide();
            }
        } else {
            $('.dateStatusWrapper').hide();
            $('.venueDetailWrapper').hide();
        }

        // alert(viewsource_url)
        if (viewsource_url != "") {
            $('.viewSourceBtn').attr('href', viewsource_url);
        }


        var owl = $('.imgContainer');
        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false
        });


        $('.closeBtn').click(function() {
            $('.overlay').hide();
            $('.galleryContainer').removeClass('fullsizeGallery');
            owlres();
            $('body').removeClass('noScroll');
        });

        // For left section - END

        // For Related Post - START
        var relatedCont = ""
        // alert(jsonData.length)
        for (i = 0; i < 5; i++) {
            var category = jsonData[i].category;
            var imagesArray = jsonData[i].imageList;
            var publishedDate = jsonData[i].published_date;
            var heading = jsonData[i].title;
            var headingTag = jsonData[i].headingTag;
            var content = jsonData[i].content;
            var venue_date = jsonData[i].venueDate;

            var date = new Date(venue_date)
            console.log("Date " + venue_date)
            var day = date.getMonth()
            var year = date.getFullYear();

            // var datetyep1 = publishedDate.split('-')[1];
            var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

            relatedCont += '<div class="post" data-post="' + i + '">'
            relatedCont += '<span class="title ' + category.toLowerCase().replace(" ", "-") + '">' + category + 's</span>'
            if (galleryMediaLength != 0) {
                relatedCont += '<div class="imgWrapper">'
                relatedCont += '<img loading="lazy" src="' + jsonData[i].imageList[0] + '" alt="">'
                relatedCont += '</div>'
            }
            relatedCont += '<div class="contentWrapper">'
            relatedCont += '<span class="date">' + months[day] + ' ' + year + '</span>'
            relatedCont += '<h2>' + heading.substr(0, 40) + '...</h2>'
            relatedCont += '<div class="contSection"><p>' + content + '</p></div>'
            relatedCont += '<a href="media-center-detail.html" class="viewMore">View More</a>'
            relatedCont += '</div>'
            relatedCont += '</div>'

            $('.relatedPostCarousel').html(relatedCont);

            setTimeout(function() {
                var relatedPostCarousel = $('.relatedPostCarousel');

                if (!$('.otherPostContainer').length) {

                    relatedPostCarousel.owlCarousel({
                        items: 1,
                        loop: true,
                        nav: true,
                        dots: false,
                        margin: 10,
                        responsive: {
                            1920: {
                                stagePadding: 0
                            },
                            1280: {
                                items: 1,
                                stagePadding: 0
                            },
                            1024: {
                                items: 2,
                                stagePadding: 0,
                                margin: 20,
                            },
                            768: {
                                items: 2,
                                stagePadding: 0
                            },
                            0: {
                                stagePadding: 0
                            }
                        }
                    });
                } else {
                    relatedPostCarousel.owlCarousel({
                        items: 1,
                        loop: true,
                        nav: true,
                        dots: false,
                        margin: 10,
                        responsive: {
                            1920: {
                                stagePadding: 0
                            },
                            1024: {
                                stagePadding: 0
                            },
                            768: {
                                items: 2,
                                stagePadding: 10
                            },
                            0: {
                                stagePadding: 10
                            }
                        }
                    });
                }

            }, 100);

        }

        $('.relatedPostWrapper .viewMore').click(function() {
            var thisIndex = $(this).parents('.post').attr('data-post');
            // articleNumber = $(this).parents('.posts').attr('data-post')
            // console.log(jsonData[thisIndex])

            localStorage.setItem("article_number", thisIndex);

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("json", JSON.stringify(jsonData));
            } else {
                // Sorry! No Web Storage support..
            }
        });
        // For Related Post - END

        $('.overlayWrapper').fadeOut();
    }

});

function owlres() {
    var $carousel = $('.imgContainer');
    $carousel.data('owl.carousel')._invalidated.width = true;
    $carousel.trigger('refresh.owl.carousel');
}