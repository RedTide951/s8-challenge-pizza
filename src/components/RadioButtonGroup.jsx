import React, { useState } from "react";
import "./RadioButtonGroup.css";

const RadioButtonGroup = ({ options, name, label, onChange }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="radio-button-group">
      <label className="radio-label">
        {label} <span className="required">*</span>
      </label>
      <div className="radio-options">
        {options.map((option) => (
          <label
            key={option.value}
            className={`radio-button ${
              selected === option.value ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleSelect(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
