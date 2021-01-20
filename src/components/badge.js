import React from "react";
import { Badge } from "antd";
import "antd/dist/antd.css";

const colorBadge = {
  primary: "blue",
  success: "green",
  info: "#529FFA", 
  warning: "yellow",
  danger: "red",
};

function Badger({ color, count }) {
  return (
    <Badge count={count} style={{ backgroundColor: colorBadge[color] }}>
      <a href="/" className="head-example centerB">
        {""}
      </a>
    </Badge>
  );
}

export default Badger;
