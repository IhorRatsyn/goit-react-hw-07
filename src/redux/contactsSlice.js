import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const localStorageKey = "contacts";

const itemsFromLS = JSON.parse(localStorage.getItem(localStorageKey));
const setItemsToLS = (contacts) =>
  localStorage.setItem(localStorageKey, JSON.stringify(contacts));

const initialState = itemsFromLS.length
  ? itemsFromLS
  : [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const duplicate = state.find(
        (contact) => contact.name === action.payload.name
      );
      if (!duplicate) {
        state.push(action.payload);
      }
      setItemsToLS(state);
    },
    deleteContact: (state, action) => {
      const newcontacts = state.filter(
        (contact) => contact.id !== action.payload
      );
      setItemsToLS(newcontacts);
      return newcontacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;
export default contactsSlice.reducer;
