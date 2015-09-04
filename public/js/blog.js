$(document).ready(function() {
  "use strict";

  $('.comment-control').on('click', function (e) {
    var isVisible = $('.comment-section').is(':visible');
    e.preventDefault();

    // we're going to switch the display state so if comments
    // are visible they'll be hidden and we set the text
    // to the future state
    if (isVisible) {
      $(e.target).html('<i class="fa fa-comments"></i> Show Comments');
    }
    else {
      $(e.target).html('<i class="fa fa-comments"></i> Hide Comments');
    }
    $('.comment-section').toggle(500);
  })

  // show sidbar
  $('#sb1 a.control').on('click', function (e) {
    e.preventDefault();

    $('#sb3').removeClass('hide');
    $('#sb1').addClass('hide');

    $('#main').removeClass('col-md-10 col-md-offset-1');
    $('#main').addClass('col-md-9');
  });

  // hide sidebar
  $('#sb3 a.control').on('click', function (e) {
    e.preventDefault();

    $('#sb1').removeClass('hide');
    $('#sb3').addClass('hide');

    $('#main').removeClass('col-md-9');
    $('#main').addClass('col-md-10 col-md-offset-1');
  });

});
