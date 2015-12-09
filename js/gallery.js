$(document).ready(function() {
/*  $('#twod').find('a').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/2d/butterfly.jpg',
        'thumb': "img/menu/2d/butterfly.jpg",
        'subHtml': '<h4>Butterfly</h4>'
      }, {
        'src': 'img/menu/2d/fruit.jpg',
        'thumb': 'img/menu/2d/fruit.jpg',
        'subHtml': '<h4>Fruit</h4>'
      }, {
        'src': 'img/menu/2d/pop.jpg',
        'thumb': 'img/menu/2d/pop.jpg',
        'subHtml': '<h4>Soda Can</h4>'
      }, {
        'src': 'img/menu/2d/bird.jpg',
        'thumb': 'img/menu/2d/bird.jpg',
        'subHtml': '<h4>Bird</h4>'
      }]
    })
  });

  $('#threed').find('a').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/bowl1.jpg',
        'thumb': "img/menu/3d/bowl1.jpg",
        'subHtml': '<h4>Bowl</h4>'
      }, {
        'src': 'img/menu/3d/enchilada1.jpg',
        'thumb': 'img/menu/3d/enchilada1.jpg',
        'subHtml': '<h4>Enchiladas</h4>'
      }, {
        'src': 'img/menu/3d/fox1.jpg',
        'thumb': 'img/menu/3d/fox1.jpg',
        'subHtml': '<h4>Nine-tailed Fox</h4>'
      }, {
        'src': 'img/menu/3d/lotus2.jpg',
        'thumb': 'img/menu/3d/lotus2.jpg',
        'subHtml': '<h4>Floating Lotus</h4>'
      }, {
        'src': 'img/menu/3d/native1.jpg',
        'thumb': 'img/menu/3d/native1.jpg',
        'subHtml': '<h4>Native American Art</h4>'
      }, {
        'src': 'img/menu/3d/plate1.jpg',
        'thumb': 'img/menu/3d/plate1.jpg',
        'subHtml': '<h4>Plate</h4>'
      }, {
        'src': 'img/menu/3d/snake1.jpg',
        'thumb': 'img/menu/3d/snake1.jpg',
        'subHtml': '<h4>Boa Constrictor</h4>'
      }, {
        'src': 'img/menu/3d/turtle1.jpg',
        'thumb': 'img/menu/3d/turtle1.jpg',
        'subHtml': '<h4>Turtle</h4>'
      }]
    })
  });

  $('#work').find('a').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'lightGallery-master/demo/img/2.jpg',
        'thumb': "lightGallery-master/demo/img/thumb-2.jpg",
        'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwoood Jetty on Coniston Water an archive shot similar to an old post but a litter later on </p>'
      }, {
        'src': 'lightGallery-master/demo/img/1.jpg',
        'thumb': 'lightGallery-master/demo/img/thumb-1.jpg',
        'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwoood Jetty on Coniston Water an archive shot similar to an old post but a litter later on </p>'
      }]
    })
  }); */

  $('#twod').find('a').click(function() {
    $('#twod-display').css('display','block');
    $('#twod-display').show('slow');
  })

  $('#threed').find('a').click(function() {
    $('#threed-display').css('display','block');
    $('#threed-display').show('slow');
  })

  $('#work').find('a').click(function() {
    $('#work-display').css('display','block');
    $('#work-display').show('slow');
  })


  $('#bowl').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/bowl1.jpg',
        'thumb': 'img/menu/3d/bowl1.jpg'
      },{
        'src': 'img/menu/3d/bowl2.jpg',
        'thumb': 'img/menu/3d/bowl2.jpg'
      }, {
        'src': 'img/menu/3d/bowl3.jpg',
        'thumb': 'img/menu/3d/bowl3.jpg'
      }, {
        'src': 'img/menu/3d/bowl4.jpg',
        'thumb': 'img/menu/3d/bowl4.jpg'
      }]
    })
  });

  $('#enchilada').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/enchilada1.jpg',
        'thumb': 'img/menu/3d/enchilada1.jpg'
      },{
        'src': 'img/menu/3d/enchilada2.jpg',
        'thumb': 'img/menu/3d/enchilada2.jpg'
      }, {
        'src': 'img/menu/3d/enchilada3.jpg',
        'thumb': 'img/menu/3d/enchilada3.jpg'
      }]
    })
  });

  $('#fox').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/fox1.jpg',
        'thumb': 'img/menu/3d/fox1.jpg'
      }]
    })
  });

  $('#lotus').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/lotus1.jpg',
        'thumb': 'img/menu/3d/lotus1.jpg'
      },{
        'src': 'img/menu/3d/lotus2.jpg',
        'thumb': 'img/menu/3d/lotus2.jpg'
      }, {
        'src': 'img/menu/3d/lotus3.jpg',
        'thumb': 'img/menu/3d/lotus3.jpg'
      }]
    })
  });

  $('#native').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/native1.jpg',
        'thumb': 'img/menu/3d/native1.jpg'
      },{
        'src': 'img/menu/3d/native2.jpg',
        'thumb': 'img/menu/3d/native2.jpg'
      }, {
        'src': 'img/menu/3d/native3.jpg',
        'thumb': 'img/menu/3d/native3.jpg'
      }, {
        'src': 'img/menu/3d/native4.jpg',
        'thumb': 'img/menu/3d/native4.jpg'
      }, {
        'src': 'img/menu/3d/native5.jpg',
        'thumb': 'img/menu/3d/native5.jpg'
      }, {
        'src': 'img/menu/3d/native6.jpg',
        'thumb': 'img/menu/3d/native6.jpg'
      }, {
        'src': 'img/menu/3d/native7.jpg',
        'thumb': 'img/menu/3d/native7.jpg'
      }]
    })
  });

  $('#plate').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/plate1.jpg',
        'thumb': 'img/menu/3d/plate1.jpg'
      },{
        'src': 'img/menu/3d/plate2.jpg',
        'thumb': 'img/menu/3d/plate2.jpg'
      }, {
        'src': 'img/menu/3d/plate3.jpg',
        'thumb': 'img/menu/3d/plate3.jpg'
      }]
    })
  });

  $('#snake').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/snake1.jpg',
        'thumb': 'img/menu/3d/snake1.jpg'
      },{
        'src': 'img/menu/3d/snake2.jpg',
        'thumb': 'img/menu/3d/snake2.jpg'
      }, {
        'src': 'img/menu/3d/snake3.jpg',
        'thumb': 'img/menu/3d/snake3.jpg'
      }]
    })
  });

  $('#turtle').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/3d/turtle1.jpg',
        'thumb': 'img/menu/3d/turtle1.jpg'
      },{
        'src': 'img/menu/3d/turtle2.jpg',
        'thumb': 'img/menu/3d/turtle2.jpg'
      }, {
        'src': 'img/menu/3d/turtle3.jpg',
        'thumb': 'img/menu/3d/turtle3.jpg'
      }]
    })
  });

  $('#bird').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/2d/bird.jpg',
        'thumb': 'img/menu/2d/bird.jpg'
      }]
    })
  });

  $('#fruit').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/2d/fruit.jpg',
        'thumb': 'img/menu/2d/fruit.jpg'
      }]
    })
  });

  $('#pop').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/2d/pop.jpg',
        'thumb': 'img/menu/2d/pop.jpg'
      }]
    })
  });

  $('#butterfly').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'img/menu/2d/butterfly.jpg',
        'thumb': 'img/menu/2d/butterfly.jpg'
      }]
    })
  });

  $('#work-one').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicE1: [{
        'src': 'lightGallery-master/demo/img/1.jpg',
        'thumb': 'lightGallery-master/demo/img/1.jpg'
      }]
    })
  });

  $('#work-two').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicE1: [{
        'src': 'lightGallery-master/demo/img/2.jpg',
        'thumb': 'lightGallery-master/demo/img/2.jpg'
      }]
    })
  });


});
