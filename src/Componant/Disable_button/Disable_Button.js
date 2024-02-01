import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Disable_Button.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    updateButtonState(newPassword);
  };

  const updateButtonState = (newPassword) => {
    const isPasswordValid = newPassword.length >= 8;
    setIsButtonEnabled(isPasswordValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className="container mt-5 justify-content-center mx-auto">
      <form onSubmit={handleSubmit}>
        {isSubmitted ? (
          <p className="text-center">Welcome!</p>
        ) : (
          <>
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="inpuEmail mx-auto d-flex justify-content-center "
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="mx-auto d-flex justify-content-center"
              />
            </label>
            <br />
            <button
              type="submit"
              className={`btn ${isButtonEnabled ? "enabled" : ""}`}
              onClick={() => updateButtonState(password)}
              disabled={!isButtonEnabled}
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
