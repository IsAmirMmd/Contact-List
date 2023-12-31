import userImage from "../../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete, onEdit }) => {
  return (
    <div key={contact.id} className="contact--child">
      <div className="contact--image">
        <img src={userImage} alt="profile" />
      </div>
      <div className="contact--user">
        <Link
          to={`user/${contact.id}`}
          state={{ contact }}
          className="contactLink"
        >
          name : {contact.name}
        </Link>
        <a href={`tel:+98${contact.phone}`} className="contact--user__phone">
          num : +98{contact.phone}
        </a>
      </div>
      <div className="button-holder">
        <Link
          to={`edit/${contact.id}`}
          state={{ contact }}
          className="contact--btn edit-btn"
        >
          edit
        </Link>
        <button
          className="contact--btn delete-btn"
          onClick={() => onDelete(contact.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
