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
        <section className="admin-incidents-section">
            <div className="container">
                <h1 className="title">Incidents Data</h1>
            </div>
            <div className="container incidents-table-container">
                <div className="table-wrapper">
                    <table className="incidents-table">
                        <thead>
                            <tr>
                                <th className="table-cell">User Name</th>
                                <th className="table-cell">Category</th>
                                <th className="table-cell">Date</th>
                                <th className="table-cell">Time</th>
                                <th className="table-cell">Location</th>
                                <th className="table-cell">Edit</th>
                                <th className="table-cell">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidents.map((incident, index) => (
                                <tr key={index} className="table-row">
                                    <td className="table-cell">{incident.user ? incident.user.userName : 'Unknown User'}</td>
                                    <td className="table-cell">{incident.category}</td>
                                    <td className="table-cell">{incident.date.split('T')[0]}</td>
                                    <td className="table-cell">{incident.time}</td>
                                    <td className="table-cell">
                                        <div className="location">
                                            <span>{incident.location.coordinates[0]}</span>
                                            <span>{incident.location.coordinates[1]}</span>
                                        </div>
                                    </td>
                                    <td className="table-cell">
                                        <Link to={`/admin/incidents/${incident._id}/edit`} className="edit-btn">
                                            <button className="edit-btn-icon"><FaEdit /></button>
                                        </Link>
                                    </td>
                                    <td className="table-cell">
                                        <button 
                                            className="delete-btn"
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
