import React, { useState } from 'react';
import './styles/SearchBar.scss';
import { IMPORTANT_URLS } from '../util/constants';
// import { getAllChildren } from '../util/util';

const SearchBar = () => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [lineIndex, setLineIndex] = useState(0);

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
    return filteredSuggestions.length && (
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
    );
  };

  // const handleArrowKeys = useCallback((e) => {
  //   console.log(e);
  //   console.log(lineIndex);
  //   let elem = document.getElementsByClassName('search-container');
  //   let allChildren = getAllChildren(elem[0]);
  //   console.log(allChildren.includes(e.target));
  //   if (allChildren.includes(e.target)) { // inside search-container
  //     if (e.key === 'ArrowDown') {
  //       e.preventDefault();
  //       let searchBar = document.getElementsByClassName('search-bar');
  //       console.log(">",!!searchBar.length, searchBar[0].isEqualNode(e.target), lineIndex === 0);
  //       //if (!(searchBar.length && searchBar[0].isEqualNode(e.target) && lineIndex === 0)) {
  //         // if first arrow-down, index = 0 => avoid index + 1
  //         if (lineIndex < IMPORTANT_URLS.length)
  //           setLineIndex(lineIndex + 1);
  //       //}
  //     } else if (e.key === 'ArrowUp') {
  //       e.preventDefault();
  //       if (lineIndex > 0)
  //         setLineIndex(lineIndex - 1);
  //     }
  //   }
  // })

  // useEffect(() => {
  //   window.addEventListener("keyup", handleArrowKeys);
  //   return () => {
  //     window.removeEventListener("keyup", handleArrowKeys);
  //   };
  // }, [handleArrowKeys]);

  // useEffect(() => {
  //   console.log(".1");
  //   console.log(lineIndex);
  //   let lineListElems = document.getElementsByClassName('suggestion-list');
  //   let lineList;
  //   if (lineListElems.length) {
  //     console.log(".2");
  //     console.log("tou", lineListElems);
  //     lineList = lineListElems[0];
  //     console.log("sim", lineList);
  //     lineList.children[lineIndex].focus();
  //   }
  // }, [lineIndex]);


  return (
    <>
      <div className="search-container">  {/*onKeyUp={handleArrowKeys}*/}
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