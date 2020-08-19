$(document).ready(function () {

  $('.sections__menu-button').on('click', function (event) {
    $('.header-menu').toggleClass('header-menu--mobile-visible');
    $('.header-menu__list').toggleClass('header-menu__list--mobile-visible');
  })

  $('.lazy').Lazy();

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

  $('.categories-cards__item').hover(function () { 
    $(this).toggleClass('categories-cards__item--active');
    $(this).find('.link').toggleClass('link--active');
    $(this).find('.categories-cards__image').toggleClass('categories-cards__image--active');
  });

  $('.categories-cards__image').on('click', function () {
    document.location.href='article-1.html';
  })

  $('.categories-cards__text').on('click', function () {
    document.location.href='article-1.html';
  })

  $('.article-card').hover(function () { 
    $(this).toggleClass('article-card--active');
    $(this).find('.link').toggleClass('link--active');
  });
  
  $('.article-card').on('click', function () {
    document.location.href='article-1.html';
  })

  var mainSlider = new Swiper('.articles__slider-container', {
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

  var sampleSlider = new Swiper('.sample-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sample-slider__button--next',
      prevEl: '.sample-slider__button--prev',
    },
    speed: 1000,
    effect: 'slide',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
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

        add_comment: {
          required: true,
          minlength: 100,
        },
      },
      messages: {
        newsletter__email: {
          required: "Please specify your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        add_comment: {
          minlength: "Please use at least 100 symbols"
        },
      },
    });
  });

  $('.parallax-window').parallax({imageSrc: 'img/parallax-bg.jpg'});

  $('.load-more').on('click', function() {
    $('.article-comments-hide').slideToggle(500);
    $('.load-more__text').toggleClass('load-more__text--hide');
    $('.load-more__icon').toggleClass('load-more__icon--hide');
  })

});