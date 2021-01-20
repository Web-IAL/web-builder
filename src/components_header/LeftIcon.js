import React from "react";
import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const IconLeft = ({ ios }) => {
  let cssIos = {
    fontSize: "19px",
    color: "#0a60ff",
  };

  let css = {
    fontSize: "19px",
    color: "#ffffff",
  };

  if (ios) {
    return <ArrowLeftOutlined style={cssIos} />;
  } else {
    return <LeftOutlined style={css} />;
  }
};
export default IconLeft;
