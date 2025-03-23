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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Agregar Contacto</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fullname:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phonenumber:</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="familia">Familia</option>
          <option value="social">Social</option>
          <option value="trabajo">Trabajo</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={!fullname || !phonenumber || !email}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Guardar
      </button>
    </form>
  );
};

export default ContactForm;