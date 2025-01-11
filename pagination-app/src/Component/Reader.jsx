import React from "react";
import { ReactReader } from "react-reader";

const Reader = ({ location, onLocationChange }) => {
  return (
    <div style={{ flex: 3, height: "90vh", border: "1px solid #ddd" }}>
      <ReactReader
        url="/book.epub" // ePub file in the public folder
        location={location}
        locationChanged={onLocationChange}
      />
    </div>
  );
};

export default Reader;
