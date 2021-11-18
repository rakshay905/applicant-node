import React, { useState } from "react";
import ApplicantInfo from "./ApplicantInfo";
import Rates from "./Rates";
export default function DashBoard() {
  const [key, setKey] = useState("1");
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex justify-content-center flex-column text-info text-center me-5" onClick={()=>{
          setKey("1")
        }}>
          <i
            className="fas fa-user-circle large"
            style={{ fontSize: "40px" }}
          ></i>
          <p>Applicant</p>
        </div>

        <div className="d-flex justify-content-center flex-column text-secondary text-center" onClick={()=>{
          setKey("2")
        }}>
          <i
            className="fas fa-shield-alt large"
            style={{ fontSize: "40px" }}
          ></i>
          <p> Rates </p>
        </div>
      </div>
      <div className="card">
        {key == "1" && <ApplicantInfo />}
        {key == "2" && <Rates />}
      </div>
    </div>
  );
}
