var one3dFunctions = function (){ this.loadedPercent =0; this.variantName = ""; serverURL = ""; canvasId = ""; carName = "";};
var ONE3D = new one3dFunctions();

one3dFunctions.prototype.init = function (component_id='', serverURL='https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/') {
	if(component_id == '') return 0;
	ONE3D.canvasId = "one3dcanvas";
	var fileurl=serverURL;
	var UIcomponent = document.getElementById(component_id);
		UIcomponent.innerHTML=`<div id="canvasContainer">
		<canvas id="`+ONE3D.canvasId+`" touch-action="none"
		  style="width: 100%;height: 100%;position: absolute;outline: 0;"></canvas>
		</div>

		<div id="cameraFade"
		style="background-color:#000000;width: 100%;height: 100%;position: absolute; top: 0px; overflow-x: hidden;overflow-y: hidden;left: 0px;">  
		</div>

		<div id="loader_BG"
		style="background-color:#1c1b17;width: 100%;height: 100%;position: absolute; top: 0px;overflow-x: hidden;overflow-y: hidden;left: 0px;">
		
		<div id="myBar" style="width: 0%;background-color:#ffffff;height: 5px;top: 50%;position: absolute; display: block;">
		</div>
		</div>`;
	var element =  document.getElementById('canvasContainer');
    if(typeof(element) != 'undefined' && element != null) {
        var script = document.createElement("script");
        script.type = "text/javascript";
		script.src = fileurl+"package.js";
		script.onload = function(){window.one3drefMain._setServerURL(serverURL)};
        document.getElementsByTagName("head")[0].appendChild(script);
    }
};

one3dFunctions.prototype.ChangeColor = function (hexcode,roofHexcode = null) {
    if (hexcode == "blue") {
        hexcode = "#193d73,#000000";
    }
	else if (hexcode == "white") {
        hexcode ="#e3e3e3,#FFFFFF";
    } 
	else if (hexcode == "silver") {
        hexcode = "#8c8c8c,#8c8c8c";
    }
	else if (hexcode == "grey") {
        hexcode = "#4a4a4a,#4a4a4a";
    }
	else if (hexcode == "brown") {
        hexcode = "#52311d,#52311d";
    }
    else 
    {
        return 0;
    }
    window.one3dref._changeColor(hexcode);
}

one3dFunctions.prototype.changeBgColor = function (value) {
    window.one3dref._changeBGcolor(value);
}

window.addEventListener("resize", function () { ONE3D.resizeWindow(); });
one3dFunctions.prototype.resizeWindow = function () {
    if (window.one3dref)
        window.one3dref._resizeWindow();
}

// mainjs to exterional function calling
var CallbackHandler = (function () {
    return {
        _onLoadCarCompleteExterior: function () {
            if (typeof onLoadCarCompleteExterior === 'function')
                window.onLoadCarCompleteExterior();
        },
       
        _onExteriorViewComplete: function () {
            if (typeof onExteriorViewComplete === 'function')
                window.onExteriorViewComplete();
        },
       
        _checkOrientation: function () {
            if (window.innerHeight > window.innerWidth) {//POTRAIT
                window.one3dref._setToPotrait();
            }
            else {//LANDSCAPE
                window.one3dref._setToLandscape();
            }
        },
        _onFeatureHotspot:function(featureName)
        {			
            if (typeof OnfeatureHpSelect === 'function')
                window.OnfeatureHpSelect(featureName);
        },
        _onLoaderProgress: function (value) {

            if(ONE3D.hasOwnProperty("loadedPercent")){
                ONE3D.loadedPercent = value;
            }
                
            if (typeof onLoaderProgress === 'function')
                window.onLoaderProgress();
        }
    }
})(CallbackHandler || {}); 

function attachcss(){
   var link = document.createElement('link');  
        // set the attributes for link element 
           link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = 'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/nexapve.css';  
        // Get HTML head element to append  
        // link element to it  
        document.getElementsByTagName('HEAD')[0].appendChild(link);  
}
attachcss();

document.addEventListener('DOMContentLoaded', function() {
    loadui();
    UiToggle('hidden')
    ONE3D.init("one3dcontent","https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/");
    callGA('Loader','Start');
    applyOrientation();
    if( !isMobile.any() ) {
        document.getElementById("arlogo").style.display="none";
    }
    window.onresize = function (event) {
        applyOrientation();
    }
}, false);

window.addEventListener("orientationchange", function() {
    applyOrientation();
}, false);
  
  function applyOrientation() {
    if(navigator.userAgent.indexOf("iPad") != -1) {
        return false;
    }  

    if (window.orientation == "90" || window.orientation == "-90") {
        //Do stuff
        document.getElementById("rotateDivice").style.display="block";
    }
    else{
        document.getElementById("rotateDivice").style.display="none";
    }
  }

