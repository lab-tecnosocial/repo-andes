import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet'
import data from '../data/repo-andes.json'
import MiMarker from './MiMarker'
import MarkerClusterGroup from 'react-leaflet-cluster'


export default function Mapa() {

    return (
        <MapContainer center={[-17.394, -66.161]} zoom={7} attributionControl={false} className="map-container"
            maxZoom={15}
        >
            <TileLayer
                attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://api.mapbox.com/styles/v1/labtecnosocial/clxjje0sx01hw01qmh9xb9mgk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFidGVjbm9zb2NpYWwiLCJhIjoiY2x4amo4aXhvMXZtNjJpb3Ywa3VoaGpnNSJ9.8EKoh-jSYQi9Gppjb0YpPw"
            />

            {data.map((item, index) => (
                <MiMarker key={index} item={item} />
            ))}
            <AttributionControl position="bottomleft" prefix={false} className="atribucion" />

        </MapContainer>
    )
}
