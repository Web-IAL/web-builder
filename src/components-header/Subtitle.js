import React from "react";

const Subtitle = ({ android, children }) => {
    let css = {
        fontSize: "14px",
        fontFamily: "'Roboto', sans-serif",
        color: "black"
    };

    if (android) {
        css = {
            fontSize: "14px",
            fontFamily: "'Roboto', sans-serif",
            color: "white",
            // backgroundColor: "#3f51b5" 
        }
    }
    return <p style={css}>{children}</p>
}

export default Subtitle;