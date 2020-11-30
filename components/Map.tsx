import 'mapbox-gl/dist/mapbox-gl.css' // npm install react-map-gl-geocoder
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'// npm install react-map-gl-geocoder
import React, { useState, useRef, useCallback } from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'

interface MapProps { }

const MAPBOX_TOKEN = 'pk.eyJ1IjoidXRkMzExIiwiYSI6ImNrZmZ1NjdvMzBlOXkyeGxhanZtampoeDYifQ.OeukqyiAWtOU3e-MRXHZqg'

export const Map: React.FC<MapProps> = ({ }) => {
  const [viewportData, setViewportData] = useState<ViewportProps>({
    width: 600,
    height: 600,
    latitude: 32.7791,
    longitude: -96.8003,
    zoom: 10,
    bearing: 0,
    pitch: 0,
    altitude: 0,
    maxZoom: 100,
    minZoom: 1,
    maxPitch: 100,
    minPitch: 1,
  });

  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewportData(newViewportData),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactMapGL
        ref={mapRef}
        {...viewportData}
        onViewportChange={(viewportData) => {
          setViewportData(viewportData);
        }}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11">

        <Geocoder
          mapRef={mapRef}
          onViewportChange={(viewportData) => {
            setViewportData(viewportData);
          }}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </ReactMapGL>
    </div>

  );
};
