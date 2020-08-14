import React from "react";
import "./ListItem.css";

export default function ListItem({ href, children }) {
  return (
    <a href={href} className="listItem">
      {children}
    </a>
  );
}
