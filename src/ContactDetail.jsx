const ContactDetail = ({ contact, onClear }) => {
  return (
    <div>
      <h2>{contact.fullname}</h2>
      <p>Phone: {contact.phonenumber}</p>
      <p>Email: {contact.email}</p>
      <p>Type: {contact.type}</p>
      <button onClick={onClear}>Limpiar</button>
    </div>
  );
};

export default ContactDetail;