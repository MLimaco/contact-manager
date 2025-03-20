import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ContactDetail = () => {
  const { id } = useParams();
  const context = useOutletContext();

  console.log('Context in ContactDetail:', context);

  if (!context) {
    return <p>No hay contactos disponibles</p>;
  }

  const { contacts } = context;
  console.log('Contacts in ContactDetail:', contacts);

  if (!contacts || contacts.length === 0) {
    return <p>No hay contactos disponibles</p>;
  }

  const contact = contacts.find(contact => contact.id === parseInt(id));
  console.log('Selected contact:', contact);

  if (!contact) {
    return <p>Contacto no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalles del Contacto</h2>
      <p>Nombre: {contact.fullname}</p>
      <p>Teléfono: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
    </div>
  );
};

export default ContactDetail;