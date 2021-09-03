(function($) {
  "use strict";
  
  // init Isotope
  var $grid = $('.portfolio-items').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.portfolio-menu').on('click', 'li', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
  

  //magnific popups
  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  //owl carousel
  $('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  
})(jQuery)

//navbar active code
$(".navbar-nav .nav-link").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).addClass("active");
});