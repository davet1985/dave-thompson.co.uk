var NAV_HEIGHT_ADJUST_SCROLL_OFFSET = 100;

$(document).ready(function() {
  var navClassName = $('.main').get(0).getAttribute('id');
  $('.' + navClassName).addClass('active');
});


$(document).scroll(function(e) {
  if ($(window).scrollTop() >= NAV_HEIGHT_ADJUST_SCROLL_OFFSET && $('#top-nav.short').length === 0) {
    $('#top-nav').switchClass('tall', 'short');
  } else if ($(window).scrollTop() < NAV_HEIGHT_ADJUST_SCROLL_OFFSET && $('#top-nav.tall').length === 0) {
    $('#top-nav').switchClass('short', 'tall');
  }
});
