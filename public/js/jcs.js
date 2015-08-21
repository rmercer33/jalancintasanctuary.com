// milliseconds in 1 hour
var maxTimeDiff = 3600000;

var jcs = (function () {
  "use strict";

  function getQueryString(key) {
    var queryString = window.location.search.substring(1);
    var vars = queryString.split("&");
    for(var i=0; i<vars.length; i++){
      var getValue = vars[i].split("=");
      if (getValue[0] == key) return getValue[1];
    }
  }

  function initStore() {
    var now = Date.now();
    return  {
      visitNumber: 1,
      currentVisitDate: now,
      lastVisitDate: now
    };
  }

  function getStore() {
    var jcsActivity = store.get("jcsActivity");
    if (typeof jcsActivity === "undefined") {
      jcsActivity = initStore();
    }
    return jcsActivity;
  }

  function setStore(id, obj) {
    console.log("stored: %s", id);
    store.set(id, obj);
  }

  return {
    //Basic Map
    initMap: function () {
      var map = new GMaps({
        div: "#map",
        zoom: 9,              //9-view all of Bali, 17-zoomed into sanctuary
        scrollwheel: false,
        lat: -8.48544574,
        lng: 115.25668859
      });

      map.addMarker({
        lat: -8.48544574,
        lng: 115.25668859,
        title: "Jalan Cinta Sanctuary",
        infoWindow: {
          content: "<p>Site of Jalan Cinta Sanctuary</p>"
        }
      });

      map.addMarker({
        lat: -8.50318758,
        lng: 115.25485396,
        title: "Campuhan Ridge Walk",
        infoWindow: {
          content: "<p>Way of the 'Miracle Walk'; an inspiritional adventure leading to the Sanctuary from Ubud</p>"
        }
      });

      map.addMarker({
        lat: -8.50651298,
        lng: 115.26223363,
        title: "Ubud Palace",
        infoWindow: {
          content: "<p>Ubud Palace; the center of Ubud</p>"
        }
      });
    },
    getQueryString: function(key) {
      var queryString = window.location.search.substring(1);
      var vars = queryString.split("&");
      for(var i=0; i<vars.length; i++){
        var getValue = vars[i].split("=");
        if (getValue[0] == key) return getValue[1];
      }
    },
    // record website visit - called from home page
    recordSiteVisit: function() {
      var now = Date.now();
      var jcsActivity = getStore("jcsActivity");

      if (now - jcsActivity.currentVisitDate > maxTimeDiff) {
        jcsActivity.visitNumber = jcsActivity.visitNumber + 1;
        jcsActivity.lastVisitDate = jcsActivity.currentVisitDate; 
        jcsActivity.currentVisitDate = now;

        setStore("jcsActivity", jcsActivity);
      }
    },
    recordPageVisit: function(page) {
      var now = Date.now();
      var jcsActivity = getStore("jcsActivity");

      if (!jcsActivity[page]) {
        jcsActivity[page] = {
          pageViewCount: 1,
          pageViewDate: now
        };
      }
      else {
        jcsActivity[page].pageViewCount = jcsActivity[page].pageViewCount + 1;
        jcsActivity[page].pageViewDate = now;
      }
      setStore("jcsActivity", jcsActivity);
    }
  };
})();
