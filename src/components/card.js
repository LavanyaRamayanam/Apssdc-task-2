import React from "react";
import data from "../data.json";
import logo from "../logo.svg";
import logo1 from "../angular.png";
import {Link} from "react-router-dom";
let Cards=()=>{
    let cardsData=data.details;
    console.log(cardsData);
    let images=[logo,logo1];
    return(
        <div>
            <h1 className="text-primary">cards</h1>
            <div className="row">
            {cardsData.map((values,index)=>(
            
             <div className="col-sm-10 col-md-4 m-1" key={index}>
              <div className="card">
                  <img src={images[index]}/>
                  <h1>{values.Card.name}</h1>
                  <h3 className="text-secondary">{values.Card.role}</h3>
                  <h4 className="text-primary">{values.Card.email}</h4>
                  <Link to={{pathname:"/Resume",personcard:{id:index}}}className="btn btn-sm btn-secondary">cilckme!</Link>
             </div>
             </div>
            
             ))}
             

            </div>
            </div>
           
            

    );
};
export default Cards;