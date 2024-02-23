// LoginForm.js

import React, { useState } from "react";
import Input from "./Input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit" className="btn btn-primary">
        Submit..
      </button>
    </form>
  );
};

export default LoginForm;
