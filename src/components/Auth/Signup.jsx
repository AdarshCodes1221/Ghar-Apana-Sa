import React, { useState } from 'react';
import './Signup.css';
import { signupUser } from '../../services/api';

const Signup = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: 'renter' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await signupUser(form);
      setMessage('Signup successful — check your email or wait for owner contact.');
    } catch (err) {
      setMessage(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close" onClick={onClose}>&times;</button>
        <h3>Sign up as Renter / Owner</h3>
        <form onSubmit={submit} className="signup-form">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="renter">Renter</option>
            <option value="owner">Owner</option>
          </select>

          <button className="button" type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Sign up'}</button>
        </form>
        {message && <div className="signup-message">{message}</div>}
      </div>
    </div>
  );
};

export default Signup;