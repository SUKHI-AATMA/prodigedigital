var contactUSFormDetails = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "queryType": "",
    "requirement": "",
    "privacyPolicy": false,
    "userNotification": false
}

$(window).on('load', function() {
    $('textarea').val("");
    headerAnim();
    setTimeout(function(){$('.contactUsWrapper').animate({opacity: 1 },500)}, 1000);
    if ($(window).width() >= 768) {
        $("#contactUsPage .jscontainer").css({ "height": $(window).height() - $("header").outerHeight() + "px", "top": $("header").outerHeight() + "px" });
    } else {
        $("#contactUsPage .jscontainer").css({ "height": $("header").outerHeight() + $(".contactUsLhs").outerHeight() + "px", "top": $("header").outerHeight() + "px" });
    }


    $(".formWrapper input[type=text]").on("focus", function() {
        $(this).parents(".row").addClass("fieldFocus");
    }).on("blur", function() {
        if ($(this).val() == "") {
            $(this).parents(".row").removeClass("fieldFocus");
        }
        //console.log($(this).val());
        if ($(this).val() != "")
        {
            $(this).parents(".row").addClass('filled');
        }
    });
    $('textarea').on('focus',function(){
        $(this).siblings('.placeholder').hide();
    }).on('blur',function(){
        if($(this).val() == '')
        {
            $(this).siblings('.placeholder').show();
        }
    });
    $('.textarea .placeholder').on('click',function() {
        $(this).siblings('textarea').focus();
        $(this).hide();
    });

    $("label[for=privacyPolicy], input[name=privacyPolicy]").on("click", function() {
        setTimeout(function() {
            if ($("input[name=privacyPolicy]").is(":checked")) {
                $(".contactUs-form-btn").removeClass("disabled");
                contactUSFormDetails.privacyPolicy = true;
            } else {
                $(".contactUs-form-btn").addClass("disabled");
                contactUSFormDetails.privacyPolicy = false;
            }
        }, 10);
    });

    $("label[for=userNotification], input[name=userNotification]").on("click", function() {
        setTimeout(function() {
            if ($("input[name=userNotification]").is(":checked")) {
                contactUSFormDetails.userNotification = true;
            } else {
                contactUSFormDetails.userNotification = false;
            }
        }, 10);
    });

    $("select[name=queryType]").change(function() {
        $(this).siblings("div").text($(this).val());

        if ($(this).val() == $(this).children("option").eq(0).text()) {
            $(this).parents(".row").addClass("showErrorMsg");
            $(this).siblings('div').removeClass('selected');
        } else {
            $(this).parents(".row").removeClass("showErrorMsg");
            contactUSFormDetails[$(this).attr("name")] = $(this).val();
            $(this).siblings('div').addClass('selected');
        }
    });

    /** Validation for the text fields for Alpha Only starts **/
    $(document).on('keypress keyup', "input[data-validation*=alphaOnly]", function(e) {
        var thisVal = $(this).val();
        var regOne = new RegExp("^[a-zA-Z]+$");
        var regex = new RegExp("^[a-zA-Z'. ,-]+$");
        var kCd = e.keyCode || e.which;
        if ($(window).width() < 1280) {
            if (kCd == 0 || kCd == 229) {
                kCd = getKeyCode($(this).val());
                if (thisVal.length == 1) {
                    if (!(regOne.test(kCd))) {
                        $(this).val('');
                        return false;
                    }
                }
                if (!regex.test(kCd)) {
                    $(this).val($(this).val().substr(0, $(this).val().length - 1));
                    return false;
                }
            }
        }

        var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

        if (thisVal.length == 0) {
            if (!(regOne.test(key))) {
                return false;
            }
        }
        if (!(regex.test(key) || (e.charCode == 0))) {
            return false;
        }
    });
    /** Validation for the text fields for Alpha Only ends **/

    /** Validationn for the text fields starts **/
    $(document).on('blur', "input[type=text]", function(e) {
        if ($(this).attr("data-validation").indexOf("required") != -1) {
            if ($(this).val() == "") {
                $(this).parents(".row").addClass("showErrorMsg");
            } else {
                $(this).parents(".row").removeClass("showErrorMsg");
            }
        }

        if ($(this).attr("data-validation").indexOf("emailOnly") != -1) {
            var sEmail = $(this).val().trim();

            if (validateEmail(sEmail)) {
                $(this).parents(".row").removeClass("showErrorMsg");
            } else {
                $(this).parents(".row").addClass("showErrorMsg");
            }
        }

        contactUSFormDetails[$(this).attr("name")] = $(this).val();
    }).on('blur', "textarea", function() {
        if ($(this).attr("data-validation").indexOf("required") != -1 && $(this).val() == "") {
            $(this).parents(".row").addClass("showErrorMsg");
        } else {
            $(this).parents(".row").removeClass("showErrorMsg");
        }

        contactUSFormDetails[$(this).attr("name")] = $(this).val();
    }).on('click', ".closeWrapper .close", function() {
        location.reload();
    });
    /** Validationn for the text fields ends **/

    /** Validation on button click starts **/
    $(document).on("click", ".contactUs-form-btn:not(.disabled)", function() {
        $(".formWrapper .row").each(function() {
            if ($(this).find("input[type=text]").length) {
                if ($(this).find("input[type=text]").attr("data-validation").indexOf("required") != -1 && $(this).find("input[type=text]").val() == "") {
                    $(this).addClass("showErrorMsg");
                } else {
                    $(this).removeClass("showErrorMsg");
                }
            } else if ($(this).find("select").length) {
                if ($(this).find("select").attr("data-validation").indexOf("required") != -1 && ($(this).find("select").val() == $(this).find("select").children("option").eq(0).text())) {
                    $(this).addClass("showErrorMsg");
                } else {
                    $(this).removeClass("showErrorMsg");
                }
            } else if ($(this).find("textarea").length) {
                if ($(this).find("textarea").attr("data-validation").indexOf("required") != -1 && $(this).find("textarea").val() == "") {
                    $(this).addClass("showErrorMsg");
                } else {
                    $(this).removeClass("showErrorMsg");
                }
            }
        }).promise().done(function() {
            if ($(".formWrapper .showErrorMsg:visible").length) {
                return false;
            } else {
                $('.contactUs-form-btn').addClass('disabled').text('Submitting...');
                $.ajax({
                    url: "http://52.56.152.227:5544/contact-us",
                    type: "POST",
                    headers: {
                        'contentType': 'application/json'
                    },
                    data: contactUSFormDetails,
                    success: function(response) {
                        //console.log(contactUSFormDetails);
                        //window.location.href = "http://centuroglobal.com/contactUs-form-congratulations.html";
                        $("body").addClass("showPopUpSuccess");
                        $("html,body").animate({
                            scrollTop: 0
                        }, 500);
                    },
                    error: function(response) {
                        alert('There was a problem. Please try again');
                        $('.contactUs-form-btn').removeClass('disabled').text('Submit');
                    },
                    complete: function(response) {}
                });
            }
        });
    });
    /** Validation on button click ends **/

    /** Detect mobile and add tel link to phone number starts **/
    if (md.phone() != null) {
        var phoneNumber = $('.phone').text().replace(/\(|\)| /g, "");
        $('.phone').wrapInner("<a href=tel:" + phoneNumber + "></a>");
    }
    /** Detect mobile and add tel link to phone number ends **/
});

/**********Email Validation starts************/
function validateEmail(sEmail) {
    //var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}
/**********Email Validation ends************/
var grabWinWidth;

$(window).on('load',function(){
    winWidth = $(window).width();
});

$(window).resize(function() {
    clearTimeout(grabWinWidth);
    grabWinWidth = setTimeout(resizedWin, 100);
});

function resizedWin(){
    if(window.orientation == 90) {
        $("body").addClass("orientationChanged");
    }
    else {
        $("body").removeClass("orientationChanged");
    }
}