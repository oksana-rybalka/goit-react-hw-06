import style from "./Contact.module.css";
import { LuPhoneForwarded } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={style.contactItem} key={id}>
      <div className={style.contactContainer}>
        <p className={style.contactName}>
          <span className={style.icon}>
            <FaRegUser />
          </span>
          {name}
        </p>
        <p className={style.contactNumber}>
          <span className={style.icon}>
            <LuPhoneForwarded />
          </span>
          {number}
        </p>
      </div>
      <button
        className={style.buttonDelete}
        type="button"
        onClick={handleDelete}
      >
        Видалити
      </button>
    </li>
  );
};
export default Contact;
