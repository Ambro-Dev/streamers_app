import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, children, style }) => (
  <div className="card" style={style}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
export default Card;
