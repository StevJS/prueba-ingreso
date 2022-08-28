import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';

const L =require ('leaflet');
import 'leaflet-minimap';
import {standard_osm} from '../layers/control-layers'
import { map } from '../map-control';

// agregamos el minimapa y lo dejamos maximizado para mayor comodidad 
export var minimap = new L.Control.MiniMap(standard_osm, 
{ 
    toggleDisplay: true ,
    minimized:false,
    position: "bottomleft"
}).addTo(map)


