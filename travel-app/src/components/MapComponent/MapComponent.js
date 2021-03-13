import React, { useState, useEffect } from 'react';
import styles from './MapComponent.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapComponent = (props) => {
    const position = [41.319279, 16.283991];
    const [coordinate, setCoordinate] = useState([]);


    return (
        <div className={styles.map__wrapper}>
            <MapContainer center={position} zoom={5}  >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
            </MapContainer >

        </div>


    )

}



export default MapComponent;




