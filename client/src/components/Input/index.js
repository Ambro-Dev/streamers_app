import PropTypes from "prop-types";
import "./input.css";

const styles = {
  padding: 10,
  border: "none",
  outline: "none",
  borderRadius: 5,
  marginBottom: 10,
  width: "auto",
  height: 100,
  resize: "none",
  overfolwY: "auto",
};

const Input = ({ title, textarea, rows }) => {
  const id = title.toLowerCase();
  return (
    <div className="box">
      <label>{title}</label>
      {textarea ? (
        <textarea rows={rows} style={styles} className="textarea" />
      ) : (
        <input type="text" id={id} />
      )}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
};

export default Input;
