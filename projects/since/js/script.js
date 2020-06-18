function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? ((hours < 10) ? '0' + hours : hours) : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + '<br>' + minutes + '<br><span>' + ampm + '</span>';
    return strTime;
}
$(document).ready(function(){
});
$(window).on('load', function() {
    
    $('.sec:nth-child(3) .img').css({height: $(window).outerHeight()})
    // $('.content .img').each(function(){
    //     // $(this).css({width: $(this).find('.img').outerWidth(true) })
    //     $(this).css({height: $(this).find('img').outerHeight(true)});
    //     $(this).find('img').css({width: $(this).find('img').outerWidth()})
    //     $(this).find('div').css({
    //         height: $(this).find('img').outerHeight(),
    //         // width: '0%'
    //     });
    // });
    $('#fullpage').fullpage({
        anchors: ['MORNING','AFTERNOON','EVENING','NIGHT','SUBSCRIBE'],
        normalScrollElements: '.scroll',
        onLeave: function(index, nextIndex, direction) {
            // if($('.secs .sec:nth-child(5)').hasClass('active'))
            // {
            $('.secs .sec:nth-child('+index+') .animate').each(function() {
                $(this).removeClass($(this).attr('data-animate'));
                // $(this).removeAttr('data-animate');
            });
            if(nextIndex == 5)
            {
                // $('.clock').css({top: '40%'})
                $('.clock').fadeOut(300);
                // alert(1);
            }
            else
            {
                $('.clock').fadeIn(300);
            }
        },
        afterLoad: function(anchorLink, index) {
            if($('.secs .sec:nth-child(1)').hasClass('active'))
            {
                setTimeout(function(){
                    $('.secs .sec:nth-child('+index+') .animate').each(function() {
                        $(this).addClass($(this).attr('data-animate'));
                        if($(this).attr('data-delay'))
                        {
                            $(this).addClass('delay-'+$(this).attr('data-delay'));
                        }
                        // $(this).removeAttr('data-animate');
                    });
                },500);
            }
            else {
                $('.secs .sec:nth-child('+index+') .animate').each(function() {
                    $(this).addClass($(this).attr('data-animate'));
                    if($(this).attr('data-delay'))
                    {
                        $(this).addClass('delay-'+$(this).attr('data-delay'));
                    }
                    // $(this).removeAttr('data-animate');
                });
            }
            $('.secs .sec.active').find('.primaryBtn').removeClass('delay-'+$('.secs .sec.active').find('.primaryBtn').attr('data-delay'));
            // $('.timeofday').removeClass('morning afternoon evening night');
            if($('.secs .sec:nth-child('+index+')').attr('data-sec'))
            {
                $('.timeofday').attr('class','timeofday '+ $('.secs .sec:nth-child('+index+')').attr('data-sec'));
            }
            if(index == 1)
            {
                $('.clock .time').html('09<br>00<br><span>am</span>');
            }
            if(index == 2)
            {
                $('.clock .time').html('13<br>00<br><span>pm</span>');
            }
            if(index == 3)
            {
                $('.clock .time').html('18<br>30<br><span>pm</span>');
            }
            if(index == 4)
            {
                $('.clock .time').html('21<br>45<br><span>pm</span>');
            }
            // $('.secs .sec:nth-child('+index+') [data-animate="scaleUpRight"]').each(function() {
            //     $(this).addClass('scaleUpRight');
            //     // $(this).removeAttr('data-animate');
            // });
        },
        afterRender: function() {
            // var ctime = formatAMPM(new Date);
            // $('.clock .time').html(ctime);
            // var intervalTime = setInterval(function() {
                // if (ctime != formatAMPM(new Date)) {
                    // $('.clock .time').html(ctime);
                // }
            // }, 30000);
            // setTimeout(function() { clearInterval(intervalTime) }, 900000);
            // $('.secs .sec .content').each(function(){
            //     alert(1);
            //    $(this).css({height: $(this).find('.img').outerHeight(true), width: $(this).find('.img').outerWidth(true) }) 
            // });
            // $('.content .sec .img > div').css({width: '0%'});
            // $('.img div').addClass('animate').attr('data-animate', 'imgReveal');
            $('[data-animate="fadeOut"]').each(function() {
                $(this).fadeOut(500);
                setTimeout(function() {
                    firstAnimate();
                }, 500)
            });
            var tOut = $('.secs .sec.active').find('.primaryBtn').attr('data-delay'); 
            setTimeout(function(){
               $('.secs .sec.active').find('.primaryBtn').removeClass('delay-'+$('.secs .sec.active').find('.primaryBtn').attr('data-delay')); 
            },  tOut);
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
    $('[data-animate="zoomOut"].clock').each(function() {
        $(this).addClass('zoomOut');
        // $(this).removeAttr('data-animate');
        setTimeout(function() {
            if($('.sec:nth-child(1)').hasClass('active'))
            {
                $('.timeofday').addClass('morning')
            }
            // var blinkInterval = setInterval(function() {
            //     $('.clock .time').toggleClass('blink');
            // }, 1000);
        }, 600);
    });
    
}
document.addEventListener('DOMContentLoaded', function(){

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

    document.addEventListener('mousemove', function(e){
        cursorPoint.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
        cursorTail.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
    });

    document.addEventListener('click', function(e){
        cursorPoint.classList.add("cursor-click");
        setTimeout(function(){
                cursorPoint.classList.remove("cursor-click");
        }, 450);
    });
});


// $('.content').tilt({
//     maxTilt:        20,
//     perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
//     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//     scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
//     speed:          300,    // Speed of the enter/exit transition.
//     transition:     true,   // Set a transition on enter/exit.
//     disableAxis:    null,   // What axis should be disabled. Can be X or Y.
//     reset:          true,   // If the tilt effect has to be reset on exit.
//     glare:          false,  // Enables glare effect
//     maxGlare:       1       // From 0 - 1.
// })

// const boxer = fullpage.querySelector(".img"),
//     maxMove = fullpage.offsetWidth / 30,
//     boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
//     boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
//     fluidboxer = window.matchMedia("(min-width: 726px)");

// function getMousePos(xRef, yRef) {
//     let panelRect = fullpage.getBoundingClientRect();
//     return {
//         x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * fullpage.offsetWidth,
//         y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * fullpage.offsetHeight
//     };
// }

// document.body.addEventListener("mousemove", function(e) {
//     let mousePos = getMousePos(e.clientX, e.clientY),
//         distX = mousePos.x - boxerCenterX,
//         distY = mousePos.y - boxerCenterY;
//     // if (Math.abs(distX) < 500 && distY < 200) {
//         boxer.style.transform = "translate(" + (-1 * distX) / 20 + "px," + (-1 * distY) / 20 + "px)";
//         // fullpage.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
//     // }
// })