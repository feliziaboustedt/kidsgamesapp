import { useState } from "react";
import { colorToHex } from "../Helpers/ColorToHex";

export const CatchTheBubble = () => {
  const [targetColor, setTargetColor] = useState("");
  const [count, setCount] = useState(0);

  const colors = ["vit", "svart", "rosa", "orange", "lila", "blå"];

  const positionSelector = () => {
    const maxPosition = 400;
    const top = Math.floor(Math.random() * maxPosition);
    const left = Math.floor(Math.random() * maxPosition);

    return { top, left };
  };

  const [bubblePosition, setBubblePosition] = useState(() =>
    positionSelector()
  );

  const chooseColor = () => {
    const newColor = Math.floor(Math.random() * colors.length);
    return colors[newColor];
  };

  const handleClick = (color: string) => {
    if (color === targetColor) {
      setCount((point) => point + 1);
      setBubblePosition(positionSelector());
      setTimeout(() => {
        const newColor = chooseColor();
        setTargetColor(newColor);
      });
    }
  };

  return (
    <>
      <p>Poppade bubblor: {count}</p>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          border: "1px solid lightgray",
          overflow: "hidden",
          backgroundColor: "whitesmoke",
        }}
      >
        <div
          onClick={() => handleClick(targetColor)}
          style={{
            backgroundColor: colorToHex(targetColor),
            position: "absolute",
            top: bubblePosition.top,
            left: bubblePosition.left,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "1px solid black",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          }}
        ></div>
      </div>
    </>
  );
};
