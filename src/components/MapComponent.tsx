"use client"; // Ensure this runs on the client-side only

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({}) => {
  useEffect(() => {
    // Ensure the map is only created once
    const map = L.map("map").setView([69, 420], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100%", // Set height to fit your layout
        width: "100%",
        position: "relative", // Ensure it does not float above other content
        zIndex: 0, // Lower z-index to avoid overlap
      }}
    ></div>
  );
};

export default MapComponent;
