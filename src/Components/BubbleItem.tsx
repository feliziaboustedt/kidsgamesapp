import "./BubblePop.css";

type BubbleProps = {
  id: string;
  color: string;
  x: number;
  onPop: (id: string) => void;
  gameRunning: boolean;
};

export const BubbleItem = ({
  id,
  color,
  x,
  onPop,
  gameRunning,
}: BubbleProps) => {
  return (
    <div
      className="bubble"
      onClick={() => gameRunning && onPop(id)}
      onAnimationEnd={() => onPop(id)}
      style={{
        backgroundColor: color,
        left: `${x}%`,
      }}
    />
  );
};
