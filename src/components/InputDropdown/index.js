import PropTypes from "prop-types";
import "./inputdropdown.css";
import React from "react";

const InputDropdown = ({ options, title }) => {
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);
  const [showList, setShowList] = React.useState(false);
  const [selectedPlatform, setSelectedPlatform] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState(options);

  const handleSelect = (option) => {
    setSelectedPlatform(option.value);
    setShowList(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    const filterOptions = options.filter((option) => {
      const optionName = option.value.toLowerCase();
      const selectedPlatformName = selectedPlatform.toLowerCase();
      if (optionName.includes(selectedPlatformName)) return true;
      return false;
    });
    setFilteredOptions(filterOptions);
  }, [options, selectedPlatform]);

  const id = title.toLowerCase();
  return (
    <div className="box">
      <label>{title}</label>
      <input
        type="text"
        list="platforms"
        ref={inputRef}
        onClick={() => setShowList(true)}
        id={id}
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
      />
      {showList && (
        <div id="platforms" className="list" ref={listRef}>
          {filteredOptions.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option.value}
            </li>
          ))}
        </div>
      )}
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
