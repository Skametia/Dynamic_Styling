// Input.js

import React from 'react';

const Input = ({ type, label, placeholder, value, onChange }) => (
  <div className="mb-3">
    <label htmlFor={label} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className="form-control"
      id={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
