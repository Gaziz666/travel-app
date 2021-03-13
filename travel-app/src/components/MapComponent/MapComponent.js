import React, { useState } from 'react';
import MapGL, { Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import classes from './MapComponent.module.css'

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZ2VuZXJhbC1tIiwiYSI6ImNraWozZjdrdjJkbWYycnBlNmw5N3RhNjgifQ.awd7EvjA7RM8Dl4Xb_5dBA'

export default function MapComponent() {
    const [viewport, setViewport] = useState({
        latitude: 45.46427,
        longitude: 9.18951,
        zoom: 6
    });

    return (
        <div>
            <MapGL
                style={{ width: '100%', height: '445px' }}
                mapStyle='mapbox://styles/general-m/ckirr8k4t08tt19ozy2u7lkr7'
                accessToken={MAPBOX_ACCESS_TOKEN}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                onViewportChange={setViewport}
            >
                <Marker latitude='45.46427' longitude='9.18951'>
                    <div className={classes.marker__btn}>
                        <img src="/marker.png" alt="capital" />
                    </div>

                </Marker>
            </MapGL>
        </div >
    )
}










