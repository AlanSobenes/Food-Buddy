let map, infoWindow, cityCircle;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.335480, lng: -121.893028 },
        zoom: 13,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Go to your Area";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("You are here");
                    infoWindow.open(map);
                    map.setCenter(pos);

                    var circle = {
                        strokeColor: "#add8e6",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#add8e6",
                        fillOpacity: 0.35,
                        map:map,
                        center: pos,
                        radius: 3500,
                    };
                    cityCircle = new google.maps.Circle (circle);



                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "You do not want to participate!"
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
