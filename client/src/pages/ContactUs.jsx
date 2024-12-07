import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const defaultContactFormData = {
    userName: "",
    email: "",
    message: ""
};

function ContactUs() {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user && userData) {
            setContact({
                userName: user.userName,
                email: user.email,
                message: "",
            });
            setUserData(false);
        }
    }, [user, userData]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // First, send the email via EmailJS
            const emailResponse = await emailjs.send(
                'service_wkh11q8', // Replace with your Service ID
                'template_cgsuuwi', // Replace with your Template ID
                contact, // Data from the form
                'Rp0u1FT-7l8uvI8yL' // Replace with your User ID from EmailJS dashboard
            );
            
            console.log('Email sent successfully:', emailResponse);

            // Then, save the data to the database
            const response = await fetch(`${backendUrl}/api/contact/contactData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data saved to database:", data);
                alert("Your message has been sent");

                // Clear only the message field
                setContact({
                    ...contact,
                    message: "",
                });
            } else {
                alert("Something went wrong while saving data. Please try again.");
            }

        } catch (error) {
            console.error('Error:', error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="bg-black">
            <section className="bg-black py-10 mt-10">
                <div className="max-w-7xl mx-auto px-4 mt-10">
                    <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">Facing any issues?... Feel free to contact us!</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Contact Image */}
                        <div className="flex justify-center">
                            <img 
                                src="/ContactUs.png" 
                                alt="We are always ready to help"
                                className="max-w-full h-auto rounded-lg "
                            />
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="bg-transparent border-pink-400 hover:border-[1px] rounded-[30px] p-6 shadow-lg shadow-pink-400 w-full max-w-lg mx-auto">
                            <div className="mb-4">
                                <label htmlFor="userName" className="block text-sm font-semibold text-gray-400">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    autoComplete="off"
                                    value={contact.userName}
                                    onChange={handleInput}
                                    required
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    rows="5"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit" className="w-full rounded-[30px] py-3 bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
