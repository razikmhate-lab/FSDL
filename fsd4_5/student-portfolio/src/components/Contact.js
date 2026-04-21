import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [status, setStatus] = useState('');

  // Updates the state whenever the user types in a box
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sends the data to PHP when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    fetch('http://localhost/portfolio_api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success') {
        setStatus('Thank you! I will get back to you soon.');
        setFormData({ name: '', email: '', mobile: '', message: '' }); // Clear the form
      } else {
        setStatus('Error sending message.');
      }
    })
    .catch(error => {
      setStatus('Could not connect to the server. Make sure XAMPP is running!');
    });
  };

  return (
    <section className="portfolio-section">
      <h2>Connect With Me</h2>
      <p>Interested in collaborating or have a question? Leave your details below!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <textarea name="message" placeholder="What would you like to discuss?" value={formData.message} onChange={handleChange} required rows="4"></textarea>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;