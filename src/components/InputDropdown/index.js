import PropTypes from "prop-types";
import "./inputdropdown.css";

const InputDropdown = ({ options, title }) => {
  const id = title.toLowerCase();
  return (
    <div className="box">
      <label>{title}</label>
      <input type="text" list="platforms" id={id} />
      <datalist id="platforms">
        {options.map((option) => (
          <option key={option.id} value={option.value} />
        ))}
      </datalist>
    </div>
  );
};

InputDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default InputDropdown;
