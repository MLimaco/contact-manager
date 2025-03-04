const ContactItem = ({ contact, onSelectContact }) => {
    const handleClick = () => {
      onSelectContact(contact);
    };
  
    return (
      <li onClick={handleClick}>
        <div>Name: {contact.name}</div>
        <div>Phone: {contact.phone}</div>
        <div>Email: {contact.email}</div>
        <div>Type: {contact.type}</div>
      </li>
    );
  };
  
  export default ContactItem;