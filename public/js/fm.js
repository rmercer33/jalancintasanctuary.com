$(document).ready(function() {
  "use strict";

  // set the page title, under the banner image, to the tab title
  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    $('#page-title').html($(e.target).text());
  })

  var tab = jcs.getQueryString("id");

  if (typeof tab !== "undefined") {
    $('a[href="#'+tab+'"]').tab('show');
  }

});
