import React, { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState(" ");
  const styles = {
    backgroundColor: color,
  };
  const InitialColor = ["orange", "pink", "yellow"];
  const [colorList, setColorList] = useState(InitialColor);
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter the color" />
      <button onClick={() => setColorList([...colorList, color])}>ADDCOLOR</button>
      {colorList.map((clr, index) => (

        <ColorBox key={index} color={clr} />

      ))}


    </div>
  );
}
