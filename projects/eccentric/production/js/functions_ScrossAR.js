var one3dFunctions = function (){ this.loadedPercent =0; this.variantName = ""; serverURL = ""; canvasId = ""; carName = "";};
var ONE3D = new one3dFunctions();
var Headlight_Toggle = false;
var Taillight_Toggle = false;
var hideflag = false;
var LastColorSelect = "gold";

one3dFunctions.prototype.init = function (component_id='', serverURL='assets/', carName = "Altroz", variant="XZ") {
	if(component_id == '') return 0;
	ONE3D.canvasId = "one3dcanvas";
	ONE3D.carName = carName;
	ONE3D.variant = variant;
    ONE3D.serverURL = serverURL+"assets/"
    
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
            script.src = "../js/package.js";
            script.type = "text/javascript";
            script.onload = function(){
                ONE3D.LoadCar(carName, variant, feature=true, pin=null);
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        }
};

one3dFunctions.prototype.InteriorView = function () {
    //GA For interior
    callGA('ViewClick',"InteriorView")
    window.one3dref._gotoInterior();
}
one3dFunctions.prototype.ExteriorView = function () {
    //GA For interior
    callGA('ViewClick',"ExteriorView")

    window.one3dref._gotoExterior();
}
one3dFunctions.prototype.ChangeColor = function (hexcode,roofHexcode = null) {
    if (hexcode == "white") {
		LastColorSelect = "white";
        hexcode ="#CCCCCC,#FFFFFF";
        roofHexcode = "#CCCCCC,#FFFFFF";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#CCCCCC",CC:"#FFFFFF"}}
    } else if (hexcode === "silver") {
		LastColorSelect = "silver";
        hexcode = "#595959,#FFFFFF";
        roofHexcode = "#595959,#FFFFFF";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#595959",CC:"#FFFFFF"}}
    }else if (hexcode == "grey") {
		LastColorSelect = "grey";
        hexcode = "#131519,#E6EBF7";
        roofHexcode = "#131519,#E6EBF7";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#131519",CC:"#E6EBF7"}}
    }else if (hexcode == "red") {
		LastColorSelect = "red";
        hexcode = "#DB360D,#C70D0D";
        roofHexcode = "#DB360D,#C70D0D";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#DB360D",CC:"#C70D0D"}}
    }else if (hexcode == "gold") {
		LastColorSelect = "gold";
        hexcode = "#805D29,#FFFBE8";
        roofHexcode = "#805D29,#FFFBE8";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#805D29",CC:"#FFFBE8"}}
    }
	else if (hexcode == "blue") {
		LastColorSelect = "blue";
        hexcode = "#005C75,#00A6C7";
        roofHexcode = "#005C75,#00A6C7";
		customArray = {ALTROZ_EX_SPOILER_CARPAINT:{albedo:"#005C75",CC:"#00A6C7"}}
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

one3dFunctions.prototype.LoadCar = function (carName = 'Altroz', variant = 'XZ', feature = true, pin = null) {
    ONE3D.variantName = variant;
	ONE3D.carName = carName;
    window.one3drefMain._setServerURL(ONE3D.serverURL);
    window.one3drefMain._loadCar(carName, variant, feature, pin);
}


window.addEventListener("resize", function () { ONE3D.resizeWindow(); });

one3dFunctions.prototype.resizeWindow = function () {
    if (window.one3dref)
        window.one3dref._resizeWindow();
}


// Remove Listener
one3dFunctions.prototype.removeEventListener = function () {
    if (_check_orientation)
        window.removeEventListener("orientationchange", _check_orientation, false);
	
	if (_checkResize)
        window.removeEventListener("resize", _checkResize, false);
}

//Features
one3dFunctions.prototype.showFeature = function (featureName) {
    if (window.one3dref)
        window.one3dref._showFeature(featureName);
}
one3dFunctions.prototype.nextFeature = function () {
    if (window.one3dref)
        window.one3dref._nextFeature();
}
one3dFunctions.prototype.previousFeature = function () {
    if (window.one3dref)
        window.one3dref._previousFeature();
}
one3dFunctions.prototype.hideFeature = function () {
    if (window.one3dref)
        window.one3dref._hideFeature();
}
one3dFunctions.prototype.setOffset = function (name, val1, val2) {
    if (window.one3dref)
        window.one3dref._setOffset(name, val1, val2);
}


//Lights
one3dFunctions.prototype.enableHeadlight = function (enable) {
    if (typeof enable === "boolean")
    {
        Headlight_Toggle = enable;
    }
    
    if (window.one3dref)
        window.one3dref._enableHeadLight(enable);
}

one3dFunctions.prototype.enableTaillight = function (enable) {
    if (typeof enable === "boolean")
    {
        Taillight_Toggle = enable;
    }

    if (window.one3dref)
        window.one3dref._enableTailLight(enable);
}

one3dFunctions.prototype.HeadlightToggle = function () {
    Headlight_Toggle = !Headlight_Toggle;
    if (window.one3dref)
    window.one3dref._enableHeadLight(Headlight_Toggle);
}

one3dFunctions.prototype.TaillightToggle = function () {
    Taillight_Toggle = !Taillight_Toggle;
    if (window.one3dref)
    window.one3dref._enableTailLight(Taillight_Toggle);
}


one3dFunctions.prototype.changeBgColor = function (value) {
    window.angularComponentRefMain._changeBGcolor(value);
}





// mainjs to exterional function calling
var CallbackHandler = (function () {
    return {
        _onLoadCarCompleteExterior: function () {
            if (window.orientation == 0) {//POTRAIT
                if (window.one3dref)
                    window.one3dref._setToPotrait();
            }
            else {//LANDSCAPE
                if (window.one3dref)
                    window.one3dref._setToLandscape();
            }
            ONE3D.resizeWindow();

            if (typeof onLoadCarCompleteExterior === 'function')
                window.onLoadCarCompleteExterior();
        },
       
        _onLoadCarCompleteInterior: function () {
            ONE3D.resizeWindow();

            if (typeof onLoadCarCompleteInterior === 'function')
                window.onLoadCarCompleteInterior();
        },
        _onInteriorViewComplete: function () {
            ONE3D.resizeWindow();

            if (typeof onInteriorViewComplete === 'function')
                window.onInteriorViewComplete();
        },
        _onExteriorViewComplete: function () {
            ONE3D.resizeWindow();
            
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
            if(featureName.hotspot === "HP_FEAT_L_GLOVEBOX" || featureName.hotspot === "HP_FEAT_BOOTSPACE" || featureName.hotspot === "HP_FEAT_RAIN_SENSING_WIPER" )
            {
                ONE3D.showFeature(featureName.hotspot);
            }

            if(featureName.hotspot === "HeadLamps")
            {
                ONE3D.HeadlightToggle();
            }

            if(featureName.hotspot === "TailLamp")
            {
                ONE3D.TaillightToggle();
            }


            if (typeof OnfeatureHpSelect === 'function')
                window.OnfeatureHpSelect(featureName);
        },
        _OnAnimationStart: function (featureName) {
            hideflag = true;
            if (typeof OnAnimationStart === 'function')
                window.OnAnimationStart(featureName);
        },
        _OnAnimationComplete: function () {
            if (typeof OnAnimationComplete === 'function')
                window.OnAnimationComplete();
        },
        _checkOrientation: function () {
            if (window.innerHeight > window.innerWidth) {//POTRAIT
                window.angularComponentRef._setToPotrait();
            }
            else {//LANDSCAPE
                window.angularComponentRef._setToLandscape();
            }
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

function OnAnimationComplete()
{
    if(hideflag == true)
    {
        hideflag = false;
        setTimeout(() => {
            ONE3D.hideFeature();
        }, 1000);
        
    }
}


function attachcss(){
   var link = document.createElement('link');  
        // set the attributes for link element 
           link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = '../images/one3d/nexapve.css';  
        // Get HTML head element to append  
        // link element to it  
        document.getElementsByTagName('HEAD')[0].appendChild(link);  
}
//attachcss();


document.addEventListener('DOMContentLoaded', function() {
    loadui();
    UiToggle('hidden')
    ONE3D.init("one3dcontent","https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/stagefiles/",'Altroz','XZ');
    //Load default color
    
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
    $(".one3d-toggle-color-options").slideUp('200', function() {
        if($(".one3d-toggle-color-options").is(":visible")) {
            $(".one3d-toggle-color-selected").addClass("one3d-select-color");
        }
        else {
            $(".one3d-toggle-color-selected").removeClass("one3d-select-color");
        }
    });
    
    

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
    //call GA For AR
    callGA('Arlink',color)
    
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
                <label for="one3d-exterior"  onClick="ONE3D.ExteriorView();" >Exterior</label>
            </div>
            <div class="one3d-row">
                <input type="radio" name="toggle-view" id="one3d-interior" value="interior">
                <label for="one3d-interior"    onClick="ONE3D.InteriorView();">Interior</label>
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
                <p class="heading">Cruise-Control1</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, justo, lacus enim, urna, congue scelerisque mauris. Neque, et quam lacinia placerat vitae tortor commodo sed.</p>
            </div>
            <span class="one3d-close-popup"></span>
            <span class="bg-gradient"></span>
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
    <span class="rotateDiviceicon"><img src="../images/one3d/caution-icon.svg" alt="img"></span>
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
    getArlink('gold');
    updatecolor('#805D29','Gold','gold');
}
var animation=false;

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
        animation=false;
        $(".one3d-popup-information .one3d-product-image img").attr("src",hotsptData[name]['img']);
        $(".one3d-popup-information .one3d-product-info .heading").text(hotsptData[name]['title']);
        $(".one3d-popup-information .one3d-product-info .description").text(hotsptData[name]['details']);

        $(".one3d-main-section").addClass("one3d-popup");
        $(".one3d-popup-information").addClass("one3d-static-info");
    }
    else { //For animation
        animation=true;
        $(".one3d-popup-information .one3d-product-info .heading").text(hotsptData[name]['title']);
        $(".one3d-popup-information .one3d-product-info .description").text(hotsptData[name]['details']);
        
        $(".one3d-main-section").addClass("one3d-popup one3d-no-overlay");
        $(".one3d-popup-information").addClass("one3d-video-info");
        $(".one3d-popup-information.one3d-video-info").css("padding-bottom", $(".one-3d-cta-section").outerHeight(true) + "px");
        $(".one3d-popup-information.one3d-video-info .bg-gradient").css("bottom", $(".one-3d-cta-section").outerHeight(true) + "px");
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
    '90DEGREE_OPENING_DOORS':{'img':'../images/one3d/features/petrol_engine.jpg','title':'Powerful New 1.5L Petrol Engine','details':'Experience a refined and powerful driving experience in the new S-Cross Petrol with a new 1.5L K15 Engine.'},
    'DUALCHAMBER_PROJECTOR_HEADLAMPS':{'img':'../images/one3d/features/led_projector.jpg','title':'LED Projector Headlamps with LED DRLs','details':'Sharp and crystalline LED Projector Headlamps with LED DRLs elevate the sophistication of the Refined SUV.'},
    'hp_smart_hybrid':{'img':'../images/one3d/features/smart_hybrid.jpg','title':'Advanced Smart Hybrid Technology','details':'The NEXT Gen Smart Hybrid Technology in the new S-Cross Petrol is designed to ensure smooth drives no matter where the journey takes you.'},
    'RAIN_SENSING_WIPERS_A':{'img':'../images/one3d/features/wipers.jpg','title':'Auto Rain Sensing Wipers','details':'The new S-Cross’s Auto Rain Sensing Wipers are designed to detect rainfall and start automatically with an option to control frequency and rain sensitivity.'},
    'LED_DRL':{'img':'../images/one3d/features/chrome_grille.jpg','title':'Dominating Front Chrome Grille','details':'The metal grille in the front of the new S-Cross – The Refined SUV, exudes aggression, taking its powerful persona up a notch.'}
};

function OnfeatureHpSelect(hpName)
{
   // alert(hpName.hotspot);
   if(hpName.hotspot === "90DEGREE_OPENING_DOORS")
   {
       showHotspot("90DEGREE_OPENING_DOORS", "2d");
   }
   if(hpName.hotspot === "HARMAN_INFOTAINMENT")
   {
       showHotspot("HARMAN_INFOTAINMENT", "2d");
   }
   if(hpName.hotspot === "DUALCHAMBER_PROJECTOR_HEADLAMPS")
   {
       showHotspot("DUALCHAMBER_PROJECTOR_HEADLAMPS", "2d");
   }
   if(hpName.hotspot === "DIGITAL_INSTRUMENT_CLUSTER")
   {
       showHotspot("DIGITAL_INSTRUMENT_CLUSTER", "2d");
   }
   if(hpName.hotspot === "RAIN_SENSING_WIPERS_A")
   {
       showHotspot("RAIN_SENSING_WIPERS_A", "2d");
   }

   if(hpName.hotspot === "HP_FEAT_L_GLOVEBOX" || hpName.hotspot === "HP_FEAT_BOOTSPACE" || hpName.hotspot === "HP_FEAT_RAIN_SENSING_WIPER" )
   {
       showHotspot("RAIN_SENSING_WIPERS_A", "");
       //ONE3D.showFeature(hpName.hotspot);
   }

   
}
// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-178252400-2']);
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
     _gaq.push(['_trackEvent',elabel, 'click', elabelval ]);
}


//function by Prop
$(function() {
    /** Color Swatches **/
    var one3d_toggle_color = ["#FFFFFF", "#595959", "#131519", "#DB360D", "#805D29","#005C75"];
    var one3d_toggle_color_name = ["White", "silver", "Premium Grey", "Red", "Gold","Blue"];
    var one3d_toggle_color_shade = ["white", "silver", "grey", "red", "gold","blue"];

    if($(".one3d-toggle-color-selected").length) {
        for(var i=0; i<one3d_toggle_color.length; i++) {
            $(".one3d-toggle-color .one3d-toggle-color-options ul").append("<li style='background-color: " + one3d_toggle_color[i] + "' title='" + one3d_toggle_color_name[i] + "' data-color-shade='" + one3d_toggle_color_shade[i] + "'></li>");
        }

        $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).css("background-color"));
        $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).attr("title"));

        $(".one3d-toggle-color-selected").on("click", function() {
            // $(this).toggleClass("one3d-select-color");
            $(".one3d-toggle-color-options").slideToggle('200',function() {
                if($(".one3d-toggle-color-options").is(":visible")) {
                    $(".one3d-toggle-color-selected").addClass("one3d-select-color");
                }
                else {
                    $(".one3d-toggle-color-selected").removeClass("one3d-select-color");
                }
            });
            
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

              //only run when 3d feature is called
              if(animation){ONE3D.hideFeature();animation=false}
            $(".one3d-popup-information").removeClass("one3d-video-info").removeAttr("style");
        });
    }
    /** Popup close ends **/

    /** Book a test drive CTA **/
    if($(".one3d-book-test-drive").length) {
        $(".one3d-book-test-drive").on("click", function() {
            callGA('CTA','test drive');
            window.location.href = "https://www.nexaexperience.com/e-booking?login=0";
        });
    }
    /** Book a test drive CTA ends **/

      /** Book a online **/
      if($(".one3d-book-online").length) {
        $(".one3d-book-online").on("click", function() {
            callGA('CTA','BookOnlie');
            window.location.href = "https://www.nexaexperience.com/e-booking?login=0";
        });
    }
    /** Book a online  ends **/



    /** Switch views interior/exterior **/
    if($(".one3d-toggle-view").length) {
        $(".one3d-toggle-view label").on("click", function() {
            if($(this).attr("for") == "one3d-exterior") {
                // function for exterior view goes here
                  // GA For interior
                    //callGA('ViewClick',"ExteriorView")
                    //ONE3D.ExteriorView();
            }
            else {
                // function for interior view goes here
                  // GA For interior
                    //callGA('ViewClick',"InteriorView")
                    //ONE3D.InteriorView();
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