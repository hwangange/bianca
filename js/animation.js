$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    var about = function() {
      $("#about").find('h1').delay(500).animate({opacity:1}, 'slow');
    }

    var aboutcontent = function() {
      $("#about").find('p').delay(1000).animate({opacity:1, left:0},'slow');
      $("#about").find('img').delay(1600).animate({opacity:1, right:0},'slow');
    };

    var gallery = function() {
      $('#twod').delay(500).animate({opacity:1}, 'slow');
      $('#threed').delay(1000).animate({opacity:1}, 'slow');
      $('#work').delay(1500).animate({opacity:1}, 'slow');
    };

    if(windowWidth <= 549) {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 150) {
        aboutcontent();
      }if(windowScrollTop > 150) {
        gallery();
      }
    } else if(windowWidth > 549 && windowHeight <= 991) {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 100) {
        aboutcontent();
      }if(windowScrollTop > 1000) {
        gallery();
      }
    } else {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 100) {
        aboutcontent();
      }if(windowScrollTop > 1000) {
        gallery();
      }
    }
});
