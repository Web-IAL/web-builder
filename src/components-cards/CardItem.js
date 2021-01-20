import React from "react";
import Text from "../components-header/Text";

const CardItem = ({ children, bordered, footer, header }) => {
  let css = {
    width: "300px",
  };

  if (bordered) {
    css = {
      ...css,
      borderLeft: "1px solid #aaa",
      borderRight: "1px solid #aaa",
      margin: "0px",
      padding: "0px",
    };
  }

  if ((header && bordered) || (footer && bordered)) {
    css = { ...css, border: "1px solid #aaa" };
  }

  return <div style={css}>{children}</div>;
};
export default CardItem;
