var secOnePlaneInit,
    winWidth = $(window).width(),
    fold2IllustrationInit,
    secThreeDotMeshInit,
    scrollDownAnim,
    circleMeshAnim,
    circleMoveAnim,
    circleMeshAnimData,
    urlReferrer = document.referrer,
    hostname = window.location.hostname,
    fold2Illustration,
    secThreeDotMesh,
    secOnePlane,
    circleMoveAnimData,
    scrollDownAnimData,
    secFourWHyJoinInit,
    secFourElementAnimInit,
    secFiveGetStartedInit,
    secFiveElementAnimInit,
    md = new MobileDetect(window.navigator.userAgent),
    introInit,
    vid = document.getElementById("teaserD"),
    repeat = 0,
    string,
    array = [],
    loopTimer,
    hmletteranimF, hmletteranimB, hmletteranimI, hmletteranimJ, hmletteranimS,
    mobile = winWidth <= 1024 ? 1 : 0,
    tablet = (md.phone() == null && md.tablet() != '') ? '1' : '0',
    isInnerpage = $('body').hasClass('innerPage'),
    docScrollTop,
    docScrollTopMem,
    docServicesBtmSecScrollTop,
    navIconHolder = $('.navIconHolder'),
    CGlogo = $('.logo'),
    siteSubnavLi = $('.siteSubnav').find('li'),
    owlinitiatives = $('.initiatives-owl'),
    sectionTitle = $('#sectionTitle'),
    hmvideoholder = $('.videoScreenHolder'),
    hmvideoholderWid = hmvideoholder.outerWidth(),
    hmvideo = $('.video'),
    cylinderHolder = $('#cyclinderHolder'),
    cyclinderCircle = $('.cyclinderCircle'),
    squareMove = $('#squareMove'),
    dragSliderHolder = $('.dragSliderHolder'),
    logo = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 183.3 68" style="enable-background:new 0 0 183.3 68;" xml:space="preserve"><g><g><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M30.6,54.5c0-6.5,5.1-11.3,11.4-11.3c4.1,0,7,1.6,8.9,4.4l-2.6,1.9c-1.4-2-3.2-3.2-6.4-3.2c-4.5,0-7.7,3.5-7.7,8.1c0,4.7,3.2,8.2,7.8,8.2c3.8,0,5.8-1.8,6.6-3.9h-6.2v-3.1h10.2C52.4,62,48.4,65.7,42,65.7C35.7,65.7,30.6,61,30.6,54.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M56.3,43.5h3.5v18.9h9.7v3.1H56.3V43.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M70.7,54.5c0-6.5,5-11.3,11.3-11.3S93.4,48,93.4,54.5s-5,11.3-11.3,11.3S70.7,61,70.7,54.5z M89.8,54.5c0-4.7-3.2-8.1-7.8-8.1c-4.6,0-7.8,3.5-7.8,8.1c0,4.7,3.2,8.1,7.8,8.1C86.6,62.6,89.8,59.1,89.8,54.5z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M97.1,43.5h7.8c4.4,0,6.4,2.5,6.4,5.6c0,1.9-1,3.4-2.6,4.2c2.6,0.7,4.2,2.7,4.2,5.6c0,3.7-2.4,6.6-7.4,6.6h-8.4V43.5z M104.7,52.1c2.4,0,3.2-1.1,3.2-2.9c0-1.7-0.8-2.7-3.2-2.7h-4.2v5.7H104.7z M105.3,62.5c3,0,4.1-1.5,4.1-3.8c0-2.3-1.2-3.8-4.2-3.8h-4.6v7.6H105.3z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M117.6,65.5h-3.5l9.6-22.4h0.2l9.7,22.4h-3.6l-1.3-3.1c0,0-9.8,0-9.8,0L117.6,65.5z M123.8,50.6l-3.6,8.7h7.2C127.4,59.3,123.8,50.6,123.8,50.6z" /><path class="st0" fill="#CA6B86" data-fill="#CA6B86" d="M136.6,43.5h3.5v18.9h9.7v3.1h-13.1V43.5z" /></g><g><polygon class="st1" fill="#572459" data-fill="#572459" points="87.9,15.9 92.2,15.9 92.2,9.3 100.4,9.3 100.4,5.5 79.7,5.5 79.7,9.3 87.9,9.3         " /><rect x="71.7" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4" height="10.4" /><polygon class="st1" fill="#572459" data-fill="#572459" points="54.1,5.1 53.8,5.1 53.8,15.9 65.1,15.9       " /><rect x="104.2" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#572459" data-fill="#572459" d="M135.3,9.3h2.5c5.2,0,7.4,2.5,7.4,6.6h4.5c-0.1-6.3-4.2-10.4-11.7-10.4h-7v10.4h4.3V9.3z" /><polygon class="st1" fill="#572459" data-fill="#572459" points="34.9,9.3 48.1,9.3 48.1,5.5 30.6,5.5 30.6,15.9 34.9,15.9         " /><rect x="120.9" y="5.5" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#572459" data-fill="#572459" d="M167.5,4.9c-6.7,0-12.3,4.7-13.8,11h4.6c1.3-3.8,4.9-6.5,9.2-6.5c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7c-4.2,0-7.8-2.7-9.2-6.5h-4.6c1.5,6.3,7.1,11,13.8,11c7.8,0,14.2-6.4,14.2-14.2C181.7,11.3,175.3,4.9,167.5,4.9z" /><rect x="87.9" y="22.3" class="st1" fill="#572459" data-fill="#572459" width="4.3" height="10.7" /><path class="st1" fill="#572459" data-fill="#572459" d="M120.9,23c0,4.4-2.2,6.4-6.2,6.4c-4,0-6.2-2-6.2-6.4v-0.7h-4.3v0.9c0,6.7,4.5,10.1,10.5,10.1c5.9,0,10.5-3.4,10.5-10.1v-0.9h-4.3V23z" /><path class="st1" fill="#572459" data-fill="#572459" d="M147.8,22.3H131V33h4.3v-6.6h2.7c0.7,0,1.4,0,2-0.1l4.7,6.7h5.1l-5.6-7.8C145.8,24.5,147,23.5,147.8,22.3z" /><rect x="53.8" y="22.3" class="st1" fill="#572459" data-fill="#572459" width="4" height="10.7" /><polygon class="st1" fill="#572459" data-fill="#572459" points="34.9,24.5 34.9,22.3 30.6,22.3 30.6,33 48.7,33 48.7,29.2 34.9,29.2       " /><polygon class="st1" fill="#572459" data-fill="#572459" points="71.7,22.4 71.7,22.3 64.2,22.3 75.5,33.4 75.8,33.4 75.8,22.3 71.7,22.3       " /><path class="st1" fill="#572459" data-fill="#572459" d="M15.9,28.8c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c2.8,0,5.4,1.2,7.2,3.2c0.5-1.5,1.2-2.9,2.1-4.2c-2.5-2.1-5.7-3.4-9.2-3.4C8,4.9,1.7,11.3,1.7,19.1C1.7,27,8,33.3,15.9,33.3c3.5,0,6.8-1.3,9.2-3.4c-0.9-1.3-1.6-2.7-2.1-4.2C21.2,27.6,18.7,28.8,15.9,28.8z" /></g><g><polygon class="st0" fill="#CA6B86" data-fill="#CA6B86" points="85.5,20 15.9,20 15.9,18.2 85.5,18.2 94.6,18.2 167.5,18.2 167.5,20 94.6,20       " /></g><circle class="st0" fill="#CA6B86" data-fill="#CA6B86" cx="15.9" cy="19.1" r="4.5" /><circle class="st0" fill="#CA6B86" data-fill="#CA6B86" cx="167.5" cy="19.1" r="4.5" /></g></svg>',
    whiteLogo = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 183.3 68" style="enable-background:new 0 0 183.3 68;" xml:space="preserve"><g><g><path class="st0" fill="#fff" data-fill="#CA6B86" d="M30.6,54.5c0-6.5,5.1-11.3,11.4-11.3c4.1,0,7,1.6,8.9,4.4l-2.6,1.9c-1.4-2-3.2-3.2-6.4-3.2c-4.5,0-7.7,3.5-7.7,8.1c0,4.7,3.2,8.2,7.8,8.2c3.8,0,5.8-1.8,6.6-3.9h-6.2v-3.1h10.2C52.4,62,48.4,65.7,42,65.7C35.7,65.7,30.6,61,30.6,54.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M56.3,43.5h3.5v18.9h9.7v3.1H56.3V43.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M70.7,54.5c0-6.5,5-11.3,11.3-11.3S93.4,48,93.4,54.5s-5,11.3-11.3,11.3S70.7,61,70.7,54.5z M89.8,54.5c0-4.7-3.2-8.1-7.8-8.1c-4.6,0-7.8,3.5-7.8,8.1c0,4.7,3.2,8.1,7.8,8.1C86.6,62.6,89.8,59.1,89.8,54.5z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M97.1,43.5h7.8c4.4,0,6.4,2.5,6.4,5.6c0,1.9-1,3.4-2.6,4.2c2.6,0.7,4.2,2.7,4.2,5.6c0,3.7-2.4,6.6-7.4,6.6h-8.4V43.5z M104.7,52.1c2.4,0,3.2-1.1,3.2-2.9c0-1.7-0.8-2.7-3.2-2.7h-4.2v5.7H104.7z M105.3,62.5c3,0,4.1-1.5,4.1-3.8c0-2.3-1.2-3.8-4.2-3.8h-4.6v7.6H105.3z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M117.6,65.5h-3.5l9.6-22.4h0.2l9.7,22.4h-3.6l-1.3-3.1c0,0-9.8,0-9.8,0L117.6,65.5z M123.8,50.6l-3.6,8.7h7.2C127.4,59.3,123.8,50.6,123.8,50.6z" /><path class="st0" fill="#fff" data-fill="#CA6B86" d="M136.6,43.5h3.5v18.9h9.7v3.1h-13.1V43.5z" /></g><g><polygon class="st1" fill="#fff" data-fill="#572459" points="87.9,15.9 92.2,15.9 92.2,9.3 100.4,9.3 100.4,5.5 79.7,5.5 79.7,9.3 87.9,9.3         " /><rect x="71.7" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4" height="10.4" /><polygon class="st1" fill="#fff" data-fill="#572459" points="54.1,5.1 53.8,5.1 53.8,15.9 65.1,15.9       " /><rect x="104.2" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#fff" data-fill="#572459" d="M135.3,9.3h2.5c5.2,0,7.4,2.5,7.4,6.6h4.5c-0.1-6.3-4.2-10.4-11.7-10.4h-7v10.4h4.3V9.3z" /><polygon class="st1" fill="#fff" data-fill="#572459" points="34.9,9.3 48.1,9.3 48.1,5.5 30.6,5.5 30.6,15.9 34.9,15.9         " /><rect x="120.9" y="5.5" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.4" /><path class="st1" fill="#fff" data-fill="#572459" d="M167.5,4.9c-6.7,0-12.3,4.7-13.8,11h4.6c1.3-3.8,4.9-6.5,9.2-6.5c5.4,0,9.7,4.4,9.7,9.7c0,5.4-4.4,9.7-9.7,9.7c-4.2,0-7.8-2.7-9.2-6.5h-4.6c1.5,6.3,7.1,11,13.8,11c7.8,0,14.2-6.4,14.2-14.2C181.7,11.3,175.3,4.9,167.5,4.9z" /><rect x="87.9" y="22.3" class="st1" fill="#fff" data-fill="#572459" width="4.3" height="10.7" /><path class="st1" fill="#fff" data-fill="#572459" d="M120.9,23c0,4.4-2.2,6.4-6.2,6.4c-4,0-6.2-2-6.2-6.4v-0.7h-4.3v0.9c0,6.7,4.5,10.1,10.5,10.1c5.9,0,10.5-3.4,10.5-10.1v-0.9h-4.3V23z" /><path class="st1" fill="#fff" data-fill="#572459" d="M147.8,22.3H131V33h4.3v-6.6h2.7c0.7,0,1.4,0,2-0.1l4.7,6.7h5.1l-5.6-7.8C145.8,24.5,147,23.5,147.8,22.3z" /><rect x="53.8" y="22.3" class="st1" fill="#fff" data-fill="#572459" width="4" height="10.7" /><polygon class="st1" fill="#fff" data-fill="#572459" points="34.9,24.5 34.9,22.3 30.6,22.3 30.6,33 48.7,33 48.7,29.2 34.9,29.2       " /><polygon class="st1" fill="#fff" data-fill="#572459" points="71.7,22.4 71.7,22.3 64.2,22.3 75.5,33.4 75.8,33.4 75.8,22.3 71.7,22.3       " /><path class="st1" fill="#fff" data-fill="#572459" d="M15.9,28.8c-5.4,0-9.7-4.4-9.7-9.7c0-5.4,4.4-9.7,9.7-9.7c2.8,0,5.4,1.2,7.2,3.2c0.5-1.5,1.2-2.9,2.1-4.2c-2.5-2.1-5.7-3.4-9.2-3.4C8,4.9,1.7,11.3,1.7,19.1C1.7,27,8,33.3,15.9,33.3c3.5,0,6.8-1.3,9.2-3.4c-0.9-1.3-1.6-2.7-2.1-4.2C21.2,27.6,18.7,28.8,15.9,28.8z" /></g><g><polygon class="st0" fill="#fff" data-fill="#CA6B86" points="85.5,20 15.9,20 15.9,18.2 85.5,18.2 94.6,18.2 167.5,18.2 167.5,20 94.6,20       " /></g><circle class="st0" fill="#fff" data-fill="#CA6B86" cx="15.9" cy="19.1" r="4.5" /><circle class="st0" fill="#fff" data-fill="#CA6B86" cx="167.5" cy="19.1" r="4.5" /></g></svg>',
    joinBg2, joinBG2Init, aboutnetworkData, nAboutAnimData, nAboutAnim, whyJoinJAnimData, whyJoinBAnimData, whyJoinFAnimData, whyJoinJAnim, whyJoinBAnim, whyJoinFAnim, aboutnetwork, membershipBg2Anime, membershipBg2Data,
    path_name = location.pathname.split("/").slice(-1),
    page_name = path_name[0];

$('.sectionTitle').css({ left: $('.navIconHolder').position().left });

var destinationIndex = "";

if ($("body#whyJoin").length) {
    destinationIndex = 3;
} else if ($("body#homePage").length) {
    destinationIndex = 4;
}

//console.log("destinationIndex: " + destinationIndex);


// $('path[id^=zoomin]').each(function(){
//     $(this).css({transform: 'scale(0,0)', transition: transform '0.5s', transform-origin: '4vw 4vh'})
// })

function notificationBar() {
    console.log(123);
    // if(winWidth > 768)
    // {
    $('body').prepend('<div class="battleGroundPopup"><a href="jaascript:;" class="closeBtn closePop">close</a><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="25"></td></tr><tr><td bgcolor="#efd3db" valign="top" style="border-radius:10px;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td height="15"></td></tr><tr><td align="center" valign="top" style="line-height:0px;"><img src="mailers/CG_battleground/images/logo1.png" width="17%"></td></tr><tr><td align="center" class="title" style="font-family:MontserratExtraBold; padding-top:10px; color:#562359; font-size:1.8em; text-align:center;"><strong>CENTURO GLOBAL BATTLEGROUND</strong></td></tr><tr><td align="center" class="subTitle" style="font-family:Montserrat-Regular; padding-top:3px; color:#562359; font-size:1.4em; text-align:center;">The Ultimate New startup Pitching Competition</td></tr><tr><td height="15"></td></tr></tbody></table></td></tr><tr><td height="25"></td></tr><tr><td valign="top"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td bgcolor="#fbeff1" width="48%" valign="top" style="border-radius:10px;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td height="15"></td></tr><tr><td align="center" valign="top" style="line-height:0px;"><img src="mailers/CG_battleground/images/trophy.png" width="50%"></td></tr><tr></tr><tr><td height="10"></td></tr></tbody></table></td><td width="4%"></td><td valign="top" width="48%"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td bgcolor="#fbeff1" valign="top" style="padding:12px 10px; border-radius:10px;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td colspan="2" height="5"></td></tr><tr><td width="20%" valign="top" style="line-height:0px;"><img src="mailers/CG_battleground/images/date.png" width="40"></td><td width="80%" class="date" style="font-family:Montserrat-Regular; padding-left:9px; color:#562359; font-size:1.0em;"><strong>Oct 2019</strong></td></tr><tr><td colspan="2" height="5"></td></tr></tbody></table></td></tr><tr><td height="15"></td></tr><tr><td bgcolor="#fbeff1" valign="top" style="padding:12px 10px; border-radius:10px;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td colspan="2" height="5"></td></tr><tr><td width="20%" valign="top" style="line-height:0px; "><img src="mailers/CG_battleground/images/location.png" width="40"></td><td width="80%" class="place" style="font-family:Montserrat-Regular; padding-left:9px; color:#562359; font-size:1.0em;"><strong>London, UK</strong></td></tr><tr><td colspan="2" height="6"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="25"></td></tr><tr><td style="line-height:0px; text-align: center;"><a href="mailers/CG_battleground/cg.htm" target="_blank" class="button learnMore">Learn More</a> </td></tr></table></div><div class="overlay bgp"></div>');
    // }
    // else
    // {
    if (winWidth < 769) {
        $('body').prepend('<div class="notificationBar"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="83" viewBox="0 0 80 83"><g fill="none" fill-rule="evenodd"><circle cx="40" cy="42.286" r="40" fill="#562359" fill-rule="nonzero" opacity=".3" /><circle cx="40" cy="40" r="40" fill="#FBEFF1" fill-rule="nonzero" opacity=".99" /><path fill-rule="nonzero" d="M5.714 6.857h68.571v67.43H5.715z" /><path fill="#562459" d="M31.932 41.209l-16.21-7.247a1.906 1.906 0 0 1-1.062-2.248l3.286-11.896c1.558-5.637 7.788-8.564 13.138-6.172l5.839 2.61c5.35 2.392 7.304 8.977 4.12 13.887l-6.72 10.361a1.917 1.917 0 0 1-2.39.705" /><path fill="#FDC149" d="M15.782 33.948l15.719 7.023-3.524 7.833-15.718-7.023z" /><path fill="#FDC149" d="M15.775 33.948l5.23 2.367-3.517 7.918-5.23-2.367z" /><path fill="#49194C" d="M18.586 35.09l-3.289-1.496a1.925 1.925 0 0 1-1.116-1.625l-.747-11.048c-.15-2.23 1.595-4.122 3.797-4.115l.574.002c2.415.008 4.208 2.274 3.695 4.67L18.586 35.09z" /><path fill="#562459" d="M19.399 23.738l1.606-4.772c-.661-.94-1.74-1.582-3.011-1.586l-.56-.002c-.234 0-.46.029-.681.07l-.408 5.683c-.131 1.83 2.468 2.347 3.054.607" /><path fill="#FDC149" d="M28.92 47.007l-16.078-7.005 2.002-4.34 16.078 7.005a.94.94 0 0 1 .493 1.257l-1.202 2.604a.99.99 0 0 1-1.293.479" /><path fill="#70CEEA" d="M27.786 50.433l-16.114-7.19a.975.975 0 0 1-.493-1.29.983.983 0 0 1 1.296-.491l16.113 7.189c.495.22.716.798.494 1.29a.983.983 0 0 1-1.296.492" /><path fill="#C96B85" d="M15.328 35.662l5.094 2.399-1.903 4.458-5.094-2.399z" /><path fill="#6CC4DF" d="M16.275 44.737a.938.938 0 0 1 1.231-.461l-5.1-2.248a.938.938 0 0 0-1.232.46.91.91 0 0 0 .47 1.211l5.1 2.248a.91.91 0 0 1-.469-1.21" /><path fill="#49194C" d="M21.11 34.56l3.305-11.885c1.538-5.53 7.604-8.435 12.917-6.278-.096-.046-.184-.1-.282-.144l-5.872-2.608c-5.381-2.39-11.646.534-13.212 6.166L14.66 31.695a1.9 1.9 0 0 0 1.068 2.246l6.45 2.864a1.9 1.9 0 0 1-1.068-2.246" /><path fill="#FDC149" d="M36.17 32.725a1.034 1.034 0 0 1-.134-.068c-.46-.276-.592-.847-.294-1.274l2.147-3.081c.651-.935.981-2.015.954-3.125-.012-.509.422-.93.97-.942.547-.011 1.002.391 1.015.9a6.957 6.957 0 0 1-1.272 4.168l-2.147 3.082c-.27.386-.8.523-1.239.34M38.248 21.865a.988.988 0 0 1-.417-.334 5.835 5.835 0 0 0-1.276-1.294.929.929 0 0 1-.18-1.345c.341-.418.973-.495 1.41-.17a7.78 7.78 0 0 1 1.704 1.728.931.931 0 0 1-.263 1.332c-.299.195-.67.215-.978.083" /><path fill="#562459" d="M47.395 58.922l16.21-7.247a1.906 1.906 0 0 0 1.063-2.248L61.38 37.531c-1.557-5.637-7.787-8.564-13.138-6.172l-5.838 2.61c-5.351 2.392-7.304 8.977-4.12 13.887l6.72 10.361a1.917 1.917 0 0 0 2.39.705" /><path fill="#FDC149" d="M62.963 51.661l-15.719 7.023 3.524 7.833 15.718-7.023z" /><path fill="#FDC149" d="M63.552 51.661l-5.23 2.367 3.518 7.918 5.23-2.367z" /><path fill="#49194C" d="M60.742 52.804l3.289-1.497a1.925 1.925 0 0 0 1.116-1.625l.747-11.048c.15-2.23-1.595-4.122-3.797-4.115l-.574.002c-2.415.008-4.208 2.274-3.695 4.67l2.914 13.613z" /><path fill="#562459" d="M59.93 41.45l-1.607-4.771c.66-.94 1.74-1.582 3.01-1.586l.561-.002c.234 0 .46.029.68.07l.409 5.683c.131 1.83-2.468 2.347-3.054.607" /><path fill="#FDC149" d="M50.408 64.72l16.078-7.005-2.002-4.34-16.078 7.005a.94.94 0 0 0-.493 1.257l1.201 2.604a.99.99 0 0 0 1.294.479" /><path fill="#70CEEA" d="M51.542 68.146l16.113-7.19a.975.975 0 0 0 .494-1.29.983.983 0 0 0-1.296-.491l-16.114 7.189a.975.975 0 0 0-.493 1.29.983.983 0 0 0 1.296.492" /><path fill="#C96B85" d="M64 53.375l-5.094 2.399 1.903 4.458 5.094-2.399z" /><path fill="#6CC4DF" d="M63.053 62.45a.938.938 0 0 0-1.232-.461l5.101-2.248a.938.938 0 0 1 1.232.461.91.91 0 0 1-.47 1.21l-5.1 2.248a.91.91 0 0 0 .469-1.21" /><path fill="#49194C" d="M58.218 52.272l-3.305-11.884c-1.538-5.53-7.604-8.435-12.917-6.278.096-.046.184-.1.282-.144l5.872-2.608c5.38-2.39 11.646.534 13.212 6.166l3.305 11.884a1.9 1.9 0 0 1-1.068 2.246l-6.45 2.864a1.9 1.9 0 0 0 1.069-2.246" /><path fill="#FDC149" d="M43.158 49.867c.046-.02.09-.042.134-.068.46-.276.592-.847.294-1.274l-2.148-3.082a5.217 5.217 0 0 1-.953-3.125c.012-.508-.422-.93-.97-.942-.547-.01-1.003.392-1.015.9a6.958 6.958 0 0 0 1.271 4.168l2.148 3.082c.27.387.8.524 1.239.34M41.08 39.578a.988.988 0 0 0 .417-.334 5.836 5.836 0 0 1 1.276-1.294.929.929 0 0 0 .179-1.344 1.035 1.035 0 0 0-1.408-.171 7.78 7.78 0 0 0-1.705 1.728.931.931 0 0 0 .263 1.332c.299.195.67.215.977.083" /></g></svg></div><div class="text">CENTURO GLOBAL BATTLEGROUND</div><a href="https://www.eventbrite.com/e/centuro-global-battleground-tickets-61584927175?aff=ebdssbdestsearch#tickets" target="_blank" class="button plainButton notifLearnMore">Learn More</a><a href="javascript:;" class="closeNB"></a></div>');
    }
    setTimeout(function() {
        // $('.notificationBar').css({top: 0});
        $('.battleGroundPopup, .overlay.bgp').fadeIn();
    }, 5000)
    $('.notificationBar .closeNB, .battleGroundPopup .closePop').on('click', function(e) {
        e.preventDefault();
        $('.notificationBar').css({ top: '0' });
        $('#wrapper').css({ 'margin-top': $('.notificationBar').outerHeight() })
        $('header').css({ 'top': $('.notificationBar').outerHeight() })
        $('.battleGroundPopup, .overlay.bgp').fadeOut();
        localStorage.setItem('notificationState', 'shown');
    })
    $('.battleGroundPopup .learnMore, .notificationBar .notifLearnMore').on('click', function(e) {
        // e.preventDefault();
        $('.notificationBar').css({ top: '0' });
        $('#wrapper').css({ 'margin-top': $('.notificationBar').outerHeight() })
        $('header').css({ 'top': $('.notificationBar').outerHeight() })
        $('.battleGroundPopup, .overlay.bgp').fadeOut();
        localStorage.setItem('notificationState', 'shown');
    })
}


function pxtovw(px, negativeValue) {
    var resolution = 1920;
    if (winWidth == 1440) {
        resolution = 1440;
    }
    if (winWidth == 1366) {
        resolution = 1366;
    }
    var newWidth = px / resolution * 100;
    return negativeValue ? ('-' + newWidth + 'vw') : (newWidth + 'vw');
}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


$(document).on('mouseenter', '.initBox .icon', function() {
    if (!mobile) {
        $(this).find('.svgFill').each(function() {
            svgFillColor = $(this).attr('data-fill');
            TweenMax.to($(this), 0.4, { fill: svgFillColor, ease: Power1.easeInOut });
        });
    }
}).on('mouseenter', '#social a', function() {
    var circleFill = $(this).find('circle');
    var letter = $(this).find('path');
    if (isInnerpage) {
        if ($('#social').hasClass('onWhite')) {
            TweenMax.to(circleFill, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
        } else {
            TweenMax.to(circleFill, 0.4, { fill: '#fff', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: $('body').attr('data-banner-color'), ease: Power1.easeInOut });
        }

    } else {
        TweenMax.to(circleFill, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
        TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
    }
}).on('mouseleave', '#social a', function() {
    var circleFill = $(this).find('circle');
    var letter = $(this).find('path');
    if (isInnerpage) {
        if ($('#social').hasClass('onWhite')) {
            // console.log(1155);
            TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
        } else {
            // console.log(1158);
            TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
            TweenMax.to(letter, 0.4, { fill: '#fff', ease: Power1.easeInOut });
        }

    } else {
        // console.log(156);
        TweenMax.to(circleFill, 0.4, { fill: 'none', ease: Power1.easeInOut });
        TweenMax.to(letter, 0.4, { fill: '#61586F', ease: Power1.easeInOut });
    }
}).on('mouseleave', '.initBox .icon', function() {
    if (!mobile) {
        $(this).find('.svgFill').each(function() {
            TweenMax.to($(this), 0.4, { fill: 'none', ease: Power1.easeInOut });
        });
    }
}).on('click', '#back2Top', function(e) {
    $(this).removeClass('topButon');
    if ($('#fullpage').length < 0) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    } else if ($('#mediaCenterPage').length) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    } else {
        fullpage_api.moveTo(1);
        scrollDownAppend(0);
    }
    if (isInnerpage) {
        $(' #social, .scrollDown').fadeIn();
    }
    if (!isInnerpage) {
        $('#fp-nav, #social, .scrollDown').fadeIn();
    }
}).ready(function() {
    var hdHei = 120;
    if (winWidth <= 1440) {
        hdHei = 90;
    }
    if (winWidth <= 1366) {
        hdHei = 85;
    }
    if (winWidth <= 1280) {
        hdHei = 80;
    }

    // if ($('body').attr('id') == 'homePage' || $('body').attr('id') == 'initiatives') {
    //     if (localStorage.getItem('notificationState') != 'shown') {
    //         notificationBar();
    //     }
    // }
    $('header .siteSubnav').css({ top: ((hdHei - $('header .siteSubnav').outerHeight()) / 2) });
    var leftPos = $('.navIconHolder').position().left + (($('.navIconHolder').outerWidth() - $('.pageTitle').outerHeight()) / 2);


    $('.pageTitle').css({ left: leftPos });

    TweenMax.set('#sectionTitle1', { height: $('#sectionTitle1 h2').outerHeight(true) });
    if (winWidth < 768 && !isInnerpage && $('.owl-carousel').length) {
        owlinitiatives.owlCarousel({
            center: true,
            items: 1,
            loop: false,
            margin: 10
        });
    }
    if (mobile) {
        $('.playButton').on('click', function() {
            var videoP = document.getElementById("teaser");
            $('.video').removeClass('playButton');
            videoP.play();
            $(document).on('click', '.video .close', function(e) {
                e.stopPropagation();
                videoP.pause();
                // console.log(123456);
                $('.video').hide().addClass('playButton');
                $('#wrapper').css({ position: 'relative' });
                $(this).hide();
                // $('.video video').css({ opacity: 0.1, width: 'auto', height: '100%' }).removeAttr('controls')
                // $('header,#sectionTitle,#social,.scrollDownHolder').fadeIn();
                // $('.video .close').fadeOut();
                // vid.pause();
                // vid.currentTime = 0;
                // rangeslide.val(30).change();
                // $('#plane').css({ zIndex: 2             })
            });
        });
        $('.play-video-button').on('click', function() {
            $('#wrapper').css({ position: 'fixed' });
            $('.video').show();
        });
        // Configure/customize these variables.
        var showChar = 250; // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "More";
        var lesstext = "Less";


        $('.singleParaReadMore').each(function() {
            var content = $(this).text();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
                var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
            }

        });

        $(".morelink").click(function() {
            // if($(this).hasClass("less")) {
            //     $(this).removeClass("less");
            //     $(this).html(moretext);
            // } else {
            // $(this).addClass("less");
            // $(this).html(lesstext);
            // }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            $(this).hide()
            return false;
        });



        var minimized_elements = $('.multiParaReadMore');
        var counter = 1;
        // var textLength = 0;
        // minimized_elements.children().each(function(){
        //     textLength += $(this).text().length;
        //     if(textLength > 250) {
        //         //console.log($(this).text().slice(0,250));
        //         $(this).html(
        //             $(this).text().slice(0,showChar)+'<span>... </span><a href="#" class="more">More</a>'+
        //             '<span style="display:none;">'+  $(this).text().slice(showChar, $(this).text().length)+' </span>'
        //         );
        //         $(this).siblings().hide();
        //         return false;
        //     }
        // });
        minimized_elements.each(function() {
            if (counter == 1) {
                $(this).addClass("first");
                var t = $(this).text();
                if (t.length < showChar) return;
                console.log(t);
                $(this).html(
                    t.slice(0, showChar) + '<span>... </span><a href="#" class="more">More</a>' +
                    '<span style="display:none;">' + t.slice(showChar, t.length) + ' </span>'
                );
            } else {
                $(this).hide();
            }
            counter++;
        });

        $('a.more', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).hide().prev().hide();
            $(this).next().show();
            $('p').show();
            //$(this).parents(".multiParaReadMore").find('p').show();   
        });

        $('a.less', minimized_elements).click(function(event) {
            event.preventDefault();
            $(this).parent().hide().prev().show().prev().show();
            $('p').not('.first').hide();
        });
    }
    // Mobile Menu Starts
    $('.navIconHolder').on('click', function() {
        var headHeigth = $('header').outerHeight();
        $('.navigation').css({ 'max-height': 'calc(100vh - ' + headHeigth + 'px)', 'margin-top': headHeigth });
        $('.free-consultation-floating-wrapper').addClass('menuContact');
    });;
    // Mobile Menu Ends
    if ($('body').hasClass('whiteHeader')) {
        $('.logo').find('a').html(whiteLogo)
    } else {
        $('.logo').find('a').html(logo)
    }

    // if ($('body').attr('id') == 'services') {
    //     $('.content .row .introText').each(function() {
    //         if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //             // introTextSet($(this));
    //             var currRow = $(this).parents('.row');
    //             // svgLetterAnimate(".sec1");
    //             var id = $(this).siblings('.svgLetterBox').attr('id');
    //             if ($('#' + id).find('svg').length == 0) {
    //                 var letteranimser = bodymovin.loadAnimation({
    //                     container: document.getElementById(id),
    //                     renderer: "svg",
    //                     loop: false,
    //                     autoplay: false,
    //                     path: "dist/json/letters/" + id + ".json"
    //                 });
    //                 letteranimser.addEventListener('DOMLoaded', function() {
    //                     letteranimser.playSegments([[0, 60]], true);
    //                     document.getElementById(id).addEventListener('mouseenter', function() {
    //                         console.log(letteranimser.getDuration(true))
    //                         letteranimser.playSegments([[61, 85]], true);
    //                     });
    //                     document.getElementById(id).addEventListener('mouseleave', function() {
    //                         letteranimser.playSegments([[86, 120]], true);
    //                     });
    //                 });
    //             }


    //             introtextAnimate(currRow);
    //             if (!mobile) {
    //                 serviceIconAnimate(currRow, currRow.index());
    //             }

    //             for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //                 TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //             }

    //             $(this).parents('.row').addClass('complete');
    //         }
    //     });
    // }
    if ($('body').attr('id') == 'whyJoin') {
        //banner Anim
        if (mobile) {
            removeLoader()
            $('#joinBg2').html('<svg xmlns="http://www.w3.org/2000/svg" width="293" height="320" viewBox="0 0 293 320"><g fill="none" fill-rule="evenodd"><path fill="#FCC14A" d="M51.588 69.754c0 14.256-11.549 25.812-25.794 25.812C11.548 95.566 0 84.01 0 69.754c0-14.256 11.548-25.812 25.794-25.812 14.245 0 25.794 11.556 25.794 25.812"/><path fill="#345287" d="M117.317 179.527a.866.866 0 0 1-.27.02c-3.612-.346-18.865-.72-20.968 2.374l.036 21.77c-.303 5.249.761 24.885.047 30.408-.455 3.516.557 7.037 3.598 8.855l.072.044a.77.77 0 0 0 .199.086c1.088.28 3.59 1.283 6.078-.044.167-.088 1.046-1.635 1.122-1.807 3.275-7.4 4.436-13.956 6.373-19.541 0 0 6.855-30.47 6.294-36.533l-1.79-5.284-.791-.348zM81.315 299.325s-2.169.088-5.255-.978l-1.336 4.308s2.095.99 3.618 1.243l.926-.921.799 1.553s6.685 3.06 10.352 3.975c0 0 .826-1.117-.692-2.245-1.517-1.129-5.149-3.188-6.043-4.178-.895-.991-2.369-2.757-2.369-2.757"/><path fill="#FFCBB9" d="M78.114 291.222l-1.57 5.45-.485 1.687c2.608 1.84 5.253.975 5.253.975l.684-1.92 1.54-4.301-5.422-1.89z"/><path fill="#E6F7FF" d="M76.543 296.671l-.484 1.688c2.608 1.84 5.254.975 5.254.975l.683-1.92c-1.346-.213-3.67-.572-5.453-.743"/><path fill="#325087" d="M97.122 234.287c-.583.331-1.83 2.938-2.011 3.584l-.003.01c-4.148 14.76-18.868 54.841-18.868 54.841l8.108 2.717s15.987-38.066 22.238-52.735c.134-.315.428-1.317.456-1.659.072-.914-.171-1.093-.015-2.317a1.832 1.832 0 0 0-.241-1.16c-.668-1.13-1.417-2.43-2.063-2.642-2.177-1.228-5.087-2.066-7.601-.639"/><path fill="#FAB9AF" d="M143.896 163.18s7.859 1.306 8.427 1.228c.568-.08 3.804-1.582 5.461-1.214 1.23.271 3.33.626 3.707.939.376.313-1.362.547-1.749.495-.386-.053-1.372.5-1.412.612-.04.11 2.647.103 3.84.297 1.194.194 1.853.48 1.882.67.027.187-2.1.444-2.771.418-.67-.026 2.434.272 3.123.71.69.439-2.61.656-3.452.55-.844-.108 3.097.23 3.4.616.304.386-3.238.664-4.153.59-.915-.072 2.753.03 2.99.301.237.272-3.916.912-5.368.956-1.344.042-2.923.21-5.959-1.67-.558-.346-7.818.2-7.818.2l-.148-5.698z"/><path fill="#325087" d="M112.9 139.846s1.89-5.494 4.733-4.365c2.207.877 16.855 21.368 20.809 24.538 1.13.908 10.63 1.971 10.63 1.971s1.554 3.867.44 7.755c-.388 1.355-13.75-1.248-14.842-1.718-5.545-2.387-13.315-15.843-13.315-15.843l-8.454-12.338z"/><path fill="#345287" d="M112.151 304.042s-2.03.765-5.295.72l.081 4.51s2.299.285 3.825.047l.59-1.166 1.246 1.224s7.307.807 11.075.527c0 0 .436-1.32-1.36-1.916-1.796-.596-5.888-1.412-7.048-2.071-1.16-.66-3.114-1.875-3.114-1.875"/><path fill="#FFCBB9" d="M106.58 297.36l.216 5.678.069 1.732c3.043.94 5.284-.723 5.284-.723l.048-1.83.114-4.763-5.73-.094z"/><path fill="#28468C" d="M107.47 235.708c-.513.517-1.133 2.393-1.114 3.02.275 8.622-.347 51.06-1.247 61.05l8.207.028s4.826-45.25 7.406-60.215c.089-.513-1.903-2.131-2.374-2.974-.936-.724-2.888-2.46-3.757-2.805-3.414-.794-4.345-.396-7.12 1.896"/><path fill="#28468C" d="M124.31 186.1l-1.372-.352s-25.179-9.734-25.256-4.959c-.086 5.438-1.585 7.813-.86 14.013 1.404 12.01 5.697 28.316 9.5 44.034.288 1.187 1.558 7.198 2.668 7.707 1.943.892 3.036 1.337 5.788 1.416 1.633-.34 5.452-.9 5.944-8.368l3.588-53.49z"/><path fill="#E6F7FF" d="M106.796 303.038l.069 1.732c3.043.94 5.284-.723 5.284-.723l.048-1.83c-1.472.265-3.97.698-5.4.82"/><path fill="#3C5A96" d="M111.586 129.281s-8.616.462-13.74 7.238c-7.646 15.988-2.465 40.732-1.598 48.943 0 0 16.168 6.446 28.313.378 0 0 2.717-25.596 2.196-32.378-.52-6.784-6.891-22.932-15.171-24.18"/><path fill="#FAB9AF" d="M111.599 121.855s1.27 7.014 3.489 10.416c.429.66.256 1.553-.352 2.023-2.386 1.846-7.23-.553-9.42-1.185-1.08-1.965-2.806-10.498-2.806-10.498l9.089-.756z"/><path fill="#FAB9AF" d="M112.693 102.196s-2.339.495.813 3.217c1.533 1.322 2.288 8.09 2.288 8.09s.623 9.542-2.832 9.958c-3.455.418-8.97 2.712-10.66 1.1-1.692-1.611-7.879-14.308-3.051-18.386 4.826-4.079 13.442-3.98 13.442-3.98"/><path fill="#FA978D" d="M115.62 114.391s.44.268 1.02.043c.683-.264.59-.654.59-.654l-1.695-2.831s-.483-.109-.634-.045c-.126.054-.326.404-.326.404l1.046 3.083z"/><path fill="#0F385C" d="M116.022 99.919c1.006 2.966-.907 5.608-3.208 6.714-1.494.716-3.14.984-4.779 1.232-2.763.42-3.84 4.197-3.59 6.634.284 2.764 4.255 6.038 6.067 3.91 1.81-2.13 5.23-3.376 5.23-3.376s1.907 1.287 2.271 4.526c.364 3.24-6.96 5.981-9.898 4.793-2.936-1.189-3.823-6.69-6.026-8.127-2.205-1.437-2.605 2.019-2.219 2.857.537 1.168 2.853 1.355 2.853 1.355l.888 7.112c-3.674-1.19-13.502-16.926-6.974-20.469-.308-5.462 5.833-7.893 9.153-9.026 0 0 8.62-2.889 10.232 1.865"/><path fill="#FFF" d="M114.106 135.094l-9.347-3.493 8.848 7.207zM114.106 135.094l4.08 2.522-4.337-7.57z"/><path fill="#28468C" d="M118.185 137.616l-4.08-2.522-.498 3.714 2.846 1.317z"/><path fill="#28468C" d="M116.925 138.856s4.149 5.554 4.149 19.482c0 1.635-2.152 4.087-2.152 4.087l-2.88-3.95s.132-16.829-.596-19.619c-.73-2.79 1.479 0 1.479 0"/><path fill="#FAB9AF" d="M130.897 145.257c1.876-1.778 4.737-5.095 4.737-5.095s-1.002-2.625-.764-3.48c.238-.854 2.206-2.712 2.671-3.114.466-.4.429.933-.11 1.475-.183.184-1.07 1.49-.921 1.85.147.36 1.632-2.03 2.597-3.281.964-1.25 2.861-2.992 3.087-2.836.498.342-1.284 2.285-1.565 2.61-.313.36-.871 1.438-.871 1.438s1.28-.21 1.224.526c0 0 1.109.388.887.983 0 0 .736.621.279 1.503-.458.882-1.078 3.434-3.444 4.173 0 0-3.208 5.86-5.355 7.182-2.146 1.322-4.327-2.155-2.452-3.934"/><path fill="#345287" d="M108.613 140.898c3.874 3.281 11.785 8.128 13.87 9.33 2.702 1.557 7.702-5.954 7.702-5.954l6.056 4.49s-5.92 7.917-9.23 9.84c-4.944.52-18.8-4.204-25.487-9.862-4.59-3.885-5.495-9.348-1.1-10.77 3.023-.98 7.144 2.04 8.189 2.926"/><path fill="#FCC14A" d="M192.564 29.424l-42.29-12.926-9.908 6.463 8.67 10.89 43.528 10.8z"/><path fill="#345287" d="M191.593 319.898h7.957v-291h-7.957z"/><path fill="#345287" d="M199.11 49.078v16.29l43.174-7.26 10.44-12.217-10.794-7.614zM191.856 70.857l-36.273 1.417-6.724 7.968 6.547 7.436h36.45z"/><path fill="#FCC14A" d="M199.287 92.105v16.29h33.973l6.193-8.145-6.9-8.145z"/><path fill="#FFF" d="M204.42 99.423c-.292-.096-.537-.145-.734-.145a.678.678 0 0 0-.37.086.28.28 0 0 0-.134.252c0 .106.04.195.118.266.078.071.174.129.29.172.114.044.284.1.51.17.335.096.612.193.83.29.219.096.406.244.562.444.156.2.235.462.235.784s-.085.596-.255.824c-.17.228-.404.4-.7.514a2.715 2.715 0 0 1-.99.173c-.4 0-.799-.07-1.196-.21a3.27 3.27 0 0 1-1.03-.577l.489-.987c.243.217.532.394.865.532.333.138.629.207.886.207.189 0 .337-.035.445-.104a.338.338 0 0 0 .162-.303.36.36 0 0 0-.12-.277.89.89 0 0 0-.304-.175 7.18 7.18 0 0 0-.514-.156 6.332 6.332 0 0 1-.82-.28 1.452 1.452 0 0 1-.555-.427c-.155-.19-.232-.445-.232-.763 0-.298.08-.56.238-.786.16-.225.384-.399.676-.52.292-.123.631-.184 1.017-.184.35 0 .694.05 1.034.149.34.098.64.23.897.396l-.476 1.008a4.246 4.246 0 0 0-.824-.373M205.947 98.34h4.145v1.042h-1.448v3.795h-1.262v-3.795h-1.435zM211.595 101.355h1.337l-.662-1.725-.675 1.725zm2.04 1.822l-.33-.856h-2.09l-.337.856h-1.297l2.076-4.837h1.296l2.027 4.837h-1.345zM216.676 100.83h.917c.258 0 .457-.064.597-.192.14-.13.21-.315.21-.56 0-.234-.07-.414-.21-.541-.14-.127-.34-.19-.597-.19h-.917v1.484zm1.641 2.347l-.703-1.339h-.937v1.339h-1.263V98.34h2.173c.638 0 1.134.148 1.485.445.352.297.528.714.528 1.252 0 .364-.074.678-.22.942-.148.265-.362.47-.642.618l1.007 1.58h-1.428zM219.986 98.34h4.144v1.042h-1.448v3.795h-1.262v-3.795h-1.434zM226.088 101.914c.18.184.407.276.683.276.271 0 .49-.09.659-.272.167-.182.251-.427.251-.735V98.34h1.262v2.843c0 .418-.089.785-.266 1.1-.176.315-.43.558-.758.728-.329.17-.714.256-1.155.256-.441 0-.829-.086-1.162-.256a1.83 1.83 0 0 1-.772-.728 2.164 2.164 0 0 1-.272-1.1V98.34h1.261v2.843c0 .303.09.547.27.731M232.463 100.638c.14-.13.21-.316.21-.56 0-.234-.07-.414-.21-.541-.14-.127-.34-.19-.596-.19h-.8v1.484h.8c.257 0 .456-.065.596-.193m.9-1.853c.34.297.51.714.51 1.252 0 .57-.17 1.013-.51 1.328-.34.316-.818.473-1.434.473h-.862v1.339h-1.262V98.34h2.124c.616 0 1.094.148 1.434.445M155.974 77.556h3.613l-.006 1.008h-2.345v1.076h2.165v1.008h-2.165v1.745h-1.262zM161.608 81.13c.179.185.406.277.682.277.271 0 .49-.091.659-.273.167-.182.251-.426.251-.735v-2.843h1.262V80.4c0 .419-.088.786-.265 1.1-.177.316-.43.559-.759.729-.328.17-.714.255-1.155.255-.441 0-.828-.085-1.162-.255a1.83 1.83 0 0 1-.772-.728 2.164 2.164 0 0 1-.272-1.1v-2.844h1.262V80.4c0 .304.09.548.269.732M168.627 77.556h1.172v4.837h-1.103l-2.193-2.89v2.89h-1.179v-4.837h1.11l2.2 2.912zM173.509 81.2c.188-.115.335-.279.441-.49.106-.212.159-.453.159-.725 0-.276-.057-.52-.17-.731a1.235 1.235 0 0 0-.465-.493 1.297 1.297 0 0 0-.675-.177h-.793v2.788h.855c.243 0 .46-.057.648-.172m.658-3.34c.389.202.69.486.907.852.216.366.324.786.324 1.26 0 .473-.11.894-.327 1.262a2.218 2.218 0 0 1-.924.856c-.398.202-.854.304-1.369.304h-2.034v-4.838h2.082c.506 0 .953.102 1.341.304M176.025 82.393h1.262v-4.837h-1.262zM181.528 77.556h1.172v4.837h-1.103l-2.193-2.89v2.89h-1.18v-4.837h1.111l2.2 2.912zM186.844 79.923h1.09v1.925a3.22 3.22 0 0 1-.949.46c-.374.116-.73.175-1.065.175a2.67 2.67 0 0 1-1.32-.328 2.419 2.419 0 0 1-.928-.9 2.477 2.477 0 0 1-.338-1.283c0-.47.116-.894.348-1.274.233-.38.552-.677.959-.893.407-.216.86-.324 1.362-.324.358 0 .717.065 1.075.196a2.8 2.8 0 0 1 .91.528l-.716.883a2.011 2.011 0 0 0-.604-.393 1.71 1.71 0 0 0-.672-.145 1.326 1.326 0 0 0-1.186.697c-.12.216-.18.458-.18.725 0 .271.06.516.18.734.12.219.285.39.496.514.212.125.446.187.704.187.243 0 .521-.078.834-.235v-1.249zM206.006 54.172c-.237-.107-.435-.14-.595-.1a.486.486 0 0 0-.3.225.883.883 0 0 0-.113.463.856.856 0 0 0 .09.436.627.627 0 0 0 .232.24c.093.054.23.117.412.192.271.1.496.214.673.338.178.125.329.347.454.665.126.32.186.76.18 1.321-.005.562-.08 1.057-.224 1.485-.144.426-.337.766-.582 1.018a1.58 1.58 0 0 1-.807.471c-.322.07-.642.018-.959-.154-.315-.172-.586-.44-.812-.807l.403-1.777c.191.327.42.577.685.754.265.177.503.242.71.196a.565.565 0 0 0 .363-.26c.09-.14.135-.325.137-.557a.901.901 0 0 0-.094-.455.622.622 0 0 0-.243-.248 2.99 2.99 0 0 0-.414-.17 2.764 2.764 0 0 1-.656-.327c-.172-.12-.317-.33-.438-.629-.12-.297-.177-.719-.173-1.264.005-.514.072-.98.202-1.4.13-.422.313-.768.549-1.04a1.64 1.64 0 0 1 .825-.534 1.39 1.39 0 0 1 .841.035c.278.1.522.267.732.502l-.41 1.861a2.257 2.257 0 0 0-.668-.48M207.28 51.955l3.504-.925-.02 1.866-1.24.313-.073 6.72-1.062.229.069-6.679-1.196.303zM212.272 55.117l.807-.192c.228-.055.405-.214.533-.477.128-.264.194-.618.2-1.061.005-.427-.053-.74-.175-.938-.121-.199-.297-.269-.525-.21l-.808.204-.032 2.674zm1.395 3.905l-.592-2.281-.025.005-.8.183-.028 2.404-1.096.236.1-8.655 1.903-.502c.568-.15 1.007.004 1.315.464.31.461.458 1.185.445 2.17a7.185 7.185 0 0 1-.221 1.77c-.139.513-.336.932-.59 1.258l.866 2.673-1.277.275zM216.969 54.962l1.241-.29-.57-3.058-.671 3.348zm1.85 2.951l-.286-1.524-1.938.434-.331 1.64-1.177.253 2.018-9.353 1.207-.318 1.78 8.594-1.273.274zM219.752 48.665l4.03-1.063-.033 2.004-1.427.362-.118 7.217-1.222.263.114-7.17-1.374.348zM224.291 47.468l3.887-1.026-.037 1.985-2.616.663-.03 1.753 2.355-.576-.037 1.961-2.353.565-.032 1.761 2.68-.604-.038 1.972-3.939.848zM232.375 50.07l1.188-.285-.082 3.881c-.29.442-.64.823-1.052 1.147-.41.321-.794.52-1.154.597a1.552 1.552 0 0 1-1.39-.346c-.405-.34-.718-.86-.94-1.56-.22-.697-.322-1.51-.304-2.443a9.12 9.12 0 0 1 .412-2.601c.258-.813.607-1.49 1.046-2.032.44-.544.93-.889 1.468-1.03a1.752 1.752 0 0 1 1.157.088c.386.162.71.431.973.808l-.822 1.983c-.184-.286-.397-.495-.64-.627a.967.967 0 0 0-.719-.107c-.277.07-.528.257-.754.56-.225.304-.405.686-.54 1.147-.136.461-.209.956-.22 1.485-.01.538.044 1.008.162 1.412.118.404.287.703.507.899a.8.8 0 0 0 .744.2c.261-.059.564-.282.908-.672l.052-2.504zM239.453 43.469l-2.166 7.314-.072 3.171-1.423.307.068-3.08-1.83-6.282 1.401-.37 1.193 3.93 1.37-4.606zM157.156 21.687l1.965.646-.25 7.976 3.098.84-.066 2.25-5.086-1.296zM163.032 23.617l5.32 1.747-.05 1.993-3.519-1.102-.05 1.84 3.188.954-.05 1.994-3.195-.894-.05 1.863 3.627.98-.05 2.012-5.457-1.39zM173.456 31.582l1.338.39-.076 3.65a2.693 2.693 0 0 1-1.185.573 2.86 2.86 0 0 1-1.345-.001c-.622-.158-1.184-.515-1.683-1.074-.504-.564-.897-1.263-1.177-2.098a7.724 7.724 0 0 1-.386-2.664c.023-.928.197-1.718.523-2.37.323-.649.755-1.097 1.293-1.347.533-.248 1.117-.267 1.75-.058.449.148.892.42 1.33.814a5.45 5.45 0 0 1 1.09 1.355l-.91 1.397a4.122 4.122 0 0 0-.73-.979c-.279-.272-.557-.453-.835-.54-.325-.101-.622-.074-.891.084-.27.159-.488.424-.652.798-.164.374-.252.822-.265 1.343-.012.53.054 1.03.199 1.5.145.47.35.863.616 1.18.265.315.561.516.888.604.307.083.66.027 1.056-.167l.052-2.39zM177.556 33.988l1.536.434-.697-3.382-.839 2.948zm2.27 3.977l-.345-1.66-2.402-.644-.429 1.495-1.551-.395 2.634-8.315 1.48.486 2.102 9.413-1.49-.38zM181.928 29.823l1.345.442-.102 6.635 2.13.578-.026 1.875-3.486-.888z"/><path fill="#FFCBB9" d="M261.333 300.346l-4.738-47.618c-2.866-15.737-1.65-39.624-.548-46.615a7.003 7.003 0 0 1 6.17-5.868c4.519-.423 8.403 3.253 8.15 7.788-.11 1.985-1.806 4.922-2.34 7.645-2.084 10.628-3.257 84.614-3.284 84.627l-3.41.04z"/><path fill="#FFCBB9" d="M274.331 299.898l-4.738-47.618c-2.866-15.736-1.65-39.624-.548-46.615a7.003 7.003 0 0 1 6.17-5.868c4.519-.423 6.76 2.467 6.507 7.002-.11 1.985-.162 5.709-.697 8.43-2.084 10.63-3.257 84.615-3.284 84.628l-3.41.04z"/><path fill="#3C5A96" d="M273.661 300.263c.333-.749 3.98-1.322 4.468-.486.252.432 1.115.994 1.115 2.072 0 1.678-1.698 1.001-2.887 2.252-.635.668-2.418 2.237-3.99 2.237-1.484 0-5.557-.007-5.777-.843-.743-2.824 5.434-1.545 7.071-5.232"/><path fill="#3C5A96" d="M277.68 306.282c.023.074.304.078.318 0 .317-1.795.966-3.553.966-3.553l-.638-.933s-.765 4.1-.647 4.486"/><path fill="#FFCBB9" d="M278.03 299.817s-.6 1.144-1.877 1.29c-2.177.25-2.084-.612-2.084-.612.204-.748.295-3.742.295-3.742l3.184 1.7s-.007.589.482 1.364"/><path fill="#28468C" d="M254.653 236.251c9.687 1.614 16.81 1.662 27.376.107.864-.128 1.329-.624 1.108-1.538-.685-2.836-1.012-6.558-1.195-7.393-.638-2.902-.302-19.381-.22-20.628.004-.051.217-2.299.225-2.349 1.787-10.987-2.099-13.483-4.12-17.973-1.358-3.014-1.476-1.638-6.172-1.496l-9.295.52c-.003.013-.004.027-.006.04l-3.08-1.128a1.389 1.389 0 0 0-.547-.08c-3.926.202-4.966-1.458-6.707 4.115-1.946 6.23-6.644 16.02.363 41.205.011.039.02.08.029.119l1.04 5.247c.246 1.104.604 1.133 1.201 1.232"/><path fill="#FFD8C5" d="M257.108 155.983c-1.357 5.544-4.838 15.08-5.076 15.49 0 0-10.687 11.647-11.36 11.285-.674-.361-3.326.028-3.714.146-.388.117-2.181-.536-1.807.307.374.843 2.936.486 2.341 1.364-1.958 2.889-4.121 4.161-4.434 4.778-.314.616.527.775.527.775-.225.154-.982.937-.53 1.272.376.28 1.246-.196 1.246-.196s.048.618.364.737c.617.234 1.124-.541 1.124-.541.083.311.897.39 1.26.32.731-.14 4.574-3.625 5.666-5.393.225-.364 14.482-11.086 15.653-12.193.762-.72 4.008-8.968 5.267-15.491-1.201-.601-3.167-1.034-6.527-2.66"/><path fill="#3C5A96" d="M276.678 178.114c.306 2.559 2.593 7.704 4.489 11.798a1.282 1.282 0 0 1-.833 1.78c-5.439 1.457-24.14 5.915-29.876.028a1.267 1.267 0 0 1-.308-1.197c.78-3.084 4.567-9.114 4.363-13.703-.086-1.929-1.47-4.445-2.406-5.396-.936-.95-2.828-3.14-2.744-6.097.08-2.77 4.278-7.952 4.806-8.593.038-.046.065-.094.101-.142 1.176-1.573 2.179-5.5 2.831-7.346a1.284 1.284 0 0 1 1.098-.851l13.837-1.336c.172-.015 1.893.32 2.057.373.399.127.453.218 1.472.784 0 0-1.864 9.337-2.172 12.325-.308 2.989 3.152 5.247 3.454 5.871.301.624-.24 10.675-.24 10.675l.07 1.027z"/><path fill="#FAB9AF" d="M260.806 142.675c-4.731-1.416-2.054-15.025-.037-18.595.795-1.407 2.232-2.303 3.774-1.825l5.775 1.786c.062.02.125.037.188.052l1.59.383a3.076 3.076 0 0 1 2.354 3.084l-.017.55c-.045 1.512 1.03 2.76 2.498 3.115.581.141 1.005.562.917 1.532-.13 1.436-1.41 3.009-2.039 3.702-.22.243-.401.516-.536.816-.506 1.128-2.023 4.116-4.678 6.139-.854.65-1.275 1.724-1.141 2.79l.011.09c.14 1.083-.25 1.874-1.178 2.825-1.097 1.126-2.667 2.318-4.72 2.72-2.082.407-3.299-1.018-3.539-2.144-.167-.785.019-1.6.458-2.271.343-.525.755-1.28.954-2.111.222-.927.279-2.365-.634-2.638"/><path fill="#203A60" d="M266.66 122.396s-5.316.296-6.957 4.714c-.177.474-1.441.412-1.692-.027-1.24-2.173.173-4.251 3.179-5.772 4.877-2.469 5.47 1.085 5.47 1.085"/><path fill="#203A60" d="M271.471 136.039c.015-.443.362-.787.802-.844.336-.044.75-.191 1.156-.578 1.174-1.112.124-4.245-2.597-2.558a.887.887 0 0 1-.85.05c-1.424-.679-5.62-3.121-6.438-8.663a.925.925 0 0 1-.004-.238c.1-.912 1.045-6.312 9.272-5.344 10.391 1.224 9.452 15.396 4.918 19.951-1.538 1.546-2.862 2.46-4.146 3.11a.877.877 0 0 1-1.105-.264c-.956-1.327-1.046-3.43-1.008-4.622"/><path fill="#203A60" d="M276.884 119.683s6.002-5.498 12.574-.852c6.57 4.645 2.136 12.194-.52 18.866-2.51 6.307 3.664 7.7 3.949 11.874.292 4.276-13.14 5.585-15.948-6.264-1.466-6.189 5.918-17.403 2.278-19.164-3.64-1.76-2.333-4.46-2.333-4.46"/><path fill="#B4ABBD" d="M280.298 125.529c-1.505-.85-4-3.574-3.607-6.192.392-2.618 1.111.666 1.57 1.632.459.968 4.223 5.794 2.037 4.56"/><path fill="#FFF" d="M253.517 171.493s11.878-.597 12.753-.84c.874-.243 2.77 25.03 2.77 25.03l-16.106-.757-.145-23.433h.728z"/><path fill="#FFF" d="M253.954 171.055s11.879-.597 12.753-.84c.875-.242 2.77 25.031 2.77 25.031l-16.106-.758-.145-23.433h.728z"/><path fill="#FFD8C5" d="M276.296 179.133a3.575 3.575 0 0 1-.355.236s-17.006 3.808-17.346 3.123c-.34-.685-2.728-1.903-3.113-2.031-.384-.13-1.47-1.7-1.652-.796-.182.904 2.114 2.096 1.121 2.468-3.267 1.222-1.567.272-2.179.593-.612.321-.018.937-.018.937-.273-.003-.468.196-.294.731.146.446.256.562.256.562s-.318.532-.13.812c.368.548 1.23.21 1.23.21-.112.301.506.837.842.99.678.309 1.628.428 3.54-.382.395-.167 18.222-.657 19.817-.882.171-.025.52-.18.998-.437.75-2.239-.588-4.937-2.717-6.134"/><path fill="#FFD8C5" d="M279.42 167.988c-1.323-.23-3.33-.08-7.016-.674.258 5.085.258 12.474.177 14.338.084 1.016 1.207 2.546 2.297 2.74 1.312.231 3.473.145 4.345-.141.461-2.712.75-10.743.197-16.263"/><path fill="#325087" d="M281.216 169.6l-10.148.43s.128-12.68.616-17.219c-.05-1.849 2.341-6.125 5.914-3.04 2.75 2.374 3.618 19.83 3.618 19.83"/><path fill="#FA978D" d="M257.559 135.374a.261.261 0 0 0 .03.225c.102.167.337.46.788.6.558.173.807.016.902-.084a.22.22 0 0 0 .057-.126l.42-3.345a.284.284 0 0 0-.078-.224c-.114-.127-.309-.327-.425-.359-.093-.025-.291.029-.424.072a.26.26 0 0 0-.171.157l-1.1 3.084z"/><path fill="#3C5A96" d="M260.663 300.71c.333-.748 3.98-1.321 4.468-.485.252.432 1.115.994 1.115 2.072 0 1.678-1.698 1.001-2.887 2.252-.635.668-2.418 2.237-3.99 2.237-1.484 0-5.557-.007-5.777-.843-.743-2.824 5.434-1.545 7.071-5.232"/><path fill="#3C5A96" d="M264.681 306.73c.023.074.305.078.319 0 .317-1.795.966-3.553.966-3.553l-.638-.933s-.765 4.1-.647 4.486"/><path fill="#FFCBB9" d="M265.032 300.265s-.6 1.144-1.877 1.29c-2.177.25-2.084-.612-2.084-.612.204-.748.295-3.743.295-3.743l3.184 1.7s-.007.59.482 1.365"/><path fill="#FCC14A" d="M96.189 19.204c0 10.606-8.592 19.204-19.19 19.204-10.6 0-19.191-8.598-19.191-19.204S66.4 0 76.998 0c10.599 0 19.19 8.598 19.19 19.204M102.077 69.051c0 9.126-7.393 16.523-16.512 16.523s-16.51-7.397-16.51-16.523c0-9.125 7.391-16.522 16.51-16.522 9.12 0 16.512 7.397 16.512 16.522M77.385 97.223a4.374 4.374 0 0 1-4.372 4.376 4.374 4.374 0 0 1-4.373-4.376 4.374 4.374 0 0 1 4.373-4.375 4.374 4.374 0 0 1 4.372 4.375M82.353 110.145a2.187 2.187 0 1 1-4.374.002 2.187 2.187 0 0 1 4.374-.002"/><path fill="#3C5A96" d="M88.103 25.335l-4.857-6.45-2.43-3.224-2.147 1.62 2.428 3.225 4.857 6.45c.446.59 1.293.71 1.884.264a1.35 1.35 0 0 0 .265-1.885"/><path fill="#3C5A96" d="M81.38 8.58l2.347 3.117c.067 1.99-1.219 4.375-3.174 5.849-1.955 1.474-4.6 2.054-6.493 1.441l-2.348-3.117c-.066-1.989 1.22-4.374 3.175-5.849 1.955-1.474 4.6-2.053 6.493-1.441"/><path fill="#FFF" d="M85.387 13.901a1.345 1.345 0 0 1-1.884-.265l-4.047-5.375a1.347 1.347 0 0 1 2.148-1.62l4.047 5.375a1.347 1.347 0 0 1-.264 1.885M75.972 20.63a1.345 1.345 0 0 1-1.884-.264L70.04 14.99a1.347 1.347 0 0 1 2.148-1.62l4.047 5.375a1.347 1.347 0 0 1-.264 1.885M77.522 26.384v-.753a1.93 1.93 0 0 0-1.936-1.939H68.699a1.93 1.93 0 0 0-1.937 1.939v.753a1.35 1.35 0 0 0-1.345 1.346v.674c0 .376.296.672.673.672h12.105a.666.666 0 0 0 .672-.672v-.674a1.35 1.35 0 0 0-1.345-1.346"/><path fill="#3C5A96" d="M21.375 82.582a4.42 4.42 0 0 0 4.419 4.422 4.42 4.42 0 0 0 4.418-4.422v-.233h-8.837v.233z"/><path fill="#FFF" d="M21.375 82.568h8.838v-2.355h-8.838z"/><path fill="#3C5A96" d="M25.794 52.504c-6.711 0-12.152 5.444-12.152 12.16 0 4.507 2.45 8.44 6.089 10.541l1.644 5.227h8.837l1.645-5.227a12.157 12.157 0 0 0 6.088-10.54c0-6.717-5.44-12.16-12.151-12.16"/><path fill="#FFF" d="M24.617 80.65v-9.423l-.159-.045a4.923 4.923 0 0 1-3.557-4.495h2.358a2.549 2.549 0 0 0 2.535 2.327 2.548 2.548 0 0 0 2.535-2.327h2.358a4.923 4.923 0 0 1-3.557 4.495l-.16.045v9.423h-2.353z"/><path fill="#345287" d="M85.565 57.137c-6.575 0-11.906 5.334-11.906 11.914s5.33 11.915 11.906 11.915c6.576 0 11.906-5.335 11.906-11.915 0-6.58-5.33-11.914-11.906-11.914"/><path stroke="#FFF" stroke-width="6" d="M85.565 59.428c-5.31 0-9.616 4.309-9.616 9.623 0 5.315 4.305 9.623 9.616 9.623s9.617-4.308 9.617-9.623c0-5.314-4.306-9.623-9.617-9.623z"/><path fill="#FFF" d="M86.14 68.119c-1.366-.548-1.76-.879-1.76-1.477 0-.478.362-1.037 1.383-1.037.904 0 1.596.356 1.602.36.073.038.155.059.236.059.198 0 .373-.12.445-.305l.248-.635a.393.393 0 0 0-.212-.505c-.556-.242-1.642-.43-1.653-.432-.018-.003-.079-.016-.079-.087l-.003-.92a.51.51 0 0 0-.516-.504h-.445a.51.51 0 0 0-.515.504l.001.968c0 .074-.08.106-.11.113-1.371.327-2.229 1.332-2.229 2.6 0 1.582 1.306 2.297 2.717 2.833 1.127.443 1.587.892 1.587 1.551 0 .717-.651 1.218-1.584 1.218-.797 0-1.876-.506-1.886-.51a.5.5 0 0 0-.218-.05.482.482 0 0 0-.455.316l-.237.642c-.084.24.045.435.211.521.663.345 1.944.548 2.001.557.016.002.094.03.094.1v.964a.51.51 0 0 0 .515.503h.46a.51.51 0 0 0 .516-.503V73.95c0-.095.07-.103.084-.107C87.8 73.514 88.7 72.444 88.7 71.1c0-1.38-.766-2.272-2.56-2.981"/></g></svg>');
            setTimeout(function() {
                headerAnim()
                $('#social').css({ opacity: 1 });
                startSocialAnims()
                $('.bg2, .dots-bg').css({ opacity: 1 })
                $('.fixedBanner .banner .divAnime').each(function(index) {
                    $(this).delay(index * 100).css({ transform: 'scale(1,1)' })
                    // TweenMax.to($('.fixedBanner .banner').find('.divAnime').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut })
                });
                setTimeout(function() { $('.banner .title .letters:nth-child(1)').css({ transform: 'translateX(0)' }) }, 1100)
                setTimeout(function() { $('.banner .title .letters:nth-child(3)').css({ transform: 'translateX(0)' }) }, 1200)
                setTimeout(function() { $('.banner .title .letters:nth-child(5)').css({ transform: 'translateX(0)' }) }, 1300)
                setTimeout(function() { $('.banner .letters:nth-child(3), .banner .letters:nth-child(5)').css({ color: '#fff' }) }, 1500);
                // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 1600)
            }, 1000)
        }
        if (!mobile) {
            joinBG2Init = bodymovin.loadAnimation(joinBG2);
            joinBG2Init.addEventListener('DOMLoaded', function() {
                removeLoader()
                joinBG2Init.play();
                setTimeout(function() {
                    headerAnim()
                    $('#social').css({ opacity: 1 });
                    startSocialAnims()
                    $('.bg2, .dots-bg').css({ opacity: 1 })
                    $('.fixedBanner .banner .divAnime').each(function(index) {
                        $(this).delay(index * 100).css({ transform: 'scale(1,1)' })
                        // TweenMax.to($('.fixedBanner .banner').find('.divAnime').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut })
                    });
                    setTimeout(function() { $('.banner .title .letters:nth-child(1)').css({ transform: 'translateX(0)' }) }, 1200)
                    setTimeout(function() { $('.banner .title .letters:nth-child(3)').css({ transform: 'translateX(0)' }) }, 1300)
                    setTimeout(function() { $('.banner .title .letters:nth-child(5)').css({ transform: 'translateX(0)' }) }, 1400)
                    setTimeout(function() { $('.banner .letters:nth-child(3), .banner .letters:nth-child(5)').css({ color: '#fff' }) }, 1600);
                    // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 1600)
                }, 1000)

            });
        }
        //banner Anim
    }
    $('.benefits-title .letters').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    $('.benefits-title').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
            });
        }
    })
    $('.benefits-list li').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).each(function(index) {
                $(this).delay((index * 100)).animate({ top: 0 }, 500);
            });
        }
    })
    if ($('body').attr('id') == 'initiatives') {
        var strokeData = '';
        // if (mobile) {
        $('.mobileStroke').attr('stroke', '#028283');
        $('.mobileStroke1').attr('stroke', '#B1DBE8');
        // } else {
        //     $('.mobileStroke, .mobileStroke1').attr('stroke', '#fff');
        // }
        // introTextSet('.initiativeBannerTitle');
        // $('.bannerIconsWrapper .stroke')
        TweenMax.set('.bannerIconsWrapper .stroke', { strokeDashoffset: 1250 });
        TweenMax.set('.bannerIconsWrapper .stroke', { 'stroke-dasharray': 1250 });
        TweenMax.set('.bannerIconsWrapper .fill', { fill: 'none' });
        // var owlMentor = $('.owl-mentor-carousel');
        // owlMentor.owlCarousel({
        //     center: true,
        //     items: 1,
        //     loop: false,
        //     margin: 0,
        //     nav: true,
        //     dots: false
        // });
        // $('.bannerIconsWrapper svg').each(function() {
        //     if(if ($(this).isInViewportCustom() && !$(this).parents('.bannerIconsWrapper').hasClass('complete')) )
        //     {
        //         $(this).css({opacity: 0});
        //         TweenMax.set($(this).find('.stroke'), { strokeDashoffset: 1250 });
        //         TweenMax.set($(this).find('.stroke'), { 'stroke-dasharray': 1250 });
        //         TweenMax.set($(this).find('.fill'), { fill: 'none' });
        //     }
        // });

        if ($(window).width() > 1024) {} else {
            var initiateSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="314" height="419" viewBox="0 0 314 419"> <defs> <path id="a" d="M0 119.614h161.286V.058H0z"/> <path id="c" d="M45 .21c-8.074 0-13.983-.929-15.497 7.145l-5.053 20.99c-.89 4.743-6.088 8.183-10.916 8.183H3.021a2.869 2.869 0 0 0-.003 5.737l43.353.044a4.194 4.194 0 0 0 4.123-3.403l8.247-31.55C59.971.791 55.457.177 49.387.177c-1.397 0-2.877.032-4.388.032"/> <path id="e" d="M0 0h210.698v4.651H0z"/> </defs> <g fill="none" fill-rule="evenodd"> <path fill="#326C90" d="M183 208h25v-29h-25zM236 208h26v-23h-26z"/> <path fill="#1A4E6E" d="M208 208h28v-46h-28z"/> <path fill="#FAB9AF" d="M228.725 32.066c0 5.07-1.95 9.717-6.295 9.182-1.88-.232-3.58-1.431-4.738-3.295-.302-.487-.59-.597-1.616-2.113-3.9-2.021-3.073-4.577-2.837-4.933.473-.714 2.01.178 2.896 1.159 0-5.072 2.819-9.182 6.295-9.182 2.167 0 4.453.778 5.586 3.209.684 1.47.709 4.062.709 5.973"/> <path fill="#FA978D" d="M226.847 35.42s.272.384.846.413c.677.034.743-.322.743-.322l-.377-2.965s-.368-.268-.52-.27c-.126-.003-.426.211-.426.211l-.266 2.934z"/> <path fill="#1A4B69" d="M213.594 30.253s2.214 1.354 2.847 2.264c.221.318.683.333.948.051.123-.13.257-.303.401-.532 0 0 2.39-3.204 1.996-5.123-.059-.287.172-.547.458-.493 1.695.319 5.854.964 7.713.03 2.364-1.19 4.196-6.895-1.42-6.776 0 0-.907.076-1.391.685-.372.467-.843.85-1.418 1.005a7.213 7.213 0 0 1-3.1.144c-1.857-.316-3.79.092-5.298 1.227-1.736 1.307-3.125 3.595-1.736 7.518"/> <path fill="#1A4B69" d="M227.602 24.964s1.182 3.803 1.123 6.18c0 0 1.832-.832.473-6.656-1.36-5.824-1.596.476-1.596.476"/> <path fill="#FAB9AF" d="M215.485 34.77c.177.535 2.896 3.625 1.95 7.726l5.32 4.1 1.518-5.498-1.281-5.734-7.507-.594zM255.599 37.087l1.418-2.734 3.074 1.783-1.655 2.258z"/> <path fill="#A6425F" d="M227.641 43.268l17.26 4.635 10.712-11.942a.266.266 0 0 1 .356-.04c.678.495 2.977 2.097 4.218 2.054.12-.004.194.132.127.233l-11.158 16.946s-16.819-2.284-20.72-5.256c0 0-7.65-1.995-.795-6.63"/> <path fill="#B95572" d="M211.082 43.087s12.95-2.819 17.853.7c.168.122.352.215.543.297 1.12.483 5.139 3.16 4.404 16.536l-1.686 20.149-19.357 5.022s-.691-22.923-3.887-26.745c0 0-.853-16.633 2.13-15.959"/> <path fill="#FAB9AF" d="M224.006 42.079c-.587 4.357-1.794 4.302-3.136 4.324-2.782.044-3.365-4.235-3.365-4.235l2.748-1.842 3.753 1.753z"/> <path fill="#B95572" d="M226.843 161.228s.831-3.51 3.658-2.508c0 0 1.247 1.505 1.745 1.755.499.251 2.744.753 3.491.92 0 0 1.33 1.337-1.413 1.254l-6.65-.251s-.748-.418-.83-1.17M210.47 161.228s.831-3.51 3.657-2.508c0 0 1.247 1.505 1.746 1.755.499.251 2.743.753 3.491.92 0 0 1.33 1.337-1.413 1.254l-6.65-.251s-.748-.418-.831-1.17"/> <path fill="#A6425F" d="M211.496 76.583l-.53 45.832-.208 37.252 5.464-.052s3.428-34.684 4.11-38.455c.833-4.605 3.33-29.509 3.33-29.509l2.29 50.088 1.013 17.784 4.97-.588s.955-37.447.955-39.799c0-1.545 1.86-18.409 1.614-31.466-.129-6.812-1.892-11.924-1.892-11.924l-21.116.837z"/> <path fill="#FAB9AF" d="M257.017 34.353s.623-4.178 4.682-2.922c0 0 1.769 2.616.208 3.192-1.561.575-4.211 2.18-4.89-.27"/> <path stroke="#FDC149" d="M249.07 20.555s-2.892-2.37-5.568-.906c-2.676 1.463-.94 4.607-.94 4.607s2.923 5.713 9.342 5.625M259.196 16.711s.612-3.7 3.583-4.38c2.97-.68 3.733 2.833 3.733 2.833s1.56 6.23-3.314 10.43"/> <path fill="#FDC149" d="M254.446 39.243l12.851-4.878s-5.224.305-6.988-4.394l-3.603 1.368s2.556 4.734-2.26 7.904"/> <path fill="#E2A84D" d="M255.402 41.789l12.851-4.879-.956-2.545-12.851 4.878z"/> <path fill="#FDC149" d="M269.452 37.501L254.89 43.03l-.344-.916 14.563-5.527z"/> <path fill="#FAB9AF" d="M260.574 30.966s-2.042 1.781-1.745 2.142c0 0 .19.407.736.091 0 0-.588.411-.107.595 0 0 .21.102.472-.015 0 0-.113.266.062.483.068.084.286.071.454.01 0 0-.07.804.622.284.693-.52 1.55-.802 1.756-1.528.235-.83-1.874-2.555-2.25-2.062"/> <path fill="#E2A84D" d="M258.948 31.457c-3.818 1.45-8.081-.488-9.522-4.326l-3.768-9.75a.42.42 0 0 1 .241-.544l13.046-4.952a.416.416 0 0 1 .535.24l3.77 9.758c1.442 3.838-.484 8.125-4.302 9.574"/> <path fill="#FDC149" d="M263.25 21.883l-3.77-9.758a.415.415 0 0 0-.321-.26l-9.791 3.716a.419.419 0 0 0-.241.544l3.768 9.75a7.387 7.387 0 0 0 7.6 4.773 7.453 7.453 0 0 0 2.756-8.765"/> <path fill="#016E6F" d="M319.127 211.767H148.873a1.878 1.878 0 0 1-1.873-1.883c0-1.04.839-1.884 1.873-1.884h170.254c1.034 0 1.873.843 1.873 1.884 0 1.04-.839 1.883-1.873 1.883"/> <path fill="#FDC149" d="M257.203 4.44c.34 0 .711.4.967.59-.007-.318-.102-.776.043-1.069.146-.295.563-.49.822-.679-.303-.092-.765-.142-.997-.371-.233-.231-.288-.69-.385-.995-.19.278-.398.745-.728.876-.28.11-.695.025-.987.024.191.253.536.569.59.89.053.326-.17.731-.27 1.036.285-.1.637-.301.945-.301m1.51 2.161c-.635 0-1.037-.967-1.612-1.048-.574-.082-1.48.948-2.029.406-.554-.548.467-1.49.37-2.07-.1-.597-1.242-1.044-1.045-1.742.222-.787 1.521-.16 2.03-.376.47-.2.617-1.07 1.041-1.394.988-.753.987 1.2 1.302 1.617.312.412 1.1.34 1.57.591 1.279.685-.871 1.396-1.111 1.846-.246.461.458 2.17-.516 2.17M272.112 26.194l.825.83.824-.83-.824-.83-.825.83zm.825 2.092a.519.519 0 0 1-.368-.153l-1.56-1.57a.526.526 0 0 1 0-.74l1.56-1.568a.519.519 0 0 1 .735 0l1.56 1.569a.526.526 0 0 1 0 .74l-1.56 1.569a.518.518 0 0 1-.367.153zM240.73 13.043a.577.577 0 0 0-.413.172.59.59 0 0 0 0 .83.577.577 0 0 0 .824 0 .59.59 0 0 0 0-.83.576.576 0 0 0-.412-.172m0 2.22c-.433 0-.84-.17-1.147-.479a1.642 1.642 0 0 1 0-2.309 1.607 1.607 0 0 1 1.147-.478c.434 0 .841.17 1.148.478a1.642 1.642 0 0 1 0 2.31 1.607 1.607 0 0 1-1.148.477M234.717 10.293a.516.516 0 0 1-.367-.153 4.633 4.633 0 0 0-3.308-1.378c-1.25 0-2.425.49-3.308 1.378a.518.518 0 0 1-.735 0 .525.525 0 0 1 0-.74 5.663 5.663 0 0 1 4.043-1.684c1.527 0 2.963.598 4.043 1.685a.526.526 0 0 1 0 .74.517.517 0 0 1-.368.152M273.8 50.698a.517.517 0 0 1-.368-.154.526.526 0 0 1 0-.74 4.734 4.734 0 0 0 0-6.657.526.526 0 0 1 0-.74.518.518 0 0 1 .735 0c2.23 2.244 2.23 5.894 0 8.137a.517.517 0 0 1-.368.154M272.16 42.347a.522.522 0 0 1-.52-.523c0-.29.232-.523.52-.523.287 0 .52.234.52.523a.521.521 0 0 1-.52.523M278.851 10.946c.175.843.586 1.326.778 1.434.046-.15.037-.516-.187-.885a1.483 1.483 0 0 0-.59-.55m-4.046 4.018a.52.52 0 0 1-.508-.417c-.016-.076-.378-1.892.542-3.3.495-.756 1.253-1.244 2.254-1.45.23-.048.454-.077.671-.087.167-1.42 1.027-2.738 2.471-3.707a.518.518 0 0 1 .72.145c.16.24.096.565-.143.725-.873.585-1.474 1.283-1.788 2.075-.12.304-.188.597-.221.869a2.53 2.53 0 0 1 1.405.954c.495.677.625 1.587.31 2.162a.95.95 0 0 1-.916.513c-.707-.052-1.412-.898-1.716-2.058a4.695 4.695 0 0 1-.12-.632c-.144.01-.298.03-.465.065-.73.15-1.251.478-1.594 1.002-.674 1.031-.396 2.497-.392 2.511a.523.523 0 0 1-.51.63"/> <path fill="#FAB9AF" d="M212.451 77.5s-.236 1.664 1.064.892c0 0 .71-1.427 1.537-.832 0 0 1.773.059 1.36 2.258 0 0-1.286 3.005-3.902 2.912-.89-.032-2.541-.475-2.305-2.734 0 0-.059-2.555 2.246-2.496"/> <path fill="#A6425F" d="M210.678 43.208s3.06 4.147 1.641 8.783c-1.419 4.636-6.724 12.018-6.724 12.018l7.684 13.075-3.429 3.685s-11.82-11.886-11.82-16.166c0 0 8.984-18.78 12.648-21.395"/> <path fill="#326C90" d="M218.766 180.103l5.596-3.343v17.868h-2.966v-12.742l-2.63 1.49z"/> <g> <path fill="#1A4E6E" d="M6.62 162.277h1.29l11.77-34.4h-1.288zM25.696 162.277h1.29l12.159-34.4h-1.29z"/> <g transform="translate(0 46.135)"> <path fill="#1A4E6E" d="M60.96 75.981H50.447c-4.827 0-10.026-3.44-10.915-8.183l-5.054-20.989c-1.513-8.074-7.423-7.145-15.496-7.145-8.074 0-15.255-.93-13.742 7.145l8.247 31.55a4.194 4.194 0 0 0 4.124 3.403l43.353-.044a2.87 2.87 0 0 0-.004-5.737"/> <path fill="#326C90" d="M17.658 78.36L9.41 46.81c-1.38-7.365 2.678-6.957 9.572-7.972-.701-.098-1.107-1.156-1.817-1.156-8.074 0-13.438 1.053-11.925 9.127l8.247 31.55a4.194 4.194 0 0 0 4.124 3.403l4.121-.005a4.189 4.189 0 0 1-4.074-3.398"/> <path fill="#1A4E6E" d="M51.638 81.743l12.158 34.398h1.289L52.928 81.743zM32.175 81.743l11.812 34.398h1.29L33.463 81.743z"/> <path fill="#A6425F" d="M76.534 71.125C65.26 65.464 41.93 54.832 36.852 54.967c0 0-12.081 16.992-3.52 20.388 10.529 4.177 26.726 3.533 41.391 3.314 5.071-.076 6.608-5.135 1.811-7.544"/> <path fill="#B1516D" d="M81.558 111.946l1.779-.861s.361.622.663 1.026c.58.782 4.824 1.31 4.837 2.365.01.904-2.531 1.132-3.446 1.113-.914-.02-1.59-.169-2.182-.438-.644-.294-1.725-.786-1.9-1.125-.305-.59-.065-.934.004-1.234.08-.354.245-.846.245-.846"/> <path fill="#FAB9AF" d="M83.258 109.133s.091 1.888.682 2.467c.641.627 1.76 1.5 1.724 1.936-.611.523-2.244.193-3.209-.066a1.473 1.473 0 0 1-1.018-.969c-.446-1.371-1.177-4.022-1.177-4.022l2.998.654z"/> <path fill="#B1516D" d="M82.187 116.247c-.47-2.538-.377-1.637-.732-2.548-.108-.276.708.344.708.344l.343 2.24-.298.08-.021-.116z"/> <path fill="#A6425F" d="M71.404 79.615c4.701 15.25 9.022 31.461 9.022 31.461 1.614.08 2.915-.421 4.068-1.132 0 0-1.927-16.067-4.117-34.075-.894-7.347-12.074-6.31-8.973 3.746"/> <path fill="#AF526D" d="M71.29 71.125C60.014 65.464 30.898 60.076 25.82 60.211c0 0-6.295 11.748 2.266 15.144 10.53 4.177 26.726 3.533 41.392 3.314 5.071-.076 6.608-5.135 1.81-7.544"/> <path fill="#B1516D" d="M56.524 109.993l1.966.199s-.018.719.026 1.221c.085.97 3.421 3.645 2.879 4.55-.465.776-2.75-.363-3.518-.859-.768-.496-1.266-.977-1.628-1.517-.394-.587-1.057-1.573-1.028-1.955.05-.662.435-.828.65-1.048.255-.26.653-.591.653-.591"/> <path fill="#FAB9AF" d="M59.447 108.49s-.913 1.654-.713 2.457c.216.87.71 2.2.451 2.553-.794.125-2.011-1.013-2.697-1.739a1.472 1.472 0 0 1-.358-1.36c.34-1.4 1.235-6.1 1.235-6.1l2.082 4.188z"/> <path fill="#B1516D" d="M54.804 113.984c.93-2.407.537-1.591.712-2.553.054-.291.423.664.423.664l-.883 2.088-.295-.089.043-.11z"/> <path fill="#AF526D" d="M64.21 77.035a35510.03 35510.03 0 0 1-8.194 31.624c1.333.913 2.703 1.169 4.058 1.169 0 0 6.162-14.795 13.741-31.277 3.091-6.724-6.972-11.704-9.605-1.516"/> <path fill="#B95572" d="M48.035 56.4l-21.276-1.025s-2.683 3.495-1.982 6.716c.26 1.194 16.644 3.018 25.557-2.181.727-.424-2.3-3.51-2.3-3.51"/> <mask id="b" fill="#fff"> <use xlink:href="#a"/> </mask> <path fill="#1A4E6E" d="M97.444 115.26h2.047V54.765h-2.047zM142.075 116.363h2.047V54.766h-2.047zM49.784 116.141h2.048V54.766h-2.048z" mask="url(#b)"/> <path fill="#203A60" d="M21.585 26.335a25.94 25.94 0 0 0 6.031-4.362c2.38-2.284 4.257-6.436 3.108-10.258-.548-1.823-.601-3.74-.072-5.433 1.84-5.896 8.876-6.274 11.31-4.053 9.112 8.314 13.449 31.218 2.774 44.641-2.32 2.918-13.284 11.48-23.428 6.183-4.506-2.352-5.901-3.832-7.33-8.813-2.085-7.27 1.65-14.756 7.607-17.905" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.03 10.795c.429.334 5.052 4.596 6.298 4.363-.003.384-1.065 4.525-.215 6.688-.309 2.034-4.956 2.325-6.421-1.08 2.933-2.441.62-8.109.338-9.971" mask="url(#b)"/> <path fill="#FCD2C5" d="M63.998 48.486c.129.238-.78 1.005-1.046 1.05-.669-.086-.617-.477-1.256-.466.554-.09 1.119-.305 1.623-.561.267-.16.514-.41.68-.023" mask="url(#b)"/> <path fill="#FAB9AF" d="M33.38 27.067c-.48-1.042 5.016-2.474 5.291-1.975 1.517 2.752 4.196 12.085 6.26 16.576 2.532 5.51-2.837 4.743-3.52 3.889-3.957-6.65-5.053-12.04-8.03-18.49" mask="url(#b)"/> <path fill="#C96B86" d="M39.447 25.016c1.664 1.467 2.95 8.776 4.924 13.184-1.566 1.612-2.441 2.421-5.354 2.95-3.16-4.784-4.769-11.608-4.802-13.374-.087-4.544 2.877-4.835 5.232-2.76" mask="url(#b)"/> <path fill="#FAB9AF" d="M34.548 9.426c-.393-3.092 1.335-5.931 4.457-6.33 2.907-.368 5.77.142 6.578 2.861.29.974-.14 10.068-4.29 11.535-1.974.698-6.039-2.523-6.336-4.855 0 0-.404-3.18-.409-3.211" mask="url(#b)"/> <path fill="#203A60" d="M32.408 2.9c3.393-4.558 9.706-2.857 9.76-.29 4.439-.741 5.046 7.594 2.876 8.759.749-5.295-5.856-6.235-5.856-6.235-.626 1.789-2.46 1.55-3.265 3.28-1.21 2.596-1.22 1.515-1.398 2.22 0 0-5.958-2.574-2.117-7.734" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.13 7.156c.298.027.58.825.977 1.14-.339 1.012-1.047 1.945-1.426 2.737-.715-.266-.853-1.353-.788-2.092.07-.782.455-1.855 1.237-1.785" mask="url(#b)"/> <path fill="#FA978D" d="M43.137 13.814a.17.17 0 0 1-.053.138.91.91 0 0 1-.592.257c-.38.023-.513-.114-.558-.192a.143.143 0 0 1-.016-.09l.251-2.178a.184.184 0 0 1 .084-.13c.092-.063.246-.159.325-.161.062-.002.18.063.257.11.048.03.079.076.084.127l.218 2.12z" mask="url(#b)"/> <path fill="#FAB9AF" d="M31.32 29.717c-.482-1.042 3.837-2.475 4.112-1.975 1.52 2.757 4.2 12.095 6.26 16.576 2.533 5.51-3.119 4.183-3.801 3.33-3.958-6.652-3.594-11.482-6.572-17.93" mask="url(#b)"/> <path fill="#C96B86" d="M36.192 27.715c1.638 1.495 2.795 8.826 4.692 13.268-1.594 1.585-2.483 2.378-5.405 2.855C32.404 39 30.914 32.15 30.912 30.383c-.007-4.545 2.961-4.784 5.28-2.668" mask="url(#b)"/> <path fill="#203A60" d="M21.585 26.335a25.94 25.94 0 0 0 6.031-4.362c2.38-2.284 4.257-6.436 3.108-10.258-.548-1.823-.601-3.74-.072-5.433 1.84-5.896 8.876-6.274 11.31-4.053 9.112 8.314 13.449 31.218 2.774 44.641-2.32 2.918-13.284 11.48-23.428 6.183-4.506-2.352-5.901-3.832-7.33-8.813-2.085-7.27 1.65-14.756 7.607-17.905" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.03 10.795c.429.334 5.052 4.596 6.298 4.363-.003.384-1.34 4.101-.125 6.064-.31 2.033-5.135 2.865-6.6-.54 2.933-2.44.708-8.025.427-9.887" mask="url(#b)"/> <path fill="#FAB9AF" d="M34.548 9.426c-.393-3.092 1.335-5.931 4.457-6.33 2.907-.368 5.77.142 6.578 2.861.29.974-.14 10.068-4.29 11.535-1.974.698-6.039-2.523-6.336-4.855 0 0-.404-3.18-.409-3.211" mask="url(#b)"/> <path fill="#203A60" d="M32.408 2.9c3.393-4.558 9.706-2.857 9.76-.29 4.439-.741 5.046 7.594 2.876 8.759.749-5.295-5.856-6.235-5.856-6.235-.626 1.789-2.46 1.55-3.265 3.28-1.21 2.596-1.22 1.515-1.398 2.22 0 0-5.958-2.574-2.117-7.734" mask="url(#b)"/> <path fill="#FAB9AF" d="M35.13 7.156c.298.027.58.825.977 1.14-.339 1.012-1.047 1.945-1.426 2.737-.715-.266-.853-1.353-.788-2.092.07-.782.455-1.855 1.237-1.785" mask="url(#b)"/> <path fill="#FA978D" d="M43.137 13.814a.17.17 0 0 1-.053.138.91.91 0 0 1-.592.257c-.38.023-.513-.114-.558-.192a.143.143 0 0 1-.016-.09l.251-2.178a.184.184 0 0 1 .084-.13c.092-.063.246-.159.325-.161.062-.002.18.063.257.11.048.03.079.076.084.127l.218 2.12z" mask="url(#b)"/> <path fill="#1A4E6E" d="M79.01 45.516h6.167V33.093h-6.168z" mask="url(#b)"/> <path fill="#1A4E6E" d="M91.664 48.605H72.522v-.373c0-2.097 1.7-3.796 3.796-3.796h11.55c2.096 0 3.796 1.7 3.796 3.796v.373zM103.504 40.21H61.066a1.308 1.308 0 0 1-1.309-1.308V11.106c0-.723.586-1.308 1.309-1.308h42.438c.722 0 1.308.585 1.308 1.308v27.796c0 .723-.586 1.308-1.308 1.308" mask="url(#b)"/> <path fill="#326C90" d="M101.53 38.16H63.039a1.308 1.308 0 0 1-1.308-1.308V13.155c0-.722.586-1.308 1.308-1.308h38.493c.723 0 1.308.586 1.308 1.308v23.697c0 .723-.585 1.309-1.308 1.309" mask="url(#b)"/> <path fill="#FDC149" d="M99.542 21.428H80.91a.637.637 0 0 1 0-1.273h18.632a.636.636 0 1 1 0 1.273M93.833 24.09H80.91a.637.637 0 0 1 0-1.273h12.923a.637.637 0 1 1 0 1.273M94.72 26.752H80.871a.598.598 0 0 1-.598-.598v-.078c0-.33.268-.597.598-.597h13.85c.33 0 .597.267.597.597v.078c0 .33-.268.598-.598.598M90.438 29.414H80.91a.637.637 0 0 1 0-1.273h9.528a.636.636 0 1 1 0 1.273" mask="url(#b)"/> <path fill="#CAC3D0" d="M66.284 28.048a.539.539 0 0 1-.539-.539v-.195a.539.539 0 0 1 1.078 0v.195a.539.539 0 0 1-.539.539" mask="url(#b)"/> <path fill="#FDC149" d="M65.273 29.132h11.769V20.45H65.273z" mask="url(#b)"/> <path fill="#FAB9AF" d="M63.475 28.771c.414-.486.896-.968 1.403-1.413.593-.534 2.052-1.577 2.154-1.649.31-.195 1.019-.784 1.296-.86.177-.05.714.015.893.153.237.183.126.496.126.496.349.172-.243.952-.148.975.387.095.376.654-.786 1.442-.069.047-2.54 2.549-3.395 3.283-.493-.49-1.564-2.396-1.543-2.427M31.656 31.771c-1.017-.532 1.532-4.301 2.054-4.074 2.887 1.258 10.706 7.024 15.071 9.318 5.367 2.822.08 5.218-.982 4.957-7.193-2.856-9.85-6.906-16.143-10.2" mask="url(#b)"/> <path fill="#C96B86" d="M34.295 27.213c2.21.186 7.6 5.29 11.812 7.653-.297 2.228-.517 3.398-2.542 5.559-5.388-1.959-10.747-6.48-11.826-7.878-2.778-3.597-.571-5.596 2.556-5.334" mask="url(#b)"/> <path fill="#FAB9AF" d="M46.204 38.875c.144-.193.304-.35.456-.456 2.791-1.94 14.365-7.323 16.952-9.805.614.993 1.193 1.777 1.738 2.28-4.335 3.998-14.986 12.036-17.006 10.824-1.852-1.11-2.777-1.987-2.14-2.843" mask="url(#b)"/> <path fill="#B95572" d="M29.75 39.834c-2.029-8.212-5.552-10.428.78-16.919.901-.925 4.318-2.454 4.318-2.454s2.085 1.86 3.836 1.794c1.202-.047 2.347-1.303 2.347-1.303s2.112.486 2.797 1.08c.378.327 1.99 4.412 3.926 7.066 3.937 5.397-.734 9.522-.833 12.295-.19 5.303-.241 11.296 2.142 16.156-7.283 5.436-15.595 7.092-24.383 3.585.026-7.24 7.206-12.651 5.07-21.3" mask="url(#b)"/> <path fill="#FAB9AF" d="M58.365 46.747c.625-.132 1.3-.22 1.974-.264.795-.062 2.588.002 2.712.007.364.034 1.286 0 1.552.109.171.068.556.447.614.666.076.29-.203.47-.203.47.172.348-.773.606-.712.682.25.312-.1.747-1.502.664-.083-.005-3.567.47-4.693.53-.092-.689.223-2.853.258-2.864M31.32 29.717c-.482-1.042 3.837-2.475 4.112-1.975 1.52 2.757 4.2 12.095 6.26 16.576 2.533 5.51-3.119 4.183-3.801 3.33-3.958-6.652-3.594-11.482-6.572-17.93" mask="url(#b)"/> <path fill="#C96B86" d="M36.192 27.715c1.638 1.495 2.795 8.826 4.692 13.268-1.594 1.585-2.483 2.378-5.405 2.855C32.404 39 30.914 32.15 30.912 30.383c-.007-4.545 2.961-4.784 5.28-2.668" mask="url(#b)"/> <path fill="#FAB9AF" d="M38.516 44.22c.232-.065.454-.093.64-.084 3.394.166 15.85 2.96 19.413 2.57-.119 1.161-.138 2.135-.013 2.867-5.874.524-19.217.397-20.078-1.795-.79-2.01-.99-3.268.038-3.558" mask="url(#b)"/> <path fill="#326C90" d="M45.908 54.834h100.581a3.382 3.382 0 0 0 0-6.765H45.908a3.382 3.382 0 1 0 0 6.765" mask="url(#b)"/> <path fill="#FAB9AF" d="M64.755 28.03c-.144-.818-.088-1.623-.088-1.623a.113.113 0 0 1 .159-.109c.171.077.42.279.472.81.082.825-.496 1.185-.543.921" mask="url(#b)"/> <path fill="#FFCFC3" d="M110.962 104.798l1.16 6.631c.094 1.145.387 1.886 1.535 1.946 1.288.067 1.935-.312 1.97-1.601l.614-6.93-5.28-.046zM100.741 105.02l1.214 6.581c.093 1.146.334 1.937 1.481 1.997 1.288.066 1.759-.708 1.793-1.997l.792-6.534-5.28-.046z" mask="url(#b)"/> <path fill="#B1516D" d="M116.252 115.753c-.089.663-13.056.758-13.091.33-.11-1.214 1.518-1.483 2.278-1.767.429-.16 1.582-.45 2.266-.577.862-.162.707-.172 2.209-.598.726-.204.62-.183 1.036-.427.008 0 .396-.278.396-.278.62-.396.786-1.128.786-1.128l3.692.106s.705 2.244.428 4.339" mask="url(#b)"/> <path fill="#B1516D" d="M105.846 116.254c-.088.663-13.055.758-13.091.33-.11-1.214 1.518-1.483 2.279-1.768.428-.159 1.581-.448 2.265-.577.863-.161.707-.172 2.209-.597.727-.205.62-.183 1.036-.428.008.001.396-.277.396-.277.62-.396.787-1.128.787-1.128l3.691.106s.706 2.244.428 4.339M105.632 71.62l4.403 35.507 7.735-.65-2.932-33.907z" mask="url(#b)"/> <path fill="#FFCFC3" d="M120.945 20.978s1.274 3.756 1 5.033c0 0 4.995-.123 6.09-1.034 1.093-.912.11-5.093.11-5.093l-7.2 1.094z" mask="url(#b)"/> <path fill="#C96B86" d="M141.602 67.178s4.227 12.319-.33 14.324c-4.558 2.006-35.24-3.594-36.253-2.682-1.014.912 1.377 27.862 1.195 28.957-.182 1.093-6.556.454-6.556.454s-6.11-31.651-3.983-35.844c2.127-4.193 28.645-5.209 28.645-5.209h17.282z" mask="url(#b)"/> <path fill="#FFCFC3" d="M117.34 17.995c1.266 3.049 3.92 5.153 7 5.153 4.305 0 7.794-4.1 7.794-9.16 0-5.06-3.49-9.16-7.794-9.16-4.304 0-7.793 4.1-7.793 9.16 0 .571.05 1.127.135 1.67l.658 2.337z" mask="url(#b)"/> <path fill="#F4C6BD" d="M98.332 46.063s3.357-1.052 7.286.381c3.93 1.434 14.598 1.634 14.598 1.634s-.173 9.67.491 7.678c.45-1.35-17.45-5.949-19.526-6.84-2.077-.89-2.849-2.853-2.849-2.853" mask="url(#b)"/> <path fill="#203A60" d="M126.204 22.278c.226.1.472.155.719.141 1.83-.104 3.521-.806 4.199-1.7 0 0 .266-.266.417-.424 0 0 2.884-3.001 2.31-8.335-.434-4.038-2.884-7.864-6.016-9.394-.515-.252-1.05.318-.783.826.105.2.193.378.24.496 0 0-1.58-2.558-5.96-2.127-1.252.124-2.597.872-4.084 1.586-3.582 1.72-2.802 7.074 1.125 7.682.053.009.107.016.16.023.3.041.525.302.536.604.057 1.587.63 2.674 1.063 3.275a.59.59 0 0 0 .87.112c.315-.28.824-.57 1.52-.472 1.103.156.787 2.382-.501 2.732-.319.087-.526.392-.43.707.297.962.987 2.662 2.274 3.231 0 0 .967.588 1.313.734.247.104 1.028.303 1.028.303" mask="url(#b)"/> <path fill="#FFCFC3" d="M92.434 48.838l.697.251 6.532 2.896c1.618.852 4.127 1.467 5.687 1.652 1.973.231 8.334-8.672 8.334-8.672l-2.782-6.283s-5.375 8.611-6.654 8.509c-1.273-.107-14.045-3.044-15.339-3.054-1.27-.013-4.273-.442-5.883 3.195 0 0-.76 1.301 2.681.787l3.714-.37 1.495.434c.172-.001.589.33 1.224.55l.294.105z" mask="url(#b)"/> <path fill="#FA978D" d="M117.272 17.085a.158.158 0 0 1-.068.12.851.851 0 0 1-.582.162c-.355-.028-.46-.173-.492-.251a.133.133 0 0 1-.004-.085l.518-1.988a.173.173 0 0 1 .095-.11c.093-.045.248-.114.322-.106.058.006.158.082.224.136.04.034.063.08.061.128l-.074 1.994z" mask="url(#b)"/> <path fill="#B1516D" d="M123.393 27.234c-.56-.288-1.333-.603-2.357-.616-.393-.005-1.01.387-1.34.6-6.078 3.892-11.746 14.032-11.746 14.032s-.06 2.408 5.146 5.144l2.453-1.56s2.733-2.567 2.77-2.223c11.09-11.664 5.397-15.212 5.074-15.377" mask="url(#b)"/> <path fill="#B1516D" d="M118.693 46.002c.648 2.46 3.478 16.386-.856 21.843 0 0 13.217 3.19 27.436 1.094 0 0-4.792-35.796-6.807-39.138-3.418-5.668-7.923-6.92-14.759-4.824-1.053.323-2.101.955-3.122 1.79 0 0-4.307 4.567-3.235 9.852 1.072 5.284 1.343 9.383 1.343 9.383" mask="url(#b)"/> <path fill="#1A4E6E" d="M151.83 118.443h-1.29l-11.513-33.517h1.289zM132.367 118.443h-1.29l-11.514-33.517h1.29z" mask="url(#b)"/> <path fill="#1A4E6E" d="M97.748 79.164h10.513c4.827 0 10.026-3.44 10.915-8.183l5.054-20.989c1.513-8.074 7.423-7.145 15.496-7.145 8.074 0 15.255-.93 13.742 7.145l-8.247 31.55a4.194 4.194 0 0 1-4.124 3.403l-43.353-.044a2.869 2.869 0 0 1 .004-5.737M107.07 84.926l-11.514 33.517h-1.288l11.512-33.517z" mask="url(#b)"/> <path fill="#1A4E6E" d="M126.533 84.926l-11.512 33.517h-1.29l11.514-33.517z" mask="url(#b)"/> </g> <g transform="translate(94.727 88.772)"> <mask id="d" fill="#fff"> <use xlink:href="#c"/> </mask> <path fill="#326C90" d="M58.65 10.61s2.516-5.66-5.788-5.594c-8.007.064-15.756.032-15.756.032s-3.73.161-4.887 5.177c-1.158 5.016-4.245 20.064-4.245 20.064s-2.508 9.84-10.997 9.84H-.193S-5.209 28.36.193 28.167C5.595 27.974 24.116 6.56 24.116 6.56L35.884-3.473l8.296-3.472s6.56.964 7.138 1.35c.58.386 7.139 4.437 7.139 4.437s4.823 5.788.193 11.769" mask="url(#d)"/> </g> <path fill="#016F70" d="M159.55 165.75H1.736a1.736 1.736 0 1 1 0-3.473H159.55a1.736 1.736 0 1 1 0 3.472"/> </g> <g> <path fill="#A6425F" d="M98.401 369.988c1.689-11.181.175-42.409.862-46.225.598-3.312 5.754-3.15 9.098-3.048 3.366.136 6.515 4.602 6.379 7.966-.054 1.352-3.084 28.45-4.871 40.288-1.288 8.53-7.863 35.672-9.935 45.659l-6.12-1.055c1.546-10.01 3.302-35.064 4.587-43.585M116.345 368.662c.904-11.447-.445-40.862-.433-41.186.135-3.361 4.623-5.504 7.932-5.403 3.327.136 5.913 2.972 5.779 6.333-.054 1.35-.93 28.682-2.696 40.51-1.273 8.524-4.769 36.147-7.18 46.177l-6.863-.876c1.529-10 2.783-36.972 3.461-45.555"/> <path fill="#A6425F" d="M94.189 413.233c-.09 1.818-.35 3.554-.37 4.645-.037.138.165.404.307.404l2.612.012.723-.811.69.817 11.022.049c.19 0 .39-.24.442-.424.065-.23-.087-.528-.96-.975-1.986-1.018-8.954-1.236-11.11-3.072 0 0-2.362-.645-3.356-.645M113.18 414.628c-.091 1.703-.272 2.724-.292 3.745-.036.13.166.379.308.379l2.612.01.723-.759.69.766 11.022.045c.19 0 .39-.224.441-.397.065-.215-.086-.494-.959-.912-1.986-.954-8.954-1.158-11.11-2.877h-3.436zM100.606 329.512s-3.739-6.862-1.335-20h30.689s.435 10-.268 20h-29.086zM126.506 258.814s6.018 1.99 5.403 4.72c-.476 2.123-16.708 18.04-18.986 22.04-.653 1.143-.247 21.076-.247 21.076s-3.23 1.901-6.847 1.374c-1.26-.184-.825-23.828-.557-24.883 1.362-5.352 10.798-14.244 10.798-14.244l10.436-10.083z"/> <path fill="#225A7D" d="M129.208 239.744s4.77-2.745 3.442-7.523c-1.327-4.779-4.883-.44-4.883-.44l1.441 7.963z"/> <path fill="#FAB9AF" d="M121.8 256.884l-.097-2.656s-.734-3.365 2.27-4.237c3.004-.872 4.85-2.863 5.295-4.348 0 0 2.95-6.943 1.202-10.235-1.277-2.403-7.296-6.833-9.322-5.72-2.026 1.113-9.553 3.482-9.657 5.455-.105 1.972 3.448 11.802 3.448 11.802l-1.108 4.57-1.408 1.794.671 5.38 1.435 1.96 3.836.956 2.928-.041.507-4.68z"/> <path fill="#FA978D" d="M126.372 243.8s.398.55 1.238.592c.99.05 1.088-.463 1.088-.463l-.552-4.26s-.539-.386-.76-.39c-.185-.003-.625.305-.625.305l-.389 4.215z"/> <path stroke="#326C90" d="M119.86 241.503l5.817.567.23-2.69-5.817-.566zM128.698 242.237l3.479.298.242-2.493-3.48-.298zM125.907 240.674s1.141-.944 3.256-.142M119.86 239.28l-4.186-.466"/> <path fill="#1A4B69" d="M109.252 232.633c1.282-7.932 11.602-10.359 15.196-9.454.479.12.042.826-.49 1.329 4.628-.017 9.57 1.277 9.853 6.3.205 3.658-9.39 4.468-15.78 2.975-.512-.12-1.07-.15-1.511.136-.55.359-1.183 1.583-.726 4.397-.524-.573-1.701-1.338-2.282-.48-.452.668-.311 2.232 1.579 2.932.662 1.96-.192 3.887-.51 5.023 0 0-6.232-7.575-5.329-13.158"/> <path fill="#FAB9AF" d="M140.082 313.317s-.01 1.277-1.553 2.035c-1.54.759.247-2.25.247-2.25s-1.813 2.638-2.47 2.446c-.657-.19-.653-1.346-.465-1.444.187-.098-1.07.084-1.285-.29-.214-.374.293-1.422.293-1.422s-.664-.314-.6-.889c.066-.574 1.848-3.113 1.9-3.342.051-.229-.938-.19-1.031.008-.094.199-.146 1.496-.856 1.623-.711.125-.382-1.413-.304-1.83.431-2.281 1.986-3.495 2.304-3.56 1.07-.215 5.083 4.833 3.82 8.915"/> <path fill="#A6425F" d="M132.882 286.513c-1.356-4.735.765-22.505-.492-24.213-1.65-2.24-4.882-2.753-5.722-1.183-1.7 3.175-1.102 11.24-1.102 11.24s-.87 13.222 1.991 18.057c2.154 1.56 2.585.901 3.712.22.819-.493 1.658-3.024 1.613-4.121"/> <path fill="#A6425F" d="M138 303.87s-5.299-14.113-5.267-15.474c.002-.085-.113-1.17-.08-1.257-.047-1.527-1.518-2.771-2.681-2.743-1.164.028-3.261 1.596-4.038 2.788-.013.141-.024.28-.027.415-.026 1.085 4.425 19.222 5.7 19.122 3.657-.288 6.393-2.851 6.393-2.851"/> <path fill="#D2F0FF" d="M112.134 264.3l6.025-6.416 2.429.122 7.18 6.786-1.847 47.976-9.614.465-8.074-1.206z"/> <path fill="#B95572" d="M124.41 256.953l5.028 2.121c1.856.86 3.03 2.841 2.979 5.023-.13 5.509-.348 16.273-.28 24.656.087 10.807.323 18.21-1.168 28.154a1.7 1.7 0 0 1-1.767 1.44l-6.434-.316a1.735 1.735 0 0 1-1.475-2.071c1.738-8.235 8.402-42.407 3.117-59.007M117.971 264.13c-.912-6.263-5.81-10.432-5.81-10.432s-8.682 3.739-10.81 7.035c-2.277 2.898 1.526 20.201.413 31.891-1.024 10.759-7.744 16.255-5.708 19.678 4.072 6.845 15.022 4.844 15.022 4.844s7.44-49.257 6.893-53.016"/> <path fill="#FFF" d="M113.316 251.837l6.08 6.202-4.654 4.03-5.114-7.881zM124.482 255.642l-1.078-.513-1.31-.501-1.303 3.168 5.581 5.67z"/> <path fill="#B95572" d="M119.897 258.84l.018-.006a.316.316 0 0 1 .417.225c.76 3.108 1.637 9.803 1.71 10.93.095 1.495.71 8.718.71 8.718l.364 7.514-1.403 4.22-2.318-3.86s.706-15.194.483-15.904c-.18-.572-.116-5.241-.116-5.241l-.072-6.285a.327.327 0 0 1 .207-.31"/> <path fill="#B95572" d="M120.044 259.28s-.758-.835-.635-1.169c.122-.334.587-.784.801-.676.183.093.496.403.566.598.032.09.008.198-.034.38-.057.245-.497.826-.698.866"/> <path fill="#A6425F" d="M102.25 265.03c.655-3.524 4.113-4.26 6.325-2.526 1.72 1.347 9.122 22.835 11.764 26.615.755 1.082 14.852 6.572 14.852 6.572s.323 3.728-1.725 6.754c-.714 1.054-17.4-7.514-18.242-8.211-4.266-3.54-8.865-15.991-8.865-15.991s-4.773-9.65-4.11-13.213"/> <path fill="#FDC149" d="M145.713 292.766c-3.138-.059-5.588-2.726-5.374-5.85l.63-6.707h9.57l.478 7.1c.149 3.01-2.286 5.515-5.304 5.457"/> <path fill="#FDC149" d="M144.977 301.605h.93v-8.838h-.93z"/> <path fill="#FDC149" d="M141.256 302.515s3.036-.57 4.12-1.37c0 0 .485-.012.65 0 .668.517 4.067 1.37 4.067 1.37v.457l-8.837.028v-.485M160.638 290.085a5.543 5.543 0 0 1-7.23-3.49l-1.92-6.533 8.976-3.574 3.105 6.492a5.257 5.257 0 0 1-2.93 7.105"/> <path fill="#E2A84D" d="M154.369 286.173l-1.87-6.429-1.01.407 1.883 6.478c.951 2.988 4.185 4.565 7.094 3.459.11-.042.219-.09.325-.138-2.734.578-5.54-1.005-6.422-3.777M141.412 286.862l.616-6.651-1.069-.002-.62 6.703c-.211 3.123 2.17 5.792 5.222 5.855.116.002.231-.001.346-.007-2.703-.486-4.69-3-4.495-5.898"/> <path fill="#FDC149" d="M164.047 298.006l-.848.343-3.339-8.495.848-.342z"/> <path fill="#FDC149" d="M159.86 300.709s2.62-1.637 3.347-2.75c0 0 .446-.192.605-.243.802.21 4.26-.297 4.26-.297l.16.405-8.201 3.316-.17-.431"/> <path fill="#FAB9AF" d="M133.814 301.154s.624-1.578.766-2.124c.145-.561.373-2.286.373-2.286s.36.67 1.884.812c.266.024 2.084-.773 2.834-1.613 1.728-1.934 3.032-3.422 5.286-3.622 2.33-.206 3.69 1.347 4.422 2.11.528.552 1.374 1.976 1.139 2.21-.235.231-.974.077-1.163-.002-.641-.266-.873-.967-1.48-1.315-.458-.262-1.882-.492-1.882-.492.38.263 1.377.876 1.828 1.375.44.452 1.05 1.208 1.317 2.139.266.922.102 1.405-.052 1.655-.11.18-.58-.21-.72-.712a5.367 5.367 0 0 0-.806-1.614c.06.135.32.757.234 1.442-.083.662-.799 1.99-.858.874-.035-.662-.196-1.548-.572-1.918-.438-.432-1.233-.813-1.233-.813.463.553 1.574 2.536.564 2.925-.21.08-.34-.438-.565-.817-.243-.412-1.293-1.528-3.037.235-2.843 2.871-4.893 1.81-4.893 1.81l-3.386-.259zM174.836 288.116s-7.47 2.591-8.039 2.613c-.57.02-3.997-.876-5.557-.24-1.156.47-1.91.58-2.225.945-.314.366.169.752.556.766.407.016 1.43.249 1.489.35.057.1-.399-.147-1.534.243-1.134.39-1.73.777-1.726.964.006.185.752.235 1.404.096.651-.138-.955.51-1.553 1.05-.6.538 1.286.351 2.093.106.807-.247-1.612.583-1.842 1.006-.23.423 1.904.253 2.787.027.884-.224-1.309.332-1.494.633-.185.301 1.815.907 3.244.702 1.324-.188 2.9-.294 5.546-2.62.487-.426 7.69-1.134 7.69-1.134l-.84-5.507z"/> <path fill="#A6425F" d="M212.71 413.698s1.852.653 4.825.607l-.063 3.88s-2.093.25-3.484.049l-.54-1.001-1.132 1.056s-6.654.71-10.087.478c0 0-.4-1.134 1.235-1.651 1.634-.517 5.36-1.228 6.414-1.799 1.055-.57 2.832-1.62 2.832-1.62"/> <path fill="#FFCBB9" d="M218 407.651l-.18 5.142-.056 1.57c-2.715.858-4.72-.642-4.72-.642l-.047-1.658-.113-4.313 5.116-.099z"/> <path fill="#A6425F" d="M195.5 413.698s1.852.652 4.826.607l-.063 3.882s-2.095.248-3.484.047l-.541-1.002-1.131 1.057s-6.654.711-10.087.478c0 0-.4-1.135 1.234-1.65 1.633-.518 5.36-1.229 6.415-1.8 1.055-.57 2.83-1.62 2.83-1.62"/> <path fill="#FFCBB9" d="M200.79 407.651l-.178 5.128-.058 1.588c-2.718.848-4.72-.641-4.72-.641l-.046-1.844-.114-4.132 5.117-.099z"/> <path fill="#A6425F" d="M215.906 301.761c-.953-4.138-15.114 1.309-15.114 1.309s.038.867.106 2.306c-2.557-1.02-3.986-3.95-8.571-2.947 0 0-3.164 17.1-3.164 34.344 0 5.418.215 13.958.879 21.277 1.22 13.442 4.441 51.438 4.441 51.438l7.87-.052s-1.41-37.871-.816-51.466c.314-7.178 1.747-18.597 2.308-24.26.956 6.121 1.048 17.257 2.399 24.688 2.411 13.275 6.062 51.114 6.062 51.114l7.554-.044c-.852-8.864-1.389-43.583-1.158-51.237.475-15.643 1.627-32.635.572-44.442-.493-5.52-2.285-7.316-3.368-12.028M203.116 262.18s-2.58-4.513-4.963-3.087c-1.853 1.107-11.809 21.288-14.871 24.67-.875.969-9.277 3.365-9.277 3.365s-.787 3.62.836 6.85c.566 1.124 12.207-3.215 13.118-3.795 4.623-2.944 9.492-15.91 9.492-15.91l5.665-12.094z"/> <path fill="#B95572" d="M204.102 253.233s7.92.41 12.63 6.44c7.032 14.224.125 35.905-.672 43.21 0 0-12.721 6.07-23.887.67 0 0-2.498-22.773-2.019-28.807.478-6.035 6.335-20.402 13.948-21.513"/> <path fill="#90324D" d="M203.581 334.097s-1.229-6.681-1.707-11.562c0 0-.772 11.593 1.149 17.21l.558-5.648z"/> <path fill="#FAB9AF" d="M203.946 288.83c-2.517 1.222-6.967 2.849-6.967 2.849s-2.265-2.037-3.219-2.125c-.954-.088-3.588 1.195-4.172 1.514-.585.318.776.797 1.53.459.257-.116 1.916-.513 2.222-.223.308.29-2.676.876-4.31 1.374-1.634.497-4.123 1.754-4.052 2.044.155.64 2.802-.422 3.238-.583.483-.179 1.787-.33 1.787-.33s-.705 1.221.06 1.45c0 0-.034 1.28.651 1.284 0 0 .345.99 1.41.865 1.068-.125 3.883.232 5.538-1.889 0 0 7.151-.997 9.312-2.67 2.161-1.673-.51-5.238-3.028-4.018M201.723 247.756s.962 6.276.04 9.778c-.179.679.234 1.382.9 1.604 2.61.872 6.105-2.536 7.819-3.696.357-1.966-.656-9.651-.656-9.651l-8.103 1.965z"/> <path fill="#FAB9AF" d="M194.838 231.72s2.177-.248.242 2.905c-.942 1.532.396 7.372.396 7.372s2.273 8.11 5.396 7.48c3.124-.63 8.591-.28 9.584-2.097.995-1.818 2.628-14.121-2.768-16.148-5.395-2.028-12.85.488-12.85.488"/> <path fill="#FA978D" d="M195.674 242.691s-.267.33-.772.308c-.593-.026-.623-.359-.623-.359l.564-2.69s.343-.216.475-.205c.111.008.356.23.356.23v2.716z"/> <path fill="#1A4B69" d="M191.023 230.749c0 2.782 2.455 4.457 4.793 4.73 1.517.176 3.035-.07 4.54-.329 2.539-.437 4.599 2.432 5.104 4.554.57 2.405-1.928 6.294-4.142 5.022-2.213-1.274-5.57-1.344-5.57-1.344s-1.285 1.627-.643 4.455c.644 2.83 7.855 3.042 10.068 1.203 2.214-1.839 1.358-6.72 2.856-8.558 1.5-1.839 2.874.954 2.785 1.769-.122 1.136-2.09 1.955-2.09 1.955l1.332 6.236c2.857-2.052 6.779-18.095.026-19.21-1.35-4.683-7.436-4.972-10.673-4.976 0 0-8.386.033-8.386 4.493"/> <path fill="#FFF" d="M201.72 258.714l8.373-3.156-7.925 6.512zM201.939 258.505l-3.939 2.17 4.186-6.512z"/> <path fill="#A6425F" d="M198 260.68l3.73-2.331.456 3.433-2.602 1.218z"/> <path fill="#A6425F" d="M199.35 261.767s-3.676 4.894-3.676 17.167c0 1.44 1.906 3.6 1.906 3.6l2.553-3.48s-.118-14.828.527-17.287c.646-2.458-1.31 0-1.31 0M208.164 269.375c1.531 4.257 3.086 12.364 3.432 14.476.448 2.74-12.666 5.115-12.666 5.115l.063 7.522s15.545-4.082 18.245-6.225c2.04-3.944 2.51-16.954-.13-24.3-1.812-5.044-6.154-7.523-8.78-4.32-1.808 2.203-.578 6.583-.164 7.732"/> <path fill="#E6F7FF" d="M200.79 412.75l-.06 1.613c-2.884.861-5.005-.652-5.005-.652l-.05-1.874c1.271.2 3.464.55 5.116.912M218 412.5l-.06 1.422c-2.88.779-5.006-.582-5.006-.582l-.05-1.503c1.394.215 3.761.565 5.116.662"/> <path fill="#FDC149" d="M148.51 278.104a.771.771 0 0 1-1.06.064l-2.684-2.275a.704.704 0 0 1-.067-1.02.772.772 0 0 1 1.06-.065l2.684 2.275c.311.264.341.721.067 1.02M150.525 276.46a.693.693 0 0 1-.862-.48l-.937-3.234a.71.71 0 0 1 .47-.88.693.693 0 0 1 .862.48l.937 3.233a.71.71 0 0 1-.47.88M152.874 276.917c-.348-.124-.537-.527-.421-.901l.995-3.224c.116-.374.492-.577.84-.453.349.124.538.527.422.901l-.996 3.224c-.115.374-.491.577-.84.453"/> </g> </g></svg>';
            $('#initiativeBanner').append(initiateSVG);

            headerAnim();
            $('#social').css({ opacity: 1 });
            startSocialAnims();
            $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
                $('.fixedBanner .loader').remove();
            });
            $('#initiativeBanner').animate({ opacity: 1 }, 500);
            $('.dots_bg > div').css({ opacity: 1 })
            $('.bannerIconsWrapper svg').each(function() {
                // $(this).parent().animate({ opacity: 1}, 500);

                // $(this).css({opacity: 0});
                TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
                TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

            });
            $('.bannerIconsWrapper').addClass('complete')
            // $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
            // setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
            // setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
        }


        $('.titleLetterAnim span').each(function() {
            if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            }
        });
        // $('.titleLetterAnim svg').each(function() {
        //     if (!$(this).parents('.titleLetterAnim').hasClass('complete'))
        //         TweenMax.set($(this).find('.stroke'), { strokeDashoffset: 1250 });
        //     TweenMax.set($(this).find('.stroke'), { 'stroke-dasharray': 1250 });
        //     TweenMax.set($(this).find('.fill'), { fill: 'none' });
        // });
        // $('.titleLetterAnim svg').each(function() {

        //     if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
        //         if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
        //             $(this).parents('.titleLetterAnim').addClass('complete');
        //             TweenMax.to($(this).find('.stroke'), 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
        //             TweenMax.to($(this).find('.fill'), 0.4, { fill: '#FCC14A', ease: Power1.easeInOut }, "0.5");
        //         }
        //     }


        // });
        $('.titleLetterAnim > .lettring').each(function() {
            if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
                $(this).addClass('complete');
                $(this).find('.letter').each(function(index) {
                    $(this).delay((index * 100)).animate({ opacity: 1 }, 500);
                });
            }
        });
    }

    if ($(window).width() < 768) {
        if ($('.section_events ul, .section_mentorship .three_column').length > 0) {
            $('.section_events ul, .section_mentorship .three_column').addClass('owl-carousel');
            $('.section_events ul, .section_mentorship .three_column').owlCarousel({
                items: 1,
                // singleItem: true,    
                dots: true,
                // singleItem:true, 
                margin: 50
            });
        }
    }

    if ($('.section_mentorship .three_column.mentorCarousel').length > 0) {
        $('.section_mentorship .three_column.mentorCarousel').addClass('owl-carousel');
        $('.section_mentorship .three_column.mentorCarousel').owlCarousel({
            // singleItem: true,    
            items: 1,
            nav: true,
            dots: false,
            // singleItem:true, 
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            touchDrag: false,
            mouseDrag: false,
            loop: true,
            responsive: {
                1280: {
                    touchDrag: false,
                    nav: true,
                    dots: false
                },
                1024: {
                    touchDrag: false,
                    nav: false,
                    dots: true
                },
                320: {
                    touchDrag: true,
                    nav: false,
                    dots: true
                }
            }
        });
    }
    if ($('.tabs').length > 0) {
        $('.tabs li a').on('click', function(e) {
            e.preventDefault();
            var eleIndex = $(this).parent('li').index();
            if (!$(this).parent('li').hasClass('active')) {
                $(this).parent('li').addClass('active').siblings('li').removeClass('active');
                if (winWidth > 1024) {
                    $('.tabsContent .tab').fadeOut(300).eq(eleIndex).delay(350).fadeIn(500);
                } else if (winWidth < 1025) {
                    $('.tabsContent .tab').slideUp(300).eq(eleIndex).delay(350).slideDown(500);
                }
            }
        })
    }

    /** Appending a span for scroll down arrow starts **/

    /** Appending a span for scroll down arrow ends **/
});

// if IE browser append IE class to body

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
{
    $('body').addClass('isIE');


}

//Global Vars Starts here
var homePage = 'homePage';
var pgBody = $('body')
var bodyId = pgBody.attr('id')
//Global Vars Ends here


var homeScreenAnimation = new TimelineMax();
var introTextAnim = new TimelineMax();
var lineAnimation, introTextLines;
//Intro Text Animation
function introTextSet(section) {
    if (!mobile) {
        lineAnimation = $(section).find('.introText').find('.line');
        introTextLines = $(section).find('.introText').find('p');
        $(section).find('.textGrad').removeClass('animate');
        TweenMax.set(lineAnimation, { height: 0 });
        TweenMax.set($(introTextLines), { x: -1000 });
    }
}

function introtextAnimate(section) {
    // if (!mobile) {
    if (1) {
        introTextAnim.to($(section).find('.introText').find('.line'), 0.6, { height: $(section).find('.introText').outerHeight(), ease: Power1.easeInOut })
        for (var inl = 0; inl < $('.introText p').length; inl++) {
            introTextAnim.to($(section).find('.introText').find('p').eq(inl), 0.4, { x: 0, ease: Power1.easeInOut }, "-=0.3")
            if (inl == $('.introText p').length - 1) {
                setTimeout(function() { $(section).find('.textGrad').addClass('animate') }, 800);
            }
        }
    }
}
var svgLetterStroke, svgLetterImg, svgLetterImgLayer;

// function svgLetterSet(section) {
//     if (!mobile) {
//         // svgLetterStroke = $(section).find('.svgLetterBox').find('.fontLayer');
//         // svgLetterImg = $(section).find('.svgLetterBox').find('image');
//         // svgLetterImgLayer = $(section).find('.svgLetterBox').find('.imgLayer');

//         // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
//         // TweenMax.set(svgLetterImg, { opacity: 0 });

//         // svgLetterStroke = $('.strokefill');

//         // svgLetterChild  = svgLetterStroke.parents('svg').find('.g').children();
//         // svgLetterStroke.parents('svg').find('.g').children().css({opacity: 0})
//         // svgLetterStroke.parents('svg').find('.g').children(':last-child').css({opacity: 1,fill: 'none'})
//         // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
//         // TweenMax.set(svgLetterStroke, { 'stroke-dasharray': 1250 });

//         $(section).find('.child').css({ opacity: 0 });
//         $(section).find('.child:last-child').css({ opacity: 1 }).attr('fill', 'none');
//         TweenMax.set($(section).find('.child:last-child'), { strokeDashoffset: 1250 });
//         TweenMax.set($(section).find('.child:last-child'), { 'stroke-dasharray': 1250 });
//     }
// }

// function svgLetterAnimate(section) {
//     if (!mobile) {
//         // homeScreenAnimation.to(svgLetterStroke, 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImg, 0.4, { opacity: 1, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImgLayer, 0.4, { opacity: 1, ease: Power1.easeInOut }, "0.4");
//         // homeScreenAnimation.to(svgLetterImgLayer, 0.4, { 'fill-opacity': 1, ease: Power1.easeInOut }, "0.6");

//         homeScreenAnimation.to($(section).find('.child:last-child'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut })


//         homeScreenAnimation.to($(section).find('.child:last-child'), 0.05, { fill: 'none', ease: Power1.easeInOut });
//         homeScreenAnimation.call(function() {
//             TweenMax.to($(section).find('.svgLetterBox').find('defs').find('.removeStroke'), 0.1, { 'stroke-width': 0, ease: Power1.easeInOut }, "-=0.1");
//             TweenMax.to($(section).find('.svgLetterBox').find('.child:last-child'), 0.1, { 'stroke-width': 0, ease: Power1.easeInOut }, "-=0.1");
//         });
//         homeScreenAnimation.to($(section).find('image.child'), 0.4, { opacity: 1, ease: Power1.easeInOut }, "-=0.3");
//     }
// }

//website Initial Animations 


function headerSet() {
    TweenMax.set(navIconHolder, { y: -100 });
    TweenMax.set(CGlogo, { y: -100 });
    TweenMax.set($(siteSubnavLi), { y: -100 });
}

function headerAnim() {
    homeScreenAnimation.to(navIconHolder, 0.6, { y: 0, ease: Power1.easeInOut }, "+=0.0")
    homeScreenAnimation.to(CGlogo, 0.4, { y: 0, ease: Power1.easeInOut }, "+s=0.05")
    homeScreenAnimation.to($(siteSubnavLi[0]), 0.4, { y: 0, ease: Power1.easeInOut }, "+=0.1");
    homeScreenAnimation.to($(siteSubnavLi[1]), 0.4, { y: 0, ease: Power1.easeInOut }, "-=0.05");
    $('.navigation > ul > li .svg').each(function() {
        $(this).html('<img src="dist/images/navigation/' + $(this).attr('data-letter') + '.png" alt="" /><img src="dist/images/navigation/' + $(this).attr('data-letter') + '_hover.png" alt=""/>')
    });
}

function setGlobalAnims() {
    TweenMax.set(sectionTitle, { height: 0 });
    TweenMax.set('#sectionTitle1', { height: $('#sectionTitle1 h2').outerHeight(true) });
    headerSet();
    TweenMax.set(hmvideo, { opacity: 0 });
    hmvideoholderWid = hmvideoholder.outerWidth();
    TweenMax.set(hmvideoholder, { width: 0, overflow: 'hidden' });

    TweenMax.set(squareMove, { opacity: 0 });
    TweenMax.set(cyclinderCircle, { height: 0 });
    TweenMax.set(cylinderHolder, { opacity: 0 });
    TweenMax.set(dragSliderHolder, { opacity: 0 });
    $('.gridAppear').find('circle').css({ opacity: 0 });

    introTextSet('.sec1');
    // svgLetterSet(".sec1");
    // TweenMax.fromTo(".videoScreenHolder", 0.4, {width:"0px"}, {width:pxtovw(880),  ease:Power0.easeNone})
    headerAnim();
    $('.sec1 .hmIntroContainer').fadeIn(500);
    homeScreenAnimation.to(sectionTitle, 0.6, { height: sectionTitle.find('h2').outerHeight(), ease: Power1.easeInOut });
    if ($('#f').length > 0) {
        hmletteranimF = bodymovin.loadAnimation({
            container: document.getElementById('f'),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "dist/json/letters/f.json"
        });
        hmletteranimF.addEventListener('DOMLoaded', function() {
            hmletteranimF.playSegments([
                [0, 60]
            ], true);
            document.getElementById('f').addEventListener('mouseenter', function() {
                console.log(hmletteranimF.getDuration(true))
                hmletteranimF.playSegments([
                    [61, 85]
                ], true);
            });
            document.getElementById('f').addEventListener('mouseleave', function() {
                hmletteranimF.playSegments([
                    [86, 120]
                ], true);
            });
        });
    }
    if (mobile) {
        homeScreenAnimation.to(hmvideoholder, 0.6, { width: '110%', ease: Power1.easeInOut }, "-=1");
    } else {
        homeScreenAnimation.to(hmvideoholder, 0.6, { width: hmvideoholderWid, ease: Power1.easeInOut }, "-=1");
    }
    // homeScreenAnimation.to(hmvideoholder, 0.6, { width: pxtovw(hmvideoholderWid), ease: Power1.easeInOut }, "-=1");
    homeScreenAnimation.to(hmvideoholder, 0, { overflow: 'unset', ease: Power1.easeInOut }, "-=1");
    homeScreenAnimation.to(hmvideo, 0.6, { opacity: 1, ease: Power1.easeInOut }, "+=0");
    introTextAnim.call(function() {
        introtextAnimate('.sec1');
    }, null, null, 1);
    homeScreenAnimation.to(dragSliderHolder, 0.6, { opacity: 1, ease: Power1.easeInOut });
    homeScreenAnimation.to(squareMove, 0.6, { opacity: 0.49, ease: Power1.easeInOut });
    homeScreenAnimation.to(cylinderHolder, 0.6, { opacity: 1, ease: Power1.easeInOut });
    homeScreenAnimation.to(cyclinderCircle, 0.2, { height: pxtovw(200), ease: Power1.easeInOut });
    if ($('#plane').length > 0) {
        homeScreenAnimation.call(function() {
            if (secOnePlaneInit == '' || secOnePlaneInit == undefined) {
                secOnePlaneInit = bodymovin.loadAnimation(secOnePlane);

                secOnePlaneInit.addEventListener('DOMLoaded', function() {
                    secOnePlaneInit.playSegments([
                        [0, 95]
                    ], true)
                });
                // secOnePlaneInit.play();
                secOnePlaneInit.addEventListener('complete', function() {
                    secOnePlaneInit.pause();

                });
            }
        }, null, null, 3);
    }
    setTimeout(function() {
        $('.gridAppear').find('circle').each(function() {
            var $ths = $(this);
            setTimeout(function() {
                $ths.css({ opacity: 1 });
            }, 500);
        });
    }, 1000);

    if ($('#circleMove').length != 0) {
        if (!mobile && !isInnerpage) {
            homeScreenAnimation.call(function() {
                $('#circleMove span').css({ transform: 'scale(1)' }).delay(500);
                setTimeout(function() { $('#circleMove').addClass('animate') }, 500);
                // $('#circleMove').delay(500).addClass('animate');
                // circleMoveAnim = bodymovin.loadAnimation(circleMoveAnimData);
                // circleMoveAnim.play();
                // circleMoveAnim.addEventListener('complete', function() {
                //     circleMoveAnim.pause();
                //     $('#squareMove').addClass('squareAnim');
                //     $('#circleMove').addClass('circleAnimStart');
                //     // circleMeshAnim = bodymovin.loadAnimation(circleMeshAnimData);
                //     // circleMeshAnim.addEventListener('DOMLoaded', function(){
                //     //     circleMeshAnim.play();
                //     // });
                //     // circleMeshAnim.addEventListener('complete', function(){
                //     //     circleMeshAnim.pause();
                //     // });
                // });
            }, null, null, 2);
        }
        if (mobile && !isInnerpage) {
            $('#circleMove').html('<img src="dist/images/orange-circle.png" alt="" />')
        }
    }
    if (!isInnerpage) {
        $('.pageTitle').animate({ opacity: 1 }, 500);
    }
    if (!mobile && !isInnerpage && vid !== null) {
        var vidRepeat = setInterval(function() {
            // console.log(repeat);
            // vid.volume = 0;
            // vid.play();
            if (vid.readyState > 0) {
                // console.log(vid.ended);
                if (vid.ended && repeat != 1) {
                    // console.log(1);
                    vid.currentTime = 0;
                    vid.play();
                    repeat = 1;
                } else if (vid.ended && repeat == 1) {
                    // console.log(2);
                    vid.currentTime = 0;
                    clearInterval(vidRepeat);
                } else {
                    // console.log(3);
                    vid.play();
                }
                // if(vid.currentTime == 72.15)
                // {
                //     resetPlayer()
                // }
            }
        }, 100)

    }
    $('#sectionTitle1').css({ opacity: 1 });

    scrollAnimStart();
}

// Website Social Icons Starts Here
var socialIcons = $('.socialIcons');
var iconCircle = socialIcons.find('.iconCircle');
var iconPath = socialIcons.find('.iconPath');
var setDelay = 0;


TweenMax.set(socialIcons, { opacity: 0 });
TweenMax.set(iconPath, { scale: 0, rotation: 90, transformOrigin: "50% 50%" });


function startSocialAnims() {
    $('#social').css({ opacity: 1 });
    for (var i = 0; i < socialIcons.length; i++) {
        TweenMax.to($(socialIcons[i]), 1, { delay: setDelay - .1, opacity: 1 });
        // console.log(isInnerpage && !mobile);
        if (isInnerpage && !mobile && $('#fullpage .section.active').hasClass('sec1')) {
            TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: '#ffffff' });
            TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: '#ffffff' });
        }
        // if($('#mediaCenterPage').length)
        // {
        //     TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: '#ffffff' });
        //     TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: '#ffffff' });
        // }
        TweenMax.to($(iconCircle[i]), 1, { delay: setDelay, ease: Power3.easeIn, strokeDashoffset: 0 });
        TweenMax.to($(iconPath[i]), 0.7, { delay: setDelay, ease: Power3.easeIn, scale: 1 });
        setDelay = setDelay + 0.20;
    }
}
//Website Social Icons Ends Here


// Navigation Starts Here
var navIcon = $('#navIcon');

function onNavBtnClick() {
    var headHeigth = $('header').outerHeight();
    $('.navigation').css({ 'max-height': 'calc(100vh - ' + headHeigth + 'px)', 'margin-top': headHeigth });
    if ($('body').hasClass('navOpen')) {
        //Close Menu
        $('.navigation').fadeOut(100);
        $('.notificationBar').css({ top: '0%' });
        $('header').css({ top: $('.notificationBar').outerHeight() });
        if (isInnerpage && $('#fullpage .section.active').hasClass('sec1')) {
            $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        }
        if (isInnerpage && !$('#fullpage .section.active').hasClass('sec1')) {
            $('.logo svg .st0').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
            $('.logo svg .st1').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
        }

        setTimeout(function() {
            $('body').removeClass('navOpen reveal');
        }, 100)
    } else {
        $('.navigation').show(0);
        $('.notificationBar').css({ top: '-100%' });
        $('header').css({ top: '0' });

        setTimeout(function() {
            $('body').addClass('navOpen reveal');
        }, 100)
        if (isInnerpage) {
            $('.logo svg .st0').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
            $('.logo svg .st1').each(function() {
                $(this).attr('fill', $(this).attr('data-fill'));
            })
        }
    }
}
var navLinks = document.getElementsByClassName("navLink");

function addColor() {
    $('.hoverAnim').each(function(index) {
        var
            squareStroke = $(this).find('g:nth-child(2)').find('g:nth-child(1)').find('g:nth-child(1)').find('path'),
            arrLineStroke = $(this).find('g:nth-child(2)').find('g:nth-child(2)').find('g:nth-child(1)').find('path:nth-child(2)'),
            arrPointStroke = $(this).find('g:nth-child(2)').find('g:nth-child(3)').find('g:nth-child(1)').find('path'),
            svgColor = $(this).attr('data-fill');
        $(this).find('g:nth-child(2)').find('g:nth-child(2)').find('g:nth-child(1)').find('path').attr('fill', svgColor).attr('id', 'id' + index)
        TweenMax.set(squareStroke, { stroke: svgColor });
        TweenMax.set(arrLineStroke, { stroke: svgColor });
        TweenMax.set(arrPointStroke, { stroke: svgColor });
        // .attr('stroke',$(this).attr('data-fill'))
    });
    $('.clickAnim span').each(function() {
        $(this).css({ background: $(this).attr('dta-fill') });
    });

}

function loadnavHoverAnimation(navLinks) {
    var nohover = navLinks.getAttribute('class').indexOf('nohover');
    if (nohover == -1) {
        var animation = bodymovin.loadAnimation({
            container: navLinks.getElementsByClassName("hoverAnim")[0],
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "dist/json/menuLinkHover.json"
        });

        animation.addEventListener("DOMLoaded", function() {
            addColor();
        });

        navLinks.getElementsByTagName('a')[0].addEventListener("mouseenter", function() {
            // navLinks.getElementsByTagName('span')[0].style.opacity = 0;
            animation.play();
        });
        navLinks.getElementsByTagName('a')[0].addEventListener("mouseleave", function() {
            animation.stop();
        });
    }

    $('.navigation li a').on('click touchend', function(e) {
        if (!tablet) {
            e.preventDefault();
            if (!$(this).parents('li').hasClass('nohover')) {
                $('.logo').fadeOut();
                var target = $(this).attr('href');
                if ($(this).attr('href') == 'services.html') {
                    $('.navigation').addClass('revealServices reveal');
                }
                if ($(this).attr('href') == 'initiatives.html') {
                    $('.navigation').addClass('revealInitiatives reveal');
                }
                if ($(this).attr('href') == 'businesshub.html') {
                    $('.navigation').addClass('revealJoin reveal');
                }
                if ($(this).attr('href') == 'membership.html') {
                    $('.navigation').addClass('revealMembership reveal');
                }
                if ($(this).attr('href') == 'about.html') {
                    $('.navigation').addClass('revealAbout reveal');
                }
                $('.navIconHolder').css({ transform: 'translate(-200% , 0)' });

                setTimeout(function() { document.location.href = target }, 1000);
            }
        }
    });
    // $('.navigation a').on('click',function(e){
    //     e.preventDefault();
    // });
}

for (var i = 0; i < navLinks.length; i++) {
    loadnavHoverAnimation(navLinks[i]);
}

navIcon.on('click', onNavBtnClick);


function getPer2Px(per) {
    return ((document.getElementsByTagName('body')[0].offsetWidth / 100) * per);
}
// Navigation Ends Here

//Cyclinder Starts Here
var lineTL = new TimelineMax();
// lineTL.to('#cyclinderHolder', 1, { css: { scale: 1, rotation: -138 }, ease: Quad.easeInOut })
lineTL.to('.cyclinderCircle', 0.8, { height: pxtovw(200), ease: Power4.easeInOut });

//Cyclinder Ends Here



//Body Movin Animations Starts Here
var introData = {
    container: document.getElementById('intro'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/loader.json', // the path to the animation json
};

function introComplete() {

    // if(mobile)
    // {
    //     $('#intro').append('<p class="mobile">Mobile version of this website is coming soon. Meanwhile visit the site on desktop</p>')
    //     setTimeout(function(){
    //         $('#intro p').css({bottom: '35%'})
    //         $('#intro span').fadeOut(500);
    //     }, 500);
    // }
    // else
    // {
    introInit.stop();

    $('#intro').fadeOut('', function() { introInit.destroy(); });

    if (bodyId == homePage) {

        setGlobalAnims();
        startSocialAnims();

        //playHomeAnims();
    }
    // }
}
// setTimeout(function(){
//     $('.spinnerContainer').fadeOut(300);
if (localStorage.getItem('popState') != 'shown') {
    $(".popup-fixed").removeClass('hide');
}

$(".popup-fixed .got-it-button").click(function() {
    localStorage.setItem('popState', 'shown');
    $('.popup-fixed').fadeOut();
});

if (bodyId == homePage) {
    if (localStorage.getItem('visitied') == null || localStorage.getItem('visitied') == undefined || localStorage.getItem('visitied') == '') {
        localStorage.setItem('visitied', '10');
        setTimeout(function() {
            if ($('#intro').length) {
                introInit = bodymovin.loadAnimation(introData);
                introInit.addEventListener('DOMLoaded', function() {
                    $('#intro').addClass('active');
                    introInit.play();
                });
                introInit.addEventListener('complete', introComplete);
            }
        }, 350)
    } else {
        $('#intro').fadeOut();
        setGlobalAnims();
        startSocialAnims();
    }
}


// setTimeout(function() {
//     if ($('#intro').length) {
//         introInit = bodymovin.loadAnimation(introData);
//         introInit.addEventListener('DOMLoaded', function() {
//             $('#intro').addClass('active');
//             introInit.play();
//         });
//         introInit.addEventListener('complete', introComplete);
//     }
// }, 350)

// }, 500)
circleMeshAnimData = {
    container: document.getElementById('circleMesh'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/circle-mesh.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

fold2Illustration = {
    container: document.getElementById('illustration'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/illustration.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};


secThreeDotMesh = {
    container: document.getElementById('dotMesh'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    // path: 'dist/json/arrow-mesh.json', // the path to the animation json
    path: 'dist/json/down-arrow-v3.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};
secOnePlane = {
    container: document.getElementById('plane'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/plane.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};


circleMoveAnimData = {
    container: document.getElementById('circleMove'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/circle-move.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

scrollDownAnimData = {
    container: document.getElementById('scrollDown'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/arrow-down.json', // the path to the animation json
    rendererSettings: {

        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};



secFourWhyJoin = {
    container: document.getElementById('whyJoin'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/hm_whyJoin.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};
// secFourElementAnim = {
//     container: document.getElementById('elementAnim'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'dist/json/sec4ElementAnim.json', // the path to the animation json
//     rendererSettings: {
//         scaleMode: 'noScale',
//         clearCanvas: true,
//         progressiveLoad: true,
//         hideOnTransparent: true
//     }
// };

secFiveGetStarted = {
    container: document.getElementById('getStarted'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dist/json/getStarted.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};

// secFiveElementAnim = {
//     container: document.getElementById('sec5ElementAnim'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'dist/json/sec5ElementAnim.json', // the path to the animation json
//     rendererSettings: {
//         scaleMode: 'noScale',
//         clearCanvas: true,
//         progressiveLoad: true,
//         hideOnTransparent: true
//     }
// };

function scrollAnimStart() {
    
    homeScreenAnimation.to('.scrollDownHolder', 1.5, {
        // width: '15px',
        ease: Power4.easeIn,
        onComplete: function() {
            $('.scrollDownHolder').find('.scrollDown').addClass('animate');
            // $(".scrollDownHolder").fadeIn(200);
            // if (!isInnerpage) {
            //     scrollDownAnim.play();
            // }
        }
    }, "-=1");
}



//Body Movin Animations Ends Here


//Video Drag Slider Starts here
if ($('#dragSlider').length > 0) {
    var rangeslide = $('#dragSlider').rangeslider({
        polyfill: false,
        onSlideEnd: function(position, value) {

            if (value == 0) {
                $('.rangeslider__handle').addClass('change');
                $('.video').css({
                    position: 'fixed',
                    width: $('.videoScreenHolder').outerWidth(),
                    height: $('.videoScreenHolder').outerHeight(),
                    top: ($('.videoScreenHolder').offset().top),
                    left: ($('.videoScreenHolder').offset().left),
                    'z-index': 15
                })
                vid.pause();
                vid.currentTime = 0;
                setTimeout(function() {
                    $('.video').css({
                        '-webkit-transition': 'all 0.4s ease-in-out',
                        '-khtml-transition': 'all 0.4s ease-in-out',
                        '-moz-transition': 'all 0.4s ease-in-out',
                        '-ms-transition': 'all 0.4s ease-in-out',
                        '-o-transition': 'all 0.4s ease-in-out',
                        'transition': 'all 0.4s ease-in-out'
                    })
                    $('#plane').css({ zIndex: 1 });
                    $('.video').css({
                        width: winWidth,
                        height: $(window).height(),
                        top: 0,
                        left: 0,
                        background: '#000'
                    }).find('video').attr('src', 'dist/video/teaser.mp4').css({ opacity: 1, height: ($(window).height() - 10), width: (winWidth - 10) }).attr('controls', '').prop('muted', false);
                    $('header,#sectionTitle1,#social,.scrollDownHolder,.pageTitle, #fp-nav').fadeOut();
                    $('.video .close').fadeIn();
                    fullpage_api.setKeyboardScrolling(false);
                    fullpage_api.setAllowScrolling(false);
                    // keyboardScrolling
                    if (vid.readyState > 0) {
                        // setTimeout(function(){
                        // $('#teaserD').removeAttr('muted').attr('controls','');
                        vid.volume = 1;
                        // vid.prop('muted', false);
                        vid.play();
                        // vid.attr('controls','');
                        // },500)
                    }
                    $(document).on('keyup', function(e) {
                        if (e.keyCode === 27) {
                            $('.video .close').trigger('click');
                        }
                        console.log(e.keyCode);
                    }).on('click', '.video .close', function() {
                        $('.video').css({
                            width: $('.videoScreenHolder').outerWidth(),
                            height: $('.videoScreenHolder').outerHeight(),
                            top: ($('.videoScreenHolder').offset().top),
                            left: ($('.videoScreenHolder').offset().left),
                            background: 'none',
                            'z-index': 'unset'
                        });
                        fullpage_api.setAllowScrolling(true);
                        fullpage_api.setKeyboardScrolling(true);
                        $('.video video').css({ width: 'auto', height: '100%' }).removeAttr('controls').attr('src', 'dist/video/teaser-thumb.mp4').prop('muted', true);
                        $('header,#sectionTitle1,#social,.scrollDownHolder,.pageTitle, #fp-nav').fadeIn();
                        $('.video .close').fadeOut();
                        if (vid.readyState > 0) {
                            vid.currentTime = 0;
                            vid.volume = 0;
                            vid.play();
                        }
                        rangeslide.val(30).change();
                        $('.rangeslider__handle').removeClass('change');
                        $('#plane').css({ zIndex: 2 });
                    });
                }, 100);
            } else {
                // $('.circleMoveHolder, .squareMoveHolder').css({ transform: 'translate(0, 0)' });
                rangeslide.val(30).change();
                $('.rangeslider__handle').removeClass('change');
            }

        }
    });



    var dSHolder = $('.dragSliderHolder');
    var dragLetters = $('#dragText').find('span');
    var appendLetter;
    var endLetter;

    var letterDelay = 0;
    var tn;
    var cur;

    function animateDragLetters(pos, letter) {
        for (var i = 0; i < dragLetters.length; i++) {
            TweenMax.to($(dragLetters[i]), 0.4, { delay: letterDelay, ease: Power3.easeInOut, y: pos });
            TweenMax.to($(dragLetters[i]), 0.2, { opacity: 0 });
            appendLetter = $(dragLetters[i]).attr(letter);
            $(dragLetters[i]).html(appendLetter);
            TweenMax.to($(dragLetters[i]), 0.2, { opacity: 1 });


            letterDelay = letterDelay + 0.1;

            //if(letterDelay)
        }
    }
}


/*function setDSTBot(){
    animateDragLetters(80, 'data-endLetter');
}*/


$(dSHolder).on('mouseenter', function() {
    var dragLength = $('.rangeslider--vertical').outerHeight() - 25;
    // alert(winWidth);
    if (winWidth <= 1280 && winWidth >= 1204) {
        dragLength = 52;
        // alert(1);
    }
    animateDragLetters(dragLength, 'data-endLetter');
    letterDelay = 0;
}).on('mouseleave', function() {
    animateDragLetters(0, 'data-startLetter');
    letterDelay = 0;
});
$(dSHolder).find($('.rangeslider__fill:after')).mouseenter(function() {

    event.preventDefault()
});
//Video Drag Slider Starts here

// function frameLooper(sect) {
//     if (array.length > 0) {
//         document.getElementById(sect).innerHTML += array.shift();
//         loopTimer = setTimeout(function() { frameLooper(sect) }, 1); /* change 70 for speed */
//     } else {
//         clearTimeout(loopTimer);
//     }
//     if (array.length == 0) {
//         $('#' + sect).next('a').css({ opacity: 1 });
//     }
// }

function scrollDownAppend(index) {
    if ($(".scrollDownHolder").length && $(".scrollDownHolder").html() == '') {
        $(".scrollDownHolder").html('<div style="overflow: hidden;"><div class="scrollDown"><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="56" viewBox="0 0 15 56"><path fill="#562359" fill-rule="nonzero" d="M14.438 49.577a.694.694 0 0 0 0-.991.7.7 0 0 0-.98 0L8.431 53.61V.694A.69.69 0 0 0 7.737 0a.698.698 0 0 0-.703.694V53.61l-5.016-5.025a.711.711 0 0 0-.992 0 .694.694 0 0 0 0 .991l6.215 6.215a.683.683 0 0 0 .982 0l6.215-6.215z" /></svg></span></div></div><a href="javascript:;" id="back2Top">Top</a>');
    }


    if (isInnerpage) {
        if (index == 0) {
            $('.scrollDownHolder').removeClass('onWhite');
            $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#fff');
            $('.scrollDownHolder').removeClass('showTop');
            $('#fp-nav').fadeOut(300);
            $('#social').removeClass('onWhite');
        }
        if (index > 0 && index < ($('.fp-section').length - 1)) {

            $('.scrollDownHolder').addClass('onWhite');
            $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#562359');
            $('.scrollDownHolder').removeClass('showTop');
            $('#fp-nav, #social').fadeIn(300);
            $('#social').addClass('onWhite');
        }
        if (index == ($('.fp-section').length - 1)) {
            $('.scrollDownHolder').addClass('showTop');
            $('#fp-nav, #social').fadeOut(300);
            $('#social').removeClass('onWhite');
        }
        // console.log(122);
    }
    if (!isInnerpage && $('body').attr('id') == 'homePage') {
        // console.log(123);
        if (index == 0) {
            $('.scrollDownHolder').removeClass('onWhite');
            // $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#fff');
            $('.scrollDownHolder').removeClass('showTop');
            // $('#fp-nav').fadeOut(300);
        }
        if (index > 0 && index < ($('.fp-section').length - 1)) {

            $('.scrollDownHolder').fadeIn(300).addClass('onWhite');
            // $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#562359');
            $('.scrollDownHolder').removeClass('showTop');
            $('#fp-nav, #social').fadeIn(300);
        }
        // if(index == ($('.fp-section').length-2))
        // {
        //     $('.scrollDownHolder').fadeOut(300)
        //     $('#social').fadeOut(300);
        // }
        if (index == ($('.fp-section').length - 1)) {
            $('.scrollDownHolder').fadeIn(300).addClass('showTop');
            $('#fp-nav, #social').fadeOut(300);
        }
    }
}
scrollDownAppend();

function changeHeader(index) {
    if (index == 0) {
        $('.pageTitle').removeClass('toggle');
        $('body').addClass('whiteHeader');
        $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.4, { ease: Power3.easeIn, stroke: '#fff' });
                TweenMax.to($(iconPath[i]), 0.4, { ease: Power3.easeIn, fill: '#fff' });
            }
        }
        // $('#fp-nav').fadeOut('300');
        $('.free-consultation-floating-wrapper').removeClass('complete');
        scrollDownAppend(index);
    }
    if (index != 0 && index != ($('.fp-section').length - 1)) {
        $('.pageTitle').addClass('toggle');
        $('body').removeClass('whiteHeader');
        $('.logo svg .st0').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        $('.logo svg .st1').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        $('header, #sectionTitle1, .pageTitle').addClass('resize');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.4, { ease: Power3.easeIn, stroke: $('#social').attr('data-fill') });
                TweenMax.to($(iconPath[i]), 0.4, { ease: Power3.easeIn, fill: $('#social').attr('data-fill') });
            }
        }
        // $('#fp-nav').fadeIn('300');
        $('.free-consultation-floating-wrapper').addClass('complete');
        scrollDownAppend(index);
    }
    if (index == ($('.fp-section').length - 1)) {
        $('.free-consultation-floating-wrapper').removeClass('complete');
    }
    // if((page_name == 'businesshub.html' && index >= ($('.fp-section').length-2))  || (page_name != 'businesshub.html' && index >= ($('.fp-section').length-1)))
    // {
    //     $('#social').fadeOut(300);
    //     $('.free-consultation-floating-wrapper').removeClass('complete');
    //     // $('.scrollDownHolder').addClass('showTop');
    // }
}
introTextSet('.sec1');

function loadInitiativesBanner() {
    //Initiatives Banner animations

    var initiativesData = {
        container: document.getElementById('initiativeBanner'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'dist/json/initiatives.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    };

    initiativesAnim = bodymovin.loadAnimation(initiativesData);
    initiativesAnim.addEventListener('DOMLoaded', function() {
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
            $('.fixedBanner .loader').remove();
        });
        $('#initiativeBanner').animate({ opacity: 1 }, 500);
        $('.dots_bg > div').css({ opacity: 1 })
        $('.bannerIconsWrapper svg').each(function() {
            // $(this).parent().animate({ opacity: 1}, 500);

            // $(this).css({opacity: 0});
            TweenMax.to($('.stroke'), 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
            TweenMax.to($('.fill'), 1, { fill: '#fff', ease: Power1.easeInOut }, "0.5");

        });
        introtextAnimate('.sec1');
        $('.bannerIconsWrapper').addClass('complete')
        // $('.introText p:nth-child(1)').css({ transform: ' translate(0, 0)' })
        // setTimeout(function() { $('.introText p:nth-child(2)').css({ transform: ' translate(0, 0)' }) }, 500)
        // setTimeout(function() { $('.introText .textGrad').css({ color: '#fff' }) }, 1000);
        $('#sectionTitle1').css({ opacity: 1 })
        // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
        // })
    });
    //Initiatives Banner animations
}

function loadServicesBanner() {
    servicesBG2 = {
        container: document.getElementById('servicesBg2'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'dist/json/services-banner-btm.json', // the path to the animation json
        rendererSettings: {

            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    };
    if ($('body').attr('id') == 'services') {
        setTimeout(function() {
            $('.bg2').hide();
            servicesBG2Init = bodymovin.loadAnimation(servicesBG2)
            servicesBG2Init.addEventListener('DOMLoaded', function() {
                $('.bg2').fadeIn();
                // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
            });
        }, 3400);
    }
}
//Fullpage scroll Starts here
if ($('#fullpage').length) {
    var delay = 100; //milliseconds
    var timeoutId;
    var animationIsFinished = false;


    $('.sectionHolder .desc').each(function(index, el) {
        $(this).find('p').attr('data-text', $(this).find('p').text())
    });


    if (!mobile && !isInnerpage) {
        $('#fullpage').fullpage({
            navigation: true,
            setLockAnchors: false,
            anchors: ['home', 'club', 'initiative', 'stop', 'partners'],
            scrollDelay: 1000,
            afterRender: function() {
                // $('#fp-nav').fadeIn();
            },
            onLeave: function(origin, destination, direction) {
                var hdHei = destination.index == 0 ? 120 : 92;
                if (winWidth <= 1440) {
                    hdHei = destination.index == 0 ? 90 : 75;
                }
                if (winWidth <= 1366) {
                    hdHei = destination.index == 0 ? 85 : 62;
                }
                if (winWidth <= 1280) {
                    hdHei = destination.index == 0 ? 80 : 65;
                }

                $('header .siteSubnav').css({ top: ((hdHei - $('header .siteSubnav').outerHeight()) / 2) });
                scrollDownAppend(destination.index);
                // destination.index;
                $('#sectionTitle1 .secTitleSlide').animate({ top: -($('#sectionTitle1 .secTitleSlide h2').outerHeight(true) * destination.index) })
                var curTime = new Date().getTime();

                //animating my element
                $('#element').addClass('animate');

                clearTimeout(timeoutId);

                timeoutId = setTimeout(function() {
                    animationIsFinished = true;
                    if (!$('#plane').hasClass('complete')) {
                        $('#plane').addClass('complete')
                        if (secOnePlaneInit != undefined) {
                            secOnePlaneInit.playSegments([
                                [95, 550]
                            ], true)
                        }
                    }
                    fullpage_api.moveTo(destination.index + 1);
                }, delay);
                if (!mobile) {
                    if (destination.index != 0) {
                        $('header, #sectionTitle1, .pageTitle').addClass('resize');
                        // $('#sectionTitle1').addClass('resize');
                    } else {
                        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
                        // $('#sectionTitle1').removeClass('resize');
                    }

                }
                var illustrationFlag = 0;
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {
                    if (fold2IllustrationInit == undefined) {

                        illustrationFlag = 1;
                        fold2IllustrationInit = bodymovin.loadAnimation(fold2Illustration);
                    }
                    fold2IllustrationInit.play();

                    // svgLetterSet('.sec2');
                    introTextSet('.sec2');
                    $('#sec2descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });
                    $('#section2 .bgSquare').css({ width: 0, height: 0 });
                } else {
                    if (fold2IllustrationInit != undefined) {
                        fold2IllustrationInit.stop();
                    }
                }

                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                    // svgLetterSet('.sec3');
                    introTextSet('.sec3');
                    if (secThreeDotMeshInit == undefined) {
                        secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
                        secThreeDotMeshInit.play();
                        secThreeDotMeshInit.addEventListener('complete', function() {
                            secThreeDotMeshInit.pause();
                        });
                    } else {
                        secThreeDotMeshInit.play();
                        secThreeDotMeshInit.addEventListener('complete', function() {
                            secThreeDotMeshInit.pause();
                        });
                    }
                }
                // if($("#whyJoin").length) {
                //     destinationIndex = 3;
                // }
                //else if($("#whyJoin").length)
                if (destination.index == destinationIndex && !$('.sec4').hasClass('complete')) {
                    // if ($('.sec4').hasClass('complete')) {
                    // secFourElementAnimInit.play();
                    // secFourWHyJoinInit.play();
                    // }
                    // TweenMax.set($('#section4 .bgSquare'), { });
                    TweenMax.set($('#section4 .grid'), { opacity: 0 });
                    // svgLetterSet('.sec4');
                    introTextSet('.sec4');
                    // $('#sec4descAnim').html('').next('a').css({ opacity: 0 });
                    $('#sec4descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });

                }
                if (destination.index == destinationIndex && $('.sec4').hasClass('complete')) {
                    // secFourElementAnimInit.play();
                    secFourWHyJoinInit.play();
                }
                if (destination.index == 3) {
                    // $('#back2Top').fadeOut().siblings('#scrollDown').delay(500).fadeIn();
                }

                if (destination.index == 3 && !$('.sec7').hasClass('complete')) {
                    TweenMax.set($('#section7 .grid'), { opacity: 0 });
                    introTextSet('.sec7');
                    $('#sec7descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });

                }

                if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                    // secFourElementAnimInit.stop();
                    if (secFourWHyJoinInit != undefined) {
                        secFourWHyJoinInit.stop();
                    }

                    TweenMax.set($('#section5 .contCircle'), { transform: 'scale(0)' });
                    TweenMax.set($('#section5 .grid .rect'), { width: 0 });

                    // svgLetterSet('.sec5');
                    introTextSet('.sec5');
                    // $('#sec5descAnim').html('').next('a').css({ opacity: 0 });
                    $('#sec5descAnim').css({ opacity: 0 }).next('a').css({ opacity: 0 });
                    // $('#social').removeAttr('style');
                }
                if (destination.index == 4) {
                    // $('#social').fadeIn(500);
                }
                if (destination.index == 5) {
                    // $('.scrollDown').fadeOut().siblings('#back2Top').delay(500).fadeIn();
                    // $('#social').fadeOut(500);
                    // $('#social').fadeOut(500);
                }
                return animationIsFinished;
            },
            afterLoad: function(origin, destination, direction) {
                if (destination.index == 0 && $('.sec1').hasClass('complete')) {
                    if (vid.readyState > 0 && repeat != 1) {
                        vid.play();
                    }
                }
                if (destination.index == 1 && !$('.sec2').hasClass('complete')) {
                    $('.sec2').addClass('complete');
                    var hmletteranimB = bodymovin.loadAnimation({
                        container: document.getElementById('b'),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "dist/json/letters/home_b.json"
                    });
                    hmletteranimB.addEventListener('DOMLoaded', function() {
                        hmletteranimB.playSegments([
                            [0, 60]
                        ], true);
                        document.getElementById('b').addEventListener('mouseenter', function() {
                            console.log(hmletteranimB.getDuration(true))
                            hmletteranimB.playSegments([
                                [61, 85]
                            ], true);
                        });
                        document.getElementById('b').addEventListener('mouseleave', function() {
                            hmletteranimB.playSegments([
                                [86, 120]
                            ], true);
                        });
                    });


                    // svgLetterAnimate('.sec2');
                    introtextAnimate('.sec2');
                    $('#section2 .bgSquare').removeAttr('style')
                    // var sect = 'sec2descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    // }
                    setTimeout(function() { $('#sec2descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 }) }, 1500);
                    setTimeout(function() {
                        if (secThreeDotMeshInit == '' || secThreeDotMeshInit == undefined) {
                            secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
                        }
                    }, 1800)
                }
                //console.log("destination.index:" + destination.index);
                if (destination.index == 3 && !$('.sec7').hasClass('complete')) {
                    $('.sec7').addClass('complete');
                    var hmletteranimB = bodymovin.loadAnimation({
                        container: document.getElementById('m'),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "dist/json/letters/home_m.json"
                    });
                    hmletteranimB.addEventListener('DOMLoaded', function() {
                        hmletteranimB.playSegments([
                            [0, 100]
                        ], true);
                        document.getElementById('m').addEventListener('mouseenter', function() {
                            console.log(hmletteranimB.getDuration(true))
                            hmletteranimB.playSegments([
                                [101, 160]
                            ], true);
                        });
                        document.getElementById('m').addEventListener('mouseleave', function() {
                            hmletteranimB.playSegments([
                                [161, 210]
                            ], true);
                        });
                    });


                    // svgLetterAnimate('.sec2');
                    introtextAnimate('.sec7');
                    $('#section7 .bgSquare').removeAttr('style')
                    // var sect = 'sec2descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    // }
                    setTimeout(function() { $('#sec7descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 }) }, 1500);
                    setTimeout(function() {
                        if (secThreeDotMeshInit == '' || secThreeDotMeshInit == undefined) {
                            secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
                        }
                    }, 1800)
                }

                if (destination.index == 1 && $('.sec2').hasClass('complete')) {
                    fold2IllustrationInit.play();
                }
                if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                    $('.sec3').addClass('complete');
                    // svgLetterAnimate('.sec3');
                    var hmletteranimI = bodymovin.loadAnimation({
                        container: document.getElementById('i'),
                        renderer: "svg",
                        loop: false,
                        autoplay: true,
                        path: "dist/json/letters/i.json"
                    });
                    hmletteranimI.addEventListener('DOMLoaded', function() {
                        hmletteranimI.playSegments([
                            [0, 60]
                        ], true);
                        document.getElementById('i').addEventListener('mouseenter', function() {
                            console.log(hmletteranimI.getDuration(true))
                            hmletteranimI.playSegments([
                                [61, 85]
                            ], true);
                        });
                        document.getElementById('i').addEventListener('mouseleave', function() {
                            hmletteranimI.playSegments([
                                [86, 120]
                            ], true);
                        });
                    });

                    // letteranimI.addEventListener('DOMLoaded', function() {
                    //     console.log(letteranimI.getDuration(true));
                    //     letteranimI.playSegments([[0,180]],true);
                    // });
                    // document.getElementById('i').addEventListener("mouseenter", function() {
                    //     letteranimI.playSegments([[171,250]],true);
                    // });
                    // document.getElementById('i').addEventListener("mouseleave", function() {
                    //     letteranimI.playSegments([[250,171]],true);
                    // });

                    introtextAnimate('.sec3');
                    $('.hidebox .box').css({ margin: 0 });
                    $('.dotMesh .box').css({ width: pxtovw(175) })
                    setTimeout(function() { $('.dotMesh .box').css({ width: pxtovw(70), right: pxtovw(35, 1) }) }, 400);
                    setTimeout(function() { $('.dotMesh .box').addClass('squareAnim') }, 1200);
                    $('.initiatives .initBox:nth-child(1)').css({ transform: 'translateY(0)' });
                    setTimeout(function() { $('.initiatives .initBox:nth-child(2)').css({ transform: 'translateY(0)' }); }, 100);
                    setTimeout(function() { $('.initiatives .initBox:nth-child(3)').css({ transform: 'translateY(0)' }); }, 200);

                }
                if (destination.index == destinationIndex && !$('.sec4').hasClass('complete')) {
                    $('.sec4').addClass('complete');
                    // svgLetterAnimate('.sec4');
                    var hmletteranimJ = bodymovin.loadAnimation({
                        container: document.getElementById('j'),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "dist/json/letters/j.json"
                    });
                    hmletteranimJ.addEventListener('DOMLoaded', function() {
                        hmletteranimJ.playSegments([
                            [0, 60]
                        ], true);
                        document.getElementById('j').addEventListener('mouseenter', function() {
                            console.log(hmletteranimJ.getDuration(true))
                            hmletteranimJ.playSegments([
                                [61, 85]
                            ], true);
                        });
                        document.getElementById('j').addEventListener('mouseleave', function() {
                            hmletteranimJ.playSegments([
                                [86, 120]
                            ], true);
                        });
                    });

                    introtextAnimate('.sec4');
                    //  TweenMax.set($('#section4 .bgSquare'),{transform: 'scale(0)'});
                    // TweenMax.set($('#section4 .grid'),{opacity: 0});


                    TweenMax.to($('#section4 .bgSquare'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    TweenMax.to($('#section4 .grid'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    setTimeout(function() {
                        if (secFourWHyJoinInit == '' || secFourWHyJoinInit == undefined) {
                            $('#whyJoin').css({ opacity: 0 });
                            setTimeout(function() {
                                // secFourElementAnimInit = bodymovin.loadAnimation(secFourElementAnim);
                                // secFourElementAnimInit.addEventListener('DOMLoaded', function() {
                                // secFourElementAnimInit.play();
                                secFourWHyJoinInit = bodymovin.loadAnimation(secFourWhyJoin);
                                secFourWHyJoinInit.addEventListener('DOMLoaded', function() {
                                    secFourWHyJoinInit.play();
                                    $('#whyJoin').animate({ opacity: 1 }, 500);
                                })
                                // })
                            }, 500);
                        }
                    }, 1000);


                    // secFourElementAnimInit.addEventListener('complete', function() {
                    //     secFourWHyJoinInit.pause();
                    // });


                    // var sect = 'sec4descAnim';
                    // string = '';
                    // array = [];
                    // string = document.getElementById(sect).getAttribute('data-text');
                    // array = string.split("");
                    // document.getElementById(sect).innerHTML = '';
                    // if (!mobile) {
                    //     frameLooper(sect);
                    // } else {
                    //     $('#' + sect).html(string).next('a').css({ opacity: 1 });
                    // }
                    $('#sec4descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 });

                }
                // if (destination.index == 3 && $('.sec4').hasClass('complete')) {
                //     secFourWHyJoinInit.play();
                //     secFourElementAnimInit.play();
                // }
                // if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                //     $('.sec5').addClass('complete');
                //     // svgLetterAnimate('.sec5');
                //     var hmletteranimS = bodymovin.loadAnimation({
                //         container: document.getElementById('s'),
                //         renderer: "svg",
                //         loop: false,
                //         autoplay: true,
                //         path: "dist/json/letters/s.json"
                //     });
                //     hmletteranimS.addEventListener('DOMLoaded', function() {
                //         hmletteranimS.playSegments([[0, 60]], true);
                //         document.getElementById('s').addEventListener('mouseenter', function() {
                //             console.log(hmletteranimS.getDuration(true))
                //             hmletteranimS.playSegments([[61, 85]], true);
                //         });
                //         document.getElementById('s').addEventListener('mouseleave', function() {
                //             hmletteranimS.playSegments([[86, 120]], true);
                //         });
                //     });
                //     introtextAnimate('.sec5');

                //     secFiveGetStartedInit = bodymovin.loadAnimation(secFiveGetStarted);
                //     // secFiveGetStartedInit.play();

                //     $('#getStarted').css({ opacity: 0 });
                //     secFiveGetStartedInit.addEventListener('DOMLoaded', function() {
                //         secFiveGetStartedInit.playSegments([[0, 70]], true);
                //         // secFiveGetStartedInit.play();

                //         $('#getStarted').animate({ opacity: 1 }, 500);
                //         // secFiveElementAnimInit = bodymovin.loadAnimation(secFiveElementAnim);
                //         // secFiveElementAnimInit.addEventListener('DOMLoaded', function() {
                //         //     secFiveElementAnimInit.play();
                //         // })
                //     })
                //     // var sect = 'sec5descAnim';
                //     // string = '';
                //     // array = [];
                //     // string = document.getElementById(sect).getAttribute('data-text');
                //     // array = string.split("");
                //     // document.getElementById(sect).innerHTML = '';
                //     // if (!mobile) {
                //     //     frameLooper(sect);
                //     // } else {
                //     //     $('#' + sect).html(string).next('a').css({ opacity: 1 });
                //     // }
                //     $('#sec5descAnim').css({ opacity: 1 }).next('a').css({ opacity: 1 });
                // }
                // if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                //     secFiveGetStartedInit.play();
                //     // secFiveElementAnimInit.play();
                // }

            },

            //options here
            //autoScrolling:true,
            //scrollHorizontally: true
        });
    }
    if (!mobile && isInnerpage) {
        var anchorsObj = [];

        if (page_name == 'initiatives.html') {
            anchorsObj = ['', 'events', 'mentorship', 'battleground', ''];
        }
        if (page_name == 'businesshub.html') {
            anchorsObj = ['', 'intro', 'usp', 'network', 'benefits', '', ''];
        }
        if (page_name == 'services.html') {
            anchorsObj = [];
        }
        $('#fullpage').fullpage({
            navigation: true,
            setLockAnchors: false,
            anchors: anchorsObj,
            scrollDelay: 1000,
            afterRender: function() {
                scrollAnimStart();
                if (page_name == 'initiatives.html') {
                    loadInitiativesBanner();
                }
                if (page_name == 'services.html') {
                    $('.clmn_icon').html();
                    introTextSet($('#services .content'));
                    loadServicesBanner();
                }
                if (page_name == 'businesshub.html') {
                    // $('.clmn_icon').html();
                    // introTextSet($('#services .content'));
                    // loadServicesBanner();
                    $('#sectionTitle1').animate({ opacity: 1 }, 300);
                }
            },
            onLeave: function(origin, destination, direction) {
                if (page_name == 'businesshub.html') {
                    var whichSec = '.sec' + (destination.index + 1)
                    if (!$(whichSec).hasClass('complete')) {
                        introTextSet(whichSec);
                    }
                }
                var hdHei = destination.index == 0 ? 120 : 92;
                if (winWidth <= 1440) {
                    hdHei = destination.index == 0 ? 90 : 75;
                }
                if (winWidth <= 1366) {
                    hdHei = destination.index == 0 ? 85 : 62;
                }
                if (winWidth <= 1280) {
                    hdHei = destination.index == 0 ? 80 : 65;
                }
                $('header .siteSubnav').css({ top: ((hdHei - $('header .siteSubnav').outerHeight()) / 2) });

                $('#sectionTitle1 .secTitleSlide').animate({ top: -($('#sectionTitle1 .secTitleSlide h2').outerHeight(true) * destination.index) })
                scrollDownAppend(destination.index);
                changeHeader(destination.index);

                // (destination.index == 0) ? ($('#fp-nav').fadeOut(300)) : ($('#fp-nav').fadeIn(300));
            },
            afterLoad: function(origin, destination, direction) {
                var whichSec = '.sec' + (destination.index + 1)

                if ($('.slideUp').length > 0) {
                    $(whichSec).find('.slideUp').each(function(index) {
                        var delay = index * 0.10;
                        // $(this).css({'text-indent': 0, 'transition-delay': delay+'s'});
                        $(this).addClass('complete').css({ 'transition-delay': delay + 's' })
                    });
                }
                if (page_name == 'businesshub.html') {

                    if (destination.index == 1 && !$('.sec2').hasClass('complete')) {
                        if (!$('#why_j').hasClass('complete')) {
                            $('#why_j').addClass('complete')
                            introtextAnimate('.sec2')
                            whyJoinJAnim.playSegments([
                                [0, 60]
                            ], true);
                        }
                        document.getElementById('why_j').addEventListener('mouseenter', function() {
                            console.log(whyJoinJAnim.getDuration(true))
                            whyJoinJAnim.playSegments([
                                [60, 80]
                            ], true);
                        });
                        document.getElementById('why_j').addEventListener('mouseleave', function() {
                            whyJoinJAnim.playSegments([
                                [80, 100]
                            ], true);
                        });
                        introtextAnimate(whichSec);
                    }
                    if (destination.index == 2 && !$('.sec3').hasClass('complete')) {
                        if (!$('#why_f').hasClass('complete')) {
                            $('#why_f').addClass('complete')
                            introtextAnimate('.sec3')
                            whyJoinFAnim.playSegments([
                                [0, 100]
                            ], true);
                        }
                        document.getElementById('why_f').addEventListener('mouseenter', function() {
                            console.log(whyJoinFAnim.getDuration(true))
                            whyJoinFAnim.playSegments([
                                [120, 160]
                            ], true);
                        });
                        document.getElementById('why_f').addEventListener('mouseleave', function() {
                            whyJoinFAnim.playSegments([
                                [160, 120]
                            ], true);
                        });
                        setTimeout(function() {
                            TweenMax.to($(whichSec).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
                            TweenMax.to($(whichSec).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
                            TweenMax.to($(whichSec).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
                            TweenMax.to($(whichSec).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                            TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
                            TweenMax.to($(whichSec).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
                        }, 1000)
                    }
                    if (destination.index == destinationIndex && !$('.sec4').hasClass('complete')) {
                        if (!$('#nAbout').hasClass('complete')) {
                            $('#nAbout').addClass('complete')
                            nAboutAnim.playSegments([
                                [0, 100]
                            ], true);
                        }
                        document.getElementById('nAbout').addEventListener('mouseenter', function() {
                            console.log(nAboutAnim.getDuration(true))
                            nAboutAnim.playSegments([
                                [100, 160]
                            ], true);
                        });
                        document.getElementById('nAbout').addEventListener('mouseleave', function() {
                            nAboutAnim.playSegments([
                                [176, 200]
                            ], true);
                        });
                        introtextAnimate(whichSec);
                    }
                    if (destination.index == 4 && !$('.sec5').hasClass('complete')) {
                        sec = $('.sec5').find('.mob-hide');
                        introtextAnimate(sec);
                        if (!$('#why_b').hasClass('complete')) {
                            $('#why_b').addClass('complete')
                            introtextAnimate('.sec6')
                            whyJoinBAnimDesktop.playSegments([
                                [0, 60]
                            ], true);
                        }

                        document.getElementById('why_b_desktop').addEventListener('mouseenter', function() {
                            console.log(whyJoinBAnimDesktop.getDuration(true))
                            whyJoinBAnimDesktop.playSegments([
                                [60, 80]
                            ], true);
                        });
                        document.getElementById('why_b_desktop').addEventListener('mouseleave', function() {
                            whyJoinBAnimDesktop.playSegments([
                                [80, 100]
                            ], true);
                        });

                        $('.sec6').addClass('complete')
                    }
                    if (!$(whichSec).hasClass('complete')) {
                        $(whichSec).addClass('complete');
                    }
                }
                if (page_name == 'services.html') {
                    var whichSec = '.sec' + (destination.index + 1)
                    $(whichSec).find('.clmn_icon').css({ opacity: 1 });
                    introtextAnimate(whichSec);
                    setTimeout(function() {
                        $(whichSec).find('ul').css({ opacity: 1 });
                        $(whichSec).find('li').each(function(index) {
                            var delay = index * 0.05;
                            $(this).css({ 'text-indent': 0, 'transition-delay': delay + 's' });
                        })
                    }, 1000);
                    // TweenMax.call(function() {
                    //     introtextAnimate(whichSec);
                    // }, null, null, 1);
                    // $(whichSec).find('ul').css({opacity: 1});
                    // $(whichSec).find('li').css({'text-indent': 0});
                    // $('.content .row .introText').each(function() {
                    //     if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
                    //         // introTextSet($(this));
                    //         var currRow = $(this).parents('.row');
                    //         // svgLetterAnimate(".sec1");
                    //         // var id = $(this).siblings('.svgLetterBox').attr('id');
                    //         // console.log(id);
                    //         // if ($('#' + id).find('svg').length == 0) {
                    //         //     var letteranimser = bodymovin.loadAnimation({
                    //         //         container: document.getElementById(id),
                    //         //         renderer: "svg",
                    //         //         loop: false,
                    //         //         autoplay: false,
                    //         //         path: "dist/json/letters/" + id + ".json"
                    //         //     });
                    //         //     letteranimser.addEventListener('DOMLoaded', function() {
                    //         //         letteranimser.playSegments([[0, 60]], true);
                    //         //         document.getElementById(id).addEventListener('mouseenter', function() {
                    //         //             console.log(letteranimser.getDuration(true))
                    //         //             letteranimser.playSegments([[61, 85]], true);
                    //         //         });
                    //         //         document.getElementById(id).addEventListener('mouseleave', function() {
                    //         //             letteranimser.playSegments([[86, 120]], true);
                    //         //         });
                    //         //     });
                    //         // }



                    //         // introtextAnimate(currRow);
                    //         // if (!mobile) {
                    //         //     var id = "",
                    //         //         jsonName = $(this).parents('.row').find('.clmn_icon').attr('id');
                    //         //     // console.log($('#' + jsonName).find('svg').length);
                    //         //     if ($('#' + jsonName).find('svg').length == 0) {
                    //         //         // $('#' + jsonName).html('');
                    //         //         var animation = bodymovin.loadAnimation({
                    //         //             container: document.getElementById(jsonName),
                    //         //             renderer: "svg",
                    //         //             loop: false,
                    //         //             autoplay: true,
                    //         //             path: "dist/json/" + jsonName + ".json"
                    //         //         });
                    //         //         // animation.addEventListener('complete', function(){
                    //         //         //     $('#'+jsonName).parents('.row').addClass('complete')
                    //         //         // })
                    //         //     }
                    //         //     // serviceIconAnimate(currRow, currRow.index());
                    //         // }

                    //         for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

                    //             TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
                    //         }

                    //         $(this).parents('.row').addClass('complete');
                    //     }
                    // });
                }
            },

            //options here
            //autoScrolling:true,
            //scrollHorizontally: true
        });
    }
    //methods
    //$.fn.fullpage.setAllowScrolling(false);
    if (mobile && !isInnerpage) {
        // fullpage_api.setAutoScrolling(false);
        // fullpage_api.fitToSection(false);
        // fullpage_api.destroy('all');
        $('.section').addClass('fp-auto-height');
        $('#illustration').html('<img src="dist/images/red-line.png" alt="" />')
        // fold2IllustrationInit = bodymovin.loadAnimation(fold2Illustration);
        // secThreeDotMeshInit = bodymovin.loadAnimation(secThreeDotMesh);
        // secThreeDotMeshInit.play();
        $('#getStarted').html('<img src="dist/images/get-started.png" style="margin: 20px 0; width: 80%" alt="" />')
        secOnePlaneInit = bodymovin.loadAnimation(secOnePlane);
        secOnePlaneInit.play();
        secOnePlaneInit.addEventListener('complete', function() {
            secOnePlaneInit.pause();
        });
        plLft = ($('#illustration').offset().left);
        plTp = ($('#illustration').offset().top);
        $('#plane').css({ left: plLft, top: plTp });
        $('.initBox .icon').find('.svgFill').each(function() {
            svgFillColor = $(this).attr('data-fill');
            TweenMax.to($(this), 0.4, { fill: svgFillColor, ease: Power1.easeInOut });
        });
    }

    if (mobile) {
        introTextSet('.sec1');
        introtextAnimate('.sec1')
    }
}

//Fullpage scroll Ends here

// $.fn.playit = function() {
//     // console.log($(this).attr('class'))
//     // console.log($(this).eq(($(this).length - 1)).attr('data-frames'));
//     var frames = $(this).eq(($(this).length - 1))
//     var frVal = frames[0].dataset.frames.split(',')
//     var xyz = [];
//     var axyz = [];
//     var numConv = [];
//     for (var i = 0; i < frVal.length; i++) {
//         numConv[i] = parseInt(frVal[i])
//     }
//     // console.log(numConv)
//     xyz.push(numConv);

//     axyz.push(xyz);
//     // console.log(axyz)
//     aboutnetwork.playSegments(xyz, true);


//     // console.log($(this).eq(($(this).length - 1)).attr('data-frames'));
//     // if($(this).text() == 'Research')
//     // {
//     //     console.log(111);
//     //     aboutnetwork.playSegments([[114, 240]], true);
//     // }
//     // if($(this).text() == 'Researchdatabase')
//     // {
//     //     console.log(222);
//     //     aboutnetwork.playSegments([[240, 310]], true);
//     // }
//     // if($(this).text() == 'databasetools')
//     // {
//     //     console.log(333);
//     //     aboutnetwork.playSegments([[310, 400]], true);
//     // }

//     // console.log($(this).index());
//     // console.log($(this).text());
// };
$.fn.isInViewportCustom = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

//Services Page


// if ($(window).width() > 1024) {
//     servicesBG2 = {
//         container: document.getElementById('servicesBg2'), // the dom element that will contain the animation
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'dist/json/services-banner-btm.json', // the path to the animation json
//         rendererSettings: {

//             scaleMode: 'noScale',
//             clearCanvas: true,
//             progressiveLoad: true,
//             hideOnTransparent: true
//         }
//     };
//     if ($('body').attr('id') == 'services') {
//         setTimeout(function() {
//             $('.bg2').hide();
//             servicesBG2Init = bodymovin.loadAnimation(servicesBG2)
//             servicesBG2Init.addEventListener('DOMLoaded', function() {
//                 $('.bg2').fadeIn();
//                 // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)
//             });
//         }, 3400);
//     }
// }
if ($(window).width() <= 1024) {
    var servicesSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="150" viewBox="0 0 320 150"> <defs> <path id="a" d="M.052.177h10.994v7.025H.052z"/> <path id="c" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843"/> <path id="e" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843z"/> <path id="g" d="M8.048 2.087L.02 27.692a.338.338 0 0 0 .445.416 1.957 1.957 0 0 1 1.373-.037l3.196 1.095c.171.059.35.097.531.113 2.122.187 2.571 1.502 2.62 2.428.025.498-.12.988-.402 1.399l-.966 1.403c-.091.133-.17.274-.23.423-1.18 2.864 1.758 3.932 2.557 4.164.128.038.251.087.368.15 1.16.64 2.05.684 2.686.533a1.927 1.927 0 0 0 1.398-1.39c.196-.735.521-2.063.88-3.969.495-2.621 2.163-1.867 2.647-1.585.104.06.213.113.326.155a4.45 4.45 0 0 1 2.402 2.084.29.29 0 0 0 .33.141c.41-.108.842-.099 1.247.027l.523.163a.34.34 0 0 0 .433-.253c1.034-4.662 3.9-9.12 3.284-13.682-.145-.495-2.616-.677-2.706-2.447l-.002-1.291a5.407 5.407 0 0 1 .228-1.57c.696-2.308 1.851-4.814 3.664-4.77 3.22.186 4.241-2.11 4.956-4.5a.339.339 0 0 0-.223-.42L11.579.244a2.828 2.828 0 0 0-3.53 1.843z"/> <path id="i" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988"/> <path id="k" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988z"/> <path id="m" d="M30.332 2.018c-.067.418-.012.845.147 1.239.211.523.525 1.416.635 2.327.17 1.41-.965 2.643-2.41 2.643h-4.029c-.438 0-.873.109-1.244.338-.082.05-.166.11-.247.177A4.837 4.837 0 0 0 19.86 7.2a2.237 2.237 0 0 1-.385-.054c-.589-.133-2.546-.371-2.21 2.442.245 2.044.339 3.493.374 4.3a2.032 2.032 0 0 1-.989 1.85c-.604.353-1.534.59-2.932.307a1.978 1.978 0 0 0-.426-.036c-.906.016-4.334-.142-3.96-3.521.012-.12.04-.238.076-.353l.589-1.878a2.02 2.02 0 0 0 .013-1.176c-.277-.94-1.11-2.43-3.589-1.886-.167.037-.34.052-.511.048L2.23 7.14C1.04 7.106.057 8.044.057 9.213v18.704c0 1.145.945 2.073 2.111 2.073H21.93c.484 0 .922-.16 1.273-.422.393.267.869.422 1.376.422h18.897c1.339 0 2.424-1.066 2.424-2.381V11.165c0-1.226-.947-2.251-2.189-2.37l-5.269-.505c-.666-.064-1.288-.385-1.684-.916-.316-.424-.5-.993-.154-1.673 0 0 2.755-5.726-2.208-5.472a2.536 2.536 0 0 1-.736-.067A4.422 4.422 0 0 0 32.625.03c-.93 0-2.034.361-2.293 1.988z"/> <path id="o" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01"/> <path id="q" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01z"/> <path id="s" d="M18.156.124l-12.501.97c-.61.047-1.07.57-1.04 1.18.105 2.075-.248 4.045-2.822 4.902C.216 7.76.06 10.274.246 12.51c.05.587.193 1.162.413 1.709l.408 1.01c.703 1.521 2.937.817 3.24 1.2 2.036 3.585 1.295 8.182 1.836 12.44.076.593.61 1.02 1.21.974l.175-.014c2.27-.176 3.657-2.573 2.663-4.613l-.015-.029a2.103 2.103 0 0 1-.215-1.088c.16-2.037 1.927-2.003 2.715-1.884.26.039.525.043.786.013 4.242-.5 2.248 4.712 2.248 4.712-.256.627-.056 1.119.25 1.474.384.443.951.686 1.538.697l4.65.09c.121.003.24.015.355.037a1.124 1.124 0 0 0 1.324-1.194L21.89 3.304c-.142-1.806-1.672-3.19-3.463-3.19-.09 0-.18.004-.27.01z"/> </defs> <g fill="none" fill-rule="evenodd"> <path fill="#0F385C" d="M78.558 31.16c-2.965.507-5.47.494-7.887.228-3.477-.384-7.736-2.668-9.238-6.632-.718-1.89-1.912-3.54-3.45-4.624-5.354-3.777-11.515.46-12.127 3.907-2.29 12.903 8.859 35.01 26.503 39.41 3.835.957 18.584 1.074 23.69-9.956 2.27-4.9 2.486-7.05.47-12.172-2.943-7.475-10.918-11.366-17.96-10.162"/> <path fill="#FAB9AF" d="M57.218 26.768c-.145.56-1.278 7.144-2.477 7.754.25.322 3.818 3.123 4.5 5.496 1.574 1.514 5.669-1.25 4.701-5.067-4.042-.158-5.758-6.431-6.724-8.183M39.774 81.045c-.107.266.94.97 1.225.985.695-.168.595-.575 1.27-.638-.595-.03-1.216-.191-1.776-.403-.3-.137-.59-.372-.72.056"/> <path fill="#FAB9AF" d="M43.755 79.402c-.522.432-1.04.936-1.522 1.467-.576.62-1.705 2.154-1.784 2.261-.212.325-.848 1.069-.934 1.362-.056.187.005.758.148.95.19.256.523.143.523.143.177.374 1.014-.242 1.037-.14.094.413.687.41 1.542-.811.051-.073 2.744-2.656 3.537-3.552-.51-.532-2.515-1.702-2.547-1.68M64.773 43.839c.385-1.157-5.574-2.028-5.806-1.468-1.278 3.083-3.012 13.253-4.664 18.238-2.026 6.115 3.543 4.678 4.163 3.696 3.394-7.487 3.921-13.307 6.307-20.466"/> <path fill="#C96B86" d="M58.141 42.381c-1.582 1.744-2.085 9.614-3.652 14.5 1.839 1.52 2.855 2.271 5.986 2.49 2.771-5.422 3.672-12.817 3.5-14.686-.437-4.81-3.594-4.77-5.834-2.304"/> <path fill="#FAB9AF" d="M54.756 61.223a2.21 2.21 0 0 0-.492.476c-2.102 2.933-8.003 15.14-10.678 17.846 1.042.67 1.864 1.297 2.388 1.885C50.285 76.892 59.75 64.376 58.5 62.21c-1.147-1.987-2.824-1.65-3.743-.987"/> <path fill="#B1516D" d="M106.522 140.309l-2.66-.685s-.322.95-.62 1.585c-.577 1.228-6.317 3.146-5.939 4.566.191.717 3.76.847 5.002.567 1.24-.278 2.12-.669 2.852-1.2.796-.58 2.134-1.55 2.279-2.062.251-.89-.346-1.684-.346-1.684-.1-.496-.568-1.087-.568-1.087"/> <path fill="#FAB9AF" d="M102.124 137.825s1.696 2.388 1.118 3.385c0 0-1.897 1.865-.81 1.995 1.617.194 4.658-1.81 4.658-1.81-.082-.827-2.005-6.649-2.005-6.649l-2.96 3.08z"/> <path fill="#B1516D" d="M73.305 139.326l-2.404-1.494s-.163 1.445-1.104 1.876c-.738 1.137-6.638 3.223-6.457 4.68.092.737 3.44.485 4.707.378 1.266-.106 2.808-.652 3.48-1.101.818-.547 1.89-1.049 2.103-1.536.371-.848-.195-1.712-.195-1.712.032-.831-.13-1.091-.13-1.091"/> <path fill="#FAB9AF" d="M69.758 135.908s1.036 2.74.225 3.558c0 0-2.6 2.233-1.509 2.485 1.588.368 4.991-1.335 4.991-1.335.13-.821-.064-6.934-.064-6.934l-3.643 2.226zM56.738 25.303c-1.667-2.86-4.952-4.134-7.835-2.448-2.682 1.571-4.759 3.855-3.682 6.669.386 1.007 6.62 8.393 11.057 6.942 2.11-.69 3.447-6.035 2.19-8.193l-1.73-2.97"/> <path fill="#0F385C" d="M54.323 18.419c-5.797-1.645-10.005 3.876-8.394 6.074-4.21 2.249.663 9.665 3.24 9.242-4.05-3.977.896-9.045.896-9.045 1.682 1.102 3.07-.285 4.864.65 2.695 1.404 2.003.488 2.609.966 0 0 3.347-6.026-3.215-7.887"/> <path fill="#FAB9AF" d="M54.783 23.767c-.233.216.046 1.07-.085 1.593.939.634 2.137.962 2.967 1.383.429-.686-.157-1.692-.689-2.273-.563-.614-1.58-1.268-2.193-.703"/> <path fill="#FA978D" d="M53.608 34.43a.18.18 0 0 0 .135.08.964.964 0 0 0 .66-.18c.33-.233.349-.436.334-.53a.15.15 0 0 0-.045-.085l-1.652-1.64a.195.195 0 0 0-.155-.053c-.118.01-.31.032-.376.083-.053.04-.107.171-.14.262a.18.18 0 0 0 .014.16l1.225 1.904z"/> <path fill="#A6425F" d="M77.817 73.24L66.71 100.486c-.73 1.512-.072 3.903 1.485 4.525 2.5 1 6.256.69 8.784-4.55 2.95-6.112 9.462-15.217 12.948-19.93a10.185 10.185 0 0 0 1.909-7.462c-.385-2.757-1.856-7.23-3.224-7.931-2.762-1.416-12.007 4.804-10.795 8.102"/> <path fill="#A6425F" d="M73.969 137.648l1.669-37.834s-8.263-4.324-9.443 2.937c-.75 4.611 3.745 35.876 3.745 35.876l4.029-.979z"/> <path fill="#963E60" d="M95.646 98.385l5.983-23.74s2.564-6.732-1.995-13.91c-4.558-7.18-10.973-.81-10.973-.81s-2.54 33.669-2.539 37.848c0 .312.56 1.81.764 2.095.79 1.067 1.63 1.796 3.094 1.756 0 0 4.608.187 5.666-3.24"/> <path fill="#B95572" d="M83.217 45.893c-4.336-7.869-6.257-10.79-13.36-11.658-1.36-.166-6.367.676-6.367.676s-.54 3.432-1.95 4.643c-.97.832-2.383.174-2.383.174s-2.78 4.117-2.886 5.075c-.058.529 2.024 3.195 2.43 6.662.823 7.05 12.076 6.67 14.15 8.762 3.967 3.998 3.12 8.57 4.765 14.081 9.582-1.017 16.955-7.459 21.268-16.537-5.233-5.627-11.102-3.592-15.667-11.878"/> <path fill="#B1516D" d="M107.519 146.468s-.224-1.794-.102-3.691c.026-.412-.794.755-.794.755l.489 3.12.427-.02-.02-.164zM73.725 144.603s-.224-1.795-.102-3.692c.026-.411-.794.755-.794.755l.489 3.12.427-.02-.02-.163z"/> <path fill="#963E60" d="M94.641 96.125c.603.588 1.522 2.74 1.708 3.099l10.437 38.8-4.558.98L87 100.302c-.849-2.967.146-3.752.552-4.323 2.187-3.818 5.92-.997 7.09.146"/> <path fill="#A6425F" d="M177.389 144.74s-1.345.664-3.591.854l.36 3.099s1.598.04 2.631-.227l.328-.842.938.758s5.076.062 7.647-.386c0 0 .21-.937-1.064-1.226-1.274-.29-4.141-.574-4.983-.95-.842-.376-2.266-1.08-2.266-1.08"/> <path fill="#FFCBB9" d="M173.11 140.517l.53 3.893.164 1.188c2.155.442 3.583-.854 3.583-.854l-.09-1.263-.242-3.287-3.945.323z"/> <path fill="#963E60" d="M169.57 98.02c-.32.39-.619 1.724-.563 2.154.77 5.917 3.2 35.17 3.254 42.107l5.643-.535s.546-31.197 1.311-41.672c.026-.36-1.728-1.614-2.108-2.163-.693-.435-2.151-1.498-2.772-1.677-2.399-.315-3.012.02-4.766 1.786"/> <path fill="#963E60" d="M171.7 63.097l-1.24-.923s-18.554-1.798-17.719 1.398c.952 3.638.396 5.5 2.029 9.495 3.163 7.739 9.045 17.801 14.492 27.564.412.737 2.372 4.505 3.205 4.637 1.458.232 2.267.325 4.112-.134 1.023-.53 3.46-1.615 2.4-6.68l-7.278-35.357z"/> <path fill="#E6F7FF" d="M173.64 144.41l.164 1.188c2.155.442 3.583-.854 3.583-.854l-.09-1.263c-.994.281-2.682.748-3.657.93"/> <path fill="#A6425F" d="M167.34 60.603a.593.593 0 0 1-.186.017c-2.498-.195-13.034-.267-14.448 1.9l.291 15.053c-.145 3.634.83 17.2.405 21.027-.271 2.437.47 4.86 2.593 6.08l.05.029c.043.024.09.046.138.057.755.18 2.495.843 4.197-.105.114-.063.702-1.143.752-1.264 2.17-5.157 2.893-9.705 4.161-13.59 0 0 4.36-21.156 3.898-25.34l-1.3-3.633-.551-.231z"/> <g transform="translate(138.614 142.798)"> <mask id="b" fill="#fff"> <use xlink:href="#a"/> </mask> <path fill="#A6425F" d="M4.604.853S3.106.913.975.177l-.923 2.98s1.447.685 2.499.859l.64-.637.55 1.075s4.618 2.115 7.15 2.748c0 0 .57-.772-.478-1.552-1.048-.781-3.555-2.205-4.173-2.89C5.622 2.075 4.604.853 4.604.853" mask="url(#b)"/> </g> <path fill="#FFCBB9" d="M141.007 138.047l-1.085 3.769-.334 1.167c1.801 1.272 3.628.674 3.628.674l.472-1.328 1.063-2.975-3.744-1.307z"/> <path fill="#E6F7FF" d="M139.922 141.816l-.334 1.167c1.801 1.272 3.628.674 3.628.674l.472-1.328c-.93-.147-2.535-.395-3.766-.513"/> <path fill="#A6425F" d="M154.133 98.67c-.402.228-1.264 2.031-1.389 2.478l-.002.007c-2.864 10.208-13.03 37.93-13.03 37.93l5.6 1.878s11.04-26.327 15.356-36.472c.093-.218.297-.912.315-1.148.05-.632-.118-.756-.01-1.602a1.268 1.268 0 0 0-.167-.803c-.46-.782-.978-1.68-1.424-1.827-1.503-.85-3.513-1.43-5.249-.442"/> <path fill="#FAB9AF" d="M185.646 48.161s5.426.903 5.818.85c.393-.055 2.627-1.095 3.772-.84.849.188 2.3.432 2.56.65.26.216-.941.377-1.208.341-.267-.036-.948.347-.975.423-.027.078 1.828.072 2.652.206.824.134 1.28.332 1.3.463.018.13-1.45.307-1.914.29-.462-.018 1.68.188 2.156.49.476.304-1.801.454-2.384.381-.582-.075 2.14.16 2.349.426.21.267-2.236.46-2.868.409-.632-.05 1.9.02 2.064.208.164.188-2.704.63-3.706.66-.93.03-2.02.146-4.116-1.155-.385-.238-5.398.14-5.398.14l-.102-3.942z"/> <path fill="#A6425F" d="M164.241 32.023s1.305-3.8 3.268-3.02c1.524.607 11.64 14.78 14.37 16.972.78.628 7.34 1.363 7.34 1.363s1.074 2.674.305 5.364c-.268.937-9.496-.864-10.25-1.189-3.829-1.65-9.195-10.957-9.195-10.957l-5.838-8.533z"/> <path fill="#AF526D" d="M203.947 58.27a5.476 5.476 0 0 1 .228-1.58c.697-2.326 1.854-4.85 3.67-4.805 3.225.187 4.247-2.127 4.963-4.533a.342.342 0 0 0-.224-.424l-20.035-6.274a2.83 2.83 0 0 0-3.536 1.857l-8.04 25.793c-.084.272.183.526.446.419a1.95 1.95 0 0 1 1.376-.038l3.2 1.103c.171.06.35.099.532.115 2.124.188 2.575 1.513 2.623 2.446.026.5-.119.995-.402 1.408l-.968 1.414c-.091.133-.17.276-.23.426-1.182 2.885 1.76 3.96 2.561 4.195.128.037.251.087.368.152 1.161.643 2.054.688 2.69.535.688-.165 1.218-.713 1.4-1.399.196-.74.523-2.079.882-3.998.495-2.641 2.166-1.881 2.65-1.597.105.06.214.114.327.155a4.465 4.465 0 0 1 2.405 2.1.29.29 0 0 0 .331.142c.41-.109.844-.1 1.249.027l.523.164a.34.34 0 0 0 .434-.254c1.035-4.696 3.906-9.188 3.289-13.783-.146-.498-2.62-.682-2.71-2.465l-.002-1.3z"/> <g> <g transform="translate(181 40)"> <mask id="d" fill="#fff"> <use xlink:href="#c"/> </mask> <path fill="#FDC149" d="M38.644 24.156c.332-5.599-2.671-11.272-7.607-14.43a14.598 14.598 0 0 0-2.559-1.33 14.31 14.31 0 0 0-8.812-.69 1.203 1.203 0 0 0-.796 1.729l1.55 2.947c2.16-.578 4.402-.39 6.47.538.465.22.923.464 1.366.754 3.451 2.215 5.61 6.283 5.375 10.112-.31 5.53-2.283 8.336-4.354 11.29l-.792 1.147-.072.105 4.176 1.3a1.175 1.175 0 0 0 1.342-.47c1.338-1.915 2.747-4.137 3.681-7.115.529-1.685.907-3.62 1.032-5.887" mask="url(#d)"/> </g> <g transform="translate(181 40)"> <mask id="f" fill="#fff"> <use xlink:href="#e"/> </mask> <path fill="#FDC149" d="M29.278 34.69c2.07-2.954 4.044-5.76 4.353-11.29.235-3.83-1.924-7.897-5.375-10.112-.443-.29-.9-.534-1.366-.755-2.067-.928-4.31-1.116-6.47-.537-.729.194-1.447.475-2.146.846l-6.964 3.635a3.6 3.6 0 0 0-1.535 4.894l.924 1.758c.909 1.727 3.075 2.604 5.24 1.377 1.238-.704 2.686-1.267 4.127-.185-.99.807-2.1 1.425-3.304 1.86a13.333 13.333 0 0 0-8.283 8.572l-.795 2.534c.43-.025.87.024 1.306.16l18.538 5.77c.2.063.392.142.574.234l-.256-.87c-1.031-3.504-.32-5.336.567-6.64l.072-.104.793-1.148z" mask="url(#f)"/> </g> <g transform="translate(181 40)"> <mask id="h" fill="#fff"> <use xlink:href="#g"/> </mask> <path fill="#963E60" d="M8.99 37.447a3.654 3.654 0 0 0-1.306-.16 3.634 3.634 0 0 0-3.255 2.54l-.748 2.387a1.197 1.197 0 0 0 .796 1.515l23.172 7.213a1.203 1.203 0 0 0 1.52-.794l.748-2.386a3.617 3.617 0 0 0-2.39-4.545L8.99 37.447z" mask="url(#h)"/> </g> </g> <g> <path fill="#B95572" d="M163.772 25.17s-5.956.318-9.497 4.979c-5.285 10.994-1.704 28.01-1.105 33.657 0 0 11.175 4.433 19.57.26 0 0 1.878-17.603 1.518-22.267-.36-4.664-4.763-15.77-10.486-16.628"/> <path fill="#FAB9AF" d="M165.732 20.818s-.727 4.848-.03 7.554a1.051 1.051 0 0 1-.68 1.24c-1.97.674-4.608-1.96-5.902-2.856-.27-1.518.495-7.457.495-7.457l6.117 1.519z"/> <path fill="#FAB9AF" d="M170.814 8.258s-1.64-.195-.183 2.275c.71 1.2-.298 5.774-.298 5.774s-1.712 6.352-4.065 5.858c-2.355-.492-6.473-.218-7.222-1.642-.75-1.424-1.979-11.06 2.086-12.648 4.065-1.588 9.682.383 9.682.383"/> <path fill="#FA978D" d="M170.022 16.847s.228.272.657.254c.506-.021.531-.296.531-.296l-.48-2.218s-.292-.178-.405-.17c-.094.008-.303.19-.303.19v2.24z"/> <path fill="#0F385C" d="M173.498 7.512c0 2.154-1.84 3.451-3.59 3.662-1.137.136-2.274-.054-3.402-.254-1.902-.339-3.445 1.883-3.823 3.525-.428 1.862 1.444 4.873 3.102 3.888 1.659-.986 4.173-1.04 4.173-1.04s.963 1.259.482 3.449c-.482 2.19-5.884 2.355-7.542.931-1.659-1.424-1.017-5.202-2.14-6.626-1.124-1.423-2.153.739-2.087 1.37.092.88 1.567 1.514 1.567 1.514l-.998 4.827c-2.14-1.588-5.079-14.009-.02-14.872 1.012-3.625 5.57-3.849 7.996-3.852 0 0 6.282.026 6.282 3.478"/> <path fill="#FFF" d="M165.513 29.168l-6.46-2.402 6.115 4.956zM165.513 29.168l2.82 1.735-2.997-5.206z"/> <path fill="#A6425F" d="M168.333 30.903l-2.82-1.735-.345 2.554 1.968.906z"/> <path fill="#A6425F" d="M167.462 31.755s2.867 3.82 2.867 13.398c0 1.124-1.486 2.81-1.486 2.81l-1.992-2.716s.092-11.573-.411-13.492c-.504-1.918 1.022 0 1.022 0"/> <path fill="#FAB9AF" d="M163.845 52.855c1.61.771 4.454 1.8 4.454 1.8s1.448-1.287 2.058-1.343c.61-.056 2.294.755 2.667.956.374.202-.496.504-.978.29-.164-.072-1.225-.323-1.42-.14-.197.183 1.71.553 2.755.868 1.044.314 2.635 1.108 2.59 1.291-.099.405-1.791-.266-2.07-.368-.309-.113-1.142-.208-1.142-.208s.45.771-.04.916c0 0 .023.808-.415.811 0 0-.22.626-.902.547-.682-.079-2.481.147-3.54-1.194 0 0-4.572-.63-5.953-1.687-1.381-1.057.327-3.31 1.936-2.539"/> <path fill="#A6425F" d="M160.714 37.632c-1.165 3.295-2.348 9.569-2.611 11.203-.341 2.12 6.036 2.521 6.036 2.521l-.048 5.821s-8.227-1.722-10.281-3.38c-1.553-3.052-1.91-13.12.098-18.805 1.38-3.903 4.683-5.821 6.682-3.343 1.376 1.705.44 5.094.124 5.983"/> <path fill="#FDC149" d="M48.17 81.475c-6.71 0-12.15 5.416-12.15 12.097 0 6.68 5.44 12.097 12.15 12.097s12.15-5.416 12.15-12.097c0-6.681-5.44-12.097-12.15-12.097"/> <path stroke="#FFF" stroke-width="3" d="M48.17 83.895c-5.368 0-9.72 4.332-9.72 9.677 0 5.344 4.352 9.677 9.72 9.677s9.72-4.333 9.72-9.677c0-5.345-4.352-9.677-9.72-9.677z"/> <path fill="#FFF" d="M48.704 92.658c-1.27-.537-1.637-.862-1.637-1.448 0-.47.337-1.018 1.287-1.018.84 0 1.485.35 1.49.353a.448.448 0 0 0 .22.058.444.444 0 0 0 .414-.299l.23-.622a.392.392 0 0 0-.197-.495c-.517-.238-1.528-.422-1.538-.424-.017-.003-.073-.016-.073-.085l-.003-.903a.487.487 0 0 0-.48-.493h-.414a.487.487 0 0 0-.48.493l.002.95c0 .072-.075.104-.102.11-1.276.32-2.074 1.307-2.074 2.55 0 1.551 1.215 2.252 2.527 2.778 1.05.434 1.477.875 1.477 1.52 0 .704-.606 1.195-1.474 1.195-.741 0-1.744-.496-1.755-.5a.45.45 0 0 0-.626.262l-.22.629a.418.418 0 0 0 .197.51c.616.339 1.808.537 1.861.546.015.002.087.029.087.099v.945c0 .272.215.493.48.493h.428c.264 0 .48-.22.48-.493v-.994c0-.094.064-.102.078-.105 1.36-.322 2.197-1.372 2.197-2.69 0-1.352-.713-2.227-2.382-2.922"/> <path fill="#FAB9AF" d="M57.753 88.881c.145.248 1.349-.083 1.546-.288.326-.635.587-1.014.471-1.45-.41.43-1.065.871-1.59 1.158-.3.14-.65.196-.427.58"/> <path fill="#FAB9AF" d="M58.791 88.574c-.375.748-.993 2.536-1.036 2.661-.102.373-.234 1.067-.347 1.743-.073.432.283.766.638.415.51-.505.325.28.491.365.548.283.773-.754.918-.375.282.742.87.343 1.338-1.065.411-1.234 1.658-3.495 2.16-4.567-1.143-1.09-2.53-1.234-2.554-1.205-.392.543-1.296 1.392-1.608 2.028M67.198 45.122c-.418 3.294-.131 12.485-.408 17.7-.337 6.398 4.266 4.348 4.997 2.443 1.923-5.014 2.055-19.515-.453-20.777-1.087-.547-4.06.037-4.136.634"/> <path fill="#C96B86" d="M67.307 41.482c-1.518 1.79-.422 9.915-.64 15.013 1.84.953 4.476 1.892 7.304.656 1.24-5.928 1.287-13.855-.935-16.05-2.665-2.633-3.999-1.66-5.729.38"/> <path fill="#FAB9AF" d="M67.292 64.12c-.162.198-.28.403-.35.587-1.254 3.365-4.675 18.539-6.543 21.839a9.614 9.614 0 0 1 2.554 1.204c2.963-5.488 10.36-21.452 8.21-23.671-1.59-1.641-3.16-.837-3.87.04"/> <path fill="#274388" d="M216.057 76.011h38.162a3.674 3.674 0 0 1 3.682 3.666v46.297h-45.526V79.677a3.674 3.674 0 0 1 3.682-3.666"/> <path fill="#AF526D" d="M255.727 114.658l-5.233-.508c-.661-.064-1.28-.388-1.672-.922-.314-.427-.497-.999-.153-1.683 0 0 2.736-5.763-2.193-5.508a2.487 2.487 0 0 1-.731-.068c-.83-.206-2.935-.486-3.305 1.868-.067.42-.012.851.146 1.247.21.527.521 1.426.63 2.342.17 1.418-.958 2.661-2.392 2.661h-4.002c-.435 0-.867.109-1.235.34-.082.05-.165.11-.246.178a4.776 4.776 0 0 0-3.301-1.552 2.227 2.227 0 0 1-.382-.054c-.585-.134-2.529-.374-2.195 2.457.244 2.058.336 3.516.372 4.329a2.052 2.052 0 0 1-.983 1.86c-.6.356-1.524.594-2.912.31a1.939 1.939 0 0 0-.423-.036c-.9.016-4.304-.143-3.933-3.544.013-.12.04-.24.077-.355l.584-1.89a2.06 2.06 0 0 0 .013-1.184c-.275-.946-1.103-2.446-3.564-1.898a2.063 2.063 0 0 1-.508.048l-3.655-.104a2.092 2.092 0 0 0-2.156 2.086v18.825c0 1.153.938 2.087 2.096 2.087h19.625c.48 0 .916-.16 1.264-.424.39.268.863.424 1.367.424h18.766a2.402 2.402 0 0 0 2.408-2.397v-16.55c0-1.233-.94-2.265-2.174-2.385"/> <path fill="#345287" d="M250.312 97.117c-1.444-5.685-6.292-10.41-12.3-12.027a15.782 15.782 0 0 0-3.017-.53c-3.223-.278-6.395.43-9.154 2.047-.722.429-.85 1.39-.258 1.97l3.739 3.664 12.635 19.607c.232.353.645.58 1.083.58h5.415c.567 0 1.057-.353 1.212-.884.748-2.324 1.47-4.977 1.47-8.237 0-1.844-.232-3.89-.825-6.19"/> <path fill="#345287" d="M246.22 120.514l-.876-1.289c-2.218-3.259-2.012-5.33-1.496-6.923l.438-1.39c1.16-3.587 2.27-6.998.825-12.607-.98-3.892-4.46-7.277-8.663-8.414a12.362 12.362 0 0 0-1.625-.329c-3.197-.379-6.292.657-8.638 2.982l-5.905 5.786a3.714 3.714 0 0 0 0 5.357l1.495 1.465c1.47 1.44 3.946 1.642 5.75-.253 1.032-1.086 2.322-2.097 4.127-1.465a11.822 11.822 0 0 1-2.76 2.88c-3.558 2.603-5.672 6.746-5.672 11.117v3.79c0 .708.567 1.264 1.289 1.264h20.629c1.031 0 1.65-1.137 1.082-1.971"/> <path fill="#345287" d="M245.223 119.958h-20.628c-2.14 0-3.868 1.693-3.868 3.79v2.61c0 .709.567 1.264 1.29 1.264h25.785c.722 0 1.289-.555 1.289-1.263v-2.611c0-2.097-1.727-3.79-3.868-3.79"/> <path fill="#AF526D" d="M255.727 114.658l-5.233-.508c-.661-.064-1.28-.388-1.672-.922-.314-.427-.497-.999-.153-1.683 0 0 2.736-5.763-2.193-5.508a2.487 2.487 0 0 1-.731-.068c-.83-.206-2.935-.486-3.305 1.868-.067.42-.012.851.146 1.247.21.527.521 1.426.63 2.342.17 1.418-.958 2.661-2.392 2.661h-4.002c-.435 0-.867.109-1.235.34-.082.05-.165.11-.246.178a4.776 4.776 0 0 0-3.301-1.552 2.227 2.227 0 0 1-.382-.054c-.585-.134-2.529-.374-2.195 2.457.244 2.058.336 3.516.372 4.329a2.052 2.052 0 0 1-.983 1.86c-.6.356-1.524.594-2.912.31a1.939 1.939 0 0 0-.423-.036c-.9.016-4.304-.143-3.933-3.544.013-.12.04-.24.077-.355l.584-1.89a2.06 2.06 0 0 0 .013-1.184c-.275-.946-1.103-2.446-3.564-1.898a2.063 2.063 0 0 1-.508.048l-3.655-.104a2.092 2.092 0 0 0-2.156 2.086v18.825c0 1.153.938 2.087 2.096 2.087h19.625c.48 0 .916-.16 1.264-.424.39.268.863.424 1.367.424h18.766a2.402 2.402 0 0 0 2.408-2.397v-16.55c0-1.233-.94-2.265-2.174-2.385"/> </g> <g> <g transform="translate(212 106)"> <mask id="j" fill="#fff"> <use xlink:href="#i"/> </mask> <path fill="#FDC149" d="M37.97-8.677c-1.463-5.778-6.378-10.58-12.469-12.224a15.96 15.96 0 0 0-3.058-.54c-3.268-.282-6.483.437-9.28 2.08-.732.437-.863 1.414-.262 2.004l2.543 2.498c2.034-1.268 4.4-1.785 6.824-1.497.55.077 1.099.18 1.647.334 4.261 1.156 7.79 4.597 8.784 8.552 1.464 5.702.34 9.169-.837 12.816l-.444 1.412a9.166 9.166 0 0 0-.04.129h4.71a1.26 1.26 0 0 0 1.229-.9c.758-2.362 1.49-5.059 1.49-8.371 0-1.875-.235-3.956-.837-6.293" mask="url(#j)"/> </g> <g transform="translate(212 106)"> <mask id="l" fill="#fff"> <use xlink:href="#k"/> </mask> <path fill="#FDC149" d="M32.254 4.96c1.176-3.646 2.3-7.113.836-12.814-.993-3.955-4.522-7.397-8.783-8.552a12.488 12.488 0 0 0-1.647-.334c-2.425-.288-4.79.228-6.825 1.496-.685.427-1.333.939-1.932 1.534L7.917-7.829a3.782 3.782 0 0 0 0 5.445l1.516 1.49c1.49 1.463 4 1.669 5.83-.257 1.045-1.105 2.352-2.132 4.182-1.49A12 12 0 0 1 16.648.287c-3.608 2.645-5.751 6.857-5.751 11.3v2.818c.433-.16.902-.25 1.394-.25h20.913c.227 0 .449.02.665.056l-.543-.8c-2.19-3.227-2.049-5.308-1.557-6.909l.04-.129.445-1.412z" mask="url(#l)"/> </g> <g transform="translate(212 106)"> <mask id="n" fill="#fff"> <use xlink:href="#m"/> </mask> <path fill="#FDC149" d="M12.29 14.155c-.49 0-.96.09-1.393.25-1.48.551-2.527 1.954-2.527 3.602v2.654c0 .72.575 1.284 1.307 1.284h26.14c.733 0 1.308-.565 1.308-1.284v-2.654c0-1.908-1.405-3.486-3.256-3.796a4.033 4.033 0 0 0-.666-.056H12.291z" mask="url(#n)"/> </g> </g> <g> <path fill="#FFCBB9" d="M297.866 141.878l-3.554-35.662c-2.15-11.786-1.238-29.676-.412-34.912a5.25 5.25 0 0 1 4.63-4.395c3.39-.316 6.303 2.437 6.113 5.833-.083 1.487-1.354 3.686-1.755 5.725-1.563 7.96-2.443 63.37-2.464 63.38l-2.558.031z"/> <path fill="#FFCBB9" d="M315.98 142.896c-2.15-4.337-9.252-29.036-11.097-34.457-2.218-6.514-6.078-35.311-5.3-41.191l5.273-.44a5.824 5.824 0 0 1 5.845 4.122c1.15 3.806 1.225 8.026.194 17.368 0 0-.167 15.43.627 18.696.722 2.966 6.667 33.617 7.424 36.986"/> <path fill="#AF526D" d="M292.855 93.875c7.267 1.209 12.61 1.245 20.537.08.649-.095.997-.467.831-1.152-.514-2.124-.758-4.911-.896-5.536-.478-2.174-.227-14.515-.165-15.45.003-.038.163-1.72.17-1.758 1.34-8.229-1.576-10.099-3.092-13.461-1.019-2.257-1.108-1.227-4.63-1.12l-6.974.389-.004.03-2.311-.845a1.045 1.045 0 0 0-.41-.06c-2.946.152-3.726-1.091-5.032 3.082-1.46 4.666-4.984 11.998.273 30.86.008.03.015.059.021.089l.78 3.93c.185.826.454.848.902.922"/> <path fill="#FFD8C5" d="M291.38 34.088c-.424 4.254-2.003 11.692-2.136 12.021 0 0-6.709 9.763-7.247 9.566-.539-.197-2.467.372-2.743.5-.276.128-1.677-.167-1.31.419.367.585 2.232.05 1.883.764-1.15 2.348-2.622 3.52-2.79 4.01-.167.49.474.52.474.52-.151.138-.63.798-.26.999.31.167.905-.277.905-.277s.102.453.348.508c.483.108.778-.52.778-.52.095.222.707.195.97.105.528-.182 3.015-3.171 3.64-4.597.128-.294 9.585-9.748 10.338-10.692.49-.615 2.031-7.073 2.278-12.043-.956-.318-2.461-.432-5.129-1.283"/> <path fill="#AF526D" d="M263.082 60.761c.712 1.547 2.975.831 3.281 1.22 2.063 3.647 1.313 8.322 1.862 12.652a1.143 1.143 0 0 0 1.224.991l.178-.014c2.301-.179 3.706-2.616 2.698-4.69l-.014-.03a2.146 2.146 0 0 1-.218-1.108c.16-2.07 1.952-2.036 2.75-1.916.264.04.532.045.797.013 4.298-.508 2.277 4.793 2.277 4.793-.259.638-.056 1.138.255 1.499.388.451.963.698 1.558.71l4.71.091c.124.003.244.015.361.037a1.14 1.14 0 0 0 1.341-1.214l-1.963-25.163a3.53 3.53 0 0 0-3.783-3.233l-12.666.986a1.144 1.144 0 0 0-1.054 1.2c.106 2.11-.251 4.115-2.859 4.986-1.598.593-1.756 3.15-1.567 5.425a5.99 5.99 0 0 0 .418 1.738l.414 1.027z"/> </g> <g> <g transform="translate(262 45)"> <mask id="p" fill="#fff"> <use xlink:href="#o"/> </mask> <path fill="#FDC149" d="M16.136 14.156C14.452 9.13 9.816 5.204 4.368 4.16a13.856 13.856 0 0 0-2.716-.27A13.534 13.534 0 0 0-6.33 6.363a1.134 1.134 0 0 0-.09 1.795l2.4 2.043C-2.326 8.939-.29 8.32 1.852 8.41c.487.03.975.085 1.466.184 3.811.736 7.14 3.549 8.285 6.99 1.678 4.958.935 8.11.158 11.424l-.291 1.283a7.416 7.416 0 0 0-.027.117l4.125-.32c.504-.039.914-.391 1.014-.88.5-2.148.953-4.59.723-7.528-.13-1.663-.48-3.493-1.17-5.525" mask="url(#p)"/> </g> <g transform="translate(262 45)"> <mask id="r" fill="#fff"> <use xlink:href="#q"/> </mask> <path fill="#FDC149" d="M12.145 26.627c.777-3.315 1.52-6.466-.158-11.424-1.144-3.441-4.474-6.254-8.285-6.99-.491-.1-.98-.153-1.465-.184-2.144-.091-4.18.528-5.872 1.79a9.65 9.65 0 0 0-1.586 1.493l-4.834 5.623a3.396 3.396 0 0 0 .379 4.83l1.43 1.218c1.407 1.197 3.619 1.209 5.087-.624.84-1.05 1.913-2.05 3.56-1.605a10.61 10.61 0 0 1-2.246 2.787 12.546 12.546 0 0 0-4.252 10.414l.196 2.5a3.455 3.455 0 0 1 1.204-.316l18.312-1.42c.199-.016.395-.014.587.004l-.532-.674c-2.14-2.712-2.162-4.568-1.843-6.022l.027-.117.29-1.283z" mask="url(#r)"/> </g> <g transform="translate(262 45)"> <mask id="t" fill="#fff"> <use xlink:href="#s"/> </mask> <path fill="#963E60" d="M-4.697 36.138c-.43.034-.836.145-1.204.317a3.42 3.42 0 0 0-1.962 3.367l.184 2.354c.05.638.593 1.1 1.234 1.05l22.89-1.775a1.133 1.133 0 0 0 1.055-1.228l-.184-2.354a3.43 3.43 0 0 0-3.114-3.146 3.474 3.474 0 0 0-.587-.005l-18.312 1.42z" mask="url(#t)"/> </g> </g> <g> <path fill="#C96B86" d="M308.483 47.831c.497 1.864 2.737 5.435 4.575 8.27a.96.96 0 0 1-.43 1.406c-3.882 1.653-17.29 6.928-22.166 3.17a.948.948 0 0 1-.355-.854c.254-2.367 2.428-7.235 1.793-10.614-.267-1.42-1.559-3.139-2.354-3.744-.795-.606-2.43-2.03-2.68-4.23-.233-2.06 2.337-6.343 2.66-6.874.024-.038.04-.076.061-.116.707-1.289 1.037-4.304 1.326-5.742a.962.962 0 0 1 .726-.746l10.126-2.449c.126-.03 1.438.038 1.565.06.31.052.36.113 1.175.426 0 0-.399 7.115-.312 9.362.087 2.247 2.892 3.555 3.182 3.986.289.43.947 7.936.947 7.936l.16.753z"/> <path fill="#FAB9AF" d="M292.533 24.809c-3.687.33-5.6-9.875-5.187-12.917.163-1.198.915-2.22 2.121-2.316l4.516-.36c.049-.005.097-.01.145-.017l1.214-.175a2.304 2.304 0 0 1 2.494 1.49l.141.388c.388 1.064 1.482 1.633 2.603 1.472.444-.063.856.112 1.064.81.308 1.035-.147 2.484-.392 3.14-.086.23-.137.47-.147.716-.04.925-.266 3.423-1.553 5.566-.414.689-.408 1.553-.02 2.256l.033.06c.398.714.345 1.372-.036 2.29-.451 1.088-1.214 2.352-2.531 3.201-1.336.861-2.579.209-3.058-.507-.335-.5-.431-1.117-.312-1.706.093-.46.17-1.1.078-1.733-.102-.706-.462-1.722-1.173-1.658"/> <path fill="#203A60" d="M290.98 9.087s-3.618 1.681-3.535 5.208c.01.379-.888.686-1.185.45-1.467-1.165-1.06-3.003.61-4.894 2.711-3.07 4.11-.764 4.11-.764"/> <path fill="#203A60" d="M298.116 17.236c-.114-.312.033-.647.323-.81a1.53 1.53 0 0 0 .645-.721c.508-1.1-1.092-2.986-2.518-1.058a.665.665 0 0 1-.577.27c-1.18-.076-4.779-.61-6.886-4.236a.686.686 0 0 1-.07-.164c-.183-.662-1.024-4.677 4.972-6.288 7.573-2.033 10.852 8.08 8.96 12.505-.642 1.501-1.31 2.505-2.023 3.312a.658.658 0 0 1-.842.124c-1.034-.658-1.68-2.095-1.984-2.934"/> <path fill="#203A60" d="M297.344 4.364s2.652-5.488 8.517-4.082c5.863 1.405 4.87 7.884 4.874 13.26.003 5.08 4.687 4.334 6.044 7.157 1.39 2.892-7.597 7.53-12.84.072-2.738-3.895-.71-13.74-3.733-13.954-3.022-.214-2.862-2.453-2.862-2.453"/> <path fill="#B4ABBD" d="M301.343 7.48c-1.283-.173-3.776-1.374-4.23-3.304-.453-1.929.96.155 1.547.7.588.545 4.547 2.855 2.683 2.604"/> <path fill="#FFD8C5" d="M301.056 39.54c-.422 4.252-2 11.684-2.133 12.014 0 0-6.702 9.757-7.24 9.56-.538-.197-2.465.371-2.74.5-.275.127-1.675-.168-1.309.418.367.585 2.23.05 1.881.764-1.148 2.347-2.619 3.517-2.786 4.007-.168.49.472.52.472.52-.15.138-.63.797-.26.998.31.167.905-.277.905-.277s.101.453.348.508c.483.109.777-.52.777-.52.095.222.707.195.968.105.529-.181 3.013-3.169 3.637-4.594.128-.294 9.576-9.742 10.328-10.685.49-.615 2.03-7.069 2.276-12.035-.955-.319-2.459-.432-5.124-1.283"/> <path fill="#AF526D" d="M307.33 42.217l-7.567-.815s1.51-9.371 2.38-12.676c.169-1.373 2.418-4.272 4.721-1.59 1.773 2.065.467 15.08.467 15.08"/> <path fill="#FA978D" d="M288.246 20.635c.002.057.032.11.083.148.118.088.363.226.716.198.436-.034.566-.212.604-.308a.166.166 0 0 0 .005-.104l-.636-2.441a.212.212 0 0 0-.116-.135c-.115-.056-.306-.141-.396-.13-.071.007-.195.1-.275.166a.195.195 0 0 0-.076.157l.091 2.449z"/> <path fill="#C96B86" d="M315.745 142.872c.047-.611 2.475-2.015 3.042-1.563.293.234.997.5.935 1.305-.067.888-.877.76-1.481 2.338-.247.644-.441 1.398-1.587 2.219-.904.646-4.762.717-5.03.128-.835-1.836 3.934-1.983 4.121-4.427"/> <path fill="#C96B86" d="M319.044 145.801c.007.057.209.07.238.018.117-.204.45-3.333.45-3.333l-.476-.036s-.255 2.951-.212 3.351M297.607 141.491c.25-.56 2.982-.99 3.349-.364.189.324.835.745.835 1.551 0 1.256-1.272.75-2.163 1.686-.476.5-1.812 1.674-2.991 1.674-1.112 0-4.165-.005-4.33-.63-.556-2.115 4.074-1.157 5.3-3.917"/> <path fill="#C96B86" d="M300.619 145.996c.017.056.228.059.239 0 .237-1.343.723-2.659.723-2.659l-.478-.699s-.573 3.07-.484 3.358"/> <path fill="#FFCBB9" d="M318.722 141.183s-.17.952-1.048 1.345c-1.5.67-1.628.034-1.628.034-.024-.58-.636-2.736-.636-2.736l2.659.492s.128.422.653.865M300.882 141.158s-.45.856-1.407.965c-1.632.187-1.562-.458-1.562-.458.153-.56.221-2.801.221-2.801l2.386 1.272s-.005.44.362 1.022"/> <path stroke="#B1516D" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M1.003 128.406S5.07 82.752-12.283 58.333M12.456 68.721S4.505 87.42 3.995 125.235"/> <path fill="#FDC149" d="M13.304 59.652c-5.346-.468-10.06 3.484-10.528 8.826C2.307 73.821 6.26 78.531 11.608 79c5.346.468 10.059-3.483 10.527-8.826.469-5.342-3.485-10.053-8.831-10.52"/> <path stroke="#FFF" stroke-width="3" d="M13.134 61.587a7.772 7.772 0 0 0-8.422 7.06 7.77 7.77 0 0 0 7.065 8.418 7.772 7.772 0 0 0 8.423-7.061 7.77 7.77 0 0 0-7.066-8.417z"/> <path fill="#FFF" d="M13.049 68.554c-1.17-.585-1.495-.906-1.45-1.43.038-.419.402-.88 1.309-.8.802.07 1.39.435 1.395.439.061.04.132.064.204.07a.424.424 0 0 0 .419-.232l.269-.537a.344.344 0 0 0-.15-.458c-.475-.256-1.425-.504-1.435-.507-.015-.004-.068-.02-.063-.082l.068-.807a.452.452 0 0 0-.42-.48l-.394-.035a.452.452 0 0 0-.496.4l-.074.848c-.005.065-.08.087-.106.09-1.243.18-2.081.994-2.179 2.105-.121 1.385.984 2.112 2.195 2.691.967.476 1.34.905 1.29 1.482-.055.627-.672 1.015-1.5.943-.708-.062-1.626-.589-1.635-.594a.454.454 0 0 0-.19-.06.43.43 0 0 0-.428.242l-.26.543c-.093.204.007.384.148.473.561.353 1.684.63 1.734.642.013.003.08.034.075.096l-.074.844a.452.452 0 0 0 .42.48l.407.036a.452.452 0 0 0 .497-.4l.078-.888c.007-.083.07-.085.083-.087 1.323-.174 2.204-1.041 2.307-2.218.106-1.208-.506-2.048-2.044-2.809"/> <path fill="#A6425F" d="M.895 127.997s-20.794-3.554-17.436-42.133c0 0 29.577 15.943 17.436 42.133"/> <path fill="#C96B86" d="M3.023 126.05s17.994 1.981 24.35-30.636c0 0-28.17 6.164-24.35 30.636"/> <path stroke="#A6425F" d="M4.914 123.507s12.18-20.413 18.916-24.385"/> <path fill="#B95572" d="M-8.582 125.243h20.134s1.84-.059 1.84 1.538v11.076s-.726 4.735-4.695 7.879c0 0-1.017.79-2.13 1.35H-3.55s-6.596-3.909-6.596-9.906v-10.351s.304-1.586 1.563-1.586"/> <path fill="#963E60" d="M-10.145 130.284v5.6h23.537v-5.6z"/> </g> </g></svg>';
    $('#servicesBg2').append(servicesSVG);

    if ($('body').attr('id') == 'services') {
        setTimeout(function() {
            $('.bg2').hide();
            $('.bg2').fadeIn();
            headerAnim();
        }, 3400);
    }
}


if ($('body').attr('id') == 'services') {
    $('.fixedBanner .banner span').each(function() {
        $(this).css({ transform: 'scale(0,0)' });
        // $(this).css({'width': $(this).width(), 'height': $(this).height(), 'font-size': '0px'});
    });
}

// TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
$(window).on('load', function() {
    // $(".popup-fixed .got-it-button").click(function() {
    // $('.popup-fixed').fadeOut();
    // });

    setTimeout(function() {
        $('#sectionTitle1 h2').each(function() {
            // console.log((($('#sectionTitle1').outerHeight() +'---'+ $(this).outerHeight())));
            $(this).css({ height: $('#sectionTitle1').outerHeight() });
        })
    }, 1000)
    if ($('body').attr('id') == 'services') {
        for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
            TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
        }
        removeLoader();
    }

    if ($("#initiatives").length && mobile) {
        if (location.hash != "") {
            setTimeout(function() {
                console.log(location.hash);
                ele = $("div[jump-to-section^=" + location.hash.replace('#', '') + "]");
                pgScrlTp = ele.offset().top - 50;
                $("html,body").animate({
                    scrollTop: pgScrlTp
                }, 500);
            }, 500);
        }
    }
});

// TweenMax.to($('.fixedBanner .banner'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut});
var navLinks = document.getElementsByClassName("clmn_icon");

function serviceIconAnimate(row, rowIndex) {
    var id = "",
        jsonName = "service" + rowIndex;
    jsonName();
    // console.log($('#' + jsonName).find('svg').length);
    if ($('#' + jsonName).find('svg').length == 0) {
        // $('#' + jsonName).html('');
        var animation = bodymovin.loadAnimation({
            container: document.getElementById(jsonName),
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "dist/json/" + jsonName + ".json"
        });
        // animation.addEventListener('complete', function(){
        //     $('#'+jsonName).parents('.row').addClass('complete')
        // })
    }
}
if ($('body').attr('id') == 'services') {
    // TweenMax.set('.clmn_icon .greyIcon', { opacity: 0 });
    // TweenMax.set('.clmn_icon .greyElem', { transform: 'scale(0, 0)' });
    // TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50% 50% 0' });
    // TweenMax.set('.clmn_icon .greyBox', { transform: 'scale(0, 1)' });
    // TweenMax.set('.clmn_icon .yellowBox', { transform: 'scale(0, 1)' });
    // TweenMax.set('.clmn_icon .greyElemOpa', { opacity: 0 });
    // TweenMax.set('.clmn_content li', { opacity: 0 });
    // $('.clmn_icon').html();

    // introTextSet($('#services .content'));
    // $('.content .row .introText').each(function() {
    //         if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //             // introTextSet($(this));
    //             var currRow = $(this).parents('.row');
    //             // svgLetterAnimate(".sec1");
    //             var id = $(this).siblings('.svgLetterBox').attr('id');
    //             if ($('#' + id).find('svg').length == 0) {
    //                 var letteranimser = bodymovin.loadAnimation({
    //                     container: document.getElementById(id),
    //                     renderer: "svg",
    //                     loop: false,
    //                     autoplay: false,
    //                     path: "dist/json/letters/" + id + ".json"
    //                 });
    //                 letteranimser.addEventListener('DOMLoaded', function() {
    //                     letteranimser.playSegments([[0, 60]], true);
    //                     document.getElementById(id).addEventListener('mouseenter', function() {
    //                         console.log(letteranimser.getDuration(true))
    //                         letteranimser.playSegments([[61, 85]], true);
    //                     });
    //                     document.getElementById(id).addEventListener('mouseleave', function() {
    //                         letteranimser.playSegments([[86, 120]], true);
    //                     });
    //                 });
    //             }



    //             introtextAnimate(currRow);
    //             if (!mobile) {
    //                 serviceIconAnimate(currRow, currRow.index());
    //             }

    //             for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //                 TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //             }

    //             $(this).parents('.row').addClass('complete');
    //         }
    //     });
    // docServicesBtmSecScrollTop = $('footer').position().top - 120;

    // $(window).on('resize scroll', function() {
    //     docScrollTop = $(window).scrollTop();
    //     // if ($('footer').isInViewportCustom()) {
    //     //     $('#social').fadeOut(500);
    //     //     $('.scrollDown').fadeOut(500).siblings('#back2top').delay(50, 'queueName').fadeIn(500);
    //     //     $('.free-consultation-floating-wrapper').css({ opacity: 0 });
    //     //     console.log(555);
    //     // } else {
    //     //     $('#social').fadeIn(500);
    //     //     $('#back2top').fadeOut(500).siblings('.scrollDown').delay(50, 'queueName').fadeIn(500);
    //     //     $('.free-consultation-floating-wrapper').css({ opacity: 1 });
    //     //     console.log(5888);
    //     // }
    //     // $('.content .row .introText').each(function() {
    //     //     if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
    //     //         // introTextSet($(this));
    //     //         var currRow = $(this).parents('.row');
    //     //         // svgLetterAnimate(".sec1");
    //     //         var id = $(this).siblings('.svgLetterBox').attr('id');
    //     //         if ($('#' + id).find('svg').length == 0) {
    //     //             var letteranimser = bodymovin.loadAnimation({
    //     //                 container: document.getElementById(id),
    //     //                 renderer: "svg",
    //     //                 loop: false,
    //     //                 autoplay: false,
    //     //                 path: "dist/json/letters/" + id + ".json"
    //     //             });
    //     //             letteranimser.addEventListener('DOMLoaded', function() {
    //     //                 letteranimser.playSegments([[0, 60]], true);
    //     //                 document.getElementById(id).addEventListener('mouseenter', function() {
    //     //                     console.log(letteranimser.getDuration(true))
    //     //                     letteranimser.playSegments([[61, 85]], true);
    //     //                 });
    //     //                 document.getElementById(id).addEventListener('mouseleave', function() {
    //     //                     letteranimser.playSegments([[86, 120]], true);
    //     //                 });
    //     //             });
    //     //         }



    //     //         introtextAnimate(currRow);
    //     //         if (!mobile) {
    //     //             serviceIconAnimate(currRow, currRow.index());
    //     //         }

    //     //         for (var i = 0; i < $(this).next('ul').find('li').length; i++) {

    //     //             TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
    //     //         }

    //     //         $(this).parents('.row').addClass('complete');
    //     //     }
    //     // });


    // });
}
//Services Page
// headerSet();

//Membership Page

if ($('body').attr('id') == 'membership') {
    $('.status-list').each(function(index) {
        $(this).find('li').each(function(index) {
            var liHei = $('.features-list li').eq(index).outerHeight();
            $(this).css({ height: liHei });

        });
    });
    $(window).on('scroll resize', function() {
        docScrollTopMem = $(document).scrollTop();
        // if(docScrollTop >= ($('.scrollFix').offset().top - $('header').outerHeight()) )
        // {
        //     // $('.scrollFix .title span').css
        //     // $('.scrollFix .title').css({background: '#fffd'});
        //     // console.log(123456);
        // }
        // else
        // {
        //     // $('.scrollFix').css({background: 'none'});
        // }

        // Fixed Table header
        if (!mobile && $('.enterprise-list.orig').length) {
            var docScrolloffset = $(document).scrollTop() + $('header').outerHeight();
            var innerBoxScrollTop = $('.enterprise-list.orig:visible').offset().top;

            if ($('.check-box-pro').is(":checked") == false) {
                if (docScrolloffset > innerBoxScrollTop) {
                    $('#Startup .enterprise-list.fixed').addClass("makeGridHeaderVisible");
                    $('#Startup .enterprise-list.orig .title').css({ opacity: 0 });
                } else {
                    $('#Startup .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
                    $('#Startup .enterprise-list.orig .title').css({ opacity: 1 });
                }
            } else {
                if (docScrolloffset > innerBoxScrollTop) {
                    $('#Providers .enterprise-list.fixed').addClass("makeGridHeaderVisible");
                    $('#Providers .enterprise-list.orig .title').css({ opacity: 0 });
                } else {
                    $('#Providers .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
                    $('#Providers .enterprise-list.orig .title').css({ opacity: 1 });
                }
            }
        }
        // if(docScrolloffset > innerBoxScrollTop)
        // {
        //     if($('.check-box-pro').is(":checked") == false)
        //     {
        //         //$('#Startup .enterprise-list.fixed').css({opacity: 1});
        //         $('#Startup .enterprise-list.fixed').addClass("makeGridHeaderVisible");
        //         $('#Startup .enterprise-list.orig .title').css({opacity: 0});

        //     }
        //     else
        //     {
        //         //$('#Providers .enterprise-list.fixed').css({opacity: 1});
        //         $('#Providers .enterprise-list.fixed').addClass("makeGridHeaderVisible");
        //         $('#Providers .enterprise-list.orig .title').css({opacity: 0});
        //     }
        // }
        // else
        // {
        //     if($('.check-box-pro').is(":checked") == false)
        //     {
        //         //$('#Startup .enterprise-list.fixed').css({opacity: 0});
        //         $('#Startup .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
        //         $('#Startup .enterprise-list.orig .title').css({opacity: 1});

        //     }
        //     else
        //     {
        //         //$('#Providers .enterprise-list.fixed').css({opacity: 0});
        //         $('#Providers .enterprise-list.fixed').removeClass("makeGridHeaderVisible");
        //         $('#Providers .enterprise-list.orig .title').css({opacity: 1});
        //     }
        // }
        // Fixed Table header



    });
    $('#membershipBg2').hide();
    $('.scrollDownHolder').hide();
    // $('.fixedBanner .banner .divAnime').each(function() {
    //     $(this).css({ transform: 'scale(0,0)' });
    // });
    if (!mobile) {
        membershipBg2Data = {
            container: document.getElementById('membershipBg2'), // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: 'dist/json/membership.json', // the path to the animation json
            rendererSettings: {

                scaleMode: 'noScale',
                clearCanvas: true,
                progressiveLoad: true,
                hideOnTransparent: true
            }
        };
        membershipBg2Anime = bodymovin.loadAnimation(membershipBg2Data);
        membershipBg2Anime.addEventListener('DOMLoaded', function() {
            removeLoader()
            headerAnim();
            $('#social').css({ opacity: 1 });
            startSocialAnims();
            $('.scrollDownHolder').fadeIn();
            $('.fixedBanner .banner .divAnime').each(function() {
                $(this).css({ transform: 'scale(1,1)', transition: 'all 0.4s ease-in-out' });
            });
            $('.membership .banner span b').each(function(index) {
                $(this).delay((index * 80)).animate({ opacity: 1 }, 500);
            });
            $('#membershipBg2').fadeIn();
            membershipBg2Anime.play();
            // setTimeout(function(){ $('.free-consultation-floating-wrapper').css({transform: 'translate(-50%, 0)'}); }, 500)

        });
    } else {
        removeLoader()
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('.scrollDownHolder').fadeIn();
        $('.fixedBanner .banner .divAnime').each(function() {
            $(this).css({ transform: 'scale(1,1)', transition: 'all 0.4s ease-in-out' });
        });
        $('.membership .banner span b').each(function(index) {
            $(this).delay((index * 80)).animate({ opacity: 1 }, 500);
        });
        $('#membershipBg2').html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1194" height="389" viewBox="0 0 1194 389"><defs><path id="a" d="M.274.196H35.53V92.5H.274z"/><path id="c" d="M.174.196h35.257V92.5H.174z"/><path id="e" d="M0 328.5h483.684V.39H0z"/><path id="g" d="M0 381.683h373.244V0H0z"/><path id="i" d="M0 .185h60.425V105.39H0z"/><path id="k" d="M.03.446h45.26v48.49H.03z"/></defs><g fill="none" fill-rule="evenodd"><path fill="#1A4E6E" d="M227.217 295.306L195.51 387.61h3.552l31.705-92.304zM280.817 295.306l-31.708 92.304h3.552l31.708-92.304z"/><g transform="translate(159 59.11)"><path fill="#1A4E6E" d="M185.447 220.33h-28.952c-13.295 0-27.611-9.472-30.06-22.537l-13.918-57.8c-4.168-22.237-20.442-19.678-42.675-19.678-22.237 0-42.01-2.559-37.844 19.677L54.71 226.88a11.55 11.55 0 0 0 11.357 9.37l119.39-.121a7.9 7.9 0 0 0-.01-15.799"/><path fill="#326C90" d="M66.195 226.88L43.48 139.992c-3.799-20.28 7.376-19.157 26.36-21.95-1.93-.272-3.047-3.185-5.002-3.185-22.236 0-37.007 2.9-32.84 25.135l22.71 86.888a11.55 11.55 0 0 0 11.357 9.37l11.35-.013a11.536 11.536 0 0 1-11.221-9.357"/><g transform="translate(159.5 236)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path fill="#1A4E6E" d="M.274.196L31.982 92.5h3.549L3.826.196z" mask="url(#b)"/></g><g transform="translate(106 236)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path fill="#1A4E6E" d="M.174.196L31.88 92.5h3.552L3.723.196z" mask="url(#d)"/></g><path fill="#A6425F" d="M228.337 206.958c-31.052-15.593-95.3-44.872-109.281-44.5 0 0-33.272 46.794-9.696 56.148 28.996 11.504 73.601 9.728 113.99 9.126 13.965-.21 18.197-14.14 4.987-20.774"/><path fill="#B1516D" d="M241.11 313.707l4.898-2.372s.995 1.713 1.825 2.826c1.6 2.153 13.286 3.608 13.321 6.513.03 2.49-6.97 3.12-9.49 3.065-2.517-.053-4.38-.463-6.008-1.206-1.773-.809-4.752-2.163-5.234-3.099-.838-1.625-.177-2.57.011-3.398.222-.974.677-2.33.677-2.33"/><path fill="#FAB9AF" d="M245.792 305.96s.25 5.199 1.877 6.793c1.766 1.73 4.846 4.135 4.747 5.334-1.683 1.44-6.18.531-8.836-.18a4.056 4.056 0 0 1-2.803-2.671c-1.228-3.777-3.244-11.077-3.244-11.077l8.259 1.802z"/><path fill="#B1516D" d="M242.84 325.551c-1.294-6.99-1.037-4.507-2.016-7.016-.296-.76 1.95.945 1.95.945l.944 6.173-.819.218-.059-.32z"/><path fill="#A6425F" d="M214.208 230.337c12.947 42 23.784 80.975 23.784 80.975 4.446.219 8.026-1.16 11.204-3.117 0 0-4.247-38.582-10.276-88.175-2.464-20.23-33.253-17.376-24.712 10.317"/><path fill="#AF526D" d="M213.894 206.958c-31.052-15.593-111.236-30.43-125.218-30.057 0 0-17.335 32.351 6.241 41.705 28.997 11.504 73.601 9.728 113.99 9.126 13.965-.21 18.197-14.14 4.987-20.774"/><path fill="#B1516D" d="M173.585 308.328l5.414.549s-.051 1.98.071 3.363c.234 2.672 9.422 10.039 7.928 12.53-1.28 2.137-7.57-.999-9.688-2.366-2.115-1.365-3.486-2.691-4.483-4.178-1.086-1.617-2.912-4.333-2.832-5.383.14-1.823 1.197-2.28 1.792-2.887.7-.714 1.798-1.628 1.798-1.628"/><path fill="#FAB9AF" d="M181.633 304.187s-2.513 4.557-1.964 6.768c.597 2.398 1.958 6.062 1.245 7.03-2.188.345-5.54-2.788-7.428-4.787a4.055 4.055 0 0 1-.987-3.744c.935-3.859 3.047-11.131 3.047-11.131l6.087 5.864z"/><path fill="#B1516D" d="M168.847 319.32c2.564-6.63 1.48-4.382 1.963-7.031.146-.802 1.164 1.828 1.164 1.828l-2.433 5.75-.811-.244.117-.303z"/><path fill="#AF526D" d="M194.398 223.233c-11.001 42.55-22.213 81.42-22.213 81.42 3.671 2.517 7.443 3.221 11.174 3.221 0 0 16.617-35.078 37.49-80.467 8.512-18.518-19.201-32.232-26.451-4.174"/><path fill="#B95572" d="M149.85 166.404L91.26 163.58s-7.39 9.626-5.458 18.496c.717 3.288 45.836 8.312 70.383-6.007 2-1.166-6.334-9.666-6.334-9.666"/><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><path fill="#1A4E6E" d="M193.478 328.5h5.639V161.904h-5.639zM266.163 328.5h5.64V161.904h-5.64zM462.212 328.5h5.639V161.904h-5.639zM19.989 328.5h5.639V161.904h-5.639z" mask="url(#f)"/><path fill="#203A60" d="M77.012 83.608c6.91-3.65 12.048-7.639 16.607-12.013 6.556-6.29 11.722-17.725 8.559-28.249-1.508-5.022-1.654-10.302-.197-14.963 5.066-16.235 24.443-17.278 31.148-11.162 25.092 22.896 37.035 85.973 7.639 122.94-6.391 8.035-36.584 31.615-64.521 17.027-12.409-6.478-16.25-10.553-20.184-24.272-5.743-20.019 4.54-40.637 20.949-49.308" mask="url(#f)"/><path fill="#FAB9AF" d="M114.036 40.81c1.182.922 13.912 12.66 17.346 12.017-.008 1.058-2.933 12.461-.593 18.42-.85 5.6-13.648 6.4-17.683-2.977 8.078-6.72 1.706-22.33.93-27.46" mask="url(#f)"/><path fill="#FCD2C5" d="M193.814 144.61c.353.657-2.15 2.768-2.882 2.89-1.842-.236-1.7-1.311-3.459-1.281 1.526-.25 3.082-.84 4.47-1.546.735-.438 1.416-1.127 1.87-.063" mask="url(#f)"/><path fill="#FAB9AF" d="M109.495 85.624c-1.326-2.87 13.812-6.814 14.569-5.44 4.179 7.579 11.555 33.282 17.241 45.65 6.972 15.173-7.814 13.062-9.695 10.71-10.898-18.316-13.917-33.16-22.116-50.92" mask="url(#f)"/><path fill="#C96B86" d="M126.2 79.976c4.584 4.038 8.124 24.168 13.561 36.308-4.313 4.44-6.722 6.666-14.745 8.122-8.7-13.174-13.132-31.967-13.223-36.83-.24-12.515 7.923-13.314 14.408-7.6" mask="url(#f)"/><path fill="#FAB9AF" d="M112.711 37.041c-1.082-8.515 3.674-16.334 12.272-17.43 8.007-1.016 15.891.39 18.116 7.879.796 2.68-.383 27.724-11.813 31.765-5.436 1.922-16.631-6.949-17.45-13.372l-1.125-8.842" mask="url(#f)"/><path fill="#203A60" d="M106.815 19.07c9.344-12.553 26.73-7.867 26.881-.8 12.222-2.04 13.896 20.915 7.918 24.122 2.063-14.582-16.126-17.17-16.126-17.17-1.724 4.927-6.773 4.27-8.993 9.032-3.333 7.15-3.356 4.173-3.847 6.114 0 0-16.41-7.088-5.833-21.298" mask="url(#f)"/><path fill="#FAB9AF" d="M114.312 30.791c.821.074 1.595 2.271 2.69 3.138-.932 2.788-2.882 5.357-3.926 7.538-1.968-.731-2.35-3.725-2.17-5.76.19-2.154 1.252-5.108 3.406-4.916" mask="url(#f)"/><path fill="#FA978D" d="M136.364 49.126a.469.469 0 0 1-.148.38c-.25.247-.783.655-1.629.708-1.046.064-1.413-.316-1.536-.53a.395.395 0 0 1-.046-.245l.693-6.001a.508.508 0 0 1 .23-.357c.255-.173.678-.437.895-.444.172-.005.495.174.708.305a.465.465 0 0 1 .231.347l.602 5.837z" mask="url(#f)"/><path fill="#FAB9AF" d="M103.818 92.922c-1.325-2.87 10.57-6.815 11.326-5.44 4.188 7.593 11.568 33.309 17.241 45.649 6.973 15.173-8.59 11.522-10.47 9.169-10.899-18.316-9.898-31.618-18.097-49.378" mask="url(#f)"/><path fill="#C96B86" d="M117.236 87.408c4.51 4.118 7.698 24.307 12.923 36.54-4.39 4.364-6.838 6.548-14.885 7.863-8.468-13.325-12.571-32.192-12.577-37.056-.02-12.517 8.155-13.173 14.539-7.347" mask="url(#f)"/><path fill="#203A60" d="M77.012 83.608c6.91-3.65 12.048-7.639 16.607-12.013 6.556-6.29 11.722-17.725 8.559-28.249-1.508-5.022-1.654-10.302-.197-14.963 5.066-16.235 24.443-17.278 31.148-11.162 25.092 22.896 37.035 85.973 7.639 122.94-6.391 8.035-36.584 31.615-64.521 17.027-12.409-6.478-16.25-10.553-20.184-24.272-5.743-20.019 4.54-40.637 20.949-49.308" mask="url(#f)"/><path fill="#FAB9AF" d="M114.036 40.81c1.182.922 13.912 12.66 17.346 12.017-.008 1.058-3.69 11.295-.346 16.7-.851 5.6-14.141 7.89-18.176-1.486 8.078-6.722 1.952-22.1 1.176-27.23" mask="url(#f)"/><path fill="#FAB9AF" d="M112.711 37.041c-1.082-8.515 3.674-16.334 12.272-17.43 8.007-1.016 15.891.39 18.116 7.879.796 2.68-.383 27.724-11.813 31.765-5.436 1.922-16.631-6.949-17.45-13.372l-1.125-8.842" mask="url(#f)"/><path fill="#203A60" d="M106.815 19.07c9.344-12.553 26.73-7.867 26.881-.8 12.222-2.04 13.896 20.915 7.918 24.122 2.063-14.582-16.126-17.17-16.126-17.17-1.724 4.927-6.773 4.27-8.993 9.032-3.333 7.15-3.356 4.173-3.847 6.114 0 0-16.41-7.088-5.833-21.298" mask="url(#f)"/><path fill="#FAB9AF" d="M114.312 30.791c.821.074 1.595 2.271 2.69 3.138-.932 2.788-2.882 5.357-3.926 7.538-1.968-.731-2.35-3.725-2.17-5.76.19-2.154 1.252-5.108 3.406-4.916" mask="url(#f)"/><path fill="#FA978D" d="M136.364 49.126a.469.469 0 0 1-.148.38c-.25.247-.783.655-1.629.708-1.046.064-1.413-.316-1.536-.53a.395.395 0 0 1-.046-.245l.693-6.001a.508.508 0 0 1 .23-.357c.255-.173.678-.437.895-.444.172-.005.495.174.708.305a.465.465 0 0 1 .231.347l.602 5.837z" mask="url(#f)"/><path fill="#FAB9AF" d="M192.373 90.318a38.479 38.479 0 0 1 3.865-3.893c1.63-1.47 5.65-4.341 5.932-4.54.85-.538 2.804-2.159 3.568-2.37.487-.139 1.964.042 2.458.424.653.502.346 1.363.346 1.363.962.474-.668 2.624-.407 2.688 1.067.26 1.036 1.799-2.163 3.97-.19.13-6.995 7.018-9.35 9.042-1.358-1.35-4.307-6.601-4.249-6.684M104.744 98.58c-2.8-1.467 4.22-11.847 5.657-11.22 7.95 3.464 29.484 19.341 41.506 25.66 14.78 7.77.22 14.37-2.705 13.652-19.808-7.867-27.128-19.019-44.458-28.092" mask="url(#f)"/><path fill="#C96B86" d="M112.014 86.027c6.087.511 20.926 14.566 32.528 21.074-.818 6.135-1.425 9.36-7 15.31-14.838-5.395-29.597-17.843-32.569-21.695-7.65-9.906-1.572-15.413 7.041-14.69" mask="url(#f)"/><path fill="#FAB9AF" d="M144.81 118.142c.397-.531.836-.965 1.254-1.257 7.687-5.34 39.562-20.164 46.685-27.001 1.692 2.734 3.285 4.894 4.787 6.28-11.938 11.01-41.27 33.145-46.833 29.808-5.1-3.058-7.648-5.47-5.894-7.83" mask="url(#f)"/><path fill="#B95572" d="M99.496 120.784c-5.587-22.617-15.29-28.72 2.147-46.595 2.483-2.548 11.893-6.757 11.893-6.757s5.74 5.124 10.563 4.939c3.312-.128 6.464-3.587 6.464-3.587s5.816 1.337 7.703 2.973c1.041.902 5.482 12.152 10.811 19.46 10.842 14.863-2.02 26.224-2.294 33.86-.524 14.604-.663 31.109 5.9 44.493-20.057 14.97-42.947 19.529-67.15 9.871.073-19.938 19.846-34.84 13.963-58.657" mask="url(#f)"/><path fill="#FAB9AF" d="M178.3 139.822a38.582 38.582 0 0 1 5.437-.728c2.189-.17 7.125.007 7.47.02 1.001.093 3.539 0 4.273.298.47.188 1.53 1.232 1.689 1.835.211.797-.557 1.292-.557 1.292.473.962-2.13 1.672-1.962 1.882.687.858-.276 2.058-4.136 1.827-.23-.013-9.824 1.295-12.924 1.462-.253-1.898.613-7.858.71-7.888M103.818 92.922c-1.325-2.87 10.57-6.815 11.326-5.44 4.188 7.593 11.568 33.309 17.241 45.649 6.973 15.173-8.59 11.522-10.47 9.169-10.899-18.316-9.898-31.618-18.097-49.378" mask="url(#f)"/><path fill="#C96B86" d="M117.236 87.408c4.51 4.118 7.698 24.307 12.923 36.54-4.39 4.364-6.838 6.548-14.885 7.863-8.468-13.325-12.571-32.192-12.577-37.056-.02-12.517 8.155-13.173 14.539-7.347" mask="url(#f)"/><path fill="#FAB9AF" d="M123.637 132.86c.639-.178 1.252-.253 1.761-.23 9.35.457 43.65 8.15 53.465 7.077-.327 3.2-.382 5.882-.038 7.898-16.176 1.443-52.92 1.093-55.293-4.944-2.176-5.534-2.724-9 .105-9.8" mask="url(#f)"/><path fill="#326C90" d="M9.315 162.093h465.054a9.315 9.315 0 0 0 0-18.63H9.315A9.315 9.315 0 0 0 0 152.778a9.315 9.315 0 0 0 9.315 9.315" mask="url(#f)"/><path fill="#FCD2C5" d="M305 122.755c1.54.758 3.265 1.385 4.951 1.64-1.942-.01-1.767 1.178-3.797 1.463-.81-.124-3.6-2.415-3.222-3.149.487-1.177 1.249-.427 2.068.046" mask="url(#f)"/><path fill="#1A4E6E" d="M296.245 140.83h-74.578a.902.902 0 0 1-.815-1.29l12.873-46.522a.901.901 0 0 1 .738-.511l72.446-2.804a.902.902 0 0 1 .932 1.185l-10.74 49.327a.902.902 0 0 1-.856.616" mask="url(#f)"/><path fill="#326C90" d="M223.74 138.62l11.66-43.974 69.713-2.57-9.811 46.543z" mask="url(#f)"/><path fill="#1A4E6E" d="M196.635 143.965h100.607v-3.2H196.634zM239.455 102.154l21.176-.491-8.619 32.348-21.58.088zM262.155 121.472l29.457-.84.5-2.123-29.416.837zM259.783 130.775l29.64-.85.488-2.074-29.599.848z" mask="url(#f)"/><path fill="#FDC149" d="M260.933 126.262l29.552-.845.553-2.351-29.505.842zM263.317 116.91l29.368-.835.554-2.35-29.322.831zM265.854 106.958l29.173-.823.554-2.351-29.127.82z" mask="url(#f)"/><path fill="#1A4E6E" d="M264.538 112.12l29.274-.83.642-2.722-29.22.826z" mask="url(#f)"/><path fill="#FCD2C5" d="M297.327 126.53c.372-.094 5.658-1.403 8.063-1.719 2.03-.287 4.094-.45 6.036-.446.11.009 2.402 6.247 2.556 8.356-3.384.523-14.04 1.289-14.288 1.355-4.114 1.126-5.427.048-4.878-1.035.133-.263-2.84-.437-2.546-1.584 0 0-.942-.359-.894-1.27.035-.686.942-2.052 1.405-2.367.726-.486 3.488-.963 4.546-1.29" mask="url(#f)"/><path fill="#FCD2C5" d="M366.913 104.589c.544-.142 1.221-.199 1.955-.151 3.234.222 7.554 2.546 6.46 9.013-1.194 7.062-44.908 17.322-62.703 19.437-.086-2.255-.755-5.138-1.832-8.52 10.84-1.064 46.128-17.163 56.12-19.78" mask="url(#f)"/><path fill="#B95572" d="M345.67 110.168c5.876-2.33 11.447-4.542 15.64-6.037a33.268 33.268 0 0 1 2.005-3.007c4.408-5.921 4.052-24.53 13.064-28.768 7.957-3.743 16.531-2.94 16.779 13.505.164 10.936-8.482 24.664-18.728 31.999-9.711 7.167-45.883 15.308-61.551 17.169l-2.299-12.807c6.286-.623 22.257-6.96 35.09-12.054" mask="url(#f)"/><path fill="#C96B86" d="M262.325 201.161c37.036-19.412 96.356-12.124 110.306-11.233 7.445.47 15.539 16.487-4.58 26.348-26.174 12.824-64.486 10.116-109.493 7.658 0 0-9.129-16.013 3.767-22.773" mask="url(#f)"/><path fill="#FAB9AF" d="M304.19 308.578l6.929-5.85-3.976-7.327-6.362 6.362z" mask="url(#f)"/><path fill="#C96B86" d="M283.117 222.53c5.367 7.04 2.467 15.911 25.673 75.2-2.324 2.395-6.877 4.69-8.406 7.497 0 0-25.847-36.548-44.302-82.924-8.86-22.265 17.697-27.181 27.035.227" mask="url(#f)"/><path fill="#FAB9AF" d="M362.237 305.284l-4.43-7.497 7.326-2.726 2.045 8.86z" mask="url(#f)"/><path fill="#B95572" d="M347.072 231.163c14.162 41.566 21.4 67.103 21.4 67.103-3.817-1.096-8.398.973-9.927 3.78 0 0-12.23-24.633-36.44-68.285-6.021-10.854 2.64-14.98 11.55-14.994 5.704-.01 9.772 1.697 13.417 12.396" mask="url(#f)"/><path fill="#A6425F" d="M333.585 156.802c7.857 2.487 16.263 3.558 25.11 3.336 14.299-.353 28.379-2.616 42.538-4.655 3.269-.475 6.47-.942 9.577-1.596 1.38 13.476 2.33 26.97 2.392 38.959-1.36.117-31.323 24.4-68.357 9.315-7.198-2.932-15.648-7.317-19.835-23.891 5.92-4.074 8.617-6.379 8.575-21.468" mask="url(#f)"/><path fill="#FAB9AF" d="M370.813 37.008c-.762 5.315 1.79 22.736 3.63 25.514-4.377 9.777-21.336 7.14-22.45 1.378 2.527-6.203-.155-17.722-.19-18.81 3.935.581 17.684-7.1 19.01-8.082" mask="url(#f)"/><path fill="#FAB9AF" d="M351.062 9.59c9.576.628 15.36 8.942 14.742 18.425l-.644 9.846c-.468 7.151-7.935 18.59-18.373 15.955-14.632-3.689-15.902-31.277-15.203-34.293 1.949-8.426 10.565-10.516 19.478-9.932" mask="url(#f)"/><path fill="#C96B86" d="M341.273 68.84c1.87-1.306 11.336-6.366 11.336-6.366s7.77 2.296 12.705 1.094c5.494-1.339 7.998-4.161 7.998-4.161s8.289 2.8 11.328 3.625c9.119 2.468 9.46 16.992 10.937 26.818.325 2.165 2.568 51.036 2.805 97.824a88.401 88.401 0 0 0-4.623.55l-1.872-30.177-1.702 30.632c-17.746 3.098-25.06 10.997-47.147 5.585l-2.096-24.418-2.31 23.34c-9.427-2.842-13.545-14.11-13.925-14.869 11.416-18.973 10.248-75.846 10.472-81.216.477-11.523-5.115-20.435 6.094-28.26" mask="url(#f)"/><path fill="#FAB9AF" d="M259.928 164.572c1.541.745 4.445 2.066 6.134 2.307.133 1.54-1.195 2.275-3.248 2.273-.816 0-5.33-3.88-4.954-4.614.48-1.185 1.245-.438 2.068.034" mask="url(#f)"/><path fill="#FAB9AF" d="M249.889 170.334c.724-.491 10.19-2.754 12.593-3.08 2.028-.3 4.09-.475 6.032-.482.109.01 2.437 6.234 2.604 8.342-5.356 1.18-10.591 1.567-13.984 2.08-4.217.64-5.998-.022-5.162-1.226.167-.244-3.406.002-2.574-1.998 0 0-1.566-.664-1.61-1.577-.064-1.365 1.64-1.745 2.1-2.059" mask="url(#f)"/><path fill="#FAB9AF" d="M320.593 144.235c3.182-.623 8.65 1.998 9.263 8.527.672 7.13-43.655 19.02-58.833 22.366-.663-2.158-2.348-4.813-4.26-7.797 10.2-3.832 43.003-17.34 51.98-22.446.49-.277 1.13-.509 1.85-.65" mask="url(#f)"/><path fill="#A6425F" d="M326.624 111.888c2.062-10.566 3.473-19.53 5.623-29.052.597-2.641 7.588-20.024 19.03-6.173 7.211 8.729-9.473 65.163-16.89 75.352-6.966 9.853-42.657 18.643-57.33 23.25l-4.287-11.983c5.771-2.565 43.807-17.712 47.317-20.452.24-1.117 4.462-20.31 6.537-30.942" mask="url(#f)"/><path fill="#203A60" d="M371.909 43.93c2.534-2.429 10.83-12.448.662-32.095 0 0-11.832-16.244-26.471-10.027 0 0-14.038 8.423-16.846 6.818-2.807-1.604-11.63 7.62-1.203 11.43 6.477 2.367 10.633 1.949 12.852 1.292 1.243-.367 2.568.233 3.162 1.385l1.617 3.132c.662 1.282 2.416 1.513 3.361.423 1.783-2.056 4.356-4.213 5.48-1.218 1.804 4.813.802 10.83-1.605 9.426-2.406-1.404 2.759 11.28 7.82 12.633 0 0 4.31.04 5.683-.334 1.103-.3 3.483-1.36 3.483-1.36.534-.133 1.608-1.124 2.005-1.504" mask="url(#f)"/><path fill="#FA978D" d="M332.626 40.858s.747.869 2.154.812c1.658-.068 1.74-.948 1.74-.948l-1.574-7.102s-.957-.569-1.326-.542c-.31.023-.994.61-.994.61v7.17z" mask="url(#f)"/><path fill="#1A4E6E" d="M458.245 323.626h-3.55l-31.68-92.22h3.55zM404.688 323.626h-3.548l-31.68-92.22h3.548z" mask="url(#f)"/><path fill="#1A4E6E" d="M309.432 215.551h28.926c13.283 0 27.59-9.466 30.036-22.52l17.644-77.748c4.16-22.217 21.807-20.227 44.023-20.227 22.216 0 40.587-1.99 36.427 20.227L440.06 222.095a11.542 11.542 0 0 1-11.348 9.361l-119.29-.124a7.89 7.89 0 0 1-7.881-7.89 7.89 7.89 0 0 1 7.891-7.89" mask="url(#f)"/><path fill="#326C90" d="M309.432 215.663h28.926c13.283 0 27.59-9.52 30.036-22.577l13.352-57.923c6.815-46.006 16.434-40.428 46.233-40.667 32.11-.259 36.464 3.521 38.85 11.927-5.043-2.954-20.277-6.475-40.043-5.282-22.176 1.338-31.998-4-38.587 42.461l-12.81 58.142c-2.445 13.058-16.751 22.478-30.035 22.478h-28.926c-3.258 0-2.056 4.27-3.26 7.088l-3.745.051c-4.354-.004-7.882-3.509-7.882-7.862 0-4.361 3.533-7.836 7.891-7.836" mask="url(#f)"/><path fill="#B95572" d="M304.225 306.154l-10.085 2.737a3.22 3.22 0 0 0-2.088 1.949c-.282.751-.43 1.98.048 2.064 7.516 1.307 16.25-2.375 16.25-2.375l-4.125-4.375z" mask="url(#f)"/><path fill="#B95572" d="M314.234 307.597l-2.676-4.24a1.77 1.77 0 0 0-1.848-.797c-2.202.449-6.58 1.78-6.147 5.212 0 0 .669 2.1 1.479 3.785a1.59 1.59 0 0 0 2.06.764l6.535-2.803a1.322 1.322 0 0 0 .597-1.92" mask="url(#f)"/><path fill="#C96B86" d="M307.892 311.945s-5.625 1.5-7.062 1.48c-1.438-.021-8.834.979-9.021-.959 0 0 4.354.896 10.02-.521l6.688-1.52-.625 1.52z" mask="url(#f)"/><path fill="#B95572" d="M361.958 305.565l-10.29 1.928a3.221 3.221 0 0 0-2.251 1.759c-.347.723-.604 1.935-.134 2.06 7.372 1.962 16.4-1.027 16.4-1.027l-3.725-4.72z" mask="url(#f)"/><path fill="#C96B86" d="M364.164 311.654s-4.797 1.003-6.227.856c-1.43-.147-8.89.287-8.906-1.66 0 0 4.263 1.188 10.032.274l6.795-.927-1.694 1.457zM307.102 312.322l6.535-2.803a1.323 1.323 0 0 0 .597-1.921c-.797 1.276-9.192 3.96-9.192 3.96a1.59 1.59 0 0 0 2.06.764" mask="url(#f)"/><path fill="#1A4E6E" d="M335.085 231.405l-31.682 92.221h-3.546l31.679-92.221z" mask="url(#f)"/><path fill="#B95572" d="M371.583 308.206l-1.92-4.633a1.77 1.77 0 0 0-1.685-1.098c-2.247.07-6.787.64-6.94 4.096 0 0 .302 2.184.816 3.981.233.818 1.052 1.175 1.88.977l6.936-1.531a1.322 1.322 0 0 0 .913-1.792" mask="url(#f)"/><path fill="#1A4E6E" d="M385.091 231.405h3.548l-31.68 92.221h-3.548" mask="url(#f)"/><path fill="#FAB9AF" d="M195.898 88.274c-.397-2.25-.241-4.467-.241-4.467a.31.31 0 0 1 .436-.3c.472.21 1.156.767 1.3 2.227.225 2.276-1.367 3.266-1.495 2.54" mask="url(#f)"/><path fill="#C96B86" d="M363.712 311.75l6.934-1.518a1.322 1.322 0 0 0 .914-1.792c-1.002 1.124-9.73 2.347-9.73 2.347.234.817 1.056 1.162 1.882.964" mask="url(#f)"/></g><path fill="#A6425F" d="M738.53 357.115c-3.969-6.22-6.273-13.92-8.931-20.727-.968-2.48-1.693-6.86-.061-9.237 1.218-1.78 4.128-2.345 6.122-2.768 1.817-.385 4.36-.302 5.324-2.095 1.645-3.06-1.105-8.679-1.77-11.713-1.028-4.688-1.03-11.702 3.738-14.503 2.167-1.273 4.921-1.152 7.272-2.01 2.57-.937 3.865-3.085 5.026-5.541 2.568-5.432 7.789-12.58 15.181-10.907 2.782.628 5.032 4.462 4.597 7.183-.62 3.877-4.729 6.484-8.095 7.787-2.852 1.104-7.184 2.295-8.199 5.53-.947 3.017 1.654 3.692 4.073 4.508 2.77.933 4.8 1.927 5.174 5.116.45 3.82-1.86 8.898-4.864 11.278-2.935 2.323-6.472 4.08-9.567 6.197-1.705 1.165-4.471 2.38-4.584 4.651-.087 1.772 1.533 3.829 2.04 5.546.583 1.97.674 4.114.215 6.134-1.156 5.097-5.069 10.475-8.469 14.342-.648.74-1.817 2.322-2.917 2.51-1.097.187-2.357-.42-1.095-1.484"/><path stroke="#933156" stroke-linecap="round" stroke-width="2" d="M742.521 346.776s1.642-46.833 21.975-60.833"/><path fill="#C96B86" d="M734.582 359.197c.343-3.221-4.44-7.222-6.393-9.335-4.117-4.449-9.86-9.967-12.014-15.69-1.507-4.008-1.415-9.244.015-13.213 1.299-3.599 4.415-6.319 5.706-9.85 1.436-3.935-.12-6.03-3.085-8.61-3.606-3.137-7.75-5.085-10.241-9.394-3.424-5.919 5.29-7.21 4.508-13.198-.615-4.73-5.57-5.655-7.996-9.071-1.584-2.231-3.287-5.481-3.028-8.286.727-7.858 12.162-11.965 18.065-6.663 2.035 1.828 3.178 5.193 2.31 7.886-.682 2.114-2.327 3.307-2.051 5.692.886 7.676 13.712 5.138 18.792 6.705 3.082.95 5.265 3.122 6.216 6.192 1.157 3.732-.469 6.663-2.024 9.987-2.088 4.454-8.044 7.598-7.528 12.966.733 7.655 8.078 4.432 11.64 8.81 4.239 5.211-.962 15.732-2.087 21.102-1.28 6.105-2.868 12.153-3.08 18.411-.085 2.58-.17 5.447-1.827 7.617-2.862 3.746-7.52.113-6.108-3.697"/><path fill="#A6425F" d="M713.7 305.931c-3.287.01-7.014 1.417-10.183.153-3.869-1.542-3.832-6.135-7.309-8.142-2.828-1.634-8.802-1.283-10.022 2.457-1.45 4.435 5.99 6.122 8.93 6.806 4.244.986 5.879 2.87 2.982 6.774-.878 1.18-2.25 2.108-2.355 3.635-.15 2.22 2.232 3.628 3.95 4.496 2.077 1.05 3.94 1.417 6.272 1.44 2.145.018 3.648-.26 4.61 1.843.705 1.547.28 3.647.456 5.332.346 3.288 2.022 6.325 3.921 8.997 4.196 5.9 7.34 11.396 13.956 14.978 3.011 1.63 6.95 3.519 10.44 3.237 1.406-4.036-2.058-8.359-3.718-11.897-2.46-5.246-4.166-10.345-5.794-15.886-.655-2.227-1.293-4.517-1.524-6.814-.175-1.745.272-3.59.004-5.322-.308-2.006-1.387-3.791-3.55-4.097-2.23-.317-3.118 1.24-4.813 2.208-1.417.809-3.031 1.03-3.793-.57-1.149-2.409 1.844-4.642 2.51-6.76 1.267-4.015-4.893-5.057-6.431-2.253"/><path stroke="#AF5F79" stroke-width="2" d="M712.838 264.776s19.99 45 25.658 79.5"/><path stroke="#933156" stroke-linecap="round" stroke-width="2" d="M696.163 304.526s25.166 18.25 33.166 43.416"/><path fill="#326C90" d="M716.452 349.776h35.927s3.284-.105 3.284 2.745v19.777s-1.297 8.455-8.379 14.069c0 0-1.814 1.409-3.8 2.409h-18.05s-11.771-6.978-11.771-17.687v-18.482s.543-2.831 2.789-2.831"/><path fill="#1E5376" d="M713.663 358.776v10h42v-10z"/><g transform="translate(820 6)"><path fill="#0F385C" d="M295.065 138.716c-5.49-6.325-12.084-11.547-17.332-18.083-6.106-7.608-9.2-15.738-6.981-23.189.871-2.929 1.137-12.884.161-16.34-4.483-15.885-18.837-23.542-25.782-21.293-14.625 4.738-22.246 14.458-18.5 47.314 3.132 12.805-9.173 33.446-.53 53.364 4.294 9.896 22.506 44.99 49.622 45.08 12.044.041 23.793-4.348 29.567-14.465 8.43-14.762 2.808-37.364-10.226-52.388"/><path fill="#FAB9AF" d="M218.243 137.765c-4.73 7.257-11.96 18.482-14.4 22.994-9.847-8.384-35.81-30.275-35.81-30.275s1.705-7.737.684-10.018c-1.016-2.283-5.963-5.413-7.429-6.337-1.466-.925-.808 2.78.919 4.066.59.437 2.286 2.474 2.025 3.538-.264 1.066-14.438-8.982-14.438-8.982s-3.655-.053-3.194 1.979c0 0-2.933 1.545-2.07 3.106 0 0-1.793 2.04-.147 4.31 1.643 2.263 9.497 12.421 16.4 13.496 0 0 32.72 38.519 42.614 39.849 7.231.97 22.754-21.802 30.24-33.544 2.13-3.342.386-7.786-3.448-8.791a10.945 10.945 0 0 0-11.946 4.61"/><path fill="#C96B86" d="M171.362 132.335s21.121 15.753 30.968 24.137c7.486-12.02 17.124-24.287 19.05-26.595.68-.814 1.439-1.544 2.347-2.09 3.95-2.378 14.479-7.36 14.116 7.374 0 0-24.721 41.634-34.447 40.33-9.893-1.33-42.053-35.87-42.053-35.87"/><path fill="#FAB9AF" d="M259.714 91.517c.487 4.567-5.006 18.656-.792 30.482.074 2.392 8.774 9.514-12.983 18.661-13.277-2.535-10.218-14.292-10.282-17.678 11.084-9.5 3.965-17.455 2.766-20.928 4.116 1.362 19.683-9.735 21.29-10.537"/><path fill="#FAB9AF" d="M247.32 72.155c8.26 2.004 14.377 11.178 12.394 19.362-.02.083-3.366 9.01-3.366 9.01-1.494 6.168-13.362 13.573-18.458 11.132-12.064-5.767-9.13-29.72-8.06-32.243 2.982-7.056 9.798-9.127 17.49-7.26"/><path fill="#FAB9AF" d="M250.773 91.451c2.024.82 2.773 4.984.947 7.464-1.224 1.66-4.047 3.125-6.149 2.875.07-2.438 1.145-6.948 1.596-9.876 1.394-.888 2.839-.78 3.606-.463"/><path fill="#FA978D" d="M236.868 98.574a.626.626 0 0 1-.267.476c-.378.283-1.163.725-2.297.637-1.401-.11-1.818-.683-1.942-.99a.531.531 0 0 1-.015-.335l2.042-7.845a.681.681 0 0 1 .373-.431c.37-.182.983-.455 1.272-.422.23.025.624.322.883.537.163.134.25.316.243.504l-.292 7.869z"/><path fill="#0F385C" d="M247.326 63.304c-10.551-4.727-20.74.747-20.935 6.22-5.652 4.914-3.119 13.158 1.673 17.456 1.645-12.11 5.992-14.075 5.992-14.075 7.42 5.283 15.608 1.684 19.609 5.635 4.428 4.373 2.935 8.627 3.778 9.73 0 0 .394-2.178 1.106-3.368.273-.455.926-.515 1.108-.097 1.349-.418 3.164-13.623-12.33-21.5"/><path fill="#FAB9AF" d="M256.922 117.473l-12.997-3.344s.742 5.157-4.479 6.593c-1.547 2.363-4.236 3.21-3.757 8.539.48 5.33 2.12 6.77 4.078 7.752 3.828 1.92 11.122 3.007 16.581-4.291 0 0 5.006-7.945 2.397-12.512-1.367-2.391-1.823-2.737-1.823-2.737"/><path fill="#1A4E6E" d="M318.487 366.685h-3.62l-32.316-94.082h3.617zM263.855 366.685h-3.62l-32.32-94.082h3.621z"/><path fill="#1B5470" d="M166.68 256.431h29.51c13.55 0 28.143-9.655 30.64-22.97l14.185-58.915c4.248-22.665 20.836-20.057 43.497-20.057 22.665 0 42.82-2.608 38.573 20.057l-23.149 88.56a11.773 11.773 0 0 1-11.575 9.552l-121.691-.124a8.052 8.052 0 0 1 .01-16.103"/><path fill="#1A4E6E" d="M288.23 263.107l23.15-88.562c3.873-20.67-7.517-19.525-26.868-22.374 1.969-.276 3.106-3.245 5.1-3.245 22.664 0 37.72 2.955 33.473 25.62l-23.149 88.56a11.773 11.773 0 0 1-11.575 9.552l-11.568-.014c5.589-.055 10.382-4.034 11.436-9.537M192.848 272.603l-32.319 94.082h-3.617l32.316-94.082zM247.48 272.603l-32.315 94.082h-3.621l32.319-94.082z"/><path fill="#FAB9AF" d="M216.188 355.001l11.872-71.58 6.79-29.834-26.148 8.382-.141 95.332z"/><path fill="#B1516D" d="M278.621 192.978a5.193 5.193 0 0 1-.445-3.837c2.95-10.915 17.801-54.742-1.305-62.629 0 0-8.92-1.071-18.126-6.303 0 0-.59 7.731-3.81 10.996 0 0-1.83 4.405-10.598 3.67-.186-.016-1.076-.114-1.24-.195-1.335-.662-7.804-3.947-7.44-12.11l-9.413 2.894c-1.97 21.575-9.38 22.883-9.463 36.107-.057 9.171 3.406 12.958 6.335 18.12.578 1.02 1 2.014 1.646 2.998 1.482 2.258 4.975 8.156 4.975 8.156.069.596 3.032 10.605 2.805 11.167"/><path fill="#FAB9AF" d="M191.129 356.437L203 284.857l6.79-29.834-26.149 8.382-.14 95.332z"/><path fill="#FAB9AF" d="M193.743 340.678s-1.689 13.025-3.014 17.135c-1.325 4.11-4.633 14.33-7.312 13.859-2.68-.472-5.5-5.739-4.11-8.798.918-2.02 3.726-14.347 6.467-18.98 2.743-4.634 3.514-11.85 7.969-3.216"/><path fill="#B1516D" d="M189.404 361.924s-.572 17.367-9.298 13.53c-3.317-1.46-4.003-5.632-.799-12.58 0 0 2.596 14.288 10.097-.95"/><path fill="#FAB9AF" d="M218.802 339.242s-1.689 13.025-3.014 17.136c-1.326 4.11-4.633 14.33-7.312 13.858-2.68-.471-5.5-5.739-4.11-8.798.917-2.019 3.725-14.347 6.467-18.98 2.742-4.634 3.514-11.849 7.969-3.216"/><path fill="#B1516D" d="M214.462 360.488s-.571 17.367-9.297 13.53c-3.317-1.46-4.003-5.632-.799-12.58 0 0 2.596 14.288 10.096-.95"/><mask id="h" fill="#fff"><use xlink:href="#g"/></mask><path fill="#1A4E6E" d="M78.825 369.04h5.419V208.937h-5.42zM347.803 369.04h5.42V208.937h-5.42z" mask="url(#h)"/><path fill="#B1516D" d="M277.974 191.86s19.035 38.977 4.82 56.271c0 0-2.823 7.64-33.631 8.45-2.384.063-4.205 2.326-3.942 4.888l.75 12.463c.196 1.914-1.237 3.566-3.015 3.47-4.545-.244-8.77-1.54-15.643.133-14.975 3.644-41.922.594-48.72-.049-.884-.083-1.567-.867-1.587-1.827-.097-4.82-.053-25.075 4.517-33.845 3.107-5.96 9.277-11.055 18.279-15.092l24.548-12.656c1.697-.875 3.102-2.296 4.023-4.07l4.676-13.567 44.925-4.569z" mask="url(#h)"/><path fill="#FCD2C5" d="M200.838 190.706c1.768-.187 11.384-.673 13.038-.524.092.013.08 4.764-.13 5.688-7.96-.048-20.369-.913-18.031-2.184.176-.096-2.409.354-1.666-.532.392-.466-.148-.604-.292-.996-.17-.46 5.574-1.293 7.08-1.452" mask="url(#h)"/><path fill="#C96B86" d="M273.46 183.84c3.004.643 6.739 3.409 4.84 9.326-2.07 6.458-49.33 5.268-66.297 4.847.223-2.126.16-6.564-.392-9.875 10.306.461 50.278-3.315 59.998-4.419.529-.059 1.17-.023 1.852.122" mask="url(#h)"/><path fill="#C96B86" d="M264.993 189.694c-.115-.967-4.649-43.297-2.953-47.156 3.222-7.337 9.357-7.758 13.59-.143 4.494 8.08 5.517 41.714 2.387 51.865" mask="url(#h)"/><path fill="#FFCBB9" d="M50.406 363.903l9.166-92.049c5.544-30.42 3.19-76.597 1.06-90.111-.953-6.045-5.852-10.686-11.936-11.344-8.741-.816-16.254 6.29-15.766 15.055.214 3.838 3.493 9.516 4.527 14.779 4.03 20.545 6.3 163.566 6.353 163.592l6.596.078z" mask="url(#h)"/><path fill="#FFCBB9" d="M19.847 368.65c-3.013-12.123-.189-77.786-1.833-92.47-1.976-17.651-2.779-92.918 2.437-107.311l13.524 1.808c6.774 1.172 11.91 6.773 12.438 13.627.786 10.23 2.354 20.111-5.416 43.091 0 0-4.914 40.155-5.462 48.816-.538 8.518-8.858 87.902-8.818 96.813" mask="url(#h)"/><path fill="#FFD8C5" d="M78.569 135.878c-.134-9.476-.699-17.563-.41-28.505-7.1 1.319-10.987 1.124-13.535 1.632-.962 12.665.843 29.456 1.904 31.5 4.836 4.404 10.22 4.272 12.04-4.627" mask="url(#h)"/><path fill="#AF526D" d="M59.125 112.39l19.632-.8s-2.281-24.409-3.95-33.074c-.201-3.569-5.496-11.425-11.888-4.908-4.92 5.016-3.794 38.781-3.794 38.781M65.164 241.229c-18.738 3.12-34.355 1.987-54.793-1.02-1.672-.246-2.57-1.207-2.143-2.974 1.325-5.482 1.956-12.676 2.311-14.29 1.234-5.61.584-37.466.425-39.876a686.69 686.69 0 0 0-.436-4.54c-3.456-21.238 5.059-26.621 8.969-35.3 2.627-5.827 1.858-2.61 10.94-2.336l17.984 1.005.01.076 5.96-2.179c.337-.124.7-.172 1.056-.153 7.596.39 9.607-2.82 12.975 7.953 3.764 12.044 10.408 31.3-.703 79.653-.018.076-.04.153-.055.23l-.175 11.37c-.478 2.132-1.17 2.188-2.325 2.38" mask="url(#h)"/><path fill="#C96B86" d="M24.931 127.361c-.667 4.937-6.15 14.842-9.934 22.7a2.478 2.478 0 0 0 1.555 3.464c9.985 2.832 39.707 12.355 52.55 3.42 1.8-1.252 2.509-3.586 1.797-5.66-2.18-6.344-2.355-16.977-1.88-24.973.22-3.726 1.98-7.413 3.528-9.477 1.889-2.516 4.383-6.806 4.305-12.523-.074-5.357-6.556-16.346-7.224-17.806-.651-1.423-.526-3.745-.526-3.86 0-5.417 1.126-6.995-.083-10.584a2.486 2.486 0 0 0-2.1-1.677l-32.12-2.916c-.332-.034-3.67.566-3.988.662-.776.234-1.459.48-2.87 1.474 0 0-3.015 10.762-2.505 16.547.51 5.785.104 17.388-.496 18.586-.601 1.197.159 20.64.159 20.64l-.168 1.983z" mask="url(#h)"/><path fill="#FAFAFA" d="M39.765 96.646l30.093 1.42a.5.5 0 0 1 .476.502l-.326 51.575a.5.5 0 0 1-.505.497l-30.901-.352" mask="url(#h)"/><path fill="#FFD8C5" d="M26.562 138.998c.539-.228.899-.7 1.039-1.27.047-.187.182-.363.471-.492 1.024-.46 5.054.14 10.47-1.51 1.648-.502-1.954-2.663-1.567-4.11.387-1.445 1.987 1.208 2.596 1.456.61.247 4.357 2.46 4.84 3.603.482 1.144 28.424-3.308 28.424-3.308l.025-.012c1.658-.178 4.868-.318 5.388 1.235.606 1.807.77 5.264-1.846 8.395-.56.542-.966.73-1.925.876-5.91.026-30.517-.81-31.12-.597-3.182 1.12-11.588 1.599-12.657 1.03-.252-.134-.6-.416-.872-.726-.391-.447-.916-.777-1.502-.873-.331-.054-.659-.206-.862-.552a.539.539 0 0 1-.068-.202c-.1-.675-.51-1.245-1.057-1.653-.175-.13-.31-.287-.358-.471-.102-.393.188-.654.58-.82" mask="url(#h)"/><path fill="#FAB9AF" d="M61.664 66.83c9.372 1.857 17.081-23.823 16.856-31.749-.09-3.122-1.738-5.95-4.807-6.53l-11.49-2.164a6.14 6.14 0 0 1-.37-.082l-3.066-.782a5.947 5.947 0 0 0-6.809 3.143l-.47.958c-1.286 2.624-4.25 3.785-7.083 3.066-1.122-.285-2.228.052-2.954 1.789-1.074 2.571-.304 6.417.144 8.17.158.615.222 1.245.181 1.879-.153 2.385-.256 8.864 2.458 14.72.873 1.883.623 4.1-.567 5.8l-.101.142c-1.219 1.726-1.263 3.431-.537 5.894.86 2.917 2.47 6.372 5.62 8.914 3.191 2.578 6.56 1.242 7.986-.465.996-1.19 1.413-2.75 1.269-4.296-.113-1.208-.136-2.868.274-4.47.457-1.785 1.66-4.295 3.466-3.937" mask="url(#h)"/><path fill="#FA978D" d="M73.812 57.287a.503.503 0 0 1-.254.357c-.327.194-.992.48-1.89.313-1.111-.207-1.396-.701-1.468-.957a.428.428 0 0 1 .016-.268l2.302-6.097a.55.55 0 0 1 .336-.312c.31-.114.823-.28 1.052-.229.181.04.472.311.66.505a.504.504 0 0 1 .151.423l-.905 6.265z" mask="url(#h)"/><path fill="#203A60" d="M69.964 26.88s8.825 5.31 7.643 14.345c-.127.97 2.092 2.005 2.917 1.482 4.085-2.592 3.544-7.422-.223-12.738-6.114-8.627-10.337-3.09-10.337-3.09" mask="url(#h)"/><path fill="#203A60" d="M49.415 45.85c.376-.77.093-1.67-.608-2.166-.537-.379-1.11-1.005-1.457-2.031-1.002-2.963 3.622-7.368 6.752-2.027.296.505.824.828 1.408.853 3.05.128 12.431-.256 18.835-8.989.092-.125.165-.259.223-.403.651-1.65 3.913-11.731-11.034-17.512-18.878-7.299-30.068 17.772-26.428 29.657 1.236 4.03 2.674 6.792 4.284 9.06.48.676 1.386.916 2.128.548 2.833-1.405 4.886-4.917 5.897-6.99" mask="url(#h)"/><path fill="#203A60" d="M54.927 13.005S49.627-1.817 34.19.185C18.756 2.188 19.525 19.098 18.042 32.902 16.639 45.949 4.822 42.748.565 49.627c-4.36 7.045 17.432 21.42 32.935 3.705C41.596 44.08 39.094 18.24 46.91 18.52c7.815.28 8.018-5.514 8.018-5.514" mask="url(#h)"/><path fill="#326C90" d="M43.81 19.91c3.34-.091 10.068-2.492 11.76-7.323 1.693-4.83-2.502.135-4.16 1.372-1.658 1.239-12.455 6.085-7.6 5.951" mask="url(#h)"/><path fill="#FFD8C5" d="M33.641 105.21c-.327 11.03.092 27.652.322 28.54 0 0 15.08 30.15 16.522 29.822 1.443-.326 6.186 1.768 6.849 2.188.663.417 4.342.126 3.211 1.504-1.132 1.378-5.725-.61-5.068 1.333 2.161 6.392 5.539 9.878 5.805 11.188.267 1.31-1.382 1.173-1.382 1.173.34.404 1.348 2.252.333 2.644-.847.326-2.223-1.008-2.223-1.008s-.409 1.127-1.059 1.186c-1.27.117-1.816-1.589-1.816-1.589-.316.537-1.873.264-2.513-.053-1.293-.64-6.661-9.113-7.786-12.971-.231-.794-21.286-28.123-22.899-30.79-1.05-1.736-2.85-18.776-1.836-31.579 2.55-.5 6.437-.291 13.54-1.588" mask="url(#h)"/><path fill="#AF526D" d="M16.692 109.987l19.643.419s-.762-24.502-1.89-33.254c.02-3.576-4.778-11.744-11.561-5.636-5.222 4.7-6.192 38.471-6.192 38.471" mask="url(#h)"/><path fill="#C96B86" d="M18.333 370.002c.457-1.517 7.357-3.713 8.534-2.259.609.752 2.237 1.815 1.636 3.81-.662 2.204-2.633 1.432-5.031 5.077-.98 1.488-1.886 3.283-5.231 4.718-2.636 1.13-12.4-.829-12.75-2.462-1.087-5.094 11.017-2.823 12.842-8.884M51.702 364.608c-.644-1.446-7.698-2.554-8.643-.939-.489.835-2.156 1.922-2.156 4.005 0 3.244 3.283 1.936 5.584 4.354 1.227 1.292 4.677 4.324 7.72 4.324 2.869 0 10.748-.013 11.173-1.629 1.437-5.459-10.512-2.986-13.678-10.115" mask="url(#h)"/><path fill="#C96B86" d="M43.93 376.244c-.046.144-.59.151-.618 0-.613-3.469-1.868-6.867-1.868-6.867l1.234-1.805s1.48 7.925 1.251 8.672M27.303 378.924c.071.133.607.037.606-.116-.055-3.522.534-7.097.534-7.097l-1.553-1.539s.047 8.062.413 8.752" mask="url(#h)"/><path fill="#FFCBB9" d="M26.774 367.389s-.954 2.307-3.389 2.812c-4.152.862-4.122-.814-4.122-.814.262-1.476-.087-7.256-.087-7.256l6.431 2.715s.09 1.135 1.167 2.543M43.25 363.748s1.16 2.21 3.63 2.493c4.214.482 4.032-1.184 4.032-1.184-.394-1.446-.57-7.234-.57-7.234l-6.159 3.287s.014 1.138-.932 2.638" mask="url(#h)"/><path fill="#326C90" d="M366.254 210.548H59.139a6.99 6.99 0 1 1 0-13.98h307.115a6.99 6.99 0 0 1 6.99 6.99 6.99 6.99 0 0 1-6.99 6.99M358.512 183.749h-97.205a4.405 4.405 0 0 1-4.405-4.405v-56.039a4.405 4.405 0 0 1 4.405-4.404h97.205a4.405 4.405 0 0 1 4.405 4.404v56.04a4.405 4.405 0 0 1-4.405 4.404" mask="url(#h)"/><path fill="#1A4E6E" d="M318.344 197.026h-21.04a1 1 0 0 1-.993-1.122l5.46-44.48a1 1 0 0 1 .992-.879h11.797a1 1 0 0 1 .996.915l3.784 44.482a1 1 0 0 1-.996 1.084M333.33 177.902h-4a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5M341.08 177.902h-4a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5M349.08 177.902h-4a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5M302.33 133.902a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0" mask="url(#h)"/></g><g><path fill="#FAB9AF" d="M87.567 134.68s15.21 5.365 16.368 5.41c1.162.042 8.141-1.814 11.317-.497 2.354.973 6.42 2.418 7.06 3.175.64.757-2.909.61-3.66.37-.753-.24-2.913.515-3.032.723-.117.208 5.242 1.136 7.553 1.943 2.311.807 3.525 1.609 3.516 1.996-.011.384-4.343.146-5.672-.142-1.325-.286 4.758 1.4 5.976 2.515 1.221 1.115-5.432.388-7.075-.12-1.644-.511 6.095 1.549 6.563 2.424.47.876-6.69.183-8.488-.283-1.8-.467 5.477 1.026 5.855 1.65.377.624-8.127.44-11.038.016-2.695-.391-5.903-.61-11.293-5.425-.992-.885-15.658-2.35-15.658-2.35l1.708-11.405z"/><path fill="#A6425F" d="M30.747 82.73s5.224-9.166 10.053-6.27c3.75 2.25 23.912 43.236 30.114 50.106 1.772 1.966 18.788 6.833 18.788 6.833s1.593 7.355-1.694 13.912c-1.146 2.283-24.72-6.53-26.565-7.707-9.362-5.978-19.224-32.312-19.224-32.312L30.747 82.73zM15.093 376.293s-3.725 1.353-9.706 1.258l.127 8.033s4.21.516 7.008.099l1.088-2.072 2.276 2.185s13.383 1.472 20.289.99c0 0 .804-2.347-2.483-3.417-3.288-1.07-10.78-2.542-12.903-3.723-2.122-1.18-5.696-3.353-5.696-3.353"/><path fill="#FFCBB9" d="M4.918 364.366l.368 10.112.118 3.086c5.572 1.689 9.685-1.262 9.685-1.262l.097-3.26.232-8.482-10.5-.194z"/><path fill="#A6425F" d="M49.658 376.966s-3.728 1.35-9.708 1.258l.126 8.032s4.213.515 7.008.097l1.088-2.072 2.276 2.187s13.383 1.472 20.29.989c0 0 .803-2.348-2.484-3.416-3.285-1.07-10.78-2.542-12.903-3.723-2.121-1.18-5.693-3.352-5.693-3.352"/><path fill="#FFCBB9" d="M39.469 365.026l.368 10.093.117 3.125c5.59 1.668 9.703-1.262 9.703-1.262l.097-3.629.233-8.134-10.518-.193z"/><path fill="#A6425F" d="M9.345 152.613c1.896-8.304 30.085 2.625 30.085 2.625s-.076 1.741-.212 4.629c5.091-2.046 7.935-7.927 17.062-5.913 0 0 6.298 34.316 6.298 68.92 0 10.874-.43 28.013-1.75 42.702-2.429 26.974-8.84 103.226-8.84 103.226l-15.666-.103s2.808-76.002 1.625-103.284c-.625-14.406-3.479-37.323-4.594-48.688-1.903 12.286-2.086 34.632-4.775 49.546-4.8 26.64-12.067 102.577-12.067 102.577l-15.038-.088c1.698-17.788 2.766-87.464 2.305-102.823C2.835 234.546.54 200.446 2.64 176.75c.982-11.077 4.548-14.682 6.705-24.138"/><g transform="translate(0 55.054)"><mask id="j" fill="#fff"><use xlink:href="#i"/></mask><path fill="#C96B86" d="M32.506.185s-15.785.822-25.172 12.89C-9.155 24.883 7.085 84.948 8.675 99.57c0 0 25.352 12.148 47.605 1.341 0 0 4.978-45.585 4.023-57.663-.538-6.823-2.508-21.503-8.585-31.181C47.037 4.61 41.751 3.523 32.506.185" mask="url(#j)"/></g><path fill="#90324D" d="M33.353 216.727s2.668-13.476 3.705-23.321c0 0 1.677 23.384-2.493 34.713l-1.212-11.392z"/><path fill="#FAB9AF" d="M37.703 43.966s-1.926 12.556-.079 19.564c.356 1.36-.47 2.766-1.802 3.21-5.224 1.746-12.216-5.075-15.645-7.396-.715-3.932 1.311-19.311 1.311-19.311l16.215 3.933z"/><path fill="#FAB9AF" d="M51.174 11.44s-4.349-.505-.484 5.891c1.88 3.109-.791 14.954-.791 14.954S45.36 48.734 39.123 47.456c-6.24-1.276-17.158-.567-19.142-4.253-1.987-3.687-5.247-28.643 5.528-32.754 10.776-4.113 25.665.991 25.665.991"/><g transform="translate(13 .054)"><mask id="l" fill="#fff"><use xlink:href="#k"/></mask><path fill="#1A4B69" d="M45.29 9.453c0 5.579-4.876 8.938-9.518 9.484-3.014.352-6.028-.14-9.017-.66-5.041-.875-9.132 4.877-10.135 9.13-1.133 4.823 3.83 12.62 8.225 10.07 4.396-2.554 11.06-2.696 11.06-2.696s2.553 3.262 1.278 8.933c-1.278 5.674-15.598 6.098-19.994 2.412-4.395-3.687-2.695-13.472-5.67-17.158-2.98-3.687-5.708 1.912-5.532 3.546.244 2.278 4.152 3.92 4.152 3.92L7.493 48.936C1.82 44.823-5.97 12.656 7.44 10.422 10.123 1.034 22.208.454 28.636.445c0 0 16.653.068 16.653 9.008" mask="url(#l)"/></g><path fill="#FFF" d="M37.123 65.59L20 59.37l16.21 12.835zM37.123 65.59l7.475 4.493-7.944-13.482z"/><path fill="#A6425F" d="M44.598 70.083l-7.475-4.492-.914 6.615 5.215 2.345z"/><path fill="#A6425F" d="M42.289 72.291s7.601 9.89 7.601 34.696c0 2.912-3.942 7.278-3.942 7.278l-5.278-7.035s.244-29.97-1.09-34.939c-1.337-4.969 2.709 0 2.709 0"/><path fill="#E6F7FF" d="M39.837 375.12l.117 3.124c5.59 1.668 9.703-1.262 9.703-1.262l.098-3.628c-2.466.386-6.717 1.066-9.918 1.765M5.286 374.478l.118 3.086c5.571 1.69 9.685-1.262 9.685-1.262l.097-3.26c-2.698.466-7.279 1.224-9.9 1.436"/><path fill="#326C90" d="M45.464 58.37l-8.877 5.105a2.349 2.349 0 0 1-3.206-.865L21.497 41.941a2.349 2.349 0 0 1 .865-3.206l8.877-5.105a2.349 2.349 0 0 1 3.207.865L46.33 55.164a2.348 2.348 0 0 1-.866 3.206"/><path fill="#FAB9AF" d="M40.895 51.462s1.85-1.025 3.299.603c.362.408.93.918 1.575 1.538.697.672 1.481 1.473 2.188 2.414 1.252 1.667 2.259 3.773 2.097 6.377 0 0 9.504 11.165 10.535 16.605 1.032 5.438-7.804 7.193-9.984 1.953-2.177-5.24-6.74-13.702-6.74-13.702s-6.167.002-7.73-1.153c-1.566-1.157-5.372-4.265-5.83-5.534-.458-1.269 2.247-.15 2.937 1.377.234.522 3.751.977 4.605.955.854-.02-2.883-4.936-4.693-7.894-1.808-2.956-3.071-6.162-2.574-6.503 1.092-.755 2.857 2.373 3.301 3.204.494.924 2.267 2.912 2.267 2.912"/><path fill="#A6425F" d="M57.114 67.718l-8.647 9.203s11.9 21.738 9.05 25.579c-.142.191-.423.304-.675.483 1.89 5.608 10.154 4.521 14.31 2.837.886-.469 2.41-.222 3.178-.814.546-1.043.952-1.666.53-3.635-.854-6.971-17.746-33.653-17.746-33.653"/><path fill="#A6425F" d="M53.419 93.109C48.09 91.14 32.36 84.202 24.373 79.64c-2.281-1.304-12.05-5.11-16.452-1.15-6.608 5.943-5.92 13.043 4.094 18.757 13.14 7.497 46.33 14.18 57.623 13.16 2.17-.6 8.499-4.59 4.287-9.744-2.948-3.607-20.282-7.28-20.506-7.554"/><path fill="#FA978D" d="M48.218 35.29s.645.75 1.86.7c1.43-.058 1.5-.816 1.5-.816l-1.358-6.13s-.825-.49-1.144-.467c-.267.02-.858.525-.858.525v6.188z"/></g></g></svg>').fadeIn();
        // membershipBg2Anime.play();
    }


    // TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
    // $(window).on('load', function() {
    //     for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
    //         TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
    //     }
    // });
    var owl = $('.grid-slider-owl');
    owl.owlCarousel({
        center: true,
        items: 1,
        loop: false,
        margin: 50,
        nav: true,
        dots: true
    });

    $(".content-mobile .wf-text").click(function() {
        $('.wf-text').addClass("active");
        $('.Startup').removeClass("hide");
        $('.Providers').addClass("hide");
        $('.des-text').removeClass("active");
    });
    $(".content-mobile .des-text").click(function() {
        $('.des-text').addClass("active");
        $('.Providers').removeClass("hide");
        $('.Startup').addClass("hide");
        $('.wf-text').removeClass("active");
    });
    // $(".apply-btn").click(function() {
    //     $('.apply-form').addClass("form-show");
    // });
    // $(".form-close").click(function() {
    //     $('.apply-form').removeClass("form-show");
    // });
    $(".check-box-pro").prop("checked", false);
    $(".check-box-pro").click(function() {
        if ($(this).is(":checked")) {
            $('.wf-text').removeClass("dark-text");
            $('.des-text').addClass("light-text");
            $('#Startup').addClass("hide");
            $('#Providers').removeClass("hide");

        } else {
            $('.wf-text').addClass("dark-text");
            $('.des-text').removeClass("light-text");
            $('#Startup').removeClass("hide");
            $('#Providers').addClass("hide");

        }
        $('.status-list').each(function(index) {
            $(this).find('li').each(function(index) {
                console.log();
                var liHei = $('.features-list li').eq(index).outerHeight();
                $(this).css({ height: liHei });
            });
        });
    });
};
$('#wrapper').append('<a href="contact-us.html" target="_blank" class="contactFloatingMobile mob-show">contact us</a>')

//Membership Page
if (isInnerpage) {
    // headerSet();
    if ($('body').hasClass('whiteHeader')) {
        $('header .logo .st0, header .logo .st1').attr('fill', '#fff');
        $('.scrollDownHolder .scrollDown').find('path').attr('fill', '#fff');
    }
    if ($('body').attr('id') == 'services') {
        headerAnim();
        $('#social').css({ opacity: 1 });
        startSocialAnims();
        $('[id^=zoomin]').each(function() {
            // TweenMax.set($(this),{opacity: 0});
            // if ($(this).attr('transform') != undefined) {
            // $(this).attr('data-orig-transform',$(this).attr('transform'))
            // $(this).attr('transform', $(this).attr('transform') + ' scale(0)');
            // } else { $(this).attr('transform', ' scale(0)'); }
            // if($(this).attr('data-orig-transform') != undefined)
            // {
            //     var to = $(this).attr('data-orig-transform');
            //     var to1 = to.split('(');
            //     var to2 = to1[1].split(',')
            //     var x = to2[0];
            //     var y = to2[1].split(')');
            //     console.log(x +'--'+ y);
            //     to3 = x + y + 0;
            //     $(this).css({'transform-origin': to3});
            // }
            // TweenMax.set(svgLetterStroke, { strokeDashoffset: 1250 });
        })

        TweenMax.set('text', { opacity: 0 });
        TweenMax.set('.ico path', { strokeDashoffset: 1250 });
        TweenMax.set('.ico path', { 'stroke-dasharray': 1250 });
    }
    // $(this).attr('transform-origin', '50% 50%')

    setTimeout(function() {
        // TweenMax.to('[id^=Stroke]', 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4");
        $('[id^=zoomin]').each(function() {
            $(this).attr('transform', $(this).attr('data-transform'))
            // TweenMax.to('[id^=zoomin]', 0.4, { transform: $(this).attr('data-transform'), ease: Power1.easeInOut });
            // if ($(this).attr('data-orig-transform') != undefined) {
            //     $(this).attr('transform', $(this).attr('data-orig-transform') + ' scale(1,1)');

            //     // TweenMax.to($(this), 0.5, { transform: $(this).attr('data-orig-transform') + ' scale(1,1)', ease: Power1.easeInOut }, "0.4");
            // } 
            // else 
            // { 
            //     $(this).attr('transform', 'scale(1,1)'); 
            // }
        })
        setTimeout(function() { TweenMax.to('.ico path', 1, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0.4"); }, 500);;
        $('text').each(function(index) {
            $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
        });
        $('#services .ico').each(function() {
            $(this).addClass('active');
        });
    }, 1500)
    // if ($('body').attr('id') == 'homePage') {
    //     headerAnim();
    //     scrollAnimStart();
    //     startSocialAnims();
    // }

    /** create a free consultation floating section starts **/
    // <div class="free-consultation-floating-wrapper">
    //     <div class="free-consultation-box">
    //         <label>For a free consultation</label>
    //         <a href="" class="button">Contact us</a>
    //     </div>
    // </div>

    if (!$(".free-consultation-floating-wrapper").length) {
        var freeConsultation = "<div class='free-consultation-floating-wrapper'><div class='free-consultation-box'><label>For a free consultation</label><a href='contact-us.html' target='_blank' class='button'>Contact us</a></div></div>";

        $("#wrapper").append(freeConsultation);
    }
    /** create a free consultation floating section ends **/

}

function shrinkHeader() {
    docScrollTop = $(document).scrollTop();
    var hdHei = 120;
    if (winWidth <= 1440) {
        hdHei = 90;
    }
    if (winWidth <= 1366) {
        hdHei = 85;
    }
    if (winWidth <= 1280) {
        hdHei = 80;
    }

    if (docScrollTop > $('header').outerHeight()) {
        $('header, #sectionTitle1, .pageTitle').addClass('resize');
        hdHei = 92;
        if (winWidth <= 1440) {
            hdHei = 75;
        }
        if (winWidth <= 1366) {
            hdHei = 62;
        }
        if (winWidth <= 1280) {
            hdHei = 65;
        }
    } else {
        hdHei = 120;
        if (winWidth <= 1440) {
            hdHei = 90;
        }
        if (winWidth <= 1366) {
            hdHei = 85;
        }
        if (winWidth <= 1280) {
            hdHei = 80;
        }

        $('header, #sectionTitle1, .pageTitle').removeClass('resize');
    }
    $('header .siteSubnav').css({ top: ((hdHei - $('header .siteSubnav').outerHeight()) / 2) });

}
$(window).on('scroll', function() {

});

//Why Join Page

joinBG2 = {
    container: document.getElementById('joinBg2'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'dist/json/businessHub.json', // the path to the animation json
    rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }
};



function joinIconAnimate(row) {
    console.log(row);
    if (row.index() == 0) {
        TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });

        TweenMax.to($(row).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
        TweenMax.to($(row).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
        TweenMax.to($(row).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });

        TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
        TweenMax.to($(row).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
    }
}
if ($('body').attr('id') == 'whyJoin') {
    TweenMax.set('.clmn_icon .triangleAnim', { opacity: 0 });
    TweenMax.set('.clmn_icon .greyIcon', { opacity: 0 });
    TweenMax.set('.clmn_icon .greyElem', { transform: 'scale(0, 0)' });
    TweenMax.set('.clmn_icon .coinElem', { transform: 'scale(0, 0)' });
    TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50% 50% 0' });
    TweenMax.set('.clmn_icon .greyBox', { transform: 'scale(0, 1)' });
    TweenMax.set('.clmn_icon .yellowBox', { transform: 'scale(0, 1)' });
    TweenMax.set('.clmn_icon .greyElemOpa', { opacity: 0 });
    TweenMax.set('.clmn_content li', { opacity: 0 });
    // TweenMax.set('#aboutnetwork', { opacity: 0 });
    TweenMax.set('#squareMove', { opacity: 0 });
    TweenMax.set('.circleMoveHolder', { opacity: 0 });
    TweenMax.set('.wave-img', { opacity: 0 });


    // aboutnetworkData = {
    //     container: document.getElementById('aboutnetwork'),
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'dist/json/whyjoin.json', // the path to the animation json
    //     rendererSettings: {
    //         scaleMode: 'noScale',
    //         clearCanvas: true,
    //         progressiveLoad: true,
    //         hideOnTransparent: true
    //     }
    // };

    nAboutAnimData = {
        container: document.getElementById('nAbout'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/nAbout.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    nAboutAnim = bodymovin.loadAnimation(nAboutAnimData);
    // aboutnetwork = bodymovin.loadAnimation(aboutnetworkData);
    whyJoinJAnimData = {
        container: document.getElementById('why_j'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_j.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinJAnim = bodymovin.loadAnimation(whyJoinJAnimData);

    whyJoinFAnimData = {
        container: document.getElementById('why_f'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_f.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinFAnim = bodymovin.loadAnimation(whyJoinFAnimData);
    whyJoinBAnimData = {
        container: document.getElementById('why_b_mobile'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_b.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinBAnim = bodymovin.loadAnimation(whyJoinBAnimData);
    whyJoinBAnimDesktopData = {
        container: document.getElementById('why_b_desktop'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'dist/json/letters/why_b.json', // the path to the animation json
        rendererSettings: {
            scaleMode: 'noScale',
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true
        }
    }
    whyJoinBAnimDesktop = bodymovin.loadAnimation(whyJoinBAnimDesktopData);

    // introTextSet('.content .row:nth-child(1)');


    $(window).on('resize scroll', function() {

        $('.content .row .introText').each(function() {
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(0).hasClass('complete') && $(this).parents('.row').index() == 0) {
                var section = $(this).parents('row');
                introTextSet(section);
                if (!$('#why_j').hasClass('complete')) {
                    $('#why_j').addClass('complete')
                    introtextAnimate('.content .row:nth-child(1)')
                    whyJoinJAnim.playSegments([
                        [0, 60]
                    ], true);
                }
                document.getElementById('why_j').addEventListener('mouseenter', function() {
                    console.log(whyJoinJAnim.getDuration(true))
                    whyJoinJAnim.playSegments([
                        [60, 80]
                    ], true);
                });
                document.getElementById('why_j').addEventListener('mouseleave', function() {
                    whyJoinJAnim.playSegments([
                        [80, 100]
                    ], true);
                });
                introtextAnimate(section);
            }
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(0).hasClass('complete') && $(this).parents('.row').index() == 1) {
                var currRow = $(this).parents('.row');
                setTimeout(function() {
                    TweenMax.to($(currRow).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
                    TweenMax.to($(currRow).find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
                    TweenMax.to($(currRow).find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
                    TweenMax.to($(currRow).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
                    TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
                    TweenMax.to($(currRow).find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
                }, 1000)
                $(this).parents('.row').addClass('complete');
            }
            if ($(this).isInViewportCustom() && !$(this).parents('.row').eq(1).hasClass('complete') && $(this).parents('.row').index() == 2) {
                var section = $(this).parents('row');
                introTextSet(section);
                if (!$('#nAbout').hasClass('complete')) {
                    $('#nAbout').addClass('complete')
                    nAboutAnim.playSegments([
                        [0, 100]
                    ], true);
                }
                document.getElementById('nAbout').addEventListener('mouseenter', function() {
                    console.log(nAboutAnim.getDuration(true))
                    nAboutAnim.playSegments([
                        [100, 160]
                    ], true);
                });
                document.getElementById('nAbout').addEventListener('mouseleave', function() {
                    nAboutAnim.playSegments([
                        [176, 200]
                    ], true);
                });
                introtextAnimate(section);

                // TweenMax.to('#aboutnetwork', 1, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('#squareMove', 0.5, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('.circleMoveHolder', 0.5, { opacity: 1, ease: Power1.easeInOut });
                TweenMax.to('.wave-img', 0.5, { opacity: 1, ease: Power1.easeInOut });
                // setTimeout(function() {
                //     if (!$('#aboutnetwork').hasClass('complete')) {
                //         $('#aboutnetwork').addClass('complete')
                //         // aboutnetwork.addEventListener('DOMLoaded', function(){
                //         aboutnetwork.playSegments([[59, 160]], true);
                //         // setTimeout(function(){
                //         //     aboutnetwork.playSegments([[114, 240]], true);

                //         // },2000)
                //         if (!mobile) {
                //             $('.scrollbar-rail').scrollbar({
                //                 onScroll: function() {
                //                     $('.scroll-wrapper').find('.jsonChange').isInViewport({ tolerance: 0, viewport: $('.scroll-wrapper') }).playit();
                //                 }
                //             });
                //         }

                //     }
                // }, 1000)


            }
        });
    });
}
// document.getElementsByClassName('jsonChange')[0].addEventListener('mouseenter', function(){
//     aboutnetwork.playSegments([[59, 160]], true);
// })

//Membership Page


// $('.fixedBanner .banner span').each(function() {
//     $(this).css({ transform: 'scale(0,0)' });
//     // $(this).css({'width': $(this).width(), 'height': $(this).height(), 'font-size': '0px'});
// });

// TweenMax.set($('.fixedBanner .banner span'), {'font-size': '0px'});
// $(window).on('load', function() {
//     for (var i = 0; i < $('.fixedBanner .banner').find('span').length; i++) {
//         TweenMax.to($('.fixedBanner .banner').find('span').eq(i), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut }, "+=0.5")
//     }
// })

// TweenMax.to($('.fixedBanner .banner'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut});
// function serviceIconAnimate(row) {
// TweenMax.to($(row).find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
// TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
// // TweenMax.set('.clmn_icon .greyElem', {'transform-origin': '50% 50% 0'});
// if (row.index() == 0) {
//     TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { animation: 'circleAnim1 4s infinite linear', ease: Power1.easeInOut });
// } else {
//     TweenMax.set('.clmn_icon .greyElem', { 'transform-origin': '50px 160px 0' });
//     TweenMax.to($(row).find('.clmn_icon').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });
// }
// TweenMax.to($(row).find('.clmn_icon').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
// if (row.index() == 4 || row.index() == 1) {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
// } else if (row.index() == 3 || row.index() == 2) {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(0, 0)', ease: Power1.easeInOut });
// } else {
//     TweenMax.to($(row).find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(30px, 0)', ease: Power1.easeInOut });
// }
// TweenMax.to($(row).find('.clmn_icon').find('.greyElemOpa'), 0.4, { opacity: 1, ease: Power1.easeInOut });
// }
// if ($('body').attr('id') == 'membership') {
//     introTextSet($('#membership .content'));
//     $(window).on('resize scroll', function() {
//         docScrollTop = $(document).scrollTop();
//         scrollHei = (!mobile) ? ($(window).outerHeight() - $('header').outerHeight()) : ($('.fixedBanner').outerHeight() - $('header').outerHeight());
//         if (docScrollTop > scrollHei && isInnerpage) {
//             console.log(1254);
//             $('.logo svg .st0').each(function() {
//                 $(this).attr('fill', $(this).attr('data-fill'));
//             })
//             $('.logo svg .st1').each(function() {
//                 $(this).attr('fill', $(this).attr('data-fill'));
//             })
//             $('body').removeClass('whiteHeader');
//             // $('#navIcon .dotsHolder .dots').css('background','#ca6c86');
//             // $('#navIcon .lineHolder .line').css('background','#572359');
//             // $('header').css('background','rgba(255, 255, 255, 0.9)');
//         } else {
//             $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
//             $('body').addClass('whiteHeader');
//             //$('#navIcon .dotsHolder .dots').css('background','#fff');
//             //$('#navIcon .lineHolder .line').css('background','#fff');
//             //$('header').css('background','none');
//         }
//         $('.content .row .introText').each(function() {
//             if ($(this).isInViewportCustom() && !$(this).parents('.row').hasClass('complete')) {
//                 // introTextSet($(this));
//                 var currRow = $(this).parents('.row');
//                 introtextAnimate(currRow);
//                 serviceIconAnimate(currRow);

//                 // for (var i = 0; i < $(this).next('ul').find('li').length; i++) {
//                 //     console.log(i);
//                 //     TweenMax.to($(this).next('ul').find('li').eq(i), 0.8, { opacity: 1, ease: Power1.easeInOut }, "+=0.5")
//                 // }

//                 $(this).parents('.row').addClass('complete');
//             }
//         });
//     });
// };
// $( document ).ready(function() {
//     $(".apply-btn").click(function() {
//         $('.apply-form').addClass("form-show");
//     });
//     $(".form-close").click(function() {
//         $('.apply-form').removeClass("form-show");
//     });
//     $(".check-box-pro").prop("checked", false);
//     $(".check-box-pro").click(function () {

//         if ($(this).is(":checked")) {
//             $('.wf-text').removeClass("dark-text");
//             $('.des-text').addClass("light-text");
//             $('#Startup').addClass("hide");
//             $('#Providers').removeClass("hide");

//         } else {
//             $('.wf-text').addClass("dark-text");
//             $('.des-text').removeClass("light-text");
//             $('#Startup').removeClass("hide");
//             $('#Providers').addClass("hide");

//         }

//     });
// });
//Membership Page
// if (isInnerpage) {
//     headerSet();
//     headerAnim();
//     scrollAnimStart();
//     startSocialAnims();
// }
// =======
/*document.getElementsByClassName('jsonChange')[0].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[114, 240]], true);
})

document.getElementsByClassName('jsonChange')[1].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[240, 310]], true);
})

document.getElementsByClassName('jsonChange')[2].addEventListener('mouseenter', function(){
    aboutnetwork.playSegments([[310, 400]], true);
})*/
//
// research

// database
// 
// tools
// 
$('.jsonChange').on('mouseeenter', function() {
    var jsonFrames = $(this).attr('data-frames');
    //     // if($(this).hasClass(''))
})
if (!mobile && ($('body').attr('id') == 'aboutPage' || $('body').attr('id') == 'whyJoin')) {
    if (!mobile) {
        $('.scrollbar-rail').scrollbar();
    }
}

// Paste here
$(window).on('scroll resize', function() {
    docScrollTop = $(document).scrollTop();

    if (mobile) {
        if (docScrollTop > $('.notificationBar').outerHeight()) {
            console.log(154);
            $('.notificationBar').css({ top: '-100%' });
            $('header').css({ top: 0 });
        } else {
            $('.notificationBar').css({ top: '-0%' });
            $('header').css({ top: $('.notificationBar').outerHeight() });
        }

    }
    // if ($('.fixedBanner').isInViewportCustom() && $('body').attr('id') == "join") {
    //     joinBG2Init.play();
    // } else {
    //     joinBG2Init.pause();
    // }
    // $('.titleLetterAnim svg').each(function() {
    //     if (!$(this).parents('.titleLetterAnim').hasClass('complete')) {
    //         if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
    //             $(this).parents('.titleLetterAnim').addClass('complete');
    //             TweenMax.to($(this).find('.stroke'), 0.4, { strokeDashoffset: 0, ease: Power1.easeInOut }, "0");
    //             TweenMax.to($(this).find('.fill'), 0.4, { fill: '#FCC14A', ease: Power1.easeInOut }, "0.5");
    //         }
    //     }
    // });
    if (!mobile) {
        if ($(window).scrollTop() > ($('.fixedBanner').outerHeight() + 20)) {
            $('.fixedBanner .banner').css({ position: 'relative' })
        } else {
            $('.fixedBanner .banner').css({ position: 'fixed' })
        }
        shrinkHeader();
    }
    $('.titleLetterAnim > .lettring').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 100)).animate({ opacity: 1 }, 500);
            });
            $(this).parents('h2').find('svg').delay(1000).animate({ opacity: 1 }, 500);

        }
    });

    scrollHei = (!mobile) ? ($(window).outerHeight() - $('header').outerHeight()) : ($('.fixedBanner').outerHeight() - $('header').outerHeight());
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent * 100)
    if (scrollPercentRounded > 95) {
        $('.scrollDown').fadeOut();
        $('#back2Top').fadeIn();
    } else {
        $('.scrollDown').fadeIn();
        $('#back2Top').fadeOut();
    }

    if (docScrollTop > scrollHei && isInnerpage) {
        // console.log(1);
        $('.logo svg .st0').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        })
        $('.logo svg .st1').each(function() {
            $(this).attr('fill', $(this).attr('data-fill'));
        });
        //$('.scrollDownHolder .scrollDown').addClass('onWhite').find('path').attr('fill', '#562359');
        $('.scrollDownHolder').addClass('onWhite').find('path').attr('fill', '#562359');
        setTimeout(function() { $('.free-consultation-floating-wrapper').css({ opacity: 1 }); }, 300)
        // console.log($('.iconCircle').attr('data-fill'))
        $('#social').addClass('onWhite');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: $('#social').attr('data-fill') });
                TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: $('#social').attr('data-fill') });
            }
        }
        // $('.pageTitle').animate({opacity: 0}, 500);
        $('.pageTitle').addClass('toggle');
        $('body').removeClass('whiteHeader');
        // $('.iconCircle').each(function() {
        //     $(this).attr('stroke', $(this).attr('data-fill'));
        // });
        // $('.iconPath').each(function() {
        //     $(this).attr('fill', $(this).attr('data-fill'));
        // });
        // $('#navIcon .dotsHolder .dots').css('background','#ca6c86');
        // $('#navIcon .lineHolder .line').css('background','#572359');
        // $('header').css('background','rgba(255, 255, 255, 0.9)');
    }
    if (docScrollTop < scrollHei && isInnerpage) {
        // console.log(11);
        $('.logo svg .st0, .logo svg .st1').attr('fill', '#fff');
        $('body').addClass('whiteHeader');
        // $('.pageTitle').animate({opacity: 1}, 500);
        $('.pageTitle').removeClass('toggle');
        $('.scrollDownHolder .scrollDown').removeClass('onWhite').find('path').attr('fill', '#fff');
        $('#social').removeClass('onWhite');
        for (var i = 0; i < socialIcons.length; i++) {
            if (isInnerpage && !mobile) {
                TweenMax.to($(iconCircle[i]), 0.1, { ease: Power3.easeIn, stroke: '#fff' });
                TweenMax.to($(iconPath[i]), 0.1, { ease: Power3.easeIn, fill: '#fff' });
            }
        }
        setTimeout(function() { $('.free-consultation-floating-wrapper').css({ opacity: 0 }); }, 300)

    }

    $('.benefits-title').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            $(this).find('.letter').each(function(index) {
                $(this).delay((index * 50)).animate({ opacity: 1 }, 500);
            });
        }
    })
    $('.slideUp').each(function() {
        if ($(this).isInViewportCustom() && !$(this).hasClass('complete')) {
            $(this).addClass('complete');
            // $(this).each(function(index) {
            //     $(this).delay((index * 100)).animate({ top: 0, opacity: 1 }, 500);
            // });
        }
    });

    // if ($(".lets-get-started").length) {
    //     docScrollTop = $(window).scrollTop() + $(window).height();

    //     if (docScrollTop >= $(".lets-get-started").position().top) {
    //         $('.free-consultation-floating-wrapper, #social').fadeOut(500);
    //     } else {
    //         $('.free-consultation-floating-wrapper, #social').fadeIn(500);
    //     }
    // }

    if (mobile && $('.contactFloatingMobile').length && $("footer").length) {
        docScrollTop = $(window).scrollTop() + $(window).height();
        if (docScrollTop >= $("footer").offset().top) {
            $('.contactFloatingMobile').addClass('hideContactButton');
        } else {
            $('.contactFloatingMobile').removeClass('hideContactButton');
        }
    }

});

// headerSet()
// socialAnimSet()
// TweenMax.set('#whyJoin .dots-bg', { opacity: 0 });
//Why Join Page
function removeLoader() {
    $('.fixedBanner .loader').animate({ opacity: 0 }, 500, function() {
        $('.fixedBanner .loader').remove();
    });
}
if (page_name == 'businesshub.html' && mobile) {
    whyJoinJAnim.playSegments([
        [0, 60]
    ], true);
    whyJoinBAnim.playSegments([
        [0, 80]
    ], true);
    whyJoinFAnim.playSegments([
        [0, 100]
    ], true);
    nAboutAnim.playSegments([
        [0, 100]
    ], true);
    $('.slideUp').each(function() {
        $(this).addClass('complete');
    });
    TweenMax.to($('.sec3').find('.clmn_icon').find('.yellowBox'), 0.4, { transform: 'scale(1, 1) translate(50px, 0)', ease: Power1.easeInOut });
    TweenMax.to($('.sec3').find('svg').find('.greyBox'), 0.4, { transform: 'scale(1, 1)', ease: Power1.easeInOut });
    TweenMax.to($('.sec3').find('svg').find('.coinElem'), 0.4, { transform: 'scale(1, 1)' });
    TweenMax.to($('.sec3').find('.clmn_icon').find('.greyIcon'), 0.4, { opacity: 1, ease: Power1.easeInOut });
    TweenMax.set('svg .greyElem', { 'transform-origin': '50px 160px 0' });
    TweenMax.to($('.sec3').find('svg').find('.greyElem'), 0.4, { animation: 'squareAnim 4s infinite linear', ease: Power1.easeInOut });

}



function partnersCarousel() {
    $('.partners .owl-carousel').owlCarousel({
        center: false,
        loop: false,
        margin: 10,
        responsive: {
            768: {
                items: 3,
            },
            320: {
                items: 1,
                center: true,
            }
        }
    });
}
if ($('body').attr('id') == 'homePage' && winWidth <= 1024) {
    partnersCarousel();
}
if ($('body').attr('id') == 'policyPage') {
    headerAnim();
    $('.policy-section').delay(1200).animate({ opacity: 1 }, 500);
}

if ($('body').attr('id') == 'mediaCenterPage') {
    scrollAnimStart()

    $('.fullSize').click(function() {
        $('.galleryContainer').css("opacity", 0);
        $('.overlay').show();
        $('.galleryContainer').addClass('fullsizeGallery');
        $(this).hide();
        owlres();
        $('body').addClass('noScroll');
        // var owl = $('.imgContainer');

        // owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        // owl.find('.owl-stage-outer').children().unwrap();

        // owl.owlCarousel({
        //     items: 1,
        //     loop: false,
        //     nav: true,
        //     dots: false
        // });   
        setTimeout(function() {
            $('.galleryContainer').animate({ "opacity": 1 }, 800);
        }, 300);
    });

    $('.closeBtn').click(function() {
        $('.overlay').hide();
        $('.galleryContainer').removeClass('fullsizeGallery');
        $('.fullSize').show();
        setTimeout(function() {
            owlres();
        }, 100);
        owlres();
        $('body').removeClass('noScroll');
    });

    $('.pageTitle').animate({ opacity: 1 }, 500);
}