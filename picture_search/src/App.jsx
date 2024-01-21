import "./App.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const defaultSize = "100";
  const [size, setSize] = useState(defaultSize);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const removeButtonClick = () => {
    setSearchInput("");
  };

  const buttonClick = () => {
    let resultsCopy = [...results];
    let newUrl = `https://source.unsplash.com/${size}x${size}/?${searchInput}`;
    resultsCopy.unshift(newUrl);
    if (resultsCopy.length === 4) {
      resultsCopy.pop();
    }
    setResults(resultsCopy);
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <button onClick={buttonClick}>Search</button>
      <button onClick={removeButtonClick}>Empty</button>
      <select value={size} defaultValue={defaultSize} onChange={sizeHandler}>
        <option value="100">100x100</option>
        <option value="300">300x300</option>
        <option value="600">600x600</option>
      </select>
      <input
        type="text"
        placeholder="Write here"
        onChange={handleChange}
        value={searchInput}
      ></input>
      {results.map((result) => (
        <img key={result} src={result} />
      ))}
    </>
  );
}

export default App;
