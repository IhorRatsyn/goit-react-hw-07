import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../redux/contactsSlice";
import { changeFilter, selectFilter } from "../redux/filtersSlice";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import "./App.css";

const localStorageKey = "contacts";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedContacts) {
      storedContacts.forEach((contact) => dispatch(addContact(contact)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <div className="search-container">
        <SearchBox onChange={handleFilterChange} />
      </div>
      <div className="contact-list">
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
