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
    });

    function firstAnimate() {
        $('[data-animate="slideFromTop"]').each(function() {
            $(this).addClass('slideFromTop');
        });
        $('[data-animate="slideFromLeft"]').each(function() {
            $(this).addClass('slideFromLeft');
        });
        $('[data-animate="zoomOut"].clock').each(function() {
            $(this).addClass('zoomOut');
            setTimeout(function() {
                $('.timeofday').addClass('morning')
                var blinkInterval = setInterval(function() {
                    $('.clock .time').toggleClass('blink');
                }, 1000);
            }, 600);
        });
        $('[data-animate="slideFromDown"]').each(function() {
            $(this).addClass('slideFromDown');
        });
        $('[data-animate="scaleUpRight"]').each(function() {
            $(this).addClass('scaleUpRight');
        });
    }