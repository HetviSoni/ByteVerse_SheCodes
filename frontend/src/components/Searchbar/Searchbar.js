import React, { useState } from 'react';
import './searchbar.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="searchbar"  onSubmit={handleSubmit}>
      <input className="input" type="text" value={query} onChange={handleChange} placeholder="Search for skills" />
      <button className="search"><i class="fa-solid fa-magnifying-glass"></i></button>
      
    </form>
  );
};

export default SearchBar;
