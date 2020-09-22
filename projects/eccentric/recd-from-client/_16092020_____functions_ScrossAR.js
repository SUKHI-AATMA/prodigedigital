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
		<img src="`+fileurl+`loader.png"
		  style="display: block;position: absolute;transform: translate(50%, -50%);top: 50%;right: 50%;">
		<div id="myBar" style="width: 0%;background-color:#ffffff;height: 5px;top: 60%;position: absolute; display: block;">
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
    var divref=document.getElementById('colorSelect');
    divref.style.background=code;
    ONE3D.ChangeColor(color); //3D function to change color 
    getArlink(color); ////3D function to get AR 
    document.getElementById("colorname").innerHTML = value;
    toggleview('colorSetList');
     //Google event of Load UI
     callGA('Color',color); //CAll GA function/ Color is parameter and color is value
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
    One3dLayout.innerHTML=`<div class="textDrive" id="textDrive"><a onClick="callGA('test drive','test drive');" href="https://www.nexaexperience.com/e-booking?login=0">
                    <div class="textDrivel"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/test-drive-icon.svg" alt="img"></div>
                    <div class="textDriver">BOOK A TEST DRIVE NOW!</div></a> 
                </div>
                <!--test-drive-->

                <!--top-right-close-button-->
                <button style="display:none" class="closeButton"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/close-icon.svg" alt="img"></button>
                <!--top-right-close-button-->

                <!--bottom-right-ar-logo-->
                <div class="arlogo" id="arlogo">
                    <a rel="ar" href="#" id="logourl" onClick="callGA('loadAR','AR');" ><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/ar-logo.svg" alt="img"></a>
                </div> 
                <!--bottom-right-ar-logo-->

                <!--color-set-drop-down-->
                <div class="colorSetList" id="colorSetList" >
                <div class="colorSet"  id="colorSet">
                <ul>
                    <li><a href="#"><div class="mycolors" style="background:#193d73;" onclick="updatecolor('#193d73','NEXA Blue','blue');"></div></a></li>
                    <li><a href="#"><div class="mycolors" style="background:#FFFFFF;" onclick="updatecolor('#FFFFFF','Pearl Arctic White','white');"></div></a></li>
                    <li><a href="#"><div class="mycolors" style="background:#8c8c8c;" onclick="updatecolor('#8c8c8c','Premium Silver','silver');"></div></a></li>
                    <li><a href="#"><div class="mycolors" style="background:#4a4a4a;" onclick="updatecolor('#4a4a4a','Granite Grey','grey');"></div></a></li>
                    <li><a href="#"><div class="mycolors" style="background:#52311d;" onclick="updatecolor('#52311d','Caffeine Brown','brown');"></div></a></li>
                </ul>
                </div>
                </div> 
                <!--color-set-drop-down-->
                <!--color-selected-->
                <div class="colorOption" id="colorOption"> 
                <div class="colorOptionin" onclick="toggleview('colorSetList');"> 
                    <div class="colorSelect" id="colorSelect" style="background:#183F66;"></div>
                    <div class="colorSelecttitle"> <p id='colorname'>NEXA BLUE </p> </div>
                    <div class="upadow"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/uparow.svg" alt="img"></div>
                </div>
                </div>
                <!--color-selected--> 

                <!--popup-block-start-->
                <div class="fg selectpopup" id="showpopup" style="display: none;">
                <!--open-popup-->
                <div class="popupInner">
                <div class="popupInnerw"><div class="popupInnerinfo">
                    <div class="popupInnerinfotop"><img id="img" src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/features/led_projector.jpg" alt="img"></div>
                    <div class="popupInnerinfobtm">
                        <span id="title">LED Projector Headlamps with LED DRLs</span>
                        <p id="details">Sharp and crystalline LED Projector Headlamps with LED DRLs elevate the sophistication of the Refined SUV.</p></div> 
                    <button class="popupcloseButton" id="popupcloseButton" onclick="closePopup()"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/close-icon.svg" alt="img"></button>
                </div></div> 
                </div>
                <!--open-popup-->

                <!--open-overlay-->
                <div class="popupoverlaybg"></div> 
                <!--open-overlay-->

                </div> 
                <!--popup-block-end-->

                <!--Rotate-Device-->
                <div class="mngrotateDivice" id="rotateDivice" style="display: none;">
                <div class="rotateDivice">
                <div class="rotateDivicein">
                    <span class="rotateDiviceicon"><img src="https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/arv3/assets/caution-icon.svg" alt="img"></span>
                    <p>PLEASE ROTATE YOUR DEVICE TO PORTRAIT MODE<br> TO CONTINUE THE EXPERIENCE.</p> 
                </div>
                </div> </div>
                <!--Rotate-Device-->

        <div class="overlaybg" style="display: none;"></div><div id="one3dcontent"></div>`;
    document.getElementById('colorSetList').style.visibility = 'hidden';
    document.getElementById('colorSetList').style.visibility = 'hidden';
   

}
  
