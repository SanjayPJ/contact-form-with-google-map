var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 36.2095764,
            lng: -113.7289461
        },
        zoom: 8,
        styles: []
    });

}