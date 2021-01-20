import React from "react";

const Text = ({ android, children, CardHeader, body }) => {
  let css = {
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
    color: "#0a60ff",
  };

  if (android) {
    css = { ...css, color: "#ffffff", textTransform: "uppercase" };
  }
  if (CardHeader) {
    css = { ...css, color: "#000", paddingLeft: "15px", fontWeight: "550", fontSize:"14px"};
  }
  if (body) {
    css = { ...css, color: "#000", paddingLeft: "15px", fontWeight: "500",fontSize:"14px"};
  }
  return <p style={css}>{children}</p>;
};

export default Text;
