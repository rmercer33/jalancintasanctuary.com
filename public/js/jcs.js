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
      version: "v1",
      site: {
        visitNumber: 1,
        currentVisitDate: now,
        lastVisitDate: now
      },
      pages: {},
      downloads: {}
    };
  }

  // convert to v1
  function migrate(jcsActivity) {
    var jcsNew = jcsActivity;
    if (typeof jcsActivity.version === "undefined") {
      jcsNew = initStore();
      jcsNew.site.visitNumber = jcsActivity.visitNumber;
      jcsNew.site.currentVisitDate = jcsActivity.currentVisitDate;
      jcsNew.site.lastVisitDate = jcsActivity.lastVisitDate;
    }

    return jcsNew;
  }

  function getStore() {
    var jcsActivity = store.get("jcsActivity");
    if (typeof jcsActivity === "undefined") {
      jcsActivity = initStore();
    }
    else {
      jcsActivity = migrate(jcsActivity);
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

      if (now - jcsActivity.site.currentVisitDate > maxTimeDiff) {
        jcsActivity.site.visitNumber = jcsActivity.site.visitNumber + 1;
        jcsActivity.site.lastVisitDate = jcsActivity.site.currentVisitDate; 
        jcsActivity.site.currentVisitDate = now;

        setStore("jcsActivity", jcsActivity);
      }
    },
    recordPageVisit: function(page) {
      var now = Date.now();
      var jcsActivity = getStore("jcsActivity");

      if (!jcsActivity.pages[page]) {
        jcsActivity.pages[page] = {
          pageViewCount: 1,
          pageViewDate: now
        };
      }
      else {
        jcsActivity.pages[page].pageViewCount = jcsActivity.pages[page].pageViewCount + 1;
        jcsActivity.pages[page].pageViewDate = now;
      }
      setStore("jcsActivity", jcsActivity);
    },
    recordDownload: function(item) {
      var now = Date.now();
      var jcsActivity = getStore("jcsActivity");

      if (typeof jcsActivity.downloads[item] === "undefined") {
        jcsActivity.downloads[item] = {
          downloadCount: 1,
          downloadDate: now
        };
      }
      else {
        jcsActivity.downloads[item].downloadCount = jcsActivity.downloads[item].downloadCount + 1;
        jcsActivity.downloads[item].downloadDate = now;
      }
      setStore("jcsActivity", jcsActivity);
    },
  };
})();
