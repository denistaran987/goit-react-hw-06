import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import s from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <>
      <div className={s.container}>
        <p>
          <FaUserLarge /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        onClick={() => {
          deleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
