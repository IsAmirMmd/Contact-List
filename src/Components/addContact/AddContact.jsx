import { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addContactHandler(contact);
    setContact({
      name: "",
      phone: "",
    });
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
    </form>
  );
};

export default AddContact;
