const ContactDetail = ({ contact, onClear }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <button onClick={onClear}>Limpiar</button>
    </div>
  );
};

export default ContactDetail;