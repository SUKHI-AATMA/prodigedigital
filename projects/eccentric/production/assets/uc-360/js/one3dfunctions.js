var one3dFunctions = function (){ this.loadedPercent =0; this.variantName = ""; serverURL = ""; canvasId = ""; carName = "";};
var ONE3D = new one3dFunctions();
var Headlight_Toggle = false;
var Taillight_Toggle = false;
var hideflag = false;
var LastColorSelect = "rusticbrown_whiteroof";
var toyotastaticfolder = document.currentScript.getAttribute("data-url");
var untouched = true;
var cameratutorialanim;
var handanim;
var thehand;
var CurrentFeatName = null;
var selectedvariable ="Premium AT";
var changevar=false

one3dFunctions.prototype.init = function (component_id='', serverURL=toyotastaticfolder+'/assets/uc-360/', carName = "Urban Cruiser", variant="Premium AT") {
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
		<img src="`+toyotastaticfolder+`/assets/uc-360/images/logo-toyota.png" class="one3d-loader-logo" style="display: block;position: absolute;transform: translate(50%, -50%);top: 50%;right: 50%;">
        <div id="myBar"></div>
        <div class="one3d-loader-percentage" id="loadPerc">LOADING</div>
        </div>
        </div>

        <div id="hand" style="position: fixed;
        top: 50%;
        left: 50%;
        opacity:0;
        transform: translate(-50%, -50%);"><img src="`+toyotastaticfolder+`/assets/uc-360/images/hand.png" style="height: 45px;"></div>`;
        var element =  document.getElementById('canvasContainer');
        if(typeof(element) != 'undefined' && element != null) {
            var script = document.createElement("script");
            script.src = toyotastaticfolder+"/assets/uc-360/js/package.js";
            script.type = "text/javascript";
            script.onload = function(){
                ONE3D.LoadCar(carName, variant, feature=true, pin=null);
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        }
};

one3dFunctions.prototype.InteriorView = function () {
    window.one3dref._gotoInterior();
}
one3dFunctions.prototype.ExteriorView = function () {
    window.one3dref._gotoExterior();
}

one3dFunctions.prototype.changeBgColor = function (value) {
    window.one3dref._changeBGcolor(value);
}

one3dFunctions.prototype.ResetCamera = function () {
    window.one3dref._resetCamera();
}

one3dFunctions.prototype.changeVariant = function (value) {
    // ONE3D.hideFeature();
    //console.log(value);
    if(ONE3D.variantName === value)
    {
       // console.warn("Already on Selected Variant !");
        return;
    }

    //Remove Camera Tutorial
    removecameratutorial();

    //Close doors if open
    if(doorOpen)
    {
        TweenMax.to(leftfrontdoor,0,{y : 0, ease:Power1.easeIn, onUpdate: jittercam, onComplete:function(){
            doorOpen = false;
         }});
        TweenMax.to(leftreardoor,0,{y : 0, ease:Power1.easeIn});
        TweenMax.to(rightfrontdoor,0,{y : 0, ease:Power1.easeIn});
        TweenMax.to(rightreardoor,0,{y : 0, ease:Power1.easeIn});
    
        TweenMax.to(bootdoor,0,{x : 0, ease:Power1.easeIn});
        if(bootdoormech)
            TweenMax.to(bootdoormech,0,{x : 0, ease:Power1.easeIn});
    }
    

    window.one3dref._changeVariant(value);
}

one3dFunctions.prototype.LoadCar = function (carName = 'Urban Cruiser', variant = 'Premium AT', feature = true, pin = null) {
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

    if(CurrentFeatName === "Electro chromatic RearView Mirror")
    {
        var mat = one3dref.getMaterial("TOYOTA_URBAN_CRUISER_RLECTRO_REAR_MIRROR_MAT");
        TweenMax.to(mat,0,{metallic:0.0});
        TweenMax.to(mat.albedoColor,0,{r:1.0});
        TweenMax.to(mat.albedoColor,0,{g:1.0});
        TweenMax.to(mat.albedoColor,0,{b:1.0});
        var mesh = one3dref.getMesh("TOYOTA_URBAN_CRUISER_RLECTRO_REAR_VIEW_OFF_MESH");
        mesh.setEnabled(true);      
    };

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

//Background Color
one3dFunctions.prototype.changeBgColor = function (value) {
    window.angularComponentRefMain._changeBGcolor(value);
}


//Camera Tutorial
function cameratutorial()
{
    if(untouched == true)
    {
        thehand = document.getElementById("hand");
        TweenMax.to(thehand, 0.5, {opacity:"0.8"});
        handanim = TweenMax.to(thehand, 1, {left:"60%",ease:Power2.easeOut, yoyoEase:Power2.easeOut,  repeat:3});
        cameratutorialanim = TweenMax.to(one3dref.getScene().cameras[0],1,{alpha:one3dref.getScene().cameras[0].alpha - 0.1, ease:Power2.easeOut, yoyoEase:Power2.easeOut,  repeat:3,onUpdate:updatecam, onComplete:checkforcamtutorial});
    }
    document.getElementById(ONE3D.canvasId).addEventListener('pointerdown',removecameratutorial, false);
}

function updatecam()
{
    ONE3D.resizeWindow();
}

function checkforcamtutorial()
{
    TweenMax.to(thehand, 0.5, {opacity:"0"});
    setTimeout(function(){
        if(untouched == true)
        {
            thehand = document.getElementById("hand");
            TweenMax.to(thehand, 0.5, {opacity:"0.8",display:"block"});
            handanim = TweenMax.to(thehand, 1, {left:"60%",ease:Power2.easeOut, yoyoEase:Power2.easeOut,  repeat:3});
            cameratutorialanim = TweenMax.to(one3dref.getScene().cameras[0],1,{alpha:one3dref.getScene().cameras[0].alpha - 0.1, ease:Power2.easeOut, yoyoEase:Power2.easeOut,  repeat:3,onUpdate:updatecam, onComplete:checkforcamtutorial});
        }
    },5000);
    
}

function removecameratutorial()
{
    untouched = false; 
    if(cameratutorialanim)
    {
        cameratutorialanim.kill();
    }
    if(handanim)
    {
        handanim.kill();
    }
    TweenMax.to(thehand, 0.5, {opacity:"0",display:"none"});
    document.getElementById(ONE3D.canvasId).removeEventListener('pointerdown', function() { });
}

//Door Open
function jittercam()
{
  one3dref.getScene().cameras[0].alpha += 0.00001;
  ONE3D.resizeWindow();
}

var leftfrontdoor, rightfrontdoor, leftreardoor, rightreardoor, bootdoor, bootdoormech;
var doorOpen = false;
function toggledoors()
{
    if(ONE3D.variantName == "Premium AT")
    {
        leftfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_FL_DOORS_MESH').rotationQuaternion;
        rightfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_FR_DOORS_MESH').rotationQuaternion;
        leftreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_HIG_RL_DOORS_MESH').rotationQuaternion;
        rightreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_RR_DOORS_MESH').rotationQuaternion;
        bootdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_BOOTDOORS_MESH').rotationQuaternion; 
        bootdoormech = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_BOOTMECH_MESH').rotationQuaternion; 
    }

    if(ONE3D.variantName == "Premium MT")
    {
        leftfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_FL_DOORS_MESH').rotationQuaternion;
        rightfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_FR_DOORS_MESH').rotationQuaternion;
        leftreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_HIG_RL_DOORS_MESH').rotationQuaternion;
        rightreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_RR_DOORS_MESH').rotationQuaternion;
        bootdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_BOOTDOORS_MESH').rotationQuaternion; 
    }
    
    if(ONE3D.variantName == "High AT" || ONE3D.variantName == "High MT")
    {
        leftfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_HIG_EX_FL_DOORS_MESH').rotationQuaternion;
        rightfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_HIG_EX_FR_DOORS_MESH').rotationQuaternion;
        leftreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_HIG_RL_DOORS_MESH').rotationQuaternion;
        rightreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_PRE_EX_RR_DOORS_MESH').rotationQuaternion;
        bootdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_HIG_EX_BOOTDOORS_MESH').rotationQuaternion; 
    }

    if(ONE3D.variantName == "Mid AT" || ONE3D.variantName == "Mid MT")
    {
        leftfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_MID_EX_FL_DOORS_MESH').rotationQuaternion;
        rightfrontdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_MID_EX_FR_DOORS_MESH').rotationQuaternion;
        leftreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_MID_EX_RL_DOORS_MESH').rotationQuaternion;
        rightreardoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_MID_EX_RR_DOORS_MESH').rotationQuaternion;
        bootdoor = one3dref.getMesh('TOYOTA_URBAN_CRUISER_MID_EX_BOOTDOORS_MESH').rotationQuaternion; 
    }

    if (!doorOpen) {
        callGA('toggledoors','Open');
        TweenMax.to(leftfrontdoor,2,{y : -0.54, ease:Power1.easeInOut, onUpdate: jittercam, onComplete:function(){
            doorOpen = true;
         }});
        TweenMax.to(leftreardoor,2,{y : -0.54, ease:Power1.easeInOut});
        TweenMax.to(rightfrontdoor,2,{y : 0.54, ease:Power1.easeInOut});
        TweenMax.to(rightreardoor,2,{y : 0.54, ease:Power1.easeInOut});

        TweenMax.to(bootdoor,2,{x : 0.57, ease:Power1.easeInOut});
        if(bootdoormech)
            TweenMax.to(bootdoormech,2,{x : 0.65, ease:Power1.easeInOut});
    }
    else
    {
        callGA('toggledoors','Close');
        TweenMax.to(leftfrontdoor,2,{y : 0, ease:Power1.easeIn, onUpdate: jittercam, onComplete:function(){
            doorOpen = false;
         }});
        TweenMax.to(leftreardoor,2,{y : 0, ease:Power1.easeIn});
        TweenMax.to(rightfrontdoor,2,{y : 0, ease:Power1.easeIn});
        TweenMax.to(rightreardoor,2,{y : 0, ease:Power1.easeIn});

        TweenMax.to(bootdoor,2,{x : 0, ease:Power1.easeIn});
        if(bootdoormech)
            TweenMax.to(bootdoormech,2,{x : 0, ease:Power1.easeIn});
    }
    if (!doorOpen) doorOpen = true;
            else doorOpen = false;
}

//Alpha rendering 
function checkalphaindex()
{
    if(one3dref.getMesh('TOYOTA_URBAN_CRUISER_IN_DECAL_MESH_primitive1'))
    {
        one3dref.getMesh('TOYOTA_URBAN_CRUISER_IN_DECAL_MESH_primitive1').alphaIndex = 1;
    }

    if(one3dref.getMesh('TOYOTA_URBAN_CRUISER_IN_DECAL_MESH_primitive4'))
    {
        one3dref.getMesh('TOYOTA_URBAN_CRUISER_IN_DECAL_MESH_primitive4').alphaIndex = 1;
    }
    
}

// mainjs to exterional function calling
var CallbackHandler = (function () {
    return {
        _onLoadCarCompleteExterior: function () {

            ONE3D.resizeWindow();

            if (typeof onLoadCarCompleteExterior === 'function')
                window.onLoadCarCompleteExterior();
        },
       
        _onLoadCarCompleteInterior: function () {

            if (window.orientation == 0) {//POTRAIT
                if (window.one3dref)
                    window.one3dref._setToPotrait();
            }
            else {//LANDSCAPE
                if (window.one3dref)
                    window.one3dref._setToLandscape();
            }

            if(untouched == true)
            {
                setTimeout(cameratutorial,2000);
            }

            checkalphaindex();
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
        _onVariantComplete: function (variantName) {
            ONE3D.variantName = variantName;
            ONE3D.resizeWindow();

            if (typeof onVariantComplete === 'function')
                window.onVariantComplete();
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
            if(untouched == true)
            {
                removecameratutorial();
            }

            if(doorOpen == true)
            {
                toggledoors();
            }

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
            {
                if(ONE3D.variantName == 'Premium AT' || ONE3D.variantName == 'Premium MT')
                {
                    window.OnfeatureHpSelect(featureName);
                }
                else
                {
                    window.OnfeatureHpSelect_Low(featureName);
                }
            }
                
        },
        _OnAnimationStart: function (featureName) {
            CurrentFeatName = featureName;console.log(featureName);
            hideflag = true;
            if (typeof OnAnimationStart === 'function')
                window.OnAnimationStart(featureName);
        },
        _OnAnimationComplete: function () {

            if(CurrentFeatName === "Electro chromatic RearView Mirror")
            {
                setTimeout(function()
                { 
                    var mat = one3dref.getMaterial("TOYOTA_URBAN_CRUISER_RLECTRO_REAR_MIRROR_MAT");
                    TweenMax.to(mat,0.5,{metallic:1.0});
                    TweenMax.to(mat.albedoColor,0.5,{r:0.19});
                    TweenMax.to(mat.albedoColor,0.5,{g:0.19});
                    TweenMax.to(mat.albedoColor,0.5,{b:0.19});

                    var mesh = one3dref.getMesh("TOYOTA_URBAN_CRUISER_RLECTRO_REAR_VIEW_OFF_MESH");
                    mesh.setEnabled(false);

                    
            },1000)
                
            }

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

            document.getElementById("loadPerc").textContent = value + '%';

            if(ONE3D.hasOwnProperty("loadedPercent")){
                ONE3D.loadedPercent = value;
            }
                
            if (typeof onLoaderProgress === 'function')
                window.onLoaderProgress();
        }
    }
})(CallbackHandler || {}); 

// function OnAnimationComplete()
// {
//     if(hideflag == true)
//     {
//         hideflag = false;
//         setTimeout(() => {
//             ONE3D.hideFeature();
//         }, 1000);
        
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    loadui();
    UiToggle('hidden')
    //Load Car
    ONE3D.init("one3dcontent",toyotastaticfolder+"/assets/uc-360/one3d/",'Urban Cruiser','Premium AT');
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
    //$(".one3d-toggle-color-selected .one3d-selected-color").css("background", code);
    $(".one3d-toggle-color-selected .one3d-selected-color").css({"background": "url("+toyotastaticfolder+"/assets/uc-360/images/" + code + ".svg) no-repeat 0 0"});
    value = value.replace(/\s+/gi, ' ');
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



function updatecolorfirsttime(code,value,color) {
    //$(".one3d-toggle-color-selected .one3d-selected-color").css("background", code);
    $(".one3d-toggle-color-selected .one3d-selected-color").css({"background": "url("+toyotastaticfolder+"/assets/uc-360/images/" + code + ".svg) no-repeat 0 0"});
    value = value.replace(/\s+/gi, ' ');
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
   //  callGA('Color',color);
     //End of GA
}

function getArlink(color) {
    //https://testbucketforwebsiteeec.s3.ap-south-1.amazonaws.com/stagefiles/UrbanCruiserAR
    var ARurl = toyotastaticfolder+'/assets/uc-360/one3d/assets/AR/';
    var arlink;
    arlink ={
        "ios": { 
            "spunkyblue_blackroof": ARurl + "spunkyblue_blackroof.usdz",
            "rusticbrown_blackroof": ARurl + "rusticbrown_blackroof.usdz",
            "groovyorange_whiteroof": ARurl + "groovyorange_whiteroof.usdz",
            "suavesilver": ARurl + "suavesilver.usdz",
            "groovyorange": ARurl + "groovyorange.usdz",
            "iconicgrey": ARurl + "iconicgrey.usdz",
            "spunkyblue": ARurl + "spunkyblue.usdz",
            "sunnywhite": ARurl + "sunnywhite.usdz",
            "rusticbrown": ARurl + "rusticbrown.usdz"
        },
        "Android": { 
            "spunkyblue_blackroof": ARurl + "spunkyblue_blackroof.glb",
            "rusticbrown_blackroof": ARurl + "rusticbrown_blackroof.glb",
            "groovyorange_whiteroof": ARurl + "groovyorange_whiteroof.glb",
            "suavesilver": ARurl + "suavesilver.glb",
            "groovyorange": ARurl + "groovyorange.glb",
            "iconicgrey": ARurl + "iconicgrey.glb",
            "spunkyblue": ARurl + "spunkyblue.glb",
            "sunnywhite": ARurl + "sunnywhite.glb",
            "rusticbrown": ARurl + "rusticbrown.glb"
        }
        
    }
    //call GA For AR
    callGA('Arlink',color);
    //find device - ios, android , desktop or other 
    if( isMobile.iOS() ) {
        url=arlink["ios"][color]+'#callToAction=Test%20Drive&checkoutTitle=The%20all%20new%20Toyota%20Urban%20Cruiser&checkoutSubtitle=The%20New%20Face%20Of%20Respect';
       //url=arlink["ios"][color]+'#callToAction=Click%20to%20visit&checkoutTitle=The%20all%20new%20Scross&checkoutSubtitle=Get%20Ready%20For%20The%20Scross%20Petrol';
        
        const linkElement = document.getElementById("logourl");
        linkElement.addEventListener("message", function (event) {   
            if (event.data == "_apple_ar_quicklook_button_tapped") {
                // handle the user tap.   
                window.location.assign("https://www.toyotabharat.com/showroom/urbancruiser/#testDriveBlock");
            }
        }, false);
    } else if( isMobile.Android() ) {
        url='intent://arvr.google.com/scene-viewer/1.0?file='+arlink["Android"][color]+'&mode=ar_only&title=The%20all%20new%20Toyota%20Urban%20Cruiser&link=https://www.toyotabharat.com/showroom/urbancruiser/#testDriveBlock#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url='+toyotastaticfolder+'/assets/uc-360/ar-not-supported.html;end;';
        const linkElement = document.getElementById("logourl");
        linkElement.addEventListener("message", function (event) {   
            if (event.data == "_apple_ar_quicklook_button_tapped") {
                // handle the user tap.   
                window.location.assign("https://www.toyotabharat.com/showroom/urbancruiser/#testDriveBlock");
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
     <div class="one3d-variants-wrapper" >
        <div class="one3d-popup-variants-wrapper">
            <div class="one3d-popup-variants">
                <p class="one3d-heading">Choose a Variant <span>*Ex Showroom Price Delhi</span></p>
                
                <div class="one3d-variants-listing-wrapper">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </div>
        <a href="javascript:;" class="icon-variant"><span>Variant -&nbsp;</span><span class="one3d-variant-name"></span></a>
     </div>
     <div class="one3d-toggle-view">
        <div class="one3d-row-block">
            <div class="one3d-toggle-view-box">
                <div class="one3d-row">
                    <input type="radio" name="toggle-view" id="one3d-exterior" value="exterior" checked>
                    <label for="one3d-exterior" >Exterior</label>
                </div>
                <div class="one3d-row">
                    <input type="radio" name="toggle-view" id="one3d-interior" value="interior">
                    <label for="one3d-interior" >Interior</label>
                </div>
            </div>
            <div class="icon-close"><a href="https://www.toyotabharat.com/showroom/urbancruiser/"  onClick="callGA('PageClose','PageClose');"></a></div>
        </div>
        <div class="one3d-row-block">
            <div class="icon-door" onClick="toggledoors();" style="background: url('`+toyotastaticfolder+`/assets/uc-360/images/one3d-door.svg') no-repeat center center #fff;">
            <a href="javascript:;" ></a>
            </div>
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
         <a rel="ar" href="#" id="logourl" onClick="callGA('loadAR','AR');"><img src="`+toyotastaticfolder+`/assets/uc-360/images/ar-logo.png" style="height:42px;" alt="img"> </a>
     </div> 
     
     
     <div class="one3d-temp-cta-wrapper">
         <a href="javascript:;" class="one3d-view-image">View Image</a>
         <a href="javascript:;" class="one3d-view-animation">View Animation</a>
     </div>
 </div>
 <div class="one3d-popup-wrapper">
     <div class="one3d-popup-information">
         <div class="one3d-product-image">
             <img src="" alt="Cruise Control">
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
 <span class="rotateDiviceicon"><img src='`+toyotastaticfolder+`/assets/uc-360/one3d/caution-icon.svg' alt="img"></span>
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
    document.querySelector(".one3d-variants-wrapper").style.visibility = mode;
    

    // document.getElementById("arlogo").style.display="none";
    
}

function onLoadCarCompleteInterior() {
    //Need to call ui function here after 3d load
    // GA
    callGA('Loader','End');
    // get AR link and mount
    UiToggle('visible');
    getArlink('spunkyblue_blackroof');
   updatecolorfirsttime('Spunky-Blue-With-Sizzling-Black-Roof','Spunky Blue With Sizzling Black Roof','spunkyblue_blackroof');
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
        $("body").addClass("one3d-popupOpen");
    }
    else { //For animation
        animation=true;
        $(".one3d-popup-information .one3d-product-info .heading").text(hotsptData[name]['title']);
        $(".one3d-popup-information .one3d-product-info .description").text(hotsptData[name]['details']);
        
        $(".one3d-main-section").addClass("one3d-popup one3d-no-overlay");
        $(".one3d-popup-information").addClass("one3d-video-info");
        $(".one3d-popup-information.one3d-video-info").css("padding-bottom", $(".one-3d-cta-section").outerHeight(true) + "px");
        $(".one3d-popup-information.one3d-video-info .bg-gradient").css("bottom", $(".one-3d-cta-section").outerHeight(true) + "px");
        ONE3D.showFeature(name);
       // console.log(name);
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
    'Split LED Rear Combination Lamps':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/rear_led_lamps.jpg','title':'Split LED Rear Combination Lamps','details':"Take the spotlight on your arrival with the new Toyota Urban Cruiser's Split LED Rear Combination Lamps that adds to the SUV’s edgy look."},
    'Dual Chamber LED Projector Headlamps':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/led_projector.jpg','title':'Dual Chamber LED Projector Headlamps','details':'Nothing shines brighter than respect. The new Toyota Urban Cruiser comes equipped with unique Dual Chamber LED Projector Headlamps with stunning Chrome Accents, assisted by Dual function LED DRL and Turn Indicator.'},
    'Two Slat Wedge Cut Front Grille':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/grille.jpg','title':'Two Slat Wedge Cut Front Grille','details':"The new Toyota Urban Cruiser's eye-catching Two Slat Wedge Cut Front Grille with Chrome & Granite Grey is bound to make heads turn in awe, wherever you go."},
    '16-inch Diamond Cut Alloy Wheels':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/alloy_wheels.jpg','title':'16-inch Diamond Cut Alloy Wheels','details':"The sporty 16-inch Diamond Cut Alloy Wheels perfectly complement the new Toyota Urban Cruiser's desire to perform."},
    'Front LED Foglamps':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/Foglamps.jpg','title':'Front LED Foglamps','details':"Brighten any drive no matter the weather with the new Toyota Urban Cruiser's Front LED Foglamps with Chrome Accents."},
    'Dual Front Airbags':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/Airbags.jpg','title':'Dual Front Airbags','details':"The new Urban Cruiser features advanced dual SRS airbags along with a package of active and passive safety features for uncompromised safety."},
    'Electro chromatic RearView Mirror':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/RearViewMirror.jpg','title':'Electro chromatic Rear-View Mirror','details':"No more glaring harsh lights. Only respect will follow with the all-new Urban Cruiser. Toyota’s Youngest SUV comes equipped with an electrochromic rear-view mirror to ensure visibility on the road."},
    'Dual Tone Premium Interiors':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/DualToneInterior.jpg','title':'Dual Tone Premium Interiors','details':"Sit back and enjoy every drive in the alluring Dual Tone Dark Brown Premium Interiors, ergonomically laid out for a wide, spacious cabin and added comfort."},
    'Premium Dark Brown Fabric Seats':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/PremiumSeats.jpg','title':'Premium Dark Brown Fabric Seats','details':"Add style and harmony to every drive with the new Toyota Urban Cruiser's Premium Dark Brown Fabric Seats."},
    'Steering Mounted Control':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/SteeringControls.jpg','title':'Steering Mounted Control for Bluetooth & Cruise Control','details':"Experience smart tech for a smarter drive with the new Toyota's Steering Mounted Control for Bluetooth and cruise control."},
    'Auto AC':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/AutoAC.jpg','title':'Auto AC','details':"Stay cool and connected with the new Toyota Urban Cruiser's Automatic Climate Control that controls the cabin temperature and humidity levels regardless of the weather conditions outside."},
    'Auto Rain Sensing Wipers':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/RainSensingWipers.jpg','title':'Auto Rain Sensing Wipers','details':"Equipped with rain-sensing wipers, experience uninterrupted driving with the Urban Cruiser, Toyota’s youngest SUV. The wipers are automatically adjusted, activated and deactivated, leaving you to focus on the drive instead."},
    '6040 Split Rear Seats':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/split_rear_seats.jpg','title':'60:40 Split Rear Seat with Flip & Fold','details':"The 60/40 split fold-down rear seats of the new Toyota Urban Cruiser open up to reveal a large cargo space for you to carry your favourite things. Now, that's respect for space."},
    'Smart Entry':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/StartStopbutton.jpg','title':'Smart Entry with Engine Push Start/Stop button','details':"Take on the road at the push of a button. Respect comes effortlessly when you are driving the new Toyota Urban Cruiser featuring Smart Entry with Engine Push Start/Stop Button."},
    'NewKseries':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/Engine.jpg','title':'New K-series 1.5L, 4-Cylinder Gasoline Engine','details':"Experience the perfect blend of efficiency and power with the new Toyota Urban Cruiser's powerful K-series 1.5L 4-Cylinder Gasoline Engine in MT/AT variants."},
    'Infotainment':{'img':toyotastaticfolder+'/assets/uc-360/one3d/features/Infotainment.jpg','title':'Smart Playcast Touchscreen Audio','details':"Never miss a beat with the Urban Cruiser’s new 17.78cm Smart Playcast that comes loaded with Touchscreen Audio with Android Auto and Apple Car Play Smart Phone-based Navigation."}
    
};

function OnfeatureHpSelect(hpName)
{
   // alert(hpName.hotspot);
   if(hpName.hotspot === "Split LED Rear Combination Lamps")
   {
       showHotspot("Split LED Rear Combination Lamps");
   }
   if(hpName.hotspot === "Two Slat Wedge Cut Front Grille")
   {
       showHotspot("Two Slat Wedge Cut Front Grille");
   }
   if(hpName.hotspot === "Dual Chamber LED Projector Headlamps")
   {
       showHotspot("Dual Chamber LED Projector Headlamps");
   }
   if(hpName.hotspot === "16-inch Diamond Cut Alloy Wheels")
   {
       showHotspot("16-inch Diamond Cut Alloy Wheels");
   }
   if(hpName.hotspot === "Front LED Foglamps")
   {
       showHotspot("Front LED Foglamps");
   }
   if(hpName.hotspot === "Dual Front Airbags")
   {
       showHotspot("Dual Front Airbags");
   }
   if(hpName.hotspot === "Electro chromatic RearView Mirror")
   {
       showHotspot("Electro chromatic RearView Mirror");
   }
   if(hpName.hotspot === "Dual Tone Premium Interiors")
   {
       showHotspot("Dual Tone Premium Interiors", "2d");
   }
   if(hpName.hotspot === "Premium Dark Brown Fabric Seats")
   {
       showHotspot("Premium Dark Brown Fabric Seats", "2d");
   }
   if(hpName.hotspot === "Steering Mounted Control")
   {
       showHotspot("Steering Mounted Control");
   }
   if(hpName.hotspot === "Auto AC")
   {
       showHotspot("Auto AC", "2d");
   }
   if(hpName.hotspot === "Auto Rain Sensing Wipers")
   {
       showHotspot("Auto Rain Sensing Wipers", "2d");
   }
   if(hpName.hotspot === "6040 Split Rear Seats")
   {
       showHotspot("6040 Split Rear Seats", "2d");
   }
   if(hpName.hotspot === "Smart Entry")
   {
       showHotspot("Smart Entry", "2d");
   }
   if(hpName.hotspot === "NewKseries")
   {
       showHotspot("NewKseries", "2d");
   }
   if(hpName.hotspot === "Infotainment")
   {
       showHotspot("Infotainment");
   }
   
}

function OnfeatureHpSelect_Low(hpName)
{
    if(hpName.hotspot === "Split LED Rear Combination Lamps")
   {
       showHotspot("Split LED Rear Combination Lamps", "2d");
   }
   if(hpName.hotspot === "Two Slat Wedge Cut Front Grille")
   {
       showHotspot("Two Slat Wedge Cut Front Grille", "2d");
   }
   if(hpName.hotspot === "Dual Chamber LED Projector Headlamps")
   {
       showHotspot("Dual Chamber LED Projector Headlamps", "2d");
   }
   if(hpName.hotspot === "16-inch Diamond Cut Alloy Wheels")
   {
       showHotspot("16-inch Diamond Cut Alloy Wheels", "2d");
   }
   if(hpName.hotspot === "Front LED Foglamps")
   {
       showHotspot("Front LED Foglamps", "2d");
   }
   if(hpName.hotspot === "Dual Front Airbags")
   {
       showHotspot("Dual Front Airbags", "2d");
   }
   if(hpName.hotspot === "Electro chromatic RearView Mirror")
   {
       showHotspot("Electro chromatic RearView Mirror", "2d");
   }
   if(hpName.hotspot === "Dual Tone Premium Interiors")
   {
       showHotspot("Dual Tone Premium Interiors", "2d");
   }
   if(hpName.hotspot === "Premium Dark Brown Fabric Seats")
   {
       showHotspot("Premium Dark Brown Fabric Seats", "2d");
   }
   if(hpName.hotspot === "Steering Mounted Control")
   {
       showHotspot("Steering Mounted Control", "2d");
   }
   if(hpName.hotspot === "Auto AC")
   {
       showHotspot("Auto AC", "2d");
   }
   if(hpName.hotspot === "Auto Rain Sensing Wipers")
   {
       showHotspot("Auto Rain Sensing Wipers", "2d");
   }
   if(hpName.hotspot === "6040 Split Rear Seats")
   {
       showHotspot("6040 Split Rear Seats", "2d");
   }
   if(hpName.hotspot === "Smart Entry")
   {
       showHotspot("Smart Entry", "2d");
   }
   if(hpName.hotspot === "NewKseries")
   {
       showHotspot("NewKseries", "2d");
   }
   if(hpName.hotspot === "Infotainment")
   {
       showHotspot("Infotainment", "2d");
   }
}

// GA
var _gaq = _gaq || [];

//production code UA-178252400-2
_gaq.push(['_setAccount', 'UA-178252400-1']);
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

one3dFunctions.prototype.ChangeColor = function (hexcode,roofHexcode = null, customproperties = null) {
    
    if (hexcode == "spunkyblue_blackroof") {
        hexcode = "#001736,#001F54";
        roofHexcode = "#080808,#383838";
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "rusticbrown_blackroof") {
        hexcode = "#21100B,#301C11";
        roofHexcode = "#080808,#383838";
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "groovyorange_whiteroof") {
        hexcode = "#692B0F,#692B0F";
        roofHexcode = "#707070,#FFFFFF";
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "suavesilver") {
        hexcode = '#292929,#545454';
        roofHexcode = '#292929,#545454';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "groovyorange") {
        hexcode = '#692B0F,#692B0F';
        roofHexcode = '#692B0F,#692B0F';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "iconicgrey") {
        hexcode = '#191919,#0F0F0F';
        roofHexcode = '#191919,#0F0F0F';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "spunkyblue") {
        hexcode = '#001736,#001F54';
        roofHexcode = '#001736,#001F54';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }else if (hexcode == "sunnywhite") {
        hexcode = '#4A4A4A,#E0E0E0';
        roofHexcode = '#4A4A4A,#E0E0E0';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.35 } };
    }else if (hexcode == "rusticbrown") {
        hexcode = '#21100B,#301C11';
        roofHexcode = '#21100B,#301C11';
        customproperties = { URBAN_CRUISER_PM_EX_CARBODY_CARPAINT_TILE_MAT: { metallic : 0.95 } };
    }
    else 
    {
        return 0;
    }
    
    window.one3dref._changeColor(hexcode,roofHexcode,customproperties);
}

//Interior view
// In Interior 
function onInteriorViewComplete()
{
    $("#one3d-interior").prop("checked", true).change();
    $("#one3d-exterior").prop("checked", false).change();
    callGA('Interiorview','3dIcon');
}

// In Exterior 
function onExteriorViewComplete()
{
    $("#one3d-exterior").prop("checked", true).change();
    $("#one3d-interior").prop("checked", false).change();
    callGA('ExteriorView','3dIcon');
   
}


//function by Prop

function changecolorbox(variant)
{
     //    var one3d_variant_name = ["Premium AT", "Premium MT", "High AT", "High MT", "Mid AT", "Mid MT"];


     /** Color Swatches **/

     if(variant=="Premium AT" || variant=="Premium MT")
     {
        //var one3d_toggle_color = ["#001E45", "#21100B", "#692B0F", "#292929", "#692B0F","#0F0E0D", "#001E45", "#636363", "#21100B"];
        var one3d_toggle_color = ["Spunky-Blue-With-Sizzling-Black-Roof", "Rustic-Brown-With-Sizzling-Black-Roof", "Groovy-Orange-With-Sunny-White-Roof", "Suave-Silver", "Iconic-Grey",  "Sunny-White"];
        //var one3d_toggle_color_name = ["SPUNKY BLUE WITH SIZZLING BLACK ROOF", "RUSTIC BROWN WITH SIZZLING BLACK ROOF", "GROOVY ORANGE WITH SUNNY WHITE ROOF", "SUAVE SILVER", "GROOVY ORANGE","ICONIC GREY","SPUNKY BLUE","SUNNY WHITE","RUSTIC BROWN"];
        var one3d_toggle_color_name = ["Spunky Blue With Sizzling Black Roof", "Rustic Brown With Sizzling Black Roof", "Groovy Orange With Sunny White Roof", "Suave Silver","Iconic Grey","Sunny White"];
        var one3d_toggle_color_shade = ["spunkyblue_blackroof", "rusticbrown_blackroof", "groovyorange_whiteroof", "suavesilver","iconicgrey","sunnywhite"];
        updatecolorfirsttime('Spunky-Blue-With-Sizzling-Black-Roof','Spunky Blue With Sizzling Black Roof','spunkyblue_blackroof');
    }else
        {
         //var one3d_toggle_color = ["#001E45", "#21100B", "#692B0F", "#292929", "#692B0F","#0F0E0D", "#001E45", "#636363", "#21100B"];
         var one3d_toggle_color = ["Suave-Silver", "Groovy-Orange","Iconic-Grey", "Spunky-Blue", "Sunny-White", "Rustic-Brown"];
         //var one3d_toggle_color_name = ["SPUNKY BLUE WITH SIZZLING BLACK ROOF", "RUSTIC BROWN WITH SIZZLING BLACK ROOF", "GROOVY ORANGE WITH SUNNY WHITE ROOF", "SUAVE SILVER", "GROOVY ORANGE","ICONIC GREY","SPUNKY BLUE","SUNNY WHITE","RUSTIC BROWN"];
         var one3d_toggle_color_name = [ "Suave Silver", "Groovy Orange","Iconic Grey","Spunky Blue","Sunny White","Rustic Brown"];
         var one3d_toggle_color_shade = [ "suavesilver", "groovyorange","iconicgrey","spunkyblue","sunnywhite","rusticbrown"];
         updatecolor('Suave-Silver','Suave Silver','spunkyblue_blackroof');
         updatecolorfirsttime('Spunky-Blue','Spunky Blue','spunkyblue');
    }

    
    //clear the code
    $(".one3d-toggle-color .one3d-toggle-color-options ul").empty()

    if($(".one3d-toggle-color-selected").length) {
        for(var i=0; i<one3d_toggle_color.length; i++) {
            $(".one3d-toggle-color .one3d-toggle-color-options ul").append("<li style='background: url("+toyotastaticfolder+"/assets/uc-360/images/" + one3d_toggle_color[i] + ".svg) no-repeat 0 0' title='" + one3d_toggle_color_name[i] + "' data-color-shade='" + one3d_toggle_color_shade[i] + "' data-swatch-image-name='" + one3d_toggle_color[i] + "'></li>");
        }

        $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).css("background-color"));
        $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).attr("title"));
        callGA('ColorBoxOpen','ColorBoxOpen');
      

        $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").on("click", function() {
        updatecolor($(this).attr("data-swatch-image-name"), $(this).attr("title"), $(this).attr("data-color-shade"));
            
        });
    }
    /** Color Swatches ends **/
}

$(function() {
    /* detecting iPhone starts */
    if(navigator.userAgent.indexOf('iPhone') != -1) {
        $(".one3d-main-section").addClass("iPhone");
    }
    /* detecting iPhone ends */

    /* For full height Canvas on Desktop starts */
    if($(window).width() > 1200) {
        $("body").addClass("one3d-dekstop-view");
        //console.log($(".one-3d-cta-section").length);
        $(".one3d-object-wrapper").append($(".one-3d-cta-section"));
    }
    /* For full height Canvas on Desktop ends */


    /** Color Swatches **/
    //var one3d_toggle_color = ["#001E45", "#21100B", "#692B0F", "#292929", "#692B0F","#0F0E0D", "#001E45", "#636363", "#21100B"];
    var one3d_toggle_color = ["Spunky-Blue-With-Sizzling-Black-Roof", "Rustic-Brown-With-Sizzling-Black-Roof", "Groovy-Orange-With-Sunny-White-Roof", "Suave-Silver", "Groovy-Orange","Iconic-Grey", "Spunky-Blue", "Sunny-White", "Rustic-Brown"];
    //var one3d_toggle_color_name = ["SPUNKY BLUE WITH SIZZLING BLACK ROOF", "RUSTIC BROWN WITH SIZZLING BLACK ROOF", "GROOVY ORANGE WITH SUNNY WHITE ROOF", "SUAVE SILVER", "GROOVY ORANGE","ICONIC GREY","SPUNKY BLUE","SUNNY WHITE","RUSTIC BROWN"];
    var one3d_toggle_color_name = ["Spunky Blue With Sizzling Black Roof", "Rustic Brown With Sizzling Black Roof", "Groovy Orange With Sunny White Roof", "Suave Silver", "Groovy Orange","Iconic Grey","Spunky Blue","Sunny White","Rustic Brown"];
    var one3d_toggle_color_shade = ["spunkyblue_blackroof", "rusticbrown_blackroof", "groovyorange_whiteroof", "suavesilver", "groovyorange","iconicgrey","spunkyblue","sunnywhite","rusticbrown"];

    if($(".one3d-toggle-color-selected").length) {
        for(var i=0; i<one3d_toggle_color.length; i++) {
            $(".one3d-toggle-color .one3d-toggle-color-options ul").append("<li style='background: url("+toyotastaticfolder+"/assets/uc-360/images/" + one3d_toggle_color[i] + ".svg) no-repeat 0 0' title='" + one3d_toggle_color_name[i] + "' data-color-shade='" + one3d_toggle_color_shade[i] + "' data-swatch-image-name='" + one3d_toggle_color[i] + "'></li>");
        }

        $(".one3d-toggle-color-selected .one3d-selected-color").css("background-color", $(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).css("background-color"));
        $(".one3d-toggle-color-selected .one3d-selected-color-name").text($(".one3d-toggle-color .one3d-toggle-color-options ul").find("li").eq(0).attr("title"));
        callGA('ColorBoxOpen','ColorBoxOpen');
        $(".one3d-toggle-color-selected").on("click", function() {
            // $(this).toggleClass("one3d-select-color");
            if($(".one3d-popup-variants-wrapper").is(":visible")) {
                $(".icon-variant").click();
            }

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
            
            updatecolor($(this).attr("data-swatch-image-name"), $(this).attr("title"), $(this).attr("data-color-shade"));
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
            $("body").removeClass("one3d-popupOpen");

              //only run when 3d feature is called
              if(animation){
                  ONE3D.hideFeature();animation=false
                }

            $(".one3d-popup-information").removeClass("one3d-video-info").removeAttr("style");
        });
    }
    /** Popup close ends **/

    /** Book a test drive CTA **/
    if($(".one3d-book-test-drive").length) {
        $(".one3d-book-test-drive").on("click", function() {
            callGA('CTA','test drive');
            window.location.href = "https://www.toyotabharat.com/showroom/urbancruiser/#testDriveBlock";
        });
    }
    /** Book a test drive CTA ends **/

      /** Book a online **/
      if($(".one3d-book-online").length) {
        $(".one3d-book-online").on("click", function() {
            callGA('CTA','BookOnline');
            window.location.href = "https://www.toyotabharat.com/online-booking/?model-id=15";
        });
    }
    /** Book a online  ends **/



    /** Switch views interior/exterior **/
    if($(".one3d-toggle-view").length) {
        $(".one3d-toggle-view label").on("click", function() {
            if($(this).attr("for") == "one3d-exterior") {
               // function for exterior view goes here
                  //GA For interior
                  callGA('ViewClick',"ExteriorView");
                  ONE3D.ExteriorView();
            }
            else {
               // function for interior view goes here
                  //GA For interior
                  callGA('ViewClick',"InteriorView");
                  ONE3D.InteriorView();
                if(untouched == true)
                {
                    removecameratutorial();
                }
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

    function one3d_ShowHideToogleViewBox(param) {
        if(param == 'hide') {
            $(".one3d-toggle-view").hide();
        }
        else {
            $(".one3d-toggle-view").show();
        }
    }

    /** Variants Details starts **/
    var one3d_variant_name = ["Premium AT", "Premium MT", "High AT", "High MT", "Mid AT", "Mid MT"];
    var one3d_variant_price = ["11.30 Lakhs*", "9.80 Lakhs*", "10.65 Lakhs*", "9.80 Lakhs*", "9.80 Lakhs*", "9.80 Lakhs*"];
    
    $(".one3d-popup-variants-wrapper").css({"display":"block", "visibility":"hidden"});

    $(one3d_variant_name).each(function(i) {
        
        var id_value_for = one3d_variant_name[i].replace(/ /gi, "_");
        $(".one3d-variants-listing-wrapper > ul").append("<li><input type='radio' id='" + id_value_for + "' name='variants' value='" + one3d_variant_name[i] + "'><label for='" + id_value_for + "'>" + one3d_variant_name[i] + " <span>₹ " + one3d_variant_price[i] + "</span></label></li>");

        //$(".one3d-variants-listing-wrapper > ul").append("<li><label for='" + id_value_for + "'>" + one3d_variant_name[i] + " <span>₹ " + one3d_variant_price[i] + "</span></label></li>");

    }).promise().done(function() {
        
        //alert($(".one3d-popup-variants .one3d-heading").outerHeight(true));
        $(".one3d-variants-wrapper .one3d-variants-listing-wrapper").css({"height":"calc(100% - " + $(".one3d-popup-variants .one3d-heading").outerHeight(true) + "px)"});
        $(".one3d-popup-variants-wrapper").removeAttr("style");
    });

    $(".one3d-variants-listing-wrapper > ul > li > input").on("click", function() {
        //console.dir('clicked1');
        $(".one3d-variant-name").text($(this).val());
        $(this).prop("checked", true);

        if(!$(".one3d-popup-variants-wrapper").is(":visible")) {
            return false;
        }
//console.dir(123);
        //$(".one3d-popup-variants-wrapper").slideToggle();
        if(!$(".one3d-popup-variants-wrapper").is(":visible")) {
            $(".one3d-popup-variants-wrapper").slideDown();
        }
        else {
            callGA('VariantBoxOpen','open');
            $(".one3d-popup-variants-wrapper").slideUp();
        }

        $(this).parents(".one3d-variants-wrapper").find(".icon-variant").removeClass("one3d-variant-selector-open");
        
        if(selectedvariable != $(this).val())
        {
            selectedvariable = $(this).val();
            changevar=true;
        }
        else
        { 
            changevar=false;
        }

         ONE3D.changeVariant(selectedvariable);
         setTimeout(function(){
          //alert(selectedvariable);
          }, 2000);
        changecolorbox(selectedvariable);
        callGA('VariantChange',selectedvariable);
        //console.dir('clicked:' + selectedvariable);



    });

    $(".one3d-variants-listing-wrapper > ul > li").eq(0).find("input").click();

    $(".icon-variant").on("click", function() {
        if($(".one3d-toggle-color-options").is(":visible")) {
            $(".one3d-toggle-color-selected").click();
        }

        $(".one3d-popup-variants-wrapper").slideToggle();
        $(this).toggleClass("one3d-variant-selector-open");
    });
    /** Variants Details ends **/

    /** Variants show/hide pop-up starts **/
    // if($(".one3d-variants-wrapper").length) {
        
    //     $(".one3d-variants-wrapper").on("click", function() {
    //         $("body").addClass("one3d-display-variants");
    //     });

    //     $(".one3d-close-variant-popup").on("click", function() {
    //         if(true){
    //         ONE3D.changeVariant(selectedvariable);
    //         changevar=false;

    //     }

    //         $("body").removeClass("one3d-display-variants");
    //     })
    // }
    /** Variants show/hide pop-up ends **/



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

