import React from "react";

function ListItemType({ type }) {
  return (
    <p>
      {"Location: "}
      <span>{type}</span>
    </p>
  );
}

export default ListItemType;
