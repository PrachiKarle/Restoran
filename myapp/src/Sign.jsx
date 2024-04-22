import React, { createContext, useState } from "react";
import Heading from "./Heading";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const username = createContext();
const Sign = () => {
  const [usernm, setUser] = useState("");
  const [pass, setPass] = useState("");

  const nav = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    var acc = await axios.get("http://localhost:3000/account");
    for (let x of acc.data) {
      if (x.username == usernm && x.pass == pass) {
        alert("Successfully Logged In!!!");
        nav("/");
      }
    }
  };

  return (
    <>
      <username.Provider value={usernm}>
        <Navbar />
      </username.Provider>
      <Heading val="Sign in" />

      <div className="row m-0 p-5">
        <div
          className="col-lg-6 col-10 m-auto px-5 py-4 text-light fw-bold"
          style={{ backgroundColor: "#fea116", borderRadius: "25px" }}
        >
          <form action="" onSubmit={(e) => SignIn(e)}>
            <div className="form-group">
              <label htmlFor="uname">Username</label>
              <br />
              <input
                type="text"
                className="form-control"
                value={usernm}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <b className="text-light text-center fw-normal">
              New Here ?{" "}
              <NavLink to="/Signup" className="text-light fw-bold">
                Sign up
              </NavLink>
            </b>
            <div className="form-group text-center mt-4">
              <button type="submit" className="btn btn-outline-light fw-bold">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign;
export { username };
