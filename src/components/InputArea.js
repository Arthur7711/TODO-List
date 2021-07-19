import React, { useState } from "react";

export default function InputArea() {
  const [inpValue, setInpValue] = useState("");
  const [state, setState] = useState([]);

  const handleInputChange = (e) => {
    setInpValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={() => setState([...state, { text: inpValue }])}>
        add
      </button>
      <button onClick={() => setState([])}>delete all</button>
      {state.map((s, index) => (
        <p key={s.text.toString() + index}>{s.text}</p>
      ))}
    </div>
  );
}
