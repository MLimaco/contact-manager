import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Cabecera from './Header';
import Detail from './ContactDetail';
import ContactForm from './ContactForm';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const initialContacts = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', type: 'Friend' },
  { name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com', type: 'Work' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleClear = () => {
    setSelectedContact(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
      <ContactList contacts={filteredContacts} onSelectContact={setSelectedContact} />
      {selectedContact ? (
        <Detail contact={selectedContact} onClear={handleClear} />
      ) : (
        <p>Ningún contacto seleccionado</p>
      )}
    </div>
  );
}

export default App;