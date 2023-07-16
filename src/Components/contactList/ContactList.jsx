import "./ContactList.css";
import userImage from "./../../assets/avatar.jpg";

const ContactList = ({ contacts, onDelete }) => {
  return contacts.map((contact) => (
    <div key={contact.id} className="contact--child">
      <div className="contact--image">
        <img src={userImage} alt="profile" />
      </div>
      <div className="contact--user">
        <p>name : {contact.name}</p>
        <a href={`tel:+98${contact.phone}`} className="contact--user__phone">
          +98{contact.phone}
        </a>
      </div>
      <button className="contact--btn" onClick={() => onDelete(contact.id)}>
        delete
      </button>
    </div>
  ));
};

export default ContactList;
