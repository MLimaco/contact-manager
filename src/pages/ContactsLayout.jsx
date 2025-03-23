import React, { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const ContactsLayout = ({ onSelectContact, handleSaveContacts }) => {
  const { type } = useParams();
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  console.log('Type', type);

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

    // Cargar contactos desde LocalStorage al montar el componente
    const loadContactsFromLocalStorage = () => {
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
        const parsedContacts = JSON.parse(storedContacts);
        setContacts(parsedContacts);
        console.log('Loaded contacts from LocalStorage:', parsedContacts);
      } else {
        fetchContacts();
      }
    };

    loadContactsFromLocalStorage();
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.fullname.toLowerCase().includes(searchTerm.toLowerCase()) && 
    contact.type && type && contact.type.toLowerCase() === type.toLowerCase()
  );
  console.log('Filtered contacts:', filteredContacts);

  // Nueva función para sincronizar datos desde la API y guardarlos en LocalStorage
  const handleSyncContacts = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      setContacts(data);
      localStorage.setItem('contacts', JSON.stringify(data));
      alert('Sincronización exitosa');
      console.log('Synced contacts:', data);
    } catch (error) {
      setErrorMessage('Ocurrió un error al sincronizar contactos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Tipos de Contactos</h2>
      <nav>
        <ul className="mb-4">
          <li><Link to="/social">Social</Link></li>
          <li><Link to="/familia">Familia</Link></li>
          <li><Link to="/trabajo">Trabajo</Link></li>
        </ul>
      </nav>
      {contacts.length > 0 && (
        <div className="mt-4">
          <button onClick={() => handleSaveContacts(filteredContacts)} className="mr-2">Guardar Contactos</button> {/* Botón para guardar contactos */}
          <button onClick={handleSyncContacts}>Sincronizar Datos</button> {/* Botón para sincronizar datos */}
        </div>
      )}
      {isLoading ? <p>Cargando...</p> : (
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          {filteredContacts.length === 0 ? (
            <p>No hay contactos disponibles</p>
          ) : (
            <Outlet context={{ contacts: filteredContacts, setContacts, onSelectContact }} />
          )}
        </div>
      )}
    </div>
  );
};

export default ContactsLayout;