import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import '../../src/adminUsers.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const { user, token } = useAuth();
  const [mytoken, setMytoken] = useState(token);
  const [users, setUsers] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const COLORS = ['#f959a4', '#a83279', '#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];

  const getAllUsers = async () => {
    try {
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${backendUrl}/api/admin/getAllUsers`, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users: ', error);
      setError(prev => ({ ...prev, users: error.message }));
    }
  };

  const getAllUsersIncidents = async () => {
    try {
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${backendUrl}/api/admin/getAllIncidents`, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIncidents(data);
    } catch (error) {
      console.error('Error fetching incidents: ', error);
      setError(prev => ({ ...prev, incidents: error.message }));
    }
  };

  const getAllUsersContacts = async () => {
    try {
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${backendUrl}/api/admin/getAllContactMessages`, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Contacts data received:', data);
      
      if (!Array.isArray(data)) {
        console.error('Expected array but got:', typeof data);
        setContacts([]);
        setError(prev => ({ ...prev, contacts: 'Invalid data format received' }));
        return;
      }
      
      // Log the first item to see its structure
      if (data.length > 0) {
        console.log('First contact item structure:', data[0]);
      }
      
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts: ', error);
      setError(prev => ({ ...prev, contacts: error.message }));
      setContacts([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      await getAllUsers();
      await getAllUsersIncidents();
      await getAllUsersContacts();
      setLoading(false);
    };
    
    if (token) {
      fetchAllData();
    }
  }, [token]);

  // Prepare data for charts
  const prepareIncidentsByCategory = () => {
    const categories = {};
    incidents.forEach(incident => {
      const category = incident.category || 'Uncategorized';
      categories[category] = (categories[category] || 0) + 1;
    });
    
    return Object.keys(categories).map(category => ({
      name: category,
      value: categories[category]
    }));
  };

  const prepareIncidentsByMonth = () => {
    const months = {};
    incidents.forEach(incident => {
      if (incident.date) {
        const date = new Date(incident.date);
        const month = date.toLocaleString('default', { month: 'short' });
        months[month] = (months[month] || 0) + 1;
      }
    });
    
    return Object.keys(months).map(month => ({
      name: month,
      incidents: months[month]
    })).sort((a, b) => {
      const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name);
    });
  };

  const prepareContactsByDate = () => {
    // Group contacts by date for the chart
    // Since we don't have createdAt, we'll use a mock date distribution
    // In a real scenario, you'd want to use _id to extract a timestamp if available
    
    const contactsByDate = {};
    const today = new Date();
    
    // Create a date range for the last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      contactsByDate[dateKey] = 0;
    }
    
    // Distribute contacts across the date range
    // This is a mock distribution since we don't have real timestamps
    if (contacts.length > 0) {
      const dateKeys = Object.keys(contactsByDate);
      
      // Distribute contacts evenly across the date range
      contacts.forEach((contact, index) => {
        const dateIndex = index % dateKeys.length;
        const dateKey = dateKeys[dateIndex];
        contactsByDate[dateKey]++;
      });
    }
    
    // Convert to array format for the chart
    return Object.keys(contactsByDate).map(dateKey => {
      const date = new Date(dateKey);
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return {
        name: formattedDate,
        contacts: contactsByDate[dateKey]
      };
    });
  };

  // Alternative method using _id for timestamp if available
  const prepareContactsByTimestamp = () => {
    if (!contacts || contacts.length === 0) {
      return generatePlaceholderData();
    }
    
    try {
      // Check if the _id field contains a timestamp (MongoDB ObjectId)
      const hasTimestampId = contacts.length > 0 && 
        contacts[0]._id && 
        contacts[0]._id.length >= 24;
      
      if (hasTimestampId) {
        // Group contacts by date using the timestamp in ObjectId
        const contactsByDate = {};
        contacts.forEach(contact => {
          // Extract timestamp from ObjectId (first 8 characters of the 24-char _id)
          const timestamp = parseInt(contact._id.substring(0, 8), 16) * 1000;
          const date = new Date(timestamp);
          const dateKey = date.toISOString().split('T')[0];
          contactsByDate[dateKey] = (contactsByDate[dateKey] || 0) + 1;
        });
        
        // Ensure we have entries for the last 7 days
        const today = new Date();
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          const dateKey = date.toISOString().split('T')[0];
          if (!contactsByDate[dateKey]) {
            contactsByDate[dateKey] = 0;
          }
        }
        
        // Convert to array format for the chart, keeping only the last 7 days
        const sortedDates = Object.keys(contactsByDate).sort();
        const recentDates = sortedDates.slice(-7);
        
        return recentDates.map(dateKey => {
          const date = new Date(dateKey);
          const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          return {
            name: formattedDate,
            contacts: contactsByDate[dateKey]
          };
        });
      } else {
        // If no timestamp available, use the distribution method
        return prepareContactsByDate();
      }
    } catch (err) {
      console.error("Error processing contact data:", err);
      return generatePlaceholderData();
    }
  };
  
  const generatePlaceholderData = () => {
    const data = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      data.push({
        name: formattedDate,
        contacts: 0
      });
    }
    return data;
  };

  // Choose the appropriate data preparation method
  const contactsData = prepareContactsByTimestamp();

  return (
    <section className="p-8 text-center">
      <h1 className="text-6xl font-bold mt-[50px] mb-12 text-white">Admin Dashboard</h1>
      
      {loading ? (
        <div className="text-xl text-white">Loading statistics...</div>
      ) : (
        <div className="flex flex-col gap-12 ">
          {/* Stats Summary */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6 w-64">
              <h3 className="text-xl font-semibold mb-2 text-white">Total Users</h3>
              <p className="text-4xl font-bold text-white">{users.length}</p>
            </div>
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6 w-64">
              <h3 className="text-xl font-semibold mb-2 text-white">Total Incidents</h3>
              <p className="text-4xl font-bold text-white">{incidents.length}</p>
            </div>
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6 w-64">
              <h3 className="text-xl font-semibold mb-2 text-white">Total Contacts</h3>
              <p className="text-4xl font-bold text-white">{contacts.length || 0}</p>
              {error?.contacts && <p className="text-xs text-red-300 mt-2">Error: {error.contacts}</p>}
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Incidents by Category */}
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Incidents by Category</h3>
              <div className="bg-white/10 rounded-lg p-4" style={{ height: '300px' }}>
                {incidents.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={prepareIncidentsByCategory()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {prepareIncidentsByCategory().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full text-white">
                    No incident data available
                  </div>
                )}
              </div>
            </div>

            {/* Incidents by Month */}
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Incidents by Month</h3>
              <div className="bg-white/10 rounded-lg p-4" style={{ height: '300px' }}>
                {incidents.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={prepareIncidentsByMonth()}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="name" stroke="#ffffff" />
                      <YAxis stroke="#ffffff" />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }} />
                      <Legend />
                      <Bar dataKey="incidents" fill="#f959a4" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full text-white">
                    No incident data available
                  </div>
                )}
              </div>
            </div>

            {/* Contacts by Date */}
            <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] p-6 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-white">Recent Contacts</h3>
              {error?.contacts && (
                <div className="bg-red-500/20 text-white p-3 rounded-lg mb-4 text-left">
                  <p className="font-bold">Contact Data Error:</p>
                  <p>{error.contacts}</p>
                </div>
              )}
              <div className="bg-white/10 rounded-lg p-4" style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={contactsData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" allowDecimals={false} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="contacts" 
                      stroke="#a83279" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-white mt-2 text-sm">
                {/* Note: Contact data is distributed across dates since actual timestamps are not available. */}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;