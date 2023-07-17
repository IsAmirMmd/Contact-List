import "./ContactDetails.css";
import { Link, useParams, useLocation } from "react-router-dom";
const ContactDetails = (props) => {
  let { id } = useParams();
  let location = useLocation();

  return (
    <div className="contact-detail">
      <div>
        <p>contact ID is </p>
        <span>{id}</span>
      </div>
      <div>
        <p>contact Name is </p>
        <span>{location.state.contact.name}</span>
      </div>
      <div>
        <p>contact number is </p>
        <span>+98{location.state.contact.phone}</span>
      </div>
      <div className="btn-div">
        <Link to="/" className="LinkBtn">
          Back To Contact List
        </Link>
        <a href={`tel:+98${location.state.contact.phone}`} className="cta-btn">
          Call
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
