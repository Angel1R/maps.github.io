let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.814326449344794, lng: -102.76968280340627 },
    zoom: 15,
  });
}

initMap();