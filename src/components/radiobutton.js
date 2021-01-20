import React from "react";
import "antd/dist/antd.css";
import "../styles/radio.css";

function Radio({ os, data }) {
  return (
    <form>
      <div className="list-group">
        {data.map((item) => (
          <>
            <input
              type={`${os ? "checkbox" : "radio"}`}
              name={`${os ? "CheckBoxInputName" :"RadioInputName"}`}
              defaultValue={item.title}
              id={item.title}
            />
            <label className="list-group-item" htmlFor={item.title}>
              {item.title}
            </label>
          </>
        ))}
      </div>
    </form>
  );
}

export default Radio;
