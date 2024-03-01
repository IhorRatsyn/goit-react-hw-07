import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts as fetchContactsAPI,
  createContact,
  removeContact,
} from "./contactsAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await fetchContactsAPI();
    return response;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await createContact(newContact);
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await removeContact(contactId);
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "idle";
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts;

export default contactsSlice.reducer;
