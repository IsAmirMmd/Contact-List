import { useState } from "react";
import "./App.css";
import AddContact from "./Components/addContact/AddContact";

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
      <section>contacts</section>
    </div>
  );
}

export default App;
