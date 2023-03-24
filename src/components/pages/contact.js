import React, { useState } from "react";
import '../../css/contact.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormError('All fields must be filled');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setFormError('Email address is not vailid');
      return;
    }

    setFormError('');
    setFormSuccess(true);
  };
  
  return (
    <form onSubmit={handleSubmit} className="contact-form">
    
        {formError && <div className="alert alert-danger">{formError}</div>}
        {formSuccess && <div className="alert alert-success">Thanks for contacting Jacob!</div>}
    
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
    
        <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
    
        <button type="submit">Submit</button>
        </form>
    );
}
    
    export default ContactForm;