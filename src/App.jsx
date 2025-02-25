import { useState } from 'react'
import ContactList from './ContactList'
import Cabecera from './Header';
import Detail from './ContactDetail';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contacts = [
  { name: 'John Doe', phone: '123-456-7890' },
  { name: 'Jane Smith', phone: '098-765-4321' },
];
const featuredContact = { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' };

function App() {
  return (
      <div>
        <Cabecera />
        <ContactList contacts={contacts} />
        <Detail contact={featuredContact}/>
      </div>  
  )
}

export default App;
