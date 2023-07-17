import { useEffect, useState } from "react";
import AddContact from "./Components/addContact/AddContact";
import ContactList from "./Components/contactList/ContactList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import axios from "axios";
import { fetchContacts } from "./Services/getContactService";
import { deleteContact } from "./Services/deleteContactService";
import { postContact } from "./Services/postContactService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      await postContact(contact);
      setContacts([...contacts, contact]);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredConatcts = contacts.filter((contact) => contact.id !== id);
      setContacts([...filteredConatcts]);
    } catch (error) {}
  };

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await fetchContacts();
      setContacts(data);
    };
    getContacts();
  }, []);

  useEffect(() => {
    const savedContact = localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );
    if (savedContact) setContacts(savedContact);
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
