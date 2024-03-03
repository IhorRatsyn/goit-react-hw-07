import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {deleteContacts, getContacts} from "../api.js";

const initialState = [];

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await getContacts();
    return response;
  }
);

export const removeContacts = createAsyncThunk(
  "contacts/removeContacts",
  async (id) => {
    const response = await deleteContacts(id);
    return response;
  }
);
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
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
    builder.addCase(removeContacts.fulfilled, (state, action) => {

      return state.filter((contact) => contact.id !== action.payload.id);
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;
export default contactsSlice.reducer;
