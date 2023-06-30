import PropTypes from "prop-types";
import "./input.css";

const styles = {
  padding: 10,
  border: "none",
  outline: "none",
  borderRadius: 5,
  marginBottom: 10,
  height: 100,
  resize: "none",
  overfolwY: "auto",
  width: "calc(100% - 20px)",
};

const Input = ({ title, textarea, rows, setValue, value }) => {
  const id = title.toLowerCase();
  return (
    <div className="box">
      <label className="label">{title}</label>
      {textarea ? (
        <textarea
          rows={rows}
          style={styles}
          className="textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={`${title.toLowerCase()}`}
          autoComplete="off"
          autoCapitalize="on"
        />
      ) : (
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={`${title.toLowerCase()}`}
          autoComplete="off"
        />
      )}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
