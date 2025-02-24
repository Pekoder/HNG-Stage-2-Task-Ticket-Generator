import React from "react";
import "./FinalTicket.css";
import { useLocation } from "react-router-dom";
import ticket from "./bg.svg";
import barCode from "./barCode.png"

function FinalTicket() {
  // const submittedData = JSON.parse(localStorage.getItem("submittedTicket")) || {};
  const location = useLocation();
  const submittedData = location.state || {};
  return (
    <div className="finalTicket">
      <div className="content">
        <h3>Your Ticket is Booked!</h3>

        <p>
          Check your email for a copy or you can <strong>download</strong>
        </p>
        <img src={ticket} className="ticket" alt="" />
        <div className="detail">


        </div>
        <img src={barCode} className="barCode" alt="" />
      </div>
    </div>
  );
}

export default FinalTicket;
{
  /* <p
style={{
  color:"white",
}}
>{submittedData.username}</p>
<p
style={{
  color:"white",
}}
>{submittedData.email}</p>
<p
style={{
  color:"white",
}}
>{submittedData.textArea}</p> */
}
