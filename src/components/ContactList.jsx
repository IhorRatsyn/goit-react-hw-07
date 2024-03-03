import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact.jsx";

const ContactList = ({}) => {
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

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {};

export default ContactList;
