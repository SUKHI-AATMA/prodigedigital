var secOnePlaneInit,
    winWidth = $(window).width(),
    fold2IllustrationInit,
    secThreeDotMeshInit,
    scrollDownAnim,
    circleMeshAnim,
    circleMoveAnim,
    circleMeshAnimData,
    urlReferrer = document.referrer,
    hostname = window.location.hostname,
    fold2Illustration,
    secThreeDotMesh,
    secOnePlane,
    circleMoveAnimData,
    scrollDownAnimData,
    secFourWHyJoinInit,
    secFourElementAnimInit,
    secFiveGetStartedInit,
    secFiveElementAnimInit,
    introInit,
    vid = document.getElementById("teaserD"),
    repeat = 0,
    string,
    array = [],
    loopTimer,
    hmletteranimF, hmletteranimB, hmletteranimI, hmletteranimJ, hmletteranimS,
    mobile = winWidth <= 1024 ? 1 : 0,
    isInnerpage = $('body').hasClass('innerPage'),
    docScrollTop,
    docScrollTopMem,
    docServicesBtmSecScrollTop,
    navIconHolder = $('.navIconHolder'),
    CGlogo = $('.logo'),
    siteSubnavLi = $('.siteSubnav').find('li'),
    sectionTitle = $('#sectionTitle'),
    hmvideoholder = $('.videoScreenHolder'),
    hmvideoholderWid = hmvideoholder.outerWidth(),
    hmvideo = $('.video'),
    cylinderHolder = $('#cyclinderHolder'),
    cyclinderCircle = $('.cyclinderCircle'),
    squareMove = $('#squareMove'),
    dragSliderHolder = $('.dragSliderHolder'),
    logo = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 183.3 68" style="enable-background:new 0 0 183.3 68;" xml:space="preserve"><g><g><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M30.6,54.5c0-6.5,5.1-11.3,11.4-11.3c4.1,0,7,1.6,8.9,4.4l-2.6,1.9c-1.4-2-3.2-3.2-6.4-3.2c-4.5,0-7.7,3.5-7.7,8.1c0,4.7,3.2,8.2,7.8,8.2c3.8,0,5.8-1.8,6.6-3.9h-6.2v-3.1h10.2C52.4,62,48.4,65.7,42,65.7C35.7,65.7,30.6,61,30.6,54.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M56.3,43.5h3.5v18.9h9.7v3.1H56.3V43.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M70.7,54.5c0-6.5,5-11.3,11.3-11.3S93.4,48,93.4,54.5s-5,11.3-11.3,11.3S70.7,61,70.7,54.5z M89.8,54.5c0-4.7-3.2-8.1-7.8-8.1c-4.6,0-7.8,3.5-7.8,8.1c0,4.7,3.2,8.1,7.8,8.1C86.6,62.6,89.8,59.1,89.8,54.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M97.1,43.5h7.8c4.4,0,6.4,2.5,6.4,5.6c0,1.9-1,3.4-2.6,4.2c2.6,0.7,4.2,2.7,4.2,5.6c0,3.7-2.4,6.6-7.4,6.6h-8.4V43.5z M104.7,52.1c2.4,0,3.2-1.1,3.2-2.9c0-1.7-0.8-2.7-3.2-2.7h-4.2v5.7H104.7z M105.3,62.5c3,0,4.1-1.5,4.1-3.8c0-2.3-1.2-3.8-4.2-3.8h-4.6v7.6H105.3z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M117.6,65.5h-3.5l9.6-22.4h0.2l9.7,22.4h-3.6l-1.3-3.1c0,0-9.8,0-9.8,0L117.6,65.5z M123.8,50.6l-3.6,8.7h7.2C127.4,59.3,123.8,50.6,123.8,50.6z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M136.6,43.5h3.5v18.9h9.7v3.1h-13.1V43.5z" /></g><g><polygon class="st1" fill="#572459" data-fill="#572459" points="87.9,15.9 92.2,15.9 92.2,9.3 100.4,9.3 100.4,5.5 79.7,5.5 79.7,9.3 87.9,9.3         " /><rect x="71.7" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4" height="10.4" /><polygon class="st1" fill="#572459" data-fill="#572459" points="54.1,5.1 53.8,5.1 53.8,15.9 65.1,15.9       " /><rect x="104.2" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#572459" data-fill="#572459" d="M135.3,9.3h2.5c5.2,0,7.4,2.5,7.4,6.6h4.5c-0.1-6.3-4.2-10.4-11.7-10.4h-7v10.4h4.3V9.3z" /><polygon class="st1" fill="#572459" data-fill="#572459" points="34.9,9.3 48.1,9.3 48.1,5.5 30.6,5.5 30.6,15.9 34.9,15.9         " /><rect x="120.9" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#572459" data-fill="#572459" d="M167.5,4.9c-6.7,0-12.3,4.7-13.8,11h4.6c1.3-3.8,4.9-6.5,9.2-6.5c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7c-4.2,0-7.8-2.7-9.2-6.5h-4.6c1.5,6.3,7.1,11,13.8,11c7.8,0,14.2-6.4,14.2-14.2C181.7,11.3,175.3,4.9,167.5,4.9z" /><rect x="87.9" y="22.3" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.7" /><path class="st1" fill="#572459" data-fill="#572459" d="M120.9,23c0,4.4-2.2,6.4-6.2,6.4c-4,0-6.2-2-6.2-6.4v-0.7h-4.3v0.9c0,6.7,4.5,10.1,10.5,10.1c5.9,0,10.5-3.4,10.5-10.1v-0.9h-4.3V23z" /><path class="st1" fill="#572459" data-fill="#572459" d="M147.8,22.3H131V33h4.3v-6.6h2.7c0.7,0,1.4,0,2-0.1l4.7,6.7h5.1l-5.6-7.8C145.8,24.5,147,23.5,147.8,22.3z" /><rect x="53.8" y="22.3" class="st1" fill="#572459" data-fill="#572459" width="4" height="10.7" /><polygon class="st1" fill="#572459" data-fill="#572459" points="34.9,24.5 34.9,22.3 30.6,22.3 30.6,33 48.7,33 48.7,29.2 34.9,29.2       " /><polygon class="st1" fill="#572459" data-fill="#572459" points="71.7,22.4 71.7,22.3 64.2,22.3 75.5,33.4 75.8,33.4 75.8,22.3 71.7,22.3       " /><path class="st1" fill="#572459" data-fill="#572459" d="M15.9,28.8c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c2.8,0,5.4,1.2,7.2,3.2c0.5-1.5,1.2-2.9,2.1-4.2c-2.5-2.1-5.7-3.4-9.2-3.4C8,4.9,1.7,11.3,1.7,19.1C1.7,27,8,33.3,15.9,33.3c3.5,0,6.8-1.3,9.2-3.4c-0.9-1.3-1.6-2.7-2.1-4.2C21.2,27.6,18.7,28.8,15.9,28.8z" /></g><g><polygon class="st0" fill="#CA6B86" data-fill="#CA6B86" points="85.5,20 15.9,20 15.9,18.2 85.5,18.2 94.6,18.2 167.5,18.2 167.5,20 94.6,20       " /></g><circle class="st0" fill="#CA6B86" data-fill="#CA6B86" cx="15.9" cy="19.1" r="4.5" /><circle class="st0" fill="#CA6B86" data-fill="#CA6B86" cx="167.5" cy="19.1" r="4.5" /></g></svg>',
    whiteLogo = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 183.3 68" style="enable-background:new 0 0 183.3 68;" xml:space="preserve"><g><g><path class="st0" fill="#fff" data-fill="#CA6B86" d="M30.6,54.5c0-6.5,5.1-11.3,11.4-11.3c4.1,0,7,1.6,8.9,4.4l-2.6,1.9c-1.4-2-3.2-3.2-6.4-3.2c-4.5,0-7.7,3.5-7.7,8.1c0,4.7,3.2,8.2,7.8,8.2c3.8,0,5.8-1.8,6.6-3.9h-6.2v-3.1h10.2C52.4,62,48.4,65.7,42,65.7C35.7,65.7,30.6,61,30.6,54.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M56.3,43.5h3.5v18.9h9.7v3.1H56.3V43.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M70.7,54.5c0-6.5,5-11.3,11.3-11.3S93.4,48,93.4,54.5s-5,11.3-11.3,11.3S70.7,61,70.7,54.5z M89.8,54.5c0-4.7-3.2-8.1-7.8-8.1c-4.6,0-7.8,3.5-7.8,8.1c0,4.7,3.2,8.1,7.8,8.1C86.6,62.6,89.8,59.1,89.8,54.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M97.1,43.5h7.8c4.4,0,6.4,2.5,6.4,5.6c0,1.9-1,3.4-2.6,4.2c2.6,0.7,4.2,2.7,4.2,5.6c0,3.7-2.4,6.6-7.4,6.6h-8.4V43.5z M104.7,52.1c2.4,0,3.2-1.1,3.2-2.9c0-1.7-0.8-2.7-3.2-2.7h-4.2v5.7H104.7z M105.3,62.5c3,0,4.1-1.5,4.1-3.8c0-2.3-1.2-3.8-4.2-3.8h-4.6v7.6H105.3z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M117.6,65.5h-3.5l9.6-22.4h0.2l9.7,22.4h-3.6l-1.3-3.1c0,0-9.8,0-9.8,0L117.6,65.5z M123.8,50.6l-3.6,8.7h7.2C127.4,59.3,123.8,50.6,123.8,50.6z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M136.6,43.5h3.5v18.9h9.7v3.1h-13.1V43.5z" /></g><g><polygon class="st1" fill="#fff" data-fill="#572459" points="87.9,15.9 92.2,15.9 92.2,9.3 100.4,9.3 100.4,5.5 79.7,5.5 79.7,9.3 87.9,9.3         " /><rect x="71.7" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4" height="10.4" /><polygon class="st1" fill="#fff" data-fill="#572459" points="54.1,5.1 53.8,5.1 53.8,15.9 65.1,15.9       " /><rect x="104.2" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#fff" data-fill="#572459" d="M135.3,9.3h2.5c5.2,0,7.4,2.5,7.4,6.6h4.5c-0.1-6.3-4.2-10.4-11.7-10.4h-7v10.4h4.3V9.3z" /><polygon class="st1" fill="#fff" data-fill="#572459" points="34.9,9.3 48.1,9.3 48.1,5.5 30.6,5.5 30.6,15.9 34.9,15.9         " /><rect x="120.9" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#fff" data-fill="#572459" d="M167.5,4.9c-6.7,0-12.3,4.7-13.8,11h4.6c1.3-3.8,4.9-6.5,9.2-6.5c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7c-4.2,0-7.8-2.7-9.2-6.5h-4.6c1.5,6.3,7.1,11,13.8,11c7.8,0,14.2-6.4,14.2-14.2C181.7,11.3,175.3,4.9,167.5,4.9z" /><rect x="87.9" y="22.3" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.7" /><path class="st1" fill="#fff" data-fill="#572459" d="M120.9,23c0,4.4-2.2,6.4-6.2,6.4c-4,0-6.2-2-6.2-6.4v-0.7h-4.3v0.9c0,6.7,4.5,10.1,10.5,10.1c5.9,0,10.5-3.4,10.5-10.1v-0.9h-4.3V23z" /><path class="st1" fill="#fff" data-fill="#572459" d="M147.8,22.3H131V33h4.3v-6.6h2.7c0.7,0,1.4,0,2-0.1l4.7,6.7h5.1l-5.6-7.8C145.8,24.5,147,23.5,147.8,22.3z" /><rect x="53.8" y="22.3" class="st1" fill="#fff" data-fill="#572459" width="4" height="10.7" /><polygon class="st1" fill="#fff" data-fill="#572459" points="34.9,24.5 34.9,22.3 30.6,22.3 30.6,33 48.7,33 48.7,29.2 34.9,29.2       " /><polygon class="st1" fill="#fff" data-fill="#572459" points="71.7,22.4 71.7,22.3 64.2,22.3 75.5,33.4 75.8,33.4 75.8,22.3 71.7,22.3       " /><path class="st1" fill="#fff" data-fill="#572459" d="M15.9,28.8c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c2.8,0,5.4,1.2,7.2,3.2c0.5-1.5,1.2-2.9,2.1-4.2c-2.5-2.1-5.7-3.4-9.2-3.4C8,4.9,1.7,11.3,1.7,19.1C1.7,27,8,33.3,15.9,33.3c3.5,0,6.8-1.3,9.2-3.4c-0.9-1.3-1.6-2.7-2.1-4.2C21.2,27.6,18.7,28.8,15.9,28.8z" /></g><g><polygon class="st0" fill="#fff" data-fill="#CA6B86" points="85.5,20 15.9,20 15.9,18.2 85.5,18.2 94.6,18.2 167.5,18.2 167.5,20 94.6,20       " /></g><circle class="st0" fill="#fff" data-fill="#CA6B86" cx="15.9" cy="19.1" r="4.5" /><circle class="st0" fill="#fff" data-fill="#CA6B86" cx="167.5" cy="19.1" r="4.5" /></g></svg>',
    joinBg2, joinBG2Init, aboutnetworkData, nAboutAnimData, nAboutAnim, whyJoinJAnimData, whyJoinBAnimData, whyJoinFAnimData, whyJoinJAnim,whyJoinBAnim, whyJoinFAnim, aboutnetwork, membershipBg2Anime, membershipBg2Data,
    path_name = location.pathname.split("/").slice(-1),
    page_name = path_name[0];

$('.sectionTitle').css({left: $('.navIconHolder').position().left});


// $('path[id^=zoomin]').each(function(){
//     $(this).css({transform: 'scale(0,0)', transition: transform '0.5s', transform-origin: '4vw 4vh'})
// })

function pxtovw(px, negativeValue) {
    var resolution = 1920;
    if (winWidth == 1440) {
        resolution = 1440;
    }
    if (winWidth == 1366) {
        resolution = 1366;
    }
    var newWidth = px / resolution * 100;
    return negativeValue ? ('-' + newWidth + 'vw') : (newWidth + 'vw');
}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


