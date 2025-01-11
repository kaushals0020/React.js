import { Star, StarFill } from "react-bootstrap-icons";
import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const updateRating = (value) => {
    setRating(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Rate Us</h1>
      <div>
        {[1, 2, 3, 4, 5].map((value) =>
          rating >= value ? (
            <StarFill
              key={value}
              color="green"
              size={50}
              onClick={() => updateRating(value)}
              style={{ cursor: "pointer", margin: "0 5px" }}
            />
          ) : (
            <Star
              key={value}
              color="red"
              size={50}
              onClick={() => updateRating(value)}
              style={{ cursor: "pointer", margin: "0 5px" }}
            />
          )
        )}
      </div>
    </div>
  );
}
