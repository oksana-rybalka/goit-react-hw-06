import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import style from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
function App() {
  return (
    <div className={style.parentContainer}>
      <h1 className={style.titlePhonebook}>Телефонний записник</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
export default App;
