import React from "react";
import "./Button.css";

function Button(props) {
  const { children, ...restProps } = props;

  return (
    <div>
      <button type="submit" className="button" {...restProps}>
        {children}
      </button>
    </div>
  );
}

export default Button;
