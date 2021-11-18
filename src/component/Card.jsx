import React from "react";

export default function Card({header,desc,logo,inputHandler,value}) {

  return (
    <div className='card shadow m-1 text-center' style={{ width: "18rem" }}>
      <div className="card-body">
      <div className="d-flex">
          <div className="p-2 d-flex justify-content-center flex-column">
          {logo}
          </div>
          <div style={{textAlign:"left"}}>
            <h5 className="card-title d-inline justify-content-around d-flex">{header}
                  <input
                          type="radio"
                          name="card"
                          className="form-check-input ms-2"
                          value={value}
                          onChange={inputHandler} required
                  />
                  </h5>
              
                  <p className="card-text">
                 {desc}
                  </p>
          </div>
        </div>
      </div>
    </div>

  );
}
