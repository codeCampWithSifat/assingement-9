import React, { useEffect } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lmYXQzMDAiLCJhIjoiY2wxYjJwbWk2MWR3ejNqbncwdXQxbWptYSJ9.nc0QW39ZyhjcAOCBnam7Kg';

const MapDirection = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.412521, 23.810331],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;