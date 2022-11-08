import background from './images/pattern-bg.png'
import Map from './Map'
import {useState, useEffect} from "react";

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
              {data &&
                  <div className="h-full md:h-[128px] -bottom-1/2 md:-bottom-16 w-5/6 md:w-4/5 md:min-w-[760px] bg-slate-50 absolute z-[1000] py-1 md:py-6 shadow-2xl rounded-lg grid-cols-1 grid md:grid-cols-4 md:divide-x-[2px]">
                      <div className="text-center md:text-left px-6 py-2 md:py-0">
                          <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Ip address</p>
                          <p className="font-medium text-lg md:text-2xl break-all">{data.ip}</p>
                      </div>
                      <div className="text-center md:text-left px-6 py-2 md:py-0">
                          <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Location</p>
                          <p className="font-medium text-lg md:text-2xl">{data.location.city}, {data.location.country}</p>
                      </div>
                      <div className="text-center md:text-left px-6 py-2 md:py-0">
                          <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Timezone</p>
                          <p className="font-medium text-lg md:text-2xl">UTC {data.location.timezone}</p>
                      </div>
                      <div className="tracking-wider text-center md:text-left px-6 py-2 md:py-0">
                          <p className="uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Isp</p>
                          <p className="font-medium text-lg md:text-2xl two-line-truncate">{data.isp}</p>
                      </div>
                  </div>}

          </div>

          {data && <Map latitude={data.location.lat} longitude={data.location.lng}/>}

      </div>
  );
}

export default App;
