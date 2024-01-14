import "./App.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleChange}
      ></input>
      <img
        src={
          searchInput == ""
            ? null
            : `https://source.unsplash.com/100x100/?${searchInput}`
        }
      />
    </>
  );
}

export default App;
