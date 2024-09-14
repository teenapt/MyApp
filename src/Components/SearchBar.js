import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mb-6 space-x-2">
      <input
        type="text"
        className="w-80 p-3 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      >
        <IoSearch size={22} />
      </button>
    </form>
  );
};

export default SearchBar;

