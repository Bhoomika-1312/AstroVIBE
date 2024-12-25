// src/Approuter.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Td7 from "./TD7"; // Import the Td7 page
import App from "./App"; // Import the App component
import Night from "./Night.jsx";
import Moon from "./moon.jsx";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  {/* Main App route */}
        <Route path="/td7" element={<Td7 />} />
        <Route path="/night" element={<Night />} />
        <Route path="/moon" element={<Moon />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
