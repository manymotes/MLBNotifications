$(document).ready(function() {
    //your code here

    let $ = jQuery;
    console.log("hello");

    $('#signUpButton').on("click", function () {

        let params = {};
        params.password = $('#password').val();
        params.email = $('#email').val();
        params.f_name = $('#fName').val();
        params.l_name = $('#lName').val();
        $.ajax({
            type : "POST",
            url :  "/users/signup",
            data : JSON.stringify(params),
            async: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success : function(response) {
                location.href = window.location.href + "dashboard";
            },
            error : function(e) {
                if (e.responseText == "") {
                    alert("Email is already registered");
                } else {
                    alert(e.responseText);
                }
            }
        });
    });

    $('#loginButton').on("click", function () {
        console.log("loging button clicked");


        let params = {};
        params.password = $('#password').val();
        params.email = $('#email').val();
        $.ajax({
            type : "POST",
            url :  "/users/login",
            data : JSON.stringify(params),
            async: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success : function(response) {
                console.log("success");
                console.log(response);
                if (response == null) {
                    console.log("null response");
                    alert("Incorrect email or password")
                }
                location.href = window.location.href + "dashboard";
            },
            error : function(e) {
                console.log("error response");
                alert(e.responseText);
            }
        });

        console.log("after ajax");
    });

    $('#createForm').on("click", function () {
        console.log("create");
        $('#headerWords').text("Sign up for StatTrax");
        $('#fName, #lName').show();
        $('#createForm, #loginButton').hide();
        $('#loginForm, #signUpButton').show();

    })

    $('#loginForm').on("click", function () {
        console.log("loginFrom");
        $('#headerWords').text("Whats up? Login to StatTrax");
        $('#fName, #lName').hide();
        $('#createForm, #loginButton').show();
        $('#loginForm, #signUpButton').hide();
    });
});