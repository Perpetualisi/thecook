import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", message: "", phone: "" });

    // Hide success after few seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p>
              <span className="icon">📞</span>
              <strong> Phone:</strong> +123-456-7890
            </p>
            <p>
              <span className="icon">✉️</span>
              <strong> Email:</strong> contact@thecook.com
            </p>
            <p>
              <span className="icon">📍</span>
              <strong> Address:</strong> 123 Food Street, Food City, Cookland
            </p>
            <p>
              <strong>Working Days:</strong> Mon - Fri
            </p>
            <p>
              <strong>Working Hours:</strong> 9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Your Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {isSubmitted && (
              <div className="success-message">
                <p>✅ Thank you! We’ll get back to you shortly.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
