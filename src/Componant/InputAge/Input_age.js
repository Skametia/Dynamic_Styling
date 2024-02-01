import React, { useState, useRef } from "react";
import "./Input_age.css";

const Input_age = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [submitted, setSubmitted] = useState([]);
  const [ageError, setAgeError] = useState(false);
  const collegeNameRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setAgeError(false);
  };

  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "" || age < 0) {
      setAgeError(true);
      alert("Invalid input. Both name and age are required.");
    } else {
      const newItem = `${name} - ${age} - ${collegeName}`;
      setSubmitted((prevSubmitted) => [...prevSubmitted, newItem]);
      setName("");
      setAge("");
      setCollegeName("");
      setAgeError(false);
      collegeNameRef.current.focus();
    }
  };

  return (
    <div className="row">
      <div className="sana-container mx-auto col-md-8 ">
        <h1 className="" style={{ color: ageError ? "red" : "black" }}>
          Enter Details
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center mx-auto">
            <input
              className="sana_age-styling-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              style={{
                backgroundColor: ageError
                  ? "rgba(241, 143, 143, 0.8)"
                  : "white",
              }}
            />
          </div>

          <input
            className="sana_age-styling-input"
            type="number"
            placeholder="Age"
            value={age}
            style={{
              backgroundColor: ageError ? "rgba(241, 143, 143, 0.8)" : "white",
            }}
            onChange={handleAgeChange}
          />

          <input
            className="sana_age-styling-input"
            type="text"
            placeholder="College Name"
            value={collegeName}
            onChange={handleCollegeNameChange}
            ref={collegeNameRef}
          />

          <button type="submit" className="Dynamic-styling-button">
            Submit
          </button>
          {ageError && <p style={{ color: "red" }}>Input cannot be empty</p>}
        </form>
      </div>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center mx-auto sana-ul">
          <ul>
            {submitted.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Input_age;
