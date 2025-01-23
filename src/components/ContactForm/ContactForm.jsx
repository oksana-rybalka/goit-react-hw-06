import style from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 50 символів!")
    .matches(/^[a-zA-ZА-Яа-яЇїІіЄєҐґ'’ -]+$/, " Ім'я не може містити цифри!")
    .required("Це поле обов'язкове!"),

  number: Yup.string()
    .matches(/^[+]?[\d]+$/, "Тільки цифри та знак '+'!")
    .min(3, "Мінімум 3 символи!")
    .max(50, "Максимум 50 символів")
    .required("Це поле є обов'язкове!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onSubmit, id }) => {
  const contacts = useSelector(selectContacts);

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Контакт з іменем "${values.name}" вже існує!`);
      actions.setSubmitting(false);
      return;
    }
    useDispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <div className={style.contactFormContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.form}>
          <div className={style.nameForm}>
            <label className={style.label} htmlFor={nameFieldId}>
              Ім'я
            </label>
            <Field
              className={style.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              className={style.error}
              component="span"
            />
          </div>
          <div className={style.numberForm}>
            <label className={style.label} htmlFor="numberFieldId">
              Номер телефону
            </label>
            <Field
              className={style.field}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              className={style.error}
              component="span"
            />
          </div>
          <button className={style.submitForm} type="submit">
            Додати контакт
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
