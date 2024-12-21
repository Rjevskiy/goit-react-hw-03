import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ onFilterChange }) => {
  return (
    <div>
      <label className="labelSBox">
        Find contacts by name
        <input
          type="text"
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
