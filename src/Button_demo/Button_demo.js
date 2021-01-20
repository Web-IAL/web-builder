import React from "react";
import "./Button_demo.css";

const STYLESIOS = [
  "btn--primary--solid--ios",
  "btn--light--solid--ios",
  "btn--info--solid--ios",
  "btn--success--solid--ios",
  "btn--waring--solid--ios",
  "btn--danger--solid--ios",
  "btn--dark--solid--ios",
  "btn--primary--outline--ios",
  "btn--light--outline--ios",
  "btn--info--outline--ios",
  "btn--success--outline--ios",
  "btn--waring--outline--ios",
  "btn--danger--outline--ios",
  "btn--dark--outline--ios",
];

const STYLESANDROID = [
  "btn--primary--solid--android",
  "btn--light--solid--android",
  "btn--info--solid--android",
  "btn--success--solid--android",
  "btn--waring--solid--android",
  "btn--danger--solid--android",
  "btn--dark--solid--android",
  "btn--primary--outline--android",
  "btn--light--outline--android",
  "btn--info--outline--android",
  "btn--success--outline--android",
  "btn--waring--outline--android",
  "btn--danger--outline--android",
  "btn--dark--outline--android",
];

 const ButtonDemo = ({
  ios,
  children,
  type,
  buttonStyle,
  ButtonRadius,
  onClick,
}) => {
  const checkButtonStyleIos = STYLESIOS.includes(buttonStyle)
    ? buttonStyle
    : STYLESIOS[0];

  const checkButtonStyleAndroid = STYLESANDROID.includes(buttonStyle)
    ? buttonStyle
    : STYLESANDROID[0];
  if (ios) {
    return (
      <button
        className={`btn ${checkButtonStyleIos}` }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  } else
    return (
      <button
        className={`btn ${checkButtonStyleAndroid}` }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
};
export default ButtonDemo;