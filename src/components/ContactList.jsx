import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactList = () => {
  const context = useOutletContext();

  if (!context) {
    return <p>No hay contactos disponibles</p>;
  }

  const { contacts, onSelectContact } = context;

  if (!contacts || contacts.length === 0) {
    return <p>No hay contactos disponibles</p>;
  }
  console.log('Contacts in ContactList:', contacts);

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`contact/${contact.id}`} onClick={() => onSelectContact(contact)}>
              {contact.fullname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;