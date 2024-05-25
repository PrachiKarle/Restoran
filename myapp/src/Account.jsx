import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  //navigate
  const nav = useNavigate();

  //account and booking data
  const [account, setAcc] = useState([]);
  const [booking, setBooking] = useState([]);

  //show booking and account setting
  const [bookShow, setShow] = useState(true);
  const [accSet, setShow2] = useState(false);

  //password change show
  const [passChange, setChangeShow] = useState(true);
  //mail change show
  const [mailChange, setChange] = useState(false);

  //load Data
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    var acc = await axios.get("http://localhost:3000/account");
    for (let x of acc.data) {
      if (x.Login == true) {
        var res = await axios.get(`http://localhost:3000/account/${x.id}`);
        setAcc(res.data);
        setBooking(res.data.Booking);
      }
    }
    console.log(account);
  };

  // change booking and account setting
  const changeState = () => {
    setShow(!bookShow);
    setShow2(!accSet);
  };

  // Change password and mail show
  const show = () => {
    setChangeShow(!passChange);
    setChange(!mailChange);
  };
 
  //change Password
  const [firstPass, setFirstPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfPass] = useState("");
  const save = async (e) => {
    e.preventDefault();
    var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (firstPass == account.pass) {
      if (newPass == confirmPass) {
        if (!regex.test(newPass)) {
          alert("Weak Password");
        } else {
          await axios.patch(`http://localhost:3000/account/${account.id}`, {
            pass: newPass,
          });
          alert("Successfully update your password");
          nav("/");
        }
      } else {
        alert("Please enter same password");
      }
    } else {
      alert("Password is not correct");
    }
  };

  //change Mail
  const [firstmail, setfirstMail] = useState("");
  const [newMail, setNewMail] = useState("");

  const save1 = async (e) => {
    e.preventDefault();
    if (firstmail == account.email) {
      if (firstmail != newMail) {
        await axios.patch(`http://localhost:3000/account/${account.id}`, {
          email: newMail,
        });
        alert("Mail change Successfully");
      } else {
        alert("You entered same Mail");
      }
    }
  };

  //logout
  const logout=async()=>{
    await axios.patch(`http://localhost:3000/account/${account.id}`,{
      Login:false
    });
    nav('/')
  }
  return (
    <>
      <div className="row p-4 m-0" style={{ backgroundColor: "#F1F3F6" }}>
        {/* sidemenu */}
        <div className="col-lg-3 col-md-4 col-12 m-0 p-2">
          <div
            className="p-3 d-flex align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <img src="images/profile.svg" className="img-fluid" alt="" />{" "}
            <h5 className="fw-bold mx-3">Hello {account.username}</h5>
          </div>
          <div className="my-2" style={{ backgroundColor: "white" }}>
            <div
              className="py-3 px-4 d-flex justify-content-between"
              style={{ borderBottom: "1px solid #F0F0F0", color: "#878787" }}
            >
              <h5
                className="fw-bold"
                style={{ cursor: "pointer" }}
                onClick={() => changeState()}
              >
                My Booking{" "}
              </h5>{" "}
              <h6>
                <i className="bi bi-chevron-right"></i>
              </h6>
            </div>
            <div
              className="p-2 d-flex"
              style={{ borderBottom: "1px solid #F0F0F0" }}
            >
              <h5
                className="fw-bold"
                style={{ color: "#878787", cursor: "pointer" }}
                onClick={() => changeState()}
              >
                <i className="bi bi-person-fill mx-2"></i> Account Settings
              </h5>
            </div>
            <div className="p-2 d-flex" onClick={()=>logout()} style={{ color: "#878787",cursor:"pointer" }}>
              <h5 className="fw-bold">
                {" "}
                <i className="bi bi-box-arrow-left mx-2"></i> Logout
              </h5>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-8 col-12 m-0 p-2">
          <div className="p-4 row" style={{ backgroundColor: "white" }}>
            {/* booking details */}
            {bookShow ? (
              <>
                <h4>My Booking</h4>
                <h5>Booking details are</h5>
                <h5>Hello, {account.username}. You Booking Details is</h5>
                {booking.map((val) => {
                  return (
                    <>
                      <div className="col-lg-6 col-12 my-2">
                        <h6 className="mt-3">Date- {val.date}</h6>
                        <h6 className="">Time- {val.time}</h6>
                        <h6 className="">People- {val.num}</h6>
                        <h6>Order- {val.req}</h6>
                      </div>
                    </>
                  );
                })}
              </>
            ) : null}

            {/* account setting */}
            {accSet ? (
              <>
                <h4 className="mb-3">Account Setting</h4>

                {/* password change */}
                <h5 onClick={() => show()} style={{cursor:"pointer"}}>Change Password</h5>
                {passChange ? (
                  <>
                    <form action="" onSubmit={(e) => save(e)}>
                      <div className="form-group">
                        <label htmlFor="">Enter First Password</label> <br />
                        <input
                          type="password"
                          className="form-control"
                          value={firstPass}
                          onChange={(e) => setFirstPass(e.target.value)}
                          placeholder="Enter First Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Enter New Password</label> <br />
                        <input
                          type="password"
                          value={newPass}
                          onChange={(e) => setNewPass(e.target.value)}
                          className="form-control"
                          placeholder="Enter Password"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Confirm New Password</label> <br />
                        <input
                          type="password"
                          value={confirmPass}
                          onChange={(e) => setConfPass(e.target.value)}
                          className="form-control"
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-danger">
                        Change Password
                      </button>
                    </form>
                  </>
                ) : null}

                {/* mail change */}
                <h5 onClick={() => show()} style={{cursor:"pointer"}} className="mt-3">Change Email</h5>
                {mailChange ? (
                  <>
                    <form action="" onSubmit={(e) => save1(e)}>
                      <div className="form-group">
                        <label htmlFor="">Enter First Email</label> <br />
                        <input
                          type="email"
                          className="form-control"
                          value={firstmail}
                          onChange={(e) => setfirstMail(e.target.value)}
                          placeholder="Enter First Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Enter New Mail</label> <br />
                        <input
                          type="email"
                          value={newMail}
                          onChange={(e) => setNewMail(e.target.value)}
                          className="form-control"
                          placeholder="Enter New Mail"
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-danger">
                        Change Mail
                      </button>
                    </form>
                  </>
                ) : null}
              </>
            ) : null}


          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
