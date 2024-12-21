import React from "react";
import PropTypes from "prop-types";

import "./Contact.css";


const Contact = ({ name, number, onDelete }) => (
  <div className="contact">
    <li className="contactLi">
      {name}: {number}
    </li>
    <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
