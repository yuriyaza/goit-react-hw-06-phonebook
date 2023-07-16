import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phoneBook = createSlice({
  name: 'phoneBook',

  initialState: {
    contacts: [
      // Якщо в Local Storage даних немає -
      // використовуємо початкові дані для демонстрації
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, actions) {
      state.contacts = [...state.contacts, actions.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};

export const persistedPhoneBook = persistReducer(
  persistConfig,
  phoneBook.reducer
);
