
$(document).ready(function () {
  // Typing effect
  const text = $('h1').text();
  // Clear the text
  $('h1').text('');
  
  // Start typing as long as there is text to type
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      $('h1').append(text.charAt(i));
      i++;
    }
    // Stop typing when the text is fully typed 
    else {
      clearInterval(interval);
    }
  }
  
  const interval = setInterval(typeWriter, 100); // adjust the speed of typing here
  // Gallery images
  const images = [
  {
    src: "images/catprint.jpg",
    title: "Cat of Paris",
    description: "This is a print I made for my sophmore year print making class."
  },
  {
    src: "images/charcoaldrawing.jpg",
    title: "Charcoal Drawing",
    description: "This is a charcoal drawing I made for my junior year figure studies class."
  }, {
    src: "images/flowerpainting.jpg",
    title: "Flower Painting",
    description: "This is a painting I made for my sophmore year grpahic design class."
  }, {
    src: "images/stilllifepainting.jpg",
    title: "Fire",
    description: "This is a still life painting I made for my sophmore year painting  class."
  }
];
  const imagesPerRow = 2; // Change this value to set how many images per row
  const gapSize = imagesPerRow > 1 ? '10px' : '0px'; // Add padding if more than one image per row

  var gallery = $('#gallery');
  gallery.css({
      'display': 'grid',
      'grid-template-columns': `repeat(${imagesPerRow}, 1fr)`,
      'gap': gapSize
  });
  images.forEach(function(image) {
      var galleryItem = $('<div>').addClass('gallery-item wow animate__animated animate__zoomIn');
      var img = $('<img>').attr('src', image.src);
      var title = $('<h3>').text(image.title).addClass('gallery-title');
      var subtitle = $('<h4>').text(image.subtitle).addClass('gallery-subtitle');
      var description = $('<p>').text(image.description).addClass('gallery-description').hide();

      title.on('click', function() {
          description.slideToggle();
      });

      galleryItem.append(img).append(title).append(subtitle).append(description);
      gallery.append(galleryItem);
  });

  $('.gallery-item img').on('click', function() {
    var imageSrc = $(this).attr('src');
    var overlay = $('<div>').addClass('overlay');
    var overlayImage = $('<img>').attr('src', imageSrc).addClass('overlay-image');
    overlay.append(overlayImage);
    $('body').append(overlay);

    overlay.on('click', function() {
        $(this).remove();
    });

    $(document).on('keyup', function(e) {
        if (e.key === 'Escape') {
            overlay.remove();
        }
    });
  });
  
});