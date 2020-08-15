$(document).ready(function () {
  $('.sections__menu-button').on('click', function (event) {
    $('.header-menu').toggleClass('header-menu--mobile-visible');
    $('.header-menu__list').toggleClass('header-menu__list--mobile-visible');
  })

  var tabsItem = $('.tabs-menu__item');
  var tabsContent = $('.recomended__tabs-content');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target')
    tabsItem.removeClass('tabs-menu__item--active');
    $(this).addClass('tabs-menu__item--active');
    tabsContent.removeClass('recomended__tabs-content--active');
    $('#' + activeContent).addClass('recomended__tabs-content--active');
  })

  $(".fancybox").fancybox();

  $('.flag-icon').on('click', function () { 
    $(this).toggleClass('flag-icon--checked');
   })

  $('.like-icon').on('click', function () { 
    $(this).toggleClass('like-icon--checked');
  })

  var mySwiper = new Swiper('.articles__slider-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 700,
    effect: 'slide',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  })

  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        newsletter__email: {
          required: true,
          email: true,
        },
      },
      messages: {
        newsletter__email: {
          required: "Please specify your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });
  });

  $('.parallax-window').parallax({imageSrc: 'img/parallax-bg.jpg'});

});