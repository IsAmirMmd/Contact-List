import { useState } from "react";
import "./AddContact.css";
import { useNavigate, Link } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  let history = useNavigate();

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
    addContactHandler(contact);
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
        <button type="submit">Add Contact</button>
      </div>
      <div>
        <Link className="back-cta" to="/">Home Page</Link>
      </div>
    </form>
  );
};

export default AddContact;
