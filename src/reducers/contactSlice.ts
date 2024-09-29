import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactUs } from "../pages/contact/ContactUs";

interface ContactUs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactUsState {
  queries: ContactUs[]
}

const initialState: ContactUsState = {
  queries: []
};

const ContactUsSlice = createSlice({
  name: 'contactUsSlice',
  initialState,
  reducers: {
    addContact(state: ContactUsState, action: PayloadAction<ContactUs>) {
      state.queries.push(action.payload)
    }
  }
})

export const { addContact } = ContactUsSlice.actions;

export default ContactUsSlice.reducer