;(function($){

 "use strict";

    function initMap() {
    var map;
    var mapContainer = document.querySelector('#map');
    var coordPoltava = {lat: 49.5685276, lng: 34.58543170000007};
    var mapOptions = {
        center: coordPoltava,
        zoom: 17,
        disableDefaultUI: true,
        scrollwheel:  false
    };

    var infoWindowText = document.querySelector('#marker').innerHTML;

    map = new google.maps.Map(mapContainer, mapOptions);

    var marker = new google.maps.Marker({
        position: coordPoltava,
        map: map,
        icon: "img/beetroot.png"
    });

    var infowindow = new google.maps.InfoWindow({
        content: infoWindowText
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

}

document.addEventListener('DOMContentLoaded', initMap);
})();


