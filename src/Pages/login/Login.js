import { useState } from "react";
import MyNavbar from "../../components/navbar/Navbar";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    if (username == "admin" && password == "12345") {
      console.log("You are loged in");
    } else {
      console.log("You are not loged in");
    }
  };
  return (
    <>
      <MyNavbar />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button type="button" onClick={submitHandler}>
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
