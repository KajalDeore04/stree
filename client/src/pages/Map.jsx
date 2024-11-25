import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../src/map.css'
import { useAuth } from "../store/auth";
const backendUrl = import.meta.env.VITE_BACKEND_URL

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [searchParams, setSearchParams] = useState({ dateRange: null, category: '' });

  const { token } = useAuth(); 
  const [mytoken,setMytoken] = useState(token);
  
  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const config =  {
            "headers": {
              Authorization: `Bearer ${mytoken}`, 
              "Content-Type": "application/json",
        }};
        // const res = await axios.get('http://localhost:5000/api/incidents');
        const res = await axios.get(`${backendUrl}/api/incidents/getAllIncidents`, config);

        setIncidents(res.data);
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };

    fetchIncidents();
  }, []);

  const filteredIncidents = incidents.filter(incident => {
    const matchesCategory = searchParams.category ? incident.category === searchParams.category : true;
    const matchesDateRange = searchParams.dateRange
      ? new Date(incident.date) >= searchParams.dateRange[0] && new Date(incident.date) <= searchParams.dateRange[1]
      : true;

    return matchesCategory && matchesDateRange;
  });

  return (
    <div className="flex flex-col  pt-[60px] pb-[30px] relative z-10 bg-black ">
      


      <div className="mt-20 flex justify-center gap-2 mb-5">
        <select
          value={searchParams.category}
          onChange={(e) => setSearchParams({ ...searchParams, category: e.target.value })}
          className="p-2 border border-gray-300 rounded-[30px] bg-pink-700"
        >
          <option value="" disabled>Select Category</option>
          <option value="mistreatment">Mistreatment</option>
          <option value="hooligans">Hooligans</option>
          <option value="cat-calling">Cat-calling</option>
          <option value="shady-area">Shady Area</option>
        </select>
        <input
          type="date"
          placeholder="Start Date"
          onChange={(e) => setSearchParams({ ...searchParams, dateRange: [new Date(e.target.value), searchParams.dateRange ? searchParams.dateRange[1] : new Date()] })}
          className="p-2 border border-gray-300 rounded-[30px] bg-pink-700"
        />
        <input
          type="date"
          placeholder="End Date"
          onChange={(e) => setSearchParams({ ...searchParams, dateRange: [searchParams.dateRange ? searchParams.dateRange[0] : new Date(), new Date(e.target.value)] })}
          className="p-2 border border-gray-300 rounded-[30px] bg-pink-700"
        />
      </div>



      <div className="z-10 relative h-[520px] border border-gray-300">
        <MapContainer center={[20.89777963258998, 74.77267383407136]} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Kajal"
          />
          {filteredIncidents.map((incident) => (
            <Marker
              key={incident._id}
              position={[incident.location.coordinates[1], incident.location.coordinates[0]]}
              eventHandlers={{
                click: () => setSelectedIncident(incident),
              }}
            >
              <Popup>{incident.category}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      

      
      {selectedIncident && (
        <div className="z-50 top-1/2 left-1/2 absolute py-4 border bg-pink-700 rounded-[30px] px-5 border-black  text-white w-1/4 m-auto text-start transition-all delay-700 ease-in-out">
          <div className='flex justify-between items-center'>
            <h3 className="text-lg font-semibold">Incident Details</h3>
            <button 
        onClick={() => setSelectedIncident(null)} 
        className="mt-2 p-1 bg-white text-pink-700 rounded"
      >
        Close
      </button>
      </div>
          <p><strong>Description : </strong>{selectedIncident.description}</p>
          <p><strong>Category : </strong> {selectedIncident.category}</p>
          <p><strong>Date : </strong> {new Date(selectedIncident.date).toLocaleDateString()}</p>
          <p><strong>Time : </strong> {new Date(selectedIncident.date).toLocaleTimeString()}</p>
          <p><strong>Reported by : </strong> {selectedIncident.name || "Anonymous"}</p>
          
        </div>
      )}
    
    </div>
  );
};

export default Map;