function displayMap(){

    var options = {
        center: {lat: 34.1008 , lng: -117.7678 },
        zoom: 18 
    }

    map = new google.maps.Map(document.getElementById('map'), options);
}