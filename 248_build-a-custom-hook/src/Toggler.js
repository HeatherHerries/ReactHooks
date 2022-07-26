import React from "react";
import useToggle from "./Hooks/UseToggle";

function Toggler() {
  const [happy, toggleHappy] = useToggle(true);
  const [heartbroken, toggleHeartbroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleHappy}>{happy ? "😃" : "🙁"}</h1>
      <h1 onClick={toggleHeartbroken}>{heartbroken ? "💔" : "❤️"}</h1>
    </div>
  );
}

export default Toggler;
