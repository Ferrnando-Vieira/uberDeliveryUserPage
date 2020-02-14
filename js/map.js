mapboxgl.accessToken = 'pk.eyJ1IjoiaGlyYXp1a3kiLCJhIjoiY2p2eW1sejl5MGhvcDRhcDh2NXB5NDV4aiJ9.ax9uzCdL5uFOio7E0r3tVA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-43.935243, -19.931618],
    zoom: 14
});


function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>Sweetgreen</h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>')
        .addTo(map);
}

map.on('load', function() {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-43.940193, -19.929840],
                    [-43.940349, -19.930266],
                    [-43.938874, -19.932762],
                    [-43.937667, -19.933046],
                    [-43.929610, -19.928510]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#000',
            'line-width': 4
        }
    });

    map.loadImage(
        '../assets/logouberviagem.jpg',
        function(error, image) {
            if (error) throw error;
            map.addImage('logouberviagem', image);
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-43.940193, -19.929840]
                        }
                    }]
                },
            }, );

            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                    'icon-image': 'logouberviagem',
                    'icon-size': 0.03
                }
            });
        }
    );
});