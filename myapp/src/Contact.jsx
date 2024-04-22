import React from "react";
import Heading from "./Heading";
import axios from 'axios';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      sub: "",
      msg: "",
    };
  }
  render() {
    const saveForm = async (e) => {
      e.preventDefault();
      alert("Message Send Sucessfully");
      console.log(this.state);
      await axios.post("http://localhost:3000/contact", this.state);
      this.setState({
        name: "",
        email: "",
        sub: "",
        msg: "",
      });
    };
    return (
      <>
        <Heading val="Contact" />

        <div className="row m-0 p-5">
          <div className="col-12 m-0 p-0 text-center">
            <i className="cur_text fw-bold">Contact Us</i>
            <h2 className="fw-bold my-3">Contact For Any Query</h2>
          </div>
          <div className="col-12 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-4">
                <i className="cur_text fw-bold h6">Booking</i>
                <div className="d-flex">
                  <h6>book@restaron.in</h6>
                </div>
              </div>
              <div className="col-4">
                <i className="cur_text fw-bold h6">General</i>
                <div className="d-flex">
                  <h6>info@restaron.in</h6>
                </div>
              </div>
              <div className="col-4">
                <i className="cur_text fw-bold h6">Technical</i>
                <div className="d-flex">
                  <h6>tech@restaron.in</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 m-0 mt-5 p-0">
            <div className="row m-0 p-0">
              <div className="col-md-6 col-12 m-0 p-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000623.759652719!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1713777535023!5m2!1sen!2sbd" height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="col-md-6 col-12 m-0 p-0">
                <form action="" onSubmit={(e) => saveForm(e)}>
                  <div className="row m-0 p-0">
                    <div className="col-6 m-0 p-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-6 p-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="col-12 m-0 p-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        value={this.state.sub}
                        onChange={(e) => this.setState({ sub: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12 m-0 p-2">
                      <textarea
                        name=""
                        id=""
                        value={this.state.msg}
                        onChange={(e) => this.setState({ msg: e.target.value })}
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row m-0 p-2">
                    <div className="col-12 m-0 p-0">
                      <button
                        type="submit"
                        className="btn btn_1 w-100 py-3 text-light text-center"
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;