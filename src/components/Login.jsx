import React from "react";
import logomap from "/map1.png";

function Login() {
  return (
    <>
      <div className="login-container">
        <img className="logomap" src={logomap} alt="map" />
        <h1>Login</h1>
        <form>
          {/* <label>Username</label> */}
          <input className="input" type="text" placeholder="Username" />
          <input className="input" type="password" placeholder="Password" />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
