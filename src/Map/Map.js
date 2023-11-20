import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './Map.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({coordinates, location}) => {
  return (
    <MapContainer
      attributionControl={false}
      zoomControl={false}
      center={location} 
      zoom={5} 
      style={{ height: '600px', width: '100%', borderRadius: '5%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {Array.isArray(coordinates) && coordinates.length > 0 && (
          coordinates.map((location, index) => (
            <Marker 
              key={index}
              position={location.coordinates}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))
        )}
    </MapContainer>
  );
};

export default Map;

