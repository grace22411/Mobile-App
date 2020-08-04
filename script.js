$(document).ready(function(){

    "use strict";

    $(document).on('click' , '.check' , function(){
        $('.noti_two').addClass("fadeUp");
        $('.meal').addClass("meal-show");
        $('.meal-content').slideDown();
    });

    $('.cancel').click(function(){
         $('.meal').slideUp();
          $('.meal-content').slideUp();
          $('.noti_two').addClass("fadeDown");
          $(".show").hide();
    });

    $(document).on('click' , '.imageup',  function(){
        $(".img-show img").addClass("image-scale");
        var $src = $(this).attr("src");
        $(".show").fadeIn(1000);
        $(".img-show img").attr("src", $src);
        $('.meal').hide();

    });
    
    $(".overlay").click(function () {
        $(".overlay").fadeOut();
        $(".img-show img").addClass("image-out");
        $('.meal').show();
    });

});