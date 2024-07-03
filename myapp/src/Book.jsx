import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Book = () => {
  //all booking details
  const nav=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setState1] = useState("");
  const [time, setState2] = useState("");
  const [num,setState]=useState('');
  const [req,setState3]=useState('');

//save Booking
  const saveBooking = (e) => {
    e.preventDefault();
    alert("Table Book successfully");
    setName('');
    setEmail('');
    setState('');
    setState1('');
    setState2('');
    setState3('');
    nav('/');
  };


  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-md-6 col-12 m-0 p-0 img1">
          <img src="images/book.jpg" className="img-fluid w-100 h-100" alt="" />
        </div>
        <div
          className="col-md-6 col-12 m-0 p-5"
          style={{ backgroundColor: "#0F172B" }}
        >
          <b className="fw-bold cur_text">Reservation</b>
          <h1 className="text-light fw-bold">Book A Table Online</h1>

          <form className="my-4" onSubmit={(e) => saveBooking(e)}>
            <div className="form-row d-flex">
              <div className="col">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setState1(e.target.value)}
                  className="form-control"
                  placeholder="Date"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setState2(e.target.value)}
                  className="form-control"
                  placeholder="Time"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <select
                  name=""
                  id=""
                  className="form-control"
                  required
                  value={num}
                  onChange={(e) =>setState(e.target.value )}
                >
                  <option value="0">No of People</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  value={req}
                  onChange={(e) =>setState3( e.target.value)}
                  placeholder="Special Request"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-row text-center">
              <div className="col w-100">
                <button
                  type="submit"
                  className="btn btn_1 px-4 py-2 text-light form-control fw-bold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Book;
