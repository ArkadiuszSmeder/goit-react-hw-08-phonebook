import { Helmet } from 'react-helmet';
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactsContainer } from "../styled/styled-contactsPage";
import { ContactsList } from "components/ContactsList";

const Contacts = () => {
    return (
        <ContactsContainer>
          <Helmet>
            <title>Your contacts</title>
          </Helmet>
        <h1>
          Add or find contact
        </h1>
        <ContactForm/>
        <Filter/>
        <ContactsList/>
      </ContactsContainer>
    )
}

export default Contacts;