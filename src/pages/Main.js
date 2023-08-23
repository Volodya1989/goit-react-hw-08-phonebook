// Separate named imports, this makes the code more readable
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchContacts } from "redux/phonebook/operations";
import { Container, Phonebook, Contacts } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm />
      </Phonebook>
      <Contacts>
        <h1>Contacts</h1>

        <Filter />
        <ContactList />
      </Contacts>
    </Container>
  );
};

export default Main;
