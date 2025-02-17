import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackComponent from "./BackComponent";

function MainLayout() {
  const location = useLocation();

  let title;
  let step;
  switch (location.pathname) {
    case "/":
      title = "Ticket Selection";
      step = 1;
      break;
    case "/AttendeeDetail":
      title = "Attendee Detail";
      step = 2;
      break;
    case "/Ready":
      title = "Ticket Ready";
      step = 3;
      break;
    default:
      title = "Default Title";
  }

  return (
    <div
    //  style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   minHeight: '100vh',
    //   padding: '20px',
    //   maxWidth: '1200px',
    //   margin: '0 auto'
    // }}
    >
      <div
      //  style={{
      //   width: '100%',
      //   maxWidth: '800px',
      //   marginBottom: '40px'
      // }}
      >
        <BackComponent title={title} step={step} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
