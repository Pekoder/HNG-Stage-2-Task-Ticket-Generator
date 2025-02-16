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
    <div>
      <BackComponent title={title} step={step} />
      <Outlet /> 
    </div>
  );
}

export default MainLayout;