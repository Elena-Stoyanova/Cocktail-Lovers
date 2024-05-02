import './SearchBar.scss';
import { useState } from 'react';

const SearchBar = ({
  filterNames,
  searchedText,
  setSearchedText,
  selectedFilterName,
  setSelectedFilterName,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState(searchedText);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='searchContainer'>
      <form>
        <div className='dropdown'>
          <button
            type='button'
            className='dropBtn'
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {selectedFilterName}
            <img src='/dropdown.png' alt='' />
          </button>
          {showDropdown && (
            <div className='dropdownContent'>
              {filterNames.map((name) => (
                <div
                  className={name === selectedFilterName ? 'active' : ''}
                  key={name}
                  onClick={() => {
                    setSelectedFilterName(name);
                    setSearchedText(searchText);
                    setShowDropdown(false);
                  }}
                >
                  <p>{name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setSearchedText(searchText);
            }
          }}
          type='text'
          placeholder='Search...'
          name='search'
          value={searchText}
          onChange={handleChange}
        />
        <button
          className='searchButton'
          type='button'
          onClick={() => setSearchedText(searchText)}
        >
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
