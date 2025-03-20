import React, { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const ContactType = ({ onSelectContact }) => {
  const { type } = useParams();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
        console.log('Fetched contacts:', data);
      } catch (error) {
        setErrorMessage('Ocurrió un error al cargar contactos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => contact.type === type);
  console.log('Filtered contacts:', filteredContacts);

  return (
    <div>
      <h2>Tipos de Contactos</h2>
      <nav>
        <ul>
          <li><Link to="/social">Social</Link></li>
          <li><Link to="/familia">Familia</Link></li>
          <li><Link to="/trabajo">Trabajo</Link></li>
        </ul>
      </nav>
      {isLoading ? <p>Cargando...</p> : (
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          <Outlet context={{ contacts: filteredContacts, onSelectContact }} />
        </div>
      )}
    </div>
  );
};

export default ContactType;