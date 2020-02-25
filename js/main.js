$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    // slick.js
  $(".global-carousel").slick({
    // setting-name: setting-value
    autoplay: true,
    autoplaySpeed: 4500,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
});