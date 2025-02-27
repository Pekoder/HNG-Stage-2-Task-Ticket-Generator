import React from "react";
import "./FinalTicket.css";
import { useLocation } from "react-router-dom";
import ticket from "./bg.svg";
import barCode from "./barCode.png"

function FinalTicket() {

  const { state } = useLocation();
  const { username, email, textArea, fileUrl } = state || {};
 const option = localStorage.getItem("selectedOption");
 const number = localStorage.getItem("selectedNumber");

  return (
    <div className="finalTicket">
      <div className="content">
        <h3>Your Ticket is Booked!</h3>

        <p>
          Check your email for a copy or you can <strong>download</strong>
        </p>
        <img src={ticket} className="ticket" alt="" />
        <div className="detail">
         <div className="sectionTitleOg">
            <h1>Techember Fest ”25</h1>
            <p className="date">
              📍 Walterson,Victoria Island | | March 15, 2025 | 7:00 PM
            </p>
          </div>
          <img src={fileUrl} className="userImg" alt="" />
        <div className="userData">
            <div className="secOne">
              <div className="username">
                  <p>Name:</p>
                  <h1>
                    {username}
                    </h1>
              </div>
              <div className="email">
              <p>Email:</p>
              <h1>
                {email}
              </h1>
              </div>
            </div>
            <div className="secTwo">
              <div className="ticketType">
           <p>Ticket Type:</p>
           <h1>
            {option}
            </h1>
              </div>
              <div className="ticketNumber">
                <p>Ticket For :</p>
                <h1>
                  {number} 
                </h1>
              </div>
            </div>
            <div className="secThree">
            <p>Special request?</p>
            <h1>{textArea} </h1>
            </div>

        </div>
          
        </div>
        <img src={barCode} className="barCode" alt="" />
      </div>
    </div>
  );
}

export default FinalTicket;
