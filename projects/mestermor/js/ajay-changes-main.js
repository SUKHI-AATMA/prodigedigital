
document.addEventListener("DOMContentLoaded", function(event) {
    pwgc_bind_redeem_form_custom();    
});
$(document).ready(function() {

    //====== quiz page - start
    
    $('.quiz-gallery-container').fadeIn(5000);

    $('#chartClick1').on("click", function() {
        $('#chartPopup1').toggleClass("active");
    });
    $('#chartClick2').on("click", function() {
        $('#chartPopup2').toggleClass("active");
    });

    
    // $('label').click(function() {
    //     //$('label').removeClass('active');
    //     if($('label input').is(':checked')) { 
    //       $(this).addClass('active')
    //      } 
    // });
	
	$('.essentail-box .ess-1 label').click(function () {
        $('label').removeClass('active');
        $(".ess-2 input").prop("checked", false);
        $(".ess-1 input").prop("checked", true);
        if ($('.ess-1 input').is(':checked')) {
            $(this).addClass('active');
            var pid1 = $('.ess-1 input[name=box]').val();
            var rid1 = $('.ess-2 input[name=box]').val();
            var cardselect = '.ess-cart-' + pid1 + ' .ajax_add_to_cart';
            $(cardselect).click();
            $.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php',
                data: {action: 'remove_item_from_cart', 'product_id': rid1},
                success: function (res) {
                }
            });
        }
    });

    $('.essentail-box .ess-2 label').click(function () {
        $('label').removeClass('active');
        $(".ess-2 input").prop("checked", true);
        $(".ess-1 input").prop("checked", false);
        if ($('.ess-2 input').is(':checked')) {
            $(this).addClass('active');
            var pid2 = $('.ess-2 input[name=box]').val();
            var rid2 = $('.ess-1 input[name=box]').val();

            var cardselect2 = '.ess-cart-' + pid2 + ' .ajax_add_to_cart';
            $(cardselect2).click();
            $.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php',
                data: {action: 'remove_item_from_cart', 'product_id': rid2},
                success: function (res) {
                }
            });
        }
    });

    if ($('#formQuiz').length) {
        // onclick of start
        $("#start").click(function(){
            $('.screen1').hide();
            $('.formCommon').first().show();
            $('.button-group').show();
        });
        
        $('.button-group').hide();

        $("form .formCommon").each(function(e) {
            if (e != 0){
                $(this).hide();
            }      
        });  

        // range slider
        var slider = document.getElementById("waistSize");
        var sliderOutput = document.getElementById("sliderOutput");
        sliderOutput.innerHTML = slider.value;

        slider.oninput = function() {
            sliderOutput.innerHTML = this.value;
        }
    }
    
    

    // datepicker
    $(".datePickerMonthYear").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        beforeShow: function (input, inst) {
            setTimeout(function() {
                inst.dpDiv.find('a.ui-state-highlight').removeClass('ui-state-highlight');
            }, 100);
        }
    });
	
	$(".skip-from-date-picker").datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });

    $(".skip-to-date-picker").datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }

    });

    $(".subscription-date-picker").click(function () {
        $(".ui-datepicker-calendar").css("display", "block");
    });

    $(".subscription-date-picker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd-mm-yy',
        beforeShow: function (input, inst) {
            setTimeout(function () {
                inst.dpDiv.find('a.ui-state-highlight').removeClass('ui-state-highlight');
            }, 100);
        }
    });

    
   

    // Custom method to validate username
    // $.validator.addMethod("usernameRegex", function(value, element) {
    //     return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
    // }, "Username must contain only letters, numbers");

    //firstname
    $.validator.addMethod("firstname", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
    }, "Kindly provide a first name");
  
    //lastname
    $.validator.addMethod("lastname", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
    }, "Kindly provide a last name");

    //email Address
    $.validator.addMethod("emailadd", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    }, "Kindly provide a valid email address");

    //mobile number
    $.validator.addMethod("mobilenum", function (value, element) {
        return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
    }, "Kindly provide a valid mobile number");
    
    //pincode
    $.validator.addMethod("pincodenumber", function (value, element) {
        return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    }, "Kindly provide a valid pincode");
    
    // password
    $.validator.addMethod("passwordCheck", function(value, element) {
        return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
    }, "Kindly provide a valid password");

    $(".form-style input[type=text], .form-style input[type=tel]").on("keydown", function(e) {
        if ($(this).attr("data-validation")) {
            if ($(this).attr("data-validation").indexOf("alphanumeric") != -1) {
                var alphanumericVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                if (alphanumericVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
            else if ($(this).attr("data-validation").indexOf("numeric") != -1) {
                var numericVal = "1234567890";
                if (numericVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
            else 
            if ($(this).attr("data-validation").indexOf("alphabet") != -1) {
                var alphabetVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (alphabetVal.indexOf(e.key) == -1) {
                    if( !(e.key == 'Tab' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete') ) {
                        return false;
                    }
                }
            }
        }
    });


    $(".next").click(function(){
        var form = $("#formQuiz");
        form.validate({
            errorElement: 'span',
            errorClass: 'error-msg',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').removeClass("has-error");
            },
            rules: {
                firstname: {
                    required: true,
                    firstname: true,
                },
                lastname: {
                    required: true,
                    lastname: true,
                },
                date: {
                    required: true,
                },
                subscription: {
                    required: true,
                },
                add1: {
                    required: true,
                },
                add2: {
                    required: true,
                },
                add3: {
                    required: false,
                },
                city: {
                    required: true,
                },
                state: {
                    required: true,
                },
                pincode: {
                    required: true,
                    pincodenumber: true,
                },
                mobile: {
                    required: true,
                    mobilenum: true,
                },
                email: {
                    required: true,
                    emailadd: true,
                },
                ft: {
                    required: true,
                },
                inches: {
                    required: false,
                },
                shirtSize: {
                    required: true,
                },
                waistSize: {
                    required: true,
                },
                kg: {
                    required: true,
                },
                shirtFitting: {
                    required: true,
                },
                bodytype: {
                    required: true,
                },
                box: {
                    required: true,
                },
                month: {
                    required: true,
                },
                
                
            },
            messages: {
                firstname: {
                    required: "First Name required",
                    minlength: "Kindly provide a First Name"
                },
                lastname: {
                    required: "Last Name required",
                    minlength: "Kindly provide a Last Name"
                },
                date: {
                    required: "Date required",
                },
                subscription: {
                    required: "select any one option",
                },
                add1: {
                    required: "Kindly provide a valid Address",
                },
                add2: {
                    required: "Kindly provide a valid Address",
                },
                add3: {
                    required: "Kindly provide a valid Address",
                },
                city: {
                    required: "City required",
                },
                state: {
                    required: "State required",
                },
                pincode: {
                    required: "Pincode required",
                    minlength: "Kindly provide a valid pincode",
                },
                mobile: {
                    required: "Mobile required",
                    minlength: "Kindly provide a valid mobile number"
                },
                email: {
                    required: "Email required",
                    minlength: "Kindly provide a valid email address",
                },
                ft: {
                    required: "Feet required",
                },
                shirtSize: {
                    required: "shirtSize required",
                },
                waistSize: {
                    required: "Waist required"
                },
                kg: {
                    required: "KGs required"
                },
                shirtFitting: {
                    required: "shirtFitting required",
                },
                bodytype: {
                    required: "bodytype required",
                },
                box: {
                    required: "box required",
                },
                month: {
                    required: "box required",
                },
            },
            errorPlacement: function(error, element) {
                if ( element.is(":radio") ) {
                    error.appendTo( element.parents('.group-radio') );
                } 
                else if ( element.is("#ft") ) {
                    error.appendTo( element.parents('.num-field') );
                }
                // else if ( element.is(":range") ) {
                //     error.appendTo( element.parents('.waist-group') );
                // }
                else { 
                    // This is the default behavior 
                    error.insertAfter( element );
                }
            },
            submitHandler: function () {
                //alert('form submit');
            }
        });

        if (form.valid() === true){
            if ($('.form1').is(":visible")){
                current_fs = $('.form1');
                next_fs = $('.form2');
            } else if($('.form2').is(":visible")){
                current_fs = $('.form2');
                next_fs = $('.form3');
            } else if($('.form3').is(":visible")){
                current_fs = $('.form3');
                next_fs = $('.form4');
            } else if($('.form4').is(":visible")){
                current_fs = $('.form4');
                next_fs = $('.form5');
            } else if($('.form5').is(":visible")){
                current_fs = $('.form5');
                next_fs = $('.form6');
            } else if($('.form6').is(":visible")){
                current_fs = $('.form6');
                next_fs = $('.form7');
            } else if($('.form7').is(":visible")){
                current_fs = $('.form7');
                next_fs = $('.form8');
            } else if($('.form8').is(":visible")){
                $('.button-group').hide();
                current_fs = $('.form8');
                next_fs = $('.form9');
            }
            
            next_fs.show();
            current_fs.hide();
        }

    });

    
    $('.previous').click(function(){
        if($('.form2').is(":visible")){
            current_fs = $('.form2');
            next_fs = $('.form1');
        }else if ($('.form3').is(":visible")){
            current_fs = $('.form3');
            next_fs = $('.form2');
        } else if ($('.form4').is(":visible")){
            current_fs = $('.form4');
            next_fs = $('.form3');
        } else if ($('.form5').is(":visible")){
            current_fs = $('.form5');
            next_fs = $('.form4');
        } else if ($('.form6').is(":visible")){
            current_fs = $('.form6');
            next_fs = $('.form5');
        } else if ($('.form7').is(":visible")){
            current_fs = $('.form7');
            next_fs = $('.form6');
        } else if ($('.form8').is(":visible")){
            current_fs = $('.form8');
            next_fs = $('.form7');
        } else if ($('.form9').is(":visible")){
            current_fs = $('.form9');
            next_fs = $('.form8');
        }


        next_fs.show();
        current_fs.hide();
    });
	
	// Remove header on Quiz page
    if (window.location.href.indexOf("/quiz/") > -1) {
        $('#masthead').css('display', 'none');

    }
    if (window.location.href.indexOf("/user/") > -1) {
        $('#masthead').css('display', 'none');

    }
    $(".essential-gift").click(function () {
      location.href = "/product/essential-card/";
    });
    
     $(".indulgence-gift").click(function () {
      location.href = "/product/indulgence-card/";
    });

    // redeem page
    if ($('#formGiftRedeem').length) {        
        $("#formGiftRedeem").validate({
            errorElement: 'span',
            errorClass: 'error-msg',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').removeClass("has-error");
            },
            rules: {
                yourname: {
                    required: true,
                    firstname: true,
                },
                tellPincode: {
                    required: true,
                    pincodenumber: true,
                }            
                
            },
            messages: {
                yourname: {
                    required: "Your Name required",
                    minlength: "Kindly provide a Your Name"
                },
                tellPincode: {
                    required: "Pincode required",
                    minlength: "Kindly provide a valid pincode",
                }
            },
            submitHandler: function () {
                alert('form submit');
            }
        });
    }


    // gift redeem
    if ($('.gifting-start').length) { 
        $("#getGift").click(function(){
            $('.gifting-start').hide();
            $('.gifting-type').first().show();
        });
        $("#redeemGift").click(function(){
            $('.gifting-start').hide();
            $('.screen2').show();
        });
    
        $(".giftNext").click(function(){
            var form = $("#formGifting");
        if ($('.gifttype-container .right .group-radio label.active').length) {
            location.href = "/checkout";
            }
            form.validate({
                errorElement: 'span',
                errorClass: 'error-msg',
                highlight: function(element, errorClass, validClass) {
                    $(element).closest('.form-field').addClass("has-error");
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element).closest('.form-field').removeClass("has-error");
                },
                rules: {
                    sendBox: {
                        required: true,
                    },
                    giftBox: {
                        required: true,
                    },
                    giftCard: {
                        required: false,
                    },
                    toEmail: {
                        required: true,
                        emailadd: true,
                    },
                    fromEmail: {
                        required: true,
                        emailadd: true,
                    },
                    giftCardAmount: {
                        required: true,
                    },
                    specailMsg: {
                        required: false,
                    },
                    date: {
                        required: true,
                    }               
                    
                },
                messages: {                
                    sendBox: {
                        required: "select any one send box required",
                    },
                    giftBox: {
                        required: "select any one gift box required",
                    },
                    giftCard: {
                        required: "select any one gift card required"
                    },
                    toEmail: {
                        required: "To Email required",
                        minlength: "Kindly provide a valid email address",
                    },
                    fromEmail: {
                        required: "From Email required",
                        minlength: "Kindly provide a valid email address",
                    },
                    giftCardAmount: {
                        required: "select gift card amount required"
                    },
                    date: {
                        required: "Date required",
                    }
                },
                errorPlacement: function(error, element) {
                    if ( element.is(":radio") ) {
                        error.appendTo( element.parents('.group-radio') );
                    } else if ( element.is("select") ) {
                        error.appendTo( element.parents('.select-field') );
                    } else { 
                        // This is the default behavior 
                        error.insertAfter( element );
                    }
                },
                submitHandler: function () {
                    alert('form submit');
                }
            });
    
            if (form.valid() === true){
                if ($('.screen').is(":visible")){
                    current_fs = $('.screen');
                    
                    $("input[type=radio]").each(function(i,o){
                        if($(this).is(":checked"))
                            //alert(i);
                            if(i == 0){
                                next_fs = $('.screen2');
                            } else if(i == 1){
                                next_fs = $('.screen3');
                            }
                    });
                   
                } else if($('.screen2').is(":visible")){
                    current_fs = $('.screen2');
                    next_fs = $('.screen4');
                } else if($('.screen3').is(":visible")){
                    current_fs = $('.screen3');
                    next_fs = $('.screen4');
                } 
                
                next_fs.show();
                current_fs.hide();
            }
    
        });
    
        $('.giftPrevious').click(function(){
            if($('.screen').is(":visible")){
                current_fs = $('.screen');
                next_fs = $('.gifting-start');
            }else if ($('.screen2').is(":visible")){
                current_fs = $('.screen2');
                next_fs = $('.screen');
            } else if ($('.screen3').is(":visible")){
                current_fs = $('.screen3');
                next_fs = $('.screen');
            } else if ($('.screen4').is(":visible")){
                current_fs = $('.screen4');
                $("input[type=radio]").each(function(i,o){
                    if($(this).is(":checked"))
                        //alert(i);
                        if(i == 0){
                            next_fs = $('.screen2');
                        } else if(i == 1){
                            next_fs = $('.screen3');
                        }
                });

            }
    
            next_fs.show();
            current_fs.hide();
        });
    }
   

    
    // login page    
    if ($('.signing-container').length) { 
        // signup form
        $("#formSignup").validate({
            errorElement: 'span',
            errorClass: 'error-msg',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').removeClass("has-error");
            },
            rules: {
                firstname: {
                    required: true,
                    firstname: true,
                },
                lastname: {
                    required: true,
                    lastname: true,
                },
                password: {
                    required: true,
                    minlength: 8,
                },
                email: {
                    required: true,
                    emailadd: true,
                }
                
            },
            messages: {
                firstname: {
                    required: "First Name required",
                    minlength: "Kindly provide a First Name"
                },
                lastname: {
                    required: "Last Name required",
                    minlength: "Kindly provide a Last Name"
                },
                password: {
                    required: "Password required",
                    minlength: "Kindly provide a password"
                },
                email: {
                    required: "Email required",
                    minlength: "Kindly provide a valid email address",
                }
            },
            submitHandler: function () {
                alert('form submit');
            }
        });
		
	

        // login form
        $("#formLogin").validate({
            errorElement: 'span',
            errorClass: 'error-msg',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-field').removeClass("has-error");
            },
            rules: {
                password: {
                    required: true,
                    minlength: 8,
                },
                email: {
                    required: true,
                    emailadd: true,
                }
                
            },
            messages: {
                password: {
                    required: "Password required",
                    minlength: "Kindly provide a password"
                },
                email: {
                    required: "Email required",
                    minlength: "Kindly provide a valid email address",
                }
            },
            submitHandler: function () {
                alert('form submit');
            }
        });
    }

});

