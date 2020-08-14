import React from "react";
import "./List.css";

function List({ children }) {
  return <nav className="list">{children}</nav>;
}
export default List;
