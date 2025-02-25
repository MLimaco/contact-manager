import Contactos from 'react';

const ContactList = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact, index) => (
                <div key={index}>
                    <p>Nombre: {contact.name}</p>
                    <p>Teléfono: {contact.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactList;