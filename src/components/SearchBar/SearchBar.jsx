import { useState } from "react";

export default function SearchBar({ onSearchChange }) {
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(value);
    setValue("");
  };
  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
