import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent.`);
  };

  const containerStyle = {
    backgroundColor: '#111',
    color: 'white',
    fontFamily: 'Quantico, sans-serif',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headerStyle = {
  
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    marginBottom: '0px',
    marginTop: '30px',
  };

  const headerTextStyle = {
    margin: 0,
    fontSize: '2rem',
    fontFamily: 'Quantico, sans-serif',
    textTransform: 'uppercase',
  };

  const contactInfoStyle = {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const contactInfoTextStyle = {
    margin: '10px 0',
  };

  const feedbackSectionStyle = {
    maxWidth: '600px',
    margin: '8px auto',
    backgroundColor: '#222',
    padding: '50px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
  };

  const feedbackHeadingStyle = {
    fontSize: '1.8rem',
    color: '#f44336',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    fontSize: '1.1rem',
    marginBottom: '5px',
    color: '#f44336',
    display: 'block',
  };

  const inputStyle = {
    width: '90%',
    padding: '10px',
    marginTop: '5px',
    backgroundColor: '#333',
    border: '1px solid white',
    borderRadius: '5px',
    color: 'white',
  };

  const textareaStyle = {
    height: '150px',
    resize: 'none',
    width: '90%',
    padding: '10px',
    marginTop: '5px',
    backgroundColor: '#333',
    border: '1px solid white',
    borderRadius: '5px',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
    width: '50%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#d32f2f',
  };

  const buttonActiveStyle = {
    backgroundColor: '#b71c1c',
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      containerStyle: {
        padding: '10px',
      },
      feedbackSectionStyle: {
        padding: '15px',
      },
    },
  };

  return (
    <div style={{ ...containerStyle, ...responsiveStyle.containerStyle }}>
      <header style={headerStyle}>
        <h1 style={headerTextStyle}>Contact Us - MovieMancer</h1>
      </header>
      <div style={contactInfoStyle}>
        <p style={contactInfoTextStyle}>Email: support@moviemancer.com</p>
        <p style={contactInfoTextStyle}>Phone: +1 234 567 890</p>
      </div>
      <section style={{ ...feedbackSectionStyle, ...responsiveStyle.feedbackSectionStyle }}>
        <h2 style={feedbackHeadingStyle}>Share Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              required
              style={textareaStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