function notSupported() {
    var rot=document.getElementById('rotateDivice');
    rot.style.display='block';
}

function toggleview(divid) {
    var divref=document.getElementById(divid);
    if(divref.style.visibility == 'hidden')
        divref.style.visibility='visible';
    else
        divref.style.visibility='hidden';
}

function updatecolor(code,value,color) {
    $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", code);
    $(".one3d-toggle-color-selected .one3d-selected-color-name").text(value);
    $(".one3d-toggle-color-options").slideUp('200');
    $(".one3d-toggle-color-selected").toggleClass("one3d-select-color");

    //var divref=document.getElementById('colorSelect');
    //divref.style.background=code;
    ONE3D.ChangeColor(color);
    getArlink(color);
    //document.getElementById("colorname").innerHTML = value;
    //toggleview('colorSetList');
     //Google event of Load UI
     callGA('Color',color);
     //End of GA
}

function getArlink(color) {
    var arlink;
    arlink ={
        "ios": { 
            "blue":"https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Blue.usdz",
            "brown": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Brown.usdz",
            "grey": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Grey.usdz",
            "silver": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Silver.usdz",
            "white": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_White.usdz",
        },
        "Android": { 
            "blue":"https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Blue_Android_FL.glb",
            "brown": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Brown_Android_FL.glb",
            "grey": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Grey_Android_FL.glb",
            "silver": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_Silver_Android_FL.glb",
            "white": "https://carconfigurator.in/msil/AR3/assets/AR/SCROSS_White_Android_FL.glb",
        }
    }
    
    //find device - ios, android , desktop or other 
    if( isMobile.iOS() ) {
        url=arlink["ios"][color]+'#callToAction=Click%20to%20visit&checkoutTitle=The%20all%20new%20Scross&checkoutSubtitle=Get%20Ready%20For%20The%20Scross%20Petrol';
        const linkElement = document.getElementById("logourl");
        linkElement.addEventListener("message", function (event) {   
            if (event.data == "_apple_ar_quicklook_button_tapped") {
                // handle the user tap.   
                window.location.assign("https://www.eccentricengine.com/");
            }
        }, false);
    } else if( isMobile.Android() ) {
        url='intent://arvr.google.com/scene-viewer/1.0?file='+arlink["Android"][color]+'&mode=ar_only&title=The%20all%20new%20Scross&link=https://www.eccentricengine.com/#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://nexaexperience.com/s-cross/ar?armode=0;end;';
        const linkElement = document.getElementById("logourl");
        linkElement.addEventListener("message", function (event) {   
            if (event.data == "_apple_ar_quicklook_button_tapped") {
                // handle the user tap.   
                window.location.assign("https://www.eccentricengine.com/");
            }
        }, false);
     } else {
        url="#";
    }
    if(url!="#") {
        document.getElementById('logourl').setAttribute('href', url);
    } else {
        //hide button
        document.getElementById('logourl').setAttribute('href', url)
    }
    return url; 
}

function loadui() {
       // /Attache Layoutut on screen
    var One3dLayout = document.getElementById("one3d");
    One3dLayout.innerHTML=`<section class="one3d-main-section">
    <div class="one3d-object-wrapper">
        <div class="one3d-object-container"><div id="one3dcontent"></div></div>
        <div class="one3d-toggle-view">
            <div class="one3d-row">
                <input type="radio" name="toggle-view" id="one3d-exterior" value="exterior" checked>
                <label for="one3d-exterior">Exterior</label>
            </div>
            <div class="one3d-row">
                <input type="radio" name="toggle-view" id="one3d-interior" value="interior">
                <label for="one3d-interior">Interior</label>
            </div>
        </div>
        <div class="one3d-toggle-color">
            <div class="one3d-toggle-color-options">
                <p class="one3d-toggle-color-heading">Colors</p>
                <ul>
                </ul>
            </div>
            <div class="one3d-toggle-color-selected">
                <span class="one3d-selected-color"></span>
                <span class="one3d-selected-color-name"></span>
            </div>
        </div>
        <div class="one3d-view-ar" id="arlogo">
            <a rel="ar" href="#" id="logourl" onClick="callGA('loadAR','AR');"><span>View in AR</span></a>
        </div> 
        
        
        <div class="one3d-temp-cta-wrapper">
            <a href="javascript:;" class="one3d-view-image">View Image</a>
            <a href="javascript:;" class="one3d-view-animation">View Animation</a>
        </div>
    </div>
    <div class="one3d-popup-wrapper">
        <div class="one3d-popup-information">
            <div class="one3d-product-image">
                <img src="../images/one3d-cruise-control.jpg" alt="Cruise Control">
            </div>
            <div class="one3d-product-info">
                <p class="heading">Cruise-Control</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, justo, lacus enim, urna, congue scelerisque mauris. Neque, et quam lacinia placerat vitae tortor commodo sed.</p>
            </div>
            <span class="one3d-close-popup"></span>
        </div>
    </div>
    <div class="one3d-full-width-row one3d-bg-black one3d-align-center one-3d-cta-section">
        <button class="one3d-book-test-drive"><span>Book a Test Drive</span></button>
        <button class="one3d-book-online"><span>Book Online</span></button>
    </div>
<!--Rotate-Device-->
<div class="mngrotateDivice" id="rotateDivice" style="display: none;">
<div class="rotateDivice">
<div class="rotateDivicein">
    <span class="rotateDiviceicon"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/caution-icon.svg" alt="img"></span>
    <p>PLEASE ROTATE YOUR DEVICE TO PORTRAIT MODE<br> TO CONTINUE THE EXPERIENCE.</p> 
</div>
</div> </div>
<!--Rotate-Device-->
</section>`;
}
  
