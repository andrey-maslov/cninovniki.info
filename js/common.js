tippy('.tippy')


$(document).ready(function(){


    // pagination
      $(function() {
          $('.pagination').pagination({
              items: 500,
              itemsOnPage: 10,
              prevText : '&laquo;',
              nextText : '&raquo;',
          });
      });

 
    // scroll top
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
    
    $(function() {
     $.fn.scrollToTop = function() {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
      var scrollDiv = $(this);
      $(window).scroll(function() {
       if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
       else $(scrollDiv).fadeIn("slow")
      });
      $(this).click(function() {
       $("html, body").animate({scrollTop: 0}, "slow")
      })
     }
    });

    $(function() {
     $("#go-top").scrollToTop();
    });


   // slick-slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
 



})

