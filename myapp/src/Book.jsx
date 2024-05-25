import React from "react";
import Axios from "axios";
import "./App.css";

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      num: "",
      req: "",
    };
  }

  render() {
    const saveBooking = async (e) => {
      e.preventDefault();
      var flag = false;
      var acc = await Axios.get("http://localhost:3000/account");
      for (let x of acc.data) {
        if (x.Login == true) {
          flag = true;
          await Axios.patch(`http://localhost:3000/account/${x.id}`, {
            Booking: [...x.Booking,this.state]
          });
          this.setState({
            date: "",
            time: "",
            num: "",
            req: "",
          });
        }
      }
      if (!flag) {
        alert("Please Sign in First");
      } else {
        alert("Table Booking done successfully!!!");
      }
    };
    return (
      <>
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 m-0 p-0 img1">
            <img
              src="images/book.jpg"
              className="img-fluid w-100 h-100"
              alt=""
            />
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
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
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
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                    className="form-control"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="time"
                    value={this.state.time}
                    onChange={(e) => this.setState({ time: e.target.value })}
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
                    value={this.state.num}
                    onChange={(e) => this.setState({ num: e.target.value })}
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
                    value={this.state.req}
                    onChange={(e) => this.setState({ req: e.target.value })}
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
  }
}

export default Book;