function UiToggle(mode)
{
    //document.getElementById('textDrive').style.visibility=mode;
    // document.getElementById('colorOption').style.visibility=mode;
    document.getElementById('arlogo').style.visibility=mode;

    document.querySelector(".one3d-toggle-color").style.visibility = mode;
    document.querySelector(".one3d-book-test-drive").style.visibility = mode;
    document.querySelector(".one3d-book-online").style.visibility = mode;
    document.querySelector(".one3d-toggle-view").style.visibility = mode;
    
}

function onLoadCarCompleteExterior() {
    //Need to call ui function here after 3d load
    // GA
    callGA('Loader','End');
    // get AR link and mount
    UiToggle('visible')
    getArlink('blue');
    ONE3D.changeBgColor('#020202');
}

function showHotspot(name, featuretype) {
    //call GA event
    callGA('Hotspot',name)
    //end of GA Event

    // var popup = document.getElementById('showpopup');
    // var img = document.getElementById('img');
    // var title = document.getElementById('title');
    // var details = document.getElementById('details');
    // img.src = hotsptData[name]['img'];
    // title.innerHTML = hotsptData[name]['title'];
    // details.innerHTML = hotsptData[name]['details'];
    // popup.style.display="block";

    if(featuretype=='2d'){ //with image
        $(".one3d-popup-information .one3d-product-image img").attr("src",hotsptData[name]['img']);
        $(".one3d-popup-information .one3d-product-info .heading").attr("src",hotsptData[name]['title']);
        $(".one3d-popup-information .one3d-product-info .description").attr("src",hotsptData[name]['details']);

        $(".one3d-main-section").addClass("one3d-popup");
        $(".one3d-popup-information").addClass("one3d-static-info");
    }
    else { //For animation
        $(".one3d-popup-information .one3d-product-info .heading").attr("src",hotsptData[name]['title']);
        $(".one3d-popup-information .one3d-product-info .description").attr("src",hotsptData[name]['details']);
        
        $(".one3d-main-section").addClass("one3d-popup one3d-no-overlay");
        $(".one3d-popup-information").addClass("one3d-video-info");
        $(".one3d-popup-information.one3d-video-info").css("padding-bottom", $(".one-3d-cta-section").outerHeight(true) + "px");
    }
        
}

function closePopup() {
    var popup = document.getElementById('showpopup');
    popup.style.display="none";
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var hotsptData = {
    'hp_petrol_engine':{'img':'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/petrol_engine.jpg','title':'Powerful New 1.5L Petrol Engine','details':'Experience a refined and powerful driving experience in the new S-Cross Petrol with a new 1.5L K15 Engine.'},
    'hp_led_projector':{'img':'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/led_projector.jpg','title':'LED Projector Headlamps with LED DRLs','details':'Sharp and crystalline LED Projector Headlamps with LED DRLs elevate the sophistication of the Refined SUV.'},
    'hp_smart_hybrid':{'img':'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/smart_hybrid.jpg','title':'Advanced Smart Hybrid Technology','details':'The NEXT Gen Smart Hybrid Technology in the new S-Cross Petrol is designed to ensure smooth drives no matter where the journey takes you.'},
    'hp_wipers':{'img':'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/wipers.jpg','title':'Auto Rain Sensing Wipers','details':'The new S-Cross’s Auto Rain Sensing Wipers are designed to detect rainfall and start automatically with an option to control frequency and rain sensitivity.'},
    'hp_chrome_grille':{'img':'https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/chrome_grille.jpg','title':'Dominating Front Chrome Grille','details':'The metal grille in the front of the new S-Cross – The Refined SUV, exudes aggression, taking its powerful persona up a notch.'}
};

function OnfeatureHpSelect(hpName)
{
    if(hpName === "Petrol_Engine")
    {
        showHotspot("hp_petrol_engine", "2d");
    }
    if(hpName === "Chrome_Grill")
    {
        showHotspot("hp_chrome_grille", "2d");
    }
    if(hpName === "LED_Headlamps")
    {
        showHotspot("hp_led_projector", "2d");
    }
    if(hpName === "Smart_Hybrid")
    {
        showHotspot("hp_smart_hybrid", "");
    }
    if(hpName === "Rain_Sensing_Wipers")
    {
        showHotspot("hp_wipers", "");
    }
}
// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-106445415-11']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src =
      ("https:" == document.location.protocol
        ? "https://ssl"
        : "http://www") + ".google-analytics.com/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
  })();

