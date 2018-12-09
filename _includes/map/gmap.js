<script src="/public/plugins/gmap/gmaps.js"></script>

<!-- JS Unify -->
<script src="/public/plugins/gmap/hs.map.js"></script>
<!-- JS Plugins Init. -->
<script > // initialization of google map 
function initMap() { 
  $.HSCore.components.HSGMap.init('.js-g-map');
}
</script>
<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCCTXBmWHsm_FzWVCVomrYIjJIJCwCfR54&callback=initMap" async="" defer=""></script>

{% comment %}
<!-- this is old code -->
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="/public/plugins/gmap/gmap.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCTXBmWHsm_FzWVCVomrYIjJIJCwCfR54&callback=initMap"
type="text/javascript"></script>
{% endcomment %}