$(document).on('mouseenter', '.initBox .icon', function() {
    if (!mobile) {
        $(this).find('.svgFill').each(function() {
            svgFillColor = $(this).attr('data-fill');
            TweenMax.to($(this), 0.4, { fill: svgFillColor, ease: Power1.easeInOut });
        });
    }
}).on('mouseenter', '#social a', function() {
    var circleFill = $(this).find('circle');
    var letter = $(this).find('path');
    if (isInnerpage) {
        if ($('#social').hasClass('onWhite')) {
            TweenMax.to(circleFill, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
        } else {
            TweenMax.to(circleFill, 0.4, { fill: '#fff', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: $('body').attr('data-fill-color'), ease: Power1.easeInOut });
        }

    } else {
        TweenMax.to(circleFill, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
        TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
    }
}).on('mouseleave', '#social a', function() {
    var circleFill = $(this).find('circle');
    var letter = $(this).find('path');
    if (isInnerpage) {
        if ($('#social').hasClass('onWhite')) {
            // console.log(1155);
            TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
        } else {
            // console.log(1158);
            TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
        }

    } else {
        // console.log(156);
        TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
        TweenMax.to(letter, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
    }
}).on('mouseleave', '.initBox .icon', function() {
    if (!mobile) {
        $(this).find('.svgFill').each(function() {
            TweenMax.to($(this), 0.4, { fill: 'none', ease: Power1.easeInOut });
        });
    }
}).on('click', '#back2Top', function(e) {
    $(this).hide().siblings('.scrollDown').fadeIn(300)
    if ($('#fullpage').length < 0) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    } else {
        fullpage_api.moveTo(1);
    }


}).ready(function() {
    var leftPos = $('.navIconHolder').position().left + ( ( $('.navIconHolder').outerWidth() - $('.pageTitle').outerHeight()) / 2);
    $('.pageTitle').css({left: leftPos});

    TweenMax.set('#sectionTitle1', { height: $('#sectionTitle1 h2').outerHeight(true) });
    if (mobile) {
        $('.playButton').on('click', function() {
            var videoP = document.getElementById("teaser");
            $('.video').removeClass('playButton');
            videoP.play();
            $(document).on('click', '.video .close', function(e) {
                e.stopPropagation();
                videoP.pause();
                console.log(123456);
                $('.video').hide().addClass('playButton');
                // $('.video video').css({ opacity: 0.1, width: 'auto', height: '100%' }).removeAttr('controls')
                // $('header,#sectionTitle,#social,.scrollDownHolder').fadeIn();
                // $('.video .close').fadeOut();
                // vid.pause();
                // vid.currentTime = 0;
                // rangeslide.val(30).change();
                // $('#plane').css({ zIndex: 2 });
            })
        });

        $('.play-video-button').on('click', function() {
            $('.video').show();
        });
    }
    if(mobile)
    {


        // Configure/customize these variables.
        var showChar = 250;  // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "More";
        var lesstext = "Less";
        

        $('.singleParaReadMore').each(function() {
            var content = $(this).text();
            if(content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
            }
     
        });
     
        $(".morelink").click(function(){
            // if($(this).hasClass("less")) {
            //     $(this).removeClass("less");
            //     $(this).html(moretext);
            // } else {
                // $(this).addClass("less");
                // $(this).html(lesstext);
            // }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            $(this).hide()
            return false;
        });



        var minimized_elements = $('.multiParaReadMore');
        var counter = 1;
        minimized_elements.each(function(){    
         if(counter==1){
             $(this).addClass("first");
            var t = $(this).text();        
                if(t.length < showChar) return;
                
                $(this).html(
                    t.slice(0,showChar)+'<span>... </span><a href="#" class="more">More</a>'+
                    '<span style="display:none;">'+ t.slice(showChar,t.length)+' </span>'
                );
         } else{
             $(this).hide();
         }
            counter++;
        }); 
        
        $('a.more', minimized_elements).click(function(event){
            event.preventDefault();
            $(this).hide().prev().hide();
            $(this).next().show();
            $('p').show();        
        });
        
        $('a.less', minimized_elements).click(function(event){
            event.preventDefault();
            $(this).parent().hide().prev().show().prev().show();  
            $('p').not('.first').hide();
        });
    }
    // Mobile Menu Starts
    $('.navIconHolder').on('click', function() {
        var headHeigth = $('header').outerHeight();
        $('.navigation').css({ 'max-height': 'calc(100vh - ' + headHeigth + 'px)', 'margin-top': headHeigth });
    });;
    // Mobile Menu Ends
    if ($('body').hasClass('whiteHeader')) {
        $('.logo').find('a').html(whiteLogo)
    } else {
        $('.logo').find('a').html(logo)
    }

    // if ($('body').attr('id') == 'services') {
    //     $('.content .row .introText').each(function() {
    //         if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //             // introTextSet($(this));
    //             var currRow = $(this).parents('.row');
    //             // svgLetterAnimate(".sec1");
    //             var id = $(this).siblings('.svgLetterBox').attr('id');
    //             if ($('#' + id).find('svg').length == 0) {
    //                 var letteranimser = bodymovin.loadAnimation({
    //                     container: document.getElementById(id),
    //                     renderer: "svg",
    //                     loop: false,
    //                     autoplay: false,
    //                     path: "dist/json/letters/" + id + ".json"
    //                 });
    //                 letteranimser.addEventListener('DOMLoaded', function() {
    //                     letteranimser.playSegments([[0, 60]], true);
    //                     document.getElementById(id).addEventListener('mouseenter', function() {
    //                         console.log(letteranimser.getDuration(true))
    //                         letteranimser.playSegments([[61, 85]], true);
    //                     });
    //                     document.getElementById(id).addEventListener('mouseleave', function() {
    //                         letteranimser.playSegments([[86, 120]], true);
    //                     });
    //                 });
    //             }


    //             introtextAnimate(currRow);
    //             if (!mobile) {
    //                 serviceIconAnimate(currRow, currRow.index());
    //             }

    //             for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //                 TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //             }

    //             $(this).parents('.row').addClass('complete');
    //         }
    //     });
    // }
    if ($('body').attr('id') == 'whyJoin') {
        //banner Anim

        joinBG2Init = bodymovin.loadAnimation(joinBG2);
        joinBG2Init.addEventListener('DOMLoaded', function() {
            removeLoader()
            joinBG2Init.play();
            setTimeout(function() {
                headerAnim()
                $('#social').css({ opacity: 1 });
                startSocialAnims()
                $('.bg2, .dots-bg').css({ opacity: 1 })
                $('.fixedBanner .banner .divAnime').each(function(index) {
                    $(this).delay(index * 100).css({ transform: 'scale(1,1)' })
                    // TweenMax.to($('.fixedBanner .banner').find('.divAnime').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut })
                });
                setTimeout(function() { $('.banner .title .letters:nth-child(1)').css({ transform: 'translateX(0)' }) }, 1200)
                setTimeout(function() { $('.banner .title .letters:nth-child(3)').css({ transform: 'translateX(0)' }) }, 1300)
                setTimeout(function() { $('.banner .title .letters:nth-child(5)').css({ transform: 'translateX(0)' }) }, 1400)
                setTimeout(function() { $('.banner .letters:nth-child(3), .banner .letters:nth-child(5)').css({ color: '#fff' }) }, 1600);
                // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 1600)
            }, 1000)

        });
        //banner Anim
    }
    $('.benefits-title .letters').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    $('.benefits-title').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
            });
        }
    })
    $('.benefits-list li').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).each(function(index) {
                $(this).delay((index * 100)).animate({ top: 0 }, 500);
            });
        }
    })
    if ($('body').attr('id') == 'initiatives') {
        var strokeData = '';
        // if (mobile) {
            $('.mobileStroke').attr('stroke', '#028283');
            $('.mobileStroke1').attr('stroke', '#B1DBE8');
        // } else {
        //     $('.mobileStroke, .mobileStroke1').attr('stroke', '#fff');
        // }
        // introTextSet('.initiativeBannerTitle');
        // $('.bannerIconsWrapper .stroke')
        TweenMax.set('.bannerIconsWrapper .stroke', { strokeDashoffset: 1250 });
        TweenMax.set('.bannerIconsWrapper .stroke', { 'stroke-dasharray': 1250 });
        TweenMax.set('.bannerIconsWrapper .fill', { fill: 'none' });
        // var owlMentor = $('.owl-mentor-carousel');
        // owlMentor.owlCarousel({
        //     center: true,
        //     items: 1,
        //     loop: false,
        //     margin: 0,
        //     nav: true,
        //     dots: false
        // });
        // $('.bannerIconsWrapper svg').each(function() {
        //     if(if ($(this).isInViewportCustom() && !$(this).parents('.bannerIconsWrapper').hasClass('complete')) )
        //     {
        //         $(this).css({opacity: 0});
        //         TweenMax.set($(this).find('.stroke'), { strokeDashoffset: 1250 });
        //         TweenMax.set($(this).find('.stroke'), { 'stroke-dasharray': 1250 });
        //         TweenMax.set($(this).find('.fill'), { fill: 'none' });
        //     }
        // });

        if ($(window).width() > 1024) {
            // var initiativesData = {
            //     container: document.getElementById('initiativeBanner'),
            //     renderer: 'svg',
            //     loop: true,
            //     autoplay: true,
            //     path: 'dist/json/initiatives.json', // the path to the animation json
            //     rendererSettings: {
            //         scaleMode: 'noScale',
            //         clearCanvas: true,
            //         progressiveLoad: true,
            //         hideOnTransparent: true
            //     }
            // };

            // initiativesAnim = bodymovin.loadAnimation(initiativesData);
            // initiativesAnim.addEventListener('DOMLoaded', function() {
            //     headerAnim();
            //     $('#social').css({ opacity: 1 });
            //     startSocialAnims();
            //     $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
            //         $('.fixedBanner .loader').remove();
            //     });
            //     $('#initiativeBanner').animate({ opacity: 1 }, 500);
            //     $('.dots_bg > div').css({ opacity: 1 })
            //     $('.bannerIconsWrapper svg').each(function() {
            //         // $(this).parent().animate({ opacity: 1}, 500);

            //         // $(this).css({opacity: 0});
            //         TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
            //         TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

            //     });
            //     $('.bannerIconsWrapper').addClass('complete')
            //     $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
            //     setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
            //     setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
            //     // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
            //     // })
            // });
        } else if ($(window).width() == 768) {
            var initiativesData = {
                container: document.getElementById('initiativeBanner'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: 'dist/json/initiatives.json', // the path to the animation json
                rendererSettings: {
                    scaleMode: 'noScale',
                    clearCanvas: true,
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            };

            initiativesAnim = bodymovin.loadAnimation(initiativesData);
            initiativesAnim.addEventListener('DOMLoaded', function() {
                headerAnim();
                $('#social').css({ opacity: 1 });
                startSocialAnims();
                $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
                    $('.fixedBanner .loader').remove();
                });
                $('#initiativeBanner').animate({ opacity: 1 }, 500);
                $('.dots_bg > div').css({ opacity: 1 })
                $('.bannerIconsWrapper svg').each(function() {
                    // $(this).parent().animate({ opacity: 1}, 500);

                    // $(this).css({opacity: 0});
                    TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
                    TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

                });
                $('.bannerIconsWrapper').addClass('complete')
                $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
                setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
                setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
                // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
                // })
            });
        } else {
            var initiateSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="314" height="419" viewBox="0 0 314 419"> <defs> <path id="a" d="M0 119.614h161.286V.058H0z"/> <path id="c" d="M45 .21c-8.074 0-13.983-.929-15.497 7.145l-5.053 20.99c-.89 4.743-6.088 8.183-10.916 8.183H3.021a2.869 2.869 0 0 0-.003 5.737l43.353.044a4.194 4.194 0 0 0 4.123-3.403l8.247-31.55C59.971.791 55.457.177 49.387.177c-1.397 0-2.877.032-4.388.032"/> <path id="e" d="M0 0h210.698v4.651H0z"/> </defs> <g fill="none" fill-rule="evenodd"> <path fill="#326C90" d="M183 208h25v-29h-25zM236 208h26v-23h-26z"/> <path fill="#1A4E6E" d="M208 208h28v-46h-28z"/> <path fill="#FAB9AF" d="M228.725 32.066c0 5.07-1.95 9.717-6.295 9.182-1.88-.232-3.58-1.431-4.738-3.295-.302-.487-.59-.597-1.616-2.113-3.9-2.021-3.073-4.577-2.837-4.933.473-.714 2.01.178 2.896 1.159 0-5.072 2.819-9.182 6.295-9.182 2.167 0 4.453.778 5.586 3.209.684 1.47.709 4.062.709 5.973"/> <path fill="#FA978D" d="M226.847 35.42s.272.384.846.413c.677.034.743-.322.743-.322l-.377-2.965s-.368-.268-.52-.27c-.126-.003-.426.211-.426.211l-.266 2.934z"/> <path fill="#1A4B69" d="M213.594 30.253s2.214 1.354 2.847 2.264c.221.318.683.333.948.051.123-.13.257-.303.401-.532 0 0 2.39-3.204 1.996-5.123-.059-.287.172-.547.458-.493 1.695.319 5.854.964 7.713.03 2.364-1.19 4.196-6.895-1.42-6.776 0 0-.907.076-1.391.685-.372.467-.843.85-1.418 1.005a7.213 7.213 0 0 1-3.1.144c-1.857-.316-3.79.092-5.298 1.227-1.736 1.307-3.125 3.595-1.736 7.518"/> <path fill="#1A4B69" d="M227.602 24.964s1.182 3.803 1.123 6.18c0 0 1.832-.832.473-6.656-1.36-5.824-1.596.476-1.596.476"/> <path fill="#FAB9AF" d="M215.485 34.77c.177.535 2.896 3.625 1.95 7.726l5.32 4.1 1.518-5.498-1.281-5.734-7.507-.594zM255.599 37.087l1.418-2.734 3.074 1.783-1.655 2.258z"/> <path fill="#A6425F" d="M227.641 43.268l17.26 4.635 10.712-11.942a.266.266 0 0 1 .356-.04c.678.495 2.977 2.097 4.218 2.054.12-.004.194.132.127.233l-11.158 16.946s-16.819-2.284-20.72-5.256c0 0-7.65-1.995-.795-6.63"/> <path fill="#B95572" d="M211.082 43.087s12.95-2.819 17.853.7c.168.122.352.215.543.297 1.12.483 5.139 3.16 4.404 16.536l-1.686 20.149-19.357 5.022s-.691-22.923-3.887-26.745c0 0-.853-16.633 2.13-15.959"/> <path fill="#FAB9AF" d="M224.006 42.079c-.587 4.357-1.794 4.302-3.136 4.324-2.782.044-3.365-4.235-3.365-4.235l2.748-1.842 3.753 1.753z"/> <path fill="#B95572" d="M226.843 161.228s.831-3.51 3.658-2.508c0 0 1.247 1.505 1.745 1.755.499.251 2.744.753 3.491.92 0 0 1.33 1.337-1.413 1.254l-6.65-.251s-.748-.418-.83-1.17M210.47 161.228s.831-3.51 3.657-2.508c0 0 1.247 1.505 1.746 1.755.499.251 2.743.753 3.491.92 0 0 1.33 1.337-1.413 1.254l-6.65-.251s-.748-.418-.831-1.17"/> <path fill="#A6425F" d="M211.496 76.583l-.53 45.832-.208 37.252 5.464-.052s3.428-34.684 4.11-38.455c.833-4.605 3.33-29.509 3.33-29.509l2.29 50.088 1.013 17.784 4.97-.588s.955-37.447.955-39.799c0-1.545 1.86-18.409 1.614-31.466-.129-6.812-1.892-11.924-1.892-11.924l-21.116.837z"/> <path fill="#FAB9AF" d="M257.017 34.353s.623-4.178 4.682-2.922c0 0 1.769 2.616.208 3.192-1.561.575-4.211 2.18-4.89-.27"/> <path stroke="#FDC149" d="M249.07 20.555s-2.892-2.37-5.568-.906c-2.676 1.463-.94 4.607-.94 4.607s2.923 5.713 9.342 5.625M259.196 16.711s.612-3.7 3.583-4.38c2.97-.68 3.733 2.833 3.733 2.833s1.56 6.23-3.314 10.43"/> <path fill="#FDC149" d="M254.446 39.243l12.851-4.878s-5.224.305-6.988-4.394l-3.603 1.368s2.556 4.734-2.26 7.904"/> <path fill="#E2A84D" d="M255.402 41.789l12.851-4.879-.956-2.545-12.851 4.878z"/> <path fill="#FDC149" d="M269.452 37.501L254.89 43.03l-.344-.916 14.563-5.527z"/> <path fill="#FAB9AF" d="M260.574 30.966s-2.042 1.781-1.745 2.142c0 0 .19.407.736.091 0 0-.588.411-.107.595 0 0 .21.102.472-.015 0 0-.113.266.062.483.068.084.286.071.454.01 0 0-.07.804.622.284.693-.52 1.55-.802 1.756-1.528.235-.83-1.874-2.555-2.25-2.062"/> <path fill="#E2A84D" d="M258.948 31.457c-3.818 1.45-8.081-.488-9.522-4.326l-3.768-9.75a.42.42 0 0 1 .241-.544l13.046-4.952a.416.416 0 0 1 .535.24l3.77 9.758c1.442 3.838-.484 8.125-4.302 9.574"/> <path fill="#FDC149" d="M263.25 21.883l-3.77-9.758a.415.415 0 0 0-.321-.26l-9.791 3.716a.419.419 0 0 0-.241.544l3.768 9.75a7.387 7.387 0 0 0 7.6 4.773 7.453 7.453 0 0 0 2.756-8.765"/> <path fill="#016E6F" d="M319.127 211.767H148.873a1.878 1.878 0 0 1-1.873-1.883c0-1.04.839-1.884 1.873-1.884h170.254c1.034 0 1.873.843 1.873 1.884 0 1.04-.839 1.883-1.873 1.883"/> <path fill="#FDC149" d="M257.203 4.44c.34 0 .711.4.967.59-.007-.318-.102-.776.043-1.069.146-.295.563-.49.822-.679-.303-.092-.765-.142-.997-.371-.233-.231-.288-.69-.385-.995-.19.278-.398.745-.728.876-.28.11-.695.025-.987.024.191.253.536.569.59.89.053.326-.17.731-.27 1.036.285-.1.637-.301.945-.301m1.51 2.161c-.635 0-1.037-.967-1.612-1.048-.574-.082-1.48.948-2.029.406-.554-.548.467-1.49.37-2.07-.1-.597-1.242-1.044-1.045-1.742.222-.787 1.521-.16 2.03-.376.47-.2.617-1.07 1.041-1.394.988-.753.987 1.2 1.302 1.617.312.412 1.1.34 1.57.591 1.279.685-.871 1.396-1.111 1.846-.246.461.458 2.17-.516 2.17M272.112 26.194l.825.83.824-.83-.824-.83-.825.83zm.825 2.092a.519.519 0 0 1-.368-.153l-1.56-1.57a.526.526 0 0 1 0-.74l1.56-1.568a.519.519 0 0 1 .735 0l1.56 1.569a.526.526 0 0 1 0 .74l-1.56 1.569a.518.518 0 0 1-.367.153zM240.73 13.043a.577.577 0 0 0-.413.172.59.59 0 0 0 0 .83.577.577 0 0 0 .824 0 .59.59 0 0 0 0-.83.576.576 0 0 0-.412-.172m0 2.22c-.433 0-.84-.17-1.147-.479a1.642 1.642 0 0 1 0-2.309 1.607 1.607 0 0 1 1.147-.478c.434 0 .841.17 1.148.478a1.642 1.642 0 0 1 0 2.31 1.607 1.607 0 0 1-1.148.477M234.717 10.293a.516.516 0 0 1-.367-.153 4.633 4.633 0 0 0-3.308-1.378c-1.25 0-2.425.49-3.308 1.378a.518.518 0 0 1-.735 0 .525.525 0 0 1 0-.74 5.663 5.663 0 0 1 4.043-1.684c1.527 0 2.963.598 4.043 1.685a.526.526 0 0 1 0 .74.517.517 0 0 1-.368.152M273.8 50.698a.517.517 0 0 1-.368-.154.526.526 0 0 1 0-.74 4.734 4.734 0 0 0 0-6.657.526.526 0 0 1 0-.74.518.518 0 0 1 .735 0c2.23 2.244 2.23 5.894 0 8.137a.517.517 0 0 1-.368.154M272.16 42.347a.522.522 0 0 1-.52-.523c0-.29.232-.523.52-.523.287 0 .52.234.52.523a.521.521 0 0 1-.52.523M278.851 10.946c.175.843.586 1.326.778 1.434.046-.15.037-.516-.187-.885a1.483 1.483 0 0 0-.59-.55m-4.046 4.018a.52.52 0 0 1-.508-.417c-.016-.076-.378-1.892.542-3.3.495-.756 1.253-1.244 2.254-1.45.23-.048.454-.077.671-.087.167-1.42 1.027-2.738 2.471-3.707a.518.518 0 0 1 .72.145c.16.24.096.565-.143.725-.873.585-1.474 1.283-1.788 2.075-.12.304-.188.597-.221.869a2.53 2.53 0 0 1 1.405.954c.495.677.625 1.587.31 2.162a.95.95 0 0 1-.916.513c-.707-.052-1.412-.898-1.716-2.058a4.695 4.695 0 0 1-.12-.632c-.144.01-.298.03-.465.065-.73.15-1.251.478-1.594 1.002-.674 1.031-.396 2.497-.392 2.511a.523.523 0 0 1-.51.63"/> <path fill="#FAB9AF" d="M212.451 77.5s-.236 1.664 1.064.892c0 0 .71-1.427 1.537-.832 0 0 1.773.059 1.36 2.258 0 0-1.286 3.005-3.902 2.912-.89-.032-2.541-.475-2.305-2.734 0 0-.059-2.555 2.246-2.496"/> <path fill="#A6425F" d="M210.678 43.208s3.06 4.147 1.641 8.783c-1.419 4.636-6.724 12.018-6.724 12.018l7.684 13.075-3.429 3.685s-11.82-11.886-11.82-16.166c0 0 8.984-18.78 12.648-21.395"/> <path fill="#326C90" d="M218.766 180.103l5.596-3.343v17.868h-2.966v-12.742l-2.63 1.49z"/> <g> <path fill="#1A4E6E" d="M6.62 162.277h1.29l11.77-34.4h-1.288zM25.696 162.277h1.29l12.159-34.4h-1.29z"/> <g transform="translate(0 46.135)"> <path fill="#1A4E6E" d="M60.96 75.981H50.447c-4.827 0-10.026-3.44-10.915-8.183l-5.054-20.989c-1.513-8.074-7.423-7.145-15.496-7.145-8.074 0-15.255-.93-13.742 7.145l8.247 31.55a4.194 4.194 0 0 0 4.124 3.403l43.353-.044a2.87 2.87 0 0 0-.004-5.737"/> <path fill="#326C90" d="M17.658 78.36L9.41 46.81c-1.38-7.365 2.678-6.957 9.572-7.972-.701-.098-1.107-1.156-1.817-1.156-8.074 0-13.438 1.053-11.925 9.127l8.247 31.55a4.194 4.194 0 0 0 4.124 3.403l4.121-.005a4.189 4.189 0 0 1-4.074-3.398"/> <path fill="#1A4E6E" d="M51.638 81.743l12.158 34.398h1.289L52.928 81.743zM32.175 81.743l11.812 34.398h1.29L33.463 81.743z"/> <path fill="#A6425F" d="M76.534 71.125C65.26 65.464 41.93 54.832 36.852 54.967c0 0-12.081 16.992-3.52 20.388 10.529 4.177 26.726 3.533 41.391 3.314 5.071-.076 6.608-5.135 1.811-7.544"/> <path fill="#B1516D" d="M81.558 111.946l1.779-.861s.361.622.663 1.026c.58.782 4.824 1.31 4.837 2.365.01.904-2.531 1.132-3.446 1.113-.914-.02-1.59-.169-2.182-.438-.644-.294-1.725-.786-1.9-1.125-.305-.59-.065-.934.004-1.234.08-.354.245-.846.245-.846"/> <path fill="#FAB9AF" d="M83.258 109.133s.091 1.888.682 2.467c.641.627 1.76 1.5 1.724 1.936-.611.523-2.244.193-3.209-.066a1.473 1.473 0 0 1-1.018-.969c-.446-1.371-1.177-4.022-1.177-4.022l2.998.654z"/> <path fill="#B1516D" d="M82.187 116.247c-.47-2.538-.377-1.637-.732-2.548-.108-.276.708.344.708.344l.343 2.24-.298.08-.021-.116z"/> <path fill="#A6425F" d="M71.404 79.615c4.701 15.25 9.022 31.461 9.022 31.461 1.614.08 2.915-.421 4.068-1.132 0 0-1.927-16.067-4.117-34.075-.894-7.347-12.074-6.31-8.973 3.746"/> <path fill="#AF526D" d="M71.29 71.125C60.014 65.464 30.898 60.076 25.82 60.211c0 0-6.295 11.748 2.266 15.144 10.53 4.177 26.726 3.533 41.392 3.314 5.071-.076 6.608-5.135 1.81-7.544"/> <path fill="#B1516D" d="M56.524 109.993l1.966.199s-.018.719.026 1.221c.085.97 3.421 3.645 2.879 4.55-.465.776-2.75-.363-3.518-.859-.768-.496-1.266-.977-1.628-1.517-.394-.587-1.057-1.573-1.028-1.955.05-.662.435-.828.65-1.048.255-.26.653-.591.653-.591"/> <path fill="#FAB9AF" d="M59.447 108.49s-.913 1.654-.713 2.457c.216.87.71 2.2.451 2.553-.794.125-2.011-1.013-2.697-1.739a1.472 1.472 0 0 1-.358-1.36c.34-1.4 1.235-6.1 1.235-6.1l2.082 4.188z"/> <path fill="#B1516D" d="M54.804 113.984c.93-2.407.537-1.591.712-2.553.054-.291.423.664.423.664l-.883 2.088-.295-.089.043-.11z"/> <path fill="#AF526D" d="M64.21 77.035a35510.03 35510.03 0 0 1-8.194 31.624c1.333.913 2.703 1.169 4.058 1.169 0 0 6.162-14.795 13.741-31.277 3.091-6.724-6.972-11.704-9.605-1.516"/> <path fill="#B95572" d="M48.035 56.4l-21.276-1.025s-2.683 3.495-1.982 6.716c.26 1.194 16.644 3.018 25.557-2.181.727-.424-2.3-3.51-2.3-3.51"/> <mask id="b" fill="#fff"> <use xlink:href="#a"/> </mask> <path fill="#1A4E6E" d="M97.444 115.26h2.047V54.765h-2.047zM142.075 116.363h2.047V54.766h-2.047zM49.784 116.141h2.048V54.766h-2.048z" mask="url(#b)"/> <path fill="#203A60" d="M21.585 26.335a25.94 25.94 0 0 0 6.031-4.362c2.38-2.284 4.257-6.436 3.108-10.258-.548-1.823-.601-3.74-.072-5.433 1.84-5.896 8.876-6.274 11.31-4.053 9.112 8.314 13.449 31.218 2.774 44.641-2.32 2.918-13.284 11.48-23.428 6.183-4.506-2.352-5.901-3.832-7.33-8.813-2.085-7.27 1.65-14.756 7.607-17.905" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.03 10.795c.429.334 5.052 4.596 6.298 4.363-.003.384-1.065 4.525-.215 6.688-.309 2.034-4.956 2.325-6.421-1.08 2.933-2.441.62-8.109.338-9.971" mask="url(#b)"/> <path fill="#FCD2C5" d="M63.998 48.486c.129.238-.78 1.005-1.046 1.05-.669-.086-.617-.477-1.256-.466.554-.09 1.119-.305 1.623-.561.267-.16.514-.41.68-.023" mask="url(#b)"/> <path fill="#FAB9AF" d="M33.38 27.067c-.48-1.042 5.016-2.474 5.291-1.975 1.517 2.752 4.196 12.085 6.26 16.576 2.532 5.51-2.837 4.743-3.52 3.889-3.957-6.65-5.053-12.04-8.03-18.49" mask="url(#b)"/> <path fill="#C96B86" d="M39.447 25.016c1.664 1.467 2.95 8.776 4.924 13.184-1.566 1.612-2.441 2.421-5.354 2.95-3.16-4.784-4.769-11.608-4.802-13.374-.087-4.544 2.877-4.835 5.232-2.76" mask="url(#b)"/> <path fill="#FAB9AF" d="M34.548 9.426c-.393-3.092 1.335-5.931 4.457-6.33 2.907-.368 5.77.142 6.578 2.861.29.974-.14 10.068-4.29 11.535-1.974.698-6.039-2.523-6.336-4.855 0 0-.404-3.18-.409-3.211" mask="url(#b)"/> <path fill="#203A60" d="M32.408 2.9c3.393-4.558 9.706-2.857 9.76-.29 4.439-.741 5.046 7.594 2.876 8.759.749-5.295-5.856-6.235-5.856-6.235-.626 1.789-2.46 1.55-3.265 3.28-1.21 2.596-1.22 1.515-1.398 2.22 0 0-5.958-2.574-2.117-7.734" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.13 7.156c.298.027.58.825.977 1.14-.339 1.012-1.047 1.945-1.426 2.737-.715-.266-.853-1.353-.788-2.092.07-.782.455-1.855 1.237-1.785" mask="url(#b)"/> <path fill="#FA978D" d="M43.137 13.814a.17.17 0 0 1-.053.138.91.91 0 0 1-.592.257c-.38.023-.513-.114-.558-.192a.143.143 0 0 1-.016-.09l.251-2.178a.184.184 0 0 1 .084-.13c.092-.063.246-.159.325-.161.062-.002.18.063.257.11.048.03.079.076.084.127l.218 2.12z" mask="url(#b)"/> <path fill="#FAB9AF" d="M31.32 29.717c-.482-1.042 3.837-2.475 4.112-1.975 1.52 2.757 4.2 12.095 6.26 16.576 2.533 5.51-3.119 4.183-3.801 3.33-3.958-6.652-3.594-11.482-6.572-17.93" mask="url(#b)"/> <path fill="#C96B86" d="M36.192 27.715c1.638 1.495 2.795 8.826 4.692 13.268-1.594 1.585-2.483 2.378-5.405 2.855C32.404 39 30.914 32.15 30.912 30.383c-.007-4.545 2.961-4.784 5.28-2.668" mask="url(#b)"/> <path fill="#203A60" d="M21.585 26.335a25.94 25.94 0 0 0 6.031-4.362c2.38-2.284 4.257-6.436 3.108-10.258-.548-1.823-.601-3.74-.072-5.433 1.84-5.896 8.876-6.274 11.31-4.053 9.112 8.314 13.449 31.218 2.774 44.641-2.32 2.918-13.284 11.48-23.428 6.183-4.506-2.352-5.901-3.832-7.33-8.813-2.085-7.27 1.65-14.756 7.607-17.905" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.03 10.795c.429.334 5.052 4.596 6.298 4.363-.003.384-1.34 4.101-.125 6.064-.31 2.033-5.135 2.865-6.6-.54 2.933-2.44.708-8.025.427-9.887" mask="url(#b)"/> <path fill="#FAB9AF" d="M34.548 9.426c-.393-3.092 1.335-5.931 4.457-6.33 2.907-.368 5.77.142 6.578 2.861.29.974-.14 10.068-4.29 11.535-1.974.698-6.039-2.523-6.336-4.855 0 0-.404-3.18-.409-3.211" mask="url(#b)"/> <path fill="#203A60" d="M32.408 2.9c3.393-4.558 9.706-2.857 9.76-.29 4.439-.741 5.046 7.594 2.876 8.759.749-5.295-5.856-6.235-5.856-6.235-.626 1.789-2.46 1.55-3.265 3.28-1.21 2.596-1.22 1.515-1.398 2.22 0 0-5.958-2.574-2.117-7.734" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.13 7.156c.298.027.58.825.977 1.14-.339 1.012-1.047 1.945-1.426 2.737-.715-.266-.853-1.353-.788-2.092.07-.782.455-1.855 1.237-1.785" mask="url(#b)"/> <path fill="#FA978D" d="M43.137 13.814a.17.17 0 0 1-.053.138.91.91 0 0 1-.592.257c-.38.023-.513-.114-.558-.192a.143.143 0 0 1-.016-.09l.251-2.178a.184.184 0 0 1 .084-.13c.092-.063.246-.159.325-.161.062-.002.18.063.257.11.048.03.079.076.084.127l.218 2.12z" mask="url(#b)"/> <path fill="#1A4E6E" d="M79.01 45.516h6.167V33.093h-6.168z" mask="url(#b)"/> <path fill="#1A4E6E" d="M91.664 48.605H72.522v-.373c0-2.097 1.7-3.796 3.796-3.796h11.55c2.096 0 3.796 1.7 3.796 3.796v.373zM103.504 40.21H61.066a1.308 1.308 0 0 1-1.309-1.308V11.106c0-.723.586-1.308 1.309-1.308h42.438c.722 0 1.308.585 1.308 1.308v27.796c0 .723-.586 1.308-1.308 1.308" mask="url(#b)"/> <path fill="#326C90" d="M101.53 38.16H63.039a1.308 1.308 0 0 1-1.308-1.308V13.155c0-.722.586-1.308 1.308-1.308h38.493c.723 0 1.308.586 1.308 1.308v23.697c0 .723-.585 1.309-1.308 1.309" mask="url(#b)"/> <path fill="#FDC149" d="M99.542 21.428H80.91a.637.637 0 0 1 0-1.273h18.632a.636.636 0 1 1 0 1.273M93.833 24.09H80.91a.637.637 0 0 1 0-1.273h12.923a.637.637 0 1 1 0 1.273M94.72 26.752H80.871a.598.598 0 0 1-.598-.598v-.078c0-.33.268-.597.598-.597h13.85c.33 0 .597.267.597.597v.078c0 .33-.268.598-.598.598M90.438 29.414H80.91a.637.637 0 0 1 0-1.273h9.528a.636.636 0 1 1 0 1.273" mask="url(#b)"/> <path fill="#CAC3D0" d="M66.284 28.048a.539.539 0 0 1-.539-.539v-.195a.539.539 0 0 1 1.078 0v.195a.539.539 0 0 1-.539.539" mask="url(#b)"/> <path fill="#FDC149" d="M65.273 29.132h11.769V20.45H65.273z" mask="url(#b)"/> <path fill="#FAB9AF" d="M63.475 28.771c.414-.486.896-.968 1.403-1.413.593-.534 2.052-1.577 2.154-1.649.31-.195 1.019-.784 1.296-.86.177-.05.714.015.893.153.237.183.126.496.126.496.349.172-.243.952-.148.975.387.095.376.654-.786 1.442-.069.047-2.54 2.549-3.395 3.283-.493-.49-1.564-2.396-1.543-2.427M31.656 31.771c-1.017-.532 1.532-4.301 2.054-4.074 2.887 1.258 10.706 7.024 15.071 9.318 5.367 2.822.08 5.218-.982 4.957-7.193-2.856-9.85-6.906-16.143-10.2" mask="url(#b)"/> <path fill="#C96B86" d="M34.295 27.213c2.21.186 7.6 5.29 11.812 7.653-.297 2.228-.517 3.398-2.542 5.559-5.388-1.959-10.747-6.48-11.826-7.878-2.778-3.597-.571-5.596 2.556-5.334" mask="url(#b)"/> <path fill="#FAB9AF" d="M46.204 38.875c.144-.193.304-.35.456-.456 2.791-1.94 14.365-7.323 16.952-9.805.614.993 1.193 1.777 1.738 2.28-4.335 3.998-14.986 12.036-17.006 10.824-1.852-1.11-2.777-1.987-2.14-2.843" mask="url(#b)"/> <path fill="#B95572" d="M29.75 39.834c-2.029-8.212-5.552-10.428.78-16.919.901-.925 4.318-2.454 4.318-2.454s2.085 1.86 3.836 1.794c1.202-.047 2.347-1.303 2.347-1.303s2.112.486 2.797 1.08c.378.327 1.99 4.412 3.926 7.066 3.937 5.397-.734 9.522-.833 12.295-.19 5.303-.241 11.296 2.142 16.156-7.283 5.436-15.595 7.092-24.383 3.585.026-7.24 7.206-12.651 5.07-21.3" mask="url(#b)"/> <path fill="#FAB9AF" d="M58.365 46.747c.625-.132 1.3-.22 1.974-.264.795-.062 2.588.002 2.712.007.364.034 1.286 0 1.552.109.171.068.556.447.614.666.076.29-.203.47-.203.47.172.348-.773.606-.712.682.25.312-.1.747-1.502.664-.083-.005-3.567.47-4.693.53-.092-.689.223-2.853.258-2.864M31.32 29.717c-.482-1.042 3.837-2.475 4.112-1.975 1.52 2.757 4.2 12.095 6.26 16.576 2.533 5.51-3.119 4.183-3.801 3.33-3.958-6.652-3.594-11.482-6.572-17.93" mask="url(#b)"/> <path fill="#C96B86" d="M36.192 27.715c1.638 1.495 2.795 8.826 4.692 13.268-1.594 1.585-2.483 2.378-5.405 2.855C32.404 39 30.914 32.15 30.912 30.383c-.007-4.545 2.961-4.784 5.28-2.668" mask="url(#b)"/> <path fill="#FAB9AF" d="M38.516 44.22c.232-.065.454-.093.64-.084 3.394.166 15.85 2.96 19.413 2.57-.119 1.161-.138 2.135-.013 2.867-5.874.524-19.217.397-20.078-1.795-.79-2.01-.99-3.268.038-3.558" mask="url(#b)"/> <path fill="#326C90" d="M45.908 54.834h100.581a3.382 3.382 0 0 0 0-6.765H45.908a3.382 3.382 0 1 0 0 6.765" mask="url(#b)"/> <path fill="#FAB9AF" d="M64.755 28.03c-.144-.818-.088-1.623-.088-1.623a.113.113 0 0 1 .159-.109c.171.077.42.279.472.81.082.825-.496 1.185-.543.921" mask="url(#b)"/> <path fill="#FFCFC3" d="M110.962 104.798l1.16 6.631c.094 1.145.387 1.886 1.535 1.946 1.288.067 1.935-.312 1.97-1.601l.614-6.93-5.28-.046zM100.741 105.02l1.214 6.581c.093 1.146.334 1.937 1.481 1.997 1.288.066 1.759-.708 1.793-1.997l.792-6.534-5.28-.046z" mask="url(#b)"/> <path fill="#B1516D" d="M116.252 115.753c-.089.663-13.056.758-13.091.33-.11-1.214 1.518-1.483 2.278-1.767.429-.16 1.582-.45 2.266-.577.862-.162.707-.172 2.209-.598.726-.204.62-.183 1.036-.427.008 0 .396-.278.396-.278.62-.396.786-1.128.786-1.128l3.692.106s.705 2.244.428 4.339" mask="url(#b)"/> <path fill="#B1516D" d="M105.846 116.254c-.088.663-13.055.758-13.091.33-.11-1.214 1.518-1.483 2.279-1.768.428-.159 1.581-.448 2.265-.577.863-.161.707-.172 2.209-.597.727-.205.62-.183 1.036-.428.008.001.396-.277.396-.277.62-.396.787-1.128.787-1.128l3.691.106s.706 2.244.428 4.339M105.632 71.62l4.403 35.507 7.735-.65-2.932-33.907z" mask="url(#b)"/> <path fill="#FFCFC3" d="M120.945 20.978s1.274 3.756 1 5.033c0 0 4.995-.123 6.09-1.034 1.093-.912.11-5.093.11-5.093l-7.2 1.094z" mask="url(#b)"/> <path fill="#C96B86" d="M141.602 67.178s4.227 12.319-.33 14.324c-4.558 2.006-35.24-3.594-36.253-2.682-1.014.912 1.377 27.862 1.195 28.957-.182 1.093-6.556.454-6.556.454s-6.11-31.651-3.983-35.844c2.127-4.193 28.645-5.209 28.645-5.209h17.282z" mask="url(#b)"/> <path fill="#FFCFC3" d="M117.34 17.995c1.266 3.049 3.92 5.153 7 5.153 4.305 0 7.794-4.1 7.794-9.16 0-5.06-3.49-9.16-7.794-9.16-4.304 0-7.793 4.1-7.793 9.16 0 .571.05 1.127.135 1.67l.658 2.337z" mask="url(#b)"/> <path fill="#F4C6BD" d="M98.332 46.063s3.357-1.052 7.286.381c3.93 1.434 14.598 1.634 14.598 1.634s-.173 9.67.491 7.678c.45-1.35-17.45-5.949-19.526-6.84-2.077-.89-2.849-2.853-2.849-2.853" mask="url(#b)"/> <path fill="#203A60" d="M126.204 22.278c.226.1.472.155.719.141 1.83-.104 3.521-.806 4.199-1.7 0 0 .266-.266.417-.424 0 0 2.884-3.001 2.31-8.335-.434-4.038-2.884-7.864-6.016-9.394-.515-.252-1.05.318-.783.826.105.2.193.378.24.496 0 0-1.58-2.558-5.96-2.127-1.252.124-2.597.872-4.084 1.586-3.582 1.72-2.802 7.074 1.125 7.682.053.009.107.016.16.023.3.041.525.302.536.604.057 1.587.63 2.674 1.063 3.275a.59.59 0 0 0 .87.112c.315-.28.824-.57 1.52-.472 1.103.156.787 2.382-.501 2.732-.319.087-.526.392-.43.707.297.962.987 2.662 2.274 3.231 0 0 .967.588 1.313.734.247.104 1.028.303 1.028.303" mask="url(#b)"/> <path fill="#FFCFC3" d="M92.434 48.838l.697.251 6.532 2.896c1.618.852 4.127 1.467 5.687 1.652 1.973.231 8.334-8.672 8.334-8.672l-2.782-6.283s-5.375 8.611-6.654 8.509c-1.273-.107-14.045-3.044-15.339-3.054-1.27-.013-4.273-.442-5.883 3.195 0 0-.76 1.301 2.681.787l3.714-.37 1.495.434c.172-.001.589.33 1.224.55l.294.105z" mask="url(#b)"/> <path fill="#FA978D" d="M117.272 17.085a.158.158 0 0 1-.068.12.851.851 0 0 1-.582.162c-.355-.028-.46-.173-.492-.251a.133.133 0 0 1-.004-.085l.518-1.988a.173.173 0 0 1 .095-.11c.093-.045.248-.114.322-.106.058.006.158.082.224.136.04.034.063.08.061.128l-.074 1.994z" mask="url(#b)"/> <path fill="#B1516D" d="M123.393 27.234c-.56-.288-1.333-.603-2.357-.616-.393-.005-1.01.387-1.34.6-6.078 3.892-11.746 14.032-11.746 14.032s-.06 2.408 5.146 5.144l2.453-1.56s2.733-2.567 2.77-2.223c11.09-11.664 5.397-15.212 5.074-15.377" mask="url(#b)"/> <path fill="#B1516D" d="M118.693 46.002c.648 2.46 3.478 16.386-.856 21.843 0 0 13.217 3.19 27.436 1.094 0 0-4.792-35.796-6.807-39.138-3.418-5.668-7.923-6.92-14.759-4.824-1.053.323-2.101.955-3.122 1.79 0 0-4.307 4.567-3.235 9.852 1.072 5.284 1.343 9.383 1.343 9.383" mask="url(#b)"/> <path fill="#1A4E6E" d="M151.83 118.443h-1.29l-11.513-33.517h1.289zM132.367 118.443h-1.29l-11.514-33.517h1.29z" mask="url(#b)"/> <path fill="#1A4E6E" d="M97.748 79.164h10.513c4.827 0 10.026-3.44 10.915-8.183l5.054-20.989c1.513-8.074 7.423-7.145 15.496-7.145 8.074 0 15.255-.93 13.742 7.145l-8.247 31.55a4.194 4.194 0 0 1-4.124 3.403l-43.353-.044a2.869 2.869 0 0 1 .004-5.737M107.07 84.926l-11.514 33.517h-1.288l11.512-33.517z" mask="url(#b)"/> <path fill="#1A4E6E" d="M126.533 84.926l-11.512 33.517h-1.29l11.514-33.517z" mask="url(#b)"/> </g> <g transform="translate(94.727 88.772)"> <mask id="d" fill="#fff"> <use xlink:href="#c"/> </mask> <path fill="#326C90" d="M58.65 10.61s2.516-5.66-5.788-5.594c-8.007.064-15.756.032-15.756.032s-3.73.161-4.887 5.177c-1.158 5.016-4.245 20.064-4.245 20.064s-2.508 9.84-10.997 9.84H-.193S-5.209 28.36.193 28.167C5.595 27.974 24.116 6.56 24.116 6.56L35.884-3.473l8.296-3.472s6.56.964 7.138 1.35c.58.386 7.139 4.437 7.139 4.437s4.823 5.788.193 11.769" mask="url(#d)"/> </g> <path fill="#016F70" d="M159.55 165.75H1.736a1.736 1.736 0 1 1 0-3.473H159.55a1.736 1.736 0 1 1 0 3.472"/> </g> <g> <path fill="#A6425F" d="M98.401 369.988c1.689-11.181.175-42.409.862-46.225.598-3.312 5.754-3.15 9.098-3.048 3.366.136 6.515 4.602 6.379 7.966-.054 1.352-3.084 28.45-4.871 40.288-1.288 8.53-7.863 35.672-9.935 45.659l-6.12-1.055c1.546-10.01 3.302-35.064 4.587-43.585M116.345 368.662c.904-11.447-.445-40.862-.433-41.186.135-3.361 4.623-5.504 7.932-5.403 3.327.136 5.913 2.972 5.779 6.333-.054 1.35-.93 28.682-2.696 40.51-1.273 8.524-4.769 36.147-7.18 46.177l-6.863-.876c1.529-10 2.783-36.972 3.461-45.555"/> <path fill="#A6425F" d="M94.189 413.233c-.09 1.818-.35 3.554-.37 4.645-.037.138.165.404.307.404l2.612.012.723-.811.69.817 11.022.049c.19 0 .39-.24.442-.424.065-.23-.087-.528-.96-.975-1.986-1.018-8.954-1.236-11.11-3.072 0 0-2.362-.645-3.356-.645M113.18 414.628c-.091 1.703-.272 2.724-.292 3.745-.036.13.166.379.308.379l2.612.01.723-.759.69.766 11.022.045c.19 0 .39-.224.441-.397.065-.215-.086-.494-.959-.912-1.986-.954-8.954-1.158-11.11-2.877h-3.436zM100.606 329.512s-3.739-6.862-1.335-20h30.689s.435 10-.268 20h-29.086zM126.506 258.814s6.018 1.99 5.403 4.72c-.476 2.123-16.708 18.04-18.986 22.04-.653 1.143-.247 21.076-.247 21.076s-3.23 1.901-6.847 1.374c-1.26-.184-.825-23.828-.557-24.883 1.362-5.352 10.798-14.244 10.798-14.244l10.436-10.083z"/> <path fill="#225A7D" d="M129.208 239.744s4.77-2.745 3.442-7.523c-1.327-4.779-4.883-.44-4.883-.44l1.441 7.963z"/> <path fill="#FAB9AF" d="M121.8 256.884l-.097-2.656s-.734-3.365 2.27-4.237c3.004-.872 4.85-2.863 5.295-4.348 0 0 2.95-6.943 1.202-10.235-1.277-2.403-7.296-6.833-9.322-5.72-2.026 1.113-9.553 3.482-9.657 5.455-.105 1.972 3.448 11.802 3.448 11.802l-1.108 4.57-1.408 1.794.671 5.38 1.435 1.96 3.836.956 2.928-.041.507-4.68z"/> <path fill="#FA978D" d="M126.372 243.8s.398.55 1.238.592c.99.05 1.088-.463 1.088-.463l-.552-4.26s-.539-.386-.76-.39c-.185-.003-.625.305-.625.305l-.389 4.215z"/> <path stroke="#326C90" d="M119.86 241.503l5.817.567.23-2.69-5.817-.566zM128.698 242.237l3.479.298.242-2.493-3.48-.298zM125.907 240.674s1.141-.944 3.256-.142M119.86 239.28l-4.186-.466"/> <path fill="#1A4B69" d="M109.252 232.633c1.282-7.932 11.602-10.359 15.196-9.454.479.12.042.826-.49 1.329 4.628-.017 9.57 1.277 9.853 6.3.205 3.658-9.39 4.468-15.78 2.975-.512-.12-1.07-.15-1.511.136-.55.359-1.183 1.583-.726 4.397-.524-.573-1.701-1.338-2.282-.48-.452.668-.311 2.232 1.579 2.932.662 1.96-.192 3.887-.51 5.023 0 0-6.232-7.575-5.329-13.158"/> <path fill="#FAB9AF" d="M140.082 313.317s-.01 1.277-1.553 2.035c-1.54.759.247-2.25.247-2.25s-1.813 2.638-2.47 2.446c-.657-.19-.653-1.346-.465-1.444.187-.098-1.07.084-1.285-.29-.214-.374.293-1.422.293-1.422s-.664-.314-.6-.889c.066-.574 1.848-3.113 1.9-3.342.051-.229-.938-.19-1.031.008-.094.199-.146 1.496-.856 1.623-.711.125-.382-1.413-.304-1.83.431-2.281 1.986-3.495 2.304-3.56 1.07-.215 5.083 4.833 3.82 8.915"/> <path fill="#A6425F" d="M132.882 286.513c-1.356-4.735.765-22.505-.492-24.213-1.65-2.24-4.882-2.753-5.722-1.183-1.7 3.175-1.102 11.24-1.102 11.24s-.87 13.222 1.991 18.057c2.154 1.56 2.585.901 3.712.22.819-.493 1.658-3.024 1.613-4.121"/> <path fill="#A6425F" d="M138 303.87s-5.299-14.113-5.267-15.474c.002-.085-.113-1.17-.08-1.257-.047-1.527-1.518-2.771-2.681-2.743-1.164.028-3.261 1.596-4.038 2.788-.013.141-.024.28-.027.415-.026 1.085 4.425 19.222 5.7 19.122 3.657-.288 6.393-2.851 6.393-2.851"/> <path fill="#D2F0FF" d="M112.134 264.3l6.025-6.416 2.429.122 7.18 6.786-1.847 47.976-9.614.465-8.074-1.206z"/> <path fill="#B95572" d="M124.41 256.953l5.028 2.121c1.856.86 3.03 2.841 2.979 5.023-.13 5.509-.348 16.273-.28 24.656.087 10.807.323 18.21-1.168 28.154a1.7 1.7 0 0 1-1.767 1.44l-6.434-.316a1.735 1.735 0 0 1-1.475-2.071c1.738-8.235 8.402-42.407 3.117-59.007M117.971 264.13c-.912-6.263-5.81-10.432-5.81-10.432s-8.682 3.739-10.81 7.035c-2.277 2.898 1.526 20.201.413 31.891-1.024 10.759-7.744 16.255-5.708 19.678 4.072 6.845 15.022 4.844 15.022 4.844s7.44-49.257 6.893-53.016"/> <path fill="#FFF" d="M113.316 251.837l6.08 6.202-4.654 4.03-5.114-7.881zM124.482 255.642l-1.078-.513-1.31-.501-1.303 3.168 5.581 5.67z"/> <path fill="#B95572" d="M119.897 258.84l.018-.006a.316.316 0 0 1 .417.225c.76 3.108 1.637 9.803 1.71 10.93.095 1.495.71 8.718.71 8.718l.364 7.514-1.403 4.22-2.318-3.86s.706-15.194.483-15.904c-.18-.572-.116-5.241-.116-5.241l-.072-6.285a.327.327 0 0 1 .207-.31"/> <path fill="#B95572" d="M120.044 259.28s-.758-.835-.635-1.169c.122-.334.587-.784.801-.676.183.093.496.403.566.598.032.09.008.198-.034.38-.057.245-.497.826-.698.866"/> <path fill="#A6425F" d="M102.25 265.03c.655-3.524 4.113-4.26 6.325-2.526 1.72 1.347 9.122 22.835 11.764 26.615.755 1.082 14.852 6.572 14.852 6.572s.323 3.728-1.725 6.754c-.714 1.054-17.4-7.514-18.242-8.211-4.266-3.54-8.865-15.991-8.865-15.991s-4.773-9.65-4.11-13.213"/> <path fill="#FDC149" d="M145.713 292.766c-3.138-.059-5.588-2.726-5.374-5.85l.63-6.707h9.57l.478 7.1c.149 3.01-2.286 5.515-5.304 5.457"/> <path fill="#FDC149" d="M144.977 301.605h.93v-8.838h-.93z"/> <path fill="#FDC149" d="M141.256 302.515s3.036-.57 4.12-1.37c0 0 .485-.012.65 0 .668.517 4.067 1.37 4.067 1.37v.457l-8.837.028v-.485M160.638 290.085a5.543 5.543 0 0 1-7.23-3.49l-1.92-6.533 8.976-3.574 3.105 6.492a5.257 5.257 0 0 1-2.93 7.105"/> <path fill="#E2A84D" d="M154.369 286.173l-1.87-6.429-1.01.407 1.883 6.478c.951 2.988 4.185 4.565 7.094 3.459.11-.042.219-.09.325-.138-2.734.578-5.54-1.005-6.422-3.777M141.412 286.862l.616-6.651-1.069-.002-.62 6.703c-.211 3.123 2.17 5.792 5.222 5.855.116.002.231-.001.346-.007-2.703-.486-4.69-3-4.495-5.898"/> <path fill="#FDC149" d="M164.047 298.006l-.848.343-3.339-8.495.848-.342z"/> <path fill="#FDC149" d="M159.86 300.709s2.62-1.637 3.347-2.75c0 0 .446-.192.605-.243.802.21 4.26-.297 4.26-.297l.16.405-8.201 3.316-.17-.431"/> <path fill="#FAB9AF" d="M133.814 301.154s.624-1.578.766-2.124c.145-.561.373-2.286.373-2.286s.36.67 1.884.812c.266.024 2.084-.773 2.834-1.613 1.728-1.934 3.032-3.422 5.286-3.622 2.33-.206 3.69 1.347 4.422 2.11.528.552 1.374 1.976 1.139 2.21-.235.231-.974.077-1.163-.002-.641-.266-.873-.967-1.48-1.315-.458-.262-1.882-.492-1.882-.492.38.263 1.377.876 1.828 1.375.44.452 1.05 1.208 1.317 2.139.266.922.102 1.405-.052 1.655-.11.18-.58-.21-.72-.712a5.367 5.367 0 0 0-.806-1.614c.06.135.32.757.234 1.442-.083.662-.799 1.99-.858.874-.035-.662-.196-1.548-.572-1.918-.438-.432-1.233-.813-1.233-.813.463.553 1.574 2.536.564 2.925-.21.08-.34-.438-.565-.817-.243-.412-1.293-1.528-3.037.235-2.843 2.871-4.893 1.81-4.893 1.81l-3.386-.259zM174.836 288.116s-7.47 2.591-8.039 2.613c-.57.02-3.997-.876-5.557-.24-1.156.47-1.91.58-2.225.945-.314.366.169.752.556.766.407.016 1.43.249 1.489.35.057.1-.399-.147-1.534.243-1.134.39-1.73.777-1.726.964.006.185.752.235 1.404.096.651-.138-.955.51-1.553 1.05-.6.538 1.286.351 2.093.106.807-.247-1.612.583-1.842 1.006-.23.423 1.904.253 2.787.027.884-.224-1.309.332-1.494.633-.185.301 1.815.907 3.244.702 1.324-.188 2.9-.294 5.546-2.62.487-.426 7.69-1.134 7.69-1.134l-.84-5.507z"/> <path fill="#A6425F" d="M212.71 413.698s1.852.653 4.825.607l-.063 3.88s-2.093.25-3.484.049l-.54-1.001-1.132 1.056s-6.654.71-10.087.478c0 0-.4-1.134 1.235-1.651 1.634-.517 5.36-1.228 6.414-1.799 1.055-.57 2.832-1.62 2.832-1.62"/> <path fill="#FFCBB9" d="M218 407.651l-.18 5.142-.056 1.57c-2.715.858-4.72-.642-4.72-.642l-.047-1.658-.113-4.313 5.116-.099z"/> <path fill="#A6425F" d="M195.5 413.698s1.852.652 4.826.607l-.063 3.882s-2.095.248-3.484.047l-.541-1.002-1.131 1.057s-6.654.711-10.087.478c0 0-.4-1.135 1.234-1.65 1.633-.518 5.36-1.229 6.415-1.8 1.055-.57 2.83-1.62 2.83-1.62"/> <path fill="#FFCBB9" d="M200.79 407.651l-.178 5.128-.058 1.588c-2.718.848-4.72-.641-4.72-.641l-.046-1.844-.114-4.132 5.117-.099z"/> <path fill="#A6425F" d="M215.906 301.761c-.953-4.138-15.114 1.309-15.114 1.309s.038.867.106 2.306c-2.557-1.02-3.986-3.95-8.571-2.947 0 0-3.164 17.1-3.164 34.344 0 5.418.215 13.958.879 21.277 1.22 13.442 4.441 51.438 4.441 51.438l7.87-.052s-1.41-37.871-.816-51.466c.314-7.178 1.747-18.597 2.308-24.26.956 6.121 1.048 17.257 2.399 24.688 2.411 13.275 6.062 51.114 6.062 51.114l7.554-.044c-.852-8.864-1.389-43.583-1.158-51.237.475-15.643 1.627-32.635.572-44.442-.493-5.52-2.285-7.316-3.368-12.028M203.116 262.18s-2.58-4.513-4.963-3.087c-1.853 1.107-11.809 21.288-14.871 24.67-.875.969-9.277 3.365-9.277 3.365s-.787 3.62.836 6.85c.566 1.124 12.207-3.215 13.118-3.795 4.623-2.944 9.492-15.91 9.492-15.91l5.665-12.094z"/> <path fill="#B95572" d="M204.102 253.233s7.92.41 12.63 6.44c7.032 14.224.125 35.905-.672 43.21 0 0-12.721 6.07-23.887.67 0 0-2.498-22.773-2.019-28.807.478-6.035 6.335-20.402 13.948-21.513"/> <path fill="#90324D" d="M203.581 334.097s-1.229-6.681-1.707-11.562c0 0-.772 11.593 1.149 17.21l.558-5.648z"/> <path fill="#FAB9AF" d="M203.946 288.83c-2.517 1.222-6.967 2.849-6.967 2.849s-2.265-2.037-3.219-2.125c-.954-.088-3.588 1.195-4.172 1.514-.585.318.776.797 1.53.459.257-.116 1.916-.513 2.222-.223.308.29-2.676.876-4.31 1.374-1.634.497-4.123 1.754-4.052 2.044.155.64 2.802-.422 3.238-.583.483-.179 1.787-.33 1.787-.33s-.705 1.221.06 1.45c0 0-.034 1.28.651 1.284 0 0 .345.99 1.41.865 1.068-.125 3.883.232 5.538-1.889 0 0 7.151-.997 9.312-2.67 2.161-1.673-.51-5.238-3.028-4.018M201.723 247.756s.962 6.276.04 9.778c-.179.679.234 1.382.9 1.604 2.61.872 6.105-2.536 7.819-3.696.357-1.966-.656-9.651-.656-9.651l-8.103 1.965z"/> <path fill="#FAB9AF" d="M194.838 231.72s2.177-.248.242 2.905c-.942 1.532.396 7.372.396 7.372s2.273 8.11 5.396 7.48c3.124-.63 8.591-.28 9.584-2.097.995-1.818 2.628-14.121-2.768-16.148-5.395-2.028-12.85.488-12.85.488"/> <path fill="#FA978D" d="M195.674 242.691s-.267.33-.772.308c-.593-.026-.623-.359-.623-.359l.564-2.69s.343-.216.475-.205c.111.008.356.23.356.23v2.716z"/> <path fill="#1A4B69" d="M191.023 230.749c0 2.782 2.455 4.457 4.793 4.73 1.517.176 3.035-.07 4.54-.329 2.539-.437 4.599 2.432 5.104 4.554.57 2.405-1.928 6.294-4.142 5.022-2.213-1.274-5.57-1.344-5.57-1.344s-1.285 1.627-.643 4.455c.644 2.83 7.855 3.042 10.068 1.203 2.214-1.839 1.358-6.72 2.856-8.558 1.5-1.839 2.874.954 2.785 1.769-.122 1.136-2.09 1.955-2.09 1.955l1.332 6.236c2.857-2.052 6.779-18.095.026-19.21-1.35-4.683-7.436-4.972-10.673-4.976 0 0-8.386.033-8.386 4.493"/> <path fill="#FFF" d="M201.72 258.714l8.373-3.156-7.925 6.512zM201.939 258.505l-3.939 2.17 4.186-6.512z"/> <path fill="#A6425F" d="M198 260.68l3.73-2.331.456 3.433-2.602 1.218z"/> <path fill="#A6425F" d="M199.35 261.767s-3.676 4.894-3.676 17.167c0 1.44 1.906 3.6 1.906 3.6l2.553-3.48s-.118-14.828.527-17.287c.646-2.458-1.31 0-1.31 0M208.164 269.375c1.531 4.257 3.086 12.364 3.432 14.476.448 2.74-12.666 5.115-12.666 5.115l.063 7.522s15.545-4.082 18.245-6.225c2.04-3.944 2.51-16.954-.13-24.3-1.812-5.044-6.154-7.523-8.78-4.32-1.808 2.203-.578 6.583-.164 7.732"/> <path fill="#E6F7FF" d="M200.79 412.75l-.06 1.613c-2.884.861-5.005-.652-5.005-.652l-.05-1.874c1.271.2 3.464.55 5.116.912M218 412.5l-.06 1.422c-2.88.779-5.006-.582-5.006-.582l-.05-1.503c1.394.215 3.761.565 5.116.662"/> <path fill="#FDC149" d="M148.51 278.104a.771.771 0 0 1-1.06.064l-2.684-2.275a.704.704 0 0 1-.067-1.02.772.772 0 0 1 1.06-.065l2.684 2.275c.311.264.341.721.067 1.02M150.525 276.46a.693.693 0 0 1-.862-.48l-.937-3.234a.71.71 0 0 1 .47-.88.693.693 0 0 1 .862.48l.937 3.233a.71.71 0 0 1-.47.88M152.874 276.917c-.348-.124-.537-.527-.421-.901l.995-3.224c.116-.374.492-.577.84-.453.349.124.538.527.422.901l-.996 3.224c-.115.374-.491.577-.84.453"/> </g> </g></svg>';
            $('#initiativeBanner').append(initiateSVG);

            headerAnim();
            $('#social').css({ opacity: 1 });
            startSocialAnims();
            $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
                $('.fixedBanner .loader').remove();
            });
            $('#initiativeBanner').animate({ opacity: 1 }, 500);
            $('.dots_bg > div').css({ opacity: 1 })
            $('.bannerIconsWrapper svg').each(function() {
                // $(this).parent().animate({ opacity: 1}, 500);

                // $(this).css({opacity: 0});
                TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
                TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

            });
            $('.bannerIconsWrapper').addClass('complete')
            $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
            setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
            setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
        }


        $('.titleLetterAnim span').each(function() {
            if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            }
        });
        // $('.titleLetterAnim svg').each(function() {
        //     if (!$(this).parents('.titleLetterAnim').hasClass('complete'))
        //         TweenMax.set($(this).find('.stroke'), { strokeDashoffset: 1250 });
        //     TweenMax.set($(this).find('.stroke'), { 'stroke-dasharray': 1250 });
        //     TweenMax.set($(this).find('.fill'), { fill: 'none' });
        // });
        // $('.titleLetterAnim svg').each(function() {

        //     if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
        //         if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
        //             $(this).parents('.titleLetterAnim').addClass('complete');
        //             TweenMax.to($(this).find('.stroke'), 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
        //             TweenMax.to($(this).find('.fill'), 0.4, { fill: '#FCC14A', ease: Power1.easeInOut }, "0.5");
        //         }
        //     }


        // });
        $('.titleLetterAnim > .lettring').each(function() {
            if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
                $(this).addClass('complete');
                $(this).find('.letter').each(function(index) {
                    $(this).delay((index * 100)).animate({ opacity: 1 }, 500);
                });
            }
        });
    }

    if ($(window).width() < 768) {
        if ($('.section_events ul, .section_mentorship .three_column').length > 0) {
            $('.section_events ul, .section_mentorship .three_column').addClass('owl-carousel');
            $('.section_events ul, .section_mentorship .three_column').owlCarousel({
                items: 1,
                // singleItem: true,    
                dots: true,
                // singleItem:true, 
                margin: 50
            });
        }
    }

        if ($('.section_mentorship .three_column.mentorCarousel').length > 0) {
            $('.section_mentorship .three_column.mentorCarousel').addClass('owl-carousel');
            $('.section_mentorship .three_column.mentorCarousel').owlCarousel({
                items: 1,
                // singleItem: true,    
                nav: true,
                dots: false,
                // singleItem:true, 
                margin: 50,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });
        }
        if($('.tabs').length > 0)
        {
            $('.tabs li a').on('click', function(e){
                e.preventDefault();
                var eleIndex = $(this).parent('li').index();
                $(this).parent('li').addClass('active').siblings('li').removeClass('active');
                if(winWidth > 1024)
                {
                    $('.tabsContent .tab').fadeOut(300).eq(eleIndex).delay(350).fadeIn(500);
                }
                else if(winWidth < 1025)
                {
                    $('.tabsContent .tab').slideUp(300).eq(eleIndex).delay(350).slideDown(500);
                }
            })
        }

        /** Appending a span for scroll down arrow starts **/
        if($(".scrollDownHolder").length) {
            $(".scrollDownHolder .scrollDown").wrap("<div style='overflow: hidden;'></div>");
            
        }
        /** Appending a span for scroll down arrow ends **/
    


});

