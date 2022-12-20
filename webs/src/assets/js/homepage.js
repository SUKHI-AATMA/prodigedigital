var clList = ['.fadeIn, .fadeUp, .fadeDown'];

function animateClass() {
    setTimeout(function () {
        clList.forEach(function (item, index) {
            var anim = document.querySelectorAll(item);
            for (var i = 0, nbs = anim.length; i < nbs; i++) {
                var animELe = anim[i];
                var rect = animELe.getBoundingClientRect();
                var isVisible = ((rect.top - window.innerHeight) < 0 && (rect.bottom) > -50) ? true : false;
                if (isVisible) {
                    animELe.classList.add('animate');
                }
                else {
                    animELe.classList.remove('animate');
                }
            }
        });
    }, 100);
}
animateClass();

$(document).ready(function () {
    if( localStorage.getItem("loader") == null )
    {
        localStorage.setItem("loader", true);
        setTimeout(function () { $('.loader').addClass('animate') }, 1000);
        setTimeout(function () { $('.loader').addClass('hide'), $('body').addClass('loaderFinished') }, 3000);
    }
    else 
    {
        $('.loader').remove();
        $('body').addClass('loaderFinished')
    }
    // var cookieSet = document.cookie.match('(^|;)\\s*Loader\\s*=\\s*([^;]+)')?.pop() || '';
    // if (cookieSet == 'true') {
    //     $('.loader').remove();
    // }
    // else 
    // {
    //     $('.loader').removeClass('hide');
    //     window.document.cookie = "Opened=true; expires=" + date.toGMTString() + "; path=/";
    // }

    $('body').removeClass('active');
    // $('main:not(.home)').css({marginTop: $('header').outerHeight(true) + 20})
    $('.nav-toggler').on('click', function () {
        $('header').toggleClass('nav-open');
    });
    $('.projects-carousel').slick({
        arrows: false,
    });
    $('.project-titles a').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var slideno = $(this).attr('data-slide');
        $('.projects-carousel').slick('slickGoTo', slideno - 1);
    }).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').parents('.project-titles').addClass('select');
        setTimeout(function(){
            window.open($(this).attr('href'),'_blank');
        },2000)
    });

    $('#carousel').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $this.addClass('start');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum + '+');
                    //alert('finished');
                }
            });
    });
    $('.CookieBar-btn').on('click', function () {
        var cookieSet = document.cookie.match('(^|;)\\s*Opened\\s*=\\s*([^;]+)')?.pop() || '';
        if (cookieSet == false) {
            var date = new Date();

            // Default at 365 days.
            var days = days || 365;

            // Get unix milliseconds at current time plus number of days
            date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

            window.document.cookie = "Opened=true; expires=" + date.toGMTString() + "; path=/";

            $('.CookieBar').addClass('cookie-leave-to');

        }

    });
    var cookieSet = document.cookie.match('(^|;)\\s*Opened\\s*=\\s*([^;]+)')?.pop() || '';
    if (cookieSet == 'true') {
        $('.CookieBar').addClass('cookie-leave-to');
    }
    $('header a').on('click',function(e){
        e.preventDefault();
        $('body').addClass('active');
        var thsHref = $(this).attr('href');
        setTimeout(function(){window.location.href= thsHref},500);
    });
});

$(window).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }
});

// window.addEventListener("beforeunload", function(e){
//     alert(1);
//  }, false);