$(document).ready(function() {


    $.ajax({
            type : "GET",
            url :  "/pitchers/getPitchers",
            async: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success : function(response) {
                console.log(response);
                document.getElementById("p1").value= response[0].name;
                document.getElementById("p2").value= response[1].name;
            },
            error : function(e) {
               alert("Could not load pitchers for subscriber please try again later");
            }
        });

    $('#createForm').on("click", function () {
        console.log("create");
        $('#headerWords').text("Sign up for StatTrax");
        $('#fName, #lName').show();
        $('#createForm, #loginButton').hide();
        $('#loginForm, #signUpButton').show();

    })

});