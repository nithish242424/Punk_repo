import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search beers..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default SearchBar;
