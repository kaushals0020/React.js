import { useContext } from "react";
import MyContext from "./UserContext";
export default function ProfileComp() {
  const u = useContext(MyContext);

  return (
    <>
      <h2>Value from Profile Comp</h2>
      <p>
        {u.username} {u.password}
      </p>
    </>
  );
}
