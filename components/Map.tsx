import 'mapbox-gl/dist/mapbox-gl.css' // npm install react-map-gl-geocoder
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'// npm install react-map-gl-geocoder
import React, { useState, useRef, useCallback } from 'react';
import ReactMapGl, { ViewportProps } from 'react-map-gl';
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

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewportData(newViewport),
    []
  );

  return (
    <div style={{ gridArea: 'Map' }}>
      <ReactMapGl
        {...viewportData}
        onViewportChange={(viewportData) => {
          setViewportData(viewportData);
        }}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
      </ReactMapGl>
    </div>

  );
};

// Additional code to be evaluted here below

/*const MAPBOX_TOKEN = 'pk.eyJ1IjoidXRkMzExIiwiYSI6ImNrZmZ1NjdvMzBlOXkyeGxhanZtampoeDYifQ.OeukqyiAWtOU3e-MRXHZqg'

interface MapProps { }

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <ReactMapGl
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </ReactMapGl>
    </div>
  );
};*/
