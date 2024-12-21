import React from "react";
import PropTypes from "prop-types";

const Contact = ({ name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
