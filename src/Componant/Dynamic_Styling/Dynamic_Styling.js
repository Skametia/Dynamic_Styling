import React, { useState } from "react";
import "./Dynamic_Styling.css";

const Dynamic_Styling = () => {
  const [value, setValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);
  const [inputError, setInputError] = useState(false);

  const handleValue = (e) => {
    setValue(e.target.value);
    setInputError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setInputError(true);
    } else {
      setSubmittedValues((prevValues) => [...prevValues, value]);
      setValue("");
      setInputError(false);
    }
  };

  return (
    <div className="centered-container">
      <div>
        <h1
          className="centered-text"
          style={{ color: inputError ? "red" : "black" }}
        >
          Course Goal
        </h1>
        <form onSubmit={handleSubmit} className="sana-form ">
          <input
            type="text"
            value={value}
            className="Dynamic-styling-input "
            onChange={handleValue}
            style={{
              background: inputError ? "rgba(241, 143, 143, 0.8)" : "white",
            }}
          />
          <button className="Dynamic-styling-button" type="submit">
            Submit
          </button>
        </form>
        {inputError && <p style={{ color: "red" }}>Input cannot be empty</p>}
        {!inputError && <p style={{ color: "green" }}>Great...</p>}
        <ul>
          {submittedValues.map((submittedValue, index) => (
            <li key={index}>{submittedValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dynamic_Styling;
