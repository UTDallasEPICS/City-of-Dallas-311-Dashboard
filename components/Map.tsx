import React, { useState } from 'react';
import ReactMapGl, { ViewportProps } from 'react-map-gl';

interface MapProps {}

export const Map: React.FC<MapProps> = ({}) => {
  const [viewportData, setViewportData] = useState<ViewportProps>({
    width: 1000,
    height: 1000,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
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
        mapboxApiAccessToken='pk.eyJ1IjoidXRkZXBpY3MiLCJhIjoiY2s5aGl4NnJzMHpkNjNrbGw5cXVrMW03MiJ9.hzZPdh1FJVdOKHTQQrFbmQ'
      />
    </div>
  );
};
