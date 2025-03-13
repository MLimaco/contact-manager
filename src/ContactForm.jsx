import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('familia');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = 'Fullname is required';
    if (!phonenumber) newErrors.phonenumber = 'Phonenumber is required';
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAddContact({ fullname, phonenumber, email, type });
    setFullname('');
    setPhonenumber('');
    setEmail('');
    setType('familia');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fullname:</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        {errors.fullname && <p>{errors.fullname}</p>}
      </div>
      <div>
        <label>Phonenumber:</label>
        <input type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
        {errors.phonenumber && <p>{errors.phonenumber}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="familia">Familia</option>
          <option value="social">Social</option>
          <option value="trabajo">Trabajo</option>
        </select>
      </div>
      <button type="submit" disabled={!fullname || !phonenumber || !email}>Guardar</button>
    </form>
  );
};

export default ContactForm;