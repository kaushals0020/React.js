import { useRef } from "react";

export default function SignupForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);
  const mailRef = useRef(null);

  const saveUser = (e) => {
    e.preventDefault();
    console.log("Saved");

    //For getting value from the input
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    console.log(mailRef.current.value);
    console.log(addressRef.current.value);

    const uname = usernameRef.current.value;
    const pass = passwordRef.current.value;
    const mail = mailRef.current.value;
    const city = addressRef.current.value;

    //Now Created object of these variables

    const user = {
      uname,
      pass,
      mail,
      city,
    };

    console.log(user);

    const user1 = {
      username: uname,
      password: pass,
      email: mail,
      address: city,
    };
    console.log(user1);
  };

  return (
    <>
      <form onSubmit={saveUser}>
        Username: <input type="text" ref={usernameRef}></input> <br />
        Password: <input type="text" ref={passwordRef} /> <br />
        Email: <input type="text" ref={mailRef} /> <br />
        Adress:
        <select ref={addressRef}>
          <option>Delhi</option>
          <option>Pune</option>
          <option>Mumbai</option>
          <option>Patna</option>
        </select>
        <input type="submit" value="signup" />
      </form>
    </>
  );
}

// Summary:
// 1. Created Input field in UI
// 2. Used UseRef to refer to that inputs
// 3. Used save Property to avoiding default save
// 4. Read the current value from the inputs
// 5. After it, stored it into variables to create an object
// 6. Then After, Created another object to Show properly like json
