import React, { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]); // Хранение контактов
  const [filter, setFilter] = useState(""); // Фильтр для поиска

  // Добавление нового контакта
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  // Удаление контакта
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // Фильтрация контактов
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox onFilterChange={(value) => setFilter(value)} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