// if IE browser append IE class to body

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
{
    $('body').addClass('isIE');


}

//Global Vars Starts here
var homePage = 'homePage';
var pgBody = $('body')
var bodyId = pgBody.attr('id')
//Global Vars Ends here


var homeScreenAnimation = new TimelineMax();
var introTextAnim = new TimelineMax();
var lineAnimation, introTextLines;
//Intro Text Animation
function introTextSet(section) {
    if (!mobile) {
        lineAnimation = $(section).find('.introText').find('.line');
        introTextLines = $(section).find('.introText').find('p');
        $(section).find('.textGrad').removeClass('animate');
        TweenMax.set(lineAnimation, { height: 0 });
        TweenMax.set($(introTextLines), { x: -1000 });
    }
}

function introtextAnimate(section) {
    if (!mobile) {
        introTextAnim.to($(section).find('.introText').find('.line'), 0.6, { height: $(section).find('.introText').outerHeight(), ease: Power1.easeInOut })
        for (var inl = 0; inl < $('.introText p').length; inl++) {
            introTextAnim.to($(section).find('.introText').find('p').eq(inl), 0.4, { x: 0, ease: Power1.easeInOut }, "-=0.3")
            if (inl == $('.introText p').length - 1) {
                setTimeout(function() { $(section).find('.textGrad').addClass('animate') }, 800);
            }
        }
    }
}
var svgLetterStroke, svgLetterImg, svgLetterImgLayer;

