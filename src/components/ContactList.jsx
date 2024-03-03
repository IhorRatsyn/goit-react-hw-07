import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Contact from "./Contact.jsx";
import {removeContacts} from "../redux/contactsSlice.js";

const ContactList = ({}) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filterText = useSelector((state) => state.filters);

  // Фільтрація контактів на основі тексту фільтра
  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  // Використання getFilteredContacts для отримання контактів, які відповідають фільтру
  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {};

export default ContactList;
