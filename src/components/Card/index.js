import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Card;
