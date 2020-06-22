$(document).ready(function() {});
$(window).on('load', function() {
    $('.entryTitle').css({ width: $('.logo').outerWidth(), top: $('.logo').outerHeight(true) + 40, left: $('.logo').position().left });

    $('#fullpage').fullpage({
        // anchors: ['SITE'],
        normalScrollElements: '.scroll',
        scrollHorizontally: true,
        controlArrows: false,
        loopTop: false,
        loopBottom: false,
        loopHorizontal: false,
        onSlideLeave: function(section, origin, destination, direction) {

            var secss = section;
            // console.log(JSON.stringify(section));
            // console.log(JSON.stringify(origin));
            console.log(direction);
            var orgIndex = JSON.parse(JSON.stringify(origin));
            var nxtIndex = JSON.parse(JSON.stringify(destination));
            // console.log(nxtIndex.index);

            // Clock
            var secAttrData = $('.slide').eq(nxtIndex.index).attr('data-sec');
            $('.time').attr('class', 'time');
            $('.time').attr('class', 'time ' + secAttrData);
            // Clock

            // logo
            (nxtIndex.index == 5) ?
            ($('.logo svg path').attr('class', 'st1')) :
            ($('.logo svg path').attr('class', 'st0'));
            // logo


            $('.secs .sec.active .animate').each(function() {
                $(this).removeClass($(this).attr('data-animate'));
                var delayClass = '';
                if ($(this).attr('data-delay')) {
                    delayClass = 'delay-' + $(this).attr('data-delay');
                    $(this).removeClass(delayClass);
                }
            });

            if (direction == "left") {
                $('.slide.active .content').css({left: '80%'});
                $('.slide.active .content .title').css({left: '0%'});
                $('.slide.active .content .desc').css({transform: 'translate(-50%, 0)'});
            }

            if (direction == "right") {
                // $('.slide.active').find('.animate').each(function() {
                //     if(!$(this).attr('data-animate'))
                //     {
                //         var offsetLft = $(this).offset().left;
                //         var leftPos = offsetLft + $(this).outerWidth();
                //         $(this).css({ left: -leftPos });
                //     }
                // });
                // $('.slide.active').next('.slide').find('.animate').each(function() {
                //     if(!$(this).attr('data-animate'))
                //     {
                //         var offsetLft = $(this).offset().left
                //         var leftPos = offsetLft;
                //         $(this).css({ left: leftPos });
                //     }
                // });
                $('.slide.active .content').css({ left: '-80%'});
                $('.slide.active .content .title').css({left: '-0%'});
                $('.slide.active .content .desc').css({transform: 'translate(50%, 0)'});
                if(nxtIndex.index == 5)
                {
                    $('.slide').eq(5).find('.tipTitle').css({left: '230%'});
                    $('.slide').eq(5).find('.tipText').css({left: '280%'});
                    $('.slide').eq(5).find('.link').css({left: '330%'});
                }
            }
            var bgColor = $('.slide').eq(nxtIndex.index).attr('data-color');
            $('.background').css({background: bgColor});
            console.log(nxtIndex.index)
            if(nxtIndex.index == 0 || nxtIndex.index == 5 )
            {
                setTimeout(function(){
                    $('.secs .sec.active .animate').each(function() {
                        $(this).addClass($(this).attr('data-animate'));
                    // $(this).removeAttr('data-animate');
                    });
                },700);    
            }
            // setTimeout(function(){
            //     fullpage_api.moveTo('SITE', 1);
            // },300);
            // return false;
        },
        afterSlideLoad: function(section, origin, destination, direction) {

            console.log(JSON.parse(JSON.stringify(origin)));
            console.log(JSON.parse(JSON.stringify(destination)));
            var nxtIndex = JSON.parse(JSON.stringify(destination));
            // if (direction == 'left') {

            $('.slide').eq(nxtIndex.index).find('.tipTitle').css({left: 0});
            $('.slide').eq(nxtIndex.index).find('.tipText').css({left: 0});
            $('.slide').eq(nxtIndex.index).find('.link').css({left: 0});
              
            $('.slide.active .content').css({left: '0%'});
            $('.slide.active .content .title').css({left: '-27%'});
            $('.slide.active .content .desc').css({transform: 'translate(115%, 0)'});


            // }
            // if (direction == 'right') {
                // $('.slide.active .content').css({left: '0%'});
                // $('.slide.active .content .title').css({left: '-27%'});
                // $('.slide.active .content .desc').css({transform: 'translate(115%, 0)'});
                // $('.slide.active').find('.animate').each(function() {
                //     // if(!$(this).attr('data-animate'))
                //     // {
                //         var leftPos = $(window).outerWidth();
                //         console.log($(window).outerWidth())
                //         $(this).css({ left: leftPos });
                //     // }
                // });

                // $('.slide.active').find('.animate').each(function() {
                //     if(!$(this).attr('data-animate'))
                //     {
                //         var leftPos = $(window).width() - $(this).offset().left;
                //         $(this).css({ transition: 'left ease-in-out 1s', 'transition-delay': $(this).attr('data-delay') })
                //         $(this).css({ left: '0px' })
                //     }
                // });
            // }
            // $('.secs .sec.active .animate').each(function() {
            //     $(this).addClass($(this).attr('data-animate'));
            //     // $(this).removeAttr('data-animate');
            // });
        },
        onLeave: function(origin, destination, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {
            // $('.slide').find('.animate').each(function(){
            //     $(this).attr('data-offset', $(this).parent()    .position().left);
            // });
            $('[data-animate="fadeOut"]').each(function() {
                $(this).fadeOut(500);
                setTimeout(function() {
                    firstAnimate();
                }, 500)
            });
        }
    })
});

function firstAnimate() {
    $('[data-animate="slideFromTop"]').each(function() {
        $(this).addClass('slideFromTop');
        // $(this).removeAttr('data-animate');
    });
    $('[data-animate="slideFromLeft"]').each(function() {
        $(this).addClass('slideFromLeft');
        // $(this).removeAttr('data-animate');
    });
    $('.secs .sec.active .animate').each(function() {
        $(this).addClass($(this).attr('data-animate'));
        // $(this).removeAttr('data-animate');
    });
    // $('[data-animate="zoomOut"].clock').each(function() {
    //     $(this).addClass('zoomOut');
    //     // $(this).removeAttr('data-animate');
    //     setTimeout(function() {
    //         if ($('.sec:nth-child(1)').hasClass('active')) {
    //             $('.timeofday').addClass('morning')
    //         }
    //         // var blinkInterval = setInterval(function() {
    //         //     $('.clock .time').toggleClass('blink');
    //         // }, 1000);
    //     }, 600);
    // });

}
document.addEventListener('DOMContentLoaded', function() {

    var cursor = document.createElement('div');
    var cursorPoint = document.createElement('div');
    var cursorTail = document.createElement('div');

    cursor.classList.add('cursor');
    cursorPoint.classList.add('cursor-point');
    cursorTail.classList.add('cursor-tail');

    cursor.appendChild(cursorPoint);
    cursor.appendChild(cursorTail);
    document.body.appendChild(cursor);

    var cursorPoint = document.querySelector('.cursor-point');
    var cursorTail = document.querySelector('.cursor-tail');

    document.addEventListener('mousemove', function(e) {
        cursorPoint.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
        cursorTail.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
    });

    document.addEventListener('click', function(e) {
        cursorPoint.classList.add("cursor-click");
        setTimeout(function() {
            cursorPoint.classList.remove("cursor-click");
        }, 450);
    });
});

// if (jQuery('.secs').length != 0) {
// if (jQuery(window).width() > 980) {

//apply parallax effect
// jQuery('.sec .img').parallax({ mouseport: jQuery('.sec') });

// $(window).load(function() {
//     jQuery('#parallax .parallax-layer').css('display', 'block');

// });
// }
// }
// $('.img').tilt({
//     maxTilt:        0,
//     perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
//     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//     scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
//     speed:          300,    // Speed of the enter/exit transition.
//     transition:     true,   // Set a transition on enter/exit.
//     disableAxis:    null,   // What axis should be disabled. Can be X or Y.
//     reset:          false,   // If the tilt effect has to be reset on exit.
//     glare:          false,  // Enables glare effect
//     maxGlare:       1       // From 0 - 1.
// })

const boxer = fullpage.querySelector(".img"),
    maxMove = fullpage.offsetWidth / 30,
    boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
    boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
    fluidboxer = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {
    let panelRect = fullpage.getBoundingClientRect();
    return {
        x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * fullpage.offsetWidth,
        y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * fullpage.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
    let mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - boxerCenterX,
        distY = mousePos.y - boxerCenterY;
    // if (Math.abs(distX) < 500 && distY < 200) {
    boxer.style.transform = "translate(" + (-1 * distX) / 50 + "px," + (-1 * distY) / 50 + "px)";
    // fullpage.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
    // }
})