//Step 2: Create State Comp and add Conetext.provider

import userContext from "./UserContext";
import { useState } from "react";
export default function UserProvider(props) {
  const [user, setUser] = useState({
    username: "Kaushal",
    password: "12345678",
  });
  //   const updateUser = () => {
  //     setUser({
  //       username: "Sunny",
  //       password: "23456543",
  //     });
  //   };
  return (
    <>
      <h2>UserProvider says:</h2>
      <userContext.Provider value={user}>{props.children}</userContext.Provider>

      {/* <button onClick={updateUser}>Click!</button> */}
    </>
  );
}
