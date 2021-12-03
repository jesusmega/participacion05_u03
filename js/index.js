// [START maps_map_simple]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 16.3018826, lng: -97.9218451 },
    zoom: 8,
  });
}
// [END maps_map_simple]