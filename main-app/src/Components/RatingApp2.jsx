import { Star, StarFill } from "react-bootstrap-icons";
import { useState } from "react";

export default function RatingApp2() {
  const [rating, setRating] = useState(0);

  const updateRating = (value) => {
    setRating(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Rate Us</h1>
      <div>
        {rating >= 1 ? (
          <StarFill
            color="green"
            size={50}
            onClick={() => updateRating(1)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        ) : (
          <Star
            color="red"
            size={50}
            onClick={() => updateRating(1)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        )}
        {rating >= 2 ? (
          <StarFill
            color="green"
            size={50}
            onClick={() => updateRating(2)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        ) : (
          <Star
            color="red"
            size={50}
            onClick={() => updateRating(2)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        )}
        {rating >= 3 ? (
          <StarFill
            color="green"
            size={50}
            onClick={() => updateRating(3)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        ) : (
          <Star
            color="red"
            size={50}
            onClick={() => updateRating(3)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        )}
        {rating >= 4 ? (
          <StarFill
            color="green"
            size={50}
            onClick={() => updateRating(4)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        ) : (
          <Star
            color="red"
            size={50}
            onClick={() => updateRating(4)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        )}
        {rating >= 5 ? (
          <StarFill
            color="green"
            size={50}
            onClick={() => updateRating(5)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        ) : (
          <Star
            color="red"
            size={50}
            onClick={() => updateRating(5)}
            style={{ cursor: "pointer", margin: "0 5px" }}
          />
        )}
      </div>
    </div>
  );
}

// import { Star, StarFill } from "react-bootstrap-icons";
// import { useState } from "react";

// export default function RatingApp2() {
//   const [rating, setRating] = useState(0);

//   const updateRating = (value) => {
//     setRating(value);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h1>Rate Us</h1>
//       <div>
//         {[1, 2, 3, 4, 5].map((value) =>
//           rating >= value ? (
//             <StarFill
//               key={value}
//               color="green"
//               size={50}
//               onClick={() => updateRating(value)}
//               style={{ cursor: "pointer", margin: "0 5px" }}
//             />
//           ) : (
//             <Star
//               key={value}
//               color="red"
//               size={50}
//               onClick={() => updateRating(value)}
//               style={{ cursor: "pointer", margin: "0 5px" }}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );

// }
