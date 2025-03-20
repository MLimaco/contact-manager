import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import Cabecera from './Header';
import Detail from './ContactDetail';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import ContactType from './ContactType';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      console.log('Fetched contacts in App:', data);
    } catch (error) {
      setErrorMessage('Ocurrió un error al cargar contactos');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

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
      const updatedContacts = [...contacts, savedContact];
      setContacts(updatedContacts);
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

  return (
    <Router>
      <div>
        <Cabecera />
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactType onSelectContact={setSelectedContact} />}>
            <Route path=":type" element={<ContactList />} />
            <Route path=":type/contact/:id" element={<Detail />} />
          </Route>
          <Route path="/create" element={<ContactForm onAddContact={handleAddContact} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;