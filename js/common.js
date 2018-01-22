tippy('.tippy')
$(document).ready(function(){
   
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


    // scroll to buy
    $("#go-buy").click(function() {
        $('html, body').animate({
            scrollTop: $("#buy").offset().top
        }, 500);
    });


    // scroll to gallery
    $("#go-gallery").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 500);
    });


    // scroll to about
    $("#go-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 800);
    });


    // lightbox
    lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices' : true,
      'albumLabel' : "Фото %1 из %2",
       'wrapAround' : true,
       'imageFadeDuration' : 400
    })

// SEARCH

  var searchBlock = $('#search');
  $(document).on('click', '#open', function () {
    searchBlock.slideToggle();
    $('.search').toggleClass('red');
    $('.fa-times').toggleClass('show');

    return false;
  });



})

