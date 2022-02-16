import React from 'react';

const Search = ({query, setQuery}) => {
  return (
    <div className="input">
      <input
        type="text"
        className="form-control form-search"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
    </div>
  );
}

export default Search;
