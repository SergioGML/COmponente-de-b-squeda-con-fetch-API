import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>The counter is on: {count}</p>
      <button  style={{ marginLeft: "1rem" }} onClick={() => setCount(count + 1)}> Increment </button>
      <button  style={{ marginLeft: "1rem" }} onClick={() => setCount(count -1)}> Decrement </button>
    </section>
  );
}

export default Counter;
