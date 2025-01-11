
import React, { useState } from "react";
import { ReactReader } from "react-reader";

const App = () => {
  const [location, setLocation] = useState(null); // Track the current reading location
  const [highlights, setHighlights] = useState([]); // To track highlights

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const addHighlight = () => {
    const selection = window.getSelection().toString();
    if (selection) {
      setHighlights([...highlights, selection]);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          background: "#f5f5f5",
        }}
      >
        <h1>Book Reader</h1>
        <button onClick={addHighlight}>Highlight</button>
      </header>
      <div style={{ flex: 1, position: "relative" }}>
        <ReactReader
          url="/path-to-your-ebook.epub" // Provide the path to the ePub book
          location={location}
          locationChanged={handleLocationChange}
          styles={{
            readerArea: { padding: 20 },
          }}
        />
      </div>
      <footer style={{ padding: "10px", background: "#f5f5f5" }}>
        <h3>Highlights:</h3>
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default App;
