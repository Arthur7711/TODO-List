import React, { useState } from "react";

export default function InputArea() {
  const [inpValue, setInpValue] = useState(null);
  const handleInputChange = (e) => {
    setInpValue(e.target.value);
  };
  const handleAdd = () => {
    console.log(inpValue);
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleAdd}>add</button>
      <p>{inpValue}</p>
    </div>
  );
}
