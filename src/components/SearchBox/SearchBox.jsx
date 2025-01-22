import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { selectFilterName, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterName);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Пошук за іменем</label>
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Введіть ім'я для пошуку..."
      />
    </div>
  );
};

export default SearchBox;
