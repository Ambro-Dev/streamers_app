import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, disabled, ...props }) => (
  <div className="button-box">
    <button className="button" {...props} disabled={disabled} type="button">
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
