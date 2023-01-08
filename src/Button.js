import React from "react";

export function Button({ children, type, disabled }) {
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}
