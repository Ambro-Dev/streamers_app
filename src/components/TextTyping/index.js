import React from "react";
import PropTypes from "prop-types";
import "./texttyping.css";

const TextTyping = ({ text, speed }) => {
  const [string, setString] = React.useState("");
  const [retype, setRetype] = React.useState(false);

  React.useEffect(() => {
    if (retype) {
      const interval = setInterval(() => {
        setString((prevString) => {
          if (prevString.length === text[1].length) {
            clearInterval(interval);
            return prevString; // Reset the string to the initial value
          }
          return text[1].slice(0, prevString.length + 1);
        });
      }, speed);

      return () => clearInterval(interval);
    }
  }, [retype, text, speed]);

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
    }, speed);

    return () => clearInterval(interval);
  }, [speed, text]);

  return (
    <div className="text">
      <div className="text_welcome">
        <span>Welcome!</span>
      </div>
      <div className="text_typing">
        <span>{string}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

TextTyping.prototype = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default TextTyping;
