import { useEffect, useState } from "react";
import AddContact from "./Components/addContact/AddContact";
import ContactList from "./Components/contactList/ContactList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import axios from "axios";

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
    const getContacts = async () => {
      const { data } = await axios.get("http://localhost:3001/contacts");
      setContacts(data);
    };
    getContacts();
  }, []);

  useEffect(() => {
    // const setUpdatedContacts = async () => {
    // await axios.post("http://localhost:3001/contacts", contacts);
    // };
    // setUpdatedContacts();
  }, [contacts]);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <Routes>
        <Route path="/user/:id" Component={ContactDetails} />
        <Route
          path="/"
          exact
          Component={(props) => (
            <ContactList
              contacts={contacts}
              onDelete={deleteContactHandler}
              {...props}
            />
          )}
        />
        <Route
          path="/add"
          Component={(props) => (
            <AddContact addContactHandler={addContactHandler} {...props} />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
