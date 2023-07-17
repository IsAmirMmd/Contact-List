import { useState } from "react";
import "./EditContact.css";
import { useNavigate, Link, useLocation } from "react-router-dom";

const EditContact = ({ editContactHandler }) => {
  let location = useLocation();
  let history = useNavigate();
  const id = location.state.contact.id;
  const [contact, setContact] = useState({
    name: location.state.contact.name,
    phone: location.state.contact.phone,
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) {
      alert("Both of fields are mandatory!");
      return;
    }
    editContactHandler(contact, id);
    setContact({
      name: "",
      phone: "",
    });
    history("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Name :</label>
        <input
          type="text"
          placeholder="Enter Name ..."
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <label>Phone :</label>
        <input
          type="number"
          placeholder="Enter Phone Number ..."
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        />
      </div>
      <div>
        <button type="submit">Edit Contact</button>
      </div>
      <div>
        <Link className="back-cta" to="/">
          Home Page
        </Link>
      </div>
    </form>
  );
};

export default EditContact;
