window.HELP_IMPROVE_VIDEOJS = false;


function init_comparisons() {
  const options_default_vs_depth = {

    // UI Theme Defaults

    controlColor: "#FFFFFF",
    controlShadow: true,
    addCircle: false,
    addCircleBlur: true,

    // Label Defaults

    showLabels: true,
    labelOptions: {
      before: 'Default',
      after: 'Depth Anything V2 ViT-L',
      onHover: false
    },

    // Smoothing

    smoothing: true,
    smoothingAmount: 100,

    // Other options

    hoverStart: false,
    verticalMode: false,
    startingPoint: 50,
    fluidMode: false
  };

  const options_depth_vs_depth = {

    // UI Theme Defaults

    controlColor: "#FFFFFF",
    controlShadow: true,
    addCircle: false,
    addCircleBlur: true,

    // Label Defaults

    showLabels: true,
    labelOptions: {
      before: 'Depth Anything V2 ViT-L',
      after: 'Metric3D V2 ViT-G2',
      onHover: false
    },

    // Smoothing

    smoothing: true,
    smoothingAmount: 100,

    // Other options

    hoverStart: false,
    verticalMode: false,
    startingPoint: 50,
    fluidMode: false
  };

  const default_viewers = document.querySelectorAll("#image-compare-default");
  default_viewers.forEach((element) => {
    let view = new ImageCompare(element, options_default_vs_depth).mount();
  });

  const depth_viewers = document.querySelectorAll("#image-compare-depth");
  depth_viewers.forEach((element) => {
    let view = new ImageCompare(element, options_depth_vs_depth).mount();
  });
}


$(document).ready(function() {

  init_comparisons()


    var options = {
      initialSlide: 0,
			slidesToScroll: 1,
			slidesToShow: 2,
			loop: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 4000,
      pagination: true
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/


    bulmaSlider.attach();

})
