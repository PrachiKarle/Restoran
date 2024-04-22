import React from "react";
import Card from "./Card";


let ans = [
    {
      cls: "images/img1.png",
      t: "Master Chefs",
    },
    {
      cls: "images/logo.png",
      t: "Quality Food",
    },
    {
      cls: "images/img2.png",
      t: "Online Order",
    },
    {
      cls: "images/img3.png",
      t: "24/7 Service",
    },
  ];

const Service=()=>{
    return(
        <>
        <div className="row m-0 p-5 bg-light">
        {ans.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-4">
                <Card cls={val.cls} t={val.t}/>
              </div>
            </>
          );
        })}
      </div>
        </>
    )
}

export default Service;