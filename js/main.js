$(document).ready(function () {
  $('.sections__menu-button').on('click', function (event) {
    $('.header-menu').toggleClass('header-menu--mobile-visible');
    $('.header-menu__list').toggleClass('header-menu__list--mobile-visible');
  })
});