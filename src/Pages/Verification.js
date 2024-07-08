// src/Pages/Verification.js
import React, { useState } from "react";
import "../Styles/Verification.css";

const certificationData = {
  CERT123: {
    student_name: "Alice Johnson",
    domain: "Data Science",
    duration: "6 months",
    certification_number: "123-456-789",
    start_date: "2023-01-01",
    end_date: "2023-06-30",
  },
  CERT456: {
    student_name: "Bob Smith",
    domain: "Web Development",
    duration: "3 months",
    certification_number: "987-654-321",
    start_date: "2023-02-01",
    end_date: "2023-04-30",
  },
};

function Verification() {
  const [certId, setCertId] = useState("");
  const [certData, setCertData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setCertId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = certificationData[certId];
    if (data) {
      setCertData(data);
      setError("");
    } else {
      setCertData(null);
      setError("Certification ID not found.");
    }
  };

  return (
    <div className="verification-section" id="verification">
      <div className="verification-content">
        <h1>Certification Data Lookup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Certification ID:
            <input type="text" value={certId} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {certData && (
          <div className="cert-data">
            <h2>Certification Data</h2>
            <p>
              <strong>Student Name:</strong> {certData.student_name}
            </p>
            <p>
              <strong>Domain:</strong> {certData.domain}
            </p>
            <p>
              <strong>Duration:</strong> {certData.duration}
            </p>
            <p>
              <strong>Certification Number:</strong>{" "}
              {certData.certification_number}
            </p>
            <p>
              <strong>Start Date:</strong> {certData.start_date}
            </p>
            <p>
              <strong>End Date:</strong> {certData.end_date}
            </p>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Verification;
