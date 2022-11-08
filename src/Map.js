import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";

function Map({latitude, longitude}) {
    const center = [latitude, longitude]
    const zoom = 13

    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }
    return(
        <MapContainer className="absolute w-full top-[254px] md:top-[200px] bottom-0 z-0" center={center} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeView center={center} zoom={zoom} />
            <Marker position={[latitude, longitude]}/>
        </MapContainer>)

}export default Map
