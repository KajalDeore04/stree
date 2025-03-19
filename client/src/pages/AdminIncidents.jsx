import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminIncidents = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [incidents, setIncidents] = useState([]);

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
            const data = await response.json();
            const updatedIncidents = data.map((incident) => ({
                ...incident,
                isExpanded: false,
            }));
            setIncidents(updatedIncidents);
        } catch (error) {
            console.error('Error fetching incidents: ', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const config = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteIncident/${id}`, config);
            if (response.ok) {
                getAllUsersIncidents();
            }
        } catch (error) {
            console.error('Error deleting incident: ', error);
        }
    };

    useEffect(() => {
        if (token) {
            getAllUsersIncidents();
        }
    }, [token]);

    return (
        <section className="bg-black rounded-3xl w-full max-w-4xl mx-auto p-5 shadow-lg shadow-pink-500/50 text-pink-700 mt-32">
            <div className="mx-auto text-center">
                <h1 className="text-4xl font-bold text-pink-700">Incidents Data</h1>
            </div>
            
            <div className="mx-auto mt-4">
                <div className="max-h-96 overflow-y-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="rounded-lg">
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">User Name</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Category</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Date</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Time</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Location</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Edit</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidents.map((incident, index) => (
                                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                    <td className="p-4 text-base text-gray-300">{incident.user ? incident.user.userName : 'Unknown User'}</td>
                                    <td className="p-4 text-base text-gray-300">{incident.category}</td>
                                    <td className="p-4 text-base text-gray-300">{incident.date.split('T')[0]}</td>
                                    <td className="p-4 text-base text-gray-300">{incident.time}</td>
                                    <td className="p-4 text-base text-gray-300">
                                        <div className="flex flex-col">
                                            <span>{incident.location.coordinates[0]}</span>
                                            <span>{incident.location.coordinates[1]}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <Link to={`/admin/incidents/${incident._id}/edit`}>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="p-4">
                                        <button 
                                            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                            onClick={() => deleteUser(incident._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AdminIncidents;