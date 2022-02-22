import React from "react";
import "./Textfield.css";

// Textfield Types: text, password
function Textfield(props) {
  const {
    type,
    required,
    value,
    placeholder,
    autoComplete,
    name,
    id,
    autoFocus,
    error,
    ...restProps
  } = props;

  return (
    <div>
      <input
        className={error ? "textfield--error" : "textfield"}
        type={type}
        {...restProps}
        id={id && id}
        name={name}
        required={required}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder && placeholder}
        autoComplete={autoComplete && autoComplete}
      />
    </div>
  );
}

export default Textfield;
