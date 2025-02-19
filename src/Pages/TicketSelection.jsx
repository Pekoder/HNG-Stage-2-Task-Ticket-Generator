import React, { useState } from "react";
import "./TicketSelection.css";

function TicketSelection({ onOptionChange }) {

  const [selectedOption, setSelectedOption] = useState('');

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
        <div className='ticketOptions'>
        <p>Select Ticket Type:</p>
            <div className="radio-group">
              <div>

                <input
                    type="radio"
                    id="option1"
                    value="option1"
                    checked={selectedOption === 'option1'}
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
                    value="option2"
                    checked={selectedOption === 'option2'}
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
                    value="option3"
                    checked={selectedOption === 'option2'}
                    onChange={handleChange}
                />
                <label htmlFor="option3">
                <h1>$200</h1>
                  <p>VVIP ACCESS</p>
                  <p>10/52</p>
                </label>
                    </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TicketSelection;
