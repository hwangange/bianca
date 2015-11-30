$(document).ready(function() {
  $('#twod').click(function() {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        'src': 'lightGallery-master/demo/img/2.jpg',
        'thumb': "lightGallery-master/demo/img/thumb-2.jpg",
        'subHtml': '<h4>Title</h4><p>Description</p>'
      }, {
        'src': 'lightGallery-master/demo/img/1.jpg',
        'thumb': 'lightGallery-master/demo/img/thumb-1.jpg',
        'subHtml': '<h4>Title</h4><p>Description</p>'
      }]
    })
  });

  $('#threed').click(function() {
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

  $('#work').click(function() {
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
  });
});