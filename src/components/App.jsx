import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <div className={css["search-container"]}>
        <SearchBox />
      </div>
      <div className={css["contact-list"]}>
        <ContactList />
      </div>
    </div>
  );
};

export default App;
