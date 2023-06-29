import PropTypes from "prop-types";
import "./inputdropdown.css";
import React from "react";

const InputDropdown = ({ options, title, setValue, value }) => {
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);
  const [showList, setShowList] = React.useState(false);
  const [selectedPlatform, setSelectedPlatform] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [icon, setIcon] = React.useState(null);

  const handleSelect = (option) => {
    setSelectedPlatform(option.name);
    setValue(option.name);
    const image = `${process.env.REACT_APP_SERVER_URL}/platforms/${option.image}`;
    setIcon(image);
    setShowList(false);
  };

  React.useEffect(() => {
    setSelectedPlatform(value);
  }, [value]);

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
      const optionName = option.name.toLowerCase();
      const selectedPlatformName = selectedPlatform.toLowerCase();
      if (optionName.includes(selectedPlatformName)) return true;
      return false;
    });
    setFilteredOptions(filterOptions);
  }, [options, selectedPlatform]);

  React.useEffect(() => {
    if (selectedPlatform === "") {
      setIcon(null);
      setValue("");
    }
  }, [selectedPlatform]);

  const id = title.toLowerCase();
  return (
    <div className="box">
      <label>{title}</label>
      {icon && (
        <img
          className="input-icon"
          src={icon}
          alt="icon"
          height={20}
          width={20}
        />
      )}
      <input
        style={{ paddingLeft: icon ? "40px" : "15px" }}
        type="text"
        list="platforms"
        ref={inputRef}
        onClick={() => setShowList(true)}
        id={id}
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
        name={`${title.toLowerCase()}`}
        autoComplete="off"
      />
      {showList && (
        <div id="platforms" className="list" ref={listRef}>
          {filteredOptions.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option.image && (
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}/platforms/${option.image}`}
                  alt={`${option.name}`}
                  height={20}
                  width={20}
                />
              )}
              <span>{option.name}</span>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

InputDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputDropdown;
