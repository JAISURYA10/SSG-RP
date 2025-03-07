// SignOut.js
import React from "react";
import { Link } from "react-router-dom";

function SignOut({ signOutClicked, setSignOutClicked }) {
  const handleSignOut = () => {
    console.log("Signing out...");
    // Implement your sign-out logic here
    setSignOutClicked(true);
  };

  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: signOutClicked ? "#2B3674" : "#A3AED0", // Change color based on the state
        fontSize: "16px",
        marginLeft: "50px",
        cursor: "pointer",
      }}
      onClick={handleSignOut}
    >
      Sign Out
    </Link>
  );
}

export default SignOut;
