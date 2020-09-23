import React, { useState } from 'react';
import ReactMapGl, { ViewportProps } from 'react-map-gl';

interface MapProps { }

export const Map: React.FC<MapProps> = ({ }) => {
  const [viewportData, setViewportData] = useState<ViewportProps>({
    width: 1000,
    height: 1000,
    latitude: 32.7791,
    longitude: -96.8003,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    altitude: 0,
    maxZoom: 100,
    minZoom: 1,
    maxPitch: 100,
    minPitch: 1,
  });

  return (
    <div>
      <ReactMapGl
        {...viewportData}
        onViewportChange={(viewport) => {
          setViewportData(viewport);
        }}
        mapboxApiAccessToken='pk.eyJ1IjoidXRkMzExIiwiYSI6ImNrZmZ1NjdvMzBlOXkyeGxhanZtampoeDYifQ.OeukqyiAWtOU3e-MRXHZqg'
      />
    </div>
  );
};
