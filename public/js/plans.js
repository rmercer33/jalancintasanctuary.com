$(document).ready(function() {
  "use strict";

  var tab = jcs.getQueryString("id");
  // console.log("id: %s",tab);

  if (typeof tab !== "undefined") {
    // console.log("calling: $('#%s').tab('show')",tab);
    $('a[href="#'+tab+'"]').tab('show');
  }

});
