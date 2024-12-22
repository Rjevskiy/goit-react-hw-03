import React from "react";
import PropTypes from "prop-types";

import "./SearchBox.css"; 


const SearchBox = ({ filter, onFilterChange, searchType, onSearchTypeChange }) => (
  <div className="divSBox">
    <label className="search-label">
      Пошук контакту:
      </label>
      <label className="labelRadio">
      <input
        type="radio"
        value="name"
        name="searchType"
        checked={searchType === "name"}
        onChange={onSearchTypeChange}
      />
      
      
      Введіть ім'я
      <input
        type="radio"
        value="number"
        name="searchType"
        checked={searchType === "number"}
        onChange={onSearchTypeChange}
      />
      Введіть номер
    </label>

    <input
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Пошук контакту..."
      className="search-input"
    />
  </div>
);

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  onSearchTypeChange: PropTypes.func.isRequired,
};

export default SearchBox;