function includeJs(jsFilePath) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;
    document.body.appendChild(js);
}

function callGA(elabel,elabelval)
{
    // _gaq.push(['_trackEvent',elabel, 'click', elabelval ]);
}


//function by Prop
$(function() {
    /** Color Swatches **/
    var one3d_toggle_color = ["#193d73", "#ffffff", "#8c8c8c", "#4a4a4a", "#52311d"];
    var one3d_toggle_color_name = ["NEXA Blue", "Pearl Arctic White", "Premium Silver", "Granite Grey", "Caffeine Brown"];
    var one3d_toggle_color_shade = ["blue", "white", "silver", "grey", "brown"];

    if($(".one3d-toggle-color-selected").length) {
        for(var i=0; i<one3d_toggle_color.length; i++) {
            $(".one3d-toggle-color .one3d-toggle-color-options ul").append("<li style='background-color: " + one3d_toggle_color[i] + "' title='" + one3d_toggle_color_name[i] + "' data-color-shade='" + one3d_toggle_color_shade[i] + "'></li>");
        }

        $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).css("background-color"));
        $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).attr("title"));

        $(".one3d-toggle-color-selected").on("click", function() {
            $(this).toggleClass("one3d-select-color");
            $(".one3d-toggle-color-options").slideToggle('200');
        });

        $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").on("click", function() {
            //updatecolor('#193d73','NEXA Blue','grey');
            
            updatecolor($(this).css("background-color"), $(this).attr("title"), $(this).attr("data-color-shade"));
            // $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(this).css("background-color"));
            // $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(this).attr("title"));
            // $(".one3d-toggle-color-options").slideUp('200');
        });
    }
    /** Color Swatches ends **/

    /** Popup close **/
    if($(".one3d-popup-wrapper").length) {
        $(".one3d-close-popup").on("click", function() {
            $(".one3d-main-section").removeClass("one3d-popup one3d-no-overlay");
            $(".one3d-popup-information").removeClass("one3d-static-info");
            $(".one3d-popup-information").removeClass("one3d-video-info").removeAttr("style");
        });
    }
    /** Popup close ends **/

    /** Book a test drive CTA **/
    if($(".one3d-book-test-drive").length) {
        $(".one3d-book-test-drive").on("click", function() {
            callGA('test drive','test drive');
            window.location.href = "https://www.nexaexperience.com/e-booking?login=0";
        });
    }
    /** Book a test drive CTA ends **/

    /** Switch views interior/exterior **/
    if($(".one3d-toggle-view").length) {
        $(".one3d-toggle-view label").on("click", function() {
            if($(this).attr("for") == "one3d-exterior") {
                // function for exterior view goes here
            }
            else {
                // function for interior view goes here
            }
        });
    }
    /** Switch views interior/exterior ends **/

    if($(window).width() <= 640) {
        if($(".one3d-toggle-view").length) {
            $(".one3d-toggle-view label").each(function() {
                $(this).text($(this).text().substring(0,3));
            }).promise().done(function() {
                $(".one3d-toggle-view").animate({"opacity": 1}, 500);
            })
        }
    }

    if(navigator.userAgent.indexOf("iPhone") != -1) {
        if($(window).width() < 480) {
            $(".one3d-main-section").addClass("iPhone");
        }
    }



    /** needs to be removed post demo starts **/
    // $(".one3d-view-image").on("click", function() {
    //     $(".one3d-main-section").addClass("one3d-popup");
    //     $(".one3d-popup-information").addClass("one3d-static-info");
    // });

    // $(".one3d-view-animation").on("click", function() {
    //     $(".one3d-main-section").addClass("one3d-popup one3d-no-overlay");
    //     $(".one3d-popup-information").addClass("one3d-video-info");
    // });
    /** needs to be removed post demo ends **/
});