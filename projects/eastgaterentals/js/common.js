windowWidth = screen.width;
windowHeight = screen.height;
var jsonData = "";

$(window).on("load", function (e) {
  // $('.resultContainer ul li').each(function(){
  //   var imageWidth = $(this).find('img').outerWidth(), imageHeight = $(this).find('img').outerHeight();
  //    console.log(imageWidth, imageHeight);
  //   if (imageWidth / imageHeight >= 1) {
  //     $(this).find('img').css({ width: '100%', height: 'auto' })
  //   } else if (imageWidth / imageHeight < 1) {
  //     $(this).find('img').css({ width: 'auto', height: '100%' })
  //   }
  // });

  // $('.carouselContainer img').each(function(){
  //   var imageWidth = $(this).outerWidth(), imageHeight = $(this).outerHeight();
  //    console.log(imageWidth, imageHeight);
  //   if (imageWidth / imageHeight >= 1) {
  //     $(this).css({ width: '100%', height: 'auto' })
  //   } else if (imageWidth / imageHeight < 1) {
  //     $(this).css({ width: 'auto', height: '100%' })
  //   }
  // });

  
  
})

$(function(){
    if(windowWidth > 1024)
    {
      if($('#fullpage').length)
      {
        $('#fullpage').fullpage({
          anchors: ['page1', 'page2', 'page3', 'page4'],
          sectionSelector: '.vertical-scrolling',
          animateAnchor: true,
          afterLoad: function(anchorLink, index) {
           if(index!=1)
           {
             $('header').addClass('active');
           }
           else{
            $('header').removeClass('active');
           }
          }
          // css3: true,
          // scrollOverflow: true,
          // scrollOverflowOptions: {
          //     click: false,
          //     tap: true,
          //     interactiveScrollbars: true
          // },
         
        }); 
      }
    }

    $(document).on("click touchstart", function(e) {
      if ($(e.target).closest('.lightbox').length === 0 && $(e.target).closest('.viewLocation').length === 0 && $(e.target).closest('.hireNow').length === 0 && $(e.target).closest('.viewDetails').length === 0 && $(e.target).closest('.locations').length === 0 && $(e.target).closest('.iceManufacturing .btn').length === 0 && $(e.target).closest('.dieselDelivery .btn').length === 0){
          // return;
          $('.lightbox, .overlay').hide();
      }
  });

    $('.lightbox .closeBtn').click(function(){
      $('.lightbox, .overlay').hide();
    });

    // $('.goBack').click(function(){
    //   $('.overlay,#prdDetail').hide();
    //   $('.productDetail .carouselWrapper .carouselContainer').html("");
    //   $('.productDetail .carouselWrapper .carouselContainer').removeClass('owl-carousel owl-theme owl-loaded')
    // });

    $('.selectLocationDrp').click(function(){
      $('.locationList').slideToggle();
    });

    $('.locations').click(function(){
      if(windowWidth<1024)
      {
        var ourLocationsOffsetTop = $('.ourLocations').offset().top
      $('html,body').animate({
        scrollTop:ourLocationsOffsetTop
      },500);
      }      
    });

    $('.locationPopup ul li').click(function(){
      var imgSrc = $(this).attr('data-img');
      var title = $(this).find('.title').text();
      var address = $(this).find('.address').text();
      var directionUrl = $(this).find('a').attr('href');
      $(this).addClass('active').siblings().removeClass('active')
      $('.locationPopup .rightSec').find('img').attr("src","images/"+imgSrc);
      $('.locationPopup .rightSec').find('.title').text(title);
      $('.locationPopup .rightSec').find('.address').text(address);
      $('.direction').attr('href',directionUrl)

      if(windowWidth<=768)
      {
        var thisVal = $(this).find('.title').text();
        $('.selectLocationDrp').text(thisVal);
        $('.locationList').slideToggle(); 
      }  
    }).eq(0).click();

    $('.hireNow').click(function(){
      if(windowWidth<1024)
      {
        var hireNowWrapperOffsetTop = $('.hireNowWrapper').offset().top
      $('html,body').animate({
        scrollTop:hireNowWrapperOffsetTop
      },500);
      }      
    });

    if($(".carouselContainer").length)
    {
      $(".carouselContainer").owlCarousel({
        nav: true,
        pagination: true,
        items: 1,
        responsive: {768: {items: 1}}
      });
    }
    

    // $(document).on('click','.viewDetails',function(){
    //   openLightbox("prdDetail");
    //   var index = $(this).parents('li').attr('data-index');
    //   var tabName = $(this).parents('.resultContainer').attr('id');
    //   var title, desc, imageArray;    
      

    //   if(tabName=="trucks")
    //   {
    //     title = jsonData.trucks[index].title;
    //     desc = jsonData.trucks[index].description;
    //     imageArray = jsonData.trucks[index].images;
    //     for(k=0; k<jsonData.trucks[index].specifications.length; k++)
    //     {
    //       var specObj = jsonData.trucks[index].specifications[k]
    //       var keys = Object.keys(specObj);
    //       var keyValue = specObj[keys]
    //       $('.productDetail .descriptionWrapper .leftSec table').append('<tr><td>'+keys+'</td><td>'+keyValue+'</td></tr>');
    //     }        

    //     for(l=0;l<imageArray.length;l++)
    //     {
    //       $('.productDetail .carouselWrapper .carouselContainer').append('<img src="images/'+imageArray[l]+'" />');
    //     }

    //   }
    //   else if(tabName=="trailer")
    //   {
    //     title = jsonData.trailer[index].title;
    //     desc = jsonData.trailer[index].description;
    //     imageArray = jsonData.trailer[index].images;
    //     for(k=0; k<jsonData.trailer[index].specifications.length; k++)
    //     {
    //       var specObj = jsonData.trailer[index].specifications[k]
    //       var keys = Object.keys(specObj);
    //       var keyValue = specObj[keys]
    //       console.log(keyValue);
    //       $('.productDetail .descriptionWrapper .leftSec table').append('<tr><td>'+keys+'</td><td>'+keyValue+'</td></tr>');
    //     }

    //     for(l=0;l<imageArray.length;l++)
    //     {
    //       $('.productDetail .carouselWrapper .carouselContainer').append('<img src="images/'+imageArray[l]+'" />');
    //     }
    //     $(".carouselContainer").owlCarousel({
    //       nav: true,
    //       pagination: true,
    //       items: 1,
    //       responsive: {768: {items: 1}}
    //     });  

    //   }
    //   $('.productDetail .title').text(title);
    //   $('.productDetail .descCopy').text(desc);
    //   $('.productDetail .descriptionWrapper .leftSec h2').text(title);
      
      
             
      
    // });
    
    $('.iceManufacturing .btn').click(function(){
      openLightbox("iceManufacturingLightbox");
    });

    $('.dieselDelivery .btn').click(function(){
      openLightbox("dieselDeliveryLightbox");
    });

    $('.filterTab a').click(function(){
      var _thisClass = $(this).attr('class');
      $(this).addClass('active').siblings().removeClass('active');
      $('#'+_thisClass).css({"display":"flex"}).siblings().hide();
    }).click();

    $('.hireTrucks').click(function(){
      $('.trucks').click();
    });

    $('.hireTrailers').click(function(){
      $('.trailer').click();
    });

    

    // if($('.hireNowWrapper').length){
    //   if(windowWidth>1024)
    //   {
    //     $(".hireNowWrapper .resultContainer").owlCarousel({
    //       nav: true,
    //       pagination: true,
    //       items: 1,
    //       responsive: {768: {items: 1}}
    //     });
    //   }      
    // }

    if($('.aboutUs').length){
      if($(window).scrollTop()>100)
      {
        $('header').addClass('active');
      }
      else{
        $('header').removeClass('active');
      }
    }  

    if(windowWidth<=1024)
    {
      if($(window).scrollTop()>100)
      {
        $('header').addClass('active');
      }
      else{
        $('header').removeClass('active');
      }
    }

    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if($('.aboutUs').length){
        if(scrollTop>100)
        {
          $('header').addClass('active');
        }
        else{
          $('header').removeClass('active');
        }
      }   
      
      if(windowWidth<=1024)
      {
        if(scrollTop>100)
        {
          $('header').addClass('active');
        }
        else{
          $('header').removeClass('active');
        }
      }
    });

    // Load json data - START
    // var jsonUrl = "js/hirenow.json";
   
        // var jsonUrl = "dist/json/media-center.json"; 
        // $.ajax({
        //     url: jsonUrl,
        //     type: "GET",
        //     crossDomain: true,
        //     success: function(data) {
        //       jsonData = data
        //        console.log(jsonData);
        //       var truckCont = ""
        //       var trailerCont = ""
        //       for (i = 0; i < jsonData.trucks.length; i++) {
                
        //         if(i%4==0)
        //         {
        //           truckCont+="<ul>"
        //         }
        //           truckCont+='<li data-index="'+i+'">'
        //           truckCont+='<div class="leftSec"><img src="images/'+jsonData.trucks[i].images[0]+'" alt="Shuttle Luggage Trailer Single Axle" /></div>'
        //           truckCont+='<div class="rightSec">'
        //           truckCont+='<p class="title">'+jsonData.trucks[i].title+'</p>'
        //           truckCont+='<p class="details">'+jsonData.trucks[i].description.substring(0,100)+'...</p>'
        //           truckCont+='<a href="javascript:;" class="viewDetails">View details</a>'
        //           truckCont+='</div>'
        //           truckCont+='</li>'
                  
        //           if((i+1)%4==0)
        //           {
        //             truckCont+="</ul>"
        //           }
        //       }

        //       for (j = 0; j < jsonData.trailer.length; j++) {
        //         if(j%4==0)
        //         {
        //           trailerCont+="<ul>"
        //         }
        //           trailerCont+='<li data-index="'+j+'">'
        //           trailerCont+='<div class="leftSec"><img src="images/'+jsonData.trailer[j].images[0]+'" alt="Shuttle Luggage Trailer Single Axle" /></div>'
        //           trailerCont+='<div class="rightSec">'
        //           trailerCont+='<p class="title">'+jsonData.trailer[j].title+'</p>'
        //           trailerCont+='<p class="details">'+jsonData.trailer[j].description.substring(0,100)+'...</p>'
        //           trailerCont+='<a href="javascript:;" class="viewDetails">View details</a>'
        //           trailerCont+='</div>'
        //           trailerCont+='</li>'
                  
        //           if((j+1)%4==0)
        //           {
        //             trailerCont+="</ul>"
        //           }
        //       }

        //       $('#trucks').html(truckCont);
        //       $('#trailer').html(trailerCont);
              
        //       if($('.hireNowWrapper').length){
        //         if(windowWidth>1024)
        //         {
        //           $(".hireNowWrapper .resultContainer").owlCarousel({
        //             nav: true,
        //             pagination: true,
        //             items: 1,
        //             responsive: {768: {items: 1}}
        //           });
        //         }      
        //       }

              
        //     },
        //     error: function() {

        //     }
        // });
    // Load json data - END

});
if($('#viewLocation').length)
{
  document.getElementById("viewLocation").addEventListener("click", function(){
    openLightbox("locationPopup");
  });
}


// document.getElementById("hireNow").addEventListener("click", function(){
//   openLightbox("filterPopup");
// });



function openLightbox(id) {
  document.getElementById("overlay").style.display = "block";
  if(windowWidth<=1024)
  {
    
    var scrollTop = $(window).scrollTop()
    var lightboxHeight = $('#'+id).height(); 
    $('#'+id).css({"top":(windowHeight-lightboxHeight)/2 + scrollTop});
    // alert("windowHeight " + windowHeight +" lightboxHeight "+ lightboxHeight +" scrollTop "+ scrollTop)
  }
  
  if(id=="filterPopup" || id=="prdDetail" || id=="iceManufacturingLightbox" || id=="dieselDeliveryLightbox")
  {
    document.getElementById(id).style.display = "block";
  }
  else if(id=="locationPopup"){
    document.getElementById(id).style.display = "flex";
  }
}





