import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import style from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import { addContact } from "./redux/contactsSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <div className={style.parentContainer}>
      <h1 className={style.titlePhonebook}>Телефонний записник</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
}
export default App;
