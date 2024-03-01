import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact.jsx";
import PropTypes from "prop-types";

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.contacts);
  const filterText = useSelector((state) => state.filters); // Додавання фільтру

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
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
