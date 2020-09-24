var unsubscribeFormDetails = {
    "email": "",
    "feedback": ""
}

$(window).on('load', function() {
    $(".formWrapper input[type=text]").on("focus", function() {
        $(this).parents(".row").addClass("fieldFocus");
    }).on("blur", function() {
        if ($(this).val() == "") {
            $(this).parents(".row").removeClass("fieldFocus");
        }
    });

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

        unsubscribeFormDetails[$(this).attr("name")] = $(this).val();
    }).on('keyup', "input[type=text]", function() {
        if ($(this).val().length > 0) {
            $(".unsubscribe-form-btn").removeClass("disabled");
        } else {
            $(".unsubscribe-form-btn").addClass("disabled");
        }
    }).on('blur', "textarea", function() {
        if ($(this).val() != "") {
            unsubscribeFormDetails[$(this).attr("name")] = $(this).val();
        }
    }).on('click', ".closeWrapper .close", function() {
        location.reload();
    });
    /** Validationn for the text fields ends **/

    /** Validation on button click starts **/
    $(document).on("click", ".unsubscribe-form-btn:not(.disabled)", function() {
        $(".formWrapper .row").each(function() {
            if ($(this).find("input[type=text]").length) {
                if ($(this).find("input[type=text]").attr("data-validation").indexOf("required") != -1) {
                    var sEmail = $(this).val().trim();

                    if (validateEmail(sEmail)) {
                        $(this).parents(".row").removeClass("showErrorMsg");
                    } else {
                        $(this).parents(".row").addClass("showErrorMsg");
                    }
                }
            } else if ($(this).find("textarea").length) {
                if ($(this).val() != "") {
                    unsubscribeFormDetails[$(this).attr("name")] = $(this).val();
                }
            }
        }).promise().done(function() {
            if ($(".formWrapper .showErrorMsg:visible").length) {
                return false;
            } else {
                $('.unsubscribe-form-btn').addClass('disabled').text('Submitting...');
                $.ajax({
                    url: "http://52.56.152.227:5544/deregister",
                    type: "POST",
                    headers: {
                        'contentType': 'application/json'
                    },
                    data: unsubscribeFormDetails,
                    success: function(response) {
                        //console.log(contactUSFormDetails);
                        //window.location.href = "http://centuroglobal.com/contactUs-form-congratulations.html";
                        //console.log(response.status);
                        if (response.status == 200) {
                            $("body").addClass("showPopUpSuccess");
                        } else if (response.status == 400) {
                            $("body").addClass("showPopUpFail");
                        }
                        $("html,body").animate({
                            scrollTop: 0
                        }, 500);
                    },
                    error: function(response) {
                        alert('There was a problem. Please try again');
                        $('.unsubscribe-form-btn').removeClass('disabled').text('Submit');
                    },
                    complete: function(response) {}
                });
            }
        });
    });
    /** Validation on button click ends **/
});