$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    var about = function() {
      $("#about").find('h1').delay(500).animate({opacity:1}, 'slow');
    }

    var aboutcontent = function() {
      $("#about").find('p').delay(1000).animate({opacity:1, left:0},'slow');
  /*    $("#about").find('p').eq(1).delay(1500).animate({opacity:1, left:0},'slow');
      $("#about").find('p').eq(2).delay(2000).animate({opacity:1, left:0},'slow');
      $("#about").find('p').eq(3).delay(2500).animate({opacity:1, left:0},'slow');*/
      $("#about").find('img').delay(2000).animate({opacity:1, right:0}, 2000);
  /*    $("#about").find('img').delay(3000).removeClass("hidden", 1000, "drop"); */
    };

    var gallery = function() {
      $("#gallery").find('h1').delay(500).animate({opacity:1}, 'slow');
    }

    var gallerycontent = function() {
      $('#twod').delay(1000).animate({opacity:1}, 'slow');
      $('#threed').delay(1500).animate({opacity:1}, 'slow');
      $('#work').delay(2000).animate({opacity:1}, 'slow');
    };

    var recognition = function() {
      $('#recognition').find('h1').delay(500).animate({opacity:1}, 'slow');
    };

    var recognitioncontent = function() {
      $('#recognition').find('h2').delay(1000).animate({opacity:1}, 'slow');
      $('#recognition').find('p').delay(1500).animate({opacity:1}, 'slow');
    };

    var contact = function() {
      $('#contact').find('h1').delay(500).animate({opacity:1}, 'slow');
      $('#contact').find('a').eq(0).delay(750).animate({opacity:1}, 'slow');
      $('#contact').find('a').eq(1).delay(1000).animate({opacity:1}, 'slow');
      $('#contact').find('a').eq(2).delay(1250).animate({opacity:1}, 'slow');
      $('#contact').find('a').eq(3).delay(1500).animate({opacity:1}, 'slow');
      $('#contact').find('a').eq(4).delay(1750).animate({opacity:1}, 'slow');
    }

    var contactcontent = function() {

    }

    if(windowWidth <= 549) {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 150) {
        aboutcontent();
      }if(windowScrollTop>100) {
        gallery();
      }if(windowScrollTop > 150) {
        gallerycontent();
      }if(windowScrollTop > 500) {
        recognitioncontent();
      }if(windowScrollTop > 600) {
        contact();
      }
    } else if(windowWidth > 549 && windowHeight <= 991) {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 100) {
        aboutcontent();
      }if(windowScrollTop > 900) {
        gallery();
      }if(windowScrollTop > 1000) {
        gallerycontent();
      }if(windowScrollTop > 1500) {
        recognition();
      }if(windowScrollTop > 1700) {
        recognitioncontent();
      }if(windowScrollTop > 2200) {
        contact();
      }
    } else {
      if(windowScrollTop > 50) {
        about();
      }if(windowScrollTop > 100) {
        aboutcontent();
      }if(windowScrollTop > 900) {
        gallery();
      }if(windowScrollTop > 1000) {
        gallerycontent();
      }if(windowScrollTop > 1500) {
        recognition();
      }if(windowScrollTop > 1700) {
        recognitioncontent();
      }if(windowScrollTop > 2000) {
        contact();
      }
    }
});
