import Contact from "./Contact/Contact";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => {
  return contacts.map((contact) => (
    <Contact key={contact.id} contact={contact} onDelete={onDelete} />
  ));
};

export default ContactList;
