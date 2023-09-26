// frontend/src/components/ContumMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CustomMap = ({ latitude, longitude, width, height }) => {
  const position = [latitude, longitude];

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdn.icon-icons.com/icons2/2785/PNG/64/shopping_cart_icon_177373.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={position}
      zoom={150}
      style={{ width: width, height: height }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Local para retirada</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;

