import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <p>
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p>
            <strong>Email:</strong> contact@thecook.com
          </p>
          <p>
            <strong>Address:</strong> 123 Food Street, Food City, Cookland
          </p>
          <p>
            <strong>Working Days:</strong> Monday to Friday
          </p>
          <p>
            <strong>Working Hours:</strong> 9:00 AM - 6:00 PM
          </p>
        </div>

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

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {isSubmitted && (
          <div className="success-message">
            <p>Thank you for reaching out! We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
