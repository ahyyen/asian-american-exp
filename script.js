$(document).ready(function () {
  
  $('.fruit').click(function () {
       $('.fruitdesc').toggle();
   });
   $('.fruit').hover(function () {   
        $(this).toggleClass("glow");
    });
  $('.comp').click(function () {
       $('.compdesc').toggle();
   });
   $('.comp').hover(function () {   
        $(this).toggleClass("glow");
    });
   $('.book').click(function () {
       $('.bookdesc').toggle();
   });
   $('.book').hover(function () {   
        $(this).toggleClass("glow");
    });
  $('.drawing').click(function () {
       $('.drawingdesc').toggle();
   });
   $('.drawing').hover(function () {   
        $(this).toggleClass("glow");
    });
  $('.jacket').click(function () {
       $('.jacketdesc').toggle();
   });
   $('.jacket').hover(function () {   
        $(this).toggleClass("glow");
    });
});