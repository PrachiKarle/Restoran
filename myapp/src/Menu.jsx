import React, { useState } from "react";
import Heading from "./Heading";
import "./App.css";
import Menus from "./Menus";

const menus = [
  "images/10001.jpg",
  "images/menu-2.jpg",
  "images/menu-3.jpg",
  "images/menu-4.jpg",
];
const menus1 = [
  "images/menu-5.jpg",
  "images/menu-6.jpg",
  "images/menu-7.jpg",
  "images/menu-8.jpg",
];
const menus2 = [
  "images/menu-6.jpg",
  "images/menu-3.jpg",
  "images/menu-4.jpg",
  "images/menu-7.jpg",
];

const Menu = () => {
  const [breakfast, setBreakfast] = useState(true);
  const [launch, setLaunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const Set1 = () => {
    setBreakfast(true);
    setLaunch(false);
    setDinner(false);
  };
  const Set2 = () => {
    setBreakfast(false);
    setLaunch(true);
    setDinner(false);
  };
  const Set3 = () => {
    setBreakfast(false);
    setLaunch(false);
    setDinner(true);
  };
  return (
    <>
      <Heading val="Menu" />

      <div className="row m-0 p-5 mb-5">
        <div className="col-12 m-0 p-0 text-center">
          <i className="cur_text fw-bold">Food Menu</i>
          <h1>Most Popular Items</h1>
        </div>

        <div className="col-6 m-auto">
          <div className="row p-4 pb-0 m-0 menu1">
            <div
              className="col-3 m-0 mx-3 p-0 pb-2 d-flex menu"
              onClick={() => Set1()}
            >
              <div className="mt-2" style={{ height: "40px", width: "60px" }}>
                <img
                  src="images/menu1.png"
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
              <div className="mx-2">
                <b className="fw-normal">Popular</b> <br />
                <b>BreakFast</b>
              </div>
            </div>
            <div
              className="col-3 m-0 mx-3 p-0 pb-2 d-flex menu"
              onClick={() => Set2()}
            >
              <div className="" style={{ height: "50px", width: "50px" }}>
                <img
                  src="images/menu2.png"
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
              <div className="mx-2">
                <b className="fw-normal">Special</b> <br />
                <b>Launch</b>
              </div>
            </div>
            <div
              className="col-3 m-0 mx-3 p-0 pb-2 d-flex menu"
              onClick={() => Set3()}
            >
              <div className="" style={{ height: "50px", width: "50px" }}>
                <img
                  src="images/logo.png"
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
              <div className="mx-2">
                <b className="fw-normal">Lovely</b> <br />
                <b>Dinner</b>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {breakfast
              ? menus.map((val) => {
                  return (
                    <>
                      <Menus img={val} />
                    </>
                  );
                })
              : null}

            {launch
              ? menus1.map((val) => {
                  return (
                    <>
                      <Menus img={val} />
                    </>
                  );
                })
              : null}

            {dinner
              ? menus2.map((val) => {
                  return (
                    <>
                      <Menus img={val} />
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
