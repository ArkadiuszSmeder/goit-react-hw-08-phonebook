import React, { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { DeleteButton, ListElement, StyledList } from "styled/styled-contacts";
import { deleteContact } from "../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../redux/contacts/selectors";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!visibleContacts) {
    return null;
  }

  console.log(visibleContacts)

  const handleDelete = (id) => dispatch(deleteContact(id))

  return (
    <StyledList>
      {visibleContacts.map((contact) => (
        <ListElement key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
        </ListElement>
      ))}
    </StyledList>
  );
};