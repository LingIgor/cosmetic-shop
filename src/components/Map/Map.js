import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';

const MapContainer = () => {
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState(null);

  const destination = { lat: 40.7128, lng: -74.006 };
  const initialCenter = { lat: 40.7128, lng: -74.006 };

  const onMapClick = e => {
    const { latLng } = e;
    setOrigin({ lat: latLng.lat(), lng: latLng.lng() });
  };

  const directionsCallback = response => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Directions request failed due to ', response.status);
      }
    }
  };

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        border: '1px solid #ccc',
        position: 'relative',
      }}
    >
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: 0, lng: 0 }}
          zoom={3}
          onClick={onMapClick}
        >
          {origin && <Marker position={origin} />}

          {origin && (
            <DirectionsService
              options={{
                destination: {
                  lat: destination,
                  lng: initialCenter,
                },
                origin,
                travelMode: 'DRIVING',
              }}
              callback={directionsCallback}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
