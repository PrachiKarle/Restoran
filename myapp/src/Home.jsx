import React from "react";
import "./App.css";
import {useNavigate} from 'react-router-dom';
import Abt from "./Abt";
import Book from "./Book";
import Team from "./Team";
import Service from "./Service";


const Home = () => {
  const nav=useNavigate();
  const goTo=()=>{
    nav('/book');
  }
  return (
    <>
      {/* hero section */}
      <div className="bg container-fluid m-0 p-0">
        <div className="bg1 row m-0 p-0">
          <div className="col-lg-5 m-lg-5 m-0 col-12 p-5">
            <h1 className="text-light display-4 fw-bold">
              Enjoy Our Delicious Meal
            </h1>
            <h6 className="text-light">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </h6>

            <button className="btn btn_1 text-light my-3 px-4 py-2 fw-bold" onClick={()=>goTo()}>
             BOOK A TABLE
            </button>
          </div>

          <div className="col-md-5 col-12 m-0 p-5 d-lg-flex d-none">
            <img
              src="images/10002.png"
              className="img-fluid w-100"
              style={{ height: "80%" }}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* services */}
      <Service />

      {/* About us */}
      <Abt />

      {/* Book a table */}
      <Book />

      {/* Team members */}
      <Team />
    </>
  );
};

export default Home;
