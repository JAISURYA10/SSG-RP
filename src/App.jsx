// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftNavBar from "./components/navbar/navbar";
import NotiAndTheme from "./components/notiandtheme/notiandtheme"; // Import the NotiAndTheme component
import Dashboard from "./pages/Dashboard";
import PointsContainer from "./pages/PointsContainer";
import EventMaster from "./pages/eventsmaster";
import MyEvents from "./pages/myevents";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.style.setProperty(
      "--bg-color",
      newTheme === "light" ? "#F4F7FE" : "#2B3674"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      newTheme === "light" ? "#2B3674" : "#FFFFFF"
    );
  };

  return (
    <Router>
      <div
        style={{
          display: "flex",
          backgroundColor: theme === "light" ? "#F4F7FE" : "#2B3674",
          color: "var(--text-color)",
        }}
      >
        {" "}
        {/* Apply text color */}
        <LeftNavBar />
        <div
          style={{
            flex: 1,
            paddingLeft: "200px",
            backgroundColor: "var(--bg-color)",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/points" element={<PointsContainer />} />
            <Route path="/events/event-master" element={<EventMaster />} />
            <Route path="/events/my-events" element={<MyEvents />} />
          </Routes>
        </div>
        <NotiAndTheme toggleTheme={toggleTheme} theme={theme} />{" "}
        {/* Pass toggleTheme and theme */}
      </div>
    </Router>
  );
}

export default App;
