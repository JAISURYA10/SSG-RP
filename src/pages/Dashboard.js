import React from "react";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", color: "#2B3674" }}>
      <h2 style={{ marginLeft: "50px", marginTop: "20px" }}>Dashboard</h2>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {/* Main Widget */}
        <div
          className="widget"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "100px",
            width: "650px",
            height: "350px",
            marginTop: "30px",
            marginRight: "100px",
            marginLeft: "80px",
            position: "relative",
          }}
        >
          {/* Left Square Box containing the bars */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "27%",
              transform: "translate(-50%, -50%)",
              width: "50%",
              height: "60%",
              border: "1px dotted #2B3674",
              borderRadius: "10px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* First Bar */}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "30%",
                width: "80px",
                height: "calc(11000 / 15000 * 100%)", // Adjusted height to fit the scale
                backgroundColor: "#FF975C",
                borderRadius: "0px",
              }}
            ></div>
            {/* Second Bar */}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "60%",
                width: "80px",
                height: "calc(9000 / 15000 * 100%)", // Adjusted height to fit the scale
                backgroundColor: "#4318FF",
                borderRadius: "0px",
              }}
            ></div>
          </div>

          {/* Range labels */}
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 30%)",
              left: "3%",
              bottom: "190%",
              top: "30%",
              transform: "translateY(-50%)",
            }}
          >
            <div>-600</div>
            <div>-500</div>
            <div>-400</div>
            <div>-300</div>
            <div>-200</div>
            <div>-100</div>
            <div>-0</div>
          </div>

          {/* Right Empty Dotted Square Box */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "25%",
              transform: "translate(50%, -50%)",
              width: "40%",
              height: "50%",
              border: "3px dotted #2B3674",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ textAlign: "center" }}>Points Details</div>
            <div style={{ marginTop: "20px" }}>Average Reward Points :</div>
            <div style={{ marginTop: "20px" }}>
              Total Reward Points Earned :
            </div>
            <div
              style={{
                background: "#4318FF",
                borderRadius: "5px",
                color: "white",
                border: "none",
                marginTop: "20px",
                width: "200px",
                height: "30px",
                marginLeft: "35px",
              }}
            >
              Position #145/240
            </div>
          </div>
        </div>

        {/* Last Box with Table */}
        <div
          className="widget"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "450px",
            height: "300px",
            marginRight: "30px",
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          <h3>Detailed Points Split Up</h3>
          <h4>2023-2024 Even Semester</h4>
          <div
            className="table-wrapper"
            style={{ height: "calc(100% - 72px)", overflow: "auto" }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    Count Points
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    Category 1
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    10
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    Category 2
                  </td>
                  <td
                    style={{
                      borderBottom: "1px solid #2B3674",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    15
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Box with Points Summary */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            width: "650px",
            height: "250px",
            marginTop: "400px",
            marginLeft: "-1230px",
            marginRight: "300px",
          }}
        >
          <h3
            style={{ textAlign: "center", marginTop: "10px", fontSize: "18px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-card-list"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
            </svg>
            Points Summary
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            {/* Blue Box */}
            <div
              style={{
                width: "150px",
                height: "100px",
                backgroundColor: "#4318FF",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "white", fontSize: "14px" }}>Total Points</h4>
              <p style={{ color: "white", margin: "5px 0", fontSize: "16px" }}>
                RP 2238
              </p>
            </div>
            {/* Green Box */}
            <div
              style={{
                width: "150px",
                height: "100px",
                backgroundColor: "#01B574",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "white", fontSize: "14px" }}>
                Balance Points
              </h4>
              <p style={{ color: "white", margin: "5px 0", fontSize: "16px" }}>
                RP 1274
              </p>
            </div>
            {/* Orange Box */}
            <div
              style={{
                width: "150px",
                height: "100px",
                backgroundColor: "#FF975C",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "white", fontSize: "14px" }}>
                Redeemed Points
              </h4>
              <p style={{ color: "white", margin: "5px 0", fontSize: "16px" }}>
                RP 1903
              </p>
            </div>
            {/* Red Box */}
            <div
              style={{
                width: "150px",
                height: "100px",
                backgroundColor: "#F65656",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "white", fontSize: "14px" }}>
                Penalties Points
              </h4>
              <p style={{ color: "white", margin: "5px 0", fontSize: "16px" }}>
                RP 00
              </p>
            </div>
          </div>
          <div
            style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}
          >
            <p style={{ marginTop: "10px" }}>
              Eligible carry in points from previous semester (2023 - ODD) RP
              1000
            </p>
            <p>
              Eligible carry forward points to next semester (2023 - EVEN) RP
              1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
