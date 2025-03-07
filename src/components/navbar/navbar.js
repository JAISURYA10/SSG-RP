import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignOut from "./signout";
import navimg from './navimg.png';

function LeftNavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [signOutClicked, setSignOutClicked] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const resetSignOutState = () => {
    setSignOutClicked(false);
  };

  return (
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        borderRight: "1px solid #000000",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 1000,
        width: "200px",
        overflowY: "auto",
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <h1
        style={{
          margin: "10px 0",
          textAlign: "center",
          fontSize: "20px",
          color: "#2B3674",
        }}
      >
        REWARD <em>POINTS</em>
      </h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        <li
          style={{
            marginBottom: "20px",
            marginTop: "100px",
            marginRight: "40px",
            textAlign: "center",
          }}
        >
          <i
            className="bi bi-house-door-fill"
            style={{ marginRight: "8px", color: "#A3AED0" }}
          ></i>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: location.pathname === "/" ? "#2B3674" : "#A3AED0",
              fontSize: "16px",
              position: "relative",
              display: "inline-block",
            }}
            onClick={resetSignOutState}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            Dashboard
            {location.pathname === "/" && (
              <div
                style={{
                  position: "absolute",
                  right: "-68.5px",
                  top: "-5px",
                  height: "calc(100% + 10px)",
                  width: "4px",
                  backgroundColor: "#4318FF",
                  borderRadius: "2px",
                }}
              ></div>
            )}
          </Link>
        </li>
        <li
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <i
            className="bi bi-bar-chart-line-fill"
            style={{ marginRight: "8px", color: "#A3AED0" }}
          ></i>
          <Link
            to="/points"
            style={{
              textDecoration: "none",
              color: location.pathname === "/points" ? "#2B3674" : "#A3AED0",
              fontSize: "16px",
              position: "relative",
              display: "inline-block",
            }}
            onClick={resetSignOutState}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
            </svg>
            Points Container
            {location.pathname === "/points" && (
              <div
                style={{
                  position: "absolute",
                  right: "-28.5px",
                  top: "-5px",
                  height: "calc(100% + 10px)",
                  width: "4px",
                  backgroundColor: "#4318FF",
                  borderRadius: "2px",
                }}
              ></div>
            )}
          </Link>
        </li>
        <li
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            marginRight: "63px",
            textAlign: "center",
          }}
        >
          <i
            className="bi bi-card-text"
            style={{ marginRight: "32px", color: "#A3AED0" }}
          ></i>
          <button
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
              color: location.pathname.includes("/events")
                ? "#2B3674"
                : "#A3AED0",
              fontSize: "16px",
              marginBottom: "20px",
            }}
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-event-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
            Event Register
          </button>
          {dropdownOpen && (
            <ul style={{ padding: 0, paddingLeft: "30px", listStyle: "none" }}>
              <li
                style={{
                  marginBottom: "20px",
                  position: "relative",
                  marginRight: "10px",
                  marginLeft: "15px",
                  whiteSpace: "nowrap",
                }}
              >
                <Link
                  to="/events/event-master"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/events/event-master"
                        ? "#2B3674"
                        : "#A3AED0",
                    fontSize: "16px",
                  }}
                  onClick={resetSignOutState}
                >
                  Event Master
                  {location.pathname === "/events/event-master" && (
                    <div
                      style={{
                        position: "absolute",
                        right: "-73px",
                        top: "-5px",
                        height: "calc(100% + 10px)",
                        width: "4px",
                        backgroundColor: "#4318FF",
                        borderRadius: "2px",
                      }}
                    ></div>
                  )}
                </Link>
              </li>
              <li style={{ position: "relative" }}>
                <Link
                  to="/events/my-events"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/events/my-events"
                        ? "#2B3674"
                        : "#A3AED0",
                    fontSize: "16px",
                  }}
                  onClick={resetSignOutState}
                >
                  My Events
                  {location.pathname === "/events/my-events" && (
                    <div
                      style={{
                        position: "absolute",
                        right: "-63px",
                        top: "-5px",
                        height: "calc(100% + 10px)",
                        width: "4px",
                        backgroundColor: "#4318FF",
                        borderRadius: "2px",
                      }}
                    ></div>
                  )}
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div>
      
    </div>
      <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
          style={{ marginLeft: "px" }}
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
          />
        </svg>
        <SignOut
          signOutClicked={signOutClicked}
          setSignOutClicked={setSignOutClicked}
        />
      </div>
    </nav>
  );
}

export default LeftNavBar;
