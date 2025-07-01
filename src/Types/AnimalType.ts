export type Animal = {
  id: string;
  name: string;
  soundURL: string;
  imageURL: string;
};

export const animals: Animal[] = [
  {
    id: crypto.randomUUID(),
    name: "katt",
    soundURL: "/AnimalSounds/kitten-sound-2-354217.mp3",
    imageURL: "src/assets/pexels-pixabay-45201.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "tupp",
    soundURL: "/AnimalSounds/roaster-crows-363351.mp3",
    imageURL: "src/assets/pexels-pixabay-34770.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "get",
    soundURL: "/AnimalSounds/mouton-sound-234960.mp3",
    imageURL: "src/assets/pexels-pixabay-86594.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "hund",
    soundURL: "/AnimalSounds/single-dog-deep-bark-sound-effect-325248.mp3",
    imageURL: "src/assets/pexels-chevanon-1108099.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "ko",
    soundURL: "/AnimalSounds/cow-sound-234947.mp3",
    imageURL: "src/assets/pexels-pixabay-36347.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "fågel",
    soundURL: "/AnimalSounds/bird-sound-in-a-forest-309240.mp3",
    imageURL: "src/assets/pexels-ganajp-4079150.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "uggla",
    soundURL: "/AnimalSounds/sound-of-hooting-owls-in-nighttime-hd-263177.mp3",
    imageURL: "src/assets/pexels-markb-106686.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "häst",
    soundURL: "/AnimalSounds/horse-whinny-sound-effect-339727.mp3",
    imageURL: "src/assets/pexels-dibert-635499.jpg",
  },
];
