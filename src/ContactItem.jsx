const ContactItem = ({ contact, onSelectContact }) => {
    const handleClick = () => {
      onSelectContact(contact);
    };
  
    return (
      <li>
        <div>Name: {contact.fullname}</div>
        <div>Phone: {contact.phonenumber}</div>
        <div>Email: {contact.email}</div>
        <div>Type: {contact.type}</div>
        <button onClick={handleClick}>Seleccionar</button>
      </li>
    );
  };
  
  export default ContactItem;