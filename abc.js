/**
 * Jquery Code are here for DOM Manipulation.
 */

$(function(){
    $("h1").css("color","red");
    
    $("button").click(function(){
        $("#box").fadeOut(2000);
        $("#circle").fadeOut(2000);

        $("button").click(function(){
            $("#box").show(5000);
            $("#circle").show(5000);
        });
    });

    
});
