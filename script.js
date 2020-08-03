$(document).ready(function(){

    "use strict";

    $(".check").on("click" , function(){
        $('.noti_two').addClass("fadeUp");
        $('.meal').addClass("meal-show");
        $('.meal-content').slideDown();
    });

    $('.cancel').click(function(){
         $('.meal').hide();
          $('.noti_two').addClass("fadeDown");
    });

    $(".meal-image img").click(function () {
         $(".meal-image img").addClass("image-scale")
        var $src = $(this).attr("src");
        $(".show").fadeIn().delay(0.005);
        $(".img-show img").attr("src", $src);
        $('.meal').hide();

    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
        $('.meal').show();
    });

});