import { FaUserCircle } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { getRandomColor } from 'js/getRandomColor';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactCard} key={id}>
            <div className={css.userIcon} style={{ color: getRandomColor() }}>
              <FaUserCircle />
            </div>

            <div className={css.userInfo}>
              <div className={css.userName}>{name}</div>
              <div>{number}</div>
            </div>

            <button className={css.deleteButton} type='button' onClick={() => onDeleteContact(id)}>
              <span className={css.deleteIcon}>
                <BsTrash />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.types = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
