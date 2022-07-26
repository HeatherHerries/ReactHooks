import React from "react";
import useInputState from "./useInputState";

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  return (
    <div>
      <h1>The value is... {email}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Submit</button>
    </div>
  );
}
