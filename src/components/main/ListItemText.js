import React from "react";

function ListItemText({ primary, secondary }) {
  return (
    <div>
      <h4>{primary}</h4>
      <span>{secondary}</span>
    </div>
  );
}

export default ListItemText;
