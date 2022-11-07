import background from './images/pattern-bg.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

  return (
      <div className="h-screen">
          <div style={{backgroundImage: `url(${background})`}} className="h-1/3 flex justify-center">
              <div className="flex flex-col w-[500px]">
                  <h1 className="text-center mt-4 mb-4">IP Address Tracker</h1>
                  <div className="w-full flex flex-start">
                      <input type="text" className="rounded-l-lg px-4 py-3 w-11/12" placeholder="Search for any IP address or domain.."/>
                      <button type="button" className="bg-slate-900 w-1/12 rounded-r-lg flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
                  </div>
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
