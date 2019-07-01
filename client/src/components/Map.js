import React from 'react';
import GoogleMapReact from 'google-map-react';
// require('dotenv').config({ path: 'variables.env' });

const apiIsLoaded = (map, maps, center) => {
    const circle = new maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.6,
        strokeWeight: 1,
        fillColor: "#FF0000",
        fillOpacity: 0.2,
        map,
        center: center,
        radius: 1100
    });
};

const SimpleMap = ({ center, zoom }) => {
    return (
        <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'XXXX' }}
                yesIWantToUseGoogleMapApiInternals={true}
                defaultZoom={zoom}
                defaultCenter={center}
                onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, center)}
            />
        </div>
    );
};

export default SimpleMap;