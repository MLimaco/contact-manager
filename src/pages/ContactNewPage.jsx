import ContactForm from '../components/ContactForm';

const ContactNewPage = ({ onAddContact }) => {
  return (
    <div className="p-6">
      <ContactForm onAddContact={onAddContact} />
    </div>
  );
};

export default ContactNewPage;