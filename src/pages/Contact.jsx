import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if needed
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        email: form.email,
        message: form.message,
        timestamp: serverTimestamp(),
      });
      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>📍 Address</h2>
            <p>
              Ground floor, Razak Manzil building,<br />
              near Handsome Tailor, opp. Shanti Niketan,<br />
              Mahim West, Mahim, Mumbai, Maharashtra 400016
            </p>

            <h2>📞 Call / WhatsApp</h2>
            <p>
              <a href="tel:+918591261438">+91 8591261438</a><br />
              <a href="tel:+918779150343">+91 8779150343</a>
            </p>

            <h2>📧 Email</h2>
            <p>
              <a href="mailto:vismitenvision@gmail.com">vismitenvision@gmail.com</a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8569392642876!2d72.83904637471894!3d19.07296945261462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfcb3933c7d7%3A0x7fef5aa8ea77c41b!2sRazak%20Manzil%2C%20Mahim%2C%20Mumbai%2C%20Maharashtra%20400016!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, marginTop: '40px', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
