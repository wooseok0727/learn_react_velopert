import React, { useState } from "react";
// import Counter from "./comps/Counter";
import Info from "./comps/Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
