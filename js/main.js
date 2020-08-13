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

  $('.parallax-window').parallax({imageSrc: 'img/parallax-bg.png'});

});