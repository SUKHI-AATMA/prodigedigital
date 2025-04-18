var clList = [".fadeIn, .fadeUp, .fadeDown"];

function animateClass() {
    setTimeout(function() {
        clList.forEach(function(e, t) {
            for (var o = document.querySelectorAll(e), a = 0, s = o.length; a < s; a++) {
                var n = o[a],
                    i = n.getBoundingClientRect();
                i.top - window.innerHeight < 0 && i.bottom > -50 ? n.classList.add("animate") : n.classList.remove("animate");
            }
        });
    }, 100);
}
animateClass(), $(document).ready(function() {
    $("body").removeClass("active"), $(".nav-toggler").on("click", function() {
        $("header").toggleClass("nav-open");
    }), $(".projects-carousel").slick({
        arrows: !1
    }), $(".project-titles a:not(.view-more-link)").on("mouseover", function() {
        $(this).addClass("active").siblings().removeClass("active");
        var e = $(this).attr("data-slide");
        $(".projects-carousel").slick("slickGoTo", e - 1);
        $(this).parents(".projects").addClass("project-titles-hovered");
    }).on("mouseleave", function() {
        $(this).parents(".projects").removeClass("project-titles-hovered");
    }).on("click", function(e) {
        e.preventDefault(), $(this).addClass("active").siblings().removeClass("active").parents(".project-titles").addClass("select"), (linkUrl = $(this).attr("href")), setTimeout(function() {
            window.open(linkUrl, "_blank");
        }, 2e3);
    }), $("#carousel").slick({
        arrows: !1,
        dots: !0,
        centerMode: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
    }), $(".counter").each(function() {
        var e = $(this),
            t = e.attr("data-count");
        e.addClass("start"), $({
            countNum: e.text()
        }).animate({
            countNum: t
        }, {
            duration: 2e3,
            easing: "linear",
            step: function() {
                e.text(Math.floor(this.countNum));
            },
            complete: function() {
                e.text(this.countNum + "+");
            },
        });
    }), $(".CookieBar-btn").on("click", function() {
        if (0 == (document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop() || "")) {
            var e = new Date(),
                t = t || 365;
            e.setTime(+e + 864e5 * t), (window.document.cookie = "Opened=true; expires=" + e.toGMTString() + "; path=/"), $(".CookieBar").addClass("cookie-leave-to");
        }
    }), "true" == (document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop() || "") && $(".CookieBar").addClass("cookie-leave-to"), $("header a").on("click", function(e) {
        console.log($(this).attr("target"));
        if ($(this).attr("target") != "_blank") {
            e.preventDefault(), $("body").addClass("active");
            var t = $(this).attr("href");
            setTimeout(function() {
                window.location.href = t;
            }, 500);
        }
    });
    if (!$("body").hasClass("home")) {
        $(document).scrollTop() > 50 ? ($("header").addClass("scrolled"), $("#downArrow").hide()) : ($("header").removeClass("scrolled"), $("#downArrow").show());
    } else {
        $(document).scrollTop() > 50 ? $("#downArrow").hide() : $("#downArrow").show();
    }
}), $(window).on("scroll", function() {
    if (!$("body").hasClass("home")) {
        $(document).scrollTop() > 50 ? ($("header").addClass("scrolled"), $("#downArrow").hide()) : ($("header").removeClass("scrolled"), $("#downArrow").show());
    } else {
        $(document).scrollTop() > 50 ? $("#downArrow").hide() : $("#downArrow").show();
    }
});
$(document).ready(function() {
    let selectedWorkType = [];
    $(".filter-wrapper .filter-elements li").on("click", function() {
        let $this = $(this);
        let getValueOfTab = $this.attr("data-filter-prop");
        let arrOfVisibleProjectIndex = [];
        if (!$this.hasClass("active")) {
            $this.addClass("active").siblings("li").removeClass("active");
            $(".our-projects").find(".box-wrapper.even").removeClass("even");
            $(".our-projects").find(".box-wrapper.odd").removeClass("odd");
            $(".our-projects").find(".box-wrapper[data-filter-prop*='" + getValueOfTab + "']").each(function(i) {
                arrOfVisibleProjectIndex.push($(this).index());
                if (i % 2 == 0) {
                    $(".our-projects").find(".box-wrapper").eq(arrOfVisibleProjectIndex[i]).addClass("even");
                } else {
                    $(".our-projects").find(".box-wrapper").eq(arrOfVisibleProjectIndex[i]).addClass("odd");
                }
            });
            console.log(arrOfVisibleProjectIndex);
            $(".our-projects").find(".box-wrapper[data-filter-prop*='" + getValueOfTab + "']").show().siblings(".box-wrapper:not([data-filter-prop*='" + getValueOfTab + "'])").slideUp();
        } else {
            $this.removeClass("active");
            $(".our-projects").find(".box-wrapper.even").removeClass("even");
            $(".our-projects").find(".box-wrapper.odd").removeClass("odd");
            $(".our-projects").find(".box-wrapper").show();
        }
        $("html, body").animate({
            scrollTop: $(".filter-wrapper").position().top - 80 + "px",
        }, 200);
    }); /* START - click of down arrow on homepage */
    $("#downArrow").on("click", () => {
        $("html, body").animate({
            scrollTop: $(".ourService").position().top - 60 + "px",
        }, 200);
    }); /* END - click of down arrow on homepage */
    $(".filter-wrapper .filter-elements li").each(function() {
        let $this = $(this);
        let getValueOfTab = $this.attr("data-filter-prop");
        $this.children("span").text("(" + $(".our-projects").find(".box-wrapper[data-filter-prop*='" + getValueOfTab + "']").length + ")"); /* populating dropdown values for browse by projects starts */
        $(".browse-select-dropdown select").append("<option value=" + getValueOfTab + ">" + $this.text() + "</option>"); /* populating dropdown values for browse by projects ends */
    });
    $(".browse-select-dropdown select").on("change", function() {
        if ($(this).val() == "none") {
            $(".our-projects").find(".box-wrapper").show();
        } else {
            $(".our-projects").find(".box-wrapper[data-filter-prop='" + $(this).val() + "']").show().siblings(".box-wrapper:not([data-filter-prop='" + $(this).val() + "'])").slideUp();
        }
        $("html, body").animate({
            scrollTop: $(".browse-select-dropdown").position().top - 80 + "px",
        }, 200);
    });
    $(".testimonial-details .testimonial").length % 2 === 0 ? $(".testimonial-details").addClass("evenCount") : $(".testimonial-details").addClass("oddCount");
});