"use strict";

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

var infoWindow = new google.maps.InfoWindow();
var map;


function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        //center: new google.maps.LatLng(54.10701, 11.90497), // Bad Doberan Beethovenstr. 2a
        center: new google.maps.LatLng(54.10247, 11.899850000000015), // Bad Doberan Kroepeliner Strasse 18

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: "all",
            elementType: "all",
            stylers: [{
                invert_lightness: false
            }, {
                saturation: 10
            }, {
                lightness: 30
            }, {
                gamma: 0.5
            }, {
                hue: "#e2bf43"
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Creating my own marker to the specified location of the job
    function createMarker() {
        //var markerPosition = new google.maps.LatLng(54.106898, 11.905266); //Beethovenstr. 2a
        var markerPosition = new google.maps.LatLng(54.10247, 11.899850000000015);

        var marker = new google.maps.Marker({
            map: map,
            position: markerPosition
        });

        // Setting the actual content of the marker, name etc
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent("Institut APART, Kr&ouml;peliner Stra&szlig;e 18, 18209 Bad Doberan");
            infoWindow.open(map, this);
        });
    }

    // Calling the function to show the marker + content
    createMarker();
}