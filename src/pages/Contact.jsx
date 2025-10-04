import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if needed
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    service: [], // <-- now an array to hold multiple services
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'service') {
      setForm((prev) => {
        const services = prev.service || [];
        if (checked) {
          // add service if not already present
          if (!services.includes(value)) {
            return { ...prev, service: [...services, value] };
          }
          return prev;
        } else {
          // remove service
          return { ...prev, service: services.filter((s) => s !== value) };
        }
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate at least one service selected
    if (!form.service || form.service.length === 0) {
      setStatus('❌ Please select at least one service.');
      return;
    }

    setStatus('Sending...');

    try {
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        service: form.service, // array stored in Firestore
        message: form.message,
        timestamp: serverTimestamp(),
      });
      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', mobile: '', service: [], message: '' });
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

            {/* If you want to re-enable email input, uncomment below */}
            {/* <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            /> */}

            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
            />

            {/* CHECKBOXES FOR SERVICES */}
            <fieldset className="services-checkboxes" style={{ border: 'none', padding: 0, margin: '12px 0' }}>
              <legend style={{ fontWeight: 600, marginBottom: 8 }}>Select Service(s) <span style={{ color: '#777', fontWeight: 400 }}>(required)</span></legend>

              <label className="service-option">
                <input
                  type="checkbox"
                  name="service"
                  value="Portable X-Ray"
                  checked={form.service.includes('Portable X-Ray')}
                  onChange={handleChange}
                />{' '}
                Portable X-Ray
              </label>

              <label className="service-option">
                <input
                  type="checkbox"
                  name="service"
                  value="Portable ECG"
                  checked={form.service.includes('Portable ECG')}
                  onChange={handleChange}
                />{' '}
                Portable ECG
              </label>

              <label className="service-option">
                <input
                  type="checkbox"
                  name="service"
                  value="Portable Blood Test"
                  checked={form.service.includes('Portable Blood Test')}
                  onChange={handleChange}
                />{' '}
                Portable Blood Test
              </label>

              <label className="service-option">
                <input
                  type="checkbox"
                  name="service"
                  value="At-Home X-Ray for Dogs"
                  checked={form.service.includes('At-Home X-Ray for Dogs')}
                  onChange={handleChange}
                />{' '}
                At-Home X-Ray for Dogs
              </label>
            </fieldset>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8569392642876!2d72.8383176!3d19.0408201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf9bbe4a20a1%3A0xa5349199a625f98a!2sVISMIT%20ENVISION%20IMAGING%20CENTER!5e0!3m2!1sen!2sin!4v1690000000000"
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
