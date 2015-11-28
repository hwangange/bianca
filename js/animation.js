$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    var firstAnimation = function() {
      $("#about").find('p').delay(1000).animate({opacity:1, left:0},'slow');
      $("#about").find('img').delay(1600).animate({opacity:1, right:0},'slow');
    };

    var secondAnimation = function() {
      $('#twod').delay(500).animate({opacity:1}, 'slow');
      $('#threed').delay(1000).animate({opacity:1}, 'slow');
      $('#work').delay(1500).animate({opacity:1}, 'slow');
    };

    if(windowWidth <= 549) {
      if(windowScrollTop > 150) {
        firstAnimation();
      }if(windowScrollTop > 150) {
        secondAnimation();
      }
    } else if(windowWidth > 549 && windowHeight <= 991) {
      if(windowScrollTop > 100) {
        firstAnimation();
      }if(windowScrollTop > 1000) {
        secondAnimation();
      }
    } else {
      if(windowScrollTop > 100) {
        firstAnimation();
      }if(windowScrollTop > 1000) {
        secondAnimation();
      }
    }
});
