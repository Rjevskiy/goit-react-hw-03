import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import "./ContactForm.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Имя должно содержать минимум 3 символа")
    .max(50, "Имя не должно превышать 50 символов")
    .required("Обязательное поле"),
  number: Yup.string()
    .matches(/^[\d\-]+$/, "Номер должен содержать только цифры и дефис (-)")
    .min(3, "Номер должен содержать минимум 3 символа")
    .max(50, "Номер не должен превышать 50 символов")
    .required("Обязательное поле"),
});



const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm(); // Сбросить форму после отправки
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="contact-form">
        <div>
          <label htmlFor="name">Имя</label>
          <Field id="name" name="name" placeholder="Введите имя" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="number">Номер</label>
          <Field id="number" name="number" placeholder="Введите номер" />
          <ErrorMessage name="number" component="div" className="error" />
        </div>

        <button type="submit">Добавить контакт</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
