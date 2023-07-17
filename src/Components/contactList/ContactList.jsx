import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./ContactList.css";
import { useState } from "react";

let searchAmount = -1;

const ContactList = ({ contacts, onDelete }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(contacts);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const searchFilter = contacts.filter(
      (f) =>
        f.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        f.phone.includes(e.target.value)
    );
    searchAmount = searchFilter.length;
    console.log(searchAmount);
    setFiltered(searchFilter);
  };

  return (
    <div>
      <Link to="/add" className="addContact">
        Add Contact
      </Link>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={searchHandler}
        placeholder="search here !"
      />
      {searchAmount == 0 ? (
        <p className="warning">!! No Contact Found !!</p>
      ) : (
        <></>
      )}
      {filtered.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default ContactList;
