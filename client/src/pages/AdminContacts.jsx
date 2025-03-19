import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminContacts = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [contacts, setContacts] = useState([]);

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
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts: ', error);
        }
    };

    const deleteContacts = async (id) => {
        try {
            const config = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteContactMessage/${id}`, config);
            if (response.ok) {
                getAllUsersContacts();
            }
        } catch (error) {
            console.error('Error deleting contact: ', error);
        }
    };

    useEffect(() => {
        getAllUsersContacts();
    }, []);

    return (
        <section className="bg-black rounded-3xl w-full max-w-4xl mx-auto p-5 shadow-lg shadow-pink-500/50 text-pink-700 mt-32">
            <div className="mx-auto text-center">
                <h1 className="text-4xl font-bold text-pink-700">Contacts Data</h1>
            </div>
            <div className="mx-auto mt-4">
                <div className="max-h-96 overflow-y-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">User Name</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Email</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Message</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Edit</th>
                                <th className="bg-gray-800 text-white p-4 uppercase text-base">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                    <td className="p-4 text-base text-gray-300">{contact.userName}</td>
                                    <td className="p-4 text-base text-gray-300">{contact.email}</td>
                                    <td className="p-4 text-base text-gray-300">{contact.message}</td>
                                    <td className="p-4">
                                        <Link to={`/admin/contacts/${contact._id}/edit`}>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="p-4">
                                        <button 
                                            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                            onClick={() => deleteContacts(contact._id)}
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

export default AdminContacts;
