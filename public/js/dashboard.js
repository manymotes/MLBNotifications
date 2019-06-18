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

    $('#submit').on("click", function () {
        console.log("submit clicked");

        savePitcher( document.getElementById("p1").value, 1);
        savePitcher( document.getElementById("p2").value, 2);
    })

   function savePitcher(name, number) {
       let params = {};
       params.name = name;
       params.pitcherNumber = number;
       $.ajax({
           type : "POST",
           url :  "/pitchers/update",
           data : JSON.stringify(params),
           async: false,
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           success : function(response) {
           },
           error : function(e) {
               alert("Could not update pitcher info");
           }
       });
    }
});