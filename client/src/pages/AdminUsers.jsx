import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminUsers = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const config = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    "Content-Type": "application/json",
                }
            };
            const response = await fetch(`${backendUrl}/api/admin/getAllUsers`, config);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users data: ", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const config = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    "Content-Type": "application/json",
                }
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteUser/${id}`, config);
            if (response.ok) {
                getAllUsersData();
            }
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <section className="bg-black rounded-3xl w-full mt-[200px] max-w-3xl mx-auto p-5 shadow-lg shadow-pink-500/50 text-pink-700">
                <div className="mx-auto text-center">
                    <h2 className="text-4xl font-semibold">Users Data</h2>
                </div>
                
                <div className="w-full mx-auto p-4 rounded-2xl mt-4">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left mb-8">
                            <thead>
                                <tr className="rounded-lg">
                                    <th className="bg-gray-800 text-white p-4 uppercase text-base">User Name</th>
                                    <th className="bg-gray-800 text-white p-4 uppercase text-base">Email</th>
                                    <th className="bg-gray-800 text-white p-4 uppercase text-base">Edit</th>
                                    <th className="bg-gray-800 text-white p-4 uppercase text-base">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                        <td className="p-4 text-base text-gray-300">{user.userName}</td>
                                        <td className="p-4 text-base text-gray-300">{user.email}</td>
                                        <td className="p-4">
                                            <Link to={`/admin/users/${user._id}/edit`}>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="p-4">
                                            <button 
                                                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                                onClick={() => deleteUser(user._id)}
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
        </>
    );
}

export default AdminUsers;