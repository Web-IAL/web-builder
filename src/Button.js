import React from "react";

const Button = ({
  os,
  children,
  primary,
  info,
  light,
  success,
  warning,
  danger,
  dark,
  android
}) => {
  let css = {
    border: "none",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    padding: "13px 15px",
    boxShadow: "0px 2px #dddddd",
  };

  if (light && os) {
    css = {
      ...css,
      color: "#000000",
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    };
  }
  if (info && os) {
    css = {
      ...css,
      backgroundColor: "#529ff3",
      borderRadius: "5px",
    };
  }
  if (primary && os) {
    css = {
      ...css,
      backgroundColor: "#0a60ff",
      borderRadius: "5px",
    };
  }
  if (success && os) {
    css = {
      ...css,
      backgroundColor: "#4dad4a",
      borderRadius: "5px",
    };
  }
  if (warning && os) {
    css = {
      ...css,
      backgroundColor: "#eb9e3e",
      borderRadius: "5px",
    };
  }
  if (danger && os) {
    css = {
      ...css,
      backgroundColor: "#ce3c3e",
      borderRadius: "5px",
    };
  }
  if (dark && os) {
    css = {
      ...css,
      backgroundColor: "#000000",
      borderRadius: "5px",
    };
  }

  // android

  if (light) {
    css = {
      ...css,
      fontSize: "10px",
      fontWeight:"550",
      color: '"#0000000',
      backgroundColor: "#f4f4f4",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  if (info) {
    css = {
      ...css, fontSize: "10px",
      fontWeight: "550",
      backgroundColor: "#62b1f6",
      borderRadius: "2px",
      textTransform: "uppercase",
    }
  }

  if (primary) {
    css = {
      ...css, fontSize: "10px",
      fontWeight: "550",
      backgroundColor: "#3f51b5",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  if (success) {
    css = {
      ...css, fontSize: "12px", 
      fontWeight: "550",
      backgroundColor: "#5cb85c",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  if (warning ) {
    css = {
      ...css, fontSize: "10px", 
      fontWeight: "550",
      backgroundColor: "#f0ad4e",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  if (danger ) {
    css = {
      ...css, fontSize: "10px", 
      fontWeight: "550",
      backgroundColor: "#d9534f",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  if (dark) {
    css = {
      ...css, fontSize: "10px", 
      fontWeight: "550",
      backgroundColor: "#000000",
      borderRadius: "2px",
      textTransform: "uppercase"
    }
  }

  return <button style={css}>{children}</button>;
};

export default Button;
