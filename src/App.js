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

  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
