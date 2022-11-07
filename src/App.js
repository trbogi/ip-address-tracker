import background from './images/pattern-bg.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

  return (
      <div className="h-screen">
          <div style={{backgroundImage: `url(${background})`}} className="h-1/3 flex justify-center">
              <div className="flex flex-col w-2/5">
                  <h1 className="text-center mt-4 mb-8">IP Address Tracker</h1>
                  <input type="text" className="rounded-lg px-4 py-3" placeholder="Search for any IP address or domain.."/>
              </div>
          </div>

              <MapContainer className="h-2/3" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                      <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                  </Marker>
              </MapContainer>

      </div>
  );
}

export default App;
