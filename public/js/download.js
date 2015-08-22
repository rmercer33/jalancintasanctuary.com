/* see eslint.org */
/*eslint-env browser, jquery */
/*global console */

/*eslint no-console:0 */

$(document).ready(function() {
  "use strict";
  var parseApplId = "SfjRvg0cm4Db87Bxqcn66vpFUlqUtI9lN3mtfQKu";
  var parseJSId = "QG2GJuxCcd7KmAebNxrTtUqLmAkcJTahkiyPH0wT";

  Parse.initialize(parseApplId, parseJSId);
  var Activity = Parse.Object.extend("Activity");

  jcs.recordPageVisit("download");

  $('#olir').on('click',function(e) {
    jcs.recordDownload("olir");
    console.dir(e);

    var activity = new Activity();
    var jcsData = store.get('jcsActivity');
    var data = {
      event: "download",
      activity: jcsData
    }

    activity.save(data, {
      success: function() {
        console.log('activity saved');
      },
      error: function() {
        console.log('activity save error');
      }
    });
  });

});

