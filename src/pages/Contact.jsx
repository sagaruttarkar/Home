import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    service: [],
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'service') {
      setForm((prev) => {
        const services = prev.service || [];
        return checked
          ? { ...prev, service: [...services, value] }
          : { ...prev, service: services.filter((s) => s !== value) };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.service.length) {
      setStatus('❌ Please select at least one service.');
      return;
    }

    // Redirect to fixed WhatsApp link
    window.open('https://api.whatsapp.com/message/TWKAT7WPLF2UG1?autoload=1&app_absent=0', '_blank');

    setStatus('✅ Redirecting to WhatsApp...');
    setForm({ name: '', mobile: '', service: [], message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-grid">

          <div className="contact-info">
            <h2>📍 Address</h2>
            <p>
              Ground floor, Razak Manzil building,<br />
              near Handsome Tailor, opp. Shanti Niketan,<br />
              Mahim West, Mumbai, Maharashtra 400016
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="tel" name="mobile" placeholder="Your Mobile Number" value={form.mobile} onChange={handleChange} required />

            <fieldset className="services-checkboxes">
              <legend>Select Service(s) *</legend>
              {['Portable X-Ray','Portable ECG','Portable Blood Test','At-Home X-Ray for Dogs'].map((s) => (
                <label key={s}>
                  <input type="checkbox" name="service" value={s} checked={form.service.includes(s)} onChange={handleChange} /> {s}
                </label>
              ))}
            </fieldset>

            <textarea name="message" rows="5" placeholder="Your Message" value={form.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
