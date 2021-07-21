import React, { useEffect, useState } from "react";
import Cart from "./subComponents/cart";

export default function InputArea() {
  const [inpVal, setInpVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState(<div></div>);

  const handleInput = (e) => {
    setInpVal(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTodo = () => {
    setTasks([...tasks, { value: inpVal, isSuccess: false }]);
    setInpVal("");
  };
  useEffect(() => {
    const handleCompleted = (data) => {
      console.log("data", data);
      setTasks(
        tasks.map((t) => {
          if (t.value === data) {
            return { value: t.value, isSuccess: true };
          }
          return t;
        })
      );
    };
    const handleDeleted = (data) => {
      setTasks(tasks.filter((t) => t.value !== data));
    };
    setTodo(
      tasks.map((item) => (
        <Cart
          key={JSON.stringify(item)}
          handleDeleted={handleDeleted}
          handleCompleted={handleCompleted}
          isSuccess={item.isSuccess}
          value={item.value}
        />
      ))
    );
  }, [tasks]);

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
      {todo}
    </div>
  );
}
