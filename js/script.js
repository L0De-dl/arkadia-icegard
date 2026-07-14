const imageWidth = 4077;
const imageHeight = 2189;

// Współrzędne rogów obrazu
const southWest = [imageHeight, 0];
const northEast = [0, imageWidth];
const bounds = L.latLngBounds(southWest, northEast);

// Tworzenie mapy bez mapy świata
const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: true,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

// Dodanie obrazu
L.imageOverlay("images/kontynent.png", bounds).addTo(map);

// Dopasowanie widoku
map.fitBounds(bounds);