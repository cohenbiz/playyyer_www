import React, { useState } from "react";

const LoginForm = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogIn] = useState(true);

  const handleLoginClick = () => {
    setLogIn(true);
    setRegister(false);
  };

  const handleRegisterClick = () => {
    setRegister(true);
    setLogIn(false);
  };

  // console.log("login :", login, "register :", register);

  return (
    <section className="loginForm"> 
      <div class="container">
            <div class="row">
               
            <div class="col-sm-0 col-md-2 col-lg-3"></div>
               
            <div class="col-sm-12 col-md-8 col-lg-6">
          <div class="head">
            <div>
              <button
                className={`login ${login && "selected"}`}
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className={`register ${register && "selected"}`}
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </div>
          </div>
          <form className="form">
            <legend>{login ? "Connection" : "S'enregistrer"}</legend>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="password"
              name="password"
              required
              placeholder="Password"
            />
            <button type="submit">Connect</button>
          </form>
        </div>
        <div>
     </div>
     </div>

     <div class="col-sm-0 col-md-2 col-lg-3"></div>
        </div>



    
    </section>
  );
};

export default LoginForm;
