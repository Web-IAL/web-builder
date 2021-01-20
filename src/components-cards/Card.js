import React from "react";

const Card = ({ bordered, children }) => {
  let css = {
    width: "300px",
    MozBoxShadow: "0 0 0 1px #dddddd",
    WebkitBoxShadow: "0 0 0 1px #dddddd",
    boxShadow: "0 0 0 1px #dddddd"
  };
  return <div style={css} >{children}</div>;
};

export default Card;
