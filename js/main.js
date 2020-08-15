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

  $('.parallax-window').parallax({imageSrc: 'img/parallax-bg.jpg'});

  $('.categories-cards__flag').on('click', function () { 
    $(this).toggleClass('categories-cards__flag--checked');
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

});