import { useState } from "react";
import "./App.css";
import AddContact from "./Components/addContact/AddContact";
import ContactList from "./Components/contactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };

  const deleteContactHandler = (id) => {
    const filteredConatcts = contacts.filter((contact) => contact.id !== id);
    setContacts([...filteredConatcts]);
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </div>
  );
}

export default App;
