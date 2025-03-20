import React from 'react';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact, onSelectContact }) => {
  return (
    <li>
      <Link to={`contact/${contact.id}`} onClick={() => onSelectContact(contact)}>
        {contact.fullname}
      </Link>
    </li>
  );
};

export default ContactItem;