import React, { useState, useEffect } from "react";

const CounterUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("El contador cambió a: ", `${count}`);
  }, [count]);

  return (
    <section>
      <p>EL contador cambió a: {count}</p>
      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Increment{" "}
      </button>
    </section>
  );
};

export default CounterUseEffect;
