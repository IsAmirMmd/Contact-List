import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={null}>
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
        <button>Add Contact</button>
      </div>
    </form>
  );
};

export default AddContact;
