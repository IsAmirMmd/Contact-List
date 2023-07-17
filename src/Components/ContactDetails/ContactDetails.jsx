import { Link, useParams, useLocation } from "react-router-dom";
const ContactDetails = (props) => {
  let { id } = useParams();
  let location = useLocation();

  console.log(location.state);
  return (
    <div>
      <p>the contact ID is {id}</p>
      <p>the contact Name is {location.state.contact.name}</p>
      <p>the contact number is +98{location.state.contact.phone}</p>
      <Link to="/">Back To Contact List</Link>
    </div>
  );
};

export default ContactDetails;
