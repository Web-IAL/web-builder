import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  let css = {
    width: "290px",
    MozBoxShadow: "0 0 0 2px #dddddd",
    WebkitBoxShadow: "0 0 0 2px #dddddd",
    boxShadow: "0 0 2px #dddddd"
  };


  return <div style={css}>{children}</div>;
};

export default Card;
