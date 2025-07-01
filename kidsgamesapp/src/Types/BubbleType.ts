export type Bubble = {
  id: string;
  color: string;
  x: number;
  y: number;
};

export const colors = ["vit", "svart", "rosa", "orange", "lila"];

export const createBubble = (): Bubble => {
  return {
    id: crypto.randomUUID(),
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random() * 80,
    y: 100,
  };
};
