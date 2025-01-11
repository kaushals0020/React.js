import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [role, setRole] = useState(null);
  const nav = useNavigate();
  const displayLogin = () => {
    if (role === "admin") {
      nav("/admin");
    } else {
      nav("/login");
    }
  };
  return (
    <>
      <h2>UserComp</h2>
      Enter the Role{" "}
      <input
        type="text"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      ></input>{" "}
      <input type="button" value="Click" onClick={displayLogin} />
    </>
  );
}
