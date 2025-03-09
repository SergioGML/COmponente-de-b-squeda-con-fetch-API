import React from "react";
import { useState } from "react";

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "Check" : "Unchecked"}
    </button>
  );
}

export default ToggleButton;
