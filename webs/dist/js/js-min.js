var clList=[".fadeIn, .fadeUp, .fadeDown"];function animateClass(){setTimeout((function(){clList.forEach((function(e,o){for(var t=document.querySelectorAll(e),r=0,s=t.length;r<s;r++){var a=t[r],n=a.getBoundingClientRect();n.top-window.innerHeight<0&&n.bottom>-50?a.classList.add("animate"):a.classList.remove("animate")}}))}),100)}animateClass(),$(document).ready((function(){$("body").removeClass("active"),$(".nav-toggler").on("click",(function(){$("header").toggleClass("nav-open")})),$(".projects-carousel").slick({arrows:!1}),$(".project-titles a:not(.view-more-link)").on("mouseover",(function(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("data-slide");$(".projects-carousel").slick("slickGoTo",e-1),$(this).parents(".projects").addClass("project-titles-hovered")})).on("mouseleave",(function(){$(this).parents(".projects").removeClass("project-titles-hovered")})).on("click",(function(e){e.preventDefault(),$(this).addClass("active").siblings().removeClass("active").parents(".project-titles").addClass("select"),linkUrl=$(this).attr("href"),setTimeout((function(){window.open(linkUrl,"_blank")}),2e3)})),$("#carousel").slick({arrows:!1,dots:!0,centerMode:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".counter").each((function(){var e=$(this),o=e.attr("data-count");e.addClass("start"),$({countNum:e.text()}).animate({countNum:o},{duration:2e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum+"+")}})})),$(".CookieBar-btn").on("click",(function(){if(0==(document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop()||"")){var e=new Date,o=o||365;e.setTime(+e+864e5*o),window.document.cookie="Opened=true; expires="+e.toGMTString()+"; path=/",$(".CookieBar").addClass("cookie-leave-to")}})),"true"==(document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop()||"")&&$(".CookieBar").addClass("cookie-leave-to"),$("header a").on("click",(function(e){if(console.log($(this).attr("target")),"_blank"!=$(this).attr("target")){e.preventDefault(),$("body").addClass("active");var o=$(this).attr("href");setTimeout((function(){window.location.href=o}),500)}})),$("body").hasClass("home")?$(document).scrollTop()>50?$("#downArrow").hide():$("#downArrow").show():$(document).scrollTop()>50?($("header").addClass("scrolled"),$("#downArrow").hide()):($("header").removeClass("scrolled"),$("#downArrow").show())})),$(window).on("scroll",(function(){$("body").hasClass("home")?$(document).scrollTop()>50?$("#downArrow").hide():$("#downArrow").show():$(document).scrollTop()>50?($("header").addClass("scrolled"),$("#downArrow").hide()):($("header").removeClass("scrolled"),$("#downArrow").show())})),$(document).ready((function(){$(".filter-wrapper .filter-elements li").on("click",(function(){let e=$(this),o=e.attr("data-filter-prop"),t=[];e.hasClass("active")?(e.removeClass("active"),$(".our-projects").find(".box-wrapper.even").removeClass("even"),$(".our-projects").find(".box-wrapper.odd").removeClass("odd"),$(".our-projects").find(".box-wrapper").show()):(e.addClass("active").siblings("li").removeClass("active"),$(".our-projects").find(".box-wrapper.even").removeClass("even"),$(".our-projects").find(".box-wrapper.odd").removeClass("odd"),$(".our-projects").find(".box-wrapper[data-filter-prop*='"+o+"']").each((function(e){t.push($(this).index()),e%2==0?$(".our-projects").find(".box-wrapper").eq(t[e]).addClass("even"):$(".our-projects").find(".box-wrapper").eq(t[e]).addClass("odd")})),console.log(t),$(".our-projects").find(".box-wrapper[data-filter-prop*='"+o+"']").show().siblings(".box-wrapper:not([data-filter-prop*='"+o+"'])").slideUp()),$("html, body").animate({scrollTop:$(".filter-wrapper").position().top-80+"px"},200)})),$("#downArrow").on("click",(()=>{$("html, body").animate({scrollTop:$(".ourService").position().top-60+"px"},200)})),$(".filter-wrapper .filter-elements li").each((function(){let e=$(this),o=e.attr("data-filter-prop");e.children("span").text("("+$(".our-projects").find(".box-wrapper[data-filter-prop*='"+o+"']").length+")"),$(".browse-select-dropdown select").append("<option value="+o+">"+e.text()+"</option>")})),$(".browse-select-dropdown select").on("change",(function(){"none"==$(this).val()?$(".our-projects").find(".box-wrapper").show():$(".our-projects").find(".box-wrapper[data-filter-prop='"+$(this).val()+"']").show().siblings(".box-wrapper:not([data-filter-prop='"+$(this).val()+"'])").slideUp(),$("html, body").animate({scrollTop:$(".browse-select-dropdown").position().top-80+"px"},200)}))}));