//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
/*    if($(".navbar").offset().top > 200) {
      $('#carrot').animate({opacity:1});
    } else {
      $('#carrot').animate({opacity:0});
    } */

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('#carrot').addClass('visible');

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('#carrot').removeClass('visible');
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
