import React from "react";
import styled from "styled-components";

const ButtonIos = styled.button`
  background-color: ${(props) => props.color1};
  color: ${(props) => props.color2};

  font-size: 14px;
  padding: 13px 15px;
  border: 1px solid #0a60ff;
  border-radius: 5px;
`;

function Button({ os, color1, color2 }) {
  if (os) {
    return (
      <ButtonIos background={color1} color={color2}>
        <button>Primary</button>
      </ButtonIos>
    );
  }
}
export default Button;
