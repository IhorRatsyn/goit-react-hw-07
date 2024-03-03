import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <div>
        <div className={css["contact-detail"]}>
          <PersonIcon />
          {contact.name}
        </div>
        <div className={css["contact-detail"]}>
          <PhoneIcon />
          {contact.number}
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
