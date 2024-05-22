import React, { useState } from "react";
import "./Login.css";
import user_icon from "../assets/Assets/person.png";
import email_icon from "../assets/Assets/email.png";
import Password_icon from "../assets/Assets/password.png";
import Bulb from "../assets/bulb.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Log-in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSignup = () => {
    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify({ name, email, password }));
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Validate credentials
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      // Successful login
      // Redirect to Home page or perform other actions
    } else {
      // Invalid credentials
      // Display an error message
    }
  };

  return (
    <>
      <div className="Cont">
        <div className="calc">
          <img src={Bulb} alt="" />
        </div>
        <div className="contain">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Log-in" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" required />
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input">
              <img src={Password_icon} alt="" />
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          {action === "Sign up" ? (
            <div></div>
          ) : (
            <div className="forgot">
              Forgot password? <span>Click Here</span>{" "}
            </div>
          )}
          <div className="submit-contain">
            <div
              className={action === "Log-in" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign up");
              }}
            >
              {" "}
              Sign up
            </div>
            <div
              className={action == "Sign up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Log-in");
              }}
            >
              Log-in
            </div>
          </div>
          {/* <form
            onSubmit={(event) => {
              event.preventDefault();
              action === "Log-in" ? handleLogin() : handleSignup();
            }}
          >
            <button type="submit" className="submit">
              {action}
            </button>
          </form> */}
        </div>
        <div className="calc">
          <img src={Bulb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
