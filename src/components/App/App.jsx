import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { contactSlice } from 'redux/contactSlice';
import { Notify } from 'notiflix';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export const App = () => {
  const contacts = useSelector(state => state.contactState.contacts);
  const filter = useSelector(state => state.contactState.filter);
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    const nameList = contacts.map(contact => contact.name.toLowerCase());
    
    if (nameList.includes(newContact.name.toLowerCase())) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(contactSlice.actions.addContacts(newContact));
  };

  const onDeleteContact = id => {
    dispatch(contactSlice.actions.deleteContact(id));
  };

  const onSetFilter = filter => {
    dispatch(contactSlice.actions.setFilter(filter));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter filter={filter} setFilter={onSetFilter} />

      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
};
