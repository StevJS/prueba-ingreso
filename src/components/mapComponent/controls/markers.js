const L =require ('leaflet');
import 'leaflet-marker-rotation/src/rotatedMarker';
import { map } from '../map-control';

export var dynamicMarker=(icono, coords,angle)=>{
    return L.rotatedMarker(coords, {
        icon: icono,
        rotationOrigin:'center',
        rotationAngle: angle
    });
}

var leafletIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [12, -90]
})

var marker = L.marker([10.494889, -75.124607], {icon:leafletIcon}).bindPopup('Usted está aquí').openPopup();
marker.addTo(map);
