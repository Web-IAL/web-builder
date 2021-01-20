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
    color: "#fff",
    backgroundColor: "#06a0ff",
  };

  if (ios) {
    return <ArrowLeftOutlined style={css} />;
  } else {
    return <LeftOutlined style={cssIos} />;
  }
};
export default IconLeft;
