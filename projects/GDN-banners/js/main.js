$(document).ready(function(){
	$(".banner_block .banner_name").click(function(){
		if(!$(this).parent().find('.banner_file').hasClass('active')) {
            $(".accordion_row").find('.banner_file').removeClass('active');
            $(".accordion_row").find('.banner_file').slideUp();
        };
        $(this).parent().find('.banner_file').slideToggle();
        $(this).parent().find('.banner_file').addClass('active');
        $('.banner_block .banner_name').removeClass('active');
        $(this).addClass('active');
	});

	$('.banner_file li').click(function(){
		var src = $(this).attr('data-src');
		$('iframe').attr('src',src);
		$('.banner_file li').removeClass('active');
		$(this).addClass('active');
	});	

	// Celtra Banner page
	$('.banner_fold ul li').click(function() {
		$('.banner_fold ul li').removeClass('active');
		$(this).addClass('active');
		
	    var i = $(this).index();
	    $('.fullarticle').removeClass('active');
		$(this).addClass('active');
	    $('.fullarticle').hide();
	    $('#article' + (i+1)).show();
	});


});



