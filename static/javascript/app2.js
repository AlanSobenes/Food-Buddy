var lat = document.getElementById("lat");
var lng = document.getElementById("lng");
var info = document.getElementById("info");
var Locations = [];
var km = 5;

var Crcl;

var map;


var mapOptions = {
    zoom: 15,
    center: {lat: 34.0430, lng: -118.2673}
};

var markers = [];


function initialize() {
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infoWindow = new google.maps.infoWindow({map: map});

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            lat.value = position.coords.latitude;
            lng.value = position.coords.longitude;
            info.nodeValue = position.coords.longitude;

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are Here!');

            map.setCenter(pos);

            drawCircle(mapOptions, map, pos, km);
        }, function(){
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}



function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: User has denied participation!' :
        'Error: Your browser doesn\'t support geolocation =(');
}

function drawCircle(mapOptions, map, pos, km){
    var popluationOptions = {
        strokeColor : '#add8e6',
        strokOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#add8e6',
        fillOpacity: .35,
        map: map,
        center: pos,
        radius: Math.sqrt(km*200)*100

    };
    this.crcl = new google.maps.Circle(popluationOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);