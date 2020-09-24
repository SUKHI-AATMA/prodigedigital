$(function() {
    if($("input[type=text]").length) {
        /** Validation for the form fields starts **/
        $(document).on('keypress keyup', "input[data-validation=alphaOnly]", function (e) {
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
        /** Validation for the form fields ends **/

        /** Validationn for the email field starts **/
        $(document).on('blur', "input[data-validation=emailOnly]", function (e) {
            var sEmail = $(this).val().trim();
            
            if (validateEmail(sEmail)) {
                $(this).parents(".form-input").removeClass("errorMsg");
                $(this).attr("data-flag", true);
            } else {
                $(this).parents(".form-input").addClass("errorMsg");
                $(this).attr("data-flag", false);
            }
        });
        /** Validationn for the email field ends **/

        /** Validation for number only field starts **/
        $(document).on('keypress keyup', "input[data-validation=noOnly]", function (e) {
            var regex = new RegExp("^[0-9]+$");
            var kCd = e.keyCode || e.which;
            if ($(window).width() < 1280) {
                if (kCd == 0 || kCd == 229) {
                    kCd = getKeyCode($(this).val());
                    if (!regex.test(kCd)) {
                        $(this).val($(this).val().substr(0, $(this).val().length - 1));
                        return false;
                    }
                }
            }
            var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            
            if (!(regex.test(key) || (e.charCode == 0))) {
                return false;
            }

            
        });
        if ($(window).width() < 1280) {
            $("input[data-validation=noOnly]").attr("type", "tel");
        }
        /** Validation for number only field ends **/

        $(document).on('focus click', ".input-type", function (e) {
            $(this).parents(".form-input").addClass("currFieldFocus");
        });

        $(document).on('blur', ".input-type", function (e) {
            $(this).parents(".form-input").removeClass("currFieldFocus");
            if($(this).val() != "") {
                $(this).addClass("notEmpty");

                if($(this).attr("data-validation") == "alphaOnly") {
                    $(this).attr("data-flag", true);
                }
                else if($(this).attr("data-validation") == "noOnly") {
                    if($(this).val().length < $(this).attr("data-minLength")) {
                        $(this).addClass("errorMsg");
                        $(this).attr("data-flag", false);
                    }
                    else {
                        $(this).removeClass("errorMsg");
                        $(this).attr("data-flag", true);
                    }
                }
                else if($(this).attr("data-validation") == "linkedInOnly") {
                    if($(this).val().indexOf("linkedin.com") == -1) {
                        $(this).addClass("errorMsg");
                        $(this).attr("data-flag", false);
                    }
                    else {
                        $(this).removeClass("errorMsg");
                        $(this).attr("data-flag", true);
                    }
                }
                else if($(this).attr("data-validation") == "companyOnly") {
                    $(this).removeClass("errorMsg");
                    $(this).attr("data-flag", true);
                }
            }
            else {
                $(this).removeClass("errorMsg");
                $(this).removeClass("notEmpty");
            }
        });

        $(document).on("click",".checkmark",function(){
            var _this = $(this);
            setTimeout(function(){
                if(_this.parents(".check-box-input").find("input[type=checkbox]").is(":checked")) {
                    _this.parents(".check-box-input").attr("data-flag", true);
                    _this.parents(".check-box-input").removeClass("errorMsg");
                    return false;
                }
                else {
                    _this.parents(".check-box-input").attr("data-flag", false);
                    _this.parents(".check-box-input").addClass("errorMsg");
                }
            },500);
        });

        $(document).on("click",".signup-form-btn",function(){
            var submitSignUpFlag = false;

            signUpForm = {};
            $(this).parents(".form-details").find("select").each(function(){
                if($(this).hasClass('select') && $(this).attr('data-flag') == 'false')
                {
                    console.log($(this).val());
                    if($(this).val() == 'Select')
                    {
                        $(this).addClass("errorMsg").parents('.form-input').addClass('errorMsg');
                        submitSignUpFlag = false;
                        return false;
                    }
                    else
                    {
                        $(this).removeClass("errorMsg").attr('data-flag', true).parents('.form-input').removeClass('errorMsg');
                        submitSignUpFlag = true;
                        
                    }
                }
            });
            $(this).parents(".form-details").find("input[type=text], input[type=tel]").each(function(){

                
                if($(this).attr("required") && $(this).attr("data-flag") == "false") {
                    // console.log(587);
                    $(this).focus();
                    $(this).addClass("errorMsg").parents('.form-input').addClass('errorMsg');
                    submitSignUpFlag = false;
                    return false;
                }
                else if ($(this).val() != "" && $(this).attr("data-flag") == "false") {
                    // console.log(555);
                    $(this).addClass("errorMsg").parents('.form-input').addClass('errorMsg');
                    submitSignUpFlag = false;
                    return false;
                }

                else {
                    // console.log(878);
                    $(this).removeClass("errorMsg").parents('.form-input').removeClass('errorMsg')
                    submitSignUpFlag = true;

                    signUpForm[$(this).attr("name")] = $(this).val();
                }
            }).promise().done(function(){
                //$(this).parents(".form-details").find("select").
                $(this).parents(".form-details").find(".check-box-input").each(function(){
                    if($(this).attr("data-flag") == "true" && $(this).hasClass('required')) {
                        $(this).removeClass("errorMsg");
                        submitSignUpFlag = true;
                        
                        //console.log($(this).attr("name"));

                        if($(this).attr("name") == "privacy_policy") {
                            signUpForm[$(this).attr("name")] = 1;
                        }
                        else if($(this).attr("name") == "services") {
                            var paramAttrName = $(this).attr("name");
                            var servicesValue = "";
                            // $(this).find("input:checked").each(function() {
                            //     servicesValue += $(this).parent().text().trim() + ",";
                            // }).promise().done(function(){
                            //     servicesValue = servicesValue.substr(0,servicesValue.lastIndexOf(","));
                            //     signUpForm[paramAttrName] = servicesValue;
                            // });
                            $(this).find("input:checked").each(function() {
                                signUpForm["promotions"+$(this).parent().text().trim()] = 1;
                            });
                        }
                        else if($(this).attr("name") == "event") {
                            var paramAttrName = $(this).attr("name");
                            var eventValue = "";
                            // $(this).find("input:checked").each(function() {
                            //     eventValue += $(this).parent().text().trim() + ",";
                            // }).promise().done(function(){
                            //     eventValue = eventValue.substr(0,eventValue.lastIndexOf(","));
                            //     signUpForm[paramAttrName] = eventValue;
                            // });
                            $(this).find("input:checked").each(function() {
                                signUpForm["newsletters"+$(this).parent().text().trim()] = 1;
                            });
                            //signUpForm[$(this).attr("name")] = $(this).find("input:checked").parent().text().trim();
                        }
                    }
                    else {
                        $(this).addClass("errorMsg");
                        submitSignUpFlag = false;
                        return false;
                    }
                });
                //console.log(signUpForm);
                if($('[data-flag="false"]').length == 0)
                {
                    
                    $.ajax({
                        url: "http://52.56.152.227:5544/signup",
                        type: "POST",
                        headers: {
                            'contentType': 'application/json'
                        },
                        data: signUpForm,
                        success: function(response) {
                            //alert("Success");

                            window.location.href = "http://centuroglobal.com/signup-form-congratulations.html";
                        },
                        error: function(response) {
                            alert('There was a problem. Please try again');
                        },
                        complete: function(response) {}
                    });
                }
            });
        });
    }

    $(document).on("change",".contry-code",function() {
        $(".countryCodeVal").text("+" + $(this).val());
    });

    $(".contry-code option").eq(0).change();

    $(document).on("change",".customizedDD select",function(){
        $(".customizedDD").parents(".form-input").removeClass("focus");
        $(".customizedDD div").text($(this).val());
    });

    $(document).click(function(e){
        if(!e.target.closest(".customizedDD")) {
            $(".customizedDD").parents(".form-input").removeClass("focus");
        }

        if(!e.target.closest(".form-input.mobile-no")) {
            if($(".form-input.mobile-no input").val() == "") {
                $(".form-input.mobile-no").removeClass("currFieldFocus");
            }
        }
    });
    $(document).on('change','.select',function(){
        if($(this).val() != 'Select')
        {
            $(this).parents(".form-input").addClass("selectedValue");
        }
    })
    $(document).on("click",".customizedDD",function() {
        $(".customizedDD").parents(".form-input").addClass("focus");
        if($(".customizedDD").children("div").text() != 'select') {
            $(".customizedDD").parents(".form-input").addClass("selectedValue");
        }
    });

    $(document).on("click",".form-input.mobile-no, .countryCodeVal",function() {
        $(".form-input.mobile-no").addClass("currFieldFocus");
    });

    $(".customizedDD select option").eq(0).change();


    //var data = {"email":"johnsmith@bureauofdata.com","firstname":"john","lastname":"smith","phonenumber":"+447911123456","linkedin_url":"linkedin.com/in/johnsmith","designation": "director","company_name":"bod"};

    
});

var signUpForm = {};

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