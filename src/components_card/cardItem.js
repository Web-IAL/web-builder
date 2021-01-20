import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import Text from "../components_header/Text";

const cardBase = styled.div`
  padding: 10px;
  color: black;
`;

const cardBorderedHeader = styled.div`
  color: black;
  padding: 10px;
  border-bottom: none;
  border-top: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
`;
const cardBorderedFooter = styled.div`
  border-top: none,
  padding: 10px;
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;

`;
const CardItem = ({ ios, children, bordered, header, footer, button }) => {
  if (bordered && header) {
    return <cardBorderedHeader>{children}</cardBorderedHeader>;
  }
  if (bordered && footer) {
    return <cardBorderedFooter>{children}</cardBorderedFooter>;
  } else return <cardBase>{children}</cardBase>;
};
export default CardItem;
