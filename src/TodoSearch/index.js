import React, { useCallback, useState } from "react";
import "./TodoSearch.css";
import searchIcon from "../assets/search-icon.svg";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="search-container">
      <input
        value={searchValue}
        placeholder="Cortar cebolla"
        //update state, new value e
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export default TodoSearch;
