$(document).ready(function () {

    var owlHomeBanner = $('#homeBanner .owl-carousel');
    owlHomeBanner.owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        // dotsData: true,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: true,
        autoplay: false,
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
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
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
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 500,
        slideTransition: 'linear',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                margin: 10,
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
        fixedContentPos: false
    });

    $(window).scroll(function() {
    var hT = $('#Mission').offset().top,
        hH = $('#Mission').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        //console.log(wS);

        if (wS > wH){
            // alert('you have scrolled top!');
            console.log('you have scrolled down!');
            $('header').addClass('active');
            $('header .logo').addClass('active');
            $('header .menu-wrap').addClass('active');
            $('header .hamburger').addClass('active');
        } else if (wS == 0){
            console.log('you have scrolled top!');
            $('header').removeClass('active');
            $('header .logo').removeClass('active');
            $('header .menu-wrap').removeClass('active');
            $('header .hamburger').removeClass('active');
        }

    });


    $('.hamburger').on("click tap", function () {
        $(this).toggleClass('open');
        $('header .menu-wrap.active').toggleClass('open');
        $('body').toggleClass('bodyOverflowHidden');
        //alert('hi');
    
    });
      
      

});





var jsonData = [
    {
        'id': 'Path-2',
        'firstBlockFigure': '6.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '13',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '24,086',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-4',
        'firstBlockFigure': '8.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '26',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '30,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-5',
        'firstBlockFigure': '78.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '6',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '5,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-6',
        'firstBlockFigure': '68.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '35,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-12',
        'firstBlockFigure': '48.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '6',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '15,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-15',
        'firstBlockFigure': '58.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '25,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-16',
        'firstBlockFigure': '18.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '126',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '10,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Path-17',
        'firstBlockFigure': '38.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '16',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '5,000',
        'thirdBlockText': 'Villages strengthened',
    },
    {
        'id': 'Stroke-26',
        'firstBlockFigure': '28.97',
        'firstBlockText': 'Million acres restored',
        'secondBlockFigure': '126',
        'secondBlockText': 'Million lives impacted',
        'thirdBlockFigure': '50,000',
        'thirdBlockText': 'Villages strengthened',
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
        //console.log(e.target.id);
        if(svgHotSpotId != e.target.id) {
            svgHotSpotId = e.target.id;
        }
        else {
            return false;
        }
        //console.log(svgHotSpotId);
        //console.log(e.target.id);
        //console.log(e.clientX);
        var hotspotClickData = "";
        hotspotClickData = jsonData.filter(function(i) {
            return i.id == e.target.id;
        });

        if(hotspotClickData == "") {
            document.querySelectorAll(".mapData")[0].style.opacity = 0;
            return false;
        }

        for(var i=1; i<=document.querySelectorAll(".mapData")[0].children.length; i++) {
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
                default:
                val = "unknown"
            }
            var jsonVal = "hotspotClickData[0]." + val + "Figure";
            var jsonText = "hotspotClickData[0]." + val + "Text";
            
            document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML = eval(jsonVal);
            document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[1].innerHTML = eval(jsonText);
        }

        document.querySelectorAll(".mapData")[0].style.opacity = 1;
        document.querySelectorAll(".mapData")[0].style.top = e.clientY - document.querySelectorAll(".mapData")[0].clientHeight - 15 + "px";
        document.querySelectorAll(".mapData")[0].style.left = e.clientX - 24 + "px";
    });
}