import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Cabecera from './Header';
import Detail from './ContactDetail';
import ContactForm from './ContactForm';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Sin Contactos');

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
    } catch (error) {
      setErrorMessage('Ocurrió un error al cargar contactos');
    } finally {
      setIsLoading(false);
    }
  };

  const saveContact = async (newContact) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        throw new Error('Failed to save contact');
      }
      const savedContact = await response.json();
      setContacts([...contacts, savedContact]);
    } catch (error) {
      setErrorMessage('Ocurrió un error al guardar el contacto');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddContact = (newContact) => {
    saveContact(newContact);
  };

  const handleClear = () => {
    setSelectedContact(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <Cabecera />
      <ContactForm onAddContact={handleAddContact} />
      <input
        type="text"
        placeholder="Filtrar contactos"
        value={filter}
        onChange={handleFilterChange}
      />
      {isLoading && <p>Cargando...</p>}
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
          <button onClick={fetchContacts}>Reintentar</button>
        </div>
      )}
      <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
      {selectedContact ? (
        <Detail contact={selectedContact} onClear={handleClear} />
      ) : (
        <p>Ningún contacto seleccionado</p>
      )}
    </div>
  );
}

export default App;