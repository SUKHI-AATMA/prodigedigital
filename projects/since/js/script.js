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
$(window).on('load', function() {
    $('.sec:nth-child(3) .img').css({height: $(window).outerHeight()})
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
                $('.clock').css({top: '40%'})
                // alert(1);
            }
            else
            {
                $('.clock').css({top: '50%'})
            }
        },
        afterLoad: function(anchorLink, index) {
            if($('.secs .sec:nth-child(1)').hasClass('active'))
            {
                setTimeout(function(){
                    $('.secs .sec:nth-child('+index+') .animate').each(function() {
                        $(this).addClass($(this).attr('data-animate'));
                        // $(this).removeAttr('data-animate');
                    });
                },500);
            }
            else {
                $('.secs .sec:nth-child('+index+') .animate').each(function() {
                    $(this).addClass($(this).attr('data-animate'));
                    // $(this).removeAttr('data-animate');
                });
            }
            // $('.timeofday').removeClass('morning afternoon evening night');
            if($('.secs .sec:nth-child('+index+')').attr('data-sec'))
            {
                $('.timeofday').attr('class','timeofday '+ $('.secs .sec:nth-child('+index+')').attr('data-sec'));
            }
            // $('.secs .sec:nth-child('+index+') [data-animate="scaleUpRight"]').each(function() {
            //     $(this).addClass('scaleUpRight');
            //     // $(this).removeAttr('data-animate');
            // });
        },
        afterRender: function() {
            var ctime = formatAMPM(new Date);
            $('.clock .time').html(ctime);
            var intervalTime = setInterval(function() {
                if (ctime != formatAMPM(new Date)) {
                    $('.clock .time').html(ctime);
                }
            }, 30000);
            setTimeout(function() { clearInterval(intervalTime) }, 900000);
            $('[data-animate="fadeOut"]').each(function() {
                $(this).fadeOut(500);
                setTimeout(function() {
                    firstAnimate();
                }, 500)
            });
            // $('.secs .sec .content .img').css({height: window.outerHeight(true)})
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
            var blinkInterval = setInterval(function() {
                $('.clock .time').toggleClass('blink');
            }, 1000);
        }, 600);
    });
    
}