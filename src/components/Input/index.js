import PropTypes from "prop-types";
import "./input.css";

const Input = ({ title }) => {
  const id = title.toLowerCase();
  return (
    <div className="box">
      <label>{title}</label>
      <input type="text" id={id} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Input;
