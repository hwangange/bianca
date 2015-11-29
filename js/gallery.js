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
