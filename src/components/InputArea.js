import React, { useEffect, useState } from "react";

export default function InputArea() {
  const [inpVal, setInpVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInput = (e) => {
    setInpVal(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTodo = () => {
    setTasks([...tasks, inpVal]);
    setInpVal("");
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };
  return (
    <div>
      <input
        className="border-2"
        type="text"
        value={inpVal}
        onChange={handleInput}
      />
      <button className="border-2 " onClick={handleAddTodo}>
        add
      </button>
      <button className="border-2" onClick={handleDeleteAll}>
        delete all
      </button>
      {tasks.map((s) => (
        <p key={s.toString() + Math.random() * 1000}>{s}</p>
      ))}
    </div>
  );
}
