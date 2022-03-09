import React from "react";
import "./Button.css";

// Button Types: default, outlined, icon Button

function Button(props) {
  const { children, type, href, endIcon, startIcon, ...restProps } = props;

  return (
    <div className="button__ring">
      {href ? (
        <a
          href={href}
          className={
            type === "icon"
              ? "button__icon"
              : type === "outlined"
              ? "button__outlined"
              : "button__default"
          }
          {...restProps}
        >
          {startIcon && <span className="button__start-icon">{startIcon}</span>}
          {children}
          {endIcon && <span className="button__end-icon">{endIcon}</span>}
        </a>
      ) : (
        <button
          type="submit"
          className={
            type === "icon"
              ? "button__icon"
              : type === "outlined"
              ? "button__outlined"
              : "button__default"
          }
          {...restProps}
        >
          {startIcon && <span className="button__start-icon">{startIcon}</span>}
          {children}
          {endIcon && <span className="button__end-icon">{endIcon}</span>}
        </button>
      )}
    </div>
  );
}

export default Button;
