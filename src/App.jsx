import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

const App = () => {
  // Хранение контактов  
  const [contacts, setContacts] = useState([]);
  
  // Фильтр 
  const [filter, setFilter] = useState(""); 

  // Имя или номер
  const [searchType, setSearchType] = useState("name");

  // Чтение из хранилища
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Сохранение в хранилище
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  // Добавление 
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  // Удаление 
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // Фильтрация 
  const filteredContacts = contacts.filter((contact) => {
    if (searchType === "name") {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else if (searchType === "number") {
      return contact.number.includes(filter);
    }
    return false;
  });

  // Радиокнопка
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox
        filter={filter}
        onFilterChange={setFilter}
        searchType={searchType}
        onSearchTypeChange={handleSearchTypeChange}
      />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
