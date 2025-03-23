import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const ContactDetail = () => {
  const { contacts, setContacts } = useOutletContext();
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === parseInt(id));

  const toggleFavorite = () => {
    const updatedContacts = contacts.map(c =>
      c.id === contact.id ? { ...c, favorite: !c.favorite } : c
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  if (!contact) {
    return <p>Contacto no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalle del Contacto</h2>
      <p>Nombre: {contact.fullname}</p>
      <p>Teléfono: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Tipo: {contact.type}</p>
      <p>Favorito: {contact.favorite ? 'Sí' : 'No'}</p>
      <button onClick={toggleFavorite}>
        {contact.favorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default ContactDetail;