import React from "react";
import "./Spinner.css";

function Spinner(props) {
  const { size, color, ...restProps } = props;

  return (
    <div
      className="spinner"
      style={{
        border: "2px solid #f3f3f3",
        borderTop: `2px solid ${color}`,
        borderRadius: "50%",
        width: size,
        height: size,
      }}
      {...restProps}
    />
  );
}

export default Spinner;
