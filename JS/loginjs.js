$(document).ready(function(){
    $(".google, .facebook, .forgot_pass").click(function(){
        alert("Sorry, we do not currently support this function");
    });

    $(".login_btn").click(function(){
        $(".login_modal").show("slow");
        $(".left_container, .right_container").css({
            "opacity": ".7"
        })
    });

    $(".signup_btn").click(function(){
        $(".signup_modal").show("slow");
        $(".left_container, .right_container").css({
            "opacity": ".7"
        })
    });

    $(".close_btn").click(function(){
        $(".login_modal, .signup_modal").hide("slow");
        $(".left_container, .right_container").css({
            "opacity": "1"
        })
    })
});

function init(){
    var forms = document.querySelector(".forms");
    var pwShowHide = document.querySelectorAll(".eye-icon");
    var link_signup = document.querySelector(".signup_link");
    var link_login = document.querySelector(".login_link");
    
    link_signup.onclick = function(){
        var login_form = document.querySelector(".form.login");
        var signup_form = document.querySelector(".form.sign_up");
        login_form.classList.remove("show");
        signup_form.classList.add("show");
    };
    link_login.onclick = function(){
        var login_form = document.querySelector(".form.login");
        var signup_form = document.querySelector(".form.sign_up");
        signup_form.classList.remove("show");
        login_form.classList.add("show");
    };

    for(var i = 0; i < pwShowHide.length; i++)
    {
        pwShowHide[i].onclick = function(){
            var input = this.parentElement.querySelector(".password");
            if(input.type == "password"){
                input.type = "text";
                this.classList.replace("fa-eye", "fa-eye-slash");
            }
            else if(input.type =="text"){
                input.type = "password";
                this.classList.replace("fa-eye-slash", "fa-eye");
            }
        }
    }
}
