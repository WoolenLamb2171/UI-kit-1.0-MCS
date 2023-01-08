import React from "react";

export function Input({ placeholder, name, type = "text" }) {
  return (
    <input
      className="ui-textfield"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}
