var currPageIndex = 0;
$(window).on("load",function() {
    if($(window).width() <= 1024) {
        $("body").addClass("thisIsDevice");
    }
    else {
        $("body").removeClass("thisIsDevice");
    }

    $(".thisIsDevice .pageWrapper .page#page1").addClass("front-view");
    currPageIndex = 1;

    $(".thisIsDevice .navigation-arrows .next").on("click",function() {
        if($(".front-view").length) {
            $(".front-view").addClass("back-view").removeClass("front-view");
        }
        else if($(".back-view").length) {
            if($(".back-view").prev(".page").length > 0) {
                $(".back-view").addClass("complete").prev(".page").addClass("front-view");
                $(".complete").removeClass("back-view");
                currPageIndex += 1;
            }
        }
    });

    $(".thisIsDevice .navigation-arrows .prev").on("click",function() {
        console.log(currPageIndex);
        if($(".thisIsDevice .pageWrapper .page#page" + currPageIndex).hasClass("front-view")) {
            $(".thisIsDevice .pageWrapper .page#page" + currPageIndex).next(".page").removeClass("complete").addClass("back-view");
            currPageIndex -= 1;
        }
        else if($(".thisIsDevice .pageWrapper .page#page" + currPageIndex).hasClass("back-view")) {
            $(".thisIsDevice .pageWrapper .page#page" + currPageIndex).removeClass("back-view").addClass("front-view");
        }
        else if($(".thisIsDevice .pageWrapper .page#page" + currPageIndex).hasClass("complete")) {
            $(".thisIsDevice .pageWrapper .page#page" + currPageIndex).removeClass("complete").addClass("back-view");
            
        }
    });
});

TweenLite.set(".pageBg", {xPercent: -50, yPercent: -50});
TweenLite.set(".pageWrapper", {left: "50%", perspective: 1000 });
TweenLite.set(".page", {transformStyle: "preserve-3d"});
TweenLite.set(".back", {rotationY: -180});
TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});


$(".page .pageFoldRight, .page .pageFoldLeft").click(
    function() {
        var _this = this.parentNode.parentNode;
        if (pageLocation[_this.id] === undefined || pageLocation[_this.id] == "right") {
            zi = ($(".left").length) + 1;
            if(!$("body").hasClass("thisIsDevice")) {
                TweenMax.to($(_this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: zi, zIndex: zi});
            }
            else {
                TweenMax.to($(_this), 1, {force3D: true, rotationY: -180, transformOrigin: "center top", className: '+=left', z: zi, zIndex: zi});
            }
            TweenLite.set($(_this), {className: '-=right'});
            pageLocation[_this.id] = "left";
        } else {
            zi = ($(".right").length) + 1;
            if(!$("body").hasClass("thisIsDevice")) {
                TweenMax.to($(_this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: zi, zIndex: zi});
            }
            else {
                TweenMax.to($(_this), 1, {force3D: true, rotationY: 0, transformOrigin: "center top", className: '+=right', z: zi, zIndex: zi});
            }
            
            TweenLite.set($(_this), {className: '-=left'});
            pageLocation[_this.id] = "right";
        }
    }
);

$(".front").hover(
    function() {
        TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#999999 50%,#ffffff 100%)"});
    },
    function() {
        TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
    }
);

$(".back").hover(
    function() {
        TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff 0%,#999999 50%,#f2f2f2 51%,#fefefe 100%)"		});
    },
    function() {
        TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
    }
)

var pageLocation = [],
    lastPage = null;
    zi = 0;