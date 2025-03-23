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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Detalle del Contacto</h2>
        <p className="text-gray-700 mb-2"><strong>Nombre:</strong> {contact.fullname}</p>
        <p className="text-gray-700 mb-2"><strong>Teléfono:</strong> {contact.phonenumber}</p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> {contact.email}</p>
        <p className="text-gray-700 mb-2"><strong>Tipo:</strong> {contact.type}</p>
        <p className="text-gray-700 mb-4"><strong>Favorito:</strong> {contact.favorite ? 'Sí' : 'No'}</p>
        <button
          onClick={toggleFavorite}
          className={`m-4 px-4 py-2 rounded ${contact.favorite ? 'bg-red-500' : 'bg-blue-500'} text-white`}
        >
          {contact.favorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;