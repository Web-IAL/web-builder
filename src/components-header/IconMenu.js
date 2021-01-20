import React from "react";
// import { List } from "react-bootstrap-icons";
import "antd/dist/antd.css";
import {UnorderedListOutlined } from "@ant-design/icons";

const IconMenu = (android) => {
  let css = {
    color: "#3182fc",
    fontSize: "19px",
  };

  if (android) {
    css = { ...css, color: "#fff" };
  }
  return <UnorderedListOutlined style={css}></UnorderedListOutlined>
};

export default IconMenu;
