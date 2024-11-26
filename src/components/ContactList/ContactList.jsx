import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.wrapper} key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
