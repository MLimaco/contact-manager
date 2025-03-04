import { useState } from 'react'
import ContactList from './ContactList'
import Cabecera from './Header';
import Detail from './ContactDetail';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contacts = [
  { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', type: 'Friend' },
  { name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com', type: 'Work' },
];
function App() {
  const [selectedContact, setSelectedContact] = useState(null);


  const handleClear = () => {
    setSelectedContact(null);
  };

  return (
    <div>
      <Cabecera />
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
