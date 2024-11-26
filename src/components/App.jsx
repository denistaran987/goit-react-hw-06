import './App.css';
import initialContacts from '../contacts.json';
import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('saved-contact')) ?? initialContacts
  );
  const [search, setSearch] = useState('');

  useEffect(() => localStorage.setItem('saved-contact', JSON.stringify(contacts)), [contacts]);

  const addContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = delId => {
    setContacts(prev => prev.filter(({ id }) => id !== delId));
  };

  const handleSearchChange = value => {
    setSearch(value.trim());
  };

  const findContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContact} />
      <SearchBox onSearch={search} setSearch={handleSearchChange} />
      <ContactList contacts={findContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
