import { useEffect, useState } from "react";
import AddContact from "./Components/addContact/AddContact";
import ContactList from "./Components/contactList/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 10000), ...contact },
    ]);
  };

  const deleteContactHandler = (id) => {
    const filteredConatcts = contacts.filter((contact) => contact.id !== id);
    setContacts([...filteredConatcts]);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </div>
  );
}

export default App;