function UiToggle(mode)
{
    
    document.getElementById('textDrive').style.visibility=mode;
    document.getElementById('colorOption').style.visibility=mode;
    document.getElementById('arlogo').style.visibility=mode;
    
}

function onLoadCarCompleteExterior() {
    //Need to call ui function here after 3d load
    // GA
    callGA('Loader','End');
    // get AR link and mount
    UiToggle('visible')
    getArlink('blue'); // default AR CAR
    ONE3D.changeBgColor('#020202');  // default CAR Color
}

function showHotspot(name,featuretype='2d') {

    //call GA event
    callGA('Hotspot',name)
    //end of GA Event
if(featuretype=='2d'){ //with image
        var popup = document.getElementById('showpopup');
        var img = document.getElementById('img');
        var title = document.getElementById('title');
        var details = document.getElementById('details');
        img.src = hotsptData[name]['img'];
        title.innerHTML = hotsptData[name]['title'];
        details.innerHTML = hotsptData[name]['details'];
        popup.style.display="block";
    }
    else{ //For animation
         var popup = document.getElementById('showpopup');
        var img = document.getElementById('img');
        var title = document.getElementById('title');
        var details = document.getElementById('details');
        img.src = hotsptData[name]['img'];
        title.innerHTML = hotsptData[name]['title'];
        details.innerHTML = hotsptData[name]['details'];
        popup.style.display="block";

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
        showHotspot("hp_petrol_engine");
    }
    if(hpName === "Chrome_Grill")
    {
        showHotspot("hp_chrome_grille");
    }
    if(hpName === "LED_Headlamps")
    {
        showHotspot("hp_led_projector");
    }
    if(hpName === "Smart_Hybrid")
    {
        showHotspot("hp_smart_hybrid");
    }
    if(hpName === "Rain_Sensing_Wipers")
    {
        showHotspot("hp_wipers");
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
    var one3d_toggle_color = ["#888", "#777", "#666", "#555", "#444", "#333", "#222", "#111"];
    var one3d_toggle_color_name = ["Spunky Blue", "Rustic Brown with Sizzling Black roof", "Spunky Blue", "Rustic Brown with Sizzling Black roof", "Spunky Blue", "Rustic Brown with Sizzling Black roof", "Spunky Blue", "Rustic Brown with Sizzling Black roof"];

    if($(".one3d-toggle-color-selected").length) {
        for(var i=0; i<one3d_toggle_color.length; i++) {
            $(".one3d-toggle-color .one3d-toggle-color-options ul").append("<li style='background-color: " + one3d_toggle_color[i] + "' title='" + one3d_toggle_color_name[i] + "'></li>")
        }

        $(".one3d-toggle-color-selected").on("click", function() {
            $(this).toggleClass("one3d-select-color");
            $(".one3d-toggle-color-options").slideToggle('200');
        });

        $(".one3d-toggle-color .one3d-toggle-color-options ul li").on("click", function() {
            $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(this).css("background-color"));
            $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(this).attr("title"));
            $(".one3d-toggle-color-options").slideUp('200');
        }).eq(0).click();
    }

    if($(".one3d-popup-wrapper").length) {
        $(".one3d-close-popup").on("click", function() {
            $(".one3d-main-section").removeClass("one3d-popup one3d-no-overlay");
            $(".one3d-popup-information").removeClass("one3d-static-info");
            $(".one3d-popup-information").removeClass("one3d-video-info");
        });
    }

    /** needs to be removed post demo starts **/
    $(".one3d-view-image").on("click", function() {
        $(".one3d-main-section").addClass("one3d-popup");
        $(".one3d-popup-information").addClass("one3d-static-info");
    });

    $(".one3d-view-animation").on("click", function() {
        $(".one3d-main-section").addClass("one3d-popup one3d-no-overlay");
        $(".one3d-popup-information").addClass("one3d-video-info");
    });
    /** needs to be removed post demo ends **/
});