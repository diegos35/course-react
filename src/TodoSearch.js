import React, { useCallback, useState } from 'react'
import "./TodoSearch.css";
import searchIcon from "./assets/search-icon.svg";


function TodoSearch() {
  /* state initial */
  const [searchValue, setSearchValue] =  React.useState('');//el actulizador es setSearchValue
  console.log('los usuarios buscan todos de '+ searchValue);

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
  )
}

export default TodoSearch

