$(document).ready(function() {
    var aboutY = $('#about').position().top + $('#about').outerHeight();
    var galleryY = $('#gallery').position().top + $('#gallery').outerHeight();
    var recognitionY = $('#recognition').position().top + $('#recognition').outerHeight();
    var contactY = $('#contact').position().top + $('#contact').outerHeight();
    $(window).scroll(function() {
      checkY();
    });

    function checkY() {
      if( $(window).scrollTop() > aboutY && $(window).scrollTop() < galleryY){
        $('#about-but').addClass('active');
        $('#gallery-but').removeClass('active');
        $('#recognition-but').removeClass('active');
        $('#contact-but').removeClass('active');
      }else if( $(window).scrollTop() > galleryY && $(window).scrollTop() < recognitionY){
          $('#gallery-but').addClass('active');
          $('#about-but').removeClass('active');
          $('#recognition-but').removeClass('active');
          $('#contact-but').removeClass('active');
      }else if( $(window).scrollTop() > recognitionY && $(window).scrollTop() < contactY){
        $('#recognition-but').addClass('active');
        $('#about-but').removeClass('active');
        $('#gallery-but').removeClass('active');
        $('#contact-but').removeClass('active');
      }else if( $(window).scrollTop() > contactY){
        $('#contact-but').addClass('active');
        $('#about-but').removeClass('active');
        $('#gallery-but').removeClass('active');
        $('#recognition-but').removeClass('active');
      }
    }

    checkY();
});
