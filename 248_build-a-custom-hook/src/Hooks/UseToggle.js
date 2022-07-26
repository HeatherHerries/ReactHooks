import { useState } from "react";

function useToggle(initialVal = false) {
  // Call useState "reserve peice of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return peice of state AND function to toggle it
  return [state, toggle];
}

export default useToggle;
