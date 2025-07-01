import { useState } from "react";
import { animals, type Animal } from "../Types/AnimalType";
import "./GuessTheAnimal.css";

export const GuessTheAnimalSound = () => {
  const [options, setOptions] = useState<Animal[]>([]);
  const [correct, setCorrect] = useState<Animal | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [runGame, setRunGame] = useState(false);
  const [score, setScore] = useState(0);

  const getRandomAnimals = (animals: Animal[], number: number) => {
    return [...animals].sort(() => 0.5 - Math.random()).slice(0, number);
  };

  function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  const startGame = () => {
    setRunGame;
    if (runGame) return;
    playGame();
  };

  const playGame = () => {
    const chosen = getRandomAnimals(animals, 1)[0]; // rätt djur

    const others = animals
      .filter((a) => a.id !== chosen.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    const picks = shuffleArray([chosen, ...others]);
    setOptions(picks);
    setCorrect(chosen);

    new Audio(chosen.soundURL).play().catch(console.error);
  };

  const checkAnswer = (picked: Animal) => {
    if (!correct) return;

    setFeedback(picked.id);
    if (picked.id === correct.id) {
      setScore((s) => s + 1);
      new Audio("/SoundEffects/correct-6033.mp3").play().catch(console.error);
    } else {
      new Audio("/SoundEffects/wrong-answer-126515.mp3")
        .play()
        .catch(console.error);
    }
  };
  return (
    <>
      <div
        style={{
          height: 500,
          width: "30rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "lightyellow",
        }}
      >
        <h1>Gissa Djuret</h1>
        <p>Klicka på knappen för att starta spelet</p>
        <button
          onClick={startGame}
          style={{
            background: "lightgray",
            color: "purple",
            borderRadius: "20px",
            border: "1px solid darkgray",
            padding: "0.5rem",
            width: "4rem",
            height: "3rem",
            cursor: "pointer",
          }}
        >
          Spela
        </button>

        {options.length > 0 && (
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {options.map((a) => (
              <div
                key={a.id}
                onClick={() => checkAnswer(a)}
                className={
                  feedback === a.id
                    ? a.id === correct?.id
                      ? "btn correct"
                      : "btn wrong"
                    : "btn"
                }
                onAnimationEnd={() => setFeedback(null)}
              >
                <img
                  src={a.imageURL}
                  alt={a.name}
                  style={{
                    width: "8rem",
                    height: "8rem",
                    borderRadius: "30px",
                  }}
                />
              </div>
            ))}
          </div>
        )}
        <h2>Antal rätt: {score}</h2>
      </div>
    </>
  );
};
