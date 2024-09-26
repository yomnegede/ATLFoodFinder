// Initialize and add the map
function initMap() {
  // The location you want to center your map on
  const atlanta = { lat: 33.7490, lng: -84.3880 };

  // The map, centered at the chosen location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, // Adjust zoom level
    center: atlanta,
  });

  // Optional: add a marker at the location
  const marker = new google.maps.Marker({
    position: atlanta,
    map: map,
    title: "Atlanta, GA", // Tooltip when hovering over the marker
  });
}

// Load the script for Google Maps API asynchronously
function loadGoogleMapsAPI(apiKey) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Call this function with your API key
loadGoogleMapsAPI('AIzaSyAP72B6MB3WMjv_Sex8Jjgq4tLlK1AKnig');
