import React from "react";
import "./BackComponent.css";
import thumb from "./thumb.png";
import ticz from "./ticz.png";
import { useNavigate, useLocation } from "react-router-dom";

function BackComponent({ title, step }) {
  const navigate = useNavigate();
  const location = useLocation();
  const heigthStyle =
    (location.pathname === "/AttendeeDetail" && "680px") ||
    (location.pathname === "/Ready" && "900px");
  return (
    <div className="backComponent">
      <nav>
        <div className="nav-logo">
          <img className="logo1" src={thumb} alt="" />
          <img className="logo2" src={ticz} alt="" />
        </div>
        <button type="button" onClick={() => navigate("/Ready")}>
          My Ticket
        </button>
      </nav>
      <div
        className="wrapper"
        style={{
          height: heigthStyle,
        }}
      >
        <div className="header">
          <div className="pageLabel">
            <h1>{title}</h1>
            <p>
              Step <span>{step}</span>/3
            </p>
          </div>
          <div className="progressBar">
            <div
              className="progress"
              style={{
                width: `${step * 33.33}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackComponent;
