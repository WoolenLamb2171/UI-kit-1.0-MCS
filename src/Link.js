import React from "react";

export function Link({ href, children }) {
  return (
    <a href={href} className="ui-link">
      {children}
    </a>
  );
}
