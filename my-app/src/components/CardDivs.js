import React from "react";
import "./CardDivs.css";


const CardDivs = props => (
<div className="card"  >
    <div className="img-container" >
      <img alt="" src={props.image}  />
    </div>
  </div>

);


export default CardDivs;