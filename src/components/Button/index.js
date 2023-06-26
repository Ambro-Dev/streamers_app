import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, style, ...props }) => (
  <div className="button" style={style}>
    <button {...props}>{children}</button>
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Button;
