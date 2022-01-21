import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [newPlace, setNewPlace] = useState<String>("");
  const [places, setPlaces] = useState<String[]>([]);

  const handleInputChange = (e: any) => {
    setNewPlace(e.target.value);
  };

  const handleButtonClick = () => {
    setPlaces([...places, newPlace]);

    setNewPlace("");
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{"혜림이가 가고 싶은 곳"}</div>
      <div
        style={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ol>
          {places &&
            places.length >= 0 &&
            places.map((place) => <li>{place}</li>)}
        </ol>
      </div>
      <div>
        <input value={newPlace + ""} onChange={handleInputChange} />
        <button onClick={handleButtonClick} style={{ marginLeft: "3px" }}>
          {"추가"}
        </button>
      </div>
    </div>
  );
}

export default App;
