import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [error, setshowerror] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    let Data = JSON.parse(localStorage.getItem("data"));

    let element = Data.filter((ele) => {
      return values.email == ele.email && values.password == ele.Password;
    });
    if (element.length > 0) {
      navigate("/dashboard");
    } else {
      setshowerror("User is not vaild need sign up!");
    }
  };

  const userchecker = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const sumbithandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="Center">
        <h1>Login</h1>
        <form onSubmit={sumbithandler}>
          <div className="txt-feild">
            <span></span>
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter your email"
              onChange={userchecker}
              required
            />
          </div>
          <div className="txt-feild">
            <label htmlFor="password"></label>
            <span></span>
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="password"
              onChange={userchecker}
              required
            />
          </div>
          <div className="pass">Forget Password ?</div>
          <button type="sumbit" value="login" onClick={handleSubmit}>
            Login
          </button>
          <p style={{ color: "red", marginLeft: "64px" }}>{error}</p>
          <div className="signup-Link">
            Not a member ?<Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
