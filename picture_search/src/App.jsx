import "./App.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [figureUrl, setFigureUrl] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const buttonClick = () => {
    setFigureUrl(`https://source.unsplash.com/100x100/?${searchInput}`);
  };
  return (
    <>
      <button onClick={buttonClick}>Search</button>
      <input
        type="text"
        placeholder="Write here"
        onChange={handleChange}
      ></input>
      <img src={searchInput == "" ? null : figureUrl} />
    </>
  );
}

export default App;
