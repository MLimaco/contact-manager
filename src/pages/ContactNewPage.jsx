import ContactForm from '../components/ContactForm';

const ContactNewPage = ({onAddContact}) => {
    return (
        <div>
            <h1>New Contact</h1>
            <ContactForm onAddContact={onAddContact} />
        </div>
    );
};

export default ContactNewPage;