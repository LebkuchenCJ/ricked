import React from "react";
import "./Input.css";
import searchIconSrc from "../../assets/search-24px.svg";

function Input() {
  return (
    <div className="searchElement">
      <input
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
