import React, { useState } from "react";
import "./TicketSelection.css";
import { useNavigate } from "react-router-dom";

function TicketSelection({ onOptionChange }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value); // Update local state
    // onOptionChange(value); // Notify the parent component
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
              onChange={(e) => setSelectedNumber(e.target.value)}
              // placeholder="Select a number"
            />
            <datalist id="numbers">
              {[1, 2].map((num) => (
                <option key={num} value={num} />
              ))}
            </datalist>
          </div>
          <div className="buttons">
            <button className="one" onClick={() => window.reload }>
              Cancel
            </button>
            <button className="two" onClick={() => navigate("/AttendeeDetail")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
