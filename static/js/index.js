window.HELP_IMPROVE_VIDEOJS = false;


function init_comparisons() {
  const options_default_vs_seg = {

    // UI Theme Defaults

    controlColor: "#FFFFFF",
    controlShadow: true,
    addCircle: false,
    addCircleBlur: true,

    // Label Defaults

    showLabels: true,
    labelOptions: {
      before: 'Original',
      after: 'Segmentation',
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
  const default_vs_seg_viewers = document.querySelectorAll("#image-compare-default");
  default_vs_seg_viewers.forEach((element) => {
    let view = new ImageCompare(element, options_default_vs_seg).mount();
  });

  // 11_uphill_road_in_snow_0.png
  // 8_asphalt_path_surrounded_by_snow_19.png
  const metric3dconvnextlarge_vs_metric3dvitgiant2 = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>Metric3D CNL',
      after: 'Best with MAE:<br>Metric3D VG2',
      onHover: false
    },
  }

  const metric3dconvnextlarge_vs_metric3dvitgiant2_viewers = document.querySelectorAll("#metric3dconvnextlarge_vs_metric3dvitgiant2");
  metric3dconvnextlarge_vs_metric3dvitgiant2_viewers.forEach((element) => {
    let view = new ImageCompare(element, metric3dconvnextlarge_vs_metric3dvitgiant2).mount();
  });

  // 5_suburban_road_32.png
  // 8_Urban_and_Campus_43.png
  const unidepthv1convnextlarge_vs_metric3dvitgiant2 = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>UniDepthV1 CNL',
      after: 'Best with MAE:<br>Metric3D VG2',
      onHover: false
    },
  }
  const unidepthv1convnextlarge_vs_metric3dvitgiant2_viewers = document.querySelectorAll("#unidepthv1convnextlarge_vs_metric3dvitgiant2");
  unidepthv1convnextlarge_vs_metric3dvitgiant2_viewers.forEach((element) => {
    let view = new ImageCompare(element, unidepthv1convnextlarge_vs_metric3dvitgiant2).mount();
  });
  
  // 3_campus_course_convoy_10.png
  const depthanythingv2vitl_vs_unidepthv2vitl = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>DepthAny. V2 VL',
      after: 'Best with MAE:<br>UniDepthV2 VL',
      onHover: false,
    },
  }
  const depthanythingv2vitl_vs_unidepthv2vitl_viewers = document.querySelectorAll("#depthanythingv2vitl_vs_unidepthv2vitl");
  depthanythingv2vitl_vs_unidepthv2vitl_viewers.forEach((element) => {
    let view = new ImageCompare(element, depthanythingv2vitl_vs_unidepthv2vitl).mount();
  });

  // 7_speedway_17.png
  const unidepthv2vitl14_vs_metric3dvitg = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>UniDepthV2 VL',
      after: 'Best with MAE:<br>Metric3D VG2',
      onHover: false
    },
  }
  const unidepthv2vitl14_vs_metric3dvitg_viewers = document.querySelectorAll("#unidepthv2vitl14_vs_metric3dvitg");
  unidepthv2vitl14_vs_metric3dvitg_viewers.forEach((element) => {
    let view = new ImageCompare(element, unidepthv2vitl14_vs_metric3dvitg).mount();
  });

  // 7_speedway_26.png
  const marigold_vs_m3dcnl = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>Marigold',
      after: 'Best with MAE:<br>Metric3D CNL',
      onHover: false
    },
  }
  const marigold_vs_m3dcnl_viewers = document.querySelectorAll("#marigold_vs_m3dcnl");
  marigold_vs_m3dcnl_viewers.forEach((element) => {
    let view = new ImageCompare(element, marigold_vs_m3dcnl).mount();
  });

  // 1_campus_course_convoy_4.png
  const marigold_vs_m3dvg2 = {
    ...options_default_vs_seg,
    labelOptions: {
      before: 'Best with Ours:<br>Marigold',
      after: 'Best with MAE:<br>Metric3D VG2',
      onHover: false
    },
  }
  const marigold_vs_m3dvg2_viewers = document.querySelectorAll("#marigold_vs_m3dvg2");
  marigold_vs_m3dvg2_viewers.forEach((element) => {
    let view = new ImageCompare(element, marigold_vs_m3dvg2).mount();
  });

}


$(document).ready(function() {

  init_comparisons()


    var options = {
      initialSlide: 0,
      slidesToScroll: 1,
      slidesToShow: 2,
      loop: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      pagination: false,
      breakpoints: [{
        changePoint: 768,
        slidesToShow: 1,
        slidesToScroll: 1
      }],
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop with each carousel initialized
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
