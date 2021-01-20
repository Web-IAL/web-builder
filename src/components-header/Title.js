import React from "react";

const Title = ({ android, children }) => {
  let css = {
    fontSize: "19px",
    fontFamily: "'Roboto', sans-serif",
    color: "black",
  };

  if (android) {
    css = {
      fontSize: "19px",
      fontFamily: "'Roboto', sans-serif",
      color: "white",
      // backgroundColor: "#3f51b5"
    };
  }
  return <p style={css}>{children}</p>;
};

export default Title;
