import React, { useState } from "react";
import "./TicketSelection.css";
import { useNavigate } from "react-router-dom";

function TicketSelection() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
const handleNumberChange = (event) => {
    const value = event.target.value;
    setSelectedNumber(value);
  
}
const handleSubmit = () => {
  localStorage.setItem("selectedOption", selectedOption);
  localStorage.setItem("selectedNumber", selectedNumber);

  
const selData ={
  option :selectedOption,
  number:selectedNumber,
}

  navigate("/AttendeeDetail", {
    state: selData,
  });
};

  return (
    <div className="ticketSelection">
      <div className="container">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1>Techember Fest ”25</h1>

            <p>
              Join us for an unforgettable experience at Techember ! Secure your
              spot now.
            </p>
            <p className="date">
              📍 Walterson,Victoria Island | | March 15, 2025 | 7:00 PM
            </p>
          </div>
          <div className="break" />
          <div className="ticketOptions">
            <p>Select Ticket Type:</p>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  id="option1"
                  value="REGULAR ACCESS"
                  checked={selectedOption === "REGULAR ACCESS"}
                  onChange={handleChange}
                />
                <label htmlFor="option1">
                  <h1>Free</h1>
                  <p>REGULAR ACCESS</p>
                  <p>20/52</p>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="option2"
                  value="VIP ACCESS"
                  checked={selectedOption === "VIP ACCESS"}
                  onChange={handleChange}
                />
                <label htmlFor="option2">
                  <h1>$150</h1>
                  <p>VIP ACCESS</p>
                  <p>10/52</p>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="option3"
                  value="VVIP ACCESS"
                  checked={selectedOption === "VVIP ACCESS"}
                  onChange={handleChange}
                />
                <label htmlFor="option3">
                  <h1>$200</h1>
                  <p>VVIP ACCESS</p>
                  <p>15/52</p>
                </label>
              </div>
            </div>
          </div>
          <div className="ticketNumber">
            <label htmlFor="number-picker">Number of Ticket:</label>
            <input
              list="numbers"
              id="number-picker"
              value={selectedNumber}
              onChange={handleNumberChange}
            />
            <datalist id="numbers">
              {[1, 2].map((num) => (
                <option key={num} value={num} />
              ))}
            </datalist>
          </div>
          <div className="buttons">
            <button className="one" onClick={() => window.reload}>
              Cancel
            </button>
            <button className="two" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
