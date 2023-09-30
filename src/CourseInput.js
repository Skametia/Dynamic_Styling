import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setValid(true); 
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${isValid ? "" : "invalid"}`}>
          <label style={{ color: isValid ? "red" : "black" }}>Course Goal</label>
          <input
            type="text"
            onChange={goalInputChangeHandler}
            value={enteredValue}
            placeholder="Write Here....."
          />
        </div>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default CourseInput;