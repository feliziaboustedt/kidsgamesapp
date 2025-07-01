import { useState } from "react";
import { colorToHex } from "../Helpers/ColorToHex";

export const ColorGame = () => {
  const colors = ["röd", "blå", "gul", "grön", "lila", "orange", "vit", "rosa"];

  const colorSelector = (exclude?: string): string => {
    const available = colors.filter((c) => c !== exclude);
    return available[Math.floor(Math.random() * available.length)];
  };

  const [targetColor, setTargetColor] = useState<string>(colorSelector());
  const [feedback, setFeedback] = useState<string>("");
  const [feedbackType, setFeedbackType] = useState<
    "correct" | "wrong" | "neutral"
  >("neutral");

  const handleClick = (color: string) => {
    const audioSrc =
      color === targetColor
        ? "/SoundEffects/correct-6033.mp3"
        : "/SoundEffects/wrong-answer-126515.mp3";

    new Audio(audioSrc).play().catch(console.error);

    if (color === targetColor) {
      setFeedback("Bra jobbat!");
      setFeedbackType("correct");

      setTimeout(() => {
        const newCol = colorSelector(targetColor);
        setTargetColor(newCol);
        setFeedback("");
        setFeedbackType("neutral");
      }, 500);
    } else {
      setFeedback("Prova igen!");
      setFeedbackType("wrong");
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        padding: "1rem",
        width: "25rem",
        height: "25rem",
      }}
    >
      <h1>Välj en färg...</h1>
      <h2 style={{ color: colorToHex(targetColor) }}>Tryck på {targetColor}</h2>

      <div
        style={{
          gap: "10px",
          margin: "1rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "auto",
        }}
      >
        {colors.map((color) => {
          const isCorrect =
            feedbackType !== "neutral" &&
            color === targetColor &&
            feedbackType === "correct";
          const isWrong = feedbackType === "wrong" && color !== targetColor;

          return (
            <button
              key={color}
              onClick={() => handleClick(color)}
              aria-label={color}
              style={{
                backgroundColor: colorToHex(color),
                border: isCorrect
                  ? "4px solid green"
                  : isWrong
                  ? "4px solid red"
                  : "2px solid #ccc",
                borderRadius: 50,
                width: "6rem",
                height: "6rem",
                padding: "1rem",
                cursor: "pointer",
                transition: "border 0.3s",
              }}
            >
              {color}
            </button>
          );
        })}
      </div>
      <h3
        style={{
          color:
            feedbackType === "correct"
              ? "green"
              : feedbackType === "wrong"
              ? "red"
              : "#000",
          transition: "color 0.3s",
        }}
      >
        {feedback}
      </h3>
    </section>
  );
};
