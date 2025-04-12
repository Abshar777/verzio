(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*====================================
			Header Sticky JS
		======================================*/
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 1) {
        $(".header").addClass("sticky");
        $(".header-text").removeClass("text-white");
        $(".logo-white").addClass("d-none");
        $(".logo-black").removeClass("d-none");
      } else {
        $(".header").removeClass("sticky");
        $(".header-text").addClass("text-white");
        $(".logo-white").removeClass("d-none");
        $(".logo-black").addClass("d-none");
      }
    });

    /*====================================
			Mobile Menu JS
		======================================*/
    $(".main-menu").slicknav({
      prependTo: ".mobile-nav",
      label: "",
      duration: 500,
    });

    /*====================================
			Search JS
		======================================*/
    $(".top-search a").on("click", function () {
      $(".search-top").toggleClass("active");
    });

    /*====================================
			Team JS
		======================================*/
    $(".single-team").on("click", function () {
      $(this).toggleClass("active");
    });

    /*====================================
			Sidebar Popup JS
		======================================*/
    $(".right-nav .bar").on("click", function () {
      $(".sidebar-popup").addClass("active");
    });

    $(".sidebar-popup .cross").on("click", function () {
      $(".sidebar-popup").removeClass("active");
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $(".home-slider").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $(".pf-details-slider").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $(".testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
    });

    $(".testimonial-slider-two").owlCarousel({
      items: 3,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        300: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $(".team-slider").owlCarousel({
      items: 3,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    });

    $(".agency-team-slider").owlCarousel({
      items: 5,
      autoplay: false,
      stagePadding: 300,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      margin: 30,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        300: {
          items: 1,
          stagePadding: 30,
        },
        480: {
          items: 1,
          stagePadding: 100,
        },
        768: {
          items: 2,
          stagePadding: 80,
        },
        1170: {
          items: 4,
          stagePadding: 100,
        },
        1500: {
          items: 5,
          stagePadding: 200,
        },
      },
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $(".blog-latest-slider").owlCarousel({
      items: 2,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 2,
        },
      },
    });
    /*====================================
			Portfolio Details JS
		======================================*/
    $(".partner-slider").owlCarousel({
      items: 6,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      margin: 30,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: false,
      responsive: {
        300: {
          items: 2,
          nav: false,
        },
        480: {
          items: 3,
          nav: false,
        },
        768: {
          items: 4,
          nav: false,
        },
        1170: {
          items: 6,
        },
      },
    });

    /*====================================
			Work Slider JS
		======================================*/
    $(".work-slider").owlCarousel({
      items: 4,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1170: {
          items: 4,
        },
      },
    });

    $(".work-slider-2").owlCarousel({
      items: 4,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1170: {
          items: 4,
        },
      },
    });

    /*====================================
			  Testimonial Slider JS
		    ======================================*/
    $(".testimonial-slider-4").owlCarousel({
      items: 3,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        300: {
          items: 1,
          dotsEach: 3,
        },
        480: {
          items: 1,
          dotsEach: 3,
        },
        768: {
          items: 2,
          dotsEach: 3,
        },
        1170: {
          items: 3,
          dotsEach: 3,
        },
      },
    });

    /*=====================================
			CounterUp JS
		======================================*/
    $(".number").counterUp({
      time: 1000,
    });

    /*=====================================
			Video Popup
		======================================*/
    $(".video-popup").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });

  /*====================================
			Scrool Up JS
		======================================*/

  /*====================================
			Preloader JS
		======================================*/
  jQuery(window).load(function () {
    jQuery(".preeloader").fadeOut("slow", function () {
      jQuery(this).remove();
    });
  });

  if ($(".marquee_left").length) {
    var Increment = 1; // Amount to move per tick...
    var LoopDelay = 1000 / 30; // How fast ticks happen...
    var Loop;

    function DestroyLoop() {
      clearInterval(Loop);
    }

    function CreateLoop() {
      Loop = setInterval(function () {
        var FirstSlide = $(".marquee_left .slide:first-child");
        var FirstMargin = parseInt(FirstSlide.css("margin-left")) - Increment;
        FirstSlide.css({ "margin-left": FirstMargin });

        if (Math.abs(FirstMargin) >= FirstSlide.outerWidth()) {
          FirstSlide.css({ "margin-left": 0 });
          FirstSlide.appendTo($(".marquee_left"));
        }
      }, LoopDelay);
    }

    $(".marquee_left").on("mouseenter", DestroyLoop);
    $(".marquee_left").on("mouseleave", CreateLoop);
    CreateLoop();
  }

  if ($(".banner_animation_03").length > 0) {
    $(".banner_animation_03").parallax({
      scalarX: 1.0,
      scalarY: 2.0,
    });
  }

  // new WOW().init();
  if ($(".wow").length) {
    //Wow js
    new WOW().init();
  }

  window.addEventListener("touchstart", function (event) {
    // some logic
    event.preventDefault(); // <-- that should not be used in passive
    // some other magic
  });
})(jQuery);
