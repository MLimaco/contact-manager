import ContactItem from './ContactItem';

const ContactList = ({ contacts, onSelectContact }) => {
    return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} onSelectContact={onSelectContact} />
      ))}
    </ul>
  );
};

export default ContactList;