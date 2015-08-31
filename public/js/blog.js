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
});
