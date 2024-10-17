import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(99);
  const increment = () => {
    setCount(++count);
  };
  const decrement = () => {
    setCount(--count);
  };
  return (
    <div>
      <p>The current count is : {count}</p>
      <button
        style={{ width: "50px", height: "25px" }}
        className="btn"
        onClick={(e) => {
          increment();
        }}
      >
        +
      </button>
      <button
        style={{ width: "50px", height: "25px" }}
        className="btn"
        onClick={(e) => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
