import React from "react";
import { ContactData, ContactInput, ContactSubmit, ContactLabel } from "../styled/styled-contactForm"
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from "../redux/contacts/selectors";

export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = nanoid();
  const numberInputId = nanoid();


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const duplicate = contacts.find(contact => 
      contact.name === name || contact.number === number
    );
    if (duplicate) {
      alert(`Contact ${name} or phone number ${number} already exists in your phonebook`);
      return;
    }

    dispatch(addContact({name, number}));
    form.reset();
  }

  return (
    <ContactData onSubmit={handleSubmit}>
      <ContactLabel htmlFor="name">Name</ContactLabel>
      <ContactInput
        id={nameInputId}
        name="name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <ContactLabel htmlFor="number">Number</ContactLabel>
      <ContactInput
        id={numberInputId}
        name="number"
        type="tel"
        pattern="[0-9+-]*"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ContactSubmit type="submit">Add contact</ContactSubmit>
    </ContactData>
  );
};