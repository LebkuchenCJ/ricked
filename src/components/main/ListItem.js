import React from "react";

export default function ListItem(href, children) {
  return <a href={href}>{children}</a>;
}
