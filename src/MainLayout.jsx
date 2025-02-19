import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackComponent from "./BackComponent";
import styled from "styled-components";

const Comp = styled.div`
  position: relative;
  top: -95%; 
  @media (min-width: 600px) {
    top: -65%;
  }
`;

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
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "0%",
        }}
      >
        <BackComponent title={title} step={step} />
      </div>
      <Comp>
        <Outlet />
      </Comp>
    </div>
  );
}

export default MainLayout;