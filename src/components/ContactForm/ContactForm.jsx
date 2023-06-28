import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name: fieldName, value: fieldValue } = e.target;

    switch (fieldName) {
      case 'name':
        setName(fieldValue);
        break;
      case 'number':
        setNumber(fieldValue);
        break;
      default:
        return undefined;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      name,
      number,
    };

    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <div className={css.inputWrapper}>
        <label>
          <span className={css.label}>Name</span>
          <input
            className={css.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </label>

        <label>
          <span className={css.label}>Number</span>
          <input
            className={css.input}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            value={number}
            onChange={onInputChange}
          />
        </label>
      </div>

      <button className={css.button} type='submit'>
        Add contact
      </button>
    </form>
  );
};

ContactForm.types = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
