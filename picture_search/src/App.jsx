import "./App.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [figureUrl, setFigureUrl] = useState("");
  const defaultSize = "100";
  const [size, setSize] = useState(defaultSize);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const removeButtonClick = () => {
    setSearchInput("");
  };

  const buttonClick = () => {
    setFigureUrl(`https://source.unsplash.com/${size}x${size}/?${searchInput}`);
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
      <img src={searchInput == "" ? null : figureUrl} />
    </>
  );
}

export default App;
