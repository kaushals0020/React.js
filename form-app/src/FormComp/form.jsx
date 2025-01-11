import { useState } from "react";

export default function Register() {
  const [userName, setUserName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updateMail = (e) => {
    setMail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const saveUser = (e) => {
    e.preventDefault();
    console.log("Registerd Successfully");
    console.log(userName, password, mail, address);
  };

  let user = { userName, mail, password, address };
  console.log(user);

  let user1 = {
    uName: userName,
    mailId: mail,
    password: password,
    address: address,
  };

  return (
    <>
      <form action="" onSubmit={saveUser}>
        Username : <input type="text" onChange={updateUserName} /> <br />
        E-mail id : <input type="text" onChange={updateMail} /> <br />
        Password : <input
          type="password"
          onChange={updatePassword}
        /> <br /> <br />
        Adress :{" "}
        <select onChange={updateAddress}>
          <option>Pune</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

// Summary:
// 1. Created Input field in UI
// 2. Used UseState to change the state of that inputs
// 3. Used methods to update the states
// 4. Used save Property to avoiding default save
// 5. After it, stored state variables into a user variable to create an object
// 6. Then After, Created another object to Show properly like json
