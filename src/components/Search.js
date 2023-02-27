import React, { useState } from "react";

function Search({ search, setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