jQuery(document).ready(function ($) {
    $('.wordpress-ajax-form').on('submit', function (e) {
        e.preventDefault();
        jQuery('.ajax-loader.quiz').css("visibility", "visible");
        var $form = $(this);
        $.post($form.attr('action'), $form.serialize(), function (data) {
            jQuery('.ajax-loader.quiz').css("visibility", "hidden");
            $(location).attr('href', '/checkout');
        }, 'json');
    });
});


function pwgc_bind_redeem_form_custom() {
    jQuery('#formGiftRedeem').off('submit').on('submit', function(e) {
        var redeemButton = jQuery('#pwgc-redeem-button-custom');

        pwgc_redeem_gift_card_custom(redeemButton);

        e.preventDefault();
        return false;
    });

}

function pwgc_redeem_gift_card_custom(redeemButton) {
    var cardNumber = jQuery('#pwgc-redeem-gift-card-number-custom');
    var errorContainer = jQuery('#pwgc-redeem-error-custom');

    errorContainer.text('');
    redeemButton.attr('data-apply-text', redeemButton.attr('value')).attr('value', redeemButton.attr('data-wait-text')).prop('disabled', true);

    jQuery.post('/wp-admin/admin-ajax.php', {'action': 'custom_redeem_gift', 'card_number': cardNumber.val()}, function( result ) {
        if (result.success) {
            jQuery( document.body ).trigger( 'wc_update_cart' );
			redeemButton.attr('value', redeemButton.attr('data-apply-text')).prop('disabled', false);
			 errorContainer.text("Redeem code Applied successfully");
			  setTimeout(function () {
                    window.location.href = '/homepage/';
                }, 2000)


        } else {
            errorContainer.text(result.data.message);
            redeemButton.attr('value', redeemButton.attr('data-apply-text')).prop('disabled', false);
            cardNumber.focus();
        }
    }).fail(function(xhr, textStatus, errorThrown) {
        if (errorThrown) {
            errorContainer.text(errorThrown);
        } else {
            errorContainer.text('Unknown Error');
        }
        redeemButton.attr('value', redeemButton.attr('data-apply-text')).prop('disabled', false);
        cardNumber.focus();
    });
}
