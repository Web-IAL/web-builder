import React from "react";
import "../styles/spinner.css";
import styled from "styled-components";

const StyleSpinnerIOS = styled.div`
  & > div:after {
    background-color: ${(props) => props.Color};
  }
`;

const StyleSpinnerANDROID = styled.div`
  & > div {
    border: 3px solid ${(props) => props.color};
    border-color: ${(props) => props.color} 
  }
`;

function Spinner({ ios, color }) {
  if (ios) {
    return (
      <StyleSpinnerIOS className="lds-spinner centerS" color={color}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyleSpinnerIOS>
    );
  } else {
    return (
      <StyleSpinnerANDROID className="lds-ring centerS" color={color}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyleSpinnerANDROID>
    );
  }
}

export default Spinner;
