$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $("#load").delay(50).fadeOut(500);
  });

  //===== Sticky

  // $(window).on('scroll', function (event) {
  //     var scroll = $(window).scrollTop();
  //     if (scroll < 110) {
  //         $(".header-nav").removeClass("sticky");
  //     } else {
  //         $(".header-nav").addClass("sticky");
  //     }
  // });

  //===== Swiper
  var menu = ["2018", "2019", "2020"];
  var mySwiper = new Swiper(".roadmap-main", {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-custom-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
    navigation: {
      nextEl: ".roadmap-main-next",
      prevEl: ".roadmap-main-prev",
    },
  });
  var mySwiper = new Swiper(".roadmap-sec", {
    // Optional parameters
    slidesPerView: 4,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });

  // Single Features Active
  $(".future-roadmap").on("mouseover", ".roadmap-sec-slide", function () {
    $(".roadmap-sec-slide.active").removeClass("active");
    $(this).addClass("active");
  });

  //===== Mobile Menu

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });
  var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
      });

    var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }

  //===== faq accrodion

  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().parent().addClass("active");
              $(this).parent().parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  $(".circle-1")
    .circleProgress({
      value: 1,
      size: 145,
      thickness: 6,
      lineCap: "round",
      fill: {
        gradient: ["#ffc50c", "#ffc50c"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(100 * progress) + "<i>%</i>");
    });

  $(".circle-3")
    .circleProgress({
      value: 0.9,
      size: 145,
      thickness: 6,
      lineCap: "round",
      fill: {
        gradient: ["#ffc50c", "#ffc50c"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(90 * progress) + "<i>%</i>");
    });

  $(".circle-4")
    .circleProgress({
      value: 0.75,
      size: 145,
      thickness: 6,
      lineCap: "round",
      fill: {
        gradient: ["#ffc50c", "#ffc50c"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(75 * progress) + "<i>%</i>");
    });

  //===== seller Active slick slider
  $(".token-sale-active").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
    arrows: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //===== Back to top

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll_up").fadeIn();
    } else {
      $("#scroll_up").fadeOut();
    }
  });
  $("#scroll_up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  //=====
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " fade"; // class "loader hidden"
});


new WOW().init();


//Header Toggle click Show menu

jQuery('.banner-header .menu a').click(function () {
  event.preventDefault();
  jQuery('.header-menu').addClass('active');
});
jQuery('.header-menu .close-btn').click(function () {
  jQuery('.header-menu').removeClass('active');
});

// smooth scroll
jQuery('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top - 1}, 500);
});


// Menu item click menu close
jQuery(document).ready(function(){
  setTimeout(function() {
  
    jQuery('.header-menu li a').click(function(){
       jQuery('.header-menu .close-btn').trigger('click');
    }); 
    
  }, 2000);
});





// if($(window).width() <= 767 ){
//   $("video").attr("controls","");
// }