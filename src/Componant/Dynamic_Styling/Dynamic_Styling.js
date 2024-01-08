import React, { useState } from "react";
import "./Dynamic_Styling.css"
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
    <div className="mx-auto  d-flex text-center">
      <h1 style={{ color: inputError ? "red" : "black" }}>Course Goal</h1>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          value={value}
          className="Dynamic-styling-input mx-auto text-center"
          onChange={handleValue}
          style={{ background: inputError ? "rgba(241, 143, 143, 0.8)" : "white" }}
        />
        <button className="Dynamic-styling-button" type="submit">Submit</button>
      </form>
      {inputError && <p style={{ color: "red" }}>Input cannot be empty</p>}
      <ul>
        {submittedValues.map((submittedValue, index) => (
          <li key={index}>{submittedValue}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dynamic_Styling;
