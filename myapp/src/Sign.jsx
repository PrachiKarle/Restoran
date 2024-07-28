import React, { useState } from "react";
import Heading from "./Heading";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Sign = () => {
  const [usernm, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [flag,setFlag]=useState("");
  var flag1=false;
  const nav = useNavigate();

  //sign in
  const SignIn = async (e) => {
    e.preventDefault();
    var acc = await axios.get(
      "https://prachikarle.github.io/JSON/restoarn.json"
    );
    for (let x of acc.data.account) {
      if (x.username == usernm && x.pass == pass) {
        setFlag(x.username);
        flag1=true;
        alert("Successfully Logged In!!!");
        nav("/");
      }
    }
    if(!flag1){
      alert("Invalid username and Password");
      setUser("");
      setPass("");
      setFlag("");
    }
    
  };

  return (
    <>
    
      <Heading val="Sign in" />

      <div className="row m-0 p-5">
        <div
          className="col-lg-6 col-md-8 col-12 m-auto px-md-5 py-md-4  p-3 text-light fw-bold"
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
