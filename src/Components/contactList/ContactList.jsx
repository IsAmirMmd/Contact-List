import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <Link to="/add" className="addContact">
        Add Contact
      </Link>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default ContactList;
