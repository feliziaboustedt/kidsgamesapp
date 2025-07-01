import { useRef, useState } from "react";
import { createBubble, type Bubble } from "../Types/BubbleType";
import { BubbleItem } from "./BubbleItem";
import "./BubblePop.css";

export const BubblePop = () => {
  const [count, setCount] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(false);

  const timerRef = useRef<number | null>(null);
  const bubbleRef = useRef<number | null>(null);

  const startGame = () => {
    if (gameRunning) return;

    setGameRunning(true);
    setCount(0);
    setTimeLeft(30);
    setBubbles([]);

    timerRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    bubbleRef.current = window.setInterval(() => {
      setBubbles((b) => {
        if (b.length >= 5) return b;
        return [...b, createBubble()];
      });
    }, 1200);
  };

  const stopGame = () => {
    setGameRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (bubbleRef.current) clearInterval(bubbleRef.current);
    timerRef.current = null;
    bubbleRef.current = null;

    setTimeout(() => setBubbles([]), 1000);
  };

  const popSound = new Audio("public/SoundEffects/sharp-pop-328170.mp3");

  const handlePop = (id: string) => {
    if (!gameRunning) return;

    popSound.currentTime = 0;
    popSound.load();

    popSound.play().catch((err) => {
      console.error("Audio error:", err);
      // Eventuellt retry-logik eller användarfeedback
    });

    setBubbles((b) => b.filter((bubble) => bubble.id !== id));
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Tid kvar: {timeLeft}</p>
      <p>Poppade bubblor: {count}</p>

      {!gameRunning && <button onClick={startGame}>Spela</button>}

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
        {bubbles.map((bubble) => (
          <BubbleItem
            key={bubble.id}
            id={bubble.id}
            color={bubble.color}
            x={bubble.x}
            onPop={handlePop}
            gameRunning={gameRunning}
          />
        ))}
      </div>
      {timeLeft <= 0 && (
        <div className="result-screen">
          <h2>Spelet är slut!</h2>
          <p>Du poppade {count} bubblor!</p>
          <button onClick={startGame}>Spela igen</button>
        </div>
      )}
    </div>
  );
};
