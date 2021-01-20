import React from "react";
import styled from "styled-components";
import Text from "./Text";

const ColorButtonIos = {
  primary: "#0a60ff",
  light: "#f1f1f1",
  info: "#529ff3",
  success: "#4dad4a",
  warning: "#eb9e3e",
  danger: "#d1494b",
  dark: "#000000",
  white: "#ffffff",
};

const ColorButtonAndroid = {
  primary: "#3f51b5",
  light: "#f4f4f4",
  info: "#62b1f6",
  success: "#5cb85c",
  warning: "#f0ad4e",
  danger: "#d9534f",
  dark: "#000000",
  white: "#ffffff",
};

//IOS
const ButtonIos = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 2px #dddddd;
  padding: 12px 14px;
  border-radius: 5px;
`;
const ButtonIosTransparent = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: white;
  padding: 12px 14px;
  border-radius: 5px;
`;
const BorderedIos = styled.button`
  border-width: 1px;
  background-color: white;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  border-radius: 6px;
`;

const ButtonIosRounded = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  border-radius: 25px;
`;

//Android
const ButtonAndroid = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  box-shadow: 0px 2px #dddddd;
  border-radius: 2px;
  text-transform: uppercase;
`;

const ButtonAndroidTransparent = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  background-color: white;
  border-radius: 2px;
  text-transform: uppercase;
`;

const BorderedAndroid = styled.button`
  border-width: 1px;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  border-radius: 2px;
  background-color: white;
  text-transform: uppercase;
`;
const ButtonAndroidRounded = styled.button`
  border: none;
  font-family: "Roboto", sans-serif;
  padding: 12px 14px;
  border-radius: 25px;
  background-color: white;
  text-transform: uppercase;
`;

function Button({ ios, color, bordered, children, transparent, rounded }) {
  if (rounded) {
    if (ios) {
      return (
        <ButtonIosRounded style={{ backgroundColor: ColorButtonIos[color] }}>
          {children}
        </ButtonIosRounded>
      );
    } else
      return (
        <ButtonAndroidRounded
          style={{ backgroundColor: ColorButtonAndroid[color] }}
        >
          {children}
        </ButtonAndroidRounded>
      );
  }

  if (transparent) {
    if (ios) {
      return <ButtonIosTransparent>{children}</ButtonIosTransparent>;
    } else
      return <ButtonAndroidTransparent>{children}</ButtonAndroidTransparent>;
  }

  if (bordered) {
    if (ios) {
      return (
        <BorderedIos style={{ borderColor: ColorButtonIos[color] }}>
          {children}
        </BorderedIos>
      );
    } else
      return (
        <BorderedAndroid style={{ borderColor: ColorButtonAndroid[color] }}>
          {children}
        </BorderedAndroid>
      );
  }
  if (ios) {
    return (
      <ButtonIos style={{ backgroundColor: ColorButtonIos[color] }}>
        {children}
      </ButtonIos>
    );
  } else
    return (
      <ButtonAndroid style={{ backgroundColor: ColorButtonAndroid[color] }}>
        {children}
      </ButtonAndroid>
    );
}

export default Button;
