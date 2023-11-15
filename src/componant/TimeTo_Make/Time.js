import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const classes = {
  input: "yourInputClass",
};

const Time = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const adduserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredUserAge);
  };

  const usernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userageChange = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={usernameChange} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" onChange={userageChange} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>

      {/* Display entered data */}
      <div>
        <p>Entered Username: {enteredUsername}</p>
        <p>Entered Age: {enteredUserAge}</p>
      </div>
    </div>
  );
};

export default Time;
