import { useState } from "react";

const ClickCounter = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setState(state + 1);
        }}
      >
        Count {state}
      </button>
    </div>
  );
};

export default ClickCounter;