// function svgLetterSet(section) {
//     if (!mobile) {
//         // svgLetterStroke = $(section).find('.svgLetterBox').find('.fontLayer');
//         // svgLetterImg = $(section).find('.svgLetterBox').find('image');
//         // svgLetterImgLayer = $(section).find('.svgLetterBox').find('.imgLayer');

//         // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
//         // TweenMax.set(svgLetterImg, { opacity: 0 });

//         // svgLetterStroke = $('.strokefill');

//         // svgLetterChild  = svgLetterStroke.parents('svg').find('.g').children();
//         // svgLetterStroke.parents('svg').find('.g').children().css({opacity: 0})
//         // svgLetterStroke.parents('svg').find('.g').children(':last-child').css({opacity: 1,fill: 'none'})
//         // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
//         // TweenMax.set(svgLetterStroke, { 'stroke-dasharray': 1250 });

//         $(section).find('.child').css({ opacity: 0 });
//         $(section).find('.child:last-child').css({ opacity: 1 }).attr('fill', 'none');
//         TweenMax.set($(section).find('.child:last-child'), { strokeDashoffset: 1250 });
//         TweenMax.set($(section).find('.child:last-child'), { 'stroke-dasharray': 1250 });
//     }
// }

// function svgLetterAnimate(section) {
//     if (!mobile) {
//         // homeScreenAnimation.to(svgLetterStroke, 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImg, 0.4, { opacity: 1, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImgLayer, 0.4, { opacity: 1, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImgLayer, 0.4, { 'fill-opacity': 1, ease: Power1.easeInOut }, "0.6");

//         homeScreenAnimation.to($(section).find('.child:last-child'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut })


//         homeScreenAnimation.to($(section).find('.child:last-child'), 0.05, { fill: 'none', ease: Power1.easeInOut });
//         homeScreenAnimation.call(function() {
//             TweenMax.to($(section).find('.svgLetterBox').find('defs').find('.removeStroke'), 0.1, { 'stroke-width': 0, ease: Power1.easeInOut }, "-=0.1");
//             TweenMax.to($(section).find('.svgLetterBox').find('.child:last-child'), 0.1, { 'stroke-width': 0, ease: Power1.easeInOut }, "-=0.1");
//         });
//         homeScreenAnimation.to($(section).find('image.child'), 0.4, { opacity: 1, ease: Power1.easeInOut }, "-=0.3");
//     }
// }

//website Initial Animations 


function headerSet() {
    TweenMax.set(navIconHolder, { y: -100 });
    TweenMax.set(CGlogo, { y: -100 });
    TweenMax.set($(siteSubnavLi), { y: -100 });
}

function headerAnim() {
    homeScreenAnimation.to(navIconHolder, 0.6, { y: 0, ease: Power1.easeInOut }, "+=0.0")
    homeScreenAnimation.to(CGlogo, 0.4, { y: 0, ease: Power1.easeInOut }, "+s=0.05")
    homeScreenAnimation.to($(siteSubnavLi[0]), 0.4, { y: 0, ease: Power1.easeInOut }, "+=0.1");
    homeScreenAnimation.to($(siteSubnavLi[1]), 0.4, { y: 0, ease: Power1.easeInOut }, "-=0.05");
    $('.navigation > ul > li .svg').each(function() {
        $(this).html('<img loading="lazy" src="dist/images/navigation/' + $(this).attr('data-letter') + '.png" alt="" /><img loading="lazy" src="dist/images/navigation/' + $(this).attr('data-letter') + '_hover.png" alt=""/>')
    });
}

function setGlobalAnims() {
    TweenMax.set(sectionTitle, { height: 0 });
    TweenMax.set('#sectionTitle1', { height: $('#sectionTitle1 h2').outerHeight(true) });
    headerSet();
    TweenMax.set(hmvideo, { opacity: 0 });
    hmvideoholderWid = hmvideoholder.outerWidth();
    TweenMax.set(hmvideoholder, { width: 0, overflow: 'hidden' });

    TweenMax.set(squareMove, { opacity: 0 });
    TweenMax.set(cyclinderCircle, { height: 0 });
    TweenMax.set(cylinderHolder, { opacity: 0 });
    TweenMax.set(dragSliderHolder, { opacity: 0 });
    $('.gridAppear').find('circle').css({ opacity: 0 });

    introTextSet('.sec1');
    // svgLetterSet(".sec1");
    // TweenMax.fromTo(".videoScreenHolder", 0.4, {width:"0px"}, {width:pxtovw(880),  ease:Power0.easeNone})
    headerAnim();
    $('.sec1 .hmIntroContainer').fadeIn(500);
    homeScreenAnimation.to(sectionTitle, 0.6, { height: sectionTitle.find('h2').outerHeight(), ease: Power1.easeInOut });
    if ($('#f').length > 0) {
        hmletteranimF = bodymovin.loadAnimation({
            container: document.getElementById('f'),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "dist/json/letters/f.json"
        });
        hmletteranimF.addEventListener('DOMLoaded', function() {
            hmletteranimF.playSegments([[0, 60]], true);
            document.getElementById('f').addEventListener('mouseenter', function() {
                console.log(hmletteranimF.getDuration(true))
                hmletteranimF.playSegments([[61, 85]], true);
            });
            document.getElementById('f').addEventListener('mouseleave', function() {
                hmletteranimF.playSegments([[86, 120]], true);
            });
        });
    }
    if (mobile) {
        homeScreenAnimation.to(hmvideoholder, 0.6, { width: '110%', ease: Power1.easeInOut }, "-=1");
    } else {
        homeScreenAnimation.to(hmvideoholder, 0.6, { width: hmvideoholderWid, ease: Power1.easeInOut }, "-=1");
    }
    // homeScreenAnimation.to(hmvideoholder, 0.6, { width: pxtovw(hmvideoholderWid), ease: Power1.easeInOut }, "-=1");
    homeScreenAnimation.to(hmvideoholder, 0, { overflow: 'unset', ease: Power1.easeInOut }, "-=1");
    homeScreenAnimation.to(hmvideo, 0.6, { opacity: 1, ease: Power1.easeInOut }, "+=0");
    introTextAnim.call(function() {
        introtextAnimate('.sec1');
    }, null, null, 1);
    homeScreenAnimation.to(dragSliderHolder, 0.6, { opacity: 1, ease: Power1.easeInOut });
    homeScreenAnimation.to(squareMove, 0.6, { opacity: 0.49, ease: Power1.easeInOut });
    homeScreenAnimation.to(cylinderHolder, 0.6, { opacity: 1, ease: Power1.easeInOut });
    homeScreenAnimation.to(cyclinderCircle, 0.2, { height: pxtovw(200), ease: Power1.easeInOut });
    if ($('#plane').length > 0) {
        homeScreenAnimation.call(function() {
            if (secOnePlaneInit == '' || secOnePlaneInit == undefined) {
                secOnePlaneInit = bodymovin.loadAnimation(secOnePlane);

                secOnePlaneInit.addEventListener('DOMLoaded', function() {
                    secOnePlaneInit.playSegments([[0, 95]], true)
                });
                // secOnePlaneInit.play();
                secOnePlaneInit.addEventListener('complete', function() {
                    secOnePlaneInit.pause();

                });
            }
        }, null, null, 3);
    }
    setTimeout(function() {
        $('.gridAppear').find('circle').each(function() {
            var $ths = $(this);
            setTimeout(function() {
                $ths.css({ opacity: 1 });
            }, 500);
        });
    }, 1000);

    if ($('#circleMove').length != 0) {
        if (!mobile && !isInnerpage) {
            homeScreenAnimation.call(function() {
                $('#circleMove span').css({ transform: 'scale(1)' }).delay(500);
                setTimeout(function() { $('#circleMove').addClass('animate') }, 500);
                // $('#circleMove').delay(500).addClass('animate');
                // circleMoveAnim = bodymovin.loadAnimation(circleMoveAnimData);
                // circleMoveAnim.play();
                // circleMoveAnim.addEventListener('complete', function() {
                //     circleMoveAnim.pause();
                //     $('#squareMove').addClass('squareAnim');
                //     $('#circleMove').addClass('circleAnimStart');
                //     // circleMeshAnim = bodymovin.loadAnimation(circleMeshAnimData);
                //     // circleMeshAnim.addEventListener('DOMLoaded', function(){
                //     //     circleMeshAnim.play();
                //     // });
                //     // circleMeshAnim.addEventListener('complete', function(){
                //     //     circleMeshAnim.pause();
                //     // });
                // });
            }, null, null, 2);
        }
        if (mobile && !isInnerpage) {
            $('#circleMove').html('<img loading="lazy" src="dist/images/orange-circle.png" alt="" />')
        }
    }
    if (!isInnerpage) {
        $('.pageTitle').animate({ opacity: 1 }, 500);
    }
    if (!mobile && !isInnerpage) {
        var vidRepeat = setInterval(function() {
            // console.log(repeat);
            // vid.volume = 0;
            // vid.play();
            if (vid.readyState > 0) {
                // console.log(vid.currentTime);
                if (vid.ended && repeat != 1) {
                    // console.log(1);
                    vid.currentTime = 0;
                    vid.play();
                    repeat = 1;
                } else if (vid.ended && repeat == 1) {
                    // console.log(2);
                    vid.currentTime = 0;
                    clearInterval(vidRepeat);
                } else {
                    // console.log(3);
                    vid.play();
                }
                // if(vid.currentTime == 72.15)
                // {
                //     resetPlayer()
                // }
            }
        }, 100)

    }
    $('#sectionTitle1').css({opacity: 1});

    scrollAnimStart();
}

// Website Social Icons Starts Here
var socialIcons = $('.socialIcons');
var iconCircle = socialIcons.find('.iconCircle');
var iconPath = socialIcons.find('.iconPath');
var setDelay = 0;


TweenMax.set(socialIcons, { opacity: 0 });
TweenMax.set(iconPath, { scale: 0, rotation: 90, transformOrigin: "50% 50%" });


function startSocialAnims() {
    $('#social').css({ opacity: 1 });
    for (var i = 0; i < socialIcons.length; i++) {
        TweenMax.to($(socialIcons[i]), 1, { delay: setDelay - .1, opacity: 1 });
        // console.log(isInnerpage && !mobile);
        if (isInnerpage && !mobile) {
            TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: '#ffffff' });
            TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: '#ffffff' });
        }
        TweenMax.to($(iconCircle[i]), 1, { delay: setDelay, ease: Power3.easeIn, strokeDashoffset: 0 });
        TweenMax.to($(iconPath[i]), 0.7, { delay: setDelay, ease: Power3.easeIn, scale: 1 });
        setDelay = setDelay + 0.20;
    }
}
//Website Social Icons Ends Here


// Navigation Starts Here
var navIcon = $('#navIcon');

function onNavBtnClick() {
    var headHeigth = $('header').outerHeight();
    $('.navigation').css({ 'max-height': 'calc(100vh - ' + headHeigth + 'px)', 'margin-top': headHeigth });
    if ($('body').hasClass('navOpen')) {
        //Close Menu
        $('.navigation').fadeOut(100);
        if (isInnerpage) {
            $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        }

        setTimeout(function() {
            $('body').removeClass('navOpen reveal');
        }, 100)
        // TweenMax.to('.dots', 0.7, { width: pxtovw(4), ease: Power4.easeIn });
    } else {
        // TweenMax.to('.dots', 0.7, { width: pxtovw(64), ease: Power4.easeIn });
        $('.navigation').show(0);

        setTimeout(function() {
            $('body').addClass('navOpen reveal');
        }, 100)
        if (isInnerpage) {
            $('.logo svg .st0').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
            $('.logo svg .st1').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
        }
        // if (!isInnerpage && !mobile ) {
        //     // console.log(123)
        //     if($('body').attr('id') != 'homePage')
        //     {
        //         $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        //     }
        // }
    }
    // $('.navigation li').each(function() {
    //     $(this).find('.clickAnim').find('span').css({ background: $(this).find('.hoverAnim').attr('data-fill') });
    //     var eleId = 'id' + $(this).index();
    //     var eleVal = document.getElementById(eleId).getBBox();

    //     $(this).find('.clickAnim').css({
    //         top: ($('#' + eleId).offset().top + (eleVal.height / 2)),
    //         left: ($('#' + eleId).offset().left + (eleVal.width / 2))
    //     });
    //     $(this).find('.clickAnim').find('span').css({
    //         top: ($('#' + eleId).offset().top + (eleVal.height / 2)),
    //         left: ($('#' + eleId).offset().left + (eleVal.width / 2))
    //     });
    // })
}
var navLinks = document.getElementsByClassName("navLink");

function addColor() {
    $('.hoverAnim').each(function(index) {
        var
            squareStroke = $(this).find('g:nth-child(2)').find('g:nth-child(1)').find('g:nth-child(1)').find('path'),
            arrLineStroke = $(this).find('g:nth-child(2)').find('g:nth-child(2)').find('g:nth-child(1)').find('path:nth-child(2)'),
            arrPointStroke = $(this).find('g:nth-child(2)').find('g:nth-child(3)').find('g:nth-child(1)').find('path'),
            svgColor = $(this).attr('data-fill');
        $(this).find('g:nth-child(2)').find('g:nth-child(2)').find('g:nth-child(1)').find('path').attr('fill', svgColor).attr('id', 'id' + index)
        TweenMax.set(squareStroke, { stroke: svgColor });
        TweenMax.set(arrLineStroke, { stroke: svgColor });
        TweenMax.set(arrPointStroke, { stroke: svgColor });
        // .attr('stroke',$(this).attr('data-fill'))
    });
    $('.clickAnim span').each(function() {
        $(this).css({ background: $(this).attr('dta-fill') });
    });

}

function loadnavHoverAnimation(navLinks) {
    var nohover = navLinks.getAttribute('class').indexOf('nohover');
    if (nohover == -1) {
        var animation = bodymovin.loadAnimation({
            container: navLinks.getElementsByClassName("hoverAnim")[0],
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "dist/json/menuLinkHover.json"
        });

        animation.addEventListener("DOMLoaded", function() {
            addColor();
        });
        navLinks.getElementsByTagName('a')[0].addEventListener("mouseenter", function() {
            // navLinks.getElementsByTagName('span')[0].style.opacity = 0;
            animation.play();
        });
        navLinks.getElementsByTagName('a')[0].addEventListener("mouseleave", function() {
            animation.stop();
        });
    }

    $('.navigation li a').on('click', function(e) {
        e.preventDefault();
        $('.logo').fadeOut();
        var target = $(this).attr('href');
        if ($(this).attr('href') == 'services.html') {
            $('.navigation').addClass('revealServices reveal');
        }
        if ($(this).attr('href') == 'initiatives.html') {
            $('.navigation').addClass('revealInitiatives reveal');
        }
        if ($(this).attr('href') == 'businesshub.html') {
            $('.navigation').addClass('revealJoin reveal');
        }
        if ($(this).attr('href') == 'membership.html') {
            $('.navigation').addClass('revealMembership reveal');
        }
        if ($(this).attr('href') == 'about.html') {
            $('.navigation').addClass('revealAbout reveal');
        }

        // $(this).parents('li').find('.clickAnim').css({
        //         top: '-100%',
        //         left: '-100%',
        //         width: '50vw',
        //         height: '50vw',
        //         zIndex: '10'
        //     })
        //     .find('span').css({
        //         top: '-100%',
        //         left: '-100%',
        //         width: '50vw',
        //         height: '50vw'
        //     });
        $('.navIconHolder').css({ transform: 'translate(-200% , 0)' });

        setTimeout(function() { document.location.href = target }, 1000);


        // top: ( $(this).find('.hoverAnim').find('svg').offset().top + 45 + (eleVal.height / 2)), 
        //     left: ($(this).find('.hoverAnim').find('svg').offset().left + 93 + (eleVal.width / 2))  });
    });
    // $('.navigation a').on('click',function(e){
    //     e.preventDefault();
    // });
}

for (var i = 0; i < navLinks.length; i++) {
    loadnavHoverAnimation(navLinks[i]);
}

navIcon.on('click', onNavBtnClick);


function getPer2Px(per) {
    return ((document.getElementsByTagName('body')[0].offsetWidth / 100) * per);
}
// Navigation Ends Here

//Cyclinder Starts Here
var lineTL = new TimelineMax();
// lineTL.to('#cyclinderHolder', 1, { css: { scale: 1, rotation: -138 }, ease: Quad.easeInOut })
lineTL.to('.cyclinderCircle', 0.8, { height: pxtovw(200), ease: Power4.easeInOut });

//Cyclinder Ends Here



