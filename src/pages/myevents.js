import React, { useState } from "react";

function EventMaster() {
  const events = [
    {
      id: 1,
      name: "Event 1",
      date: "2024-03-15",
      maxPoints: 100,
      activityName: "Activity 1",
      activityType: "Type 1",
      activityCategory: "Category 1",
      organizer: "Organizer 1",
      available: "Yes",
    },
    {
      id: 2,
      name: "Event 2",
      date: "2024-03-20",
      maxPoints: 150,
      activityName: "Activity 2",
      activityType: "Type 2",
      activityCategory: "Category 2",
      organizer: "Organizer 2",
      available: "Yes",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const totalPages = Math.ceil(events.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = events.slice(indexOfFirstRow, indexOfLastRow);

  const openPopup = (event) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ marginTop: "10px", marginBottom: "20px", color: "#2B3674",padding:'25px' }}>
      <h2 style={{marginLeft:"20px",marginTop:"-10px"}}>
        Event Registration{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>{" "}
        My Events
      </h2>
      {/* Widget Box */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          marginTop:"40px",
        }}
      >
        <h3>My Events</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search by Activity Code"
            style={{
              marginRight: "10px",
              padding: "5px",
              borderRadius: "10px",
              background: "#F4F7FE",
            }}
          />
          <input
            type="text"
            placeholder="Search by Activity Name"
            style={{
              marginRight: "10px",
              padding: "5px",
              borderRadius: "10px",
              background: "#F4F7FE",
            }}
          />
          <select
            style={{
              padding: "5px",
              borderRadius: "10px",
              background: "#F4F7FE",
            }}
          >
            <option value="">Sort by Category</option>
          </select>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#F4F7FE",
            }}
          >
            {/* Table headers */}
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  S.No
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Event Name
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Max Points
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Activity Name
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Activity Type
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Activity Category
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Organizer
                </th>
                <th
                  style={{
                    border: "1px solid #F4F7FE",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    border: "none",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {currentRows.map((event, index) => (
                <tr key={event.id}>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {indexOfFirstRow + index + 1}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.date}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    Max ({event.maxPoints})
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.activityName}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.activityType}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.activityCategory}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.organizer}
                  </td>
                  <td
                    style={{
                      border: "1px solid #F4F7FE",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {event.available}
                  </td>
                  <td
                    style={{
                      border: "none",
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    <button
                      style={{
                        background: "#4318FF",
                        borderRadius: "5px",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => openPopup(event)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Table footer */}
            <tfoot>
              <tr>
                <td
                  colSpan="8"
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #dddddd",
                    padding: "20px",
                  }}
                >
                  Page {currentPage} of {totalPages}
                </td>
                <td
                  colSpan="10"
                  style={{
                    textAlign: "right",
                    borderTop: "1px solid #F4F7FE",
                    padding: "8px",
                  }}
                >
                  {" "}
                  Rows per page:
                  <select
                    onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      background: "#F4F7FE",
                    }}
                  >
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="150">150</option>
                  </select>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Popup for event details */}
      {popupVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closePopup}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "20px",
              width: "50%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedEvent.name}</h3>
            <p>Event Date: {selectedEvent.date}</p>
            {/* Add more event details */}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventMaster;
