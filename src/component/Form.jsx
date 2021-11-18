import React, { useState } from "react";
import Card from "./Card"

export default function Form() {
  const [data, setData] = useState({
    fname: "",
    mname: "",
    lname: "",
    address: "",
    unit: "",
    city: "",
    card:"",
    state: "",
    zipcode: "",
    phone_no: "",
    email: "",
    preferrried_deductible: "",
    dob: "",
    residency_status: "",
    industry: "",
    occupation: "",
    education: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("data submitted successfully!!", data);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((preval) => {
      return { ...preval, [name]: value };
    });
  };

  return (
    <form onSubmit={submitHandler} className="needs-validation">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="mb-3 was-validated">
              <label for="firstname" className="form-label">
                First Name
              </label>
              <span>*</span>

              <input
                type="text"
                name="fname"
                className="form-control shadow-sm"
                id="firstname"
                placeholder=""
                value={data.fname}
                onChange={inputHandler} required
              />
              <div className="invalid-feedback">
                  Please Enter Your First Name
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Middle Name
              </label>
              <span>*</span>
              <input
                type="text"
                name="mname"
                className="form-control"
                id="middlename"
                placeholder=""
                value={data.mname}
                onChange={inputHandler}  
              />
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="mb-3 was-validated">
              <label for="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <span>*</span>
              <input
                type="text"
                name="lname"
                className="form-control"
                id="lastname"
                placeholder=""
                value={data.lname}
                onChange={inputHandler} required
              />
              <div className="invalid-feedback">
                  Please Enter Last Name
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8">
            {" "}
            <div className="mb-3 was-validated">
              <label for="address" className="form-label">
                Street Address
              </label>
              <span>*</span>
              <input
                type="text"
                name="address"
                className="form-control"
                id="address"
                placeholder=""
                value={data.address}
                onChange={inputHandler} required
              />
              <div className="invalid-feedback">
                  Please Enter your Address
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            {" "}
            <div className="mb-3 was-validated">
              <label for="unit" className="form-label">
                Unit #
              </label>

              <input
                type="text"
                name="unit"
                className="form-control"
                id="unit"
                placeholder=""
                value={data.unit}
                onChange={inputHandler} required
              />
              <div className="invalid-feedback">
                  Please Enter Unit
                </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="mb-3 was-validated">
              <label for="city" className="form-label">
                City
              </label>
              <span>*</span>
              <input
                type="text"
                name="city"
                className="form-control"
                id="city"
                placeholder=""
                value={data.city}
                onChange={inputHandler} required
              />
              <div className="invalid-feedback">
                  Please Enter City Name
                </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="mb-3 was-validated">
              <label for="state" className="form-label">
                State
              </label>
              <span>*</span>
              <select
                className="form-select"
                name="state"
                onChange={inputHandler}
                aria-label="Default select example" required
              >
                <option selected disabled>
                  Open this select menu
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="mb-3 was-validated">
              <label for="code" className="form-label">
                Zip Code
              </label>
              <span>*</span>
              <input
                type="text"
                name="zipcode"
                className="form-control"
                id="code"
                placeholder=""
                value={data.zipcode}
                onChange={inputHandler}
                pattern="^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$"
                required
              />
              <div className="invalid-feedback">
                  Please Enter a valid Zip-code
                </div>
            </div>
          </div>
           </div>

          <div className="row">
            <div className="col-12 col-sm-6">
              {" "}
              <div className="mb-3 was-validated">
                <label for="phone" className="form-label">
                  Phone Number
                </label>
                <span>*</span>
                <input
                  type="tel"
                  name="phone_no"
                  className="form-control"
                  id="phone"
                  placeholder=""
                  value={data.phone_no}
                  onChange={inputHandler}
                  pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$" 
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Valid Mobile no
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-3 was-validated">
                <label for="email" className="form-label">
                  Email Address
                </label>
                <span>*</span>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder=""
                  value={data.email}
                  onChange={inputHandler}
                  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                   required
                />
                <div className="invalid-feedback">
                  Please provide Valid Email ID
                </div>
             
            </div>
            </div>
              </div>
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="preferried" className="form-label">
                    Preferried Deductible
                  </label>
                  <span>*</span>
                  <select
                    className="form-select"
                    name="preferrried_deductible"
                    onChange={inputHandler}
                    aria-label="Default select example" required
                  >
                  <div className="invalid-feedback">
                  Please select any option provided
                </div>
                    <option  disabled>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="date" className="form-label">
                    Date of Birth
                  </label>
                  <span>*</span>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    id="date"
                    placeholder=""
                    value={data.dob}
                    onChange={inputHandler} required
                  />
                  <div className="invalid-feedback">
                  Please select valid Date of birth
                </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="residencystatus" className="form-label">
                    Residency Status
                  </label>
                  <span>*</span>
                  <select
                    className="form-select"
                    name="residency_status"
                    onChange={inputHandler}
                    aria-label="Default select example" required
                  >
                  <div className="invalid-feedback">
                  Please select any option provided
                </div>
                    <option  disabled>Select Option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="industry" className="form-label">
                    Industry
                  </label>
                  <span>*</span>
                  <select
                    className="form-select"
                    name="industry"
                    onChange={inputHandler}
                    aria-label="Default select example" required
                  >
                  <div className="invalid-feedback">
                  Please select any option provided
                </div>
                    <option disabled>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="occupation" className="form-label">
                    Occupation
                  </label>
                  <span>*</span>
                  <select
                    className="form-select"
                    name="occupation"
                    onChange={inputHandler}
                    aria-label="Default select example" required
                  >
                  <div className="invalid-feedback">
                  Please select any option provided
                </div>
                    <option  disabled>Select</option>
                    <option value="1">Doctor</option>
                    <option value="2">Engineer</option>
                    <option value="3">Farmer</option>
                    <option value="3">Teacher</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="mb-3 was-validated">
                  <label for="education" className="form-label">
                    Education
                  </label>
                  <span>*</span>
                  <select
                    className="form-select"
                    name="education"
                    onChange={inputHandler}
                    aria-label="Default select example" required
                  >
                  <div className="invalid-feedback">
                  Please select any option provided
                </div>
                    <option  disabled>Select</option>
                    <option value="1">10th</option>
                    <option value="2">12th</option>
                    <option value="3">Graduation</option>
                    <option value="3">Post Graduation</option>
                    <option value="3">PHD</option>
                  </select>
                </div>
              </div>
          
        
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-wrap p-3">
        <Card header={"Home"} desc={ "In nature, nothing is perfect and everything is perfect."} logo={<i class="fas fa-house-damage" style={{ fontSize: "40px" }}></i>} inputHandler={inputHandler} value={"A"}/>

        <Card header={"Condo"} desc={ "Forget not that the earth delights to feel your bare feet and the winds long to play with your hair"} logo={<i class="far fa-building" style={{ fontSize: "40px" }}></i>} inputHandler={inputHandler} value={"B"}/>

        <Card header={"HO5"} desc={ "We don’t inherit the earth from our ancestors, we borrow it from our children"} logo={<i class="fas fa-hotel" style={{ fontSize: "40px" }}></i>} inputHandler={inputHandler} value={"C"}/>
        
    
      </div>
      <div className="text-center">
      <button className="btn btn-primary btn-lg" type="submit" style={{borderRadius:"40%"}} >
        Continue
      </button>
      </div>
    </form>
  );
}
