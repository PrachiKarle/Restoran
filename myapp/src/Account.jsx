import axios from "axios";
import React, { useEffect, useState } from "react";

const Account = () => {
  const [account, setAcc] = useState([]);

  const [book, setBook] = useState(true);
  const [setting, setSetting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var acc = await axios.get("http://localhost:3000/account");
    for (let x of acc.data) {
      if (x.Login == true) {
        var res = await axios.get(`http://localhost:3000/account/${x.id}`);
        setAcc(res.data);
      }
    }
  };
  return (
    <>
      <div className="row p-4 m-0" style={{ backgroundColor: "#F1F3F6" }}>
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
              <h5 className="fw-bold">My Booking </h5>{" "}
              <h6>
                <i className="bi bi-chevron-right"></i>
              </h6>
            </div>
            <div
              className="p-2 d-flex"
              style={{ borderBottom: "1px solid #F0F0F0" }}
            >
              <h5 className="fw-bold" style={{ color: "#878787" }}>
                <i className="bi bi-person-fill mx-2"></i> Account Settings
              </h5>
            </div>
            <div className="p-2 d-flex" style={{ color: "#878787" }}>
              <h5 className="fw-bold">
                {" "}
                <i className="bi bi-box-arrow-left mx-2"></i> Logout
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-12 m-0 p-2">
          <div className="p-4 " style={{ backgroundColor: "white" }}>
            {book ? (<>
               
               <h5></h5>
            
            </>) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
