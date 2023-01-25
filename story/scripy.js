// This example creates a 3-pixel-wide blue polyline showing the path of
// the flight between Kathmandu, Nepal, to Mansarovar, China via Humla and Hilsa
// This is a pligrimage route to see Holy Kailash Mountain which is very sacred for both Hindu and Bbuddhists 
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 27.71, lng: 85.32 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 27.71, lng: 85.32 },
      { lat: 30.00, lng: 81.95 },
      { lat: 30.11, lng: 81.32 },
      { lat: 30.33, lng: 81.25 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#00008B",
      strokeOpacity: 2.0,
      strokeWeight: 3,
    });

  // creating the markers 
  // source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
  const marker1 = new google.maps.Marker({
    position: {lat: 27.71, lng: 85.32},
    map: map,
    title: 'Kathmandu, Nepal'
  });
  
  const marker2 = new google.maps.Marker({
    position: {lat: 30.00, lng: 81.95 },
    map: map,
    title: 'Humla, Nepal'
  });
  
  const marker3 = new google.maps.Marker({
    position: {lat: 30.11, lng: 81.32},
    map: map,
    title: 'Hilsa, Nepal'
  });

  const marker4 = new google.maps.Marker({
    position: {lat: 30.33, lng: 81.25},
    map: map,
    title: 'Mansarovar, China'
  });
  
  flightPath.setMap(map);

const coordMapType = new CoordMapType(new google.maps.Size(256, 256));

map.overlayMapTypes.insertAt(0, coordMapType);
}
  

  