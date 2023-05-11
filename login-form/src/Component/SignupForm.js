import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState("");

  const [email, Setemail] = useState("");

  const [Password, SetPassword] = useState("");

  const [Cpassword, SetCpassword] = useState("");

  const [user, setuser] = useState([]);

  const [nameerror, setnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [Passworderror, setPassworderror] = useState("");
  const [CPassworderror, setCPassworderror] = useState("");

  const Namehandler = (event) => {
    setUsername(event.target.value);
  };

  const Emailhandler = (event) => {
    Setemail(event.target.value);
  };

  const passwordhandler = (event) => {
    SetPassword(event.target.value);
  };

  const confirmpassword = (event) => {
    SetCpassword(event.target.value);
  };

  const sumbithandler = (e) => {
    e.preventDefault();
  };

  const SignupClick = () => {
    if (username === "") {
      setnameerror("this feild is required");
    }
    if (Password === "") {
      setPassworderror("this feild is required");
    }
    if (email === "") {
      setemailerror("this feild is required");
    }
    if (Cpassword === "") {
      setCPassworderror("this feild is required");
    }
    if (Password !== Cpassword) {
      setCPassworderror("password did not match ");
    }
    if (
      username !== "" &&
      email !== "" &&
      Password !== "" &&
      Cpassword !== "" &&
      Password == Cpassword
    ) {
      const userData = {
        username,
        email,
        Password,
        Cpassword,
      };

      setuser([...user, userData]);
      setUsername("");
      Setemail("");
      SetPassword("");
      SetCpassword("");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <div className="Center">
        <h1>Signup</h1>
        <form onSubmit={sumbithandler}>
          <div className="txt-feild">
            <label htmlFor="Username"></label>
            <span></span>

            <input
              type="text"
              name="Username"
              placeholder="Username"
              value={username}
              required
              onChange={Namehandler}
            />
          </div>
          <p style={{ color: "red" }}>{nameerror}</p>
          <div className="txt-feild">
            <label htmlFor="email"></label>
            <span></span>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              required
              onChange={Emailhandler}
            />
          </div>
          <p style={{ color: "red" }}>{emailerror}</p>
          <div className="txt-feild">
            <label htmlFor="password"></label>
            <span></span>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={Password}
              required
              onChange={passwordhandler}
            />
          </div>
          <p style={{ color: "red" }}>{Passworderror}</p>
          <div className="txt-feild">
            <label htmlFor="password"></label>
            <span></span>
            <input
              type="password"
              name="password"
              placeholder="ConfirmPassword"
              value={Cpassword}
              required
              onChange={confirmpassword}
            />
          </div>
          <p style={{ color: "red" }}>{CPassworderror}</p>
          {/* <div className="pass">Forget Password ?</div> */}
          <button type="Submit" value="Sign Up" onClick={SignupClick}>
            Sign Up
          </button>
          <div className="signup-Link">
            If you an Account
            <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
