import background from './images/pattern-bg.png'
import Map from './Map'
import {useState, useEffect} from "react";
import IPData from "./IPData";

function App() {
    const apiKey = "at_YWBqJry5c0npw1xgs8eq5GdfnaYAf"
    const [input, setInput] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [ipAddress, setIpAddress] = useState("")
    const [domain, setDomain] = useState("")
    const [data, setData] = useState(null)

    useEffect(() => handleSearchValue(searchValue),[searchValue])

    useEffect( () => getData(ipAddress, domain), [ipAddress, domain])

    const search = () => {
        setSearchValue(input)
    }

    const getData = (ipAdd, dom) => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAdd}&domain=${dom}`)
            .then(r => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error("Not found")
            })
            .then(data => setData(data))
            .catch(error => alert(error))
    }

    const handleSearchValue = (searchVal) => {
        setIpAddress("")
        setDomain("")
        if (isIPaddress(searchVal)){
            setIpAddress(searchVal)
        }else{
            setDomain(searchVal)
        }
    }

    function isIPaddress(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true
        }
        return false
    }

    return (
      <div className="h-screen">
          <div style={{backgroundImage: `url(${background})`}} className="h-[256px] md:h-[200px] flex justify-center relative">
              <div className="flex flex-col w-5/6 md:w-[500px]">
                  <h1 className="text-center mt-3 mb-3 text-[26px] font-medium text-slate-50">IP Address Tracker</h1>
                  <div className="w-full flex flex-start">
                      <input type="text" className="bg-slate-50 rounded-l-lg px-4 py-2 w-11/12 focus:outline-none" placeholder="Search for any IP address or domain.." onChange={(e) => setInput(e.target.value)}/>
                      <button onClick={search} type="button" className="bg-slate-900 w-1/12 rounded-r-lg flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
                  </div>
              </div>
              {data && <IPData data={data}/>}
          </div>
          {data && <Map latitude={data.location.lat} longitude={data.location.lng}/>}
      </div>
  );
}

export default App;
