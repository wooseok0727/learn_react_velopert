import React from "react";
import ColorBox from "./comps/ColorBox";
import SelectColors from "./comps/SelectColors";
// import SelectColors02 from "./comps/SelectColors02";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
