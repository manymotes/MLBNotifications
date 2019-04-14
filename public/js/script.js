$(document).ready(function() {
        //your code here

        let $ = jQuery;
        console.log("hello");

        $('#login').on("click", function () {
            console.log("loging button clicked");
            console.log($('#fName').val());
            console.log($('#lName').val());
            console.log($('#email').val());
            console.log($('#password').val());
            // "ken", "motes", 'password', 'motesmass@gmail.com',

            let params = {};
            params.password = $('#password').val();
            params.email = $('#email').val();
            params.f_name = $('#fName').val();
            params.l_name = $('#lName').val();
            $.ajax({
                type : "POST",
                url :  "/users",
                data : JSON.stringify(params),
                async: false,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success : function(response) {
                    console.log(response);
                },
                error : function(e) {
                    alert(e.responseText);
                }
            });
        });
});