//Body Movin Animations Starts Here
var introData = {
    container: document.getElementById('intro'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/loader.json', // the path to the animation json
};

function introComplete() {

    // if(mobile)
    // {
    //     $('#intro').append('<p class="mobile">Mobile version of this website is coming soon. Meanwhile visit the site on desktop</p>')
    //     setTimeout(function(){
    //         $('#intro p').css({bottom: '35%'})
    //         $('#intro span').fadeOut(500);
    //     }, 500);
    // }
    // else
    // {
    introInit.stop();

    $('#intro').fadeOut('', function() { introInit.destroy(); });

    if (bodyId == homePage) {

        setGlobalAnims();
        startSocialAnims();
        //playHomeAnims();
    }
    // }
}
// setTimeout(function(){
//     $('.spinnerContainer').fadeOut(300);
if (localStorage.getItem('popState') != 'shown') {
    $(".popup-fixed").removeClass('hide');
}

$(".popup-fixed .got-it-button").click(function() {
    localStorage.setItem('popState', 'shown');
    $('.popup-fixed').fadeOut();
});

if (localStorage.getItem('visitied') == null || localStorage.getItem('visitied') == undefined || localStorage.getItem('visitied') == '') {
    localStorage.setItem('visitied', '10');
    setTimeout(function() {
        if ($('#intro').length) {
            introInit = bodymovin.loadAnimation(introData);
            introInit.addEventListener('DOMLoaded', function() {
                $('#intro').addClass('active');
                introInit.play();
            });
            introInit.addEventListener('complete', introComplete);
        }
    }, 350)
} else {
    $('#intro').fadeOut();
    setGlobalAnims();
    startSocialAnims();
}

// setTimeout(function() {
//     if ($('#intro').length) {
//         introInit = bodymovin.loadAnimation(introData);
//         introInit.addEventListener('DOMLoaded', function() {
//             $('#intro').addClass('active');
//             introInit.play();
//         });
//         introInit.addEventListener('complete', introComplete);
//     }
// }, 350)

// }, 500)
circleMeshAnimData = {
    container: document.getElementById('circleMesh'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/circle-mesh.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

fold2Illustration = {
    container: document.getElementById('illustration'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/illustration.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};


secThreeDotMesh = {
    container: document.getElementById('dotMesh'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    // path: 'dist/json/arrow-mesh.json', // the path to the animation json
    path: 'dist/json/down-arrow-v3.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};
secOnePlane = {
    container: document.getElementById('plane'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/plane.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};


circleMoveAnimData = {
    container: document.getElementById('circleMove'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/circle-move.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

scrollDownAnimData = {
    container: document.getElementById('scrollDown'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/arrow-down.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};



secFourWhyJoin = {
    container: document.getElementById('whyJoin'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/hm_whyJoin.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};
// secFourElementAnim = {
//     container: document.getElementById('elementAnim'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'dist/json/sec4ElementAnim.json', // the path to the animation json
//     rendererSettings: {
//         scaleMode: 'noScale',
//         clearCanvas: true,
//         progressiveLoad: true,
//         hideOnTransparent: true
//     }
// };

secFiveGetStarted = {
    container: document.getElementById('getStarted'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/getStarted.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

// secFiveElementAnim = {
//     container: document.getElementById('sec5ElementAnim'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'dist/json/sec5ElementAnim.json', // the path to the animation json
//     rendererSettings: {
//         scaleMode: 'noScale',
//         clearCanvas: true,
//         progressiveLoad: true,
//         hideOnTransparent: true
//     }
// };

function scrollAnimStart() {
    // if (!isInnerpage) {
    //     scrollDownAnim = bodymovin.loadAnimation(scrollDownAnimData);
    // }
    // $('.scrollDownHolder').find('path').attr('stroke','#fffff');

    var diff = isInnerpage ? 137 : 92;
    homeScreenAnimation.to('.scrollDownHolder', 1.5, {
        // top: ($(window).outerHeight() - diff) + 'px',
        width: '15px',
        // overflow: 'visible',
        ease: Power4.easeIn,
        onComplete: function() {
            $('.scrollDownHolder').css({ overflow: 'visible' }).find('.scrollDown').addClass('animate');
            $(".scrollDownHolder").fadeIn(200);
            // if (!isInnerpage) {
            //     scrollDownAnim.play();
            // }
        }
    }, "-=1");

    

}



//Body Movin Animations Ends Here


//Video Drag Slider Starts here
if ($('#dragSlider').length > 0) {
    var rangeslide = $('#dragSlider').rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {

        },

        // Callback function
        onSlide: function(position, value) {



            // var translateEle = 'translate(-' + (30 - value) + 'px,' + (30 - value) + 'px)';
            // var translateEleSq = 'translate(-' + (30 - value) + 'px, -' + (30 - value) + 'px)';


            // // TweenMax.to($('.circleMoveHolder'), 0.4, { transform: 'translate(-'+ (30 - value) +'px,'+ (30 - value)+'px)', ease: Power3.easeInOut });
            // // TweenMax.to($('.squareMoveHolder'), 0.4, { transform: 'translate(-'+ (30 - value) +'px, -'+ (30 - value)+'px)', ease: Power3.easeInOut });
            // $('.circleMoveHolder, .squareMoveHolder').css({ transform: translateEle });
            // $().css({ transform: translateEleSq});
        },

        // Callback function
        onSlideEnd: function(position, value) {

            if (value == 0) {
                $('.rangeslider__handle').addClass('change');
                $('.video').css({
                    position: 'fixed',
                    width: $('.videoScreenHolder').outerWidth(),
                    height: $('.videoScreenHolder').outerHeight(),
                    top: ($('.videoScreenHolder').offset().top),
                    left: ($('.videoScreenHolder').offset().left),
                    'z-index': 15
                })
                vid.pause();
                vid.currentTime = 0;
                setTimeout(function() {
                    $('.video').css({
                        '-webkit-transition': 'all 0.4s ease-in-out',
                        '-khtml-transition': 'all 0.4s ease-in-out',
                        '-moz-transition': 'all 0.4s ease-in-out',
                        '-ms-transition': 'all 0.4s ease-in-out',
                        '-o-transition': 'all 0.4s ease-in-out',
                        'transition': 'all 0.4s ease-in-out'
                    })
                    $('#plane').css({ zIndex: 1 });
                    $('.video').css({
                        width: winWidth,
                        height: $(window).height(),
                        top: 0,
                        left: 0,
                        background: '#000'
                    }).find('video').attr('src', 'dist/video/teaser.mp4').css({ opacity: 1, height: ($(window).height() - 10), width: (winWidth - 10) }).attr('controls', '').prop('muted', false);
                    $('header,#sectionTitle1,#social,.scrollDownHolder,.pageTitle,#fp-nav').fadeOut();
                    $('.video .close').fadeIn();
                    if (vid.readyState > 0) {
                        // setTimeout(function(){
                        // $('#teaserD').removeAttr('muted').attr('controls','');
                        vid.volume = 1;
                        // vid.prop('muted', false);
                        vid.play();
                        // vid.attr('controls','');
                        // },500)
                    }
                    $(document).on('click', '.video .close', function() {
                        $('.video').css({
                            width: $('.videoScreenHolder').outerWidth(),
                            height: $('.videoScreenHolder').outerHeight(),
                            top: ($('.videoScreenHolder').offset().top),
                            left: ($('.videoScreenHolder').offset().left),
                            background: 'none',
                            'z-index': 'unset'
                        })
                        $('.video video').css({ width: 'auto', height: '100%' }).removeAttr('controls').attr('src', 'dist/video/teaser-thumb.mp4').prop('muted', true);
                        $('header,#sectionTitle1,#social,.scrollDownHolder,.pageTitle,#fp-nav').fadeIn();
                        $('.video .close').fadeOut();
                        if (vid.readyState > 0) {
                            vid.currentTime = 0;
                            vid.volume = 0;
                            vid.play();
                        }
                        rangeslide.val(30).change();
                        $('.rangeslider__handle').removeClass('change');
                        $('#plane').css({ zIndex: 2 });
                    })
                }, 100);
            } else {
                // $('.circleMoveHolder, .squareMoveHolder').css({ transform: 'translate(0, 0)' });
                rangeslide.val(30).change();
                $('.rangeslider__handle').removeClass('change');
            }

        }
    });



    var dSHolder = $('.dragSliderHolder');
    var dragLetters = $('#dragText').find('span');
    var appendLetter;
    var endLetter;

    var letterDelay = 0;
    var tn;
    var cur;

    function animateDragLetters(pos, letter) {
        for (var i = 0; i < dragLetters.length; i++) {
            TweenMax.to($(dragLetters[i]), 0.4, { delay: letterDelay, ease: Power3.easeInOut, y: pos });
            TweenMax.to($(dragLetters[i]), 0.2, { opacity: 0 });
            appendLetter = $(dragLetters[i]).attr(letter);
            $(dragLetters[i]).html(appendLetter);
            TweenMax.to($(dragLetters[i]), 0.2, { opacity: 1 });


            letterDelay = letterDelay + 0.1;

            //if(letterDelay)
        }
    }
}


/*function setDSTBot(){
    animateDragLetters(80, 'data-endLetter');
}*/


$(dSHolder).on('mouseenter', function() {
    var dragLength = $('.rangeslider--vertical').outerHeight() - 25;
    // if (winWidth == 1440 || winWidth == 1366) {
    //     dragLength = 55;
    // }
    animateDragLetters(dragLength, 'data-endLetter');
    letterDelay = 0;
}).on('mouseleave', function() {
    animateDragLetters(0, 'data-startLetter');
    letterDelay = 0;
});
$(dSHolder).find($('.rangeslider__fill:after')).mouseenter(function() {

    event.preventDefault()
});
//Video Drag Slider Starts here

// function frameLooper(sect) {
//     if (array.length > 0) {
//         document.getElementById(sect).innerHTML += array.shift();
//         loopTimer = setTimeout(function() { frameLooper(sect) }, 1); /* change 70 for speed */
//     } else {
//         clearTimeout(loopTimer);
//     }
//     if (array.length == 0) {
//         $('#' + sect).next('a').css({ opacity: 1 });
//     }
// }

function changeHeader (index){
    if(index == 0)
    {
        $('.pageTitle').removeClass('toggle');
        $('body').addClass('whiteHeader');
        $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.4, { ease: Power3.easeIn, stroke: '#fff' });
                TweenMax.to($(iconPath[i]), 0.4, { ease: Power3.easeIn, fill: '#fff' });
            }
        }
        $('.scrollDownHolder').removeClass('onWhite');
        $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#fff');
        $('#fp-nav').fadeOut('300');
        $('.free-consultation-floating-wrapper').removeClass('complete');
    }
    else
    {
        $('.pageTitle').addClass('toggle');
        $('body').removeClass('whiteHeader');
        $('.logo svg .st0').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        $('.logo svg .st1').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        $('header, #sectionTitle1, .pageTitle').addClass('resize');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.4, { ease: Power3.easeIn, stroke: $('#social').attr('data-fill') });
                TweenMax.to($(iconPath[i]), 0.4, { ease: Power3.easeIn, fill: $('#social').attr('data-fill') });
            }
        }
        $('.scrollDownHolder').addClass('onWhite');
        $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#562359');
        $('#fp-nav').fadeIn('300');
        $('.free-consultation-floating-wrapper').addClass('complete');
    }
}
function changeFooter(index){
    if((page_name == 'businesshub.html' && index >= ($('.fp-section').length-2))  || (page_name != 'businesshub.html' && index >= ($('.fp-section').length-1)))
    {
        $('.free-consultation-floating-wrapper').removeClass('complete');
    }
    else
    {
        $('.free-consultation-floating-wrapper').addClass('complete');
    }
    if(index == ($('.fp-section').length-1))
    {
        $('#social').fadeOut(300);
        $('.scrollDownHolder').addClass('showTop');
    }
    else
    {
        $('#social').fadeIn(300);
        $('.scrollDownHolder').removeClass('showTop');
    }
}

function loadInitiativesBanner(){
    //Initiatives Banner animations

    var initiativesData = {
        container: document.getElementById('initiativeBanner'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'dist/json/initiatives.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    };

    initiativesAnim = bodymovin.loadAnimation(initiativesData);
    initiativesAnim.addEventListener('DOMLoaded', function() {
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
            $('.fixedBanner .loader').remove();
        });
        $('#initiativeBanner').animate({ opacity: 1 }, 500);
        $('.dots_bg > div').css({ opacity: 1 })
        $('.bannerIconsWrapper svg').each(function() {
            // $(this).parent().animate({ opacity: 1}, 500);

            // $(this).css({opacity: 0});
            TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
            TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

        });
        $('.bannerIconsWrapper').addClass('complete')
        $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
        setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
        setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
        $('#sectionTitle1').css({opacity: 1})
        // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
        // })
    });
    //Initiatives Banner animations
}
function loadServicesBanner() {
     servicesBG2 = {
        container: document.getElementById('servicesBg2'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'dist/json/services-banner-btm.json', // the path to the animation json
        rendererSettings: {

            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    };
    if ($('body').attr('id') == 'services') {
        setTimeout(function() {
            $('.bg2').hide();
            servicesBG2Init = bodymovin.loadAnimation(servicesBG2)
            servicesBG2Init.addEventListener('DOMLoaded', function() {
                $('.bg2').fadeIn();
                // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
            });
        }, 3400);
    }
}
//Fullpage scroll Starts here
if ($('#fullpage').length) {
    var delay = 100; //milliseconds
    var timeoutId;
    var animationIsFinished = false;


    $('.sectionHolder .desc').each(function(index, el) {
        $(this).find('p').attr('data-text', $(this).find('p').text())
    });


    if (!mobile && !isInnerpage) {
        $('#fullpage').fullpage({
            navigation: true,
            setLockAnchors: false,
            anchors: ['home', 'club', 'initiative', 'join', 'stop', ''],
            afterRender: function() {
                $('#fp-nav').fadeIn();
            },
            onLeave: function(origin, destination, direction) {

                // destination.index;
                $('#sectionTitle1 .secTitleSlide').animate({ top: -($('#sectionTitle1 .secTitleSlide h2').outerHeight(true) * destination.index) })
                var curTime = new Date().getTime();

                //animating my element
                $('#element').addClass('animate');

                clearTimeout(timeoutId);

                timeoutId = setTimeout(function() {
                    animationIsFinished = true;
                    if (!$('#plane').hasClass('complete')) {
                        $('#plane').addClass('complete')
                        if (secOnePlaneInit != undefined) {
                            secOnePlaneInit.playSegments([[95, 550]], true)
                        }
                    }
                    fullpage_api.moveTo(destination.index + 1);
                }, delay);
                if (!mobile) {
                    if (destination.index != 0) {
                        $('header, #sectionTitle1, .pageTitle').addClass('resize');
                        // $('#sectionTitle1').addClass('resize');
                    } else {
                        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
                        // $('#sectionTitle1').removeClass('resize');
                    }
                }
                var illustrationFlag = 0;
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {
                    // $('.cyclinderCircle').css({ height: pxtovw(200) });
                    // var plLft, plTp
                    // if (winWidth == 1366) {

                    //     plLft = ($('#illustration').offset().left + 190);
                    //     plTp = ($('#illustration').offset().top - 160)
                    // } else if (winWidth == 1440) {

                    //     plLft = ($('#illustration').offset().left + 260);
                    //     plTp = ($('#illustration').offset().top - 150)
                    // } else if (winWidth == 1280) {

                    //     plLft = ($('#illustration').offset().left + 180);
                    //     plTp = ($('#illustration').offset().top - 130)
                    // } else {

                    //     plLft = ($('#illustration').offset().left + 260);
                    //     plTp = ($('#illustration').offset().top - 200)
                    // }
                    // $('#plane').css({ left: plLft, top: plTp });




                    if (fold2IllustrationInit == undefined) {

                        illustrationFlag = 1;
                        fold2IllustrationInit = bodymovin.loadAnimation(fold2Illustration);
                    }
                    fold2IllustrationInit.play();

                    // svgLetterSet('.sec2');
                    introTextSet('.sec2');
                    $('#sec2descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });
                    $('#section2 .bgSquare').css({ width: 0, height: 0 });
                } else {
                    if (fold2IllustrationInit != undefined) {
                        fold2IllustrationInit.stop();
                    }
                }

                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                    // svgLetterSet('.sec3');
                    introTextSet('.sec3');
                    if (secThreeDotMeshInit == undefined) {
                        secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
                        secThreeDotMeshInit.play();
                        secThreeDotMeshInit.addEventListener('complete', function() {
                            secThreeDotMeshInit.pause();
                        });
                    } else {
                        secThreeDotMeshInit.play();
                        secThreeDotMeshInit.addEventListener('complete', function() {
                            secThreeDotMeshInit.pause();
                        });
                    }
                }
                if (destination.index == 3 && !$('.sec4').hasClass('complete')) {
                    // if ($('.sec4').hasClass('complete')) {
                    // secFourElementAnimInit.play();
                    // secFourWHyJoinInit.play();
                    // }
                    // TweenMax.set($('#section4 .bgSquare'), { });
                    TweenMax.set($('#section4 .grid'), { opacity: 0 });
                    // svgLetterSet('.sec4');
                    introTextSet('.sec4');
                    // $('#sec4descAnim').html('').next('a').css({ opacity: 0 });
                    $('#sec4descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });

                }
                if (destination.index == 3 && $('.sec4').hasClass('complete')) {
                    // secFourElementAnimInit.play();
                    secFourWHyJoinInit.play();
                }
                if (destination.index == 3) {
                    // $('#back2Top').fadeOut().siblings('#scrollDown').delay(500).fadeIn();
                }

                if (destination.index == 4) {
                    $('#social').fadeIn(500);
                    // $('#back2Top').fadeOut().siblings('.scrollDown').delay(500).fadeIn();
                    // $('#scrollDown').fadeOut();
                    // $('#back2Top').fadeIn();
                }

                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                    // secFourElementAnimInit.stop();
                    if (secFourWHyJoinInit != undefined) {
                        secFourWHyJoinInit.stop();
                    }

                    TweenMax.set($('#section5 .contCircle'), { transform: 'scale(0)' });
                    TweenMax.set($('#section5 .grid .rect'), { width: 0 });

                    // svgLetterSet('.sec5');
                    introTextSet('.sec5');
                    // $('#sec5descAnim').html('').next('a').css({ opacity: 0 });
                    $('#sec5descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });
                    // $('#social').removeAttr('style');
                }
                if (destination.index == 4) {
                    $('#social').fadeIn(500);
                }
                if (destination.index == 5) {
                    // $('.scrollDown').fadeOut().siblings('#back2Top').delay(500).fadeIn();
                    // $('#social').fadeOut(500);
                    $('#social').fadeOut(500);
                }
                return animationIsFinished;
            },
            afterLoad: function(origin, destination, direction) {
                if (destination.index == 0 && $('.sec1').hasClass('complete')) {
                    if (vid.readyState > 0 && repeat != 1) {
                        vid.play();
                    }
                }
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {
                    $('.sec2').addClass('complete');
                    var hmletteranimB = bodymovin.loadAnimation({
                        container: document.getElementById('b'),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "dist/json/letters/b.json"
                    });
                    hmletteranimB.addEventListener('DOMLoaded', function() {
                        hmletteranimB.playSegments([[0, 60]], true);
                        document.getElementById('b').addEventListener('mouseenter', function() {
                            console.log(hmletteranimB.getDuration(true))
                            hmletteranimB.playSegments([[61, 85]], true);
                        });
                        document.getElementById('b').addEventListener('mouseleave', function() {
                            hmletteranimB.playSegments([[86, 120]], true);
                        });
                    });


                    // svgLetterAnimate('.sec2');
                    introtextAnimate('.sec2');
                    $('#section2 .bgSquare').removeAttr('style')
                    // var sect = 'sec2descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    // }
                    setTimeout(function() { $('#sec2descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 }) }, 1500);
                    setTimeout(function() {
                        if (secThreeDotMeshInit == '' || secThreeDotMeshInit == undefined) {
                            secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
                        }
                    }, 1800)
                }
                if (destination.index == 1 && $('.sec2').hasClass('complete')) {
                    fold2IllustrationInit.play();
                }
                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                    $('.sec3').addClass('complete');
                    // svgLetterAnimate('.sec3');
                    var hmletteranimI = bodymovin.loadAnimation({
                        container: document.getElementById('i'),
                        renderer: "svg",
                        loop: false,
                        autoplay: true,
                        path: "dist/json/letters/i.json"
                    });
                    hmletteranimI.addEventListener('DOMLoaded', function() {
                        hmletteranimI.playSegments([[0, 60]], true);
                        document.getElementById('i').addEventListener('mouseenter', function() {
                            console.log(hmletteranimI.getDuration(true))
                            hmletteranimI.playSegments([[61, 85]], true);
                        });
                        document.getElementById('i').addEventListener('mouseleave', function() {
                            hmletteranimI.playSegments([[86, 120]], true);
                        });
                    });

                    // letteranimI.addEventListener('DOMLoaded', function() {
                    //     console.log(letteranimI.getDuration(true));
                    //     letteranimI.playSegments([[0,180]],true);
                    // });
                    // document.getElementById('i').addEventListener("mouseenter", function() {
                    //     letteranimI.playSegments([[171,250]],true);
                    // });
                    // document.getElementById('i').addEventListener("mouseleave", function() {
                    //     letteranimI.playSegments([[250,171]],true);
                    // });

                    introtextAnimate('.sec3');
                    $('.hidebox .box').css({ margin: 0 });
                    $('.dotMesh .box').css({ width: pxtovw(175) })
                    setTimeout(function() { $('.dotMesh .box').css({ width: pxtovw(70), right: pxtovw(35, 1) }) }, 400);
                    setTimeout(function() { $('.dotMesh .box').addClass('squareAnim') }, 1200);
                    $('.initiatives .initBox:nth-child(1)').css({ transform: 'translateY(0)' });
                    setTimeout(function() { $('.initiatives .initBox:nth-child(2)').css({ transform: 'translateY(0)' }); }, 100);
                    setTimeout(function() { $('.initiatives .initBox:nth-child(3)').css({ transform: 'translateY(0)' }); }, 200);

                }
                if (destination.index == 3 && !$('.sec4').hasClass('complete')) {
                    $('.sec4').addClass('complete');
                    // svgLetterAnimate('.sec4');
                    var hmletteranimJ = bodymovin.loadAnimation({
                        container: document.getElementById('j'),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "dist/json/letters/j.json"
                    });
                    hmletteranimJ.addEventListener('DOMLoaded', function() {
                        hmletteranimJ.playSegments([[0, 60]], true);
                        document.getElementById('j').addEventListener('mouseenter', function() {
                            console.log(hmletteranimJ.getDuration(true))
                            hmletteranimJ.playSegments([[61, 85]], true);
                        });
                        document.getElementById('j').addEventListener('mouseleave', function() {
                            hmletteranimJ.playSegments([[86, 120]], true);
                        });
                    });

                    introtextAnimate('.sec4');
                    //  TweenMax.set($('#section4 .bgSquare'),{transform: 'scale(0)'});
                    // TweenMax.set($('#section4 .grid'),{opacity: 0});


                    TweenMax.to($('#section4 .bgSquare'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    TweenMax.to($('#section4 .grid'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    setTimeout(function() {
                        if (secFourWHyJoinInit == '' || secFourWHyJoinInit == undefined) {
                            $('#whyJoin').css({ opacity: 0 });
                            setTimeout(function() {
                                // secFourElementAnimInit = bodymovin.loadAnimation(secFourElementAnim);
                                // secFourElementAnimInit.addEventListener('DOMLoaded', function() {
                                // secFourElementAnimInit.play();
                                secFourWHyJoinInit = bodymovin.loadAnimation(secFourWhyJoin);
                                secFourWHyJoinInit.addEventListener('DOMLoaded', function() {
                                    secFourWHyJoinInit.play();
                                    $('#whyJoin').animate({ opacity: 1 }, 500);
                                })
                                // })
                            }, 500);
                        }
                    }, 1000);


                    // secFourElementAnimInit.addEventListener('complete', function() {
                    //     secFourWHyJoinInit.pause();
                    // });


                    // var sect = 'sec4descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    //     $('#' + sect).html(string).next('a').css({ opacity: 1 });
                    // }
                    $('#sec4descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 });

                }
                // if (destination.index == 3 && $('.sec4').hasClass('complete')) {
                //     secFourWHyJoinInit.play();
                //     secFourElementAnimInit.play();
                // }
                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                    $('.sec5').addClass('complete');
                    // svgLetterAnimate('.sec5');
                    var hmletteranimS = bodymovin.loadAnimation({
                        container: document.getElementById('s'),
                        renderer: "svg",
                        loop: false,
                        autoplay: true,
                        path: "dist/json/letters/s.json"
                    });
                    hmletteranimS.addEventListener('DOMLoaded', function() {
                        hmletteranimS.playSegments([[0, 60]], true);
                        document.getElementById('s').addEventListener('mouseenter', function() {
                            console.log(hmletteranimS.getDuration(true))
                            hmletteranimS.playSegments([[61, 85]], true);
                        });
                        document.getElementById('s').addEventListener('mouseleave', function() {
                            hmletteranimS.playSegments([[86, 120]], true);
                        });
                    });
                    introtextAnimate('.sec5');

                    secFiveGetStartedInit = bodymovin.loadAnimation(secFiveGetStarted);
                    // secFiveGetStartedInit.play();

                    $('#getStarted').css({ opacity: 0 });
                    secFiveGetStartedInit.addEventListener('DOMLoaded', function() {
                        secFiveGetStartedInit.playSegments([[0, 70]], true);
                        // secFiveGetStartedInit.play();

                        $('#getStarted').animate({ opacity: 1 }, 500);
                        // secFiveElementAnimInit = bodymovin.loadAnimation(secFiveElementAnim);
                        // secFiveElementAnimInit.addEventListener('DOMLoaded', function() {
                        //     secFiveElementAnimInit.play();
                        // })
                    })
                    // var sect = 'sec5descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    //     $('#' + sect).html(string).next('a').css({ opacity: 1 });
                    // }
                    $('#sec5descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 });
                }
                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                    secFiveGetStartedInit.play();
                    // secFiveElementAnimInit.play();
                }
            },

            //options here
            //autoScrolling:true,
            //scrollHorizontally: true
        });
    }
    if(!mobile && isInnerpage)
    {
        var anchorsObj = [];

        if(page_name == 'initiatives.html')
        {
            anchorsObj = ['', 'events', 'mentorship', 'battleground',''];
        }
        if(page_name == 'businesshub.html')
        {
            anchorsObj = ['', 'intro', 'usp', 'network','benefits','',''];
        }
        if(page_name == 'services.html')
        {
            anchorsObj = [];
        }



        $('#fullpage').fullpage({
            navigation: true,
            setLockAnchors: false,
            anchors: anchorsObj,
            afterRender: function(){
                if(page_name == 'initiatives.html')
                {
                    loadInitiativesBanner();
                }
                if(page_name == 'services.html')
                {
                    $('.clmn_icon').html();
                    introTextSet($('#services .content'));
                    loadServicesBanner();
                }  
            },
            onLeave: function(origin, destination, direction) {
                $('#sectionTitle1 .secTitleSlide').animate({ top: -($('#sectionTitle1 .secTitleSlide h2').outerHeight(true) * destination.index) })

                changeHeader(destination.index);
                changeFooter(destination.index);

                if (destination.index == 0 && !$('.sec1').hasClass('complete')) {

                }
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {

                }

                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                 
                }
                if (destination.index == 3 && !$('.sec4').hasClass('complete')) {
                   
                }

                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                 
                }
                if(page_name == 'businesshub.html') {
                    var whichSec =  '.sec' + (destination.index +1)
                    if(!$(whichSec).hasClass('complete'))
                    {
                        introTextSet(whichSec);
                    }
                }
            },
            afterLoad: function(origin, destination, direction) {
                var whichSec =  '.sec' + (destination.index +1)

                if($('.slideUp').length > 0)
                {
                    $(whichSec).find('.slideUp').each(function(index){
                        var delay = index * 0.10;
                            // $(this).css({'text-indent': 0, 'transition-delay': delay+'s'});
                        $(this).addClass('complete').css({'transition-delay': delay+'s'})
                    });
                }
                if(page_name == 'businesshub.html') {
                    
                    if(destination.index == 1 && !$('.sec2').hasClass('complete'))
                    {
                        if (!$('#why_j').hasClass('complete')) {
                            $('#why_j').addClass('complete')
                            introtextAnimate('.sec2')
                            whyJoinJAnim.playSegments([[0, 60]], true);
                        }
                        document.getElementById('why_j').addEventListener('mouseenter', function() {
                            console.log(whyJoinJAnim.getDuration(true))
                            whyJoinJAnim.playSegments([[60, 80]], true);
                        });
                        document.getElementById('why_j').addEventListener('mouseleave', function() {
                            whyJoinJAnim.playSegments([[80, 100]], true);
                        });
                        introtextAnimate(whichSec);
                    }
                    if(destination.index == 2 && !$('.sec3').hasClass('complete'))
                    {
                        if (!$('#why_f').hasClass('complete')) {
                            $('#why_f').addClass('complete')
                            introtextAnimate('.sec3')
                            whyJoinFAnim.playSegments([[0, 100]], true);
                        }
                        document.getElementById('why_f').addEventListener('mouseenter', function() {
                            console.log(whyJoinFAnim.getDuration(true))
                            whyJoinFAnim.playSegments([[120, 160]], true);
                        });
                        document.getElementById('why_f').addEventListener('mouseleave', function() {
                            whyJoinFAnim.playSegments([[160, 120]], true);
                        });
                        setTimeout(function() {
                            TweenMax.to($(whichSec).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
                            TweenMax.to($(whichSec).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
                            TweenMax.to($(whichSec).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
                            TweenMax.to($(whichSec).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                            TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
                            TweenMax.to($(whichSec).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
                        }, 1000)
                    }
                    if(destination.index == 3 && !$('.sec4').hasClass('complete')) {
                        if (!$('#nAbout').hasClass('complete')) {
                            $('#nAbout').addClass('complete')
                            nAboutAnim.playSegments([[0, 100]], true);
                        }
                        document.getElementById('nAbout').addEventListener('mouseenter', function() {
                            console.log(nAboutAnim.getDuration(true))
                            nAboutAnim.playSegments([[100, 160]], true);
                        });
                        document.getElementById('nAbout').addEventListener('mouseleave', function() {
                            nAboutAnim.playSegments([[176, 200]], true);
                        });
                        introtextAnimate(whichSec);
                    }
                    if(destination.index == 4 && !$('.sec5').hasClass('complete'))
                    {
                        if (!$('#why_b').hasClass('complete')) {
                            $('#why_b').addClass('complete')
                            introtextAnimate('.sec6')
                            whyJoinBAnimDesktop.playSegments([[0, 80]], true);
                        }
                        document.getElementById('why_b_desktop').addEventListener('mouseenter', function() {
                            console.log(whyJoinBAnimDesktop.getDuration(true))
                            whyJoinBAnimDesktop.playSegments([[60, 80]], true);
                        });
                        document.getElementById('why_b_desktop').addEventListener('mouseleave', function() {
                            whyJoinBAnimDesktop.playSegments([[80, 100]], true);
                        });
                        sec = $(whichSec).find('.mob-hide');
                        introtextAnimate(sec);
                        $('.sec6').addClass('complete')
                    }
                    if(!$(whichSec).hasClass('complete'))
                    {
                        $(whichSec).addClass('complete');
                    }
                }
                if(page_name == 'services.html')
                {
                    var whichSec =  '.sec' + (destination.index +1)
                    $(whichSec).find('.clmn_icon').css({opacity: 1});
                    introtextAnimate(whichSec);
                    setTimeout(function(){
                        $(whichSec).find('ul').css({opacity: 1});
                        $(whichSec).find('li').each(function(index){
                            var delay = index * 0.05;
                            $(this).css({'text-indent': 0, 'transition-delay': delay+'s'});
                        })
                    },1000);
                    // TweenMax.call(function() {
                    //     introtextAnimate(whichSec);
                    // }, null, null, 1);
                    // $(whichSec).find('ul').css({opacity: 1});
                    // $(whichSec).find('li').css({'text-indent': 0});
                    // $('.content .row .introText').each(function() {
                    //     if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
                    //         // introTextSet($(this));
                    //         var currRow = $(this).parents('.row');
                    //         // svgLetterAnimate(".sec1");
                    //         // var id = $(this).siblings('.svgLetterBox').attr('id');
                    //         // console.log(id);
                    //         // if ($('#' + id).find('svg').length == 0) {
                    //         //     var letteranimser = bodymovin.loadAnimation({
                    //         //         container: document.getElementById(id),
                    //         //         renderer: "svg",
                    //         //         loop: false,
                    //         //         autoplay: false,
                    //         //         path: "dist/json/letters/" + id + ".json"
                    //         //     });
                    //         //     letteranimser.addEventListener('DOMLoaded', function() {
                    //         //         letteranimser.playSegments([[0, 60]], true);
                    //         //         document.getElementById(id).addEventListener('mouseenter', function() {
                    //         //             console.log(letteranimser.getDuration(true))
                    //         //             letteranimser.playSegments([[61, 85]], true);
                    //         //         });
                    //         //         document.getElementById(id).addEventListener('mouseleave', function() {
                    //         //             letteranimser.playSegments([[86, 120]], true);
                    //         //         });
                    //         //     });
                    //         // }



                    //         // introtextAnimate(currRow);
                    //         // if (!mobile) {
                    //         //     var id = "",
                    //         //         jsonName = $(this).parents('.row').find('.clmn_icon').attr('id');
                    //         //     // console.log($('#' + jsonName).find('svg').length);
                    //         //     if ($('#' + jsonName).find('svg').length == 0) {
                    //         //         // $('#' + jsonName).html('');
                    //         //         var animation = bodymovin.loadAnimation({
                    //         //             container: document.getElementById(jsonName),
                    //         //             renderer: "svg",
                    //         //             loop: false,
                    //         //             autoplay: true,
                    //         //             path: "dist/json/" + jsonName + ".json"
                    //         //         });
                    //         //         // animation.addEventListener('complete', function(){
                    //         //         //     $('#'+jsonName).parents('.row').addClass('complete')
                    //         //         // })
                    //         //     }
                    //         //     // serviceIconAnimate(currRow, currRow.index());
                    //         // }

                    //         for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

                    //             TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
                    //         }

                    //         $(this).parents('.row').addClass('complete');
                    //     }
                    // });
                }

                if (destination.index == 0 && !$('.sec1').hasClass('complete')) {

                }
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {

                }

                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                 
                }
                if (destination.index == 3 && !$('.sec4').hasClass('complete')) {
                   
                }

                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                 
                }
            },

            //options here
            //autoScrolling:true,
            //scrollHorizontally: true
        });
    }
    //methods
    //$.fn.fullpage.setAllowScrolling(false);
    if (mobile && !isInnerpage) {
        // fullpage_api.setAutoScrolling(false);
        // fullpage_api.fitToSection(false);
        // fullpage_api.destroy('all');
        $('.section').addClass('fp-auto-height');
        $('#illustration').html('<img loading="lazy" src="dist/images/red-line.png" alt="" />')
        // fold2IllustrationInit = bodymovin.loadAnimation(fold2Illustration);
        // secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
        // secThreeDotMeshInit.play();
        $('#getStarted').html('<img loading="lazy" src="dist/images/get-started.png" style="margin: 20px 0; width: 80%" alt="" />')
        secOnePlaneInit = bodymovin.loadAnimation(secOnePlane);
        secOnePlaneInit.play();
        secOnePlaneInit.addEventListener('complete', function() {
            secOnePlaneInit.pause();
        });
        plLft = ($('#illustration').offset().left);
        plTp = ($('#illustration').offset().top);
        $('#plane').css({ left: plLft, top: plTp });
        $('.initBox .icon').find('.svgFill').each(function() {
            svgFillColor = $(this).attr('data-fill');
            TweenMax.to($(this), 0.4, { fill: svgFillColor, ease: Power1.easeInOut });
        });
    }
}

//Fullpage scroll Ends here

// $.fn.playit = function() {
//     // console.log($(this).attr('class'))
//     // console.log($(this).eq(($(this).length - 1)).attr('data-frames'));
//     var frames = $(this).eq(($(this).length - 1))
//     var frVal = frames[0].dataset.frames.split(',')
//     var xyz = [];
//     var axyz = [];
//     var numConv = [];
//     for (var i = 0; i < frVal.length; i++) {
//         numConv[i] = parseInt(frVal[i])
//     }
//     // console.log(numConv)
//     xyz.push(numConv);

//     axyz.push(xyz);
//     // console.log(axyz)
//     aboutnetwork.playSegments(xyz, true);


//     // console.log($(this).eq(($(this).length - 1)).attr('data-frames'));
//     // if($(this).text() == 'Research')
//     // {
//     //     console.log(111);
//     //     aboutnetwork.playSegments([[114, 240]], true);
//     // }
//     // if($(this).text() == 'Researchdatabase')
//     // {
//     //     console.log(222);
//     //     aboutnetwork.playSegments([[240, 310]], true);
//     // }
//     // if($(this).text() == 'databasetools')
//     // {
//     //     console.log(333);
//     //     aboutnetwork.playSegments([[310, 400]], true);
//     // }

//     // console.log($(this).index());
//     // console.log($(this).text());
// };
$.fn.isInViewportCustom = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

//Services Page


// if ($(window).width() > 1024) {
//     servicesBG2 = {
//         container: document.getElementById('servicesBg2'), // the dom element that will contain the animation
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'dist/json/services-banner-btm.json', // the path to the animation json
//         rendererSettings: {

//             scaleMode: 'noScale',
//             clearCanvas: true,
//             progressiveLoad: true,
//             hideOnTransparent: true
//         }
//     };
//     if ($('body').attr('id') == 'services') {
//         setTimeout(function() {
//             $('.bg2').hide();
//             servicesBG2Init = bodymovin.loadAnimation(servicesBG2)
//             servicesBG2Init.addEventListener('DOMLoaded', function() {
//                 $('.bg2').fadeIn();
//                 // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
//             });
//         }, 3400);
//     }
// }
if($(window).width() < 1024) {
    var servicesSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="150" viewBox="0 0 320 150"> <defs> <path id="a" d="M.052.177h10.994v7.025H.052z"/> <path id="c" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843"/> <path id="e" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843z"/> <path id="g" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843z"/> <path id="i" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988"/> <path id="k" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988z"/> <path id="m" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988z"/> <path id="o" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01"/> <path id="q" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01z"/> <path id="s" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01z"/> </defs> <g fill="none" fill-rule="evenodd"> <path fill="#0F385C" d="M78.558 31.16c-2.965.507-5.47.494-7.887.228-3.477-.384-7.736-2.668-9.238-6.632-.718-1.89-1.912-3.54-3.45-4.624-5.354-3.777-11.515.46-12.127 3.907-2.29 12.903 8.859 35.01 26.503 39.41 3.835.957 18.584 1.074 23.69-9.956 2.27-4.9 2.486-7.05.47-12.172-2.943-7.475-10.918-11.366-17.96-10.162"/> <path fill="#FAB9AF" d="M57.218 26.768c-.145.56-1.278 7.144-2.477 7.754.25.322 3.818 3.123 4.5 5.496 1.574 1.514 5.669-1.25 4.701-5.067-4.042-.158-5.758-6.431-6.724-8.183M39.774 81.045c-.107.266.94.97 1.225.985.695-.168.595-.575 1.27-.638-.595-.03-1.216-.191-1.776-.403-.3-.137-.59-.372-.72.056"/> <path fill="#FAB9AF" d="M43.755 79.402c-.522.432-1.04.936-1.522 1.467-.576.62-1.705 2.154-1.784 2.261-.212.325-.848 1.069-.934 1.362-.056.187.005.758.148.95.19.256.523.143.523.143.177.374 1.014-.242 1.037-.14.094.413.687.41 1.542-.811.051-.073 2.744-2.656 3.537-3.552-.51-.532-2.515-1.702-2.547-1.68M64.773 43.839c.385-1.157-5.574-2.028-5.806-1.468-1.278 3.083-3.012 13.253-4.664 18.238-2.026 6.115 3.543 4.678 4.163 3.696 3.394-7.487 3.921-13.307 6.307-20.466"/> <path fill="#C96B86" d="M58.141 42.381c-1.582 1.744-2.085 9.614-3.652 14.5 1.839 1.52 2.855 2.271 5.986 2.49 2.771-5.422 3.672-12.817 3.5-14.686-.437-4.81-3.594-4.77-5.834-2.304"/> <path fill="#FAB9AF" d="M54.756 61.223a2.21 2.21 0 0 0-.492.476c-2.102 2.933-8.003 15.14-10.678 17.846 1.042.67 1.864 1.297 2.388 1.885C50.285 76.892 59.75 64.376 58.5 62.21c-1.147-1.987-2.824-1.65-3.743-.987"/> <path fill="#B1516D" d="M106.522 140.309l-2.66-.685s-.322.95-.62 1.585c-.577 1.228-6.317 3.146-5.939 4.566.191.717 3.76.847 5.002.567 1.24-.278 2.12-.669 2.852-1.2.796-.58 2.134-1.55 2.279-2.062.251-.89-.346-1.684-.346-1.684-.1-.496-.568-1.087-.568-1.087"/> <path fill="#FAB9AF" d="M102.124 137.825s1.696 2.388 1.118 3.385c0 0-1.897 1.865-.81 1.995 1.617.194 4.658-1.81 4.658-1.81-.082-.827-2.005-6.649-2.005-6.649l-2.96 3.08z"/> <path fill="#B1516D" d="M73.305 139.326l-2.404-1.494s-.163 1.445-1.104 1.876c-.738 1.137-6.638 3.223-6.457 4.68.092.737 3.44.485 4.707.378 1.266-.106 2.808-.652 3.48-1.101.818-.547 1.89-1.049 2.103-1.536.371-.848-.195-1.712-.195-1.712.032-.831-.13-1.091-.13-1.091"/> <path fill="#FAB9AF" d="M69.758 135.908s1.036 2.74.225 3.558c0 0-2.6 2.233-1.509 2.485 1.588.368 4.991-1.335 4.991-1.335.13-.821-.064-6.934-.064-6.934l-3.643 2.226zM56.738 25.303c-1.667-2.86-4.952-4.134-7.835-2.448-2.682 1.571-4.759 3.855-3.682 6.669.386 1.007 6.62 8.393 11.057 6.942 2.11-.69 3.447-6.035 2.19-8.193l-1.73-2.97"/> <path fill="#0F385C" d="M54.323 18.419c-5.797-1.645-10.005 3.876-8.394 6.074-4.21 2.249.663 9.665 3.24 9.242-4.05-3.977.896-9.045.896-9.045 1.682 1.102 3.07-.285 4.864.65 2.695 1.404 2.003.488 2.609.966 0 0 3.347-6.026-3.215-7.887"/> <path fill="#FAB9AF" d="M54.783 23.767c-.233.216.046 1.07-.085 1.593.939.634 2.137.962 2.967 1.383.429-.686-.157-1.692-.689-2.273-.563-.614-1.58-1.268-2.193-.703"/> <path fill="#FA978D" d="M53.608 34.43a.18.18 0 0 0 .135.08.964.964 0 0 0 .66-.18c.33-.233.349-.436.334-.53a.15.15 0 0 0-.045-.085l-1.652-1.64a.195.195 0 0 0-.155-.053c-.118.01-.31.032-.376.083-.053.04-.107.171-.14.262a.18.18 0 0 0 .014.16l1.225 1.904z"/> <path fill="#A6425F" d="M77.817 73.24L66.71 100.486c-.73 1.512-.072 3.903 1.485 4.525 2.5 1 6.256.69 8.784-4.55 2.95-6.112 9.462-15.217 12.948-19.93a10.185 10.185 0 0 0 1.909-7.462c-.385-2.757-1.856-7.23-3.224-7.931-2.762-1.416-12.007 4.804-10.795 8.102"/> <path fill="#A6425F" d="M73.969 137.648l1.669-37.834s-8.263-4.324-9.443 2.937c-.75 4.611 3.745 35.876 3.745 35.876l4.029-.979z"/> <path fill="#963E60" d="M95.646 98.385l5.983-23.74s2.564-6.732-1.995-13.91c-4.558-7.18-10.973-.81-10.973-.81s-2.54 33.669-2.539 37.848c0 .312.56 1.81.764 2.095.79 1.067 1.63 1.796 3.094 1.756 0 0 4.608.187 5.666-3.24"/> <path fill="#B95572" d="M83.217 45.893c-4.336-7.869-6.257-10.79-13.36-11.658-1.36-.166-6.367.676-6.367.676s-.54 3.432-1.95 4.643c-.97.832-2.383.174-2.383.174s-2.78 4.117-2.886 5.075c-.058.529 2.024 3.195 2.43 6.662.823 7.05 12.076 6.67 14.15 8.762 3.967 3.998 3.12 8.57 4.765 14.081 9.582-1.017 16.955-7.459 21.268-16.537-5.233-5.627-11.102-3.592-15.667-11.878"/> <path fill="#B1516D" d="M107.519 146.468s-.224-1.794-.102-3.691c.026-.412-.794.755-.794.755l.489 3.12.427-.02-.02-.164zM73.725 144.603s-.224-1.795-.102-3.692c.026-.411-.794.755-.794.755l.489 3.12.427-.02-.02-.163z"/> <path fill="#963E60" d="M94.641 96.125c.603.588 1.522 2.74 1.708 3.099l10.437 38.8-4.558.98L87 100.302c-.849-2.967.146-3.752.552-4.323 2.187-3.818 5.92-.997 7.09.146"/> <path fill="#A6425F" d="M177.389 144.74s-1.345.664-3.591.854l.36 3.099s1.598.04 2.631-.227l.328-.842.938.758s5.076.062 7.647-.386c0 0 .21-.937-1.064-1.226-1.274-.29-4.141-.574-4.983-.95-.842-.376-2.266-1.08-2.266-1.08"/> <path fill="#FFCBB9" d="M173.11 140.517l.53 3.893.164 1.188c2.155.442 3.583-.854 3.583-.854l-.09-1.263-.242-3.287-3.945.323z"/> <path fill="#963E60" d="M169.57 98.02c-.32.39-.619 1.724-.563 2.154.77 5.917 3.2 35.17 3.254 42.107l5.643-.535s.546-31.197 1.311-41.672c.026-.36-1.728-1.614-2.108-2.163-.693-.435-2.151-1.498-2.772-1.677-2.399-.315-3.012.02-4.766 1.786"/> <path fill="#963E60" d="M171.7 63.097l-1.24-.923s-18.554-1.798-17.719 1.398c.952 3.638.396 5.5 2.029 9.495 3.163 7.739 9.045 17.801 14.492 27.564.412.737 2.372 4.505 3.205 4.637 1.458.232 2.267.325 4.112-.134 1.023-.53 3.46-1.615 2.4-6.68l-7.278-35.357z"/> <path fill="#E6F7FF" d="M173.64 144.41l.164 1.188c2.155.442 3.583-.854 3.583-.854l-.09-1.263c-.994.281-2.682.748-3.657.93"/> <path fill="#A6425F" d="M167.34 60.603a.593.593 0 0 1-.186.017c-2.498-.195-13.034-.267-14.448 1.9l.291 15.053c-.145 3.634.83 17.2.405 21.027-.271 2.437.47 4.86 2.593 6.08l.05.029c.043.024.09.046.138.057.755.18 2.495.843 4.197-.105.114-.063.702-1.143.752-1.264 2.17-5.157 2.893-9.705 4.161-13.59 0 0 4.36-21.156 3.898-25.34l-1.3-3.633-.551-.231z"/> <g transform="translate(138.614 142.798)"> <mask id="b" fill="#fff"> <use xlink:href="#a"/> </mask> <path fill="#A6425F" d="M4.604.853S3.106.913.975.177l-.923 2.98s1.447.685 2.499.859l.64-.637.55 1.075s4.618 2.115 7.15 2.748c0 0 .57-.772-.478-1.552-1.048-.781-3.555-2.205-4.173-2.89C5.622 2.075 4.604.853 4.604.853" mask="url(#b)"/> </g> <path fill="#FFCBB9" d="M141.007 138.047l-1.085 3.769-.334 1.167c1.801 1.272 3.628.674 3.628.674l.472-1.328 1.063-2.975-3.744-1.307z"/> <path fill="#E6F7FF" d="M139.922 141.816l-.334 1.167c1.801 1.272 3.628.674 3.628.674l.472-1.328c-.93-.147-2.535-.395-3.766-.513"/> <path fill="#A6425F" d="M154.133 98.67c-.402.228-1.264 2.031-1.389 2.478l-.002.007c-2.864 10.208-13.03 37.93-13.03 37.93l5.6 1.878s11.04-26.327 15.356-36.472c.093-.218.297-.912.315-1.148.05-.632-.118-.756-.01-1.602a1.268 1.268 0 0 0-.167-.803c-.46-.782-.978-1.68-1.424-1.827-1.503-.85-3.513-1.43-5.249-.442"/> <path fill="#FAB9AF" d="M185.646 48.161s5.426.903 5.818.85c.393-.055 2.627-1.095 3.772-.84.849.188 2.3.432 2.56.65.26.216-.941.377-1.208.341-.267-.036-.948.347-.975.423-.027.078 1.828.072 2.652.206.824.134 1.28.332 1.3.463.018.13-1.45.307-1.914.29-.462-.018 1.68.188 2.156.49.476.304-1.801.454-2.384.381-.582-.075 2.14.16 2.349.426.21.267-2.236.46-2.868.409-.632-.05 1.9.02 2.064.208.164.188-2.704.63-3.706.66-.93.03-2.02.146-4.116-1.155-.385-.238-5.398.14-5.398.14l-.102-3.942z"/> <path fill="#A6425F" d="M164.241 32.023s1.305-3.8 3.268-3.02c1.524.607 11.64 14.78 14.37 16.972.78.628 7.34 1.363 7.34 1.363s1.074 2.674.305 5.364c-.268.937-9.496-.864-10.25-1.189-3.829-1.65-9.195-10.957-9.195-10.957l-5.838-8.533z"/> <path fill="#AF526D" d="M203.947 58.27a5.476 5.476 0 0 1 .228-1.58c.697-2.326 1.854-4.85 3.67-4.805 3.225.187 4.247-2.127 4.963-4.533a.342.342 0 0 0-.224-.424l-20.035-6.274a2.83 2.83 0 0 0-3.536 1.857l-8.04 25.793c-.084.272.183.526.446.419a1.95 1.95 0 0 1 1.376-.038l3.2 1.103c.171.06.35.099.532.115 2.124.188 2.575 1.513 2.623 2.446.026.5-.119.995-.402 1.408l-.968 1.414c-.091.133-.17.276-.23.426-1.182 2.885 1.76 3.96 2.561 4.195.128.037.251.087.368.152 1.161.643 2.054.688 2.69.535.688-.165 1.218-.713 1.4-1.399.196-.74.523-2.079.882-3.998.495-2.641 2.166-1.881 2.65-1.597.105.06.214.114.327.155a4.465 4.465 0 0 1 2.405 2.1.29.29 0 0 0 .331.142c.41-.109.844-.1 1.249.027l.523.164a.34.34 0 0 0 .434-.254c1.035-4.696 3.906-9.188 3.289-13.783-.146-.498-2.62-.682-2.71-2.465l-.002-1.3z"/> <g> <g transform="translate(181 40)"> <mask id="d" fill="#fff"> <use xlink:href="#c"/> </mask> <path fill="#FDC149" d="M38.644 24.156c.332-5.599-2.671-11.272-7.607-14.43a14.598 14.598 0 0 0-2.559-1.33 14.31 14.31 0 0 0-8.812-.69 1.203 1.203 0 0 0-.796 1.729l1.55 2.947c2.16-.578 4.402-.39 6.47.538.465.22.923.464 1.366.754 3.451 2.215 5.61 6.283 5.375 10.112-.31 5.53-2.283 8.336-4.354 11.29l-.792 1.147-.072.105 4.176 1.3a1.175 1.175 0 0 0 1.342-.47c1.338-1.915 2.747-4.137 3.681-7.115.529-1.685.907-3.62 1.032-5.887" mask="url(#d)"/> </g> <g transform="translate(181 40)"> <mask id="f" fill="#fff"> <use xlink:href="#e"/> </mask> <path fill="#FDC149" d="M29.278 34.69c2.07-2.954 4.044-5.76 4.353-11.29.235-3.83-1.924-7.897-5.375-10.112-.443-.29-.9-.534-1.366-.755-2.067-.928-4.31-1.116-6.47-.537-.729.194-1.447.475-2.146.846l-6.964 3.635a3.6 3.6 0 0 0-1.535 4.894l.924 1.758c.909 1.727 3.075 2.604 5.24 1.377 1.238-.704 2.686-1.267 4.127-.185-.99.807-2.1 1.425-3.304 1.86a13.333 13.333 0 0 0-8.283 8.572l-.795 2.534c.43-.025.87.024 1.306.16l18.538 5.77c.2.063.392.142.574.234l-.256-.87c-1.031-3.504-.32-5.336.567-6.64l.072-.104.793-1.148z" mask="url(#f)"/> </g> <g transform="translate(181 40)"> <mask id="h" fill="#fff"> <use xlink:href="#g"/> </mask> <path fill="#963E60" d="M8.99 37.447a3.654 3.654 0 0 0-1.306-.16 3.634 3.634 0 0 0-3.255 2.54l-.748 2.387a1.197 1.197 0 0 0 .796 1.515l23.172 7.213a1.203 1.203 0 0 0 1.52-.794l.748-2.386a3.617 3.617 0 0 0-2.39-4.545L8.99 37.447z" mask="url(#h)"/> </g> </g> <g> <path fill="#B95572" d="M163.772 25.17s-5.956.318-9.497 4.979c-5.285 10.994-1.704 28.01-1.105 33.657 0 0 11.175 4.433 19.57.26 0 0 1.878-17.603 1.518-22.267-.36-4.664-4.763-15.77-10.486-16.628"/> <path fill="#FAB9AF" d="M165.732 20.818s-.727 4.848-.03 7.554a1.051 1.051 0 0 1-.68 1.24c-1.97.674-4.608-1.96-5.902-2.856-.27-1.518.495-7.457.495-7.457l6.117 1.519z"/> <path fill="#FAB9AF" d="M170.814 8.258s-1.64-.195-.183 2.275c.71 1.2-.298 5.774-.298 5.774s-1.712 6.352-4.065 5.858c-2.355-.492-6.473-.218-7.222-1.642-.75-1.424-1.979-11.06 2.086-12.648 4.065-1.588 9.682.383 9.682.383"/> <path fill="#FA978D" d="M170.022 16.847s.228.272.657.254c.506-.021.531-.296.531-.296l-.48-2.218s-.292-.178-.405-.17c-.094.008-.303.19-.303.19v2.24z"/> <path fill="#0F385C" d="M173.498 7.512c0 2.154-1.84 3.451-3.59 3.662-1.137.136-2.274-.054-3.402-.254-1.902-.339-3.445 1.883-3.823 3.525-.428 1.862 1.444 4.873 3.102 3.888 1.659-.986 4.173-1.04 4.173-1.04s.963 1.259.482 3.449c-.482 2.19-5.884 2.355-7.542.931-1.659-1.424-1.017-5.202-2.14-6.626-1.124-1.423-2.153.739-2.087 1.37.092.88 1.567 1.514 1.567 1.514l-.998 4.827c-2.14-1.588-5.079-14.009-.02-14.872 1.012-3.625 5.57-3.849 7.996-3.852 0 0 6.282.026 6.282 3.478"/> <path fill="#FFF" d="M165.513 29.168l-6.46-2.402 6.115 4.956zM165.513 29.168l2.82 1.735-2.997-5.206z"/> <path fill="#A6425F" d="M168.333 30.903l-2.82-1.735-.345 2.554 1.968.906z"/> <path fill="#A6425F" d="M167.462 31.755s2.867 3.82 2.867 13.398c0 1.124-1.486 2.81-1.486 2.81l-1.992-2.716s.092-11.573-.411-13.492c-.504-1.918 1.022 0 1.022 0"/> <path fill="#FAB9AF" d="M163.845 52.855c1.61.771 4.454 1.8 4.454 1.8s1.448-1.287 2.058-1.343c.61-.056 2.294.755 2.667.956.374.202-.496.504-.978.29-.164-.072-1.225-.323-1.42-.14-.197.183 1.71.553 2.755.868 1.044.314 2.635 1.108 2.59 1.291-.099.405-1.791-.266-2.07-.368-.309-.113-1.142-.208-1.142-.208s.45.771-.04.916c0 0 .023.808-.415.811 0 0-.22.626-.902.547-.682-.079-2.481.147-3.54-1.194 0 0-4.572-.63-5.953-1.687-1.381-1.057.327-3.31 1.936-2.539"/> <path fill="#A6425F" d="M160.714 37.632c-1.165 3.295-2.348 9.569-2.611 11.203-.341 2.12 6.036 2.521 6.036 2.521l-.048 5.821s-8.227-1.722-10.281-3.38c-1.553-3.052-1.91-13.12.098-18.805 1.38-3.903 4.683-5.821 6.682-3.343 1.376 1.705.44 5.094.124 5.983"/> <path fill="#FDC149" d="M48.17 81.475c-6.71 0-12.15 5.416-12.15 12.097 0 6.68 5.44 12.097 12.15 12.097s12.15-5.416 12.15-12.097c0-6.681-5.44-12.097-12.15-12.097"/> <path stroke="#FFF" stroke-width="3" d="M48.17 83.895c-5.368 0-9.72 4.332-9.72 9.677 0 5.344 4.352 9.677 9.72 9.677s9.72-4.333 9.72-9.677c0-5.345-4.352-9.677-9.72-9.677z"/> <path fill="#FFF" d="M48.704 92.658c-1.27-.537-1.637-.862-1.637-1.448 0-.47.337-1.018 1.287-1.018.84 0 1.485.35 1.49.353a.448.448 0 0 0 .22.058.444.444 0 0 0 .414-.299l.23-.622a.392.392 0 0 0-.197-.495c-.517-.238-1.528-.422-1.538-.424-.017-.003-.073-.016-.073-.085l-.003-.903a.487.487 0 0 0-.48-.493h-.414a.487.487 0 0 0-.48.493l.002.95c0 .072-.075.104-.102.11-1.276.32-2.074 1.307-2.074 2.55 0 1.551 1.215 2.252 2.527 2.778 1.05.434 1.477.875 1.477 1.52 0 .704-.606 1.195-1.474 1.195-.741 0-1.744-.496-1.755-.5a.45.45 0 0 0-.626.262l-.22.629a.418.418 0 0 0 .197.51c.616.339 1.808.537 1.861.546.015.002.087.029.087.099v.945c0 .272.215.493.48.493h.428c.264 0 .48-.22.48-.493v-.994c0-.094.064-.102.078-.105 1.36-.322 2.197-1.372 2.197-2.69 0-1.352-.713-2.227-2.382-2.922"/> <path fill="#FAB9AF" d="M57.753 88.881c.145.248 1.349-.083 1.546-.288.326-.635.587-1.014.471-1.45-.41.43-1.065.871-1.59 1.158-.3.14-.65.196-.427.58"/> <path fill="#FAB9AF" d="M58.791 88.574c-.375.748-.993 2.536-1.036 2.661-.102.373-.234 1.067-.347 1.743-.073.432.283.766.638.415.51-.505.325.28.491.365.548.283.773-.754.918-.375.282.742.87.343 1.338-1.065.411-1.234 1.658-3.495 2.16-4.567-1.143-1.09-2.53-1.234-2.554-1.205-.392.543-1.296 1.392-1.608 2.028M67.198 45.122c-.418 3.294-.131 12.485-.408 17.7-.337 6.398 4.266 4.348 4.997 2.443 1.923-5.014 2.055-19.515-.453-20.777-1.087-.547-4.06.037-4.136.634"/> <path fill="#C96B86" d="M67.307 41.482c-1.518 1.79-.422 9.915-.64 15.013 1.84.953 4.476 1.892 7.304.656 1.24-5.928 1.287-13.855-.935-16.05-2.665-2.633-3.999-1.66-5.729.38"/> <path fill="#FAB9AF" d="M67.292 64.12c-.162.198-.28.403-.35.587-1.254 3.365-4.675 18.539-6.543 21.839a9.614 9.614 0 0 1 2.554 1.204c2.963-5.488 10.36-21.452 8.21-23.671-1.59-1.641-3.16-.837-3.87.04"/> <path fill="#274388" d="M216.057 76.011h38.162a3.674 3.674 0 0 1 3.682 3.666v46.297h-45.526V79.677a3.674 3.674 0 0 1 3.682-3.666"/> <path fill="#AF526D" d="M255.727 114.658l-5.233-.508c-.661-.064-1.28-.388-1.672-.922-.314-.427-.497-.999-.153-1.683 0 0 2.736-5.763-2.193-5.508a2.487 2.487 0 0 1-.731-.068c-.83-.206-2.935-.486-3.305 1.868-.067.42-.012.851.146 1.247.21.527.521 1.426.63 2.342.17 1.418-.958 2.661-2.392 2.661h-4.002c-.435 0-.867.109-1.235.34-.082.05-.165.11-.246.178a4.776 4.776 0 0 0-3.301-1.552 2.227 2.227 0 0 1-.382-.054c-.585-.134-2.529-.374-2.195 2.457.244 2.058.336 3.516.372 4.329a2.052 2.052 0 0 1-.983 1.86c-.6.356-1.524.594-2.912.31a1.939 1.939 0 0 0-.423-.036c-.9.016-4.304-.143-3.933-3.544.013-.12.04-.24.077-.355l.584-1.89a2.06 2.06 0 0 0 .013-1.184c-.275-.946-1.103-2.446-3.564-1.898a2.063 2.063 0 0 1-.508.048l-3.655-.104a2.092 2.092 0 0 0-2.156 2.086v18.825c0 1.153.938 2.087 2.096 2.087h19.625c.48 0 .916-.16 1.264-.424.39.268.863.424 1.367.424h18.766a2.402 2.402 0 0 0 2.408-2.397v-16.55c0-1.233-.94-2.265-2.174-2.385"/> <path fill="#345287" d="M250.312 97.117c-1.444-5.685-6.292-10.41-12.3-12.027a15.782 15.782 0 0 0-3.017-.53c-3.223-.278-6.395.43-9.154 2.047-.722.429-.85 1.39-.258 1.97l3.739 3.664 12.635 19.607c.232.353.645.58 1.083.58h5.415c.567 0 1.057-.353 1.212-.884.748-2.324 1.47-4.977 1.47-8.237 0-1.844-.232-3.89-.825-6.19"/> <path fill="#345287" d="M246.22 120.514l-.876-1.289c-2.218-3.259-2.012-5.33-1.496-6.923l.438-1.39c1.16-3.587 2.27-6.998.825-12.607-.98-3.892-4.46-7.277-8.663-8.414a12.362 12.362 0 0 0-1.625-.329c-3.197-.379-6.292.657-8.638 2.982l-5.905 5.786a3.714 3.714 0 0 0 0 5.357l1.495 1.465c1.47 1.44 3.946 1.642 5.75-.253 1.032-1.086 2.322-2.097 4.127-1.465a11.822 11.822 0 0 1-2.76 2.88c-3.558 2.603-5.672 6.746-5.672 11.117v3.79c0 .708.567 1.264 1.289 1.264h20.629c1.031 0 1.65-1.137 1.082-1.971"/> <path fill="#345287" d="M245.223 119.958h-20.628c-2.14 0-3.868 1.693-3.868 3.79v2.61c0 .709.567 1.264 1.29 1.264h25.785c.722 0 1.289-.555 1.289-1.263v-2.611c0-2.097-1.727-3.79-3.868-3.79"/> <path fill="#AF526D" d="M255.727 114.658l-5.233-.508c-.661-.064-1.28-.388-1.672-.922-.314-.427-.497-.999-.153-1.683 0 0 2.736-5.763-2.193-5.508a2.487 2.487 0 0 1-.731-.068c-.83-.206-2.935-.486-3.305 1.868-.067.42-.012.851.146 1.247.21.527.521 1.426.63 2.342.17 1.418-.958 2.661-2.392 2.661h-4.002c-.435 0-.867.109-1.235.34-.082.05-.165.11-.246.178a4.776 4.776 0 0 0-3.301-1.552 2.227 2.227 0 0 1-.382-.054c-.585-.134-2.529-.374-2.195 2.457.244 2.058.336 3.516.372 4.329a2.052 2.052 0 0 1-.983 1.86c-.6.356-1.524.594-2.912.31a1.939 1.939 0 0 0-.423-.036c-.9.016-4.304-.143-3.933-3.544.013-.12.04-.24.077-.355l.584-1.89a2.06 2.06 0 0 0 .013-1.184c-.275-.946-1.103-2.446-3.564-1.898a2.063 2.063 0 0 1-.508.048l-3.655-.104a2.092 2.092 0 0 0-2.156 2.086v18.825c0 1.153.938 2.087 2.096 2.087h19.625c.48 0 .916-.16 1.264-.424.39.268.863.424 1.367.424h18.766a2.402 2.402 0 0 0 2.408-2.397v-16.55c0-1.233-.94-2.265-2.174-2.385"/> </g> <g> <g transform="translate(212 106)"> <mask id="j" fill="#fff"> <use xlink:href="#i"/> </mask> <path fill="#FDC149" d="M37.97-8.677c-1.463-5.778-6.378-10.58-12.469-12.224a15.96 15.96 0 0 0-3.058-.54c-3.268-.282-6.483.437-9.28 2.08-.732.437-.863 1.414-.262 2.004l2.543 2.498c2.034-1.268 4.4-1.785 6.824-1.497.55.077 1.099.18 1.647.334 4.261 1.156 7.79 4.597 8.784 8.552 1.464 5.702.34 9.169-.837 12.816l-.444 1.412a9.166 9.166 0 0 0-.04.129h4.71a1.26 1.26 0 0 0 1.229-.9c.758-2.362 1.49-5.059 1.49-8.371 0-1.875-.235-3.956-.837-6.293" mask="url(#j)"/> </g> <g transform="translate(212 106)"> <mask id="l" fill="#fff"> <use xlink:href="#k"/> </mask> <path fill="#FDC149" d="M32.254 4.96c1.176-3.646 2.3-7.113.836-12.814-.993-3.955-4.522-7.397-8.783-8.552a12.488 12.488 0 0 0-1.647-.334c-2.425-.288-4.79.228-6.825 1.496-.685.427-1.333.939-1.932 1.534L7.917-7.829a3.782 3.782 0 0 0 0 5.445l1.516 1.49c1.49 1.463 4 1.669 5.83-.257 1.045-1.105 2.352-2.132 4.182-1.49A12 12 0 0 1 16.648.287c-3.608 2.645-5.751 6.857-5.751 11.3v2.818c.433-.16.902-.25 1.394-.25h20.913c.227 0 .449.02.665.056l-.543-.8c-2.19-3.227-2.049-5.308-1.557-6.909l.04-.129.445-1.412z" mask="url(#l)"/> </g> <g transform="translate(212 106)"> <mask id="n" fill="#fff"> <use xlink:href="#m"/> </mask> <path fill="#FDC149" d="M12.29 14.155c-.49 0-.96.09-1.393.25-1.48.551-2.527 1.954-2.527 3.602v2.654c0 .72.575 1.284 1.307 1.284h26.14c.733 0 1.308-.565 1.308-1.284v-2.654c0-1.908-1.405-3.486-3.256-3.796a4.033 4.033 0 0 0-.666-.056H12.291z" mask="url(#n)"/> </g> </g> <g> <path fill="#FFCBB9" d="M297.866 141.878l-3.554-35.662c-2.15-11.786-1.238-29.676-.412-34.912a5.25 5.25 0 0 1 4.63-4.395c3.39-.316 6.303 2.437 6.113 5.833-.083 1.487-1.354 3.686-1.755 5.725-1.563 7.96-2.443 63.37-2.464 63.38l-2.558.031z"/> <path fill="#FFCBB9" d="M315.98 142.896c-2.15-4.337-9.252-29.036-11.097-34.457-2.218-6.514-6.078-35.311-5.3-41.191l5.273-.44a5.824 5.824 0 0 1 5.845 4.122c1.15 3.806 1.225 8.026.194 17.368 0 0-.167 15.43.627 18.696.722 2.966 6.667 33.617 7.424 36.986"/> <path fill="#AF526D" d="M292.855 93.875c7.267 1.209 12.61 1.245 20.537.08.649-.095.997-.467.831-1.152-.514-2.124-.758-4.911-.896-5.536-.478-2.174-.227-14.515-.165-15.45.003-.038.163-1.72.17-1.758 1.34-8.229-1.576-10.099-3.092-13.461-1.019-2.257-1.108-1.227-4.63-1.12l-6.974.389-.004.03-2.311-.845a1.045 1.045 0 0 0-.41-.06c-2.946.152-3.726-1.091-5.032 3.082-1.46 4.666-4.984 11.998.273 30.86.008.03.015.059.021.089l.78 3.93c.185.826.454.848.902.922"/> <path fill="#FFD8C5" d="M291.38 34.088c-.424 4.254-2.003 11.692-2.136 12.021 0 0-6.709 9.763-7.247 9.566-.539-.197-2.467.372-2.743.5-.276.128-1.677-.167-1.31.419.367.585 2.232.05 1.883.764-1.15 2.348-2.622 3.52-2.79 4.01-.167.49.474.52.474.52-.151.138-.63.798-.26.999.31.167.905-.277.905-.277s.102.453.348.508c.483.108.778-.52.778-.52.095.222.707.195.97.105.528-.182 3.015-3.171 3.64-4.597.128-.294 9.585-9.748 10.338-10.692.49-.615 2.031-7.073 2.278-12.043-.956-.318-2.461-.432-5.129-1.283"/> <path fill="#AF526D" d="M263.082 60.761c.712 1.547 2.975.831 3.281 1.22 2.063 3.647 1.313 8.322 1.862 12.652a1.143 1.143 0 0 0 1.224.991l.178-.014c2.301-.179 3.706-2.616 2.698-4.69l-.014-.03a2.146 2.146 0 0 1-.218-1.108c.16-2.07 1.952-2.036 2.75-1.916.264.04.532.045.797.013 4.298-.508 2.277 4.793 2.277 4.793-.259.638-.056 1.138.255 1.499.388.451.963.698 1.558.71l4.71.091c.124.003.244.015.361.037a1.14 1.14 0 0 0 1.341-1.214l-1.963-25.163a3.53 3.53 0 0 0-3.783-3.233l-12.666.986a1.144 1.144 0 0 0-1.054 1.2c.106 2.11-.251 4.115-2.859 4.986-1.598.593-1.756 3.15-1.567 5.425a5.99 5.99 0 0 0 .418 1.738l.414 1.027z"/> </g> <g> <g transform="translate(262 45)"> <mask id="p" fill="#fff"> <use xlink:href="#o"/> </mask> <path fill="#FDC149" d="M16.136 14.156C14.452 9.13 9.816 5.204 4.368 4.16a13.856 13.856 0 0 0-2.716-.27A13.534 13.534 0 0 0-6.33 6.363a1.134 1.134 0 0 0-.09 1.795l2.4 2.043C-2.326 8.939-.29 8.32 1.852 8.41c.487.03.975.085 1.466.184 3.811.736 7.14 3.549 8.285 6.99 1.678 4.958.935 8.11.158 11.424l-.291 1.283a7.416 7.416 0 0 0-.027.117l4.125-.32c.504-.039.914-.391 1.014-.88.5-2.148.953-4.59.723-7.528-.13-1.663-.48-3.493-1.17-5.525" mask="url(#p)"/> </g> <g transform="translate(262 45)"> <mask id="r" fill="#fff"> <use xlink:href="#q"/> </mask> <path fill="#FDC149" d="M12.145 26.627c.777-3.315 1.52-6.466-.158-11.424-1.144-3.441-4.474-6.254-8.285-6.99-.491-.1-.98-.153-1.465-.184-2.144-.091-4.18.528-5.872 1.79a9.65 9.65 0 0 0-1.586 1.493l-4.834 5.623a3.396 3.396 0 0 0 .379 4.83l1.43 1.218c1.407 1.197 3.619 1.209 5.087-.624.84-1.05 1.913-2.05 3.56-1.605a10.61 10.61 0 0 1-2.246 2.787 12.546 12.546 0 0 0-4.252 10.414l.196 2.5a3.455 3.455 0 0 1 1.204-.316l18.312-1.42c.199-.016.395-.014.587.004l-.532-.674c-2.14-2.712-2.162-4.568-1.843-6.022l.027-.117.29-1.283z" mask="url(#r)"/> </g> <g transform="translate(262 45)"> <mask id="t" fill="#fff"> <use xlink:href="#s"/> </mask> <path fill="#963E60" d="M-4.697 36.138c-.43.034-.836.145-1.204.317a3.42 3.42 0 0 0-1.962 3.367l.184 2.354c.05.638.593 1.1 1.234 1.05l22.89-1.775a1.133 1.133 0 0 0 1.055-1.228l-.184-2.354a3.43 3.43 0 0 0-3.114-3.146 3.474 3.474 0 0 0-.587-.005l-18.312 1.42z" mask="url(#t)"/> </g> </g> <g> <path fill="#C96B86" d="M308.483 47.831c.497 1.864 2.737 5.435 4.575 8.27a.96.96 0 0 1-.43 1.406c-3.882 1.653-17.29 6.928-22.166 3.17a.948.948 0 0 1-.355-.854c.254-2.367 2.428-7.235 1.793-10.614-.267-1.42-1.559-3.139-2.354-3.744-.795-.606-2.43-2.03-2.68-4.23-.233-2.06 2.337-6.343 2.66-6.874.024-.038.04-.076.061-.116.707-1.289 1.037-4.304 1.326-5.742a.962.962 0 0 1 .726-.746l10.126-2.449c.126-.03 1.438.038 1.565.06.31.052.36.113 1.175.426 0 0-.399 7.115-.312 9.362.087 2.247 2.892 3.555 3.182 3.986.289.43.947 7.936.947 7.936l.16.753z"/> <path fill="#FAB9AF" d="M292.533 24.809c-3.687.33-5.6-9.875-5.187-12.917.163-1.198.915-2.22 2.121-2.316l4.516-.36c.049-.005.097-.01.145-.017l1.214-.175a2.304 2.304 0 0 1 2.494 1.49l.141.388c.388 1.064 1.482 1.633 2.603 1.472.444-.063.856.112 1.064.81.308 1.035-.147 2.484-.392 3.14-.086.23-.137.47-.147.716-.04.925-.266 3.423-1.553 5.566-.414.689-.408 1.553-.02 2.256l.033.06c.398.714.345 1.372-.036 2.29-.451 1.088-1.214 2.352-2.531 3.201-1.336.861-2.579.209-3.058-.507-.335-.5-.431-1.117-.312-1.706.093-.46.17-1.1.078-1.733-.102-.706-.462-1.722-1.173-1.658"/> <path fill="#203A60" d="M290.98 9.087s-3.618 1.681-3.535 5.208c.01.379-.888.686-1.185.45-1.467-1.165-1.06-3.003.61-4.894 2.711-3.07 4.11-.764 4.11-.764"/> <path fill="#203A60" d="M298.116 17.236c-.114-.312.033-.647.323-.81a1.53 1.53 0 0 0 .645-.721c.508-1.1-1.092-2.986-2.518-1.058a.665.665 0 0 1-.577.27c-1.18-.076-4.779-.61-6.886-4.236a.686.686 0 0 1-.07-.164c-.183-.662-1.024-4.677 4.972-6.288 7.573-2.033 10.852 8.08 8.96 12.505-.642 1.501-1.31 2.505-2.023 3.312a.658.658 0 0 1-.842.124c-1.034-.658-1.68-2.095-1.984-2.934"/> <path fill="#203A60" d="M297.344 4.364s2.652-5.488 8.517-4.082c5.863 1.405 4.87 7.884 4.874 13.26.003 5.08 4.687 4.334 6.044 7.157 1.39 2.892-7.597 7.53-12.84.072-2.738-3.895-.71-13.74-3.733-13.954-3.022-.214-2.862-2.453-2.862-2.453"/> <path fill="#B4ABBD" d="M301.343 7.48c-1.283-.173-3.776-1.374-4.23-3.304-.453-1.929.96.155 1.547.7.588.545 4.547 2.855 2.683 2.604"/> <path fill="#FFD8C5" d="M301.056 39.54c-.422 4.252-2 11.684-2.133 12.014 0 0-6.702 9.757-7.24 9.56-.538-.197-2.465.371-2.74.5-.275.127-1.675-.168-1.309.418.367.585 2.23.05 1.881.764-1.148 2.347-2.619 3.517-2.786 4.007-.168.49.472.52.472.52-.15.138-.63.797-.26.998.31.167.905-.277.905-.277s.101.453.348.508c.483.109.777-.52.777-.52.095.222.707.195.968.105.529-.181 3.013-3.169 3.637-4.594.128-.294 9.576-9.742 10.328-10.685.49-.615 2.03-7.069 2.276-12.035-.955-.319-2.459-.432-5.124-1.283"/> <path fill="#AF526D" d="M307.33 42.217l-7.567-.815s1.51-9.371 2.38-12.676c.169-1.373 2.418-4.272 4.721-1.59 1.773 2.065.467 15.08.467 15.08"/> <path fill="#FA978D" d="M288.246 20.635c.002.057.032.11.083.148.118.088.363.226.716.198.436-.034.566-.212.604-.308a.166.166 0 0 0 .005-.104l-.636-2.441a.212.212 0 0 0-.116-.135c-.115-.056-.306-.141-.396-.13-.071.007-.195.1-.275.166a.195.195 0 0 0-.076.157l.091 2.449z"/> <path fill="#C96B86" d="M315.745 142.872c.047-.611 2.475-2.015 3.042-1.563.293.234.997.5.935 1.305-.067.888-.877.76-1.481 2.338-.247.644-.441 1.398-1.587 2.219-.904.646-4.762.717-5.03.128-.835-1.836 3.934-1.983 4.121-4.427"/> <path fill="#C96B86" d="M319.044 145.801c.007.057.209.07.238.018.117-.204.45-3.333.45-3.333l-.476-.036s-.255 2.951-.212 3.351M297.607 141.491c.25-.56 2.982-.99 3.349-.364.189.324.835.745.835 1.551 0 1.256-1.272.75-2.163 1.686-.476.5-1.812 1.674-2.991 1.674-1.112 0-4.165-.005-4.33-.63-.556-2.115 4.074-1.157 5.3-3.917"/> <path fill="#C96B86" d="M300.619 145.996c.017.056.228.059.239 0 .237-1.343.723-2.659.723-2.659l-.478-.699s-.573 3.07-.484 3.358"/> <path fill="#FFCBB9" d="M318.722 141.183s-.17.952-1.048 1.345c-1.5.67-1.628.034-1.628.034-.024-.58-.636-2.736-.636-2.736l2.659.492s.128.422.653.865M300.882 141.158s-.45.856-1.407.965c-1.632.187-1.562-.458-1.562-.458.153-.56.221-2.801.221-2.801l2.386 1.272s-.005.44.362 1.022"/> <path stroke="#B1516D" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M1.003 128.406S5.07 82.752-12.283 58.333M12.456 68.721S4.505 87.42 3.995 125.235"/> <path fill="#FDC149" d="M13.304 59.652c-5.346-.468-10.06 3.484-10.528 8.826C2.307 73.821 6.26 78.531 11.608 79c5.346.468 10.059-3.483 10.527-8.826.469-5.342-3.485-10.053-8.831-10.52"/> <path stroke="#FFF" stroke-width="3" d="M13.134 61.587a7.772 7.772 0 0 0-8.422 7.06 7.77 7.77 0 0 0 7.065 8.418 7.772 7.772 0 0 0 8.423-7.061 7.77 7.77 0 0 0-7.066-8.417z"/> <path fill="#FFF" d="M13.049 68.554c-1.17-.585-1.495-.906-1.45-1.43.038-.419.402-.88 1.309-.8.802.07 1.39.435 1.395.439.061.04.132.064.204.07a.424.424 0 0 0 .419-.232l.269-.537a.344.344 0 0 0-.15-.458c-.475-.256-1.425-.504-1.435-.507-.015-.004-.068-.02-.063-.082l.068-.807a.452.452 0 0 0-.42-.48l-.394-.035a.452.452 0 0 0-.496.4l-.074.848c-.005.065-.08.087-.106.09-1.243.18-2.081.994-2.179 2.105-.121 1.385.984 2.112 2.195 2.691.967.476 1.34.905 1.29 1.482-.055.627-.672 1.015-1.5.943-.708-.062-1.626-.589-1.635-.594a.454.454 0 0 0-.19-.06.43.43 0 0 0-.428.242l-.26.543c-.093.204.007.384.148.473.561.353 1.684.63 1.734.642.013.003.08.034.075.096l-.074.844a.452.452 0 0 0 .42.48l.407.036a.452.452 0 0 0 .497-.4l.078-.888c.007-.083.07-.085.083-.087 1.323-.174 2.204-1.041 2.307-2.218.106-1.208-.506-2.048-2.044-2.809"/> <path fill="#A6425F" d="M.895 127.997s-20.794-3.554-17.436-42.133c0 0 29.577 15.943 17.436 42.133"/> <path fill="#C96B86" d="M3.023 126.05s17.994 1.981 24.35-30.636c0 0-28.17 6.164-24.35 30.636"/> <path stroke="#A6425F" d="M4.914 123.507s12.18-20.413 18.916-24.385"/> <path fill="#B95572" d="M-8.582 125.243h20.134s1.84-.059 1.84 1.538v11.076s-.726 4.735-4.695 7.879c0 0-1.017.79-2.13 1.35H-3.55s-6.596-3.909-6.596-9.906v-10.351s.304-1.586 1.563-1.586"/> <path fill="#963E60" d="M-10.145 130.284v5.6h23.537v-5.6z"/> </g> </g></svg>';
    $('#servicesBg2').append(servicesSVG);

    if ($('body').attr('id') == 'services') {
        setTimeout(function() {
            $('.bg2').hide();
            $('.bg2').fadeIn();
            headerAnim();
        }, 3400);
    }
}


if ($('body').attr('id') == 'services') {
    $('.fixedBanner .banner span').each(function() {
        $(this).css({ transform: 'scale(0,0)' });
        // $(this).css({'width': $(this).width(), 'height': $(this).height(), 'font-size': '0px'});
    });
}

// TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
$(window).on('load', function() {
    if ($('body').attr('id') == 'services') {
        for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
            TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
        }
        removeLoader();
    }
})

// TweenMax.to($('.fixedBanner .banner'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut});
var navLinks = document.getElementsByClassName("clmn_icon");

function serviceIconAnimate(row, rowIndex) {
    var id = "",
        jsonName = "service" + rowIndex;
        jsonName();
    // console.log($('#' + jsonName).find('svg').length);
    if ($('#' + jsonName).find('svg').length == 0) {
        // $('#' + jsonName).html('');
        var animation = bodymovin.loadAnimation({
            container: document.getElementById(jsonName),
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "dist/json/" + jsonName + ".json"
        });
        // animation.addEventListener('complete', function(){
        //     $('#'+jsonName).parents('.row').addClass('complete')
        // })
    }
}
if ($('body').attr('id') == 'services') {
    // TweenMax.set('.clmn_icon .greyIcon', { opacity: 0 });
    // TweenMax.set('.clmn_icon .greyElem', { transform: 'scale(0, 0)' });
    // TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50% 50% 0' });
    // TweenMax.set('.clmn_icon .greyBox', { transform: 'scale(0, 1)' });
    // TweenMax.set('.clmn_icon .yellowBox', { transform: 'scale(0, 1)' });
    // TweenMax.set('.clmn_icon .greyElemOpa', { opacity: 0 });
    // TweenMax.set('.clmn_content li', { opacity: 0 });
    // $('.clmn_icon').html();

    // introTextSet($('#services .content'));
    // $('.content .row .introText').each(function() {
    //         if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //             // introTextSet($(this));
    //             var currRow = $(this).parents('.row');
    //             // svgLetterAnimate(".sec1");
    //             var id = $(this).siblings('.svgLetterBox').attr('id');
    //             if ($('#' + id).find('svg').length == 0) {
    //                 var letteranimser = bodymovin.loadAnimation({
    //                     container: document.getElementById(id),
    //                     renderer: "svg",
    //                     loop: false,
    //                     autoplay: false,
    //                     path: "dist/json/letters/" + id + ".json"
    //                 });
    //                 letteranimser.addEventListener('DOMLoaded', function() {
    //                     letteranimser.playSegments([[0, 60]], true);
    //                     document.getElementById(id).addEventListener('mouseenter', function() {
    //                         console.log(letteranimser.getDuration(true))
    //                         letteranimser.playSegments([[61, 85]], true);
    //                     });
    //                     document.getElementById(id).addEventListener('mouseleave', function() {
    //                         letteranimser.playSegments([[86, 120]], true);
    //                     });
    //                 });
    //             }



    //             introtextAnimate(currRow);
    //             if (!mobile) {
    //                 serviceIconAnimate(currRow, currRow.index());
    //             }

    //             for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //                 TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //             }

    //             $(this).parents('.row').addClass('complete');
    //         }
    //     });
    // docServicesBtmSecScrollTop = $('footer').position().top - 120;

    // $(window).on('resize scroll', function() {
    //     docScrollTop = $(window).scrollTop();
    //     // if ($('footer').isInViewportCustom()) {
    //     //     $('#social').fadeOut(500);
    //     //     $('.scrollDown').fadeOut(500).siblings('#back2top').delay(50, 'queueName').fadeIn(500);
    //     //     $('.free-consultation-floating-wrapper').css({ opacity: 0 });
    //     //     console.log(555);
    //     // } else {
    //     //     $('#social').fadeIn(500);
    //     //     $('#back2top').fadeOut(500).siblings('.scrollDown').delay(50, 'queueName').fadeIn(500);
    //     //     $('.free-consultation-floating-wrapper').css({ opacity: 1 });
    //     //     console.log(5888);
    //     // }
    //     // $('.content .row .introText').each(function() {
    //     //     if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //     //         // introTextSet($(this));
    //     //         var currRow = $(this).parents('.row');
    //     //         // svgLetterAnimate(".sec1");
    //     //         var id = $(this).siblings('.svgLetterBox').attr('id');
    //     //         if ($('#' + id).find('svg').length == 0) {
    //     //             var letteranimser = bodymovin.loadAnimation({
    //     //                 container: document.getElementById(id),
    //     //                 renderer: "svg",
    //     //                 loop: false,
    //     //                 autoplay: false,
    //     //                 path: "dist/json/letters/" + id + ".json"
    //     //             });
    //     //             letteranimser.addEventListener('DOMLoaded', function() {
    //     //                 letteranimser.playSegments([[0, 60]], true);
    //     //                 document.getElementById(id).addEventListener('mouseenter', function() {
    //     //                     console.log(letteranimser.getDuration(true))
    //     //                     letteranimser.playSegments([[61, 85]], true);
    //     //                 });
    //     //                 document.getElementById(id).addEventListener('mouseleave', function() {
    //     //                     letteranimser.playSegments([[86, 120]], true);
    //     //                 });
    //     //             });
    //     //         }



    //     //         introtextAnimate(currRow);
    //     //         if (!mobile) {
    //     //             serviceIconAnimate(currRow, currRow.index());
    //     //         }

    //     //         for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //     //             TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //     //         }

    //     //         $(this).parents('.row').addClass('complete');
    //     //     }
    //     // });


    // });
}
//Services Page
// headerSet();

//Membership Page

if ($('body').attr('id') == 'membership') {
    // $('.enterprise-list.fixed').css({top: $('header').outerHeight() });

    $(window).on('scroll resize', function() {
        docScrollTopMem = $(document).scrollTop();
        // if(docScrollTop >= ($('.scrollFix').offset().top - $('header').outerHeight()) )
        // {
        //     // $('.scrollFix .title span').css
        //     // $('.scrollFix .title').css({background: '#fffd'});
        //     // console.log(123456);
        // }
        // else
        // {
        //     // $('.scrollFix').css({background: 'none'});
        // }

        // Fixed Table header
        var docScrolloffset = $(document).scrollTop() + $('header').outerHeight();
        var innerBoxScrollTop = $('.enterprise-list.orig:visible').offset().top;

        if($('.check-box-pro').is(":checked") == false) {
            if(docScrolloffset > innerBoxScrollTop) {
                $('#Startup .enterprise-list.fixed').addClass("makeGridHeaderVisible");
                $('#Startup .enterprise-list.orig .title').css({opacity: 0});
            }
            else {
                $('#Startup .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
                $('#Startup .enterprise-list.orig .title').css({opacity: 1});
            }
        }
        else {
            if(docScrolloffset > innerBoxScrollTop) {
                $('#Providers .enterprise-list.fixed').addClass("makeGridHeaderVisible");
                $('#Providers .enterprise-list.orig .title').css({opacity: 0});
            }
            else {
                $('#Providers .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
                $('#Providers .enterprise-list.orig .title').css({opacity: 1});
            }
        }

        // if(docScrolloffset > innerBoxScrollTop)
        // {
        //     if($('.check-box-pro').is(":checked") == false)
        //     {
        //         //$('#Startup .enterprise-list.fixed').css({opacity: 1});
        //         $('#Startup .enterprise-list.fixed').addClass("makeGridHeaderVisible");
        //         $('#Startup .enterprise-list.orig .title').css({opacity: 0});

        //     }
        //     else
        //     {
        //         //$('#Providers .enterprise-list.fixed').css({opacity: 1});
        //         $('#Providers .enterprise-list.fixed').addClass("makeGridHeaderVisible");
        //         $('#Providers .enterprise-list.orig .title').css({opacity: 0});
        //     }
        // }
        // else
        // {
        //     if($('.check-box-pro').is(":checked") == false)
        //     {
        //         //$('#Startup .enterprise-list.fixed').css({opacity: 0});
        //         $('#Startup .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
        //         $('#Startup .enterprise-list.orig .title').css({opacity: 1});

        //     }
        //     else
        //     {
        //         //$('#Providers .enterprise-list.fixed').css({opacity: 0});
        //         $('#Providers .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
        //         $('#Providers .enterprise-list.orig .title').css({opacity: 1});
        //     }
        // }
        // Fixed Table header



    });
    $('#membershipBg2').hide();
    $('.scrollDownHolder').hide();
    // $('.fixedBanner .banner .divAnime').each(function() {
    //     $(this).css({ transform: 'scale(0,0)' });
    // });

    membershipBg2Data = {
        container: document.getElementById('membershipBg2'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'dist/json/membership.json', // the path to the animation json
        rendererSettings: {

            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    };
    membershipBg2Anime = bodymovin.loadAnimation(membershipBg2Data);
    membershipBg2Anime.addEventListener('DOMLoaded', function() {
        removeLoader()
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('.scrollDownHolder').fadeIn();
        $('.fixedBanner .banner .divAnime').each(function() {
            $(this).css({ transform: 'scale(1,1)', transition: 'all 0.4s ease-in-out' });
        });
        $('.membership .banner span b').each(function(index) {
            $(this).delay((index * 80)).animate({ opacity: 1 }, 500);
        });
        $('#membershipBg2').fadeIn();
        membershipBg2Anime.play();
        // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)

    });

    // TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
    // $(window).on('load', function() {
    //     for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
    //         TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
    //     }
    // });
    var owl = $('.grid-slider-owl');
    owl.owlCarousel({
        center: true,
        items: 1,
        loop: false,
        margin: 15,
        nav: true,
        dots: true
    });

    $(".content-mobile .wf-text").click(function() {
        $('.wf-text').addClass("active");
        $('.Startup').removeClass("hide");
        $('.Providers').addClass("hide");
        $('.des-text').removeClass("active");
    });
    $(".content-mobile .des-text").click(function() {
        $('.des-text').addClass("active");
        $('.Providers').removeClass("hide");
        $('.Startup').addClass("hide");
        $('.wf-text').removeClass("active");
    });
    // $(".apply-btn").click(function() {
    //     $('.apply-form').addClass("form-show");
    // });
    // $(".form-close").click(function() {
    //     $('.apply-form').removeClass("form-show");
    // });
    $(".check-box-pro").prop("checked", false);
    $(".check-box-pro").click(function() {

        if ($(this).is(":checked")) {
            $('.wf-text').removeClass("dark-text");
            $('.des-text').addClass("light-text");
            $('#Startup').addClass("hide");
            $('#Providers').removeClass("hide");

        } else {
            $('.wf-text').addClass("dark-text");
            $('.des-text').removeClass("light-text");
            $('#Startup').removeClass("hide");
            $('#Providers').addClass("hide");

        }

    });
};
$('#wrapper').append('<a href="contact-us.html" target="_blank" class="contactFloatingMobile mob-show">contact us</a>')

//Membership Page
if (isInnerpage) {
    // headerSet();
    if ($('body').hasClass('whiteHeader')) {
        $('header .logo .st0, header .logo .st1').attr('fill', '#fff');
        $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#fff');
    }
    if ($('body').attr('id') == 'services') {
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('[id^=zoomin]').each(function() {
            // TweenMax.set($(this),{opacity: 0});
            // if ($(this).attr('transform') != undefined) {
            // $(this).attr('data-orig-transform',$(this).attr('transform'))
            // $(this).attr('transform', $(this).attr('transform') + ' scale(0)');
            // } else { $(this).attr('transform', ' scale(0)'); }
            // if($(this).attr('data-orig-transform') != undefined)
            // {
            //     var to = $(this).attr('data-orig-transform');
            //     var to1 = to.split('(');
            //     var to2 = to1[1].split(',')
            //     var x = to2[0];
            //     var y = to2[1].split(')');
            //     console.log(x +'--'+ y);
            //     to3 = x + y + 0;
            //     $(this).css({'transform-origin': to3});
            // }
            // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
        })

        TweenMax.set('text', { opacity: 0 });
        TweenMax.set('.ico path', { strokeDashoffset: 1250 });
        TweenMax.set('.ico path', { 'stroke-dasharray': 1250 });
    }
    // $(this).attr('transform-origin', '50% 50%')

    setTimeout(function() {
        // TweenMax.to('[id^=Stroke]', 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4");
        $('[id^=zoomin]').each(function() {
            $(this).attr('transform', $(this).attr('data-transform'))
            // TweenMax.to('[id^=zoomin]', 0.4, { transform: $(this).attr('data-transform'), ease: Power1.easeInOut });
            // if ($(this).attr('data-orig-transform') != undefined) {
            //     $(this).attr('transform', $(this).attr('data-orig-transform') + ' scale(1,1)');

            //     // TweenMax.to($(this), 0.5, { transform: $(this).attr('data-orig-transform') + ' scale(1,1)', ease: Power1.easeInOut }, "0.4");
            // } 
            // else 
            // { 
            //     $(this).attr('transform', 'scale(1,1)'); 
            // }
        })
        setTimeout(function() { TweenMax.to('.ico path', 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4"); }, 500);;
        $('text').each(function(index) {
            $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
        });
        $('#services .ico').each(function() {
            $(this).addClass('active');
        });
    }, 1500)
    // if ($('body').attr('id') == 'homePage') {
    //     headerAnim();
    //     scrollAnimStart();
    //     startSocialAnims();
    // }

    /** create a free consultation floating section starts **/
    // <div class="free-consultation-floating-wrapper">
    //     <div class="free-consultation-box">
    //         <label>For a free consultation</label>
    //         <a href="" class="button">Contact us</a>
    //     </div>
    // </div>

    if (!$(".free-consultation-floating-wrapper").length) {
        var freeConsultation = "<div class='free-consultation-floating-wrapper'><div class='free-consultation-box'><label>For a free consultation</label><a href='contact-us.html' target='_blank' class='button'>Contact us</a></div></div>";

        $("#wrapper").append(freeConsultation);
    }
    /** create a free consultation floating section ends **/

}

function shrinkHeader() {
    docScrollTop = $(document).scrollTop();

    if (docScrollTop > $('header').outerHeight()) {
        $('header, #sectionTitle1, .pageTitle').addClass('resize');
    } else {
        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
    }
}
$(window).on('scroll', function() {

});

//Why Join Page

joinBG2 = {
    container: document.getElementById('joinBg2'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/businessHub.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};



function joinIconAnimate(row) {
    console.log(row);
    if (row.index() == 0) {
        TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });

        TweenMax.to($(row).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
        TweenMax.to($(row).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
        TweenMax.to($(row).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });

        TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
        TweenMax.to($(row).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
    }
}
if ($('body').attr('id') == 'whyJoin') {
    TweenMax.set('.clmn_icon .triangleAnim', { opacity: 0 });
    TweenMax.set('.clmn_icon .greyIcon', { opacity: 0 });
    TweenMax.set('.clmn_icon .greyElem', { transform: 'scale(0, 0)' });
    TweenMax.set('.clmn_icon .coinElem', { transform: 'scale(0, 0)' });
    TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50% 50% 0' });
    TweenMax.set('.clmn_icon .greyBox', { transform: 'scale(0, 1)' });
    TweenMax.set('.clmn_icon .yellowBox', { transform: 'scale(0, 1)' });
    TweenMax.set('.clmn_icon .greyElemOpa', { opacity: 0 });
    TweenMax.set('.clmn_content li', { opacity: 0 });
    // TweenMax.set('#aboutnetwork', { opacity: 0 });
    TweenMax.set('#squareMove', { opacity: 0 });
    TweenMax.set('.circleMoveHolder', { opacity: 0 });
    TweenMax.set('.wave-img', { opacity: 0 });


    // aboutnetworkData = {
    //     container: document.getElementById('aboutnetwork'),
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'dist/json/whyjoin.json', // the path to the animation json
    //     rendererSettings: {
    //         scaleMode: 'noScale',
    //         clearCanvas: true,
    //         progressiveLoad: true,
    //         hideOnTransparent: true
    //     }
    // };

    nAboutAnimData = {
        container: document.getElementById('nAbout'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/nAbout.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    nAboutAnim = bodymovin.loadAnimation(nAboutAnimData);
    // aboutnetwork = bodymovin.loadAnimation(aboutnetworkData);
    whyJoinJAnimData = {
        container: document.getElementById('why_j'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_j.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinJAnim = bodymovin.loadAnimation(whyJoinJAnimData);

    whyJoinFAnimData = {
        container: document.getElementById('why_f'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_f.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinFAnim = bodymovin.loadAnimation(whyJoinFAnimData);    
    whyJoinBAnimData = {
        container: document.getElementById('why_b_mobile'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_b.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinBAnim = bodymovin.loadAnimation(whyJoinBAnimData);
    whyJoinBAnimDesktopData = {
        container: document.getElementById('why_b_desktop'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_b.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinBAnimDesktop = bodymovin.loadAnimation(whyJoinBAnimDesktopData);

    // introTextSet('.content .row:nth-child(1)');
    

    $(window).on('resize scroll', function() {

        $('.content .row .introText').each(function() {
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(0).hasClass('complete') && $(this).parents('.row').index() == 0) {
                var section = $(this).parents('row');
                introTextSet(section);
                if (!$('#why_j').hasClass('complete')) {
                    $('#why_j').addClass('complete')
                    introtextAnimate('.content .row:nth-child(1)')
                    whyJoinJAnim.playSegments([[0, 60]], true);
                }
                document.getElementById('why_j').addEventListener('mouseenter', function() {
                    console.log(whyJoinJAnim.getDuration(true))
                    whyJoinJAnim.playSegments([[60, 80]], true);
                });
                document.getElementById('why_j').addEventListener('mouseleave', function() {
                    whyJoinJAnim.playSegments([[80, 100]], true);
                });
                introtextAnimate(section);
            }
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(0).hasClass('complete') && $(this).parents('.row').index() == 1) {
                var currRow = $(this).parents('.row');
                setTimeout(function() {
                    TweenMax.to($(currRow).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
                    TweenMax.to($(currRow).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
                    TweenMax.to($(currRow).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
                    TweenMax.to($(currRow).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
                    TweenMax.to($(currRow).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
                }, 1000)
                $(this).parents('.row').addClass('complete');
            }
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(1).hasClass('complete') && $(this).parents('.row').index() == 2) {
                var section = $(this).parents('row');
                introTextSet(section);
                if (!$('#nAbout').hasClass('complete')) {
                    $('#nAbout').addClass('complete')
                    nAboutAnim.playSegments([[0, 100]], true);
                }
                document.getElementById('nAbout').addEventListener('mouseenter', function() {
                    console.log(nAboutAnim.getDuration(true))
                    nAboutAnim.playSegments([[100, 160]], true);
                });
                document.getElementById('nAbout').addEventListener('mouseleave', function() {
                    nAboutAnim.playSegments([[176, 200]], true);
                });
                introtextAnimate(section);

                // TweenMax.to('#aboutnetwork', 1, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('#squareMove', 0.5, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('.circleMoveHolder', 0.5, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('.wave-img', 0.5, { opacity: 1, ease: Power1.easeInOut });
                // setTimeout(function() {
                //     if (!$('#aboutnetwork').hasClass('complete')) {
                //         $('#aboutnetwork').addClass('complete')
                //         // aboutnetwork.addEventListener('DOMLoaded', function(){
                //         aboutnetwork.playSegments([[59, 160]], true);
                //         // setTimeout(function(){
                //         //     aboutnetwork.playSegments([[114, 240]], true);

                //         // },2000)
                //         if (!mobile) {
                //             $('.scrollbar-rail').scrollbar({
                //                 onScroll: function() {
                //                     $('.scroll-wrapper').find('.jsonChange').isInViewport({ tolerance: 0, viewport: $('.scroll-wrapper') }).playit();
                //                 }
                //             });
                //         }

                //     }
                // }, 1000)


            }
        });
    });
}
// document.getElementsByClassName('jsonChange')[0].addEventListener('mouseenter', function(){
//     aboutnetwork.playSegments([[59, 160]], true);
// })

//Membership Page


// $('.fixedBanner .banner span').each(function() {
//     $(this).css({ transform: 'scale(0,0)' });
//     // $(this).css({'width': $(this).width(), 'height': $(this).height(), 'font-size': '0px'});
// });

// TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
// $(window).on('load', function() {
//     for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
//         TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
//     }
// })

// TweenMax.to($('.fixedBanner .banner'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut});
// function serviceIconAnimate(row) {
// TweenMax.to($(row).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
// TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
// // TweenMax.set('.clmn_icon .greyElem', {'transform-origin': '50% 50% 0'});
// if (row.index() == 0) {
//     TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut });
// } else {
//     TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50px 160px 0' });
//     TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
// }
// TweenMax.to($(row).find('.clmn_icon').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
// if (row.index() == 4 || row.index() == 1) {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
// } else if (row.index() == 3 || row.index() == 2) {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(0, 0)', ease: Power1.easeInOut });
// } else {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(30px, 0)', ease: Power1.easeInOut });
// }
// TweenMax.to($(row).find('.clmn_icon').find('.greyElemOpa'), 0.4, { opacity: 1, ease: Power1.easeInOut });
// }
// if ($('body').attr('id') == 'membership') {
//     introTextSet($('#membership .content'));
//     $(window).on('resize scroll', function() {
//         docScrollTop = $(document).scrollTop();
//         scrollHei = (!mobile) ? ($(window).outerHeight() - $('header').outerHeight()) : ($('.fixedBanner').outerHeight() - $('header').outerHeight());
//         if (docScrollTop > scrollHei && isInnerpage) {
//             console.log(1254);
//             $('.logo svg .st0').each(function() {
//                 $(this).attr('fill', $(this).attr('data-fill'));
//             })
//             $('.logo svg .st1').each(function() {
//                 $(this).attr('fill', $(this).attr('data-fill'));
//             })
//             $('body').removeClass('whiteHeader');
//             // $('#navIcon .dotsHolder .dots').css('background','#ca6c86');
//             // $('#navIcon .lineHolder .line').css('background','#572359');
//             // $('header').css('background','rgba(255, 255, 255, 0.9)');
//         } else {
//             $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
//             $('body').addClass('whiteHeader');
//             //$('#navIcon .dotsHolder .dots').css('background','#fff');
//             //$('#navIcon .lineHolder .line').css('background','#fff');
//             //$('header').css('background','none');
//         }
//         $('.content .row .introText').each(function() {
//             if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
//                 // introTextSet($(this));
//                 var currRow = $(this).parents('.row');
//                 introtextAnimate(currRow);
//                 serviceIconAnimate(currRow);

//                 // for (var i = 0; i < $(this).next('ul').find('li').length; i++) {
//                 //     console.log(i);
//                 //     TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
//                 // }

//                 $(this).parents('.row').addClass('complete');
//             }
//         });
//     });
// };
// $( document ).ready(function() {
//     $(".apply-btn").click(function() {
//         $('.apply-form').addClass("form-show");
//     });
//     $(".form-close").click(function() {
//         $('.apply-form').removeClass("form-show");
//     });
//     $(".check-box-pro").prop("checked", false);
//     $(".check-box-pro").click(function () {

//         if ($(this).is(":checked")) {
//             $('.wf-text').removeClass("dark-text");
//             $('.des-text').addClass("light-text");
//             $('#Startup').addClass("hide");
//             $('#Providers').removeClass("hide");

//         } else {
//             $('.wf-text').addClass("dark-text");
//             $('.des-text').removeClass("light-text");
//             $('#Startup').removeClass("hide");
//             $('#Providers').addClass("hide");

//         }

//     });
// });
//Membership Page
// if (isInnerpage) {
//     headerSet();
//     headerAnim();
//     scrollAnimStart();
//     startSocialAnims();
// }
// =======
/*document.getElementsByClassName('jsonChange')[0].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[114, 240]], true);
})

document.getElementsByClassName('jsonChange')[1].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[240, 310]], true);
})

document.getElementsByClassName('jsonChange')[2].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[310, 400]], true);
})*/
//
// research

// database
// 
// tools
// 
$('.jsonChange').on('mouseeenter', function() {
    var jsonFrames = $(this).attr('data-frames');
    //     // if($(this).hasClass(''))
})
if (!mobile && ($('body').attr('id') == 'aboutPage' || $('body').attr('id') == 'whyJoin')) {
    if (!mobile) {
        $('.scrollbar-rail').scrollbar();
    }
}

// Paste here
$(window).on('scroll resize', function() {
    // if ($('.fixedBanner').isInViewportCustom() && $('body').attr('id') == "join") {
    //     joinBG2Init.play();
    // } else {
    //     joinBG2Init.pause();
    // }
    // $('.titleLetterAnim svg').each(function() {
    //     if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
    //         if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
    //             $(this).parents('.titleLetterAnim').addClass('complete');
    //             TweenMax.to($(this).find('.stroke'), 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
    //             TweenMax.to($(this).find('.fill'), 0.4, { fill: '#FCC14A', ease: Power1.easeInOut }, "0.5");
    //         }
    //     }
    // });
    if (!mobile) {
        if ($(window).scrollTop() > ($('.fixedBanner').outerHeight() + 20)) {
            $('.fixedBanner .banner').css({ position: 'relative' })
        } else {
            $('.fixedBanner .banner').css({ position: 'fixed' })
        }
        shrinkHeader();
    }
    $('.titleLetterAnim > .lettring').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 100)).animate({ opacity: 1 }, 500);
            });
            $(this).parents('h2').find('svg').delay(1000).animate({ opacity: 1 }, 500);

        }
    });

    docScrollTop = $(document).scrollTop();
    scrollHei = (!mobile) ? ($(window).outerHeight() - $('header').outerHeight()) : ($('.fixedBanner').outerHeight() - $('header').outerHeight());
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent * 100)
    if (scrollPercentRounded > 95) {
        $('.scrollDown').fadeOut();
        $('#back2Top').fadeIn();
    } else {
        $('.scrollDown').fadeIn();
        $('#back2Top').fadeOut();
    }

    if (docScrollTop > scrollHei && isInnerpage) {
        // console.log(1);
        $('.logo svg .st0').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        })
        $('.logo svg .st1').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        //$('.scrollDownHolder .scrollDown').addClass('onWhite').find('path').attr('fill', '#562359');
        $('.scrollDownHolder').addClass('onWhite').find('path').attr('fill', '#562359');
        setTimeout(function() { $('.free-consultation-floating-wrapper').css({ opacity: 1 }); }, 300)
        // console.log($('.iconCircle').attr('data-fill'))
        $('#social').addClass('onWhite');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: $('#social').attr('data-fill') });
                TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: $('#social').attr('data-fill') });
            }
        }
        // $('.pageTitle').animate({opacity: 0}, 500);
        $('.pageTitle').addClass('toggle');
        $('body').removeClass('whiteHeader');
        // $('.iconCircle').each(function() {
        //     $(this).attr('stroke', $(this).attr('data-fill'));
        // });
        // $('.iconPath').each(function() {
        //     $(this).attr('fill', $(this).attr('data-fill'));
        // });
        // $('#navIcon .dotsHolder .dots').css('background','#ca6c86');
        // $('#navIcon .lineHolder .line').css('background','#572359');
        // $('header').css('background','rgba(255, 255, 255, 0.9)');
    }
    if (docScrollTop < scrollHei && isInnerpage) {
        // console.log(11);
        $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        $('body').addClass('whiteHeader');
        // $('.pageTitle').animate({opacity: 1}, 500);
        $('.pageTitle').removeClass('toggle');
        $('.scrollDownHolder .scrollDown').removeClass('onWhite').find('path').attr('fill', '#fff');
        $('#social').removeClass('onWhite');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: '#fff' });
                TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: '#fff' });
            }
        }
        setTimeout(function() { $('.free-consultation-floating-wrapper').css({ opacity: 0 }); }, 300)

    }

    $('.benefits-title').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
            });
        }
    })
    $('.slideUp').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            // $(this).each(function(index) {
            //     $(this).delay((index * 100)).animate({ top: 0, opacity: 1 }, 500);
            // });
        }
    });

    if ($(".lets-get-started").length) {
        docScrollTop = $(window).scrollTop() + $(window).height();

        if (docScrollTop >= $(".lets-get-started").position().top) {
            $('.free-consultation-floating-wrapper, #social').fadeOut(500);
        } else {
            $('.free-consultation-floating-wrapper, #social').fadeIn(500);
        }
    }
});

// headerSet()
// socialAnimSet()
// TweenMax.set('#whyJoin .dots-bg', { opacity: 0 });
//Why Join Page
function removeLoader() {
    $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
        $('.fixedBanner .loader').remove();
    });
}
if(page_name == 'businesshub.html' && mobile)
{
    whyJoinJAnim.playSegments([[0, 60]], true);
    whyJoinBAnim.playSegments([[0, 80]], true);
    whyJoinFAnim.playSegments([[0, 100]], true);
    nAboutAnim.playSegments([[0, 100]], true);
    $('.slideUp').each(function() {
            $(this).addClass('complete');
    });
    TweenMax.to($('.sec3').find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
    TweenMax.to($('.sec3').find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
    TweenMax.to($('.sec3').find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
    TweenMax.to($('.sec3').find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
    TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
    TweenMax.to($('.sec3').find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });

}

