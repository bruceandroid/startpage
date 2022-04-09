import React, { useState, useEffect } from 'react';
import './styles/SearchBar.scss';
import { IMPORTANT_URLS } from '../util/constants';

const SearchBar = () => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    let userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = IMPORTANT_URLS.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) >= 0
    );
    let filtered = userInput === '' ? [] : unLinked;
    setFilteredSuggestions(filtered);

    let preparedUrl = '';
    if (userInput.length > 0) {
      if (filtered.length) {
        preparedUrl = filtered[0];
      } else {
        if (userInput.startsWith('http') || userInput.startsWith('www.')) {
          preparedUrl = userInput;
        } else {
          preparedUrl = 'http://www.google.com/search?q=' + userInput;
        }
      };
    }
    setInputValue(preparedUrl);
  };


  const submitUrl = (url = null) => (e) => {
    if (url !== null) { // clicked with mouse
      window.location.href = url;
    } else if (e.key === 'Enter') {
      window.location.href = inputValue;
    }
  }

  const changeInputValue = (url) => (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitUrl(url)(e);
    }
  }

  const Autocomplete = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestion-list">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (inputValue === '' && index === 0) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} tabIndex="0"
              onClick={submitUrl(suggestion)} onKeyUp={changeInputValue(suggestion)}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : null;
  };


  return (
    <>
      <div className="search-container">
        <input autoFocus autoComplete="off" type="text" id="search" name="search"
          className={"search-bar" + (filteredSuggestions.length > 0 ? ' list-on' : '')}
          onChange={onChange} onKeyUp={submitUrl()} />
        {inputValue.length > 0 &&
          <Autocomplete />}
      </div>
    </>
  )
}

export default SearchBar;