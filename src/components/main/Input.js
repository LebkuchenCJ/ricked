import React from "react";
import "./Input.css";
import searchIconSrc from "../../assets/search-24px.svg";

function Input(/* { query, handleChange } */) {
  return (
    <div className="searchElement">
      <input
        /* value={query}
        onChange={(event) => handleChange(event.target.value)} */
        className="searchElement__input"
        placeholder="Search"
        type="texts"
      />
      <button>
        <img src={searchIconSrc} alt="Search Icon" />
      </button>
    </div>
  );
}

export default Input;
