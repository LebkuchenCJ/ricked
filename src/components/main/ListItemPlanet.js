import React from "react";

function ListItemPlanet({ secondary }) {
  return (
    <p>
      {"From Planet: "}
      <span>{secondary}</span>
    </p>
  );
}

export default ListItemPlanet;
