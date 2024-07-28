
import React, { useState } from "react";
import axios from "axios";
import Heading from "./Heading";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();

  const [usernm, setUser] = useState("");
  const [unmerr, setUsererr] = useState("");
  const [mail, setMail] = useState("");
  const [mailerr, setMailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passerr, setPasserr] = useState("");
  const [cpass, setCpass] = useState("");

  //signin function
  const signIn = async (e) => {
    e.preventDefault();
    // account data
    var acc = await axios.get(
      "https://prachikarle.github.io/JSON/restoarn.json"
    );
    // console.log(acc.data.account);
    let flag = true;
    for (let x of acc.data.account) {
      // username validation
      if (x.username == usernm) {
        flag = false;
        setUsererr("Username Already exists");
      }
      // mail validation
      if (x.email == mail) {
        flag = false;
        setMailErr("Email already exists");
      }
    }
    if (flag == true) {
      // passwordValidation
      var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (pass !== cpass) {
        setPasserr("Please enter same password");
      } else if (!regex.test(pass)) {
        setPasserr(
          "Password should contain atleast one number and one special character"
        );
      } else {
        alert("Account created Successfully");
        const state = {
          username: usernm,
          email: mail,
          pass: pass,
          Login: false,
        };
        const arr=[...acc.data.account, state];
        console.log(arr);
       
        setPasserr("");
        setMailErr("");
        setUsererr("");
        setUser("");
        setMail("");
        setPass("");
        setCpass("");
        nav("/");
      }
    }
  };

  return (
    <>
      <Heading val="Sign up" />

      <div className="row m-0 p-5">
        <div
          className="col-lg-6 col-md-8 col-12 m-auto px-5 py-4 text-light fw-bold"
          style={{ backgroundColor: "#fea116" }}
        >
          <form action="" onSubmit={(e) => signIn(e)}>
            <div className="form-group">
              <label htmlFor="uname">Username</label>
              <br />
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                value={usernm}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              {unmerr ? <i className="text-danger">{unmerr}</i> : null}
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email</label>
              <br />
              <input
                type="email"
                className="form-control"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Enter your mail"
                required
              />
              {mailerr ? <i className="text-danger">{mailerr}</i> : null}
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
              {passerr ? <i className="text-danger">{passerr}</i> : null}
            </div>
            <div className="form-group">
              <label htmlFor="pass">Confirm Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
                placeholder="Re-enter your password"
                required
              />
            </div>
            <b className="text-light text-center fw-normal">
              Already account ?{" "}
              <NavLink to="/sign" className="text-light fw-bold">
                Sign in
              </NavLink>
            </b>
            <div className="form-group text-center mt-4">
              <button type="submit" className="btn btn-outline-light fw-bold">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
