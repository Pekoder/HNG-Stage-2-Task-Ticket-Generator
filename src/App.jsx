import "./App.css";
import MainLayout from "./MainLayout";
import TicketSelection from "./Pages/TicketSelection";
import FinalTicket from "./Pages/FinalTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AttendeeDetail from "./Pages/AttendeeDetail";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout  />}>
        <Route index element={<TicketSelection />} /> 
        <Route path="AttendeeDetail" element={<AttendeeDetail />} />
        <Route path="Ready" element={<FinalTicket />} /> 
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;