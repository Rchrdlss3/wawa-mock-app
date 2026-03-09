import { useEffect, useRef, useState } from "react";
import maplibregl from 'maplibre-gl';

export interface MapComponentProps {
    mapZoom?: number
    title?: string
}

export default function (props:MapComponentProps) {
    const [coordinates,setCoordinates] = useState<GeolocationCoordinates>();
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);

useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates(position.coords);
        });
    }, []);

    useEffect(() => {
    if (!coordinates || !mapContainer.current || map.current) return;
            map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {
                    'osm': {
                        type: 'raster',
                        tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors'
                    }
                },
                layers: [{
                    id: 'osm',
                    type: 'raster',
                    source: 'osm',
                }]
            },
            center: [coordinates?.longitude,coordinates?.latitude],
            zoom: props.mapZoom ? props.mapZoom : 14
        });
        new maplibregl.Marker({ color: '#007AFF' }) 
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .addTo(map.current);
        
        return () => {
            map.current?.remove()
            map.current = null
        };

    },[coordinates]);

    return (
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', alignContent: 'center'}}>
            <h1>{props.title ? props.title : null}</h1>
        <div
        ref = {mapContainer}
        style = {{width: '100%', height: '350px', borderRadius: '5px', position: 'relative', overflow: 'hidden', margin:0, padding:0}}
        />
        </div>
    )
}