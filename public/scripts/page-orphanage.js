const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}

//create map
const map = L.map('mapid', options).setView([-5.511010, -47.471636],15);


//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
})


//create and add marker
L.marker([-5.511010, -47.471636],{icon})
.addTo(map)

function backHome(){
    window.location.href = "orphanages.html"
}