import background from './images/pattern-bg.png'
import Map from './Map'
import {useState, useEffect} from "react";
import IPData from "./IPData";

function App() {
    const [IPAddress, setIPAddress] = useState("")
    const [data, setData] = useState()

    useEffect(() => getData, [])

    const getData = () => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_YWBqJry5c0npw1xgs8eq5GdfnaYAf&ipAddress=${IPAddress}`)
            .then(r => r.json())
            .then(data => setData(data))
    }

  return (
      <div className="h-screen">
          <div style={{backgroundImage: `url(${background})`}} className="h-[256px] md:h-[200px] flex justify-center relative">
              <div className="flex flex-col w-5/6 md:w-[500px]">
                  <h1 className="text-center mt-3 mb-3 text-[26px] font-medium text-slate-50">IP Address Tracker</h1>
                  <div className="w-full flex flex-start">
                      <input type="text" className="bg-slate-50 rounded-l-lg px-4 py-2 w-11/12 focus:outline-none" placeholder="Search for any IP address or domain.." onChange={(e) => setIPAddress(e.target.value)}/>
                      <button onClick={getData} type="button" className="bg-slate-900 w-1/12 rounded-r-lg flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
                  </div>
              </div>
              {data && <IPData data={data}/>}
          </div>
          {data && <Map latitude={data.location.lat} longitude={data.location.lng}/>}
      </div>
  );
}

export default App;
