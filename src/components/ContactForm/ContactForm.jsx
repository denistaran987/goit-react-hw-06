import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({ addContacts }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    addContacts({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long').required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label} htmlFor={numberFieldId}>
            Number
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
