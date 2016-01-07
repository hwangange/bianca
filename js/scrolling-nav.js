//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
/*    if($(".navbar").offset().top > 200) {
      $('#carrot').animate({opacity:1});
    } else {
      $('#carrot').animate({opacity:0});
    } */

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if($('#carrot').attr("opacity") == 0) {
            $('#carrot').delay(100).animate({opacity:1}, "fast");
        } else {
            $('#carrot').css("opacity", "1");
        }
        
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('#carrot').delay(100).animate({opacity:0}, "fast");
    }


});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
