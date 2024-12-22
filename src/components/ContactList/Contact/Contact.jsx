import React from "react";
import PropTypes from "prop-types";
import { FaUser, FaPhone } from "react-icons/fa"; // импортируем иконки

import { IoPerson } from "react-icons/io5";

import "./Contact.css";

const Contact = ({ name, number, onDelete }) => (
  <div className="contact">
    <ul className="contact-list">
      <li className="contactLi">
        <FaUser className="icon" /> {name} 
      </li>
      <li className="contactLi">
        <FaPhone className="icon" /> {number} 
      </li>
    </ul>
    <button className="butContact" onClick={onDelete}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;

