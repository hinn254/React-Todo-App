import React, { useState } from "react";

const InputField = ({ textValue = (f) => f }) => {
  const [value, setValue] = useState("");

  const sendText = () => {
    textValue(value);
    setValue("");
  };

  return (
    <div className="input-wrapper">
      <input
        className="input"
        placeholder="Add item..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendText}>ADD</button>
    </div>
  );
};

export default InputField;
