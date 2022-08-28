import 'leaflet/dist/leaflet.css';
import './map.scss';

const L =require ('leaflet');

import {standard_osm_mm} from './layers/control-layers'
import { catastro } from '../../catastro';
import { perimetro } from '../../perimetro';

// Indicamos coordenadas, el zoom del mapa y la base del mapa
export var map = L.map('map', {
    center: [10.494889, -75.124607],
    zoom: 14,
    layers: [standard_osm_mm]
});

L.control.zoom({position: 'topright'}).addTo(map);

// scale control
new L.control.scale({imperial: false}).addTo(map)


// agregamos el popup de Catastro 

function popup(feature, layer){
    if (feature.properties && feature.properties.codigo) {
        layer.bindPopup('<strong>Código </strong>' + feature.properties.codigo + '<br/>' + '<strong>Área </strong>' + feature.properties.area)
    }
}

//agregamos geojson

L.geoJSON(perimetro).addTo(map);
L.geoJSON(catastro).addTo(map);

var catastroJS = L.geoJSON(catastro, {
    onEachFeature: popup
})
catastroJS.addTo(map);
