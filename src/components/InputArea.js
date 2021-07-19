import React, { useState } from "react";

export default function InputArea() {
  const [inpValue, setInpValue] = useState("");
  const [state, setState] = useState([]);

  const handleInputChange = (e) => {
    setInpValue(e.target.value);
  };
  const addItem = () => {
    localStorage.setItem("items", inpValue);
    setState([...state, { text: localStorage.getItem("items")}]);
  };
  const deleteAll = () => setState([]);
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={addItem}>add</button>
      <button onClick={deleteAll}>delete all</button>
      {state.map((s, index) => (
        <p key={s.text.toString() + index}>{s.text}</p>
      ))}
    </div>
  );
}
