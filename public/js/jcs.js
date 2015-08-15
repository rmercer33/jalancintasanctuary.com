var jcs = (function () {
  "use strict";
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
    }
  };
})();
