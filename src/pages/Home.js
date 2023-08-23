import {
  WelcomeText,
  WelcomeSpan,
  WelcomeContainer,
  WelcomeTitle,
} from "../components/ContactList/ContactList.styled";
import { Helmet } from "react-helmet";

import { FcContacts } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useAuth } from "../hooks";
import ContactList from "components/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/phonebook/operations";
import { Contacts, Container } from "components/App/App.styled";
import Filter from "components/Filter";

// const styles = {
//   container: {
//     minHeight: "calc(100vh - 50px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// };

export default function Home() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isLoggedIn ? (
    <Container>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Contacts>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </Contacts>
    </Container>
  ) : (
    <WelcomeContainer>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <WelcomeText>
        <WelcomeSpan>
          <IconContext.Provider value={{ color: "blue", size: "100px" }}>
            <FcContacts />
          </IconContext.Provider>
        </WelcomeSpan>
        <WelcomeTitle>Phonebook App Welcome Page </WelcomeTitle>
      </WelcomeText>
    </WelcomeContainer>
  );
}
