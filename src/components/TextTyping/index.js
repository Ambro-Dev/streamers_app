import React from "react";
import PropTypes from "prop-types";
import "./texttyping.css";

const TextTyping = ({ text, speed }) => {
  const [string, setString] = React.useState("Welcome!");
  const [retype, setRetype] = React.useState(false);

  React.useEffect(() => {
    if (retype) {
      const interval = setInterval(() => {
        setString((prevString) => {
          if (prevString.length === text.length) {
            clearInterval(interval);
            return prevString; // Reset the string to the initial value
          }
          return text.slice(0, prevString.length + 1);
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [retype, text]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setString((prevString) => {
        if (prevString.length === 0) {
          clearInterval(interval);
          setRetype(true);
          return ""; // Reset the string to the initial value
        }
        return prevString.slice(0, -1);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text">
      <span>{string}</span>
      <span className="cursor">|</span>
    </div>
  );
};

TextTyping.prototype = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default TextTyping;
