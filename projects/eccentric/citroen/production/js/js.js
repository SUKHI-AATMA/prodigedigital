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

    $(".automobile-features-wrapper li").on("click", function() {
        var $this = $(this);
        $this.siblings("li").children("ul").slideUp();
        $this.children("ul").slideToggle('slow');
    });

    $(".automobile-features-wrapper li").eq(1).click();

    $(".toggle-option-wrapper.vertical-aligned input[type=radio]").on("click", function() {
        $(this).parents(".field-row").index() == 1 ? $(this).parents(".toggle-option-wrapper").addClass("last-option-selected") : $(this).parents(".toggle-option-wrapper").removeClass("last-option-selected");
    });

    $(".toggle-switch").on("click", function() {
        (!$(this).parents(".toggle-option-wrapper").hasClass("last-option-selected")) ? $(this).parents(".toggle-option-wrapper").find("input[type=radio]").eq(1).click() : $(this).parents(".toggle-option-wrapper").find("input[type=radio]").eq(0).click();
    });

    $(".customized-options .field-row > span").on("click", function() {
        $(this).parents(".field-row").find("label").click();
    });

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
        $(this).addClass("selected").siblings("li").removeClass("selected");
    });

    $(".main-tabs-container > ul > li").eq(1).click();
});