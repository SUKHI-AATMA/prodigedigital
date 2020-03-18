$(document).ready(function () {
    var owlHomeBanner = $('#homeBanner .owl-carousel');
    owlHomeBanner.owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        dotsData: false,
        smartSpeed: 600,
        autoPlaySpeed: 600,
        // autoPlayTimeout: 5000,
        slideTransition: 'linear',
        mouseDrag: true,
        // autoplay: true,
        autoplay: 6000,
        items: 1,
        video: true,
        onInitialized:theThing, 
    });

     function theThing(event){
    //    alert("video video")
       $(".active .owl-video-play-icon").trigger("click")
     };


    

    var owlPartners = $('#partners .owl-carousel');
    owlPartners.owlCarousel({
        margin: 30,
        loop:true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 80
            },
            361: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 100
            },
            375: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 70
            },
            481: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 90
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
    });

    var owlFunders = $('#funders .owl-carousel');
    owlFunders.owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 80
            },
            361: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 100
            },
            375: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 80
            },
            481: {
                center: true,
                items: 1,
                margin: 0,
                nav: false,
                stagePadding: 90
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
    });

    var owlNews = $('#news .owl-carousel');
    owlNews.owlCarousel({
        autoWidth:true,
        // margin: 60,
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                singleItem:true,
                nav: false
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            }
        },
    });
    

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 700
    });

    $(window).scroll(function() {
        var hT = $('header').offset().top,
        hH = $('header').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        // console.log(hH);

        if ($(window).width() > 1025){
            if (hT > 100){
                // alert('you have scrolled top!');
                //console.log('you have scrolled down!');
                $('header .logo').addClass('active');
                $('header .menu-wrap').addClass('active');
                $('header .hamburger').addClass('active');
            } else if (hT == 0){
                //console.log('you have scrolled top!');
                $('header .logo').removeClass('active');
                $('header .menu-wrap').removeClass('active');
                $('header .hamburger').removeClass('active');
            }
        }

    });



    $('.hamburger').on("click tap", function () {
        $(this).toggleClass('open');
        $('header .menu-wrap').toggleClass('open');
        $('body').toggleClass('bodyOverflowHidden');
        //alert('hi');
    });


    $('section.sec-testimonials .btn-wrap').click(function() {
        $('section.sec-testimonials .other-item').slideToggle('slow');
    });



});

  
// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);



// Number Counter
var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    // console.log(oTop);

    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                    duration: 7000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

    });



var jsonData = [
    {
        //'id': 'Path-2',
        'id': 'Group-19',
        'firstBlockFigure': '6.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '13',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '24,086',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Rajasthan',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        'id': 'Group-20',
        //'id': 'Path-4',
        'firstBlockFigure': '8.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '26',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '30,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Gujarat',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Path-5',
        'id': 'Group-22',
        'firstBlockFigure': '78.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '6',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '5,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Madhya Pradesh',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Path-6',
        'id': 'Group-21',
        'firstBlockFigure': '68.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '35,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Maharashtra',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Path-12',
        'id': 'Group-35',
        'firstBlockFigure': '48.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '6',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '15,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Andra Pradesh',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Path-15',
        'id': 'Group-31',
        'firstBlockFigure': '58.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '25,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Odisha',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Path-16',
        'id': 'Group-32',
        'firstBlockFigure': '18.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '126',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '10,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Jharkhand',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        'id': 'Group-36',
        'firstBlockFigure': '38.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '5,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to Chattisgarh',
        'fourthBlockText': 'https://www.google.com/',
    },
    {
        //'id': 'Stroke-26',
        'id': 'Group-40',
        'firstBlockFigure': '28.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '126',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '50,000',
        'thirdBlockText': 'Villages strengthened',
        'fourthBlockFigure': 'Go to MP',
        'fourthBlockText': 'https://www.google.com/',
    }
]

window.onload = function() {
    var svgHotSpotId = "";
    document.addEventListener("click", function(e){
        var getParentNode = e.target.nodeName;
        if(getParentNode.indexOf("polygon") == -1) {
            document.querySelectorAll(".mapData")[0].style.opacity = 0;
        }
    });

    document.querySelectorAll(".map-wrapper")[0].getElementsByTagName("svg")[0].addEventListener("click", function(e) {
        console.log(e.target.id + "|||" + e.target.parentNode.id);
        var targetId = e.target.parentNode.id;
        if(svgHotSpotId != targetId) 
        {
            svgHotSpotId = targetId;
        }
        else {
            return false;
        }
        // console.log(svgHotSpotId);
        //console.log(targetId);
        //console.log(e.clientX);
        var hotspotClickData = "";
        hotspotClickData = jsonData.filter(function(i) {
            return i.id == targetId;
        });

        if(hotspotClickData == "") {
            document.querySelectorAll(".mapData")[0].style.opacity = 0;
            return false;
        }

        for(var i=1; i<=document.querySelectorAll(".mapData")[0].querySelectorAll(".flex-box")[0].children.length; i++) {
            switch(i) {
                case 1:
                val = "firstBlock"
                break;
                case 2:
                val = "secondBlock"
                break;
                case 3:
                val = "thirdBlock"
                break;
                case 4:
                val = "fourthBlock"
                break;
                default:
                val = "unknown"
            }
            var jsonVal = "hotspotClickData[0]." + val + "Figure";
            var jsonText = "hotspotClickData[0]." + val + "Text";
            
            if(val != 'fourthBlock') {
                document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML = eval(jsonVal);
                document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[1].innerHTML = eval(jsonText);
            }
            else {
                document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML = eval(jsonVal);
                document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("a")[0].setAttribute('href', eval(jsonText));
            }
            
        }

        // console.log(e);

        document.querySelectorAll(".mapData")[0].style.opacity = 1;
        document.querySelectorAll(".mapData")[0].style.top = e.offsetY - document.querySelectorAll(".mapData")[0].clientHeight - 15 + "px";
        document.querySelectorAll(".mapData")[0].style.left = e.offsetX - 24 + "px";
    });
}

