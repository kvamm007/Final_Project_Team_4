//Basic formatting/syntax taken from module on earthquake mapping challenge

//Add console.log to check code is running
console.log("working");


//Create background maps
let background_streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let background_satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


//Create map object with center, zoom & default layer
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [background_streets]
});

//Create base layer to hold street & satellite view
let mapLayers= {
    "Street View": background_streets,
    "Satellite View" : background_satellite
};

//Add layer group for shark attack data
let allAttacks = new L.LayerGroup();
let fatalAttacks= new L.LayerGroup();

//Create overlap object
let overlays={
    "All Shark Attacks" : allAttacks,
    "Fatal Shark Attacks" : fatalAttacks
};

//Add control to switch layers
L.control.layers(mapLayers, overlays).addTo(map);


