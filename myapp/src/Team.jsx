import React from "react";
import Card1 from "./Card1";

let team=[
    {
        img:"images/team-1.jpg",
        nm:"Walter White",
        designation:"Master Chef",
    },
    {
        img:"images/team-2.jpg",
        nm:"William Anderson",
        designation:"Cook",
    },
    {
        img:"images/team-3.jpg",
        nm:"Sarah Jhonson",
        designation:"Patissier",
    },
    {
        img:"images/team-4.jpg",
        nm:"Sara Wilsson",
        designation:"Cook"
    }
]

const Team=()=>{
    return(
        <>
        <div className="row m-0 p-5" style={{backgroundColor:"#F5F5F5"}}>
            <div className="col-12 m-0 p-0 text-center">
                <b className="cur_text">Team Members</b>
                <h1 className="fw-bold">Our Master Chefs</h1>
            </div>
            <div className="col-12 m-0 p-0">
                <div className="row m-0 p-0">
                   {
                    team.map((val)=>{
                        return(
                            <>
                            <Card1 img={val.img} nm={val.nm} designation={val.designation}/>
                            </>
                        )
                    })
                   }
                </div>
            </div>
        </div>
        </>
    )
}

export default Team;