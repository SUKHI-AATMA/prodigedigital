// window.onload = function() {

//     var childNode = document.querySelector(".automobile-features-wrapper > ul").children;

//     for(var i=0; i<childNode.length; i++) {
//         document.querySelectorAll(".automobile-features-wrapper > ul > li")[i].addEventListener("click", function() {
//             for(var j=0; j<childNode.length; j++) {
//                 if(document.querySelectorAll(".automobile-features-wrapper > ul > li")[j].classList.length == 1) {
//                     document.querySelectorAll(".automobile-features-wrapper > ul > li")[j].removeAttribute("class");
//                 }
//             }
    
//             if(this.className.indexOf("accordion-open") == -1) {
//                 if(this.classList.length == 0) {
//                     this.className = "accordion-open";
//                 }
//             }
//             else {
//                 if(this.classList.length == 1) {
//                     this.removeAttribute("class");
//                 }
//             }
//         });
//     }
// }

$(function() {
    /* to view in full screen mode starts */
    $(".logo-cast").on("click", function() {
        var elemBody = document.getElementsByTagName("body")[0];
        elemBody.webkitRequestFullscreen();
    });
    /* to view in full screen mode ends */

    $(".automobile-features-wrapper > ul > li").on("click", function() {
        var $this = $(this);
        $this.toggleClass("accordion-open").siblings("li").removeClass("accordion-open").children("ul").slideUp();
        $this.children("ul").slideToggle('slow');
    });

    $(".automobile-features-wrapper li").eq(1).click();

    $(".toggle-option-wrapper.vertical-aligned input[type=radio]").on("click", function() {
        $(this).parents(".field-row").index() == 1 ? $(this).parents(".toggle-option-container").addClass("last-option-selected") : $(this).parents(".toggle-option-container").removeClass("last-option-selected");
    });

    $(".toggle-switch").on("click", function() {
        (!$(this).parents(".toggle-option-container").hasClass("last-option-selected")) ? $(this).parents(".toggle-option-container").find("input[type=radio]").eq(1).click() : $(this).parents(".toggle-option-container").find("input[type=radio]").eq(0).click();
    });

    $(".customized-options .field-row > span").on("click", function() {
        var $this = $(this);
        
        if($("#" + $this.parents(".field-row").find("input").attr("id")).prop("checked")) {
            return false;
        }

        $this.parents(".customized-options.select-one-option").find(".field-row").each(function() {
            if($(this).find("input").is(":checked")) {
                $(this).find("input").prop("checked", false);
            }
        });
        
        $(this).parents(".field-row").find("input").prop("checked", true);
    });

    $(".customized-options .field-row > label").on("click", function() {
        $(this).siblings("span").click();
    })

    var colorVariants = [
        "color-variant-1.svg",
        "color-variant-2.svg",
        "color-variant-3.svg",
        "color-variant-4.svg",
        "color-variant-5.svg",
        "color-variant-6.svg",
        "color-variant-7.svg"
    ];

    var baseWidthColorVariantLI = 42+11; // 32px is the width and 17px is the margin-left

    $(".color-variant-wrapper ul").css({"width": (colorVariants.length) * baseWidthColorVariantLI + "px"});

    for(var i=0; i<colorVariants.length; i++) {
        $(".color-variant-wrapper ul").append("<li><img src='./images/" + colorVariants[i] + "'></li>");
    }

    $(".color-variant-wrapper ul > li").on("click", function() {
        $(this).addClass("selected").siblings("li").removeClass("selected");
    });

    $(".color-variant-wrapper ul > li").eq(0).click();

    $(".main-tabs-container > ul > li").on("click", function() {
        $("body").addClass("with-animation");
        
        var $this = $(this);
        setTimeout(function() {
            $this.addClass("selected").siblings("li").removeClass("selected");
        
            var removeLastClass = $('.main-content-wrapper').attr('class').split(' ').pop();
            if(removeLastClass.indexOf("tab-") != -1) {
                $('.main-content-wrapper').removeClass(removeLastClass);
            }
            $(".main-content-wrapper").addClass($this.attr("data-rel"));
        }, 300);
        
        setTimeout(function() {
            $("body").removeClass("with-animation");
        }, 500);
    });

    $(".main-tabs-container > ul > li").eq(0).click();

    $(".automobile-versions-wrapper > ul > li").on("click", function() {
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".versions-container").animate({
            scrollTop: $(this).position().top + "px"
        }, 500);
    });

    $(".go-to-next-step").on("click", function() {
        $(".main-tabs-container > ul > li.selected").next("li").click();
    })
});