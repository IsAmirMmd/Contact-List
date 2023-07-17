import userImage from "../../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  return (
    <div key={contact.id} className="contact--child">
      <div className="contact--image">
        <img src={userImage} alt="profile" />
      </div>
      <div className="contact--user">
        <Link to={`user/${contact.id}`} state={{ contact }}>
          name : {contact.name}
        </Link>
        <a href={`tel:+98${contact.phone}`} className="contact--user__phone">
          +98{contact.phone}
        </a>
      </div>
      <button className="contact--btn" onClick={() => onDelete(contact.id)}>
        delete
      </button>
    </div>
  );
};

export default Contact;
