import 'mapbox-gl/dist/mapbox-gl.css' // npm install react-map-gl-geocoder
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'// npm install react-map-gl-geocoder
import React, { useState, useRef, useCallback } from 'react';
import ReactMapGL, { ViewportProps, Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'
import MarkerStyle from './Marker'

interface MapProps { }

const MAPBOX_TOKEN = 'pk.eyJ1IjoidXRkMzExIiwiYSI6ImNrZmZ1NjdvMzBlOXkyeGxhanZtampoeDYifQ.OeukqyiAWtOU3e-MRXHZqg'

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

export const Map: React.FC<MapProps> = ({ }) => {
  const [viewportData, setViewportData] = useState<ViewportProps>({
    width: 1000, // 1300 is standard
    height: 700,
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
        {/* will pull JSON data - temporary hard code */}
        <Marker latitude={32.7767} longitude={-96.787} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7789} longitude={-96.767} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7357} longitude={-96.789} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7127} longitude={-96.7970} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7123} longitude={-96.723} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7254} longitude={-96.7345} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7369} longitude={-96.7567} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7482} longitude={-96.7789} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7516} longitude={-96.789} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7123} longitude={-96.7321} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7234} longitude={-96.7432} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7345} longitude={-96.7543} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7456} longitude={-96.7654} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7567} longitude={-96.7765} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>
        <Marker latitude={32.7678} longitude={-96.7765} offsetLeft={-20} offsetTop={-10}>
          <MarkerStyle></MarkerStyle>
        </Marker>

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>

        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>

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
