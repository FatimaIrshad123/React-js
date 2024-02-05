import React, { useEffect, useState } from 'react';
// import useDebounce from './useDebounce';

function useDebounce(value,delay){
    const [debounce,setDebounce] = useState(value)
    useEffect(() => {
        const time = setTimeout(() => {
            setDebounce(value)
        },delay)
        return () => {clearTimeout(delay)}
    },[value,delay])
    return debounce
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
    <p>Debounce value is {debouncedValue}</p>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </div>
  );
};

export default SearchBar;