import React from "react";

const Highlights = ({ highlights }) => {
  return (
    <div
      style={{
        flex: 1,
        padding: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Highlights</h3>
      {highlights.length === 0 ? (
        <p>No highlights yet</p>
      ) : (
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Highlights;
