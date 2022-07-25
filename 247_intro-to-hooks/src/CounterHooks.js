import React, { useState } from "react";

function CounterHooks() {
  // Include peice of state
  // Include function to update that peice of state
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The Count Is: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default CounterHooks;
