$(document).ready(function() {
  "use strict";

  var tab = jcs.getQueryString("id");

  if (typeof tab !== "undefined") {
    $('a[href="#'+tab+'"]').tab('show');
  }

});
