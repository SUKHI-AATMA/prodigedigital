$(function() {
    /* added span tag for handling pop-up close when clicked anywhere outside on the body area */
    $("body > main").append("<span class='popup-background'></span>");
    /* added span tag for handling pop-up close when clicked anywhere outside on the body area ends */
    $(".automobile-features-wrapper > ul > li span").on("click", function() {
        var $this = $(this).parent("li");
        $this.toggleClass("accordion-open").siblings("li").removeClass("accordion-open").children("ul").slideUp();
        $this.children("ul").slideToggle('slow');
    });

    $(".automobile-features-wrapper").each(function() {
        $(this).children("ul").children("li").eq(0).children("span").click();
    });

    //$(".automobile-features-wrapper > ul > li").eq(0).click();

    if($(".exterior-interior-view").find("input[type=radio]:checked").val() == "INTERIOR") {
        $(".exterior-interior-view").addClass("last-option-selected");
    }

    $(document).on("click", ".toggle-option-wrapper.vertical-aligned input[type=radio]", function() {
        $(this).parents(".field-row").index() == 1 ? $(this).parents(".toggle-option-container").addClass("last-option-selected") : $(this).parents(".toggle-option-container").removeClass("last-option-selected");

        if($(this).val() == "INTERIOR") {
            $(".front-back-view").show();
        }
        else if($(this).val() == "EXTERIOR") {
            $(".front-back-view").hide();
        }
    });

    $(document).on("click", ".toggle-switch" , function() {
        (!$(this).parents(".toggle-option-container").hasClass("last-option-selected")) ? $(this).parents(".toggle-option-container").find("input[type=radio]").eq(1).click() : $(this).parents(".toggle-option-container").find("input[type=radio]").eq(0).click();
    });

    $(document).on("click", ".customized-options .field-row > span", function() {
        $(this).siblings("label").click();
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

    var baseWidthColorVariantLI = 42+11; // 42px is the width and 17px is the margin-left

    $(".color-variant-wrapper ul").css({"width": (colorVariants.length) * baseWidthColorVariantLI + "px"});

    for(var i=0; i<colorVariants.length; i++) {
        $(".color-variant-wrapper ul").append("<li><img src='./images/" + colorVariants[i] + "'></li>");
    }

    $(document).on("click", ".color-variant-wrapper ul > li", function() {
        $(this).addClass("selected").siblings("li").removeClass("selected");
    });

    $(document).find(".color-variant-wrapper ul > li").eq(0).click();

    $(document).on("click", ".main-tabs-container > ul > li", function() {
        var $this = $(this);

        setTimeout(function() {
            $this.addClass("selected").siblings("li").removeClass("selected");
            $this.parents(".main-tabs-container").children("span").css("left", $this.position().left + "px");
        }, 500);

        //console.log($(this).parents(".main-tabs-container").hasClass("content-all"));

        if($(this).parents(".main-tabs-container").hasClass("content-all")) {
            $("body").addClass("with-animation");
        
            
            setTimeout(function() {
                $("body").addClass("display-content-all");
                // $this.addClass("selected").siblings("li").removeClass("selected");
                // $this.parents(".main-tabs-container").children("span").css("left", $this.position().left + "px");
            
                var removeLastClass = $('.main-content-wrapper').attr('class').split(' ').pop();
                if(removeLastClass.indexOf("tab-") != -1) {
                    $('.main-content-wrapper').removeClass(removeLastClass);
                }
                $(".main-content-wrapper").addClass("content-all " + $this.attr("data-rel"));
                
            }, 300);
            
            setTimeout(function() {
                $("body").removeClass("with-animation");
            }, 500);
        }
        else if($(this).parents(".main-tabs-container").hasClass("all-accessories-tabs")) {
            var removeLastClass = $('body').attr('class').split(' ').pop();
            if(removeLastClass.indexOf("tab-") != -1) {
                $('body').removeClass(removeLastClass);
            }

            $("body").addClass("popup-all-accessories-visible");
            
            // console.log($this.attr("data-rel"));
            // $(".popup-all-accessories-visible .all-accessories-container li:visible").slideUp('slow', function() {
            //     $(".popup-all-accessories-visible .all-accessories-container").find("li[data-rel=" + $this.attr("data-rel").substring(4) + "]").slideDown('slow');
            // });
            //$(".popup-all-accessories-visible .all-accessories-wrapper .accordion-content").slideDown();

            if($(this).attr("data-rel") == 'tab-accessory-pack-content') {
                $("body").addClass($this.attr("data-rel"));
            }

            if(!$("body").hasClass("tab-accessory-pack-content")) {
                if(!$(".accordion-header").hasClass("accordion-open")) {
                    $(".accordion-header").addClass("accordion-open");
                }
                
                $(".accordion-content").slideDown();
                $(".popup-all-accessories-visible .all-accessories-container li:visible").hide();
                setTimeout(function() {
                    $(".popup-all-accessories-visible .all-accessories-container li[data-rel=" + $this.attr("data-rel").substring(4) + "]").show();
                    $("body").addClass($this.attr("data-rel"));
                }, 200);
            }
            else {
                console.log($(".accordion-header").hasClass("accordion-open"));
                
                if(!$(".accordion-header").hasClass("accordion-open")) {
                    //$(".accordion-content").slideUp();
                    $(".accordion-header").click();
                }

                setTimeout(function() {
                    $(".popup-all-accessories-visible .all-accessories-container li").show();
                }, 200);
            }
        }
    });

    $(document).find(".main-tabs-container.content-all > ul > li").eq(1).click();

    $(document).on("click", ".automobile-versions-wrapper > ul > li", function() {
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".versions-container").animate({
            scrollTop: $(this).position().top + "px"
        }, 500);
    });

    $(document).on("click", ".go-to-next-step", function() {
        $(document).find(".main-tabs-container > ul > li.selected").next("li").click();
    });

    $(document).on("click", ".compare-column", function() {
        $(this).addClass("selected").siblings(".compare-column").removeClass("selected");
    });

    $(document).on("click", ".automobile-versions-wrapper .heading .info", function() {
        $("body").addClass("popup-compare-visible");
    });

    $(document).on("click", ".all-accessories", function() {
        $("body").addClass("popup-all-accessories-visible");
        $(".main-tabs-container:not('.content-all') > ul > li").eq(0).click();
    });

    //$(".all-accessories").click();

    $(".go-back").on("click", function() {
        if($("body").hasClass("edit-summary-mode")) {
            $("body").attr("class", "");
            $(".main-content-wrapper").removeClass("content-all tab-summary-content");
            
            $("body").find(".search-wrapper").slideDown('slow', function() {
                //$(".main-content-wrapper").addClass("display-search-results");
            });
        }
        else {
            //$("body").removeClass("popup-compare-visible");
            $("body").attr("class", "display-content-all");
        }
    });

    $(".automobile-models-wrapper li").on("click", function() {
        $(this).addClass("selected").siblings("li").removeClass("selected");
    });

    $(".change-model").on("click", function() {
        $("body").addClass("popup-show display-change-model");
    });

    $(document).on("click", ".tab-summary-content .btn-save", function() {
        $("body").addClass("popup-show display-error-message");
    });

    $(".close-popup").on("click", function() {
        $("body").removeClass("popup-show");
        if($("body").hasClass("display-features")) {
            $("body").removeClass("display-features");
        }
        if($("body").hasClass("display-advanced-comfort-feature")) {
            $("body").removeClass("display-advanced-comfort-feature");
        }
        
        
        if($("body").hasClass("display-change-model")) {
            $("body").removeClass("display-change-model"); 
        }
        else if($("body").hasClass("display-error-message")) {
            $("body").removeClass("display-error-message"); 
        }
    });

    $(".cta-more-options").on("click", function() {
        $(this).parents(".automobile-features-wrapper").addClass("display-more-options");
        $(".all-accessories").addClass("hide-elem");
    });

    $(".more-options-container .go-back").on("click", function() {
        $(this).parents(".automobile-features-wrapper").removeClass("display-more-options");
        $(".all-accessories").removeClass("hide-elem");
    });

    var currentNodeIndex = 0;
    var currentSubNodeIndex = 0;
    var initialPageNumber = 1;
    var detectWhichFeature = '';

    $(document).on("click", ".tab-features-content .automobile-features-wrapper > ul > li > ul > li" , function() {
        $("body").addClass("popup-show display-features");
        currentNodeIndex = $(this).index();
        var parentNodeIndex = $(this).parents("li").index();
        //console.log(parentNodeIndex);
        detectWhichFeature = "features-model-details-wrapper";
        $(".popup-wrapper .features-details-container > div .col-1-2 li").eq(parentNodeIndex).click();
    });

    $(document).on("click", ".tab-features-content .automobile-features-wrapper > .cta-advanced-comfort-feature" , function() {
        $("body").addClass("popup-show display-advanced-comfort-feature");
        detectWhichFeature = "advanced-comfort-features-wrapper";
        $(".popup-wrapper .features-details-container > div .col-1-2 li").eq(0).click();
    });

    $(document).on("click", ".popup-wrapper .features-details-container > div .col-1-2 li" , function(e) {
        currentSubNodeIndex = $(this).index();
        var lastPageNumber = $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").length;

        e.originalEvent ? currentNodeIndex = 0 : currentNodeIndex;
        currentNodeIndex > 0 ? $(this).parents("." + detectWhichFeature + "").find(".col-2-2 .pagination .from-page").text(currentNodeIndex+1) : $(this).parents("." + detectWhichFeature + "").find(".col-2-2 .pagination .from-page").text(initialPageNumber);
        
        $(this).parents("." + detectWhichFeature + "").find(".col-2-2 .pagination .to-page").text(lastPageNumber);
        //$("." + detectWhichFeature).find(".col-1-2 > ul > li")
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).show().siblings(".pagination-content-container").hide();

        $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).show().siblings(".pagination-content").hide();
//console.dir(currentNodeIndex + "----" + initialPageNumber + "----" + lastPageNumber);
        if(currentNodeIndex+1 == lastPageNumber) {
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-next").addClass("disabled");
            if(currentNodeIndex+1 > 1) {
                $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-prev").removeClass("disabled");
            }
        }
        else if(currentNodeIndex+1 > initialPageNumber) {
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-prev").removeClass("disabled");
        }
        else if(currentNodeIndex == initialPageNumber) {
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-next").addClass("disabled");
        }
        else if(currentNodeIndex+1 < lastPageNumber) {
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-prev").addClass("disabled");
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .cta-wrapper .btn-next").removeClass("disabled");
        }

    });

    $(".popup-wrapper .features-details-container .col-2-2 .cta-wrapper .btn-next").on("click", function() {
        if($(this).hasClass("disabled")) {
            return false;
        }
        
        $(this).siblings(".btn-prev").removeClass("disabled");
        if($(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).next(".pagination-content").length) {
            currentNodeIndex += 1;
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).show().siblings(".pagination-content").hide();

            $(this).parents("." + detectWhichFeature + "").find(".col-2-2 .pagination .from-page").text(currentNodeIndex+1);

            if($(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).next(".pagination-content").length <= 0) {
                $(this).addClass("disabled");
            }
        }
    });

    $(".popup-wrapper .features-details-container .col-2-2 .cta-wrapper .btn-prev").on("click", function() {
        if($(this).hasClass("disabled")) {
            return false;
        }
        
        $(this).siblings(".btn-next").removeClass("disabled");
        if($(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).prev(".pagination-content").length) {
            $(this).parents("." + detectWhichFeature + "").find(".col-2-2 .pagination .from-page").text(currentNodeIndex);

            currentNodeIndex -= 1;
            $(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).show().siblings(".pagination-content").hide();

            

            if($(".popup-wrapper ." + detectWhichFeature + " .col-2-2 .pagination-content-wrapper .pagination-content-container").eq(currentSubNodeIndex).children(".pagination-content").eq(currentNodeIndex).prev(".pagination-content").length <= 0) {
                $(this).addClass("disabled");
            }
        }
    });

    $(document).on("click", ".search-wrapper .form-wrapper .cta-button", function() {
        if($(".search-wrapper .form-wrapper input").val() == "") {
            return false;
        }
        
        $(".main-content-wrapper").addClass("display-search-results");
        $(".search-wrapper .form-wrapper .field-row").addClass("input-with-value");
        $(".search-wrapper .form-wrapper input").val('9826963214');
        $(".search-results-wrapper").slideDown();
    });

    $(document).on("click", ".search-wrapper .form-wrapper .field-row.input-with-value .remove-input-value", function() {
        $(".search-wrapper .form-wrapper input").val('');
        $(".search-wrapper .form-wrapper .field-row").removeClass("input-with-value");
        $(".search-results-wrapper").slideUp();
        $(".main-content-wrapper").removeClass("display-search-results");
    });

    $(document).on("click", "header .logo-cast", function() {
        !$("body").hasClass("screen-selected") ? $("body").addClass("screen-not-selected display-select-screen") : $("body").addClass("display-select-screen");
        if($(".screen-list-wrapper").length <= 0) {
            $("body").addClass("empty-screen-list");
        }
        else {
            $("body").removeClass("empty-screen-list");
        }
    });

    $(document).on("click", ".add-new-screen", function() {
        $("body").addClass("add-new-screen-container");
    });

    $(document).on("click", ".add-new-screen-wrapper .cta-wrapper .cancel-screen", function() {
        $("body").removeClass("screen-not-selected display-select-screen add-new-screen-container empty-screen-list");
    });

    $(document).on("click", ".screen-list-wrapper .delete-wrapper .icon-delete", function() {
        $(this).parents("li").addClass("delete-this-record");
    });

    $(document).on("click", ".screen-list-wrapper .delete-wrapper .delete-confirm-box .option-cancel", function() {
        $(this).parents("li").removeClass("delete-this-record");
    });

    $(document).on("click", ".screen-list-wrapper .delete-wrapper .delete-confirm-box .option-delete", function() {
        $(this).parents("li").remove();
    });

    $(document).on("click", ".select-screen-wrapper .cta-wrapper .continue-screen", function() {
        if($("body").hasClass("screen-not-selected")) {
            return false;
        }
    });

    $(document).on("click", ".screen-list-wrapper .screen-to-connect > a", function() {
        if($(this).parents(".screen-list-wrapper").hasClass("connecting-wip")) {
            return false;
        }

        displayConnectionLoader(this);
    });

    $(document).on("click", ".summary-detail-box > .summary-item.box-heading", function() {
        var $this = $(this).parents(".summary-detail-box");
        //$this.toggleClass("accordion-open").siblings(".summary-detail-box").removeClass("accordion-open").children(".summary-detail-box-content").slideUp();
        $this.toggleClass("accordion-open").children(".summary-detail-box-content").slideToggle('slow');
    });

    $(document).on("click", ".search-results-box:not('.new-config')", function() {
        $("body").addClass("edit-summary-mode");
        //$(".main-content-wrapper").removeClass("display-search-results");
        $("body").find(".search-wrapper").slideUp('slow', function() {
            $(document).find(".main-tabs-container.content-all > ul > li").eq(3).click();
        });
    });

    $(document).on("click", ".edit-summary-mode .tab-summary-content .btn-edit", function() {
        $("body").removeClass("edit-summary-mode");
        $(document).find(".main-tabs-container.content-all > ul > li").eq(3).click();
        //$(".main-content-wrapper").removeClass("display-search-results");
        // $("body").find(".search-wrapper").slideUp('slow', function() {
        //     $(document).find(".main-tabs-container.content-all > ul > li").eq(3).click();
        // });
    });

    $(document).on("click touchstart", ".show-password", function() {
        if(!$(this).parents(".field-password").hasClass("display-password")) {
            $(this).parents(".field-password").addClass("display-password");
            $(this).siblings("input").attr("type", "text");
        }
        else {
            $(this).parents(".field-password").removeClass("display-password");
            $(this).siblings("input").attr("type", "password");
        }
    });

    $(document).on("click", ".login-form button", function() {
        $(".login-form").addClass("display-error");
    });

    $(document).on("click", "header .hamburger-menu", function() {
        $("body").addClass("site-navigation-display");
    });

    $(document).on("click", ".popup-background", function() {
        if($("body").hasClass("site-navigation-display")) {
            $("body").removeClass("site-navigation-display");
        }
        else if($("body").hasClass("display-select-screen")) {
            $("body").removeClass("display-select-screen");
        }
        else if($("body").hasClass("popup-show")) {
            $("body").removeClass("popup-show");
        }
    });

    if($(".tv-screens .connection-status").length) {
        setTimeout(function() {
            $("body").addClass("display-connection-status");
        }, 1000);
        
        setTimeout(function() {
            $("body").removeClass("display-connection-status");
        }, 3000);
    }

    /* Added for Sync and update screen starts */
    $(".update-app-container .whats-new-wrapper > a").on("click", function() {
        var $this = $(this).parent("div");
        $this.toggleClass("accordion-open");
        $this.children(".whats-new-details").slideToggle('slow');
    });
    /* Added for Sync and update screen ends */

    /* Click event added for accordion while viewing all accessories - convenience pack starts */
    $(document).on("click", ".all-accessories-wrapper .accordion-header", function() {
        var $this = $(this);
        //console.log($this.next(".accordion-content").is(":visible"));
        $this.next(".accordion-content").slideToggle('slow');
        $this.toggleClass("accordion-open");
    });
    /* Click event added for accordion while viewing all accessories - convenience pack ends */

    // $(document).on("click", ".screen-list-wrapper .screen-to-connect > .error-wrapper .option-retry", function() {
    //     $(".screen-list-wrapper .screen-to-connect > a").click();
    // });

    //$("header .logo-cast").click();
});

function displayConnectionLoader(paramThis) {
    $(paramThis).parents("li").addClass("connecting").parents(".screen-list-wrapper").addClass("connecting-wip");
    $(paramThis).parents("li").find(".screen-to-connect > a > span:first-child > span:first-child").text("CONNECTING...");

    setTimeout(function() {
        hideConnectionLoader(paramThis);
    }, 2000);
}

function hideConnectionLoader(paramThis) {
    $(paramThis).parents("li").removeClass("connecting").addClass("connected").parents(".screen-list-wrapper").removeClass("connecting-wip");
    $(paramThis).parents("li").find(".screen-to-connect > a > span:first-child > span:first-child").text("CONNECTED");
    $("body").removeClass("screen-not-selected").addClass("screen-selected");
}