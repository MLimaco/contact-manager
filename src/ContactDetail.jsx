import Detail from 'react';

const ContactDetail = ({ contact }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactDetail;