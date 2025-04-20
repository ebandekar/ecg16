import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setStatus(res.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Error sending message.");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-left">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p><i className="fas fa-phone-alt"></i> CALL US</p>
                    <span>1 (234) 567-891, 1 (234) 987-654</span>
                </div>
                <div className="contact-info">
                    <p><i className="fas fa-map-marker-alt"></i> LOCATION</p>
                    <span>121 Rock Street, 21 Avenue, New York, NY 92103-9000</span>
                </div>
                <div className="contact-info">
                    <p><i className="fas fa-clock"></i> BUSINESS HOURS</p>
                    <span>Mon - Fri: 10 AM - 8 PM</span><br/>
                    <span>Sat, Sun: Closed</span>
                </div>
            </div>

            <div className="contact-right">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Enter a valid email address" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required />
                    <button type="submit">SUBMIT</button>
                    {status && <p className="status">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